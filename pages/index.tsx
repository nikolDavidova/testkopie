import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
import {UserDisplay} from "@/components/UserDisplay";
import {AppContext, AppContextType} from "@/components/AppContext";
import {useContext,useReducer, createContext,useState, ChangeEvent} from "react";
import {state} from "sucrase/dist/types/parser/traverser/base";

import


type UserState = {
  email:string;
};


const initialState: UserState = {
  email:'x',
};




type Action=
    | { type: 'login'};




function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'login':
      return {...state, email:action.payload};
    default:
      return state;
  }
}






const Card = () => {


  const { state, dispatch } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  //  const [email, setEmail] = useState('');


  function handleEmailchange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'login', payload: (e.target.value).toString() });
  }
  function handleLogin() {
    setUser((e.target.value))
  }






  return (
      <div>
        <input/>
        <form>
          <label>
            Email:
            <input type="email" value={state.email} onChange={handleEmailchange} />
          </label>


          <button onClick={handleLogin}>Log in</button>


        </form>
      </div>
  );
};




export default function Home() {




  return (
      <div>
        <AppContext.Provider value={{state,dispatch}}>
          <Card />
        </AppContext.Provider>
      </div>
  );
}
