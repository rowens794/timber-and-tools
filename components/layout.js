import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen" style={{ maxWidth: "1140px", margin: "auto" }}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
