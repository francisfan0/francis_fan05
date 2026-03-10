import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";
import "../index.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 custom-container my-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
