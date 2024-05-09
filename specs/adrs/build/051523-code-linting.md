---
title: Code linting
status: proposed
date: 2023-05-15
deciders: Mark Lucernas, Hieu Pham
consulted: Akshay Prabhu
informed: Everyone
---

# Code linting

## Context and Problem Statement

- We need to lint our code using standard rules.
- Easy no-brainer setup
- Can be automated
- Easily integrated with popular IDEs

## Considered Options

- ESlint
- Prettier
- Manual linting

## Decision Outcome

- Chosen option: Both ESlint and Prettier at the same time

## Consequences

We found out that ESlint and Prettier are both good tools for linting. However,
they have different purposes. ESlint is used for linting (semantic analysis)
JavaScript code while Prettier is used for formatting (syntactic analysis) code.
We can use both of them at the same time, but we need to configure them to work
together.

As we have decided to use both ESlint and Prettier, we need to configure them to
work together which can be done by using
[eslint-config-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

## Pros and Cons of the Options

### ESlint

[ESlint](https://eslint.org/)

- Pro: Mark has experience with ESlint
- Pro: Can be automated
- Pro: Can be integrated with IDEs
- Pro: Can be integrated with git hooks (git pre-commit hook)
- Pro: Can be integrated with CI/CD pipelines

### Prettier

[Prettier](https://prettier.io/)

- Pro: Can be automated
- Pro: Can be integrated with IDEs
- Pro: Can be integrated with git hooks (git pre-commit hook)
- Pro: Can be integrated with CI/CD pipelines

### Manual linting

- Pro: No additional setup
- Pro: Forces us to write good readable code
- Con: Super tedious and may not be consistent among developers

## More Information

- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

