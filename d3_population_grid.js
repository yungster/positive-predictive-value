var square = 15,
  numRows = 40,
  numCols = 25,
  numBoxes = numCols * numRows;
  w = numRows * (square ),
  h = numCols * (square );

// create the svg
var svg = d3.select('#population-box').append('svg')
  .attr("width", w)
  .attr("height", h);

// loop over number of columns
_.times(numCols, function(n) {
  // create each set of rows
  var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(numRows))
    .enter().append('rect')
    .attr("class", function(d, i) {
        return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
      })
    .attr("id", function(d, i) {
        return 's-' + (n * numRows + i + 1);
      })
    .attr("width", square - 2)
    .attr("height", square - 2)
    .attr("x", function(d, i) {
        return i * square;
      })
    .attr("y", n * square)
    .attr("fill", '#d9d9d9')
    .attr("stroke", '#fffffff')
});
