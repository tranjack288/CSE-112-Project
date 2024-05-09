---
title: Vanilla CSS instead of a CSS framework
status: accepted
date: 2023-05-11
deciders: Hieu Pham, Mark Lucernas
consulted: Akshay Prabhu
informed: Frontend team
---

# Vanilla CSS instead of a CSS framework

## Context and Problem Statement

- We need to style our web app with mobile-first responsive design.
- We don't want extra bloat from a CSS framework.
- We want to use our own custom styles but also benefit from general styling
  from a CSS framework.

## Considered Options

- Bootstrap
- Vanilla CSS

## Decision Outcome

Chosen option: "Vanilla CSS", because it reduces bloat and allows us to use our
own custom styles. Although it means more work intially, it reduces the amount
of debugging and refactoring we have to do later on since we will design our own
framework from the ground up.

## Consequences

- Good: We can use our own custom styles and manage our own custom components.
- Good: We can reduce bloat from a CSS framework.
- Bad: We need to write our own CSS framework.
- Bad: Can be time consuming at first learning how to write our own CSS
  framework.

## Pros and Cons of the Options

### Bootstrap

[Bootstrap](https://getbootstrap.com/)

- Pro: We can use a CSS framework that is already built and easy to customize.
- Pro: Mobile-first responsive design.
- Con: Extra bloat from a CSS framework.
- Con: We need to learn how to use Bootstrap.
- Con: Its not our own code so we need to be extra careful and fully understand
  how it works.

### Vanilla CSS

- Pro: We can use our own custom styles and manage our own custom components.
- Pro: We can reduce bloat from a CSS framework.
- Con: We need to write our own CSS framework.
- Con: Can be time consuming at first learning how to write our own CSS
  framework.

## More Information

[Bootstrap](https://getbootstrap.com/)
