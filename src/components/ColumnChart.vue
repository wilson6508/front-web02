<template>
  <div>
    <Highcharts :options="chartOptions"></Highcharts><br />
    <b-card header="操作面板">
      <b-row>
        <b-col cols="1"></b-col>
        <!-- <b-col cols="1" v-for="(item, index) in chartOptions.xAxis.categories" :key="index">
          <b-form-input v-model="chartOptions.xAxis.categories[index]"></b-form-input>
        </b-col> -->
        <b-col cols="1" v-for="(item, index) in chartOptions.series" :key="index">
          <b-form-input v-model="item.name"></b-form-input>
        </b-col>
        <b-col cols="2"><b-button size="sm" style="margin-right: 10px" @click="addRow()">新增1行</b-button>
          <b-button size="sm" @click="deleteRow()">刪除1行</b-button>
        </b-col>
      </b-row>
      <!-- <b-row v-for="(item, index) in chartOptions.series" :key="index"> -->
        <b-row v-for="(value, i) in chartOptions.xAxis.categories" :key="i">
        <b-col cols="1">
          <!-- <b-form-input v-model="item.name"></b-form-input> -->
          <b-form-input v-model="chartOptions.xAxis.categories[i]"></b-form-input>
        </b-col>
        <b-col cols="1" v-for="(item, index) in chartOptions.series" :key="index">
          <b-form-input v-model.number="item.data[i]"></b-form-input>
        </b-col>
        <!-- <b-col cols="1" v-for="(value, i) in item.data" :key="i">
          <b-form-input v-model.number="item.data[i]"></b-form-input>
        </b-col> -->
      </b-row><br>
      <b-row>
          <b-col cols="1"><b-button size="sm" @click="addItem()">新增1列</b-button></b-col>
      </b-row><br>
      <b-row>
          <b-col cols="1"><b-button size="sm" @click="deleteItem()">刪除1列</b-button></b-col>
      </b-row>
      </b-card>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
exportingInit(Highcharts);

export default {
  components: {
    Highcharts: Chart,
  },
  data() {
    return {
      displayChart: {},
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Monthly Average Rainfall",
        },
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        xAxis: {
          categories: ["1月", "2月", "3月", "4月"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Rainfall (mm)",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
            name: "東京",
            data: [49.9, 71.5, 106.4, 129.2],
          },
          {
            name: "紐約",
            data: [83.6, 78.8, 98.5, 93.4],
          },
          {
            name: "倫敦",
            data: [48.9, 38.8, 39.3, 41.4],
          },
          {
            name: "柏林",
            data: [42.4, 33.2, 34.5, 39.7],
          },
        ],
      },
    };
  },
  methods: {
    addItem() {
      this.chartOptions.xAxis.categories.push("QQQ");
      this.chartOptions.series.forEach(e => e.data.push(""));
    },
    deleteItem() {
      this.chartOptions.xAxis.categories.pop();
      this.chartOptions.series.forEach(e => e.data.pop());
    },
    addRow() {
        this.chartOptions.series.push({name: "AAA", data:[]});
        const length01 = this.chartOptions.series.length;
        for (let i = 0 ; i < this.chartOptions.xAxis.categories.length ; i++) {
            this.chartOptions.series[length01-1].data.push("");
        }
    },
    deleteRow() {
        this.chartOptions.series.pop();
    }
  },
};
</script>
