

function drawBodyMap() {
    const disease_organs = ["brain", "nose", "lung", "heart", "liver", "stomach", "kidney", "intestines"
    ]
    const disease_text = ["脑梗塞", "鼻中隔偏曲", "右肺上叶钙化灶", "窦性心动过缓", "脂肪肝", "胃炎", "左肾结石不排除", "直肠癌术后状态"]
    const disease_advice = [
        "(1)调整血压在适当水平。(2)戒烟酒，保证充足睡眠，保持良好心态，加强功能锻炼。(3)监测血压、血脂、血粘稠度等，防止复发。",
        "建议到耳鼻咽喉科随诊。", "",
        "建议您定期心内科门诊随诊；若有胸闷等症状，进一步诊治。心率<50次/分建议心内科就诊，必要时使用提高心率药物治疗等。",
        "(1)合理膳食，宜高蛋白、高维生素、适量脂肪、低糖、低盐饮食。减少动物内脏、油煎炸食品等摄入，增加膳食纤维和多种维生素",
        "平时注意饮食：宜易消化无刺激性的饮食，少吃过酸过甜食物及饮料，忌烟酒、浓茶、咖啡，进食细嚼慢咽等。",
        "适量多饮水，限制高钙、草酸盐含量高的食物，泌尿外科随诊治疗。", "外科随诊。"
    ]
    //svg属性
    const svg_background = "#F8F8FF";
    const svg_width = document.getElementById("body_view").offsetWidth;
    const svg_height = document.getElementById("body_view").offsetHeight;

    //人体div属性
    const man_svg_width = document.getElementById("man_background").offsetWidth;
    const man_svg_height = document.getElementById("man_background").offsetHeight;
    const woman_svg_width = document.getElementById("woman_background").offsetWidth;
    const woman_svg_height = document.getElementById("woman_background").offsetHeight;
    //器官属性(位置，大小，透明度)
    const man_organs = {
        "brain": {
            "width": 30,
            "height": 30,
            "x": man_svg_width / 2.25,
            "y": man_svg_height / 16,
            "opacity": 0.5
        },
        "nose": {
            "width": 12,
            "height": 12,
            "x": man_svg_width / 2.10,
            "y": man_svg_height / 9.3,
            "opacity": 1
        },
        "lung": {
            "width": 80,
            "height": 80,
            "x": man_svg_width / 2.79,
            "y": man_svg_height / 5.7,
            "opacity": 0.4
        },
        "heart": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.17,
            "y": man_svg_height / 4.5,
            "opacity": 0.9
        },
        "liver": {
            "width": 45,
            "height": 45,
            "x": man_svg_width / 2.45,
            "y": man_svg_height / 3.3,
            "opacity": 0.8
        },
        "stomach": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.1,
            "y": man_svg_height / 3.15,
            "opacity": 0.6
        },
        "kidney": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.24,
            "y": man_svg_height / 2.75,
            "opacity": 0.8
        },
        "intestines": {
            "width": 65,
            "height": 65,
            "x": man_svg_width / 2.55,
            "y": man_svg_height / 2.6,
            "opacity": 0.7
        }
    };


    let svg = d3.select("#body_view").append("svg")
        .attr("id", "mysvg")
        .attr("class", "svg1")
        .attr("width", svg_width)
        .attr("height", svg_height);
    //svg背景
    svg.append("rect")
        .attr("width", svg_width)
        .attr("height", svg_height)
        .attr("fill", svg_background);
    //////////////////////////////////////////////////////
    //添加人体图
    let man_svg = d3.select("#man_background").append("svg")
        .attr("id", "man_svg")
        .attr("width", man_svg_width)
        .attr("height", man_svg_height);
    let woman_svg = d3.select("#woman_background").append("svg")
        .attr("id", "woman_svg")
        .attr("width", woman_svg_width)
        .attr("height", woman_svg_height);

    man_svg.append("svg:image")
        .attr("xlink:href", "./static/image/body/man.svg")
        .attr("id", "man_img")
        .attr("width", man_svg_width / 1.1)
        .attr("height", man_svg_height / 1.1)
        .attr("x", man_svg_width / 20)
        .attr("y", man_svg_height / 20)
        .attr("fill", "red");
    woman_svg.append("svg:image")
        .attr("xlink:href", "./static/image/body/woman.svg")
        .attr("id", "woman_img")
        .attr("width", woman_svg_width / 1.1)
        .attr("height", woman_svg_height / 1.1)
        .attr("x", woman_svg_width / 20)
        .attr("y", woman_svg_height / 20);

    ////////////////////////////////////////////////////
    //添加人体器官
    for (let key in man_organs) {
        man_svg.append("svg:image")
            .attr("xlink:href", "./static/image/body/" + key + ".svg")
            .attr("id", "body_" + key)
            .attr("width", man_organs[key]["width"])
            .attr("height", man_organs[key]["height"])
            .attr("x", man_organs[key]["x"])
            .attr("y", man_organs[key]["y"])
            .style("opacity", man_organs[key]["opacity"])
    }

    /////////////////////////////////////////////////////////////////////
    // 展示左边的器官排列
    let counter = 0, col = 0;
    for (let i = 0; i < disease_organs.length; i++) {
        let disease_id = "tag_" + disease_organs[i];
        //console.log(disease_id);

        // let organ_center_x = man_organs[disease_organs[i]]["x"] + man_organs[disease_organs[i]]["width"] /
        //     2;
        // let organ_center_y = man_organs[disease_organs[i]]["y"] + man_organs[disease_organs[i]]["height"] /
        //     2;

        //计算图标位置
        let item_x = 0;
        let item_y = 150;
        counter++;
        if(counter>3){
            counter = 1;
            col+=1;
            item_y += col*100;
            item_x += counter*110;
        }
        else{
            item_x += counter*110;
            item_y += col*100;
        }
        //疾病名称
        svg.append("text")
            .text(disease_text[i])
            .attr("id", "disease_name" + i)
            .attr("x", item_x-30)
            .attr("y", item_y - 55)
            .attr("fill", "#91091e")
            .attr("font-weight", "bold")
            .style("opacity", 0);

        // svg.append("line")
        //     .attr("id", "line" + i)
        //     .attr("x1", 120)
        //     .attr("y1", 65 + i * 100)
        //     .attr("x2", organ_center_x)
        //     .attr("y2", organ_center_y)
        //     .attr("stroke", "gray")
        //     .attr("stroke-width", "2px")
        //     .style("opacity", 0)

        svg.append("circle")
            .attr("id", "circle" + i)
            .attr("cx", item_x)
            .attr("cy", item_y)
            .attr("r", 35)
            .style("stroke", "#c9d6df")
            .style("stroke-width", 3)
            .style("fill", "#E6E6E6");

        svg.append("svg:image")
            .attr("xlink:href", "./static/image/body/" + disease_organs[i] + ".svg")
            .attr("id", disease_id)
            .attr("width", 50)
            .attr("height", 50)
            .attr("x", item_x-25)
            .attr("y", item_y-25)
            .on("mouseover", () => {

                //图标放大
                d3.select("#circle" + i)
                    .attr("r", 50)
                // .transition()
                // .duration(300)
                d3.select("#tag_" + disease_organs[i])
                    .attr("width", 65)
                    .attr("height", 65)

                //显示疾病名称及线条
                // d3.select("#line" + i)
                //     .style("opacity", 0.3)
                d3.select("#disease_name" + i)
                    .style("opacity", 1)

                //高亮人体图上的器官
                d3.select("#body_" + disease_organs[i])
                    .style("opacity", 1)

                /////////////////////////////////
                svg.append("rect")
                    .attr("x", 450)
                    .attr("y", 600)
                    .attr("id", "disease_advice")
                    .attr("width", 600)
                    .attr("height", 110)
                    .attr("fill", "rgba(125, 126, 128, 0.2)")

                //疾病建议
                svg.append("text")
                    .text(disease_advice[i])
                    .attr("x", 450)
                    .attr("y", 620)
                    .attr("id", "disease_advice_text")
                    .attr("fill", "gray")
                    .style("font-size", "12px")

                //隐藏其他未选择的器官
                for (let j = 0; j < disease_organs.length; j++) {
                    let show_organ = "#body_" + disease_organs[i];
                    let now_organ = "#body_" + disease_organs[j];

                    if (now_organ !== show_organ) {
                        man_svg.select(now_organ)
                            .style("opacity", 0.1)
                    }
                }

            })
            .on("mouseout", () => {
                //圆圈和图标还原
                d3.select("#circle" + i)
                    .attr("r", 35)
                d3.select("#tag_" + disease_organs[i])
                    .attr("width", 50)
                    .attr("height", 50)

                d3.select("#body_" + disease_organs[i])
                    .style("opacity", man_organs[disease_organs[i]]["opacity"])

                //隐藏线条和疾病名称
                // d3.select("#line" + i)
                //     .style("opacity", 0)
                d3.select("#disease_name" + i)
                    .style("opacity", 0)

                //移除建议文字
                $("#disease_advice").remove()
                $("#disease_advice_text").remove()

                for (let j = 0; j < disease_organs.length; j++) {
                    let now_organ = "#body_" + disease_organs[j];
                    man_svg.select(now_organ)
                        .style("opacity", man_organs[disease_organs[j]]["opacity"])

                }
            })
        // .on("click", function () {
        //     console.log(this.id.substring(4));
        // })

    }

}