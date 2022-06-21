import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h1>No task</h1>;
  }

  return (
    <div>
      <h1>ToDo List</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          key={post.id}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
