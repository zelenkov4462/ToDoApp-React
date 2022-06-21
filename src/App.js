import "./App.css";
import PostItem from "./components/PostItem/PostItem";
import { useState } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Walk with dog", body: "13:00 - 14:00", isChecked: true },
    { id: 2, title: "HomeWork", body: "14:00 - 17:00", isChecked: false },
    { id: 3, title: "Dinner", body: "17:00 - 18:00", isChecked: false },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <h2>Add new task</h2>
      <PostForm create={createPost} />
      <Input
        cls="postForm__input"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
          { value: "isChecked", name: "По выполнению" },
        ]}
      />
      {posts.length ? (
        <>
          <h1>ToDo List</h1>
          <PostList remove={removePost} posts={posts} />
        </>
      ) : (
        <h1>No task</h1>
      )}
    </div>
  );
}

export default App;
