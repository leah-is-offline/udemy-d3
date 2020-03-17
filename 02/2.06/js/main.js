/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

/**multiplying the pixel value by a value to seperate the circles on the screen
 * remember the first value of i will be 0
 **/
circles.enter()
    .append("circle")
        .attr("cx", function(d, i){
            return (i * 50) + 25;
        })
        .attr("cy", function(d,i){
            return (i * 10) + 30;
        })
        .attr("r", function(d){
            return d;
        })
        .attr("fill", "red");