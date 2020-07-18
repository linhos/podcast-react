import React, {useState, useEffect} from 'react';
import loginUser from '../services/loginUser';

interface User {
    active: boolean;
    email: string;
    name: string;
}

interface UserSession {
    user: {
      [key:string]: User
    }
    errors: Array<string>
  }


const useLogin = (email: string, password:string) => {

    const [user, setUser] = useState<UserSession>({user:{}, errors: []});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const result = loginUser(email, password);
        setUser(result);
        setLoading(false);
    }, []);

    return {user, loading};

}

export default useLogin;
