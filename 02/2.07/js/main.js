/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

/**have the file in the same folder.  */
/**the following line is called a promise
 * a promise can be...
 * -filled
 * -rejected
 * -pending
 */
d3.tsv("data/ages.tsv").then(function(data){
    data.forEach(function(d){
        d.age = +d.age;
    }); 
    /**looping through an array and
     * converting each age value object to an integer**/

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
            .attr("cx", function(d, i){
                console.log(d);
                return (i * 50) + 25;
            })
            .attr("cy", 25)
            .attr("r", function(d){
                return d.age * 2;
            })
            .attr("fill", function(d){
                if (d.name == "Tony") {
                    return "blue";
                }
                else {
                    return "red";
                }
            });
}).catch(function(error){
    console.log(error);
})
