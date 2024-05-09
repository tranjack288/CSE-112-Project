---
title: Animation Framework
status: accepted
date: 2023-06-06
deciders: Mark Lucernas, Steve Yin
informed: Backend Team
---

# Animation Framework

## Context and Problem Statement

- We need animation simple animation framework that is fast and lightweight and
  supports static web pages.
- Works with Vanilla JS

## Considered Options

- Own implementation
- GSAP
- GSAP + Highway

## Decision Outcome

- Chosen option: GSAP

## Consequences

- GSAP is used by many animation frameworks as a base library, such as Highway,
to make it easier to create animations. However, we decided to use GSAP directly
witihout Highway since Highway produces a lot of complications in our existing
codebase. Highway does a lot of lifting for us but it does not integrate well.

## Pros and Cons of the Options

### Own implementation

- Pro: We can customize it to our needs
- Pro: We can make it as simple as possible
- Pro: No bloat from other libraries
- Con: Takes time and expertise that we don't have to implement
- Con: May not be as good as other libraries
- Con: May not be as fast as other libraries

### GSAP

[GSAP](https://greensock.com/gsap/)

- Pro: Fast and lightweight
- Pro: Supports static web pages
- Pro: Works with Vanilla JS
- Cons: Might take a little bit of time to learn since its very barebones

### GSAP + Highway

[GSAP](https://greensock.com/gsap/) + [Highway](https://highway.js.org/)

- Pro: Do the heavy lifting for us to make our animations look magical
- Pro: Works well with GSAP
- Con: Complicates our codebase
- Con: Not well integrated with our existing codebase
- Con: Project is no longer maintained

