/**
 * @description 绘制相似患者的推荐疾病
 * @param {object} data 推荐疾病列表
 */
function drawRecommendView(data) {
    console.log(data);
    $("#recommend_svg").remove();

    const svg_width = document.getElementById("recommend_list").offsetWidth;
    const svg_height = document.getElementById("recommend_list").offsetHeight;

    let svg = d3.select("#recommend_list").append("svg")
        .attr("id", "recommend_svg")
        .attr("width", svg_width)
        .attr("height", svg_height);

    svg.append("text")
        .text("潜在风险疾病预测")
        .attr("x", svg_width / 2 - 60)
        .attr("y", 15)
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .style("font-size", "14px");

    if (data.length === 0) {
        svg.append("text")
            .text("暂无")
            .attr("x", svg_width / 2 - 20)
            .attr("y", svg_height / 2 + 10)
            .attr("fill", "black")
            .attr("font-weight", "bold")
            .style("font-size", "15px");
        return;
    }
    let scale = d3.scale.linear().domain([0, 1]).range([5, 100]);

    let data_len;
    if (data.length > 5) {
        data_len = 5;
    } else {
        data_len = data.length;
    }

    let chart_len = (data_len - 1) * 100 + scale(data[0][1]) + scale(data[data_len - 1][1]);
    let pos_x = (svg_width - chart_len) / 2, pos_y = 50;
    for (let i = 0; i < data_len; i++) {
        // console.log(scale(data[i][1]))

        svg.append("circle")
            .attr("cx", pos_x + i * 100)
            .attr("cy", pos_y)
            .attr("r", scale(data[i][1]))
            .attr("fill", "#9ca8b8")
            .style("cursor", "pointer")
            .on("click", () => {
                TRANSPORT_DATA["disease_info"] = data[i][0];
                redraw("/get_disease_info", "disease_detail");
            });

        svg.append("text")
            .text(data[i][0])
            .attr("x", (pos_x - 30) + i * 100)
            .attr("y", 110)
            .attr("fill", "black")
            .style("font-size", "9px")
            .style("cursor", "pointer")
            .attr("transform", "rotate(10 " + (pos_x + i * 100 + 20) + ",150)")
            .on("click", () => {
                TRANSPORT_DATA["disease_info"] = data[i][0];
                redraw("/get_disease_info", "disease_detail");
            });

    }


}