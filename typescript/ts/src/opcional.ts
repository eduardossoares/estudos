interface PropsRegister {
  name: string;
  email?: string;
  status: boolean;
}

const user: PropsRegister = {
  name: "Eduardo",
  status: true,
};

const newUser = ({ name, email, status }: PropsRegister): void => {
  console.log(`Você se chama ${name}!`);
  console.log(email === undefined ? "Você não possui email registrado!" :
    `Seu email é: ${email}`
  )
  console.log(status ? "Você é usuário(a) VIP!" : "Seu plano não é VIP!");
};

newUser({ name: "Mario", status: true })