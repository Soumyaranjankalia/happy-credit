import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Card = () => {
  const [post, setPost] = useState([]);
  const [titel, setTitel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [per_page, setperpage] = useState(4);

  const getPost = ({ currentPage = 1, per_page }) => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      method: "get",
      params: {
        _page: currentPage,
        _limit: per_page,
      },
    })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost({ currentPage, per_page });
  }, [currentPage, per_page]);

  let pagecount = Math.floor(100 / per_page);

  return (
    <div>
      <Navbar setTitel={setTitel} />
      <div className="post">
        {post
          .filter((value) => {
            if (titel === "") {
              return value;
            } else if (
              titel.length >= 3 &&
              value.titel.toLowerCase().includes(titel.toLowerCase())
            ) {
              return value;
            }
          })
          .map((e) => {
            return (
              <div key={e.id}>
                <div className="post-grid">
                  <h3>Title : {e.title}</h3> <br />
                  <p>{e.body}</p> <br />
                  <Link to={`/user/${e.id}`}>
                    <button className="view">View User</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <button
          className="btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <button className="btn" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};
