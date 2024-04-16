import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {UserDB} from "../../types/request";
import Chat from "./Chat/Chat";
import './mainPage.css'

const MainPage = () => {
    let searchResult: UserDB[]
    let setSearchResult: any
    [searchResult, setSearchResult] = useState([])
    let showChat: {
        chat: string,
        show: boolean,
    }
    let setShowChat: any
    [showChat, setShowChat] = useState({chat: '', show: false})

    const [cookies, setCookie] = useCookies(['user']);
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('');


    let value: any = ''


    useEffect(() => {
        console.log(!cookies)
        if (!cookies.user) window.location.href = '/registration'
    }, [showChat])

    const handleSetCookie = () => {
        setCookie('user', message, {path: '/'});
    }

    const checkSearch = async () => {
        const request = axios.post('http://localhost:3005/getUsers', {
            search: search
        })
        const result = await request
        console.log(result)
        if (result.data !== 'Error') setSearchResult(result.data)
        console.log(searchResult)
    }

    function showCh(x: string) {
        console.log(x)
        setShowChat({
            chat: x,
            show: true,
        })
    }


    return (
        <div className='chatMenu'>
            <div>
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
                <button onClick={checkSearch}>Add Chat</button>
                <div className='listUsers'>
                    {searchResult?.map((x: UserDB) =>
                        <button key={x._id}
                                onClick={() => showCh(x.user)}>{x?.user}</button>)}
                </div>
            </div>
                {showChat.show ? <Chat chat={showChat.chat}></Chat> : null}
        </div>
    );
};

export default MainPage;
