var dom = document.getElementById("2d");
var myChart2 = echarts.init(dom);

var app = {};
option = null;
option = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }]
};
// I don't know why the 2d plot needs this
// But it needs this
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}
// This makes the plots responsive
// Don't mess here
window.onresize = function() {
    $(".plot").each(function(){
        var id = $(this).attr('_echarts_instance_');
        window.echarts.getInstanceById(id).resize();
    });
};