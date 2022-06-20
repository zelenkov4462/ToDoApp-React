import React, { useState } from "react";

import styles from "./styles.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const PostItem = ({ post, number, remove }) => {
  const [checked, setChecked] = useState(post.isChecked);

  return (
    <div className={styles.header}>
      <div className={checked ? styles.post_done : styles.post}>
        <div
          className={checked ? styles.post__content_done : styles.post__content}
        >
          <h1>
            {number}. {post.title}
          </h1>
          <div>{post.body}</div>
        </div>
        <div className={styles.btns}>
          <Input
            onChange={() => setChecked(!checked)}
            checked={checked}
            cls="checkBox"
            type="checkbox"
          />
          <Button onClick={() => remove(post)} cls="btn_delete">
            Delete post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
