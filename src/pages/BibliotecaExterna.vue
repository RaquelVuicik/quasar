<template>
  <q-page>
    <div class="row q-mt-md q-col-gutter-md">
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="donut"
              width="500"
              :options="chartOptionsP"
              :series="seriesP"
              >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md q-col-gutter-md">
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="line"
              height="315"
              :options="chartOptionsL"
              :series="seriesL"
            >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="radialBar"
              height="350"
              :options="chartOptionsM"
              :series="seriesM"
            >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md q-col-gutter-md">
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="heatmap"
              height="315"
              :options="chartOptionsH"
              :series="seriesH"
            >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card>
          <q-card-section>
            <apexchart
              type="radar"
              height="315"
              :options="chartOptionsR"
              :series="seriesR"
            >
            </apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PaginaBiliotecaExterna',
  data () {
    return {
      series: [{
        name: 'Calças',
        data: [440, 550, 570, 560, 610, 580, 630, 600, 660]
      }, {
        name: 'Blusas',
        data: [760, 850, 1010, 980, 870, 1050, 910, 1140, 940]
      }, {
        name: 'Calçados',
        data: [350, 410, 360, 260, 450, 480, 520, 530, 410]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 5,
            borderRadiusApplication: 'end'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out']
        },
        yaxis: {
          title: {
            text: 'R$ (reais)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return 'R$ ' + val + ' reais'
            }
          }
        }
      },
      seriesP: [44, 55, 41, 17, 15],
      chartOptionsP: {
        chart: {
          width: 380,
          type: 'donut'
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient'
        },
        legend: {
          formatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
          }
        },
        title: {
          text: 'Gradient Donut with custom Start-angle'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      seriesL: [{
        name: 'Vendas',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chartOptionsL: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Produtos Vendidos por Mês',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
        }
      },
      seriesM: [44, 55, 67, 83],
      chartOptionsM: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Maças', 'Laranjas', 'Bananas', 'Morangos']
      },
      seriesH: [{
        name: 'Series 1',
        data: [350, 410, 360, 260, 450, 480, 520]
      }, {
        name: 'Series 2',
        data: [440, 550, 570, 560, 610, 580, 630]
      }, {
        name: 'Series 3',
        data: [660, 650, 810, 580, 670, 850, 610]
      }, {
        name: 'Series 4',
        data: [760, 850, 1010, 980, 870, 1050, 910]
      }, {
        name: 'Series 5',
        data: [1040, 1250, 1370, 1060, 1210, 1380, 1230]
      }],
      chartOptionsH: {
        chart: {
          height: 350,
          type: 'heatmap'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          heatmap: {
            colorScale: {
              inverse: true
            }
          }
        },
        colors: ['#F3B415', '#F27036', '#663F59', '#6A6E94', '#4E88B4', '#00A7C6', '#18D8D8', '#A9D794',
          '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
        ],
        xaxis: {
          type: 'category',
          categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']
        },
        title: {
          text: 'Color Scales flipped Vertically'
        }
      },
      seriesR: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }],
      chartOptionsR: {
        chart: {
          height: 350,
          type: 'radar'
        },
        title: {
          text: 'Basic Radar Chart'
        },
        yaxis: {
          stepSize: 20
        },
        xaxis: {
          categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']
        }
      }
    }
  }
}
</script>
