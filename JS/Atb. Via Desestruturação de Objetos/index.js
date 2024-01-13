const subject = {
  name: 'Luiz',
  lastname: 'Miranda',
  age: 30,
  adress: {
    street: 'Av Brasil',
    number: 320
  }
};

const { name, ...rest } = subject;
console.log(rest);