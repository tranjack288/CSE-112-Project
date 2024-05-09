---
title: ES6 vs Common JS
status: accepted
date: 2023-05-15
deciders: Mark Lucernas, Hieu Pham
consulted: Akshay Prabhu
informed: Backend and Frontend team
---

# ES6 vs Common JS

## Context and Problem Statement

- We need to decide whether to use ES6 or Common JS for our project.
- We are mainly concerned with the following:
  - Works with static website
  - We don't have a server

## Decision Outcome

Chosen option: "ES6", because our project is a static website and we don't have a
server. We have tried to use Common JS but it doesn't work with our static
website because the browser cannot understand Common JS and cannot import node
modules directly.

### Consequences

- Good: ES6 is the standard for JavaScript and browsers understand it.
- Good: We can use ES6 modules to import node modules directly.
- Bad: We are limited to the features of ES6.

## Pros and Cons of the Options

### ES6

- Pro: ES6 is the standard for JavaScript and browsers understand it.
- Pro: We can use ES6 modules to import node modules directly.
- Con: We are limited to the features of ES6.

### Common JS

- Pro: We can use the latest features of JavaScript.
- Pro: `require` is very simple to use.
- Con: We cannot use Common JS with our static website because the browser
  cannot understand Common JS and cannot import node modules directly.
- Con: We need to use a bundler like Webpack to bundle our code.
- Con: We need to use a transpiler like Babel to transpile our code.

