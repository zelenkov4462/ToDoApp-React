import "./App.css";
import PostItem from "./components/PostItem/PostItem";
import { useState } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Walk with dog", body: "13:00 - 14:00", isChecked: true },
    { id: 2, title: "HomeWork", body: "14:00 - 17:00", isChecked: false },
    { id: 3, title: "Dinner", body: "17:00 - 18:00", isChecked: false },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <h2>Add new task</h2>
      <PostForm create={createPost} />

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
