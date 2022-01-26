const mailgun = require("mailgun-js");
const DOMAIN = "sandboxdd9b622154a94daca1464b3e2db22e1e.mailgun.org";
const mg = mailgun({ process.env.mailgun_API_KEY , domain: DOMAIN});
const sendWelcomeEmail=(email, name)=>{
    mg.send({
        to:email,
        from:"kaganecee@gmail.com",
        subject:"Thanks for joining in!",
        text:`Welcome to the app, ${name}.`
    })
}
// const data = {
// 	from: "Mailgun Sandbox <postmaster@sandboxdd9b622154a94daca1464b3e2db22e1e.mailgun.org>",
// 	to: "kaganecee@gmail.com",
// 	subject: "Hello",
// 	text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
module.exports={
    sendWelcomeEmail
}