import React, {useEffect, useState} from 'react';
import '../../../assets/chat.css'
import axios from "axios";
import {useCookies} from "react-cookie";
import {Simulate} from "react-dom/test-utils";
import timeUpdate = Simulate.timeUpdate;

const Chat = ({chat}:any) => {
    let message: string
    let setMessage:any
    [message, setMessage] = useState('')

    const [loading, setLoading] = useState(true)

    let setChatMessages: any
    let chatMessages: any
     [chatMessages, setChatMessages] = useState()
    const [cookies, setCookie] = useCookies(['user']);
    const request = async () => {
        const resul = await axios.post('http://localhost:3005/getMessages', {
            chat: chat
        }, {withCredentials: true})
        setChatMessages(resul.data.chat[0])
    }



    useEffect(()=>{
        setLoading(true)
        request()
        setTimeout(()=> setLoading(false) ,1100)
    },[chat])



    setTimeout(()=>{
        request()
    },1000)

    function sendMessage() {
        axios.post('http://localhost:3005/setMessage', {
            message: message,
            chat: chat,
        }, {
            withCredentials: true
        })
    }
    return (


        <div className='chatPlace'>
        { loading ? <h1>Загрузка</h1>
            :
            <div className='messagePlace'>
                        {chatMessages ? chatMessages.messages.map((x:any)=>{
                            return <div className='placeMessage'>
                                <div className={x.user === chat ? 'otherMessages' : 'myselfMessage'}>
                                    <p>{x.user}</p><p>сообщение: {x.text}</p>
                                </div>
                            </div>
                        }) : null}
                    </div> }
                    <input onChange={event => setMessage(event.target.value)}/>
                    <button onClick={sendMessage}>send</button>
                </div>

    );
};

export default Chat;