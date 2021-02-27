function drawRainFall() {
    var dom = document.getElementById("word_cloud");
    var myChart = echarts.init(dom);
    var app = {};
    var colorlist = ["#9ba4b4", "#afb0b2", "#c5b8a5", "#c39e5c", "#b67171", "#da723c", "#8696a7", "#96a48b", "#596157", "#939391", "#7b8b6f", "#2d6187"];
    var option;
    option = {
        title: {
            text: '2019年日照市平均降雨量',
            left: 'center',
            top: 3,
            textStyle: {
                color: '#000',
                fontSize: 14

            }
        },
        // legend: {
        //     top: 'bottom'
        // },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '降雨量',
                id: "rain_pie",
                type: 'pie',
                radius: [20, 90],
                center: ['50%', '55%'],
                color: colorlist,
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    {value: 13, name: '1月'},
                    {value: 17, name: '2月'},
                    {value: 25, name: '3月'},
                    {value: 45, name: '4月'},
                    {value: 62, name: '5月'},
                    {value: 106, name: '6月'},
                    {value: 218, name: '7月'},
                    {value: 178, name: '8月'},
                    {value: 98, name: '9月'},
                    {value: 45, name: '10月'},
                    {value: 29, name: '11月'},
                    {value: 13, name: '12月'}

                ]
            }
        ]
    };


    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}