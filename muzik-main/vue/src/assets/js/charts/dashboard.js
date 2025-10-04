;(function (jQuery) {
  'use strict'

  /*---------------------------default chart-----*/
  if (document.querySelectorAll('#chart-01').length) {
    const variableColors = IQUtils.getVariableColor()
    const colors = [variableColors.primary]
    var options = {
      series: [69],
      chart: {
        height: 310,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -110,
          endAngle: 110,
          color: '#FF4545',
          track: {
            background: '#e7e7e7',
            strokeWidth: '90%',
            margin: 10
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#FF4545',
              fontSize: '17px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val)
              },
              color: '#222428',
              fontSize: '23px',
              show: true
            }
          }
        }
      },
      fill: {
        colors: colors
      },
      labels: ['Positive Reviews']
    }
    const chart = new ApexCharts(document.querySelector('#chart-01'), options)
    chart.render()
  }
})(jQuery)
