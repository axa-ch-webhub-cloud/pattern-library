const elements = [...Array(35).keys()];

class Cell {
  constructor(el) {
    console.log('Cell');
    el.classList.add('structure');
  }
}

class NotCurrentMonth extends Cell {
  constructor(el) {
    super(el);
    console.log('NotCurrentMonth');
    el.classList.add('grey');
  }
}

class CurrentMonth extends Cell {
  constructor(el) {
    super(el);
    el.classList.add('current');
    console.log('CurrentMonth');
  }
}

class Today extends CurrentMonth {
  constructor(el) {
    super(el);
    el.classList.add('today');
    console.log('Today');
  }
}

const container = document.createElement('div');

elements.map((index) => {
  const element = document.createElement('div');
  element.innerHTML = index + 1;
  container.appendChild(element);

  if (index === 3) {
    return new Today(element);
  }

  if (index > 2 && index < 32) {
    return new CurrentMonth(element);
  }

  return new NotCurrentMonth(element);
});


const el = document.querySelector('.m-datepicker__calenderBody');
el.appendChild(container);
