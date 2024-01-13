function clockWorking() {
  function getTimeFromSeconds(ms) {
    const data = new Date(ms * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const clock = document.querySelector('.clock');
  let segundos = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      segundos++;
      clock.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('restart')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('paused');
      segundos = 0;
    }

    if (element.classList.contains('start')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startClock();
    }

    if (element.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }
  })
}

clockWorking();

