import React, {useMemo, useState} from 'react';
import Counter from "./componnents/Counter";
import ClassCouner from './componnents/ClassCouner';
import "./componnents/styles/App.css"
import PostItem from './componnents/PostItem';
import PostList from './componnents/PostList';
import MyButton from "./componnents/UI/buttom/MyButton.jsx"
import MyInput from './componnents/UI/input/MyInput';
import PostForm from './componnents/PostForm';
import MySelect from './componnents/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "aa",body:"ele",},
    {id: 2, title: "cc",body:"b",},
    {id: 3, title: "bb",body:"a", }
  ])
  const [ele, elo] = useState("Пизда")
  elo
  console.log(elo)
  const [selectedSort, setSelectedSort] = useState("")
  const sortedPosts = useMemo(()=> {
    if(selectedSort){
      console.log("Fn worked")

      return(
        [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
      )
    }
    return posts
  },[selectedSort,posts])

  const [searchQuery,setSearchQuery] = useState("")

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  },[searchQuery,sortedPosts])



  const createPost = (newPost) => {
    setPosts ([...posts,newPost])
  }



  const removePost = (post) => {
    setPosts (posts.filter(p=>p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    console.log(sort)
  }
  return (
    
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{margin:"15px 0"}}></hr>
      <div>
        <MyInput placeholder="Поиск"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}></MyInput>
        <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={"Сортировка"}
        option={[
          {value:"title", name:"По названию"},
          {value:"body", name:"По описанию"},
        ]}
        
        >
        </MySelect>
      </div>
      {posts.length !==0
      ? <PostList remove= {removePost} posts={sortedAndSearchedPosts} title = "Список постов 1"/>
      : alert("Пост не найден! Создайте пост")
    }
    
      </div>
  );
}
export default App;
