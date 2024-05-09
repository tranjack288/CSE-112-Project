---
title: JSDoc for documentation generation
status: accepted
date: 2023-05-15
deciders: Mark Lucernas, Hieu Pham
consulted: Akshay Prabhu
informed: Backend team
---

# JSDoc for documentation generation

## Context and Problem Statement

- We need to generate documentation for our code.
- Don't have time to create a wiki ourselves
- Wan't to use our existing code comments to generate documentation
    - Simple and lightweight

## Considered Options

- Host a wiki page for our repo
- JSDoc

## Decision Outcome

Chosen option: "[JSDoc](https://jsdoc.app/)", because it is simple and
lightweight and we can use our existing code comments to generate documentation.
Also, it forces us to write good comments and code documentations and code that
is self-explanatory.

### Consequences

- Good: We need to write good comments and code documentations and code that is
  self-explanatory.
- Good: We can use our existing code comments to generate documentation.
- Bad: We need to learn how to use JSDoc.

## Pros and Cons of the Options

### Hosting a wiki page for our repo

- Pro: because we can write our own documentation page
- Pro: More control over the documentation
- Con: Can be time consuming

### Using JSDoc

[JSDoc](https://jsdoc.app/)

- Pro: Simple and lightweight
- Pro: Automatically generated from code comments
- Pro: Can be automated
- Con: Additional learning curve and framework installation

## More Information

[JSDoc](https://jsdoc.app/)

