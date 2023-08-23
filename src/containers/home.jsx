import React, { useState } from "react";
import "../css/home.css";
import Navbar from "../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [post, postData] = useState([]);
  const onPressCategory = (id) => {
    axios
      .get(`https://api.zylonews.com/api/v1/posts?categoryId=${id}`)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.data.posts);
          // console.log(postData);
          postData(res.data.data.posts);
        }
      });
  };

  return (
    <div className="home-container">
      <Navbar onPress={onPressCategory} />
      <div className="post-space">
        {post.map((item) => {
          console.log("item", item);
          return (
            <div key={item._id} className="post-space-inner">
              <div className="post">
                {item.provider}

                <img
                  className="item-image"
                  src={item.providerId.imageURL}
                  alt="image not found"
                />
                <h2>{item.title}</h2>
                {item.slug}
                <Link to={item._id}>
                  <img src={item.thumbnail} alt="" />
                </Link>
                {item.publishedAt}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
