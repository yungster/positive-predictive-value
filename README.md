## Positive Predictive Value Calculator

This work consists of a [visualization](https://yungster.github.io/positive-predictive-value/) of the positive predictive value (i.e. precision) of a test given a base rate for a population. The positive predictive value of a test gives the probability of having a condition given a positive test result for a test of that condition.

The population prevalence for the condition being tested for is used as the prior probability. In the context of testing for the COVID-19 virus, this would be the fraction of a certain population that is currently infected. In the case of antibody testing, it is the fraction of the population that possesses the antibody being tested for.

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
