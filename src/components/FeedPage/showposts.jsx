import { getPostsAction } from "../redux/actions";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import { Container } from "react-bootstrap";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const chunks = [];
  useEffect(() => {
    dispatch(getPostsAction());
    sliceArray();
  }, []);

  const chunkSize = 10;

  const sliceArray = () => {
    for (let i = 0; i < posts.length; i += chunkSize) {
      const chunk = posts.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    return chunks;
  };

  console.log(sliceArray());

  return (
    <>
      <div>
        {/* {posts && posts.map((i) => <Postcard data={i} />)} */}
        {posts && posts.map((c) => <Postcard data={c} key={c._id}/>)}
      </div>
    </>
  );
};

export default ShowPosts;
