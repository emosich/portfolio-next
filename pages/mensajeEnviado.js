import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const mensajeEnviado = () => {
  return (
    <Layout footer={false}>
      <div class="card text-center">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">Mensaje enviado!</h5>
          <p class="card-text">
            Muchas gracias por el mensaje en breve me pondre en contacto. Saludos!
          </p>
          <Link href="/">
          <a  class="btn btn-primary">
            Volver
          </a>
          </Link>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </Layout>
  );
};

export default mensajeEnviado;
