var infData = [0.00, 0.02, 0.04, 0.06, 0.08, 0.1];
var fpData = [0.00, 0.01, 0.02, 0.03, 0.04, 0.05];
var fnData = [0.00, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];

var infectedRateSlider = d3
  .sliderBottom()
  .min(d3.min(infData))
  .max(d3.max(infData))
  .width(250)
  .tickFormat(d3.format('.1%'))
  .ticks(5)
  .step(0.001)
  .default(0.01)
  .on('onchange', val => {
    d3.select('#value-infection').text(d3.format('.1%')(val));
  });


var gSimple = d3
  .select('div#slider-infection')
  .append('svg')
  .attr('width', 250)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gSimple.call(infectedRateSlider);

d3.select('#value-infection').text(d3.format('.1%')(infectedRateSlider.value()));

var falsePosSlider = d3
  .sliderBottom()
  .min(d3.min(fpData))
  .max(d3.max(fpData))
  .width(250)
  .tickFormat(d3.format('.1%'))
  .ticks(5)
  .step(0.001)
  .default(0.01)
  .on('onchange', val => {
    d3.select('#value-falsepositive').text(d3.format('.1%')(val));
  });

var gFP = d3
  .select('div#slider-falsepositive')
  .append('svg')
  .attr('width', 250)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gFP.call(falsePosSlider);

d3.select('#value-falsepositive').text(d3.format('.1%')(falsePosSlider.value()));

var falseNegSlider = d3
  .sliderBottom()
  .min(d3.min(fnData))
  .max(d3.max(fnData))
  .width(250)
  .tickFormat(d3.format('.0%'))
  .ticks(5)
  .step(0.05)
  .default(0.1)
  .on('onchange', val => {
    d3.select('#value-falsenegative').text(d3.format('.0%')(val));
  });

var gFN = d3
  .select('div#slider-falsenegative')
  .append('svg')
  .attr('width', 250)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gFN.call(falseNegSlider);

d3.select('#value-falsenegative').text(d3.format('.0%')(falseNegSlider.value()));
