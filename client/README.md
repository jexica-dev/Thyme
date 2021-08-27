# Project Overview

## Thyme

An interactive website/app where you comment in your goals, new beliefs/positive affirmations, and notes to self.

## Project Description

Thyme is a goal-setting, playful, info-graphic tree that and encourages you to make time to visualize your bucket list or reminders. You're able to "leaf a note" or trim your leaves.

## Wireframes

![Thyme-wireframe](https://i.imgur.com/rOceIFD.png)

## Component Hierarchy

![Thyme-component-hierarchy](https://i.imgur.com/FFZn7fx.png)

## API and Data Sample

Airtable API

```json
{
  "records": [
    {
      "id": "rec1MxWlNpa2hTxm7",
      "fields": {
        "message": "Complete code bootcamp."
      },
      "createdTime": "2021-08-20T04:54:40.000Z"
    },
    {
      "id": "recSRrJd1OAHr1rSg",
      "fields": {
        "message": "Build a plant box for porch herb garden."
      },
      "createdTime": "2021-08-20T04:54:40.000Z"
    },
    {
      "id": "rec4pAIEWBOqmwBCa",
      "fields": {
        "message": "Meditate 15, Skate 30."
      },
      "createdTime": "2021-08-20T04:54:40.000Z"
    }
  ],
  "offset": "rec4pAIEWBOqmwBCa"
}
```

### MVP/PostMVP

#### MVP

- Create an API using Airtable.
- User will add an affirmation to the form and the message will appear on the home page.
- Post (leaf) view and delete.
- Get media queries to render appropriately.

#### PostMVP

- Add a second page: Thymeline: which puts the notes in order chronologically.
- Put an input that renders notes for that specific person.

## Project Schedule

| Day       | Deliverable                                        | Status     |
| --------- | -------------------------------------------------- | ---------- |
| Aug 20    | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Aug 20    | Project Approval                                   | Complete   |
| Aug 21    | Pseudocode / HTML Structure / Start Components     | Incomplete |
| Aug 21    | API Requests / Postman                             | Complete   |
| Aug 23    | React Components / GET POST DELETE                 | Complete   |
| Aug 24    | Pseudocode to actual code                          | Complete   |
| Aug 24    | Initial Clickable Model                            | Complete   |
| Aug 24 25 | MVP Complete                                       | Complete   |
| Aug 25    | Post - MVP                                         | Complete   |
| Aug 27    | Presentations                                      | Complete   |

## Timeframes

| Component                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Adding Form / Leaf / Thymeline |    H     |      5hrs      |     7hrs      |    7hrs     |
| Working with API               |    H     |      4hrs      |     4hrs      |    4hrs     |
| Working with CSS               |    H     |      4hrs      |     5hrs      |    5hrs     |
| Total                          |    H     |     13hrs      |     16hrs     |    16hrs    |

## SWOT Analysis

### Strengths:

Concept, creativity, time management.

### Weaknesses:

Completing the React - real code quicker and getting flexbox to move how I desire. How to get the posts to be in chronological order.

### Opportunities:

Creating a unique take at goal setting, notes to self, new year resolutions. There's an opportunity to be playful with CSS.

### Threats:

Not being able to have enough time to complete the Post-MVP.
