import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export function Footer() {

    const {studentsQuantity, newStudent} = useContext(UserContext);

    return(
        <footer>
            <hr />
            <h4>Alunos online na plataforma: {studentsQuantity}</h4>
            <button onClick={ () => newStudent() }>
                Novo Aluno
            </button>
        </footer>
    )
}