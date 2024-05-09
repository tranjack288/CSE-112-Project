---
title: Testing Framework
status: accepted
date: 2023-05-15
deciders: Mark Lucernas, Xinle Yu
consulted: Akshay Prabhu
informed: Everyone
---

# Testing Framework

## Context and Problem Statement

- We need to test our code with minimal effort.
- Framwork for unit testing and end-to-end testing
- End-to-end testing framework should be able to test the whole application
    - Should be able to emulate mobile devices

## Considered Options

- Jest + Puppeteer
- Jest + Appium

## Decision Outcome

- Chosen option:

## Consequences


## Pros and Cons of the Options

### Jest + Puppeteer

- Pro: Easy to set up
- Pro: Easy to learn.
- Pro: Mobile device emulation is possible without using `DeviceDescriptors`
    - Does not require a real mobile device (iOS and Android) or an emulator
- Con: Puppeteer is not as powerful as Appium

### Jest + Appium

- Pro: Appium is more powerful than Puppeteer
- Con: Appium is more complicated to set up
- Con: Requires more learning curve
- Con: Need to run the app on a real mobile device (iOS and Android) or emulator

