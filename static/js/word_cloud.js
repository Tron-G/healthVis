/**
 * @description 绘制污染物和餐饮种类的词云图
 * @param {array} data  词云显示的词语数组
 * @param {string} div_id 词云要绑定的div的id
 */
function drawWordCloud(data, div_id) {
    $("#word_cloud_svg").remove();
    let dict = {};
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== "") {
            if (dict.hasOwnProperty(data[i])) {
                dict[data[i]] += 1;
            } else {
                dict[data[i]] = 1;
            }
        }
    }

    //将字典转化为数组并按照值排序
    let items = Object.keys(dict).map(function (key) {
        return [key, dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    let max_num = items[0][1];
    let min_num = items[items.length - 1][1];
    let word_padding = 10;
    // 10个词以内统一大小
    if (items.length <= 10) {
        word_padding = 10;
        for (let i = 0; i < items.length; i++) {
            items[i][1] = 15;
        }
    } else {
        word_padding = 2;
        for (let i = 0; i < items.length; i++) {
            items[i][1] = 8 + ((items[i][1] - min_num) / (max_num - min_num)) * 30;
        }
    }

    // console.log("22", items);

    const width = document.getElementById(div_id).offsetWidth;
    const height = document.getElementById(div_id).offsetHeight;
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const svg = d3.select("#" + div_id)
        .append('svg')
        .attr("id", "word_cloud_svg")
        .attr('width', width)
        .attr('height', height);

    const layout = d3.layout.cloud()
        .size([width - 5, height - 5])
        .words(
            items.map(function (d) {
                return {
                    text: d[0],
                    size: d[1]
                };
            })
        )
        .padding(word_padding)
        .rotate(function () {
            return Math.random() * 45;
        })
        .font('Impact')
        .fontSize(function (d) {
            return d.size;
        })
        .on('end', draw);

    layout.start();

    function draw(words) {
        svg.append('g')
            .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .attr('fill', (_, i) => color(i))
            .style('font-size', function (d) {
                return `${d.size}px`;
            })
            .style('font-family', 'Impact')
            .attr('text-anchor', 'middle')
            .attr('transform', function (d) {
                return `translate(${[d.x, d.y]})rotate(${d.rotate})`;
            })
            .text(function (d) {
                return d.text;
            });
    }
}