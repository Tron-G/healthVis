// console.log(Object.keys(obj['日照市岚山区人民医院']))
 //颜色
function drawRose(obj) {
	list = (Object.keys(obj['日照市岚山区人民医院']))

	hospital = Object.keys(obj)
	// console.log(Object.keys(obj))
	counts = []
	for (let i = 0; i < 4; i++) {
		nums = []
		for (let j = 0; j < 8; j++) {
			nums.push(obj[hospital[i]][list[j]])
		}
		// console.log(nums)
		counts.push(nums)
	}
	// console.log(counts)

	let rose = echarts.init(document.getElementById("radar"))
	var color = ['rgba(22, 172, 142, 1)', 'rgba(0, 251, 183, 1)', 'rgba(248, 136, 42, 1)', 'rgba(20, 218, 255, 1)',
		'rgba(6, 232, 219, 1)'
	].reverse();
	var colorBorder = ['rgba(22, 172, 142, 0.4)', 'rgba(0, 251, 183, 0.4)', 'rgba(248, 136, 42, 0.4)',
		'rgba(20, 218, 255, 0.4)', 'rgba(6, 232, 219, 0.4)'
	].reverse();
	var rich = {
		white: {
			color: '#ddd',
			align: 'center',
			padding: [3, 0]
		}
	};
	var placeHolderStyle = {
		normal: {
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			color: 'rgba(0, 0, 0, 0)',
			borderColor: 'rgba(0, 0, 0, 0)',
			borderWidth: 0
		}
	};

	let data1 = [];
	let data2 = [];
	let data3 = [];
	let data4 = [];
	let labelData = [];
	for (let i = 0; i < counts[0].length; i++) {
		data1.push({
			value: counts[0][i],
			name: list[i],

		});
		data2.push({
			value: counts[1][i],
			name: list[i]
		});
		data3.push({
			value: counts[2][i],
			name: list[i]
		});
		data4.push({
			value: counts[3][i],
			name: list[i]
		});
		labelData.push({
			value: 1,
			name: list[i]
		});
	}
	console.log(data1)



	let option = {
		// backgroundColor: '#19181d',
		title: [{//医院名称位置
				text: Object.keys(obj)[0],
				left: "6%",
				top: "1%",
//				color:"black"

			},
			{
				text: Object.keys(obj)[1],
				left: "60%",
				top: "1%"
			}, {
				text: Object.keys(obj)[2],
				left: "6%",
				top: "48%"
			},
			{
				text: Object.keys(obj)[3],
				left: "60%",
				top: "48%"
			}
		],
		color: [
			"#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#6DBC49",
			"#37B44E", "#3DBA78", "#14ADCF"
		],
		tooltip:{
		    show:true,
		    formatter: '{b}:{c}',
		},
		legend: {
			left: 'left',
			// orient: 'vertical',
			top: "bottom",
			// type: "scroll",
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: '#000',
			},
		},
		calculable: true,
		series: [{
				name: '1',
				type: 'pie',
				startAngle: 0,
				clockwise: false,
				radius: ["10%", "40%"],
				center: ['15%', '30%'],
				roseType: 'area',
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'inside',
					formatter: '{c}',

					textStyle: {
						fontWeight: '100',
						fontFamily: 'Microsoft YaHei',
						color: '#000',
						// fontSize: 8
					},
				},

				itemStyle: {
					normal: {
						// color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
						//     offset: 0,
						//     color: '#ef29b1'
						// }, {
						//     offset: 1,
						//     color: '#fd7225'
						// }]),
						borderWidth: 1,
						borderColor: '#19181d',
						shadowColor: '#19181d',
						shadowBlur: 10,
					}
				},
				data: data1.sort(function(a, b) {
					return b.value - a.value;
				}),
			},
			{
				name: '2',
				type: 'pie',
				startAngle: 0,
				clockwise: false,
				radius: ["10%", "40%"],
				center: ['70%', '30%'],
				roseType: 'area',
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'inside',
					formatter: '{c}',

					textStyle: {
						fontWeight: '100',
						fontFamily: 'Microsoft YaHei',
						color: '#000',
						// fontSize: 8
					},
				},

				itemStyle: {
					normal: {
						// color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
						//     offset: 0,
						//     color: '#ef29b1'
						// }, {
						//     offset: 1,
						//     color: '#fd7225'
						// }]),
						borderWidth: 1,
						borderColor: '#19181d',
						shadowColor: '#19181d',
						shadowBlur: 10,
					}
				},
				data: data2.sort(function(a, b) {
					return b.value - a.value;
				}),
			},
			{
				name: '3',
				type: 'pie',
				startAngle: 0,
				clockwise: false,
				radius: ["10%", "40%"],
				center: ['15%', '70%'],
				roseType: 'area',
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'inside',
					formatter: '{c}',

					textStyle: {
						fontWeight: '100',
						fontFamily: 'Microsoft YaHei',
						color: '#000',
						// fontSize: 8
					},
				},

				itemStyle: {
					normal: {
						// color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
						//     offset: 0,
						//     color: '#ef29b1'
						// }, {
						//     offset: 1,
						//     color: '#fd7225'
						// }]),
						borderWidth: 1,
						borderColor: '#19181d',
						shadowColor: '#19181d',
						shadowBlur: 10,
					}
				},
				data: data3.sort(function(a, b) {
					return b.value - a.value;
				}),
			},
			{
				name: '4',
				type: 'pie',
				startAngle: 0,
				clockwise: false,
				radius: ["10%", "40%"],
				center: ['70%', '70%'],
				roseType: 'area',
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'inside',
					formatter: '{c}',

					textStyle: {
						fontWeight: '100',
						fontFamily: 'Microsoft YaHei',
						color: '#000',
						// fontSize: 8
					},
				},

				itemStyle: {
					normal: {
						// color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
						//     offset: 0,
						//     color: '#ef29b1'
						// }, {
						//     offset: 1,
						//     color: '#fd7225'
						// }]),
						borderWidth: 1,
						borderColor: '#19181d',
						shadowColor: '#19181d',
						shadowBlur: 10,
					}
				},
				data: data4.sort(function(a, b) {
					return b.value - a.value;
				}),
			},
		]
	};
	rose.setOption(option)
}
