import React from "react";
import { Link } from "react-router-dom";
import "./book.css";
const Book = ({ item }) => {
  return (
    <div className="bookContainer">
      <Link to={`/view/${item.id}`} style={{ textDecoration: "none" }}>
        <img src={item.cover} width="200" alt="foto" className="bookImg" />
        <div className="bookTitle">{item.title}</div>
      </Link>
    </div>
  );
};

export default Book;
