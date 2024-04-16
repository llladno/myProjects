import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/buttom/MyButton";
import {useState} from 'react';

const PostForm = ({create}) => 
{
    const [post, setPost] = useState({title:"",body:""})

    const addNewPosts =(e)=>{
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "",body:""})
        }
    return(
        <form>
            <MyInput type="text" value = {post.title} 
            onChange = {e => setPost ({...post,title: e.target.value})}
            placeholder='Название'></MyInput>
            <MyInput
            value = {post.body}
            onChange = {e => setPost ({...post,body: e.target.value})}
            type="text" 
            placeholder='Описание'></MyInput>
            <MyButton onClick={addNewPosts}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm