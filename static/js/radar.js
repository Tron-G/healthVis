var obj = {
	"日照市中医医院": {
		"心电": 12,
		"眼科": 2,
		"外科": 3,
		"CT": 6,
		"彩超": 9,
		"耳鼻喉": 6,
		"口腔科": 5,
		"内科": 9
	},
	"五莲县人民医院": {
		"心电": 5,
		"眼科": 6,
		"外科": 8,
		"CT": 10,
		"彩超": 6,
		"耳鼻喉": 2,
		"口腔科": 9,
		"内科": 6
	},
	"日照市人民医院": {
		"心电": 2,
		"眼科": 2,
		"外科": 3,
		"CT": 6,
		"彩超": 5,
		"耳鼻喉": 7,
		"口腔科": 6,
		"内科": 9
	},
	"日照市岚山区人民医院": {
		"心电": 6,
		"眼科": 9,
		"外科": 5,
		"CT": 4,
		"彩超": 3,
		"耳鼻喉": 2,
		"口腔科": 4,
		"内科": 5
	},
}
// console.log(Object.keys(obj['日照市岚山区人民医院']))
function drawRadar(obj) {

	let colorArr = ['rgba(0,245,255, 0.5)', 'rgba(83,134,139, 0.5)',
	'rgba(255,130,71,0.5)', 'rgba(	238 ,99 ,99, 0.6)',
	// 'rgba(222,134,85, 0.8)'
]; //颜色
	let list = (Object.keys(obj['日照市岚山区人民医院']))

	let hospital = Object.keys(obj)
	// console.log(Object.keys(obj))
	let counts = []
	for (var i = 0; i < 4; i++) {
		nums = []
		for (var j = 0; j < 8; j++) {
			nums.push(Math.round(Math.log2(obj[hospital[i]][list[j]])))
		}
		// console.log(nums)
		counts.push(nums)
	}
	// console.log(counts)

	let indicator = [];
	for (var i = 0; i < list.length; i++) {
		var obj = {
			name: list[i],
			max: 12
		};
		indicator.push(obj)
	}
	// console.log(indicator)
	let radar = echarts.init(document.getElementById('radar'));
	let dataArr = [{
			value: counts[0],
			name: hospital[0],
			// itemStyle: {
			// 	normal: {
			// 		lineStyle: {
			// 			color: '#00A6AA',
			// 			// shadowColor: '#42ACD1',
			// 			// shadowBlur: 10,
			// 		},
			// 		shadowColor: '#00A6AA',
			// 		shadowBlur: 5,
			// 	},
			// },
			// areaStyle: {
			// 	normal: { // 单项区域填充样式
			// 		color: {
			// 			type: 'linear',
			// 			x: 0, //右
			// 			y: 0, //下
			// 			x2: 1, //左
			// 			y2: 1, //上
			// 			colorStops: [{
			// 				offset: 0,
			// 				color: '#00A6AA'
			// 			}, {
			// 				offset: 0.5,
			// 				color: 'rgba(0,0,0,0)'
			// 			}, {
			// 				offset: 1,
			// 				color: '#00A6AA'
			// 			}],
			// 			globalCoord: false
			// 		},
			// 		opacity: 1 // 区域透明度
			// 	}
			// }
		},
		{
			value: counts[1],
			name: hospital[1],
			// itemStyle: {
			// 	normal: {
			// 		lineStyle: {
			// 			color: '#16C2C2',
			// 			// shadowColor: '#4BFFFC',
			// 			// shadowBlur: 10,
			// 		},
			// 		shadowColor: '#16C2C2',
			// 		shadowBlur: 10,
			// 	},
			// },
			// areaStyle: {
			// 	normal: { // 单项区域填充样式
			// 		color: {
			// 			type: 'linear',
			// 			x: 0, //右
			// 			y: 0, //下
			// 			x2: 1, //左
			// 			y2: 1, //上
			// 			colorStops: [{
			// 				offset: 0,
			// 				color: '#16C2C2'
			// 			}, {
			// 				offset: 0.5,
			// 				color: 'rgba(0,0,0,0)'
			// 			}, {
			// 				offset: 1,
			// 				color: '#16C2C2'
			// 			}],
			// 			globalCoord: false
			// 		},
			// 		opacity: 1 // 区域透明度
			// 	}
			// }
		},
		{
			value: counts[2],
			name: hospital[2],
			// itemStyle: {
			// 	normal: {
			// 		lineStyle: {
			// 			color: '#0070C0',
			// 			// shadowColor: '#42ACD1',
			// 			// shadowBlur: 10,
			// 		},
			// 		shadowColor: '#0070C0',
			// 		shadowBlur: 5,
			// 	},
			// },
			// areaStyle: {
			// 	normal: { // 单项区域填充样式
			// 		color: {
			// 			type: 'linear',
			// 			x: 0, //右
			// 			y: 0, //下
			// 			x2: 1, //左
			// 			y2: 1, //上
			// 			colorStops: [{
			// 				offset: 0,
			// 				color: '#0070C0'
			// 			}, {
			// 				offset: 0.5,
			// 				color: 'rgba(0,0,0,0)'
			// 			}, {
			// 				offset: 1,
			// 				color: '#0070C0'
			// 			}],
			// 			globalCoord: false
			// 		},
			// 		opacity: 1 // 区域透明度
			// 	}
			// }
		}, {
			value: counts[3],
			name: hospital[3],
			// itemStyle: {
			// 	normal: {
			// 		lineStyle: {
			// 			color: '#42ACD1',
			// 			// shadowColor: '#42ACD1',
			// 			// shadowBlur: 10,

			// 		},
			// 		shadowColor: '#42ACD1',
			// 		shadowBlur: 2,
			// 	},
			// },
			// areaStyle: {
			// 	normal: { // 单项区域填充样式
			// 		color: {
			// 			type: 'linear',
			// 			x: 0, //右
			// 			y: 0, //下
			// 			x2: 1, //左
			// 			y2: 1, //上
			// 			colorStops: [{
			// 				offset: 0,
			// 				color: '#42ACD1'
			// 			}, {
			// 				offset: 0.5,
			// 				color: 'rgba(0,0,0,0)'
			// 			}, {
			// 				offset: 1,
			// 				color: '#42ACD1'
			// 			}],
			// 			globalCoord: false
			// 		},
			// 		opacity: 1, // 区域透明度,

			// 	}
			// }
		},
	];

	option = {
		// backgroundColor: '#101736',
		color: colorArr,
		legend: {
			orient: 'vertical',
			icon: 'circle', //图例形状
			data: hospital,
			bottom: 1,
			right: 1,
			itemWidth: 3, // 图例标记的图形宽度。[ default: 25 ]
			itemHeight: 3, // 图例标记的图形高度。[ default: 14 ]
			itemGap: 2, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
			textStyle: {
				fontSize: 8,
				color: '#000',
			},
		},
		radar: {
			// shape: 'circle',
			name: {
				textStyle: {
					color: '#000',
					fontSize: 8
				},
			},
			indicator: indicator,
			// splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
			// 	show: true,
			// 	areaStyle: { // 分隔区域的样式设置。
			// 		color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
			// 	}
			// },
			axisLine: { //指向外圈文本的分隔线样式
				lineStyle: {
					color: '#153269'
				}
			},
			// splitArea: {
			// 	areaStyle: {
			// 		color: colorArr.reverse()
			// 	}
			// },
			splitLine: {
				lineStyle: {
					color: '#113865', // 分隔线颜色
					width: 1, // 分隔线线宽
				}
			},
		},
		series: [{
			type: 'radar',
			symbolSize: 3,
			areaStyle: {
				normal: {
					width: 1,
					opacity: 1,
				},
			},
			// symbol: 'angle',
			data: dataArr
		}]
	};
	radar.setOption(option)
}


