/**
 * @description 绘制人体结构图
 * @param {string} type  "search"展示搜索框输入的相关疾病； "time"展示指定时间范围的疾病
 * @param {object} data 疾病表数据
 */
function drawBodyMap(type, data) {
    $("#mysvg").remove();
    $("#human_svg").remove();
    $("#organ_svg").remove();
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
    const svg_background = "rgba(177,209,242,0.2)";
    const svg_width = document.getElementById("body_view").offsetWidth;
    const svg_height = document.getElementById("body_view").offsetHeight;

    //人体div属性
    const human_svg_width = document.getElementById("body_background").offsetWidth;
    const human_svg_height = document.getElementById("body_background").offsetHeight;

    const organ_list_width = document.getElementById("organ_view").offsetWidth;
    const organ_list_height = document.getElementById("organ_view").offsetHeight;

    //器官列表展示的性别
    let show_organ_sex = "man";
    //器官属性(位置，大小，透明度)
    const man_organs = {
        "brain": {
            "width": 30,
            "height": 30,
            "x": human_svg_width / 2.18,
            "y": human_svg_height / 27,
            "opacity": 1
        },
        "eyes": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.2,
            "y": human_svg_height / 20,
            "opacity": 1
        },
        "nose": {
            "width": 11,
            "height": 11,
            "x": human_svg_width / 2.06,
            "y": human_svg_height / 11.5,
            "opacity": 1
        },
        "mouth": {
            "width": 13,
            "height": 13,
            "x": human_svg_width / 2.07,
            "y": human_svg_height / 9,
            "opacity": 1
        },
        "throat": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.2,
            "y": human_svg_height / 8.3,
            "opacity": 1
        },
        "lung": {
            "width": 80,
            "height": 80,
            "x": human_svg_width / 2.58,
            "y": human_svg_height / 6.4,
            "opacity": 1
        },
        "breast": {
            "width": 80,
            "height": 80,
            "x": human_svg_width / 2.58,
            "y": human_svg_height / 5.8,
            "opacity": 1
        },
        "heart": {
            "width": 40,
            "height": 40,
            "x": human_svg_width / 2.13,
            "y": human_svg_height / 5.2,
            "opacity": 1
        },
        "liver": {
            "width": 55,
            "height": 55,
            "x": human_svg_width / 2.38,
            "y": human_svg_height / 3.7,
            "opacity": 1
        },
        "gallbladder": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.38,
            "y": human_svg_height / 3.4,
            "opacity": 1
        },
        "stomach": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 1.95,
            "y": human_svg_height / 3.4,
            "opacity": 1
        },
        "kidney": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.17,
            "y": human_svg_height / 2.85,
            "opacity": 1
        },
        "spine": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.17,
            "y": human_svg_height / 2.7,
            "opacity": 1
        },
        "intestines": {
            "width": 65,
            "height": 65,
            "x": human_svg_width / 2.39,
            "y": human_svg_height / 2.75,
            "opacity": 1
        },
        "prostate": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.21,
            "y": human_svg_height / 2.45,
            "opacity": 1
        }
    };

    const woman_organs = {
        "brain": {
            "width": 28,
            "height": 28,
            "x": human_svg_width / 2.11,
            "y": human_svg_height / 35,
            "opacity": 1
        },
        "eyes": {
            "width": 33,
            "height": 33,
            "x": human_svg_width / 2.15,
            "y": human_svg_height / 26,
            "opacity": 1
        },
        "nose": {
            "width": 10,
            "height": 10,
            "x": human_svg_width / 2.01,
            "y": human_svg_height / 13.5,
            "opacity": 1
        },
        "mouth": {
            "width": 12,
            "height": 12,
            "x": human_svg_width / 2.015,
            "y": human_svg_height / 10.5,
            "opacity": 1
        },
        "throat": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.16,
            "y": human_svg_height / 9.5,
            "opacity": 1
        },
        "lung": {
            "width": 80,
            "height": 80,
            "x": human_svg_width / 2.55,
            "y": human_svg_height / 6.9,
            "opacity": 1
        },
        "breast": {
            "width": 65,
            "height": 65,
            "x": human_svg_width / 2.41,
            "y": human_svg_height / 5.8,
            "opacity": 1
        },
        "heart": {
            "width": 37,
            "height": 37,
            "x": human_svg_width / 2.06,
            "y": human_svg_height / 5.2,
            "opacity": 1
        },
        "liver": {
            "width": 50,
            "height": 50,
            "x": human_svg_width / 2.31,
            "y": human_svg_height / 3.9,
            "opacity": 1
        },
        "gallbladder": {
            "width": 30,
            "height": 30,
            "x": human_svg_width / 2.31,
            "y": human_svg_height / 3.5,
            "opacity": 1
        },
        "stomach": {
            "width": 30,
            "height": 30,
            "x": human_svg_width / 1.96,
            "y": human_svg_height / 3.5,
            "opacity": 1
        },
        "kidney": {
            "width": 30,
            "height": 30,
            "x": human_svg_width / 2.12,
            "y": human_svg_height / 3,
            "opacity": 1
        },
        "spine": {
            "width": 30,
            "height": 30,
            "x": human_svg_width / 2.13,
            "y": human_svg_height / 2.7,
            "opacity": 1
        },
        "intestines": {
            "width": 55,
            "height": 55,
            "x": human_svg_width / 2.26,
            "y": human_svg_height / 2.73,
            "opacity": 1
        },
        "uterus": {
            "width": 35,
            "height": 35,
            "x": human_svg_width / 2.16,
            "y": human_svg_height / 2.4,
            "opacity": 1
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //人体图预展示的类型，time: 预展示男性, man: 展示搜索结果的男性疾病情况, woman: 展示搜索结果的女性疾病情况
    let show_type = "time";
    if (type === "search") {
        //搜索id
        if (TRANSPORT_DATA["id"] !== "") {
            //展示推荐疾病
            drawRecommendView(data["recommend_list"]);
            if (data["patient_disease"]["sex"] === "2") {
                show_type = "woman";
                countPatientDisease(data["patient_disease"]["disease_list"], woman_disease_organs, woman_disease_name, woman_disease_advice, woman_organs)
            } else {
                show_type = "man";
                countPatientDisease(data["patient_disease"]["disease_list"], man_disease_organs, man_disease_name, man_disease_advice, man_organs)
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

    //统计搜索id的患者疾病列表
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


    // console.log(man_disease_name);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 整体svg
    let svg = d3.select("#body_view").append("svg")
        .attr("id", "mysvg")
        .attr("width", svg_width)
        .attr("height", svg_height);
    //svg背景
    svg.append("rect")
        .attr("width", svg_width)
        .attr("height", svg_height)
        .attr("fill", svg_background);

    let organ_svg = d3.select("#organ_view").append("svg")
        .attr("id", "organ_svg")
        .attr("width", organ_list_width)
        .attr("height", organ_list_height);

    /////////////////////////////////////////////////////////////////////////
    // 添加人体图svg
    let human_svg = d3.select("#body_background").append("svg")
        .attr("id", "human_svg")
        .attr("width", human_svg_width)
        .attr("height", human_svg_height);
    //添加背景
    human_svg.append("rect")
        .attr("id", "body_background_rect")
        .attr("width", human_svg_width)
        .attr("height", human_svg_height)
        .attr("fill", "rgb(184, 215, 240, 0.3)")
        .style("z-index", 0);

    if (show_type === "time" || show_type === "man") {
        //预展示男性人体图
        drawBodyMap("man");
        //预展示男性器官列表
        showOrganList("man");
    } else if (show_type === "woman") {
        drawBodyMap("woman");
        showOrganList("woman");
    }

    // 添加图标切换按钮
    let icon_title = ["男性患者", "女性患者"];
    let icon_img = ["man_icon", "woman_icon"];
    for (let i = 0; i < icon_title.length; i++) {
        human_svg.append("svg:image")
            .attr("xlink:href", "./static/image/" + icon_img[i] + ".svg")
            .attr("id", icon_img[i])
            .attr("width", 20)
            .attr("height", 20)
            .attr("x", 70 + i * 130)
            .attr("y", 495)
            .style("cursor", "pointer")
            .style("z-index", 9)
            .on("click", function () {
                drawBodyMap(icon_img[i].split("_")[0]);
                showOrganList(icon_img[i].split("_")[0]);
            });

        human_svg.append("text")
            .text(icon_title[i])
            .attr("class", "icon_title")
            .attr("x", 95 + i * 130)
            .attr("y", 510)
            .attr("fill", "gray")
            .attr("font-weight", "bold")
            .style("font-size", "13px")
            .style("cursor", "pointer")
            .style("z-index", 9)
            .on("click", function () {
                $(".body_organs").remove();
                drawBodyMap(icon_img[i].split("_")[0]);
                showOrganList(icon_img[i].split("_")[0]);
            });
    }


    //////////////////////////////////////////////////////////////////////////////////////////
    //根据选择的性别展示对应的人体图
    function drawBodyMap(sex) {
        // console.log(sex)
        $(".body_map").remove();
        if (sex === "man") {
            d3.select("#body_background_rect")
                .attr("fill", "rgb(184, 215, 240, 0.2)");
            human_svg.append("svg:image")
                .attr("xlink:href", "./static/image/body/man.svg")
                .attr("id", "man_img")
                .attr("class", "body_map")
                .attr("width", human_svg_width / 1.2)
                .attr("height", human_svg_height / 1.1)
                .attr("x", human_svg_width / 11)
                .attr("y", human_svg_height / 50);

            drawOrgans("man");

        } else {
            d3.select("#body_background_rect")
                .attr("fill", "rgba(240, 185, 237, 0.2)");
            human_svg.append("svg:image")
                .attr("xlink:href", "./static/image/body/woman.svg")
                .attr("id", "woman_img")
                .attr("class", "body_map")
                .attr("width", human_svg_width / 1.3)
                .attr("height", human_svg_height / 1.1)
                .attr("x", human_svg_width / 8)
                .attr("y", human_svg_height / 50);

            drawOrgans("woman");
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    //添加人体器官
    function drawOrgans(sex) {
        show_organ_sex = sex;
        let disease_organs, organs_list;
        let disease_count;

        if (sex === "man") {
            disease_organs = man_disease_organs;
            organs_list = man_organs;
            disease_count = man_disease_count;
        } else {
            disease_organs = woman_disease_organs;
            organs_list = woman_organs;
            disease_count = woman_disease_count;
        }
        for (let i = 0; i < disease_organs.length; i++) {
            let organ_name = disease_organs[i];
            if (organ_name in organs_list) {
                organs_list[organ_name]["opacity"] = disease_count[organ_name];
                human_svg.append("svg:image")
                    .attr("xlink:href", "./static/image/body/" + organ_name + ".svg")
                    .attr("id", sex + "_body_" + organ_name)
                    .attr("class", "body_organs")
                    .attr("width", organs_list[organ_name]["width"])
                    .attr("height", organs_list[organ_name]["height"])
                    .attr("x", organs_list[organ_name]["x"])
                    .attr("y", organs_list[organ_name]["y"])
                    .style("opacity", organs_list[organ_name]["opacity"])
            }
        }

        // //画出所有器官，用作调试
        // let lis = Object.keys(organs_list);
        // for (let i = 0; i < lis.length; i++) {
        //     console.log(organs_list[lis[i]]);
        //
        //     let organ_name = disease_organs[i];
        //     // organs_list[organ_name]["opacity"] = disease_count[organ_name];
        //     human_svg.append("svg:image")
        //         .attr("xlink:href", "./static/image/body/" + lis[i] + ".svg")
        //         .attr("id", sex + "_body_" + organ_name)
        //         .attr("width", organs_list[lis[i]]["width"])
        //         .attr("height", organs_list[lis[i]]["height"])
        //         .attr("x", organs_list[lis[i]]["x"])
        //         .attr("y", organs_list[lis[i]]["y"])
        //         .style("opacity", organs_list[lis[i]]["opacity"])
        // }

    }

    /////////////////////////////////////////////////////////////////////////////////////////
    // 展示器官排列详情
    function showOrganList(sex) {
        $(".disease_organ_list").remove();
        let disease_organs, organs_list, disease_name, disease_advice;
        let titles;
        if (sex === "man") {
            disease_organs = man_disease_organs;
            organs_list = man_organs;
            disease_name = man_disease_name;
            disease_advice = man_disease_advice;
            titles = "男性患者患病器官";
        } else {
            disease_organs = woman_disease_organs;
            organs_list = woman_organs;
            disease_name = woman_disease_name;
            disease_advice = woman_disease_advice;
            titles = "女性患者患病器官";
        }

        let counter = 0, col = 0;

        organ_svg.append("text")
            .text(titles)
            .attr("x", 100)
            .attr("y", 20)
            .attr("class", "disease_organ_list")
            .attr("fill", "#393e46")
            .attr("font-size", 17)
            .attr("font-weight", "bold");

        for (let i = 0; i < disease_organs.length; i++) {
            let organ_name = disease_organs[i];

            let disease_id = "tag_" + organ_name;
            //计算图标位置
            let item_x = -65;
            let item_y = 100;
            counter++;
            if (counter > 3) {
                counter = 1;
                col += 1;
                item_y += col * 110;
                item_x += counter * 110;
            } else {
                item_x += counter * 110;
                item_y += col * 110;
            }

            //疾病名称
            organ_svg.append("text")
                .text(disease_name[organ_name])
                .attr("id", "disease_name" + i)
                .attr("class", "disease_organ_list")
                .attr("x", item_x - 40)
                .attr("y", item_y - 55)
                .attr("fill", "#91091e")
                .attr("font-weight", "bold")
                .style("font-size", "12px")
                .style("opacity", 0);
            organ_svg.append("circle")
                .attr("id", "circle" + i)
                .attr("class", "disease_organ_list")
                .attr("cx", item_x)
                .attr("cy", item_y)
                .attr("r", 35)
                .style("stroke", "#c9d6df")
                .style("stroke-width", 2)
                .style("fill", "#E6E6E6");

            organ_svg.append("svg:image")
                .attr("xlink:href", "./static/image/body/" + organ_name + ".svg")
                .attr("id", disease_id)
                .attr("class", "disease_organ_list")
                .attr("width", 50)
                .attr("height", 50)
                .attr("x", item_x - 25)
                .attr("y", item_y - 25)
                .style("cursor", "pointer")
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

                    //隐藏其他未选择的器官
                    for (let j = 0; j < disease_organs.length; j++) {
                        let show_organ = "#" + sex + "_body_" + organ_name;
                        let now_organ = "#" + sex + "_body_" + disease_organs[j];

                        if (now_organ !== show_organ) {
                            human_svg.select(now_organ)
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
                        human_svg.select(now_organ)
                            .style("opacity", organs_list[disease_organs[j]]["opacity"])
                    }
                    //隐藏疾病名称
                    d3.select("#disease_name" + i)
                        .style("opacity", 0);
                })
                .on("click", () => {
                    let disease_list = disease_name[organ_name].split(',');
                    //展示疾病信息
                    drawDiseaseInfo(disease_list);
                })
        }
    }


}