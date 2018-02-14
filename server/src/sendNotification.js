const postmark = require("postmark");
const postmarkClient = new postmark.Client(process.env.POSTMARK_API_KEY);

export default event => {
  const rsvp = event.data.Rsvp.node;
  return postmarkClient.sendEmailWithTemplate({
    "From": "info@maddieandelliott.com",
    "TemplateId": 4965401,
    "To": "epogue@gmail.com, madphillips@gmail.com",
    "ReplyTo": rsvp.email,
    "TemplateModel": rsvp
  });
};