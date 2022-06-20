import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
      isChecked: false,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
        cls="postForm__input"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
        cls="postForm__input"
      />
      <Button onClick={addNewPost} cls="btn_create">
        Create Post
      </Button>
    </form>
  );
};

export default PostForm;
