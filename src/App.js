import "./App.css";
import { useState, useMemo } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Walk with dog", body: "13:00 - 14:00", isChecked: true },
    { id: 2, title: "HomeWork", body: "14:00 - 17:00", isChecked: false },
    { id: 3, title: "Dinner", body: "17:00 - 18:00", isChecked: false },
  ]);
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("asd");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [sortedPosts, filter.query]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  // };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <h2>Add new task</h2>
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <>
          <h1>ToDo List</h1>
          <PostList remove={removePost} posts={sortedAndSearchedPosts} />
        </>
      ) : (
        <h1>No task</h1>
      )}
    </div>
  );
}

export default App;
