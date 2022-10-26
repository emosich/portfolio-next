import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../public/profile";
import { useState } from "react";
import { useRouter } from "next/router";

//ngdeqgmyrdxqvamk  CONTRASEÑA adminAPI google

const Index = () => {

  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  async function enviarDatos(event) {
    event.preventDefault();
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });

    router.push("/mensajeEnviado");

  }

  return (
    <Layout>
      {/* primera seccion */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body text-secondary rounded ">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="erik-perfil.jpeg"
                  alt=""
                  className="img-fluid rounded-circle "
                />
              </div>
              <div className="col-md-8 align-self-center">
                <h1>Erik Mosich</h1>
                <p>
                  Durante 7 años trabajé como encargado de un comercio liderando
                  un equipo de 5 personas, donde aprendí sobre ventas, atención
                  al cliente, trato con proveedores, planificación y
                  seguimiento, entre otras cosas. Luego decidí dar un giro a mi
                  carrera e hice un coding bootcamp de programación. Hoy estoy
                  en búsqueda de un lugar en donde pueda aportar todo mi
                  conocimiento y experiencia, innovar y crear soluciones desde
                  el primer día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* segunda seccion */}



      {/* tercera seccion */}

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light rounded">
            <div className="card-body">
              <h1>Skills</h1>

              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light rounded">
            <div className="card-body">
              <h1>Experiencia</h1>

              <ul>
                {experiences.map(({ titulo, descripcion, duracion }, i) => (
                  <li key={i}>
                    <h3>{titulo}</h3>
                    <h5>{duracion}</h5>
                    <p>{descripcion}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-md-12">
            <div className="card card-body bg-dark rounded">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ titulo, descripcion, link, foto }, i) => (
                  <div className="col-md-4 p-2" key={i}>
                    <div className="card h-100 rounded">
                      <div className="overflow">
                        <img
                          src={foto}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                        <Link href={link}>
                          <a target="blank">Ver en GitHub</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-2">
        <div className="col-md-12">
          <div className="card card-body text-secondary rounded text-center bg-light">
            <h2>Contacto</h2>
            <div className="container col-md-8 text-center">
              <form method="post" onSubmit={enviarDatos}>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    name="name"
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Pepe"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@email.com"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    className="form-control"
                    id="mensaje"
                    rows="3"
                    placeholder="Hola!"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
