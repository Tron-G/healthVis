/**
 * @description 绘制职业健康饼图
 * @param {object} data  职业饼图数据
 * @param {string} div_id 饼图要绑定的div的id
 */
function drawPie(data, div_id) {
    //数据格式转换
    d3.select("#pie_svg").remove();
    let transform_data = {};
    let job_list = Object.keys(data);
    for (let i = 0; i < job_list.length; i++) {
        let name;
        switch (job_list[i]) {
            case "警察":
                name = "police";
                break;
            case "普通工人":
                name = "worker";
                break;
            case "钢铁工人":
                name = "iron";
                break;
            case "教师":
                name = "teacher";
                break;
            case "特别员工":
                name = "special";
                break;
        }
        transform_data[name] = [];
        transform_data[name].push({named: "正常", 'total': data[job_list[i]]["正常"]});
        transform_data[name].push({named: "异常", 'total': data[job_list[i]]["异常"]});
    }
    // console.log(transform_data);

    let duration_time = 600;
    let width = document.getElementById(div_id).offsetWidth;
    let height = document.getElementById(div_id).offsetHeight;
    let colorset = ['#9ca8b8', '#ddd1d1', '#f0ebe5', '#c1cbd7', '#939391', '#d8caaf'];

    let svg = d3.select("#" + div_id)
        .append("svg")
        .attr("id", "pie_svg")
        .attr("width", width)
        .attr("height", height);


    let arc_generator1 = d3.arc()
        .innerRadius(0) //设置内半径
        .outerRadius(120); //设置外半径
    let arc_generator = d3.arc()
        .innerRadius(0)
        .outerRadius(45);
    let angle_data = d3.pie()
        .value(function (d) {
            return d.total;
        });

    ///////////////////////////////////////////////////////////////////
    // 添加图标及点击事件
    ///////////////////////////////////////////////////////////////////
    let job_name_list = ["police", "special", "worker", "teacher", "iron", "overview"];
    let ch_name = ["警察", "特种工", "普工", "教师", "钢铁工", "概览"];
    for (let i = 0; i < job_name_list.length; i++) {
        svg.append("svg:image")
            .attr("xlink:href", "./static/image/job/" + job_name_list[i] + ".svg")
            .attr("x", i * 55 )
            .attr("y", 310)
            .attr("width", "50")
            .attr("height", "50")
            .attr("id", job_name_list[i] + "_btn")
            .style("cursor", "pointer")
            .style("opacity", "0.8")
            .on("click", function () {
                d3.selectAll("g>*").remove();
                d3.select(".pie_title").remove();
                if (job_name_list[i] !== "overview") {
                    drawSinglePie(transform_data, job_name_list[i], ch_name[i]);
                    TRANSPORT_DATA["map_checked_type"] = job_name_list[i];
                    redraw("/select_category", "select_category");
                } else {
                    showAll(transform_data);
                }
            });

        svg.append("text")
            .text(ch_name[i])
            .attr("id", job_name_list[i] + "_btn_title")
            .attr("x", i * 55 + 10)
            .attr("y", 380)
            .attr("fill", "black")
            .attr("font-size", 15)
            .attr("font-weight", "bold")
            .style("cursor", "pointer")
    }

    //画单个饼图
    function drawSinglePie(data, category, title) {
        //添加标题
        svg.append("text")
            .text(title + "职业体检结论概况")
            .attr("class", "pie_title")
            .attr("x", 80)
            .attr("y", 25)
            .attr("fill", "black")
            .attr("font-size", 16)
            .attr("font-weight", "bold");

        let g = svg.append("g")
            .attr("transform", "translate(160, 160)");
        g.selectAll("path")
            .data(angle_data(data[category]))
            .enter()
            .append("path")
            .attr("d", arc_generator1)
            .style("fill", function (d, i) {
                // console.log(i)
                console.log("--->",d);
                return colorset[i]
            }) //给不同的扇形区填充不同的颜色
            .transition()
            .delay(function (d, i) {
                return i * 200;
            })
            .duration(duration_time)
            .ease(d3.easeLinear)
            .attrTween('d', function (d) {
                let i = d3.interpolate(d.startAngle, d.endAngle);
                return function (t) {
                    d.endAngle = i(t);
                    return arc_generator1(d);
                }
            });

        g.selectAll("text") //给每个扇形去添加对应文字
            .data(angle_data(data[category]))
            .enter()
            .append("text")
            .text(function (d) {
                return d.data.named
            })
            .attr("transform", function (d) {
                return "translate(" + arc_generator1.centroid(d) + ")"
            }) //调成每个文字的对应位置
            .attr("text-anchor", "middle") //是文字居中
            .attr("font-size", 10)
            .attr("fill", "#433d3c")
    }

    //全部饼图
    let showAll = function (data) {
        let count = 0;
        for (let i = 0; i < job_name_list.length - 1; i++) {
            //计算饼图坐标
            let pos_x = 0, pos_y = 0;
            pos_x = 60 + i * 100;
            pos_y = 110;
            count++;
            if (count > 3) {
                pos_x = 60 + (i - 3) * 100;
                pos_y = 220;
            }

            let g = svg.append("g")
                .attr("transform", "translate(" + pos_x + ", " + pos_y + ")");
            g.selectAll("path")
                .data(angle_data(data[job_name_list[i]]))
                .enter()
                .append("path")
                .attr("d", arc_generator)
                .style("fill", function (d, i) {
                    return colorset[i]
                }) //给不同的扇形区填充不同的颜色
                .transition()
                .delay(function (d, i) {
                    return i * 200;
                })
                .duration(duration_time)
                .ease(d3.easeLinear)
                .attrTween('d', function (d) {
                    let i = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = i(t);
                        return arc_generator(d);
                    }
                });

            g.selectAll("text") //给每个扇形去添加对应文字
                .data(angle_data(data[job_name_list[i]]))
                .enter()
                .append("text")
                .text(function (d) {
                    return d.data.named
                })
                .attr("transform", function (d) {
                    return "translate(" + arc_generator.centroid(d) + ")"
                }) //调成每个文字的对应位置
                .attr("text-anchor", "middle") //是文字居中
                .attr("font-size", 10)
                .attr("fill", "#433d3c")
        }

        svg.append("text")
            .text("职业套餐抽样体检结论概况")
            .attr("class", "pie_title")
            .attr("x", 65)
            .attr("y", 25)
            .attr("fill", "black")
            .attr("font-size", 16)
            .attr("font-weight", "bold");
    };

    showAll(transform_data);
}

