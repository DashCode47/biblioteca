import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ marginLeft: 0, marginBottom: 50 }}>{children}</div>
    </div>
  );
};

export default Layout;
