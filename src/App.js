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
    { id: 1, title: "aa", body: "zz", status: false, like: true },
    { id: 2, title: "cc", body: "y", status: true, like: false },
    { id: 3, title: "zz", body: "j", status: true, like: true },
    { id: 4, title: "ee", body: "u", status: false, like: false },
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

  // const removePost = (post) => {
  //   setPosts(posts.filter((p) => p.id !== post.id));
  //   let deleteArray = (prev) => {
  //     let deleteItem = [...sortedAndSearchedPosts].filter(
  //       (p) => p.id === post.id
  //     );
  //     return [...prev, deleteItem];
  //   };
  //   setDeleted(deleteArray);
  //   console.log(deleted);
  // };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    setDeleted((prev) => {
      let deletedItem = [...sortedAndSearchedPosts].filter(
        (p) => p.id === post.id
      );
      return [...prev, deletedItem];
    });
    console.log(deleted);
  };

  useEffect(() => {
    setFiltered(sortedAndSearchedPosts);
  }, [sortedAndSearchedPosts]);

  const [filtered, setFiltered] = useState(sortedAndSearchedPosts);

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
