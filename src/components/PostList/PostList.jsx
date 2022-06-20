import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, remove }) => {
  return (
    <div>
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
