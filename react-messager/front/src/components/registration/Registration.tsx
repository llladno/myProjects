import React, {useState} from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";

const Registration = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [data, setData] = useState({
        login: '',
        email: '',
        password:'',
    })

    const [statusForm,setStatusForm] = useState(true)

    async function registrationRequest() {
        if (!data.email || !data.login || !data.password) setStatusForm(false)
        else {
            setStatusForm(true)
            let request = axios.post('http://localhost:3005/registration', {
                data
            })
            let result = await request
            if (result.data === 'not unique') alert('Такой пользователь существует')
            else {
                setCookie('user', data.login, { path: '/' })
                window.location.href = '/'
            };
        }
    }

    return (
        <div>
            <div className='form'>
                <h3>Логин</h3>
                <input onChange={(event) => setData({login: event.target.value, email: data.email, password: data.password}) }/>
                <h3>email</h3>
                <input onChange={(event) => setData({login: data.login, email:event.target.value, password: data.password}) }/>
                <h3>Пароль</h3>
                <input onChange={(event) => setData({login: data.login, email:data.email, password: event.target.value}) }/>
                <button onClick={registrationRequest}>Отправить</button>
                {!statusForm ? <h1>Проверьте данные!</h1> : null}
            </div>
        </div>
    );
};

export default Registration;