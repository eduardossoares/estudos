import { Name } from "../Name"
import { UserContext } from "../../contexts/user"

import { useContext } from "react"

export function Students() {
    const { studentsQuantity, changeQuantity } = useContext(UserContext);

    return (
        <div>
            <h3>Quantidade de Alunos: {studentsQuantity}</h3>
            <button onClick={() => changeQuantity(10)}>
                Trocar quantidade
            </button>
            <Name />
        </div>
    )
}