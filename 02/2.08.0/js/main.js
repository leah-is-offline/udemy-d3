/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function(data){
    data.forEach(function(d){
        d.height = +d.height;
    }); 
    /**looping through an array and
     * converting each age value object to an integer**/

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var rects = svg.selectAll("rect")
        .data(data);

    rects.enter()
        .append("rect")
            .attr("x", function(d, i){
                console.log(d);
                return (i * 50) + 25;
            })
            .attr("y", 0)
            .attr("height", function(d,i){
                console.log(d);
                return (i + d.height) //brackets around return value necessary
            })
            .attr("width", 20)
            .attr("fill","black")
    
    }).catch(function(error){
    console.log(error)
});