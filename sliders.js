var infData = [0.00, 0.02, 0.04, 0.06, 0.08, 0.1];
var fpData = [0.00, 0.01, 0.02, 0.03, 0.04, 0.05];


var infectedRateSlider = d3
  .sliderBottom()
  .min(d3.min(infData))
  .max(d3.max(infData))
  .width(300)
  .tickFormat(d3.format('.1%'))
  .ticks(5)
  .step(0.001)
  .default(0.01)
  .on('onchange', val => {
    d3.select('#value-simple').text(d3.format('.1%')(val));
  });


var gSimple = d3
  .select('div#slider-simple')
  .append('svg')
  .attr('width', 350)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gSimple.call(infectedRateSlider);

d3.select('#value-simple').text(d3.format('.1%')(infectedRateSlider.value()));

// Step
var falsePosSlider = d3
  .sliderBottom()
  .min(d3.min(fpData))
  .max(d3.max(fpData))
  .width(300)
  .tickFormat(d3.format('.1%'))
  .ticks(5)
  .step(0.001)
  .default(0.01)
  .on('onchange', val => {
    d3.select('#value-step').text(d3.format('.1%')(val));
  });

var gStep = d3
  .select('div#slider-step')
  .append('svg')
  .attr('width', 350)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gStep.call(falsePosSlider);

d3.select('#value-step').text(d3.format('.1%')(falsePosSlider.value()));
