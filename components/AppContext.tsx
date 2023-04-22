import * as React from 'react';
import { createContext } from 'react';


type User = {
    email:string;
};


export type AppContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};


export const AppContext = createContext<AppContextType>({
    user: null,
    setUser: () => {},
});


