import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeStart", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>


      {
      footer && (<footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h3>&copy; Erik Mosich Portfolio</h3>
          <p>2022</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>) 
      }
      
    </>
  );
};

export default Layout;
