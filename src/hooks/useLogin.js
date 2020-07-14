import React, {useState, useEffect} from 'react';
import loginUser from '../services/loginUser';

const useLogin = (email, password) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const result = loginUser(email, password);
        setUser(result);
        setLoading(false);
    }, []);

    return {user, loading};

}

export default useLogin;
