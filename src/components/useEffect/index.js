import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [postId, setPostId] = useState(1);

  const handlePost = () => {
    setPostId(id);
  };

  useEffect(() => {
    const response = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, [postId]);

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  return (
    <div>
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button> */}
      <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <Button onClick={handlePost}>Get Post</Button>
      <p>{post.title}</p>
      {/* {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default HookCounter;
