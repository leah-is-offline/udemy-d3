/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

/**what does d3 select do
 * > select returns one element (the firs element that matches this tag on the left)
 * > selectAll returns all elements with matching tags
 * > use d3.select(#id_name) to select the element with a specfici id tage
 * > use d3.selectAll("rect") to return all rects on the page
 * > use d3.selectAll(".class_name") to return all emenets in that class
 */

 /** the chronological steps
  * > 1) select SVG canvas
  *       var svg = d3.select(#canvas)
  * > 2) append something to the canvas
  * 	  var rect = svg.append("rect")
  * > 3) set the attributes of the previously appended item
  *  attr in a d3 function where we can set the attributes of an element
  *       rect.attr("x", 25)
  *       rect.attr("y", 0)
  * 	  rect.attr("width", 150)
  *       rect.attr("heigh", 60)
  *       rect.attr("fill", "blue")
  * 
  * > alternatively) we can use method chaining to clean this up
  * 	 var rect = d3.select("#canvas")
  * 			.append("rect")
  *  				.attr("x", 25)
  *       			.attr("y", 0)
  * 	 			.attr("width", 150)
  *       			.attr("heigh", 60)
  *       			.attr("fill", "blue")
  * 				.
  */

  /**DIV IDS CANNOT HAVE DIGITS IN THEM */
  var svg = d3.select("#css-selector").append("svg")
  .attr("width", 500)
  .attr("height", 400);

var circle = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 20)
.attr("fill", "grey");

var line = svg.append("line")
.attr("x1", 10)
.attr("y1",10)
.attr("x2",10)
.attr("y2",60)
.attr("stroke-width", 10)
.attr("stroke", "blue");

var rect = svg.append("rect")
.attr("width",80)
.attr("height", 90)
.attr("x", 200)
.attr("y", 230)
.attr("fill","red");


var ellipse =  svg.append("ellipse")
.attr("cx", 145)
.attr("cy",25)
.attr("rx", 10)
.attr("ry", 20)
.attr("fill", "green");



