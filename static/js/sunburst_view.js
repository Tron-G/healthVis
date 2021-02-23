
function sunburst(json) {
    // console.log(json)
    var width =$("#sunburst").width();
    var height = $("#sunburst").height();
    var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
    var b = {
        w: 150, h: 30, s: 3, t: 10
    };

    var colors = {
        "January": "#c1cbd7",
        "February": "#afb0b2",
        "March": "#c5b8a5",
        "April": "#bfbfbf",
        "May": "#e0e5df",
        "June": "#b5c4b1",
        "July": "#8696a7",
        "August": "#96a48b",
        "September": "#d8caaf",
        "October": "#939391",
        "November": "#7b8b6f",
        "December": "#f0ebe5",
        "man": "#9ca8b8",
        "woman": "#ddd1d1",
    };

// Total size of all segments; we set this later, after loading the data.
    var totalSize = 0;

    var vis = d3.select("#chart").append("svg:svg")
        .attr("width", width)
        .attr("height", height*0.8)
        .append("svg:g")
        .attr("id", "container")
        .attr("transform", "translate(" + width / 2.3 + "," + height/2.5  + ")");

    var partition = d3.layout.partition()
        .size([2 * Math.PI, radius * radius])
        .value(function (d) {
            return d.size;
        });

    var arc = d3.svg.arc()
        .startAngle(function (d) {
            return d.x;
        })
        .endAngle(function (d) {
            return d.x + d.dx;
        })
        .innerRadius(function (d) {
            if (d.depth == '3') {
                return Math.sqrt(d.parent.parent.y / 15 + d.parent.parent.dy + d.parent.dy / 15) + d.parent.num
            } else if (d.depth == '1') {
                return Math.sqrt(d.y / 2.5)
            } else if (d.depth == '2') {
                return Math.sqrt(d.parent.y / 15 + d.parent.dy);
            }

        })
        .outerRadius(function (d) {
            if (d.depth == '2') {
                return Math.sqrt(d.parent.y / 15 + d.parent.dy + d.dy / 15) + d.num
            } else if (d.depth == '3') {
                return Math.sqrt(d.parent.parent.y / 15 + d.parent.parent.dy + d.parent.dy / 15) + d.parent.num + d.num*0.9
            } else if (d.depth == '1') {
                return Math.sqrt(d.y / 15 + d.dy);
            }
        })


// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
        initializeBreadcrumbTrail();

        d3.select("#togglelegend").on("click", toggleLegend);

        // Bounding circle underneath the sunburst, to make it easier to detect
        // when the mouse leaves the parent g.
        vis.append("svg:circle")
            .attr("r", radius)
            .style("opacity", 0);

        // For efficiency, filter nodes to keep only those large enough to see.
        var nodes = partition.nodes(json)
            .filter(function (d) {
                return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
            });

        var path = vis.data([json]).selectAll("path")
            .data(nodes)
            .enter().append("svg:path")
            .attr("display", function (d) {
                return d.depth ? null : "none";
            })
            .attr("id",function (d) {
                if(d.depth=='1')
                {
                    return d.name.split('.')[0];
                }

            })
            .attr("d", arc)
            .attr("fill-rule", "evenodd")
            .style("fill", function (d) {
                if (d.name.substr(0, 4) == 'girl') return "#ddd1d1";
                else {
                    return colors[getCaption(d.name)];
                }

            })
            .style("opacity", 1)
            .on("mouseover", mouseover)
            .on("click",function (d) {
                let translation = {
                    "February": 2,
                    "March": 3,
                    "May": 5,
                    "June": 6,
                    "July": 7,
                    "August": 8,
                    "September": 9,
                    "October": 10,
                    "November": 11
                };
                // console.log(translation[this.id]);
                TRANSPORT_DATA["month"] = translation[this.id];
                redraw("/get_month_data", "select_time");
            });

        // Add the mouseleave handler to the bounding circle.
        d3.select("#container").on("mouseleave", mouseleave);

        // Get total size of the tree = value of root node from partition.
       // console.log(path.node())
        // console.log(json)
       // console.log(path.node().__data__);
        totalSize = path.node().__data__.value;

    function getCaption(obj) {
        var index = obj.lastIndexOf("\.");
        obj = obj.substring(index + 1, obj.length);
//  console.log(obj);
        return obj;
    }

    function getStr(obj) {
        var str = obj.split('.')[0]
        return str;
    }

// Main function to draw and set up the visualization, once we have the data.

// Fade all but the current sequence, and show it in the breadcrumb trail.
    function mouseover(d) {

        var percentage = (100 * d.value / totalSize).toPrecision(3);
        var percentageString = percentage + "%";
        if (percentage < 0.1) {
            percentageString = "< 0.1%";
        }

        var sequenceArray = getAncestors(d);
        updateBreadcrumbs(sequenceArray, percentageString);

        // Fade all the segments.
        d3.selectAll("path")
            .style("opacity", 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        vis.selectAll("path")
            .filter(function (node) {
                return (sequenceArray.indexOf(node) >= 0);
            })
            .style("opacity", 1);
    }

// Restore everything to full opacity when moving off the visualization.
    function mouseleave(d) {

        // Hide the breadcrumb trail
        d3.select("#trail")
            .style("visibility", "hidden");

        // Deactivate all segments during transition.
        d3.selectAll("path").on("mouseover", null);

        // Transition each segment to full opacity and then reactivate it.
        d3.selectAll("path")
            .transition()
            .duration(1000)
            .style("opacity", 1)
            .each("end", function () {
                d3.select(this).on("mouseover", mouseover);
            });

        d3.select("#explanation")
            .style("visibility", "hidden");
    }

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
    function getAncestors(node) {
        var path = [];
        var current = node;
        while (current.parent) {
            path.unshift(current);
            current = current.parent;
        }
        return path;
    }

    function initializeBreadcrumbTrail() {
        // Add the svg area.
        var trail = d3.select("#sequence").append("svg:svg")
            .attr("width", width)
            .attr("height", 30)
            .attr("id", "trail");
        // Add the label at the end, for the percentage.

    }

// Generate a string that describes the points of a breadcrumb polygon.
    function breadcrumbPoints(d, i) {
        var points = [];
        points.push("0,0");
        points.push(b.w/1.5 + ",0");
        points.push(b.w/1.5 + b.t + "," + (b.h / 2));
        points.push(b.w/1.5 + "," + b.h);
        points.push("0," + b.h);
        if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
            points.push(b.t + "," + (b.h / 2));
        }
        return points.join(" ");
    }

// Update the breadcrumb trail to show the current sequence and percentage.
    function updateBreadcrumbs(nodeArray, percentageString) {

        // Data join; key function combines name and depth (= position in sequence).
        var g = d3.select("#trail")
            .selectAll("g")
            .data(nodeArray, function (d) {
                return d.name + d.depth;
            });

        // Add breadcrumb and label for entering nodes.
        var entering = g.enter().append("svg:g");

        entering.append("svg:polygon")
            .attr("points", breadcrumbPoints)
            .style("fill", function (d) {
                if (d.name.substr(0, 4) == 'girl') return "#ddd1d1";
                else {
                    return colors[getCaption(d.name)];
                }
            });

        entering.append("svg:text")
            .attr("x", (b.w/1.5 + b.t) / 2)
            .attr("y", b.h / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .text(function (d) {
                return getStr(d.name);
            });

        // Set position for entering and updating nodes.
        g.attr("transform", function (d, i) {
            return "translate(" + i * (b.w/1.5 + b.s) + ", 0)";
        });

        // Remove exiting nodes.
        g.exit().remove();

        // Now move and update the percentage at the end.
        d3.select("#trail").select("#endlabel")
            .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
            .attr("y", b.h / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .text(percentageString);

        // Make the breadcrumb trail visible, if it's hidden.
        d3.select("#trail")
            .style("visibility", "");

    }



    function toggleLegend() {
        var legend = d3.select("#legend");
        if (legend.style("visibility") == "hidden") {
            legend.style("visibility", "");
        } else {
            legend.style("visibility", "hidden");
        }
    }

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how
// often that sequence occurred.
// function buildHierarchy(csv) {
//   var root = {"name": "root", "children": []};
//   for (var i = 0; i < csv.length; i++) {
//     var sequence = csv[i][0];
//     var size = +csv[i][1];
//     if (isNaN(size)) { // e.g. if this is a header row
//       continue;
//     }
//     var parts = sequence.split(";");
//     var currentNode = root;
//     for (var j = 0; j < parts.length; j++) {
//       var children = currentNode["children"];
//       var nodeName = parts[j];
//       var childNode;
//       if (j + 1 < parts.length) {
//    // Not yet at the end of the sequence; move down the tree.
//  	var foundChild = false;
//  	for (var k = 0; k < children.length; k++) {
//  	  if (children[k]["name"] == nodeName) {
//  	    childNode = children[k];
//  	    foundChild = true;
//  	    break;
//  	  }
//  	}
//   // If we don't already have a child node for this branch, create it.
//  	if (!foundChild) {
//  	  childNode = {"name": nodeName, "children": []};
//  	  children.push(childNode);
//  	}
//  	currentNode = childNode;
//       } else {
//  	// Reached the end of the sequence; create a leaf node.
//  	childNode = {"name": nodeName, "size": size};
//  	children.push(childNode);
//       }
//     }
//   }
//   return root;
// };
}