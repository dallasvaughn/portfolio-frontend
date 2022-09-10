import mail from '@sendgrid/mail';

const key = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;

mail.setApiKey(key);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;
  const data = {
    to: 'dallasvon.d@gmail.com',
    from: 'dallasvon.d@gmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };
  await mail.send(data);
  res.status(200).json({ status: 'OK' });
};
