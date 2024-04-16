import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creator/user";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {loading, error, user}:any= useSelector((state:any) => state.user)

    const { fetchUsers } = useAction()
    useEffect(()=>{
        fetchUsers()
        console.log(user)
    }, [])

    if (loading) {
        return <h1>Идёт загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <button onClick={()=>{console.log(user)}}>Click</button>
            {Array.from(user).map((us:any) => <div>{us.name}</div>)}
        </div>
    );
};

export default UserList;