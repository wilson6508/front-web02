<template>
  <div>
    <b-card header="AAA點圖表右上下載">
      <b-row>
        <b-col cols="6">
          <Highcharts :options="displayChart"></Highcharts>
        </b-col>
        <b-col cols="6">
          <b-table
            id="my-table"
            :items="items"
            :fields="fields"
            :striped="false"
            head-variant="light"
            responsive="lg"
          >
            <template #cell(name)="row">
              <b-form-input v-model="row.item.name"></b-form-input>
            </template>
            <template #cell(y)="row">
              <b-form-input
                type="number"
                v-model.number="row.item.y"
              ></b-form-input>
            </template>
            <template #cell(action)="row">
              <b-button variant="danger" size="sm" @click="deleteItem(row.item)"
                >刪除</b-button
              >
            </template>
          </b-table>
          <span>圖表標題 : </span><input v-model="chartOptions.title.text" />
          <b-button
            variant="primary"
            size="sm"
            style="float: right"
            @click="addItem()"
            >添加項目</b-button
          >
        </b-col>
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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [],
          },
        ],
      },
      fields: [
        {
          key: "name",
          label: "項目",
          class: "text-center",
          thStyle: "width: 30rem",
        },
        {
          key: "y",
          label: "數值",
          class: "text-center",
          thStyle: "width: 30rem",
        },
        {
          key: "action",
          label: "增減項目",
          class: "text-center",
          thStyle: "width: 20rem",
        },
      ],
      items: [
        { id: 1, name: "金融股", y: 15 },
        { id: 2, name: "ABC123", y: 20 },
        { id: 3, name: "車用電子", y: 30 },
        { id: 4, name: "傳產", y: 40 },
      ],
      idNumber: 5,
    };
  },
  mounted() {
    this.setChartValue();
    this.processChart();
  },
  updated() {
    this.setChartValue();
    this.processChart();
  },
  methods: {
    setChartValue() {
      this.chartOptions.series[0].data = [];
      for (const obj of this.items) {
        this.chartOptions.series[0].data.push(obj);
      }
    },
    processChart() {
      const chartType = this.chartOptions.chart.type;
      const chartWidth = this.getExportChartWidth(chartType);
      this.displayChart = this.getChart(this.chartOptions, chartWidth);
    },
    addItem() {
      this.items.push({
        id: this.idNumber,
        name: `項目${this.idNumber}`,
        y: 0,
      });
      this.idNumber++;
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    },
  },
};
</script>
