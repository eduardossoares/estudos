function switchDay(dayWeek) {
  let dayText;

  switch (dayWeek) {
    case 0:
      dayText = 'Domingo';
      return dayText;
    case 1:
      dayText = 'Segunda';
      return dayText;
    case 2:
      dayText = 'Terça';
      return dayText;
    case 3:
      dayText = 'Quarta';
      return dayText;
    case 4:
      dayText = 'Quinta';
      return dayText;
    case 5:
      dayText = 'Sexta';
      return dayText;
    case 6:
      dayText = 'Sábado';
      return dayText;
    default:
      dayText = '';
      return dayText;
  }
}

const data = new Date('1987-04-20 00:00:00');
let dayWeek = data.getDay();
const dayText = switchDay(dayWeek);

console.log(dayWeek, dayText);