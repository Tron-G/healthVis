/**
 * @description 绘制多个疾病的概览图便于选择
 * @param {object} data 待展示的疾病名称列表
 */
function drawDiseaseInfo(data) {
    $("#info_svg").remove();
    const svg_width = document.getElementById("disease_info").offsetWidth;
    const svg_height = document.getElementById("disease_info").offsetHeight;

    let svg = d3.select("#disease_info").append("svg")
        .attr("id", "info_svg")
        .attr("width", svg_width)
        .attr("height", svg_height);

    // let disease_list = Object.keys(data);
    // let disease_list = data;

    if (data.length > 1) {
        let pos_x = 70, pos_y = 70, col = 0;
        for (let i = 0; i < data.length; i++) {
            col = parseInt(i / 3);
            svg.append("circle")
                .attr("cx", pos_x + (i % 3) * 120)
                .attr("cy", pos_y + col * 130)
                .attr("r", 55)
                .attr("fill", "#e2703a")
                .style("cursor", "pointer")
                .on("click", () => {
                    // console.log(data[i]);
                    TRANSPORT_DATA["disease_info"] = data[i];
                    redraw("/get_disease_info", "disease_detail");
                });

            svg.append("text")
                .text(data[i])
                .attr("x", pos_x + (i % 3) * 120 - 25)
                .attr("y", pos_y + col * 130 + 5)
                .attr("fill", "black")
                .attr("font-weight", "bold")
                .style("cursor", "pointer")
                .style("font-size", "11px")
                .attr("transform", "rotate(30 " + (pos_x + (i % 3) * 120 - 15) + "," + (pos_y + col * 130 + 15) + ")")
                .on("click", () => {
                    // console.log(data[i]);
                    TRANSPORT_DATA["disease_info"] = data[i];
                    redraw("/get_disease_info", "disease_detail");
                })
        }
    } else {
        TRANSPORT_DATA["disease_info"] = data[0];
        redraw("/get_disease_info", "disease_detail");
    }

}
/**
 * @description 绘制单个疾病的具体信息表
 * @param {object} data 后台返回的疾病的属性信息
 */
function drawSingleInfo(data) {
    console.log(data);
    $("#info_svg").remove();

    const svg_width = document.getElementById("disease_info").offsetWidth;
    const svg_height = document.getElementById("disease_info").offsetHeight;

    let svg = d3.select("#disease_info").append("svg")
        .attr("id", "info_svg")
        .attr("width", svg_width)
        .attr("height", svg_height);

    let title_x = (svg_width - (data["name"].length * 20)) / 2;
    if (data["name"].indexOf('(') !== -1 || data["name"].indexOf(')') !== -1) {
        title_x += 30;
    }
    if (data["name"].indexOf('-') !== -1) {
        title_x += 15;
    }

    svg.append("text")
        .text(data["name"])
        .attr("x", title_x)
        .attr("y", 25)
        .attr("fill", "black")
        .attr("font-weight", "bold")
        .style("font-size", "20px");

    let item_y = 50, item_x = 10;
    let text_x = 65;

    for (let item in data) {
        if (data[item] !== "" && item !== "name" && item !== "advice") {
            let contents = cutString(data[item]);
            svg.append("text")
                .text(item)
                .attr("x", item_x)
                .attr("y", item_y)
                .attr("fill", "black")
                .attr("font-weight", "bold")
                .style("font-size", "12px");

            for (let j = 0; j < contents.length; j++) {
                svg.append("text")
                    .text(contents[j])
                    .attr("x", text_x)
                    .attr("y", item_y)
                    .attr("fill", "black")
                    .style("font-size", "11px");
                    // .style("font-family", "STXingkai");
                item_y += 20;
            }
        }
    }
    if (data["advice"] !== "") {
        let advice_texts = cutString(data["advice"]);
        svg.append("text")
            .text("医生建议")
            .attr("x", item_x)
            .attr("y", item_y)
            .attr("fill", "black")
            .attr("font-weight", "bold")
            .style("font-size", "12px");
        for (let j = 0; j < advice_texts.length; j++) {
                svg.append("text")
                    .text(advice_texts[j])
                    .attr("x", text_x)
                    .attr("y", item_y)
                    .attr("fill", "black")
                    .style("font-size", "11px");
                item_y += 20;
            }
    }
}

//分割字符串
function cutString(text) {

    let text_len = 26;
    let cut_text = [];
    let words_count = 0;
    let text_line = "";
    let char_list = ['/', ',', '.', '>', '<', '-', '(', ')', ':'];
    let regex = /[a-zA-Z]/, regNum = /\d/;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "#") {
            if (text_line !== "") {
                cut_text.push(text_line);
                text_line = "";
                words_count = 0;
            }
            continue;
        }
        text_line += text[i];
        if (char_list.indexOf(text[i]) !== -1 || regex.test(text[i]) || regNum.test(text[i])) {
            words_count += 0.5;
        } else {
            words_count += 1;
        }

        if (words_count > text_len) {
            cut_text.push(text_line);
            words_count = 0;
            text_line = "";
        }

    }
    if (text_line !== "") {
        cut_text.push(text_line);
    }
    return cut_text;
}