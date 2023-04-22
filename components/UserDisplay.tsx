
import { useContext } from 'react';
import { AppContext } from '@/pages/components/AppContext';


function UserDisplay() {
    const { user, setUser } = useContext(AppContext);


    const handleNameChange = () => {
        setUser(null);
    };


    return (
        <div>
            <h1>Welcome, {user?.email || 'Guest'}!</h1>
            <button onClick={handleNameChange}>Change name to Alice</button>
        </div>
    );
}


export default UserDisplay;
