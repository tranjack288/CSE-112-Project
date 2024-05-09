# Tasty Noodles Meeting Minutes XX/XX/XXXX

## Meeting Details

- Type: Brainstorming
- Start Time: 06:30
- End Time: 07:30
- Location: 1st Floor Geisel

### Attendees

- [x] Mark Lucernas
- [x] Hieu Pham
- [x] Darren Yu
- [x] Runhui Wang
- [x] Xinle Yu
- [x] Anthony Yao
- [ ] Yue(Steve) Yin
- [x] Holly Zhu
- [x] Aaron Kann

## Agenda

### Brainstorming Goal

1. Expand from 8-Ball related designs.

### Brainstorming

- 8-Ball Expansion
    - Terror (Noodle) Cards
        - Pros:
            - Adds variety to our fortune telling.
            - Output response bank will be very extensive.
        - Cons:
            - Needs a lot of custom card images.
            - Large response bank can be hard to make.
    - Horoscope (Noodle by Month)
![Image](../resources/horoscope_flowchart.jpg)
        - Pros:
            - Adds more user input so it seems more personal to the user.
            - Responses generated are influenced by a hash function based on the date so output isn't deterministic.
            - Has a old user button for continuing users (aka has memory of previous fortunes).
        - Cons:
            - Very big project that can break if not properly maintained.
    - Fortune Cookie
        - Pros:
            - Has a variety of features we can implement.
              - Ex: Add in lucky lottery numbers.
              - Ex: Add in a future lucky day the user will get.
        - Cons:
            - Very little user input.
            - Very simple, maybe too simple.