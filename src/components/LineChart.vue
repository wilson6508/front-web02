<template>
  <div>
    <b-container><Highcharts :options="displayChart"></Highcharts></b-container
    ><br />
    <b-container>
      <b-card style="overflow-x: auto">
        <template #header>
          <b-row>
            <b-col cols="2"><b-form-input v-model="chartOptions.title.text" placeholder="圖表標題"></b-form-input></b-col>
            <b-col cols="2"><b-form-input v-model="chartOptions.yAxis.title.text" placeholder="y軸說明"></b-form-input></b-col>
            <b-col cols="8" class="d-flex justify-content-end">
              <b-button variant="primary" size="sm" @click="addItem()" style="margin-right: 10px">新增1行</b-button>
              <b-button variant="danger" size="sm" @click="deleteItem()">刪除1行</b-button>
            </b-col>
          </b-row>
        </template>
        <template #footer>
          <b-row>
            <b-col cols="4">
              <b-button variant="primary" size="sm" @click="addRow()" style="margin-right: 10px">新增1列</b-button>
              <b-button variant="danger" size="sm" @click="deleteRow()">刪除1列</b-button>
            </b-col>
            <b-col cols="8" class="d-flex justify-content-end">
              <b-button variant="dark" size="sm" @click="deleteAll()">全部清除</b-button>
            </b-col>
          </b-row>
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
          <b-col cols="2"><b-form-input v-model="item.name"></b-form-input></b-col>
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
        title: {
          text: "股價折線圖",
        },
        // subtitle: {
        //   text: "Source: thesolarfoundation.com",
        // },
        yAxis: {
          title: {
            text: "年底收盤價(元)",
          },
        },
        xAxis: {
          categories: [
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年",
            "2019年",
            "2020年",
          ],
          crosshair: true,
          // accessibility: {
          //   rangeDescription: "Range: 2010 to 2017",
          // },
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            // pointStart: 2010,
          },
        },
        series: [
          // {
          //   name: "2330 台積電",
          //   data: [105.5, 141, 143, 181.5, 229.5, 225.5, 331, 530],
          // },
          {
            name: "2412 中華電信",
            data: [93.1, 94, 99.1, 101.5, 106, 113, 110, 109],
          },
          {
            name: "0050 元大台灣50",
            data: [58.7, 66.85, 60.75, 71.8, 82.15, 75.5, 96.95, 122.25],
          },
          {
            name: "0053 元大電子",
            data: [24.3, 28.9, 26, 29.34, 35.33, 30.5, 42.17, 57.7],
          },
          {
            name: "0056 元大高股息",
            data: [23.06, 24.16, 21.85, 23.07, 25, 23.94, 28.97, 29.95],
          },
          // {
          //   name: "2498 宏達電",
          //   data: [141, 142, 78, 79, 73.1, 35.35, 38.45, 30.75],
          // },
          // {
          //   name: "2886 兆豐金",
          //   data: [25.1, 24.45, 21.25, 23, 24.05, 25.95, 30.6, 29.8],
          // },
          // {
          //   name: "Project Development",
          //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          // },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    processChart() {
      const chartWidth = this.getExportChartWidth("line");
      this.displayChart = this.getChart(this.chartOptions, chartWidth);
    },
    addItem() {
      const count = this.chartOptions.xAxis.categories.length;
      this.chartOptions.xAxis.categories.push(`第${count + 1}年`);
      this.chartOptions.series.forEach((e) => e.data.push(""));
    },
    deleteItem() {
      this.chartOptions.xAxis.categories.pop();
      this.chartOptions.series.forEach((e) => e.data.pop());
    },
    addRow() {
      const count = this.chartOptions.series.length;
      this.chartOptions.series.push({ name: `項目${count + 1}`, data: [] });
      const length01 = this.chartOptions.series.length;
      for (let i = 0; i < this.chartOptions.xAxis.categories.length; i++) {
        this.chartOptions.series[length01 - 1].data.push("");
      }
    },
    deleteRow() {
      this.chartOptions.series.pop();
    },
    deleteAll() {
      this.chartOptions.series = [];
      this.chartOptions.xAxis.categories = [];
      this.chartOptions.title.text = "";
      this.chartOptions.yAxis.title.text = "";
      this.addItem();
      this.addRow();
    }
  },
};
</script>
