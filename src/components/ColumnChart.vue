<template>
  <div>
    <b-container><Highcharts :options="displayChart"></Highcharts></b-container><br />
    <b-container>
    <b-card header="操作面板" style="overflow-x: auto">
      <template #header>
        <!-- {{ "操作面板" }} -->
      <b-row>
        <b-col cols="2"><b-form-input v-model="chartOptions.title.text"></b-form-input></b-col>
        <b-col cols="2"><b-form-input v-model="chartOptions.yAxis.title.text"></b-form-input></b-col>
        <b-col cols="8" class="d-flex justify-content-end">
        <b-button variant="primary" size="sm" @click="addItem()" style="margin-right: 10px;">新增1行</b-button>  
        <b-button variant="danger" size="sm" @click="deleteItem()">刪除1行</b-button>
        </b-col>
        </b-row>
      </template>
      <template #footer>
        <b-button variant="primary" size="sm" @click="addRow()" style="margin-right: 10px">新增1列</b-button>
        <b-button variant="danger" size="sm" @click="deleteRow()">刪除1列</b-button>
      </template>
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="10">
          <b-container class="forBcontainer">
            <div class="forXarray col-1" v-for="(item, index) in chartOptions.xAxis.categories" :key="index">
              <b-form-input v-model="chartOptions.xAxis.categories[index]"></b-form-input>
            </div>
          </b-container>
        </b-col>
      </b-row>
      <b-row v-for="(item, index) in chartOptions.series" :key="index">
        <b-col cols="2">
          <b-form-input v-model="item.name"></b-form-input>
        </b-col>
        <b-col cols="10">
          <b-container class="forBcontainer">
            <div class="forXarray col-1" v-for="(value, i) in item.data" :key="i">
              <b-form-input v-model.number="item.data[i]"></b-form-input>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </b-card>
    </b-container>
  </div>
</template>

<style scoped>
.forBcontainer {
  /* overflow-x: auto; */
  white-space: nowrap;
}
.forXarray {
  display: inline-block;
  /* float: none; */
}
</style>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
exportingInit(Highcharts);

export default {
  components: {
    Highcharts: Chart,
  },
  mounted() {
    this.processChart();
  },
  data() {
    return {
      displayChart: {},
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "消費支出統計",
        },
        // subtitle: {
        //   text: "Source: WorldClimate.com",
        // },
        xAxis: {
          categories: ["1月", "2月", "3月", "4月", "5月"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "花費金額(元)",
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} 元</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "房租水電",
            data: [10650, 11000, 10040, 12000, 9500],
          },
          {
            name: "伙食費",
            data: [6000, 7500, 13550, 5200, 11000],
          },
          {
            name: "帳單",
            data: [4500, 17000, 850, 9000, 6215],
          },
          {
            name: "其它開銷",
            data: [3400, 1200, 1200, 6500, 2500],
          },
        ],
      },
    };
  },
  methods: {
    addItem() {
      const count = this.chartOptions.xAxis.categories.length;
      this.chartOptions.xAxis.categories.push(`${count+1}月`);
      this.chartOptions.series.forEach((e) => e.data.push(""));
    },
    deleteItem() {
      this.chartOptions.xAxis.categories.pop();
      this.chartOptions.series.forEach((e) => e.data.pop());
    },
    addRow() {
      const count = this.chartOptions.series.length;
      this.chartOptions.series.push({ name: `項目${count+1}`, data: [] });
      const length01 = this.chartOptions.series.length;
      for (let i = 0; i < this.chartOptions.xAxis.categories.length; i++) {
        this.chartOptions.series[length01 - 1].data.push("");
      }
    },
    deleteRow() {
      this.chartOptions.series.pop();
    },
    processChart() {
      const chartType = this.chartOptions.chart.type;
      const chartWidth = this.getExportChartWidth(chartType);
      this.displayChart = this.getChart(this.chartOptions, chartWidth);
    },
  },
};
</script>
