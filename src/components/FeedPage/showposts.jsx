import { getPostsAction } from "../redux/actions";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Container, Spinner, Row } from "react-bootstrap";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [newPosts, setPosts] = useState(posts);
  const loading = useSelector((state) => state.loading.loading);



  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <div>
        {loading && (
          <Row className="justify-content-center mb-3 mt-3">
            <Spinner animation="border" />
          </Row>
        )}
        {posts &&
          posts.slice(0, 50).map((i) => <Postcard data={i} key={i._id} />)}
      </div>
    </>
  );
};

export default ShowPosts;
