## Positive Predictive Value Calculator

This work consists of an interactive [visualization](https://yungster.github.io/positive-predictive-value/) of the positive predictive value (i.e. precision) of a COVID-19 antibody test given the antibody prevalence in a population (i.e. the fraction of the population that possesses COVID-19 antibodies). The positive predictive value of a test gives the probability of having a condition given a positive test result for a test of that condition.

While this tool presents the result in the context of COVID-19 antibody testing, it can apply to population testing for any condition. For example, in the context of testing for the COVID-19 virus, the selected prevalence would be the fraction of a population that is currently infected with the virus.

The calculator updates the positive predictive value based on user selections for the prevalence in the population and the false positive/negative rates for the test. The population prevalence is used as the prior probability for possessing antibodies. 

![Demo Graphic](/img/app_preview.png)

### Blog Posts

The work complements two blog posts from April 2020 on the topic of, _Where You Live Affects What Your COVID-19 Test Means_.
* [Link to April 18th Post](https://medium.com/@niryungster/where-you-live-affects-what-your-covid-19-test-means-a9cd798fcd10)
* [Link to April 23rd Post](https://medium.com/@niryungster/where-you-live-affects-what-your-covid-19-test-means-a-visual-interpretation-5762d3c2a188)

The concept for this visualization comes from one created by Yael Yungster and Jeff Mekler in the second blog post above to illustrate the false positive paradox.

### False Positive Paradox

Even with very accurate tests, positive predictive power can be low when a condition is rare in a population. In particular, when the false positive rate is higher than the prevalence of the condition, this can give rise to what's sometimes referred to as a false positive paradox, or a base rate fallacy.

### Computation of Positive Predictive Value

This is calculated with Bayes' Theorem:

<img src="https://render.githubusercontent.com/render/math?math=P(\text{infected}\hspace{1mm}|\hspace{1mm}\text{positive}) = \frac{P(\text{positive}\hspace{1mm}|\hspace{1mm}\text{infected})P(\text{infected})}{P(\text{positive})}">

<img src="https://render.githubusercontent.com/render/math?math=P(\text{infected}\hspace{1mm}|\hspace{1mm}\text{ positive}) = \frac{(1-\text{FN rate)}\times\text{prevalence}}{(1-\text{FN rate)}\times\text{prevalence} + (1-\text{prevalence})\times(\text{FP rate})}">
