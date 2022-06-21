import "./App.css";
import { useMemo, useState } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Walk with dog", body: "13:00 - 14:00", isChecked: true },
    { id: 2, title: "HomeWork", body: "14:00 - 17:00", isChecked: false },
    { id: 3, title: "Dinner", body: "17:00 - 18:00", isChecked: false },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

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
