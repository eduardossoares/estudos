// const h1 = document.querySelector('.container h1');
// const date = new Date();

// function formatZero(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function getMonth(nameMonth) {
//   const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
//     'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
//     'Novembro', 'Dezembro'];
//   return months[nameMonth];
// }

// function getWeekDay(weekDay) {
//   const weekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
//     'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
//   return weekDays[weekDay];
// }

// function formatDate(date) {
//   const weekDay = date.getDay();
//   const nameMonth = date.getMonth();

//   const formatedWeekDay = getWeekDay(weekDay);
//   const formatedMonth = getMonth(nameMonth);

//   return (
//     `${formatedWeekDay}, ${date.getDate()} de ${formatedMonth} ` +
//     `de ${date.getFullYear()} ` +
//     `(${formatZero(date.getHours())}:${formatZero(date.getMinutes())})`
//   )
// }

// h1.innerHTML = formatDate(date);


// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric'
// }

// h1.innerHTML = data.toLocaleDateString('pt-BR', options);
