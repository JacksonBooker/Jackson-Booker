---
title: Piecewise Functions
---

# What is A Piecewise Function?

A piecewise function is a function with two or more rules. Each rule will have a restriction on the graph that will generally look something like this: `x < 0`. If they were unrestricted then you would get two functions that overlap with each other and that would not pass the [vertical line](./functions) test. 

This is a piecewise function:
```math
f(x) = \begin{cases} 
x-4 & x \leq 3 \\
8-x & x > 3
\end{cases}
```

Now we need to find:
```math
f(-4), 
f(3),
f(9), 
```
First we find which restriction -4 is allowed to go which is the first one because it is less than 3. For `f(3)` we do the top equation because 3 is equal to 3. And the `f(9)` we do the bottom equation because 9 is greater than 3. 

The answers are: 
```math
\begin{align*}
f(-4) &= -8 \\
f(3)  &= -1 \\
f(9)  &= -1
\end{align*}
```

## Domain and Range 

In all functions, the X value is the Domain and the Y value is the Range. We will now do an example on how to find the domain and range in a piecewise function. There is also a really good [video on this](https://www.youtube.com/watch?reload=9&v=5X-KzzuhgDY&time_continue=282&source_ve_path=MjE0Mjgz&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com). 

```math
f(x) = \begin{cases} 
5x - 14 & \text{if } x \leq 2, \\
7 - \frac{1}{2}x & \text{if } x > 2.
\end{cases}
```
To get the domain and range of this you first do the top expression. Find 2 for X and graph it. Then find another number that is equal to or less than 2. Make sure to graph both points. 

Next do the bottom one. Start with 2 which will be an open circle on the graph because it does not equal 2. Then find a number that is larger than 2 like 3. Once you find those you should be able to see the function on your graph.

Scan through and see if to the left and right that the graph is both infinite and goes towards infinity. Therefore the domain is `(-∞,∞)`.

For the range, it will be infinite from the bottom and the highest that it gets is only 6. Remember that the 6 is not actually equal to 2 so it is open. When we write the interval we will use a parenthesis, and if it 6 did equal 2 we would use a bracket ([). So the Range is `(-∞,6)`