(() => {
  const CONTAINER = document.querySelector('.container');
  const FORM = document.createElement('form');
  const TEXT_INPUT = document.createElement('input');
  const BTN = document.createElement('button');
  const BTN_RELOAD = document.createElement('button');
  const HEADER = document.createElement('h1');
  const SUB_TITLE = document.createElement('h2');
  const CARD_WRAPPER = document.createElement('div');
  const WRAPPER = document.createElement('div');
  const PARAGRAPH = document.createElement('p');
  const SPAN = document.createElement('span');
  let openCards = 0;

  BTN.disabled = false;

  //Создаём массив из 'num' целых чисел и перемешиваем его
  function shuffledArray(num) {
  let pairedArray = [];
  for (let i = 1; i <= num; i++) {
      pairedArray.push(i, i);
  };
  let currentIndex = pairedArray.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = pairedArray[currentIndex];
      pairedArray[currentIndex] = pairedArray[randomIndex];
      pairedArray[randomIndex] = temporaryValue;
  };
  return pairedArray;
  };

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // function gameTimer(counter) {
  //   let timerCount;
  //   if (timerCount) {
  //     clearInterval(timerCount);
  //   }
  //   timerCount = setInterval(function () {
  //     if (counter) {
  //       FORM.remove();
  //       WRAPPER.prepend(SPAN);
  //       SPAN.classList.add('timer-count')
  //       SPAN.innerHTML = 'Время до конца игры:&nbsp;' + counter + '&nbsp; секунд.';
  //       counter--;
  //     } else {
  //       clearInterval(timerCount);
  //       CONTAINER.append(FORM);
  //     }
  //   }, 1000);
  // }

    //Помещаем в разметку DOM элементы
  document.addEventListener('DOMContentLoaded', () => {
    CONTAINER.prepend(HEADER);
    HEADER.classList.add('heading');
    HEADER.textContent = 'Игра в пары';
    CONTAINER.append(SUB_TITLE);
    SUB_TITLE.classList.add('sub-title');
    SUB_TITLE.textContent = 'Введите любое чётное число от 2 до 10';
    function startGame() {
      CONTAINER.append(FORM);
      FORM.append(TEXT_INPUT);
      TEXT_INPUT.type = 'text';
      TEXT_INPUT.value = '4';
      FORM.append(BTN);
      BTN.textContent = 'Начать игру';
      CONTAINER.append(WRAPPER);
      WRAPPER.classList.add('wrapper')
      WRAPPER.append(CARD_WRAPPER);
      CARD_WRAPPER.classList.add('card-wrapper');
    }
    startGame();
    TEXT_INPUT.addEventListener('input', function () {
      if (TEXT_INPUT.value != '') {
        BTN.disabled = false;
      } else BTN.disabled = true;
    });

    BTN.addEventListener('click', (e) => {
      e.preventDefault();
      CARD_WRAPPER.innerHTML = '';
      let num = TEXT_INPUT.value;
      let numberArray = shuffledArray(num);
      if (num % 2 == 0 && num >=2 && num <= 10) {
        // gameTimer(59);
        for (let i = 0; i < numberArray.length; i++) {
          const CARD = document.createElement('div');
          const INNER_TEXT = document.createElement('span');
          FORM.remove();
          CARD_WRAPPER.append(CARD);
          CARD.classList.add('card');
          CARD.append(INNER_TEXT);
          INNER_TEXT.textContent = `${numberArray[i]}`
          CARD.id = numberArray[i];
        }
      } else {
        CARD_WRAPPER.textContent = 'Не верное число!';
        TEXT_INPUT.value = '4';
      };

      const CARDS = document.querySelectorAll('.card');
      let arrayWithOpenPair = new Array();
      for (let card of CARDS) {
        card.addEventListener('click', (e) => {
          let span = e.target.querySelector('span');
          if (span.classList.contains('active')) {
            return;
          } else {
            span.classList.add('active');
          }
          arrayWithOpenPair.push(card);
          if (arrayWithOpenPair.length === 2) {
            if(arrayWithOpenPair[0].id === arrayWithOpenPair[1].id) {
              openCards += 2;
              if (openCards === numberArray.length) {
                SPAN.remove();
                CARD_WRAPPER.append(PARAGRAPH);
                PARAGRAPH.append(BTN_RELOAD);
                BTN_RELOAD.textContent = 'Начать заново?';
                BTN_RELOAD.addEventListener('click', (e) => {
                  e.preventDefault();
                  WRAPPER.prepend(FORM);
                  CARD_WRAPPER.innerHTML = '';
                });
                openCards = 0;
              }
            } else {
              let array = Array.from(arrayWithOpenPair);
              delay(300)
              .then(() => array[1].querySelector('span').classList.remove('active'))
              .then(() => array[0].querySelector('span').classList.remove('active'))
              .then(() => array.splice(0, array.length));
            }
          } else {
          return;
        }
        arrayWithOpenPair = [];
        card.removeEventListener('click', (e));
    });
  }
  TEXT_INPUT.value = '4';
  BTN.disabled = false;
  BTN.removeEventListener('click', (e));
  BTN_RELOAD.removeEventListener('click', (e))
});
});
})();
