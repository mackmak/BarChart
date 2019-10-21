/*
installed jQuery intellisense through the command:
npm i --save @types/jquery
*/
$(document).ready(function () {
  plot5 = $.jqplot('chart5', [[[2, 1], [null, 2], [7, 3], [10, 4]]], {
    captureRightClick: true,
    seriesDefaults: {
      renderer: $.jqplot.BarRenderer,
      shadowAngle: 135,
      rendererOptions: {
        barDirection: 'horizontal',
        highlightMouseDown: true
      },
      pointLabels: { show: true, formatString: '%d' }
    },
    legend: {
      show: true,
      location: 'e',
      placement: 'outside'
    },
    axes: {
      yaxis: {
        renderer: $.jqplot.CategoryAxisRenderer
      }
    }
  });
});
