let All={"Pie1":[{named:'正常','unnormal':10}, {named:'不正常','unnormal':156}],
     "Pie2":[{named:'正常','unnormal':125}, {named:'不正常','unnormal':578}],
     "Pie3":[{named:'正常','unnormal':1}, {named:'不正常','unnormal':279}],
     "Pie4":[{named:'正常','unnormal':48}, {named:'不正常','unnormal':132}],
	 "Pie5":[{named:'正常','unnormal':164}, {named:'不正常','unnormal':194}]
};


let job_data = {
	"警察": {"正常": 0, "异常": 45},
	"普通工人": {"正常": 64, "异常": 262},
	"钢铁工人": {"正常": 0, "异常": 217},
	"教师": {"正常": 14, "异常": 43},
	"特别员工": {"正常": 55, "异常": 78}};


let drawpie = function(data) {



	// let width = document.getElementById("job_pie").offsetWidth;
	// let height = document.getElementById("job_pie").offsetHeight;
	let width = 300;
	let height = 365;
	let colorset = ['#9ca8b8', '#ddd1d1','#f0ebe5','#c1cbd7','#939391','#d8caaf']

	let svg = d3.select("#job_pie")
		.append("svg")
		.attr("id","pie_svg")
		.attr("width", width)
        .attr("height", height);


	var arc_generator1 = d3.arc()
		.innerRadius(0) //设置内半径
		.outerRadius(125) //设置外半径
	var arc_generator = d3.arc()
		.innerRadius(0)
		.outerRadius(45)
	var angle_data = d3.pie()
			.value(function (d) {
				return d.unnormal;
			});

	///////////////////////////////////////////////////////////////////
	// 添加图标

	let img1 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/police.png")
		.attr("x", "0")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "police");

	let img2 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/doctor.png")
		.attr("x", "50")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "doctor");

	let img3 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/worker.png")
		.attr("x", "100")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "worker");

	let img4 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/teacher.png")
		.attr("x", "150")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "teacher");

	let img5 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/iron.png")
		.attr("x", "200")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "ironWorker");

	let img6 = svg.append("svg:image")
		.attr("xlink:href", "./static/image/overview.png")
		.attr("x", "250")
		.attr("y", "300")
		.attr("width", "50")
		.attr("height", "50").attr("id", "menu");


	let police1 = function(data) {
		//console.log(data)
		var g = svg.append("g")
			.attr("transform", "translate(150, 150)")
		g.selectAll("path")
			.data(angle_data(data['Pie1']))
			.enter()
			.append("path")
			.attr("d", arc_generator1)
			.style("fill", function(d, i) {
				// console.log(i)
				return colorset[i]
			}) //给不同的扇形区填充不同的颜色
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease("linear")
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator1(d);
				}
			})

		g.selectAll("text") //给每个扇形去添加对应文字
			.data(angle_data(data['Pie1']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator1.centroid(d) + ")"
			}) //调成每个文字的对应位置
			.attr("text-anchor", "middle") //是文字居中
			.attr("text_font", 100)
	}

	let doctor1 = function(data) {
		var g2 = svg.append("g")
			.attr("transform", "translate(150, 150)")
		g2.selectAll("path")
			.data(angle_data(data['Pie2']))
			.enter()
			.append("path")
			.attr("d", arc_generator1)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease("linear")
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator1(d);
				}
			})

		g2.selectAll("text")
			.data(angle_data(data['Pie2']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator1.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")
	}

	let worker1 = function(data) {
		var g3 = svg.append("g")
			.attr("transform", "translate(150, 150)")
		g3.selectAll("path")
			.data(angle_data(data['Pie3']))
			.enter()
			.append("path")
			.attr("d", arc_generator1)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease("linear")
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator1(d);
				}
			})


		g3.selectAll("text")
			.data(angle_data(data['Pie3']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator1.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")
	}

	let teacher1 = function(data) {
		var g4 = svg.append("g")
			.attr("transform", "translate(150, 150)")
		g4.selectAll("path")
			.data(angle_data(data['Pie4']))
			.enter()
			.append("path")
			.attr("d", arc_generator1)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease("linear")
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator1(d);
				}
			})

		g4.selectAll("text")
			.data(angle_data(data['Pie4']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")
	}

	let ironWorker = function(data) {
		var g5 = svg.append("g")
			.attr("transform", "translate(150, 150)")
		g5.selectAll("path")
			.data(angle_data(data['Pie5']))
			.enter()
			.append("path")
			.attr("d", arc_generator1)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease("linear")
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator1(d);
				}
			})

		g5.selectAll("text")
			.data(angle_data(data['Pie5']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")
	}

	let showAll = function(data) {
		var g = svg.append("g")
			.attr("transform", "translate(50, 70)")
		g.selectAll("path")
			.data(angle_data(data['Pie1']))
			.enter()
			.append("path")
			.attr("d", arc_generator)
			.style("fill", function(d, i) {
				return colorset[i]
			}) //给不同的扇形区填充不同的颜色
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease(d3.easeLinear)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator(d);
				}
			})

		g.selectAll("text") //给每个扇形去添加对应文字
			.data(angle_data(data['Pie1']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			}) //调成每个文字的对应位置
			.attr("text-anchor", "middle") //是文字居中
			.attr("text_font", 100)

		var g2 = svg.append("g")
			.attr("transform", "translate(150,70)")
		g2.selectAll("path")
			.data(angle_data(data['Pie2']))
			.enter()
			.append("path")
			.attr("d", arc_generator)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease(d3.easeLinear)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator(d);
				}
			})
		g2.selectAll("text")
			.data(angle_data(data['Pie2']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")

		var g3 = svg.append("g")
			.attr("transform", "translate(250,70)")
		g3.selectAll("path")
			.data(angle_data(data['Pie3']))
			.enter()
			.append("path")
			.attr("d", arc_generator)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease(d3.easeLinear)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator(d);
				}
			})
		g3.selectAll("text")
			.data(angle_data(data['Pie3']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")

		var g4 = svg.append("g")
			.attr("transform", "translate(50,200)")
		g4.selectAll("path")
			.data(angle_data(data['Pie4']))
			.enter()
			.append("path")
			.attr("d", arc_generator)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease(d3.easeLinear)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator(d);
				}
			})
		g4.selectAll("text")
			.data(angle_data(data['Pie4']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")

		var g5 = svg.append("g")
			.attr("transform", "translate(150,200)")
		g5.selectAll("path")
			.data(angle_data(data['Pie5']))
			.enter()
			.append("path")
			.attr("d", arc_generator)
			.style("fill", function(d, i) {
				return colorset[i]
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(1000)
			.ease(d3.easeLinear)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc_generator(d);
				}
			})

		g5.selectAll("text")
			.data(angle_data(data['Pie5']))
			.enter()
			.append("text")
			.text(function(d) {
				return d.data.named
			})
			.attr("transform", function(d) {
				return "translate(" + arc_generator.centroid(d) + ")"
			})
			.attr("text-anchor", "middle")
	}



	var g = svg.append("g")
		.attr("transform", "translate(50, 70)")
	g.selectAll("path")
		.data(angle_data(data['Pie1']))
		.enter()
		.append("path")
		.attr("d", arc_generator)
		.style("fill", function(d, i) {
			return colorset[i]
		}) //给不同的扇形区填充不同的颜色
		.transition()
		.delay(function(d, i) {
			return i * 200;
		})
		.duration(1000)
		.ease(d3.easeLinear)
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle, d.endAngle);
			return function(t) {
				d.endAngle = i(t);
				return arc_generator(d);
			}
		})

	g.selectAll("text") //给每个扇形去添加对应文字
		.data(angle_data(data['Pie1']))
		.enter()
		.append("text")
		.text(function(d) {
			return d.data.named
		})
		.attr("transform", function(d) {
			return "translate(" + arc_generator.centroid(d) + ")"
		}) //调成每个文字的对应位置
		.attr("text-anchor", "middle") //是文字居中
		.attr("text_font", 100)

	var g2 = svg.append("g")
		.attr("transform", "translate(150,70)")
	g2.selectAll("path")
		.data(angle_data(data['Pie2']))
		.enter()
		.append("path")
		.attr("d", arc_generator)
		.style("fill", function(d, i) {
			return colorset[i]
		})
		.transition()
		.delay(function(d, i) {
			return i * 200;
		})
		.duration(1000)
		.ease(d3.easeLinear)
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle, d.endAngle);
			return function(t) {
				d.endAngle = i(t);
				return arc_generator(d);
			}
		})
	g2.selectAll("text")
		.data(angle_data(data['Pie2']))
		.enter()
		.append("text")
		.text(function(d) {
			return d.data.named
		})
		.attr("transform", function(d) {
			return "translate(" + arc_generator.centroid(d) + ")"
		})
		.attr("text-anchor", "middle")

	var g3 = svg.append("g")
		.attr("transform", "translate(250,70)")
	g3.selectAll("path")
		.data(angle_data(data['Pie3']))
		.enter()
		.append("path")
		.attr("d", arc_generator)
		.style("fill", function(d, i) {
			return colorset[i]
		})
		.transition()
		.delay(function(d, i) {
			return i * 200;
		})
		.duration(1000)
		.ease(d3.easeLinear)
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle, d.endAngle);
			return function(t) {
				d.endAngle = i(t);
				return arc_generator(d);
			}
		})
	g3.selectAll("text")
		.data(angle_data(data['Pie3']))
		.enter()
		.append("text")
		.text(function(d) {
			return d.data.named
		})
		.attr("transform", function(d) {
			return "translate(" + arc_generator.centroid(d) + ")"
		})
		.attr("text-anchor", "middle")

	var g4 = svg.append("g")
		.attr("transform", "translate(50,200)")
	g4.selectAll("path")
		.data(angle_data(data['Pie4']))
		.enter()
		.append("path")
		.attr("d", arc_generator)
		.style("fill", function(d, i) {
			return colorset[i]
		})
		.transition()
		.delay(function(d, i) {
			return i * 200;
		})
		.duration(1000)
		.ease(d3.easeLinear)
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle, d.endAngle);
			return function(t) {
				d.endAngle = i(t);
				return arc_generator(d);
			}
		})
	g4.selectAll("text")
		.data(angle_data(data['Pie4']))
		.enter()
		.append("text")
		.text(function(d) {
			return d.data.named
		})
		.attr("transform", function(d) {
			return "translate(" + arc_generator.centroid(d) + ")"
		})
		.attr("text-anchor", "middle")

	var g5 = svg.append("g")
		.attr("transform", "translate(150,200)")
	g5.selectAll("path")
		.data(angle_data(data['Pie5']))
		.enter()
		.append("path")
		.attr("d", arc_generator)
		.style("fill", function(d, i) {
			return colorset[i]
		})
		.transition()
		.delay(function(d, i) {
			return i * 200;
		})
		.duration(1000)
		.ease(d3.easeLinear)
		.attrTween('d', function(d) {
			var i = d3.interpolate(d.startAngle, d.endAngle);
			return function(t) {
				d.endAngle = i(t);
				return arc_generator(d);
			}
		})

	g5.selectAll("text")
		.data(angle_data(data['Pie5']))
		.enter()
		.append("text")
		.text(function(d) {
			return d.data.named
		})
		.attr("transform", function(d) {
			return "translate(" + arc_generator.centroid(d) + ")"
		})
		.attr("text-anchor", "middle")

	//createPie(data)

	img1.on("click", function() {
		d3.selectAll("g>*").remove()
		police1(data)
	})

	img2.on("click", function() {
		d3.selectAll("g>*").remove()
		doctor1(data)
	})

	img3.on("click", function() {
		d3.selectAll("g>*").remove()
		worker1(data)
	})

	img4.on("click", function() {
		d3.selectAll("g>*").remove()
		teacher1(data)
	})

	img5.on("click", function() {
		d3.selectAll("g>*").remove()
		ironWorker(data)
	})

	img6.on("click", function() {
		d3.selectAll("g>*").remove()
		showAll(data)
	})
}
drawpie(All);