function teacherPie() {

}

function workerPie() {

}

function ironWorkerPie() {

}


function policePie(){
    let data = [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['高血压', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['心脏病', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['肝病', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['肺病', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ];
    var myChart = echarts.init(document.querySelector("#piechart"));

    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: data,
        },
        series: [{
            type: 'pie',
            radius: 100,
            center: ['50%', '50%'],
            encode: {
                itemName: 'product',
                value: '2012'
            }
        } ]
    };


    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    });

};

function doctorPie(){
    var myChart = echarts.init(document.querySelector("#piechart"));

    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['高血压', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['心脏病', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['肝病', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['肺病', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        series: [{
            type: 'pie',
            radius: 100,
            center: ['50%', '50%'],
            encode: {
                itemName: 'product',
                value: '2013'
            }
        } ]
    };


    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    });

};


function pieCount(){
    var myChart = echarts.init(document.querySelector("#piechart"));

    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['高血压', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['心脏病', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['肝病', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['肺病', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        series: [{
            type: 'pie',
            radius: 50,
            center: ['20%', '30%'],
            encode: {
                itemName: 'product',
                value: '2012'
            }
        }, {
            type: 'pie',
            radius: 50,
            center: ['80%', '30%'],
            encode: {
                itemName: 'product',
                value: '2013'
            }
        }, {
            type: 'pie',
            radius: 50,
            center: ['20%', '80%'],
            encode: {
                itemName: 'product',
                value: '2014'
            }
        }, {
            type: 'pie',
            radius: 50,
            center: ['50%', '80%'],
            encode: {
                itemName: 'product',
                value: '2016'
            }
        }, {
            type: 'pie',
            radius: 50,
            center: ['50%', '30%'],
            encode: {
                itemName: 'product',
                value: '2017'
            }
        }, {
            type: 'pie',
            radius: 50,
            center: ['80%', '80%'],
            encode: {
                itemName: 'product',
                value: '2015'
            }
        }]
    };

    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    });

};
















