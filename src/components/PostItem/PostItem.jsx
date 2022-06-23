import React, { useState } from "react";

import styles from "./styles.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const PostItem = ({ post, number, remove, changeStatus, changeLike }) => {
  return (
    <div className={styles.header}>
      <div className={post.status ? styles.post_done : styles.post}>
        <div
          className={
            post.status ? styles.post__content_done : styles.post__content
          }
        >
          <h1>
            {number}. {post.title}
          </h1>
          <div>{post.body}</div>
        </div>
        <div className={styles.btns}>
          <label>
            <input
              onChange={() => changeLike(post)}
              className={styles.checkbox}
              type="checkbox"
              checked={post.like}
              value={post.like}
            />
            <span className={styles.fakeCheckbox}></span> Like
          </label>
          <Input
            onChange={() => changeStatus(post)}
            checked={post.status}
            value={post.status}
            cls="checkBox"
            type="checkbox"
          />
          <span></span> Check
          <Button onClick={() => remove(post)} cls="btn_delete">
            Delete post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
