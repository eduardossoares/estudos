import { ReactNode, createContext, useState } from "react";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    studentName: string;
    studentsQuantity: number;
    changeName: (name: string) => void;
    changeQuantity: (quantity: number) => void;
    newStudent: () => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [studentName, setStudentName] = useState("Eduardo Soares");
    const [studentsQuantity, setStudentsQuantity] = useState(31);

    const changeName = (name: string): void => {
        setStudentName(name);
    }

    const changeQuantity = (quantity: number): void => {
        setStudentsQuantity(quantity);
    }

    const newStudent = () => {
      setStudentsQuantity(students => students + 1)
    }

    return (
        <UserContext.Provider value={{ studentName, studentsQuantity, changeName, 
        changeQuantity, newStudent }}>
            {children}
        </UserContext.Provider>
    )
}