import { getPostsAction } from "../redux/actions";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Postcard from "./postcards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Container, Spinner } from "react-bootstrap";
import { useMemo } from "react";

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


  // const [loadedPosts, setLoadedPosts] = useState(posts);
  // const [newPosts, setNewPosts] = useState([]);

  // const perPage = 10;
  // const [lastObjectPosition, setLastObjectPosition] = useState(0);

  // const loadPosts = () => {
  //   setNewPosts((current) => {
  //     return [
  //       ...current,
  //       loadedPosts.slice(lastObjectPosition, lastObjectPosition + perPage),
  //     ];
  //   });
  //   setLastObjectPosition((currentValue) => {
  //     return currentValue + perPage;
  //   });
  // };

  return (
    <>
      <div>
        {/* {itemsToShow.length ? itemsToShow : <Spinner animation="border" />}
        <Button variant="info" onClick={showMore}>
          Show More
        </Button> */}
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={loadPosts}
          dataLength={posts.length}
          hasMore={lastObjectPosition < loadedPosts.length}
          loader={<Spinner animation="border" />}
        > */}
        {posts && posts.map((i) => <Postcard data={i} key={i._id}/>)}
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};

export default ShowPosts;
