# Ways of Working

## Motivation

The AXA Pattern Library (short: **PL**) is developed by a team of
designers and frontend engineers. This living document therefore seeks to
define the ways in which we work. In what follows, we will keep the description
informal and at a high level, both to ease readability and to allow flexibility.

## Self-organised

Where possible, the team organises itself. When external help is
needed, we prefer to 'pull' the outside stakeholders in for help.

## Agile

We roughly follow established agile methodology.

## Dailies

We have a daily standup where each team member briefly reviews
yesterday's work and what is planned for today's work. We strive to
stay on topic and limit the time to 15 minutes. We have a voluntary moderator
per daily standup. The moderator's job it is to keep the conversation
focussed and within time limits. Team members who are remote are integrated via Teams.

## Demos

We strive to have biweekly demo presentations. Team members present
their work in both a visual and explanatory fashion.

## Team meeting

We have a regular team meeting, usually weekly. We discuss current
topics and plan ahead. We also keep an eye on the social dimension of
the team in connection with this meeting.

## Pairing

We value pairing as a systematic way to collaborate for tasks where
two pairs of eyes and minds arre likely to result in better quality
and stronger results. In our team this goes beyond classical pair
programming, including also designer-developer pairing and
designer-designer collaboration.

## Prioritization

We prioritize incoming tasks &mdash; e.g. an external request for a
new PL component &mdash; on-demand in an agile fashion. We coordinate
with the relevant stakeholders and product owner in determining
priorities.

## Pragmatism

We strive to be pragmatic and goal-oriented in our development
and technology decisions. We try to be grounded in what is really
needed for the job at hand, rather than following the latest fads.

## Code Review

We mandate at least one code review by a team member for each pull
request.

## Code of Conduct

We adhere to our [Code of Conduct](https://raw.githubusercontent.com/axa-ch-webhub-cloud/pattern-library/develop/CODE_OF_CONDUCT.md).

## Release Policies

We rely strictly on [semver](https://semver.org/) in how we version our components. We choose to only release alphas as pre-releases. One special exeption is with components that depend on each other. If a parent component includes another component as child and the child gets a major-release update, then its parent should also undergo a major release even though there is no breaking change. 

If a consumer mixes components with different major versions, we cannot garantee the correct functioning of those components. This can happen for example if the datepicker has a new major release and &mdash; by the above principle &mdash; a parallel major release for its dropdown. In that scenario component consumers should update their dropdowns as well even if used without the datepicker.




