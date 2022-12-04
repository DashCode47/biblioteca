import { useAppContext } from "../store/Store";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Book from "../components/Book";
import { Link } from "react-router-dom";

const Index = () => {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: 150,
    justifyContent: "center",
  };
  console.log(store.items);
  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.length > 0 ? (
          store.items.map((item) => <Book key={item.id} item={item} />)
        ) : (
          <Link to={"/create"}>
            <img
              src={require("../assets/charge.gif")}
              style={{
                width: 280,
                height: 280,
              }}
            />
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default Index;
