/**
 * @description 绘制人体结构图
 * @param {string} type  "search"展示搜索框输入的相关疾病； "time"展示指定时间范围的疾病
 * @param {obj} data 疾病表数据
 */
let sample = {
    '牙结石': [12, 11],
    '超重': [7, 4],
    '总胆固醇(CHOL)偏高': [5, 5],
    '高密度脂蛋白(HDL-C)偏低': [5, 3],
    '血压高': [3, 5],
    '肥胖': [6, 1],
    '双乳腺增生症': [0, 7],
    '乳腺增生症': [0, 7],
    '窦性心动过缓': [4, 1],
    '牙色素附着': [3, 2],
    '肌酐(CREA)偏低': [2, 2],
    '甲状腺右侧叶结节': [0, 4],
    '肝囊肿': [2, 2],
    'T波异常': [1, 3],
    '淋巴细胞%(LYMPH%)偏高': [2, 2],
    '囊肿': [2, 2],
    '残根': [2, 2],
    '总胆红素(TBIL)偏高': [2, 1],
    '尿隐血：1+': [0, 3],
    '甲状腺双侧叶结节': [1, 2]
};

function drawBodyMap(type, data) {
    $("#mysvg").remove();
    $("#man_svg").remove();
    $("#woman_svg").remove();
    //男性疾病列表及器官列表，对应人数
    const man_disease_organs = [];
    const man_disease_name = {};
    const man_disease_count = {};
    const man_disease_advice = {};

    //女性疾病列表及器官列表，对应人数
    const woman_disease_organs = [];
    const woman_disease_name = {};
    const woman_disease_count = {};
    const woman_disease_advice = {};
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //svg属性
    const svg_background = "#f5f5f5";
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
            "opacity": 1
        },
        "eyes": {
            "width": 30,
            "height": 30,
            "x": man_svg_width / 2.22,
            "y": man_svg_height / 15,
            "opacity": 1
        },
        "nose": {
            "width": 12,
            "height": 12,
            "x": man_svg_width / 2.07,
            "y": man_svg_height / 9.5,
            "opacity": 1
        },
        "mouth": {
            "width": 12,
            "height": 12,
            "x": man_svg_width / 2.07,
            "y": man_svg_height / 7.5,
            "opacity": 1
        },
        "throat": {
            "width": 40,
            "height": 40,
            "x": man_svg_width / 2.34,
            "y": man_svg_height / 7.35,
            "opacity": 1
        },
        "lung": {
            "width": 80,
            "height": 80,
            "x": man_svg_width / 2.8,
            "y": man_svg_height / 5.7,
            "opacity": 1
        },
        "breast": {
            "width": 60,
            "height": 60,
            "x": man_svg_width / 2.5,
            "y": man_svg_height / 4.5,
            "opacity": 1
        },
        "heart": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.17,
            "y": man_svg_height / 4.5,
            "opacity": 1
        },
        "liver": {
            "width": 45,
            "height": 45,
            "x": man_svg_width / 2.45,
            "y": man_svg_height / 3.3,
            "opacity": 1
        },
        "gallbladder": {
            "width": 30,
            "height": 30,
            "x": man_svg_width / 2.4,
            "y": man_svg_height / 2.8,
            "opacity": 1
        },
        "stomach": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.1,
            "y": man_svg_height / 3.15,
            "opacity": 1
        },
        "kidney": {
            "width": 35,
            "height": 35,
            "x": man_svg_width / 2.24,
            "y": man_svg_height / 2.75,
            "opacity": 1
        },
        "spine": {
            "width": 30,
            "height": 30,
            "x": man_svg_width / 2.22,
            "y": man_svg_height / 2.7,
            "opacity": 1
        },
        "intestines": {
            "width": 65,
            "height": 65,
            "x": woman_svg_width / 2.55,
            "y": woman_svg_height / 2.6,
            "opacity": 1
        },
        "prostate": {
            "width": 25,
            "height": 25,
            "x": man_svg_width / 2.2,
            "y": man_svg_height / 2.25,
            "opacity": 1
        }
    };

    const woman_organs = {
        "brain": {
            "width": 30,
            "height": 30,
            "x": woman_svg_width / 2.25,
            "y": woman_svg_height / 16,
            "opacity": 1
        },
        "eyes": {
            "width": 30,
            "height": 30,
            "x": woman_svg_width / 2.22,
            "y": woman_svg_height / 15,
            "opacity": 1
        },
        "nose": {
            "width": 12,
            "height": 12,
            "x": woman_svg_width / 2.07,
            "y": woman_svg_height / 9.5,
            "opacity": 1
        },
        "mouth": {
            "width": 12,
            "height": 12,
            "x": woman_svg_width / 2.07,
            "y": woman_svg_height / 7.5,
            "opacity": 1
        },
        "throat": {
            "width": 40,
            "height": 40,
            "x": woman_svg_width / 2.32,
            "y": woman_svg_height / 7.35,
            "opacity": 1
        },
        "lung": {
            "width": 80,
            "height": 80,
            "x": woman_svg_width / 2.79,
            "y": woman_svg_height / 5.7,
            "opacity": 1
        },
        "heart": {
            "width": 35,
            "height": 35,
            "x": woman_svg_width / 2.17,
            "y": woman_svg_height / 4.5,
            "opacity": 1
        },
        "breast": {
            "width": 60,
            "height": 60,
            "x": woman_svg_width / 2.5,
            "y": woman_svg_height / 4.5,
            "opacity": 1
        },
        "liver": {
            "width": 45,
            "height": 45,
            "x": woman_svg_width / 2.45,
            "y": woman_svg_height / 3.3,
            "opacity": 1
        },
        "gallbladder": {
            "width": 30,
            "height": 30,
            "x": woman_svg_width / 2.4,
            "y": woman_svg_height / 2.8,
            "opacity": 1
        },
        "stomach": {
            "width": 35,
            "height": 35,
            "x": woman_svg_width / 2.1,
            "y": woman_svg_height / 3.15,
            "opacity": 1
        },
        "kidney": {
            "width": 35,
            "height": 35,
            "x": woman_svg_width / 2.24,
            "y": woman_svg_height / 2.75,
            "opacity": 1
        },
        "spine": {
            "width": 30,
            "height": 30,
            "x": woman_svg_width / 2.22,
            "y": woman_svg_height / 2.7,
            "opacity": 1
        },
        "intestines": {
            "width": 65,
            "height": 65,
            "x": woman_svg_width / 2.55,
            "y": woman_svg_height / 2.6,
            "opacity": 1
        },
        "uterus": {
            "width": 35,
            "height": 35,
            "x": woman_svg_width / 2.25,
            "y": woman_svg_height / 2.3,
            "opacity": 1
        }

    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (type === "search") {
        //搜索id
        if (TRANSPORT_DATA["id"] !== "") {
            if (data["sex"] === "2") {
                countPatientDisease(data["disease_list"], woman_disease_organs, woman_disease_name, woman_disease_advice, woman_organs)
            } else {
                countPatientDisease(data["disease_list"], man_disease_organs, man_disease_name, man_disease_advice, man_organs)
            }
        }
        //搜索疾病
        else if (TRANSPORT_DATA["disease"] !== "") {
            let organ_name = DISEASE_LIST[TRANSPORT_DATA["disease"]]["organ"];
            man_disease_organs.push(organ_name);
            man_disease_name[organ_name] = TRANSPORT_DATA["disease"];
            man_disease_advice[organ_name] = DISEASE_LIST[TRANSPORT_DATA["disease"]]["advice"];
        }

    } else {
        for (let each in data) {
            //统计男性疾病
            countDisease(data[each][0], each, man_disease_organs, man_disease_name, man_disease_count, man_disease_advice, man_organs);
            //统计女性
            countDisease(data[each][1], each, woman_disease_organs, woman_disease_name, woman_disease_count, woman_disease_advice, woman_organs);
        }
    }

    function countPatientDisease(disease_list, disease_organs, disease_name, disease_advice, organ_list) {
        for (let i = 0; i < disease_list.length; i++) {
            let organ = DISEASE_LIST[disease_list[i]]["organ"];
            if (disease_organs.indexOf(organ) === -1 && organ in organ_list) {
                disease_organs.push(organ);
                disease_name[organ] = disease_list[i];
                disease_advice[organ] = disease_list[i] + ": " + DISEASE_LIST[disease_list[i]]["advice"];
            } else if (disease_organs.indexOf(organ) !== -1 && organ in organ_list) {
                disease_name[organ] += ("," + disease_list[i]);
                disease_advice[organ] += ('#' + disease_list[i] + ":" + DISEASE_LIST[disease_list[i]]["advice"]);
            }
        }
    }

    //统计函数
    function countDisease(nums, name, disease_organs, disease_name, disease_count, disease_advice, organ_list) {
        if (nums !== 0) {
            let organ = DISEASE_LIST[name]["organ"];
            if (disease_organs.indexOf(organ) === -1 && organ in organ_list) {
                disease_organs.push(organ);
                disease_name[organ] = name;
                disease_count[organ] = nums;
                disease_advice[organ] = name + ": " + DISEASE_LIST[name]["advice"];
            } else if (disease_organs.indexOf(organ) !== -1 && organ in organ_list) {
                disease_name[organ] += ("," + name);
                disease_count[organ] += nums;
                disease_advice[organ] += ('#' + name + ":" + DISEASE_LIST[name]["advice"]);
            }
        }
    }

    // console.log(woman_disease_organs, woman_disease_name, woman_disease_count, woman_disease_advice)
    if (type === "time") {
        normalize_count(man_disease_count);
        normalize_count(woman_disease_count);
    }

    //将各个器官的疾病人数归一化映射到透明度
    function normalize_count(disease_count) {
        let temp_list = [];
        for (let i in disease_count) {
            temp_list.push(disease_count[i])
        }
        for (let i in disease_count) {
            disease_count[i] = normalization(disease_count[i], temp_list);
            // console.log(normalization(man_disease_count[i], temp_list));
        }
    }

    ////////////////////////////////////////////////////////////
    // 归一化函数
    ////////////////////////////////////////////////////////////
    function normalization(num, array) {
        let max_sum = Math.max.apply(null, array);
        let min_sum = Math.min.apply(null, array);
        let result = (num - min_sum) / (max_sum - min_sum);
        result = Math.floor(result * 100) / 100;
        if (result === 0) {
            result = 0.05;
        }
        return result;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //添加人体图
    let man_svg = d3.select("#man_background").append("svg")
        .attr("id", "man_svg")
        .attr("width", man_svg_width)
        .attr("height", man_svg_height)
        .on("click", function () {
            $(".disease_organ_list").remove();
            showOrganList("man");
        });
    let woman_svg = d3.select("#woman_background").append("svg")
        .attr("id", "woman_svg")
        .attr("width", woman_svg_width)
        .attr("height", woman_svg_height)
        .on("click", function () {
            $(".disease_organ_list").remove();
            showOrganList("woman");
        });

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
        .attr("width", woman_svg_width / 1.3)
        .attr("height", woman_svg_height / 1.1)
        .attr("x", woman_svg_width / 8.5)
        .attr("y", woman_svg_height / 20);

    //////////////////////////////////////////////////////////////////////////////////////////
    //添加人体器官
    drawOrgans("man");
    drawOrgans("woman");

    function drawOrgans(sex) {
        let disease_organs;
        let organs_list;
        let disease_count;
        let body_svg;
        if (sex === "man") {
            disease_organs = man_disease_organs;
            organs_list = man_organs;
            disease_count = man_disease_count;
            body_svg = man_svg;
        } else {
            disease_organs = woman_disease_organs;
            organs_list = woman_organs;
            disease_count = woman_disease_count;
            body_svg = woman_svg;
        }
        for (let i = 0; i < disease_organs.length; i++) {
            let organ_name = disease_organs[i];
            if (organ_name in organs_list) {
                organs_list[organ_name]["opacity"] = disease_count[organ_name];
                body_svg.append("svg:image")
                    .attr("xlink:href", "./static/image/body/" + organ_name + ".svg")
                    .attr("id", sex + "_body_" + organ_name)
                    .attr("width", organs_list[organ_name]["width"])
                    .attr("height", organs_list[organ_name]["height"])
                    .attr("x", organs_list[organ_name]["x"])
                    .attr("y", organs_list[organ_name]["y"])
                    .style("opacity", organs_list[organ_name]["opacity"])
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    // 展示左边的器官排列
    function showOrganList(sex) {
        let disease_organs, organs_list, disease_name, disease_advice, body_svg;
        if (sex === "man") {
            disease_organs = man_disease_organs;
            organs_list = man_organs;
            disease_name = man_disease_name;
            disease_advice = man_disease_advice;
            body_svg = man_svg;
        } else {
            disease_organs = woman_disease_organs;
            organs_list = woman_organs;
            disease_name = woman_disease_name;
            disease_advice = woman_disease_advice;
            body_svg = woman_svg;
        }

        let counter = 0, col = 0;

        for (let i = 0; i < disease_organs.length; i++) {
            let organ_name = disease_organs[i];

            let disease_id = "tag_" + organ_name;
            //计算图标位置
            let item_x = 0;
            let item_y = 150;
            counter++;
            if (counter > 3) {
                counter = 1;
                col += 1;
                item_y += col * 100;
                item_x += counter * 110;
            } else {
                item_x += counter * 110;
                item_y += col * 100;
            }
            //疾病名称
            svg.append("text")
                .text(disease_name[organ_name])
                .attr("id", "disease_name" + i)
                .attr("class", "disease_organ_list")
                .attr("x", item_x - 30)
                .attr("y", item_y - 55)
                .attr("fill", "#91091e")
                .attr("font-weight", "bold")
                .style("opacity", 0);
            svg.append("circle")
                .attr("id", "circle" + i)
                .attr("class", "disease_organ_list")
                .attr("cx", item_x)
                .attr("cy", item_y)
                .attr("r", 35)
                .style("stroke", "#c9d6df")
                .style("stroke-width", 3)
                .style("fill", "#E6E6E6");

            svg.append("svg:image")
                .attr("xlink:href", "./static/image/body/" + organ_name + ".svg")
                .attr("id", disease_id)
                .attr("class", "disease_organ_list")
                .attr("width", 50)
                .attr("height", 50)
                .attr("x", item_x - 25)
                .attr("y", item_y - 25)
                .on("mouseover", () => {
                    //图标放大
                    d3.select("#circle" + i)
                        .attr("r", 50);
                    // .transition()
                    // .duration(300)
                    d3.select("#tag_" + organ_name)
                        .attr("width", 65)
                        .attr("height", 65);

                    //显示疾病名称
                    d3.select("#disease_name" + i)
                        .style("opacity", 1);

                    //高亮人体图上的器官
                    d3.select("#" + sex + "_body_" + organ_name)
                        .style("opacity", 1);

                    /////////////////////////////////
                    svg.append("rect")
                        .attr("x", 450)
                        .attr("y", 600)
                        .attr("id", "disease_advice")
                        .attr("width", 600)
                        .attr("height", 110)
                        .attr("fill", "rgba(125, 126, 128, 0.2)");

                    //疾病建议
                    svg.append("text")
                        .text(disease_advice[organ_name])
                        .attr("x", 450)
                        .attr("y", 620)
                        .attr("id", "disease_advice_text")
                        .attr("fill", "gray")
                        .style("font-size", "12px");

                    //隐藏其他未选择的器官
                    for (let j = 0; j < disease_organs.length; j++) {
                        let show_organ = "#" + sex + "_body_" + organ_name;
                        let now_organ = "#" + sex + "_body_" + disease_organs[j];

                        if (now_organ !== show_organ) {
                            body_svg.select(now_organ)
                                .style("opacity", 0.05)
                        }
                    }
                })
                .on("mouseout", () => {
                    //圆圈和图标还原
                    d3.select("#circle" + i)
                        .attr("r", 35);
                    d3.select("#tag_" + organ_name)
                        .attr("width", 50)
                        .attr("height", 50);

                    d3.select("#" + sex + "_body_" + organ_name)
                        .style("opacity", organs_list[organ_name]["opacity"]);

                    for (let j = 0; j < disease_organs.length; j++) {
                        let now_organ = "#" + sex + "_body_" + disease_organs[j];
                        body_svg.select(now_organ)
                            .style("opacity", organs_list[disease_organs[j]]["opacity"])
                    }
                    //隐藏疾病名称
                    d3.select("#disease_name" + i)
                        .style("opacity", 0);

                    //移除建议文字
                    $("#disease_advice").remove();
                    $("#disease_advice_text").remove();

                })
        }
    }

}