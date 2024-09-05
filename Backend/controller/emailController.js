const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
  const { eqName } = req.body;
  const { eqCode } = req.body;
  const { mainDate } = req.body;
  const { mainTime } = req.body;
  const { mainDescription } = req.body;
  const { mainResponsible } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'plpereira.iq@gmail.com',
      pass: 'ckwp rmxj sezp pfed',
    }
  });

  const mailOptions = {
    from: 'plpereira.iq@gmail.com',
    to: 'plpereira.iq@gmail.com',
    subject: `Mantenimiento Programado para el equipo: ${eqName}`,
    text: `Se ha programado un mantenimiento para el equipo: ${eqName}`,
    html: `<p>Se ha programado un mantenimiento para el equipo: ${eqName}, con código: ${eqCode}, para fecha: ${mainDate}, en horario: ${mainTime} El mantenimiento consistirá en: ${mainDescription}
    La persona encargada del mantenimiento es: ${mainResponsible}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
};

module.exports = { sendEmail };