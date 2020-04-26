// numTruePosCols
function makeGrid(numRows, numCols, elementSelector, boxIdPrefix,
                  fillColor='#d9d9d9'){
  var rect_height = 14, rect_width = 14,
    numBoxes = numCols * numRows;
    w = numCols * rect_width,
    h = numRows * rect_height;

  // create the svg
  var svg = d3.select(elementSelector).append('svg')
    .attr("width", w)
    .attr("height", h);

  // loop over number of columns
  _.times(numRows, function(n) {
    // create each set of rows
    var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
      .data(d3.range(numCols))
      .enter().append('rect')
      .attr("class", function(d, i) {
          return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
        })
      .attr("id", function(d, i) {
          return boxIdPrefix + (n * numCols + i + 1);
        })
      .attr("width", rect_width - 2)
      .attr("height", rect_height - 2)
      .attr("x", function(d, i) {
          return i * rect_width;
        })
      .attr("y", n * rect_height)
      .attr("fill", fillColor)
      .attr("stroke", '#fffffff')
  });
}
