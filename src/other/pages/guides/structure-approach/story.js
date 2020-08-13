import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../../components/10-atoms/text';
import '../../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../../utils/contact-footer';

const story = storiesOf('Guides|Structure Approach', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Structure Approach', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Structure approach</axa-heading>
      <axa-heading rank="2" variant="secondary"
        >What is atomic design?</axa-heading
      >
      <axa-text variant="size-1">
        Atomic Design by Brad Frost is the one of methodology that can
        accelerate the process of creating modular designs. He introduced the
        concept of atomic design about 5 years ago.
      </axa-text>
      <axa-text variant="size-1">
        “As the craft of web design continues to evolve, We’re recognizing the
        need to develop thoughtful design systems, rather than creating simple
        collections of web pages. Atomic design is a methodology for creating
        design systems.”
      </axa-text>
      <axa-text variant="size-1">
        In my word, Build systems mean that not design or develop the front-end
        full pages. It’s like small element like as buttons. And all small
        components combine to a large unit like a label, box, table, forms. The
        final full pages are then just a combination of these units.it is the
        idea of the building system.
      </axa-text>
      <axa-heading rank="2" variant="secondary"
        >How to categorize an element?</axa-heading
      >
      <axa-text variant="size-1">
        Atomic Design, is an approch that allows you to decompose your UI
        elements in order to standardelize and organize them. An important
        question that we need to ask ourselves is “to what category does a given
        component belong to?”.
      </axa-text>
      <axa-text variant="size-1">
        Each design system can have its own categorization depending on the
        context and purpose. The objectif of the Axa design system is to be of
        use to all Axa entities, how have differents needs and constraints. The
        way we’ve thought the categorization of the elements is to allow for as
        much possibilities as possible.
      </axa-text>
      <div class="structure-approach-vertical-content">
        <div class="structure-approach-vertical-content__item">
          <img
            class="structure-approach-vertical-content__image"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMzMzIj48cGF0aCBkPSJtOTIuMjI3IDIuODY0ODF2MTIzLjM4MTE5bS00Mi4xMzY1LTEyMy4zODExOXYxMjMuMzgxMTl6bTE0LjA0NTkgMHYxMjMuMzgxMTl6bTE0LjA0NTMgMHYxMjMuMzgxMTl6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iLjg2NDgyMyIvPjxwYXRoIGQ9Im00My4wNjgyIDIuODY0ODF2MTIzLjM4MTE5bS0xNC4wNDU5LTEyMy4zODExOXYxMjMuMzgxMTl6bTcuMDIzIDB2MTIzLjM4MTE5em0yMS4wNjgyIDB2MTIzLjM4MTE5em0xNC4wNDUzIDB2MTIzLjM4MTE5em0xNC4wNDU5IDB2MTIzLjM4MTE5em0xNC4wNDUzIDB2MTIzLjM4MTE5eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9Ii44NjQ4MjMiLz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yMi4xNzg3IDJoODQuMTc2M3YxMjQuNTM0aC04NC4xNzYzeiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9Ii41NzY1NDkiLz48L2c+PC9zdmc+"
            alt="Materials"
          />
          <div class="structure-approach-vertical-content__col">
            <p class="structure-approach-vertical-content__kicker">Materials</p>
            <p class="structure-approach-vertical-content__text">
              Elements that we categorize in the “Constants” category will be
              transversal element as font-size, line-height, colors, spacing
              units, elevation, etc. This are also elements that are not
              specific to a given component.
            </p>
          </div>
        </div>
        <div class="structure-approach-vertical-content__item">
          <img
            class="structure-approach-vertical-content__image"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYzLjUgODkuMDMzOGMxMy41NDk2IDAgMjQuNTMzOC0xMC45ODQyIDI0LjUzMzgtMjQuNTMzOCAwLTEzLjU0OTctMTAuOTg0Mi0yNC41MzM5LTI0LjUzMzgtMjQuNTMzOS0xMy41NDk3IDAtMjQuNTMzOSAxMC45ODQyLTI0LjUzMzkgMjQuNTMzOSAwIDEzLjU0OTYgMTAuOTg0MiAyNC41MzM4IDI0LjUzMzkgMjQuNTMzOHoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtNjMuNSA5OWMxOS4wNTM4IDAgMzQuNS0xNS40NDYyIDM0LjUtMzQuNXMtMTUuNDQ2Mi0zNC41LTM0LjUtMzQuNS0zNC41IDE1LjQ0NjItMzQuNSAzNC41IDE1LjQ0NjIgMzQuNSAzNC41IDM0LjV6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMS44ODE4MiIvPjxwYXRoIGQ9Im04OC4wMzM5IDQ2LjA5OTZjMy4zODc0IDAgNi4xMzM0LTIuNzQ2MSA2LjEzMzQtNi4xMzM1cy0yLjc0Ni02LjEzMzUtNi4xMzM0LTYuMTMzNWMtMy4zODc1IDAtNi4xMzM1IDIuNzQ2MS02LjEzMzUgNi4xMzM1czIuNzQ2IDYuMTMzNSA2LjEzMzUgNi4xMzM1eiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg=="
            alt="Atoms"
          />
          <div class="structure-approach-vertical-content__col">
            <p class="structure-approach-vertical-content__kicker">Atoms</p>
            <p class="structure-approach-vertical-content__text">
              Elements that we categorize in the “Atoms” category will be basic
              elements, generally used more than once on a web page. They are
              generally embedded in other elements (larger ones), and have
              various states and variations.
            </p>
          </div>
        </div>
        <div class="structure-approach-vertical-content__item">
          <img
            class="structure-approach-vertical-content__image"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQ1LjU3NiA5Ny44MTc3YzguOTY1Ny0xLjU4MDkgMTQuOTUzNi0xMC4xMjMgMTMuMzc0My0xOS4wNzkyLTEuNTc5Mi04Ljk1NjMtMTAuMTI3NS0xNC45MzUyLTE5LjA5MzItMTMuMzU0M3MtMTQuOTUzNyAxMC4xMjMtMTMuMzc0NCAxOS4wNzkyYzEuNTc5MiA4Ljk1NjMgMTAuMTI3NiAxNC45MzUyIDE5LjA5MzMgMTMuMzU0M3oiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtMjcuNzgwMSA5OS40MDE0YzkuNzczMiA4LjIwMDYgMjQuMzgzMiA2Ljg3OTYgMzIuNjMyNC0yLjk1MTggOC4yNDkxLTkuODMxIDcuMDEzNi0yNC40NDg1LTIuNzU5Ni0zMi42NDkycy0yNC4zODMyLTYuODc5MS0zMi42MzI0IDIuOTUxOGMtOC4yNDkxIDkuODMxLTcuMDEzNiAyNC40NDg1IDIuNzU5NiAzMi42NDkyeiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIuMDA2NTIiLz48cGF0aCBkPSJtNjcuMjUxIDU3LjY5NDNjLTkuMDg5Mi43OTUzLTE3LjA5ODYtNS44ODc4LTE3Ljg4OTQtMTQuOTI3LS43OTA5LTkuMDM5MiA1LjkzNjMtMTcuMDExNiAxNS4wMjU2LTE3LjgwNjggOS4wODkyLS43OTUyIDE3LjA5ODYgNS44ODc5IDE3Ljg4OTQgMTQuOTI3MXMtNS45MzYzIDE3LjAxMTUtMTUuMDI1NiAxNy44MDY3eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im04OC4yNjQyIDM1LjMxMzNjMy4zMDIgMTIuMzIzMy00LjA3MDIgMjUuMDA2LTE2LjQ2NjMgMjguMzI3NXMtMjUuMTIxOS0zLjk3NTktMjguNDIzOS0xNi4yOTkyIDQuMDcwMi0yNS4wMDU5IDE2LjQ2NjMtMjguMzI3NGMxMi4zOTYxLTMuMzIxNiAyNS4xMjE5IDMuOTc1OCAyOC40MjM5IDE2LjI5OTF6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMi4wMDY1MiIvPjxwYXRoIGQ9Im01OC4wOTk0IDYwLjQwMjJjLjU4NyAyLjE5MDgtLjcyMzUgNC40NDU0LTIuOTI3MiA1LjAzNTktMi4yMDM2LjU5MDQtNC40NjU4LS43MDY5LTUuMDUyOS0yLjg5NzctLjU4Ny0yLjE5MDguNzIzNS00LjQ0NTQgMi45MjcyLTUuMDM1OSAyLjIwMzYtLjU5MDQgNC40NjU5LjcwNjkgNS4wNTI5IDIuODk3N3oiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtODguOTE4NCA5OC4xMTA3Yy05LjA3ODkgMC0xNi40Mzg4LTcuMzkyOS0xNi40Mzg4LTE2LjUxMjRzNy4zNTk5LTE2LjUxMjQgMTYuNDM4OC0xNi41MTI0IDE2LjQzODYgNy4zOTI5IDE2LjQzODYgMTYuNTEyNC03LjM1OTcgMTYuNTEyNC0xNi40Mzg2IDE2LjUxMjR6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTgwLjk3MDkgMTAzLjQzNGMtMTEuOTg4Ni00LjM2MzctMTguMTQ5MS0xNy42NzcxLTEzLjc1OTgtMjkuNzM2NSA0LjM4OTItMTIuMDU5NSAxNy42NjYxLTE4LjI5ODIgMjkuNjU0OC0xMy45MzQ3IDExLjk4ODEgNC4zNjM1IDE4LjE0OTEgMTcuNjc2OSAxMy43NjAxIDI5LjczNjMtNC4zOSAxMi4wNTk5LTE3LjY2NjUgMTguMjk3OS0yOS42NTUxIDEzLjkzNDl6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMi4wMDY1MiIvPjxnIGZpbGw9IiMzMzMiPjxwYXRoIGQ9Im03Ny43MjEyIDY0LjMzMzhjLTIuMTMxMy0uNzc1Ny0zLjIyNjUtMy4xNDI0LTIuNDQ2My01LjI4NjIuNzgwMy0yLjE0MzggMy4xNDA2LTMuMjUyOCA1LjI3MTktMi40NzcxIDIuMTMxMi43NzU4IDMuMjI2NSAzLjE0MjUgMi40NDYyIDUuMjg2Mi0uNzgwMyAyLjE0MzgtMy4xNDA2IDMuMjUyOC01LjI3MTggMi40NzcxeiIvPjxwYXRoIGQ9Im02NC40MjgyIDgyLjk2MjVjLTIuMTMxMy0uNzc1Ny0zLjIyNjUtMy4xNDI0LTIuNDQ2Mi01LjI4NjIuNzgwMy0yLjE0MzcgMy4xNDA2LTMuMjUyOCA1LjI3MTgtMi40NzcgMi4xMzEzLjc3NTcgMy4yMjY1IDMuMTQyNCAyLjQ0NjIgNS4yODYyLS43ODAyIDIuMTQzNy0zLjE0MDUgMy4yNTI4LTUuMjcxOCAyLjQ3N3oiLz48L2c+PC9zdmc+"
            alt="Molecules"
          />
          <div class="structure-approach-vertical-content__col">
            <p class="structure-approach-vertical-content__kicker">Molecules</p>
            <p class="structure-approach-vertical-content__text">
              Elements that we categorize in the “Molecules” category will
              generally be elements that contain smaller and simpler elements
              (atoms). Generally this elements are made for specific cases and
              can be used more than once.
            </p>
          </div>
        </div>
        <div class="structure-approach-vertical-content__item">
          <img
            class="structure-approach-vertical-content__image"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM0LjQ1NzQgNDMuNDE1OWM2LjE2MjgtMS4wODY3IDEwLjI3NzktNi45NjM2IDkuMTkxMi0xMy4xMjY0LTEuMDg2Ny02LjE2MjktNi45NjM2LTEwLjI3NzktMTMuMTI2NC05LjE5MTItNi4xNjI5IDEuMDg2Ni0xMC4yNzc5IDYuOTYzNS05LjE5MTIgMTMuMTI2NCAxLjA4NjYgNi4xNjI4IDYuOTYzNSAxMC4yNzc5IDEzLjEyNjQgOS4xOTEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im0yMi4yNDc0IDQ0LjQ2MzVjNi43NDE0IDUuNjU2NiAxNi43OTIxIDQuNzc3MyAyMi40NDg3LTEuOTY0MSA1LjY1NjctNi43NDEzIDQuNzc3NC0xNi43OTItMS45NjQtMjIuNDQ4Ni02Ljc0MTMtNS42NTY3LTE2Ljc5Mi00Ljc3NzQtMjIuNDQ4NyAxLjk2NC01LjY1NjYgNi43NDEzLTQuNzc3MyAxNi43OTIgMS45NjQgMjIuNDQ4N3oiIHN0cm9rZT0iIzQ5NzZiYSIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTIyLjI0NzQgNDQuNDYzNWM2Ljc0MTQgNS42NTY2IDE2Ljc5MjEgNC43NzczIDIyLjQ0ODctMS45NjQxIDUuNjU2Ny02Ljc0MTMgNC43Nzc0LTE2Ljc5Mi0xLjk2NC0yMi40NDg2LTYuNzQxMy01LjY1NjctMTYuNzkyLTQuNzc3NC0yMi40NDg3IDEuOTY0LTUuNjU2NiA2Ljc0MTMtNC43NzczIDE2Ljc5MiAxLjk2NCAyMi40NDg3eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtMzQuNDU4IDc1LjYwNDVjNi4xNjI4LTEuMDg2NyAxMC4yNzc5LTYuOTYzNiA5LjE5MTItMTMuMTI2NC0xLjA4NjctNi4xNjI5LTYuOTYzNi0xMC4yNzc5LTEzLjEyNjQtOS4xOTEyLTYuMTYyOSAxLjA4NjYtMTAuMjc3OSA2Ljk2MzUtOS4xOTEyIDEzLjEyNjQgMS4wODY2IDYuMTYyOCA2Ljk2MzUgMTAuMjc3OSAxMy4xMjY0IDkuMTkxMnoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtMjIuMjQ4IDc2LjY1MjFjNi43NDE0IDUuNjU2NiAxNi43OTIgNC43NzczIDIyLjQ0ODctMS45NjQxIDUuNjU2Ny02Ljc0MTMgNC43Nzc0LTE2Ljc5Mi0xLjk2NC0yMi40NDg2LTYuNzQxNC01LjY1NjctMTYuNzkyLTQuNzc3NC0yMi40NDg3IDEuOTY0LTUuNjU2NyA2Ljc0MTMtNC43Nzc0IDE2Ljc5MiAxLjk2NCAyMi40NDg3eiIgc3Ryb2tlPSIjNDk3NmJhIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtMjIuMjQ4IDc2LjY1MjFjNi43NDE0IDUuNjU2NiAxNi43OTIgNC43NzczIDIyLjQ0ODctMS45NjQxIDUuNjU2Ny02Ljc0MTMgNC43Nzc0LTE2Ljc5Mi0xLjk2NC0yMi40NDg2LTYuNzQxNC01LjY1NjctMTYuNzkyLTQuNzc3NC0yMi40NDg3IDEuOTY0LTUuNjU2NyA2Ljc0MTMtNC43Nzc0IDE2Ljc5MiAxLjk2NCAyMi40NDg3eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtMzQuNDU3NyAxMDcuNTQyYzYuMTYyOC0xLjA4NyAxMC4yNzc5LTYuOTY0IDkuMTkxMi0xMy4xMjY2LTEuMDg2Ny02LjE2MjktNi45NjM2LTEwLjI3NzktMTMuMTI2NC05LjE5MTItNi4xNjI5IDEuMDg2Ni0xMC4yNzc5IDYuOTYzNS05LjE5MTMgMTMuMTI2NCAxLjA4NjcgNi4xNjI0IDYuOTYzNiAxMC4yNzc0IDEzLjEyNjUgOS4xOTE0eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im0yMi4yNDc3IDEwOC41ODljNi43NDE0IDUuNjU3IDE2Ljc5MiA0Ljc3OCAyMi40NDg3LTEuOTY0IDUuNjU2Ny02Ljc0MSA0Ljc3NzQtMTYuNzkxNi0xLjk2NC0yMi40NDgzcy0xNi43OTItNC43Nzc0LTIyLjQ0ODcgMS45NjQtNC43Nzc0IDE2Ljc5MjMgMS45NjQgMjIuNDQ4M3oiIHN0cm9rZT0iIzQ5NzZiYSIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTIyLjI0NzcgMTA4LjU4OWM2Ljc0MTQgNS42NTcgMTYuNzkyIDQuNzc4IDIyLjQ0ODctMS45NjQgNS42NTY3LTYuNzQxIDQuNzc3NC0xNi43OTE2LTEuOTY0LTIyLjQ0ODNzLTE2Ljc5Mi00Ljc3NzQtMjIuNDQ4NyAxLjk2NC00Ljc3NzQgMTYuNzkyMyAxLjk2NCAyMi40NDgzeiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtNjQuMzU3NyA0My41ODc2Yy02LjI1NzkgMC0xMS4zMzA5LTUuMDczLTExLjMzMDktMTEuMzMwOXM1LjA3My0xMS4zMzEgMTEuMzMwOS0xMS4zMzEgMTEuMzMxIDUuMDczMSAxMS4zMzEgMTEuMzMxLTUuMDczMSAxMS4zMzA5LTExLjMzMSAxMS4zMzA5eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im05NS45NzE1IDQzLjU4NjhjLTYuMjU3OSAwLTExLjMzMS01LjA3My0xMS4zMzEtMTEuMzMwOXM1LjA3MzEtMTEuMzMxIDExLjMzMS0xMS4zMzFjNi4yNTc1IDAgMTEuMzMwNSA1LjA3MzEgMTEuMzMwNSAxMS4zMzFzLTUuMDczIDExLjMzMDktMTEuMzMwNSAxMS4zMzA5eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im01OC45MDc5IDQ3LjIzYy04LjI2OTUtMy4wMDk5LTEyLjUzMzMtMTIuMTUzNi05LjUyMzUtMjAuNDIzMiAzLjAwOTktOC4yNjk1IDEyLjE1MzYtMTIuNTMzMyAyMC40MjMyLTkuNTIzNCA4LjI2OTUgMy4wMDk4IDEyLjUzMzMgMTIuMTUzNiA5LjUyMzQgMjAuNDIzMS0zLjAwOTggOC4yNjk1LTEyLjE1MzYgMTIuNTMzMy0yMC40MjMxIDkuNTIzNXoiIHN0cm9rZT0iIzQ5NzZiYSIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTU4LjkwNzkgNDcuMjNjLTguMjY5NS0zLjAwOTktMTIuNTMzMy0xMi4xNTM2LTkuNTIzNS0yMC40MjMyIDMuMDA5OS04LjI2OTUgMTIuMTUzNi0xMi41MzMzIDIwLjQyMzItOS41MjM0IDguMjY5NSAzLjAwOTggMTIuNTMzMyAxMi4xNTM2IDkuNTIzNCAyMC40MjMxLTMuMDA5OCA4LjI2OTUtMTIuMTUzNiAxMi41MzMzLTIwLjQyMzEgOS41MjM1eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtOTAuNTIxNyA0Ny4yMjkyYy04LjI2OTYtMy4wMDk5LTEyLjUzMzQtMTIuMTUzNi05LjUyMzUtMjAuNDIzMSAzLjAwOTktOC4yNjk2IDEyLjE1MzYtMTIuNTMzNCAyMC40MjI4LTkuNTIzNSA4LjI3IDMuMDA5OCAxMi41MzQgMTIuMTUzNiA5LjUyNCAyMC40MjMxLTMuMDEgOC4yNjk2LTEyLjE1MzggMTIuNTMzNC0yMC40MjMzIDkuNTIzNXoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTQ3LjQ3ODMgMzQuNTc4MWMtMS40Njk5LS41MzUtMi4yMjc5LTIuMTYwNC0xLjY5MjgtMy42MzA0LjUzNS0xLjQ3IDIuMTYwNC0yLjIyNzkgMy42MzA0LTEuNjkyOXMyLjIyNzkgMi4xNjA0IDEuNjkyOSAzLjYzMDRjLS41MzUxIDEuNDctMi4xNjA1IDIuMjI3OS0zLjYzMDUgMS42OTI5eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im03OS4wOTIxIDM0LjU3NzRjLTEuNDctLjUzNTEtMi4yMjc5LTIuMTYwNC0xLjY5MjktMy42MzA0LjUzNTEtMS40NyAyLjE2MDUtMi4yMjggMy42MzA0LTEuNjkyOSAxLjQ3LjUzNSAyLjIyOCAyLjE2MDQgMS42OTI5IDMuNjMwNC0uNTM1IDEuNDctMi4xNjA0IDIuMjI3OS0zLjYzMDQgMS42OTI5eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im02NC4zNTc4IDc1Ljc3NjVjLTYuMjU3OSAwLTExLjMzMDktNS4wNzMxLTExLjMzMDktMTEuMzMxczUuMDczLTExLjMzMDkgMTEuMzMwOS0xMS4zMzA5IDExLjMzMSA1LjA3MyAxMS4zMzEgMTEuMzMwOS01LjA3MzEgMTEuMzMxLTExLjMzMSAxMS4zMzF6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTk1Ljk3MTIgNzUuNzc2OGMtNi4yNTc5IDAtMTEuMzMxLTUuMDczMS0xMS4zMzEtMTEuMzMxczUuMDczMS0xMS4zMzA5IDExLjMzMS0xMS4zMzA5YzYuMjU3OCAwIDExLjMzMDggNS4wNzMgMTEuMzMwOCAxMS4zMzA5cy01LjA3MyAxMS4zMzEtMTEuMzMwOCAxMS4zMzF6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTU4LjkwOCA3OS40MTg4Yy04LjI2OTUtMy4wMDk4LTEyLjUzMzMtMTIuMTUzNi05LjUyMzUtMjAuNDIzMSAzLjAwOTktOC4yNjk1IDEyLjE1MzYtMTIuNTMzMyAyMC40MjMyLTkuNTIzNSA4LjI2OTUgMy4wMDk5IDEyLjUzMzMgMTIuMTUzNiA5LjUyMzQgMjAuNDIzMi0zLjAwOTggOC4yNjk1LTEyLjE1MzYgMTIuNTMzMy0yMC40MjMxIDkuNTIzNHoiIHN0cm9rZT0iIzQ5NzZiYSIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTU4LjkwOCA3OS40MTg4Yy04LjI2OTUtMy4wMDk4LTEyLjUzMzMtMTIuMTUzNi05LjUyMzUtMjAuNDIzMSAzLjAwOTktOC4yNjk1IDEyLjE1MzYtMTIuNTMzMyAyMC40MjMyLTkuNTIzNSA4LjI2OTUgMy4wMDk5IDEyLjUzMzMgMTIuMTUzNiA5LjUyMzQgMjAuNDIzMi0zLjAwOTggOC4yNjk1LTEyLjE1MzYgMTIuNTMzMy0yMC40MjMxIDkuNTIzNHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTkwLjUyMTQgNzkuNDE5MWMtOC4yNjk2LTMuMDA5OC0xMi41MzM0LTEyLjE1MzYtOS41MjM1LTIwLjQyMzFzMTIuMTUzNi0xMi41MzMzIDIwLjQyMzEtOS41MjM1YzguMjcgMy4wMDk5IDEyLjUzMyAxMi4xNTM2IDkuNTI0IDIwLjQyMzItMy4wMSA4LjI2OTUtMTIuMTU0MSAxMi41MzMzLTIwLjQyMzYgOS41MjM0eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48ZyBmaWxsPSIjMzMzIj48cGF0aCBkPSJtNDcuNDc4NCA2Ni43NjdjLTEuNDY5OS0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI5LTMuNjMwNC41MzUxLTEuNDcgMi4xNjA1LTIuMjI3OSAzLjYzMDUtMS42OTI5IDEuNDY5OS41MzUgMi4yMjc5IDIuMTYwNCAxLjY5MjggMy42MzA0LS41MzUgMS40Ny0yLjE2MDQgMi4yMjc5LTMuNjMwNCAxLjY5Mjl6Ii8+PHBhdGggZD0ibTc5LjA5MTggNjYuNzY3M2MtMS40Ny0uNTM1MS0yLjIyNzktMi4xNjA1LTEuNjkyOS0zLjYzMDUuNTM1MS0xLjQ2OTkgMi4xNjA0LTIuMjI3OSAzLjYzMDQtMS42OTI4IDEuNDcuNTM1IDIuMjI4IDIuMTYwNCAxLjY5MjkgMy42MzA0LS41MzUgMS40Ny0yLjE2MDQgMi4yMjc5LTMuNjMwNCAxLjY5Mjl6Ii8+PHBhdGggZD0ibTk0Ljc2MjIgNTEuMTY2MWMtMS40Ny0uNTM1MS0yLjIyOC0yLjE2MDUtMS42OTI5LTMuNjMwNS41MzUtMS40Njk5IDIuMTYwNC0yLjIyNzkgMy42MzA0LTEuNjkyOCAxLjQ3LjUzNSAyLjIyNzkgMi4xNjA0IDEuNjkyOSAzLjYzMDQtLjUzNTEgMS40Ny0yLjE2MDUgMi4yMjc5LTMuNjMwNCAxLjY5Mjl6Ii8+PHBhdGggZD0ibTYzLjk1NjggNTEuMTY2NGMtMS40Ny0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI5LTMuNjMwNC41MzUxLTEuNDcgMi4xNjA1LTIuMjI3OSAzLjYzMDUtMS42OTI5IDEuNDY5OS41MzUxIDIuMjI3OSAyLjE2MDQgMS42OTI4IDMuNjMwNC0uNTM1IDEuNDctMi4xNjA0IDIuMjI4LTMuNjMwNCAxLjY5Mjl6Ii8+PHBhdGggZD0ibTMxLjczNDQgNTEuMTY1OGMtMS40Ny0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI5LTMuNjMwNC41MzUxLTEuNDcgMi4xNjA1LTIuMjI3OSAzLjYzMDQtMS42OTI5IDEuNDcuNTM1MSAyLjIyOCAyLjE2MDQgMS42OTI5IDMuNjMwNC0uNTM1IDEuNDctMi4xNjA0IDIuMjI3OS0zLjYzMDQgMS42OTI5eiIvPjxwYXRoIGQ9Im02NC4yOTgxIDEwNy44MTljLTYuMjU3OSAwLTExLjMzMDktNS4wNzMtMTEuMzMwOS0xMS4zMzA3IDAtNi4yNTc5IDUuMDczLTExLjMzMSAxMS4zMzA5LTExLjMzMXMxMS4zMzEgNS4wNzMxIDExLjMzMSAxMS4zMzFjMCA2LjI1NzctNS4wNzMxIDExLjMzMDctMTEuMzMxIDExLjMzMDd6Ii8+PHBhdGggZD0ibTk1LjkxMTUgMTA3LjgyYy02LjI1NzkgMC0xMS4zMzEtNS4wNzMtMTEuMzMxLTExLjMzMTQgMC02LjI1NzkgNS4wNzMxLTExLjMzMDkgMTEuMzMxLTExLjMzMDkgNi4yNTc1IDAgMTEuMzMwNSA1LjA3MyAxMS4zMzA1IDExLjMzMDkgMCA2LjI1ODQtNS4wNzMgMTEuMzMxNC0xMS4zMzA1IDExLjMzMTR6Ii8+PC9nPjxwYXRoIGQ9Im01OC44NDgzIDExMS40NjJjLTguMjY5NS0zLjAxLTEyLjUzMzMtMTIuMTU0LTkuNTIzNS0yMC40MjM1IDMuMDA5OS04LjI2OTYgMTIuMTUzNi0xMi41MzM0IDIwLjQyMzItOS41MjM1IDguMjY5NSAzLjAwOTkgMTIuNTMzMyAxMi4xNTM2IDkuNTIzNCAyMC40MjMtMy4wMDk4IDguMjctMTIuMTUzNiAxMi41MzMtMjAuNDIzMSA5LjUyNHoiIHN0cm9rZT0iIzQ5NzZiYSIgc3Ryb2tlLXdpZHRoPSIxLjY0MTY5Ii8+PHBhdGggZD0ibTU4Ljg0ODMgMTExLjQ2MmMtOC4yNjk1LTMuMDEtMTIuNTMzMy0xMi4xNTQtOS41MjM1LTIwLjQyMzUgMy4wMDk5LTguMjY5NiAxMi4xNTM2LTEyLjUzMzQgMjAuNDIzMi05LjUyMzUgOC4yNjk1IDMuMDA5OSAxMi41MzMzIDEyLjE1MzYgOS41MjM0IDIwLjQyMy0zLjAwOTggOC4yNy0xMi4xNTM2IDEyLjUzMy0yMC40MjMxIDkuNTI0eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNjQxNjkiLz48cGF0aCBkPSJtOTAuNDYxNyAxMTEuNDYyYy04LjI2OTYtMy4wMS0xMi41MzM0LTEyLjE1MzctOS41MjM1LTIwLjQyMzJzMTIuMTUzNi0xMi41MzM0IDIwLjQyMjgtOS41MjM1YzguMjcgMy4wMDk5IDEyLjUzNCAxMi4xNTM2IDkuNTI0IDIwLjQyMjctMy4wMSA4LjI3LTEyLjE1MzggMTIuNTM0LTIwLjQyMzMgOS41MjR6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMS42NDE2OSIvPjxwYXRoIGQ9Im00Ny40MTg3IDk4LjgwOThjLTEuNDY5OS0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI4LTMuNjMwNC41MzUtMS40NyAyLjE2MDQtMi4yMjc5IDMuNjMwNC0xLjY5MjlzMi4yMjc5IDIuMTYwNCAxLjY5MjkgMy42MzA0Yy0uNTM1MSAxLjQ3LTIuMTYwNSAyLjIyNzktMy42MzA1IDEuNjkyOXoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtNzkuMDMyMSA5OC44MWMtMS40Ny0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI5LTMuNjMwNC41MzUxLTEuNDcgMi4xNjA1LTIuMjI3OSAzLjYzMDQtMS42OTI5IDEuNDcuNTM1MSAyLjIyOCAyLjE2MDUgMS42OTI5IDMuNjMwNS0uNTM1IDEuNDY5OS0yLjE2MDQgMi4yMjc5LTMuNjMwNCAxLjY5Mjh6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTk0LjcwMjUgODMuMjA4OGMtMS40Ny0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI5LTMuNjMwNHMyLjE2MDQtMi4yMjc5IDMuNjMwNC0xLjY5MjljMS40Ny41MzUxIDIuMjI3OSAyLjE2MDUgMS42OTI5IDMuNjMwNS0uNTM1MSAxLjQ2OTktMi4xNjA0IDIuMjI3OS0zLjYzMDQgMS42OTI4eiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Im02My44OTcxIDgzLjIwOTJjLTEuNDY5OS0uNTM1LTIuMjI3OS0yLjE2MDQtMS42OTI4LTMuNjMwNC41MzUtMS40NyAyLjE2MDQtMi4yMjc5IDMuNjMwNC0xLjY5MjkgMS40Njk5LjUzNSAyLjIyNzkgMi4xNjA0IDEuNjkyOCAzLjYzMDQtLjUzNSAxLjQ3LTIuMTYwNCAyLjIyNzktMy42MzA0IDEuNjkyOXoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJtMzEuNjc0NyA4My4yMDg2Yy0xLjQ3LS41MzUtMi4yMjc5LTIuMTYwNC0xLjY5MjktMy42MzA0LjUzNTEtMS40NyAyLjE2MDUtMi4yMjc5IDMuNjMwNS0xLjY5MjkgMS40Njk5LjUzNSAyLjIyNzkgMi4xNjA0IDEuNjkyOCAzLjYzMDQtLjUzNSAxLjQ3LTIuMTYwNCAyLjIyNzktMy42MzA0IDEuNjkyOXoiIGZpbGw9IiMzMzMiLz48L3N2Zz4="
            alt="Organisms"
          />
          <div class="structure-approach-vertical-content__col">
            <p class="structure-approach-vertical-content__kicker">Organisms</p>
            <p class="structure-approach-vertical-content__text">
              Elements that we categorize in the “Organisms” category will
              generally be complex elements that are composed of smaller
              elements. You can think of Organisms as a “part” of a web page. A
              web page will be the result of the somme of organisms.
            </p>
          </div>
        </div>
      </div>
    </div>

    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
