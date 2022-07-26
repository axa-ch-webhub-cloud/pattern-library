export const args = {
  innerscroll: '',
  maxheight: '',
};

export const argTypes = {
  innerscroll: { control: 'text' },
  maxheight: { control: 'text' },
};

export const model = {
  thead: [
    { html: 'Age', sort: 'ASC' },
    { html: 'Name', sort: 'ASC' },
    { html: 'City', sort: 'DESC' },
    { html: 'Date of entry', sort: 'DESC' },
    { html: 'Date of exit', sort: 'DESC' },
    { html: 'Department' },
  ],
  tbody: [
    [
      { html: '<span>55</span>' },
      { html: '<span>Peter</span>' },
      { html: '<span>Winterthur</span>' },
      { html: '<span>22.04.2019</span>' },
      { html: '<span>10.01.2020</span>' },
      { text: 'A' },
    ],
    [
      { html: '<span>22</span>' },
      { html: '<span>Chris</span>' },
      { html: '<span>Zürich</span>' },
      { html: '<span>04.04.2019</span>' },
      { html: '<span>04.06.2019</span>' },
      { text: 'B' },
    ],
    [
      { html: '<span>46</span>' },
      { html: '<span>Hubert</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>01.01.2020</span>' },
      { html: '<span>05.02.2020</span>' },
      { text: 'C' },
    ],
    [
      { html: '<span>51</span>' },
      { html: '<span>Petra</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>08.10.2018</span>' },
      { html: '<span>11.12.2019</span>' },
      { text: 'D' },
    ],
    [
      { html: '<span>18</span>' },
      { html: '<span>Maria</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>29.04.2018</span>' },
      { html: '<span>01.01.2020</span>' },
      { text: 'E' },
    ],
    [
      { html: '<span>29</span>' },
      { html: '<span>David</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>02.05.2013</span>' },
      { html: '<span>02.05.2015</span>' },
      { text: 'F' },
    ],
  ],
};
