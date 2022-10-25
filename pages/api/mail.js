const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'erikmosich@gmail.com', // generated ethereal user
      pass: 'ngdeqgmyrdxqvamk', // generated ethereal password
    },
  });

   export default (req, res) => {
    const body = JSON.parse(req.body);
    console.log(body)
        transporter.sendMail({
        from: '"Portfolio 👻" <foo@example.com>', // sender address
        to: "erikmosich@gmail.com", // list of receivers
        subject: "Contacto brooo ✔", // Subject line
        text: `Nombre: ${body.name} - Email: ${body.email} - Mensaje: ${body.mensaje}`, // plain text body
        /* html: <p>{body}</p>,  */// html body
      });


    res.status(200).json({ status: 'Ok' })
}

