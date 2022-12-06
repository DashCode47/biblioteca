import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

const View = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();
  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);
  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{item?.title}</h2>
        <div>{item?.cover ? <img src={item?.cover} width="300" /> : ""}</div>
        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", fontSize: 16 }}>Author:</div>
          <div>{item?.author}</div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", fontSize: 16 }}>Introduction:</div>
          <div>{item?.intro}</div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ fontWeight: "bold", fontSize: 16 }}>Review:</div>
          <div>{item?.review}</div>
        </div>

        <div
          style={{ textDecoration: item?.completed ? "line-through" : "none" }}
        >
          {item?.completed ? "Leido" : "Por terminar"}
        </div>
      </div>
    </Layout>
  );
};

export default View;
