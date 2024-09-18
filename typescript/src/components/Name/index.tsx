import { useContext } from "react"
import { UserContext } from "../../contexts/user"

export function Name() {
    const { studentName, changeName } = useContext(UserContext);

    return(
        <div>
            <strong>Aluno: {studentName}.</strong>
            <button onClick={() => changeName("Soares")}>
                Mudar nome
            </button>
        </div>
    )
}