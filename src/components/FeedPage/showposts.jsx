import { getPostsAction } from "../redux/actions";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Container, Spinner } from "react-bootstrap";

const ShowPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [newPosts, setPosts] = useState(posts)


  const [numberToShow, setNumberToShow] = useState(10);

  const showMore = () => {
    if (numberToShow + 10 <= newPosts.length) {
      setNumberToShow(numberToShow + 10);
    } else {
      setNumberToShow(newPosts.length);
    }
  };

  const itemsToShow = () => {
      return newPosts
        .slice(0, numberToShow)
        .map((i, index) => <Postcard data={i} key={index} />);
    }
  
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);


  return (
    <>
      <div>
        {posts && posts.slice(0,50).map((i) => <Postcard data={i} key={i._id}/>)}
      </div>
    </>
  );
};

export default ShowPosts;
