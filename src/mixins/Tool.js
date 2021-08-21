import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import offlineExporting from "highcharts/modules/offline-exporting";
exportingInit(Highcharts);
offlineExporting(Highcharts);

export default {
    methods: {
        getExportChartWidth(chartType) {
            let width = 0;
            switch (chartType) {
                case 'column':
                    width = 1400;
                    break;
                case 'pie':
                    width = 700;
                    break
                    case 'line':
                        width = 1400;
                        break;
                default:
                    width = 1400;
            }
            return width;
        },
        getChart(higDataObj, width) {
            higDataObj.exporting = {
                sourceWidth: width,
                buttons: {
                    contextButton: {
                        menuItems: [{
                                text: '下載PNG圖檔',
                                onclick() {
                                    this.exportChartLocal();
                                }
                            },
                            // {
                            //     text: '下載JPEG圖檔',
                            //     onclick() {
                            //         this.exportChartLocal({
                            //             type: 'image/jpeg'
                            //         });
                            //     }
                            // }
                        ]
                    }
                }
            };
            higDataObj.navigation = {
                menuStyle: {
                    padding: '0px'
                },
                menuItemStyle: {
                    padding: '5px'
                }
            };
            higDataObj.credits = {
                enabled: false
            };
            return higDataObj;
        },
    }
};