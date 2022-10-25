import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        esta pagina no funciona por favor
        <Link href="/">
          <a> click aqui </a>
        </Link>
        para volver al home
      </p>
    </div>
  </Layout>
);

export default custom404;
