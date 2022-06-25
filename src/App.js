import "./App.css";
import React, { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import ButtonGroup from "./components/ButtonGroup/Button.Group";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Погулять", body: "С собакой", status: false, like: false },
    { id: 2, title: "Ужин", body: "В гостях 18:00", status: true, like: true },
    {
      id: 3,
      title: "Учеба",
      body: "Универ с пн-пт",
      status: true,
      like: false,
    },
    { id: 4, title: "Frontend", body: "All-time", status: false, like: true },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // const [fetchPosts, isLoading, error] = useFetching(async () => {
  //   const posts = await PostService.getAll();
  //   setPosts(posts);
  // });

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const changeStatus = (post) => {
    const newPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...post,
          status: !post.status,
        };
      }
      return p;
    });
    setPosts(newPosts);
  };

  const changeLike = (post) => {
    const newPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...post,
          like: !post.like,
        };
      }
      return p;
    });
    setPosts(newPosts);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const [deleted, setDeleted] = useState([]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    setDeleted((prev) => {
      let deletedItem = [...sortedAndSearchedPosts].filter(
        (p) => p.id === post.id
      );
      return [...prev, ...deletedItem];
    });
    console.log(deleted);
  };
  const [filtered, setFiltered] = useState(sortedAndSearchedPosts);

  useEffect(() => {
    setFiltered(sortedAndSearchedPosts);
  }, [sortedAndSearchedPosts]);

  function todoFilter(status) {
    if (status === "Completed") {
      let newTodo = [...sortedAndSearchedPosts].filter(
        (item) => item.status === true
      );
      setFiltered(newTodo);
    } else if (status === "Uncompleted") {
      let newTodo = [...sortedAndSearchedPosts].filter(
        (item) => item.status === false
      );
      setFiltered(newTodo);
    } else if (status === "All") {
      setFiltered(sortedAndSearchedPosts);
    } else if (status === "Liked") {
      let newTodo = [...sortedAndSearchedPosts].filter(
        (item) => item.like === true
      );
      setFiltered(newTodo);
    } else if (status === "Deleted") {
      setFiltered(deleted);
    }
  }

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
      <PostFilter filter={filter} setFilter={setFilter} />
      <ButtonGroup todoFilter={todoFilter} />

      {/*{error && <h1>Error {error}</h1>}*/}
      {/*{isLoading ? (*/}
      {/*  <div style={{ display: "flex", justifyContent: "center" }}>*/}
      {/*    <Loader />*/}
      {/*  </div>*/}
      {/*) : (*/}
      <PostList
        changeLike={changeLike}
        changeStatus={changeStatus}
        remove={removePost}
        posts={filtered}
      />
      {/*)}*/}
    </div>
  );
}

export default App;
