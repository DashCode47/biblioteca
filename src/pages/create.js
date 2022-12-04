import React, { useState } from "react";
import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState("");
  const [review, setReview] = useState("");
  const store = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "author":
        setAuthor(value);
        break;

      case "intro":
        setIntro(value);
        break;

      case "completed":
        setCompleted(e.target.checked);
        break;

      case "review":
        setReview(value);
        break;
      default:
    }
  };

  const handleOnChangeFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    store.createItem(newBook);
    navigate("/");
  };

  return (
    <Layout>
      <div className="formContainer">
        <img
          src={require("../assets/movie.gif")}
          style={{ width: 300, position: "absolute", left: 50 }}
        />
        <form onSubmit={handleSubmit} className="createForm">
          <div className="inputs">
            <div className="titles">Title</div>
            <input
              type={"text"}
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>

          <div className="inputs">
            <div className="titles">Author</div>
            <input
              type={"text"}
              name="author"
              onChange={handleChange}
              value={author}
            />
          </div>

          <div className="choose">
            <div className="titles">Cover</div>
            <input type={"file"} name="cover" onChange={handleOnChangeFile} />
            <div>
              {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
            </div>
          </div>

          <div className="inputs">
            <div className="titles">Introduction</div>
            <input
              type={"text"}
              name="intro"
              onChange={handleChange}
              value={intro}
            />
          </div>

          <div className="inputs">
            <div className="titles">Completed</div>
            <input
              type={"checkbox"}
              name="completed"
              onChange={handleChange}
              value={completed}
            />
          </div>

          <div className="inputs">
            <div className="titles">Review</div>
            <input
              type={"text"}
              name="review"
              onChange={handleChange}
              value={review}
            />
          </div>
          <input type={"submit"} value="Register Book" className="btn" />
        </form>
      </div>
    </Layout>
  );
};

export default Create;
