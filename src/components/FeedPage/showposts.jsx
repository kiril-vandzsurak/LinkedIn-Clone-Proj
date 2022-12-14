import { getPostsAction } from "../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import { Container } from "react-bootstrap";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <div >{posts && posts.slice(20,40).map((i) => <Postcard data={i} />)}</div>
    </>
  );
};

export default ShowPosts;
