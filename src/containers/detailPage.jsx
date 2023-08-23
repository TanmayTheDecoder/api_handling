import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/detailPage.css";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [post, postDetails] = useState(null);

  const Fetch = () => {
    axios.get(`https://api.zylonews.com/api/v1/posts/${id}`).then((res) => {
      if (res.status === 200) {
        postDetails(res.data.data.post);
        // console.log(res);
      }
      // res.status === 200 && postDetails(res.data.data.post);

      // res.status === 200 ? postDetails(res.data.data.post) : postDetails(null);
    });
  };

  useEffect(() => {
    Fetch();
  }, []);

  console.log("post", post);
  return (
    <div>
      {post && (
        <div className="post-container">
          <h3>{post?.providerId?.provider}</h3>
          <img src={post?.providerId?.imageURL} alt="" />
          <h2>{post?.title}</h2>
          <img src={post?.thumbnail} alt="" />
          <h3>{post.publishedAt}</h3>
        </div>
      )}
    </div>
  );
};

export default Detail;
