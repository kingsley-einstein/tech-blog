import email from "emailjs-com";

export const send = async template => {
 const res = await email.send(
  "service_v5x66u6",
  "template_3uxeqwe",
  template,
  "user_7NUQXXSLqF9P05cdn9WIG"
 );
 return Promise.resolve({
  status: res.status,
  text: res.text
 });
};
