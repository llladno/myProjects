import React, {useState} from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";

const Login = () => {
    let data: any
    let setData: any
    [data,setData] = useState({
        login:'',
        password: ''
    })

    const [cookies, setCookie] = useCookies(['user']);

    async function sendLogin() {
        console.log(data)
        const result = await axios.post('http://localhost:3005/login', {
            data: data
        })

        if(result.data === 'ok') {
            setCookie('user', data.login, { path: '/' })
            window.location.href = '/'
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input onChange={(event) => setData({login: event.target.value, password: data.password})}/>
            <h2>password</h2>
            <input onChange={(event) => setData({password: event.target.value, login: data.login})}/>
            <button onClick={sendLogin}>Отправить</button>
        </div>
    );
};

export default Login;