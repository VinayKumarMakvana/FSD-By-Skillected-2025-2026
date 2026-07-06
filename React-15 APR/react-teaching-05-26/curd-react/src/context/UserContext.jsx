import {createContext} from 'react';
import { useState } from 'react';

const UserContext = createContext();

export function UserProvider({children}) {

    const [user1,setUser1] = useState("Skillected");

    return (
        <UserContext.Provider value={{user1,setUser1}}>
            {children}
        </UserContext.Provider>
    );
}   
export default UserContext;