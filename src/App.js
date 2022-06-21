import "./App.css";
import { useState, useMemo } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Walk with dog", body: "13:00 - 14:00", isChecked: true },
    { id: 2, title: "HomeWork", body: "14:00 - 17:00", isChecked: false },
    { id: 3, title: "Dinner", body: "17:00 - 18:00", isChecked: false },
  ]);
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

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
      <Button
        style={{ margin: "30px 0px 0px 5px" }}
        cls="btn_create"
        onClick={() => setModal(true)}
      >
        Создать пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <h1>ToDo</h1>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
