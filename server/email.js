const emailTemplate = (email, url) => {
  const from = process.env.EMAIL_LOGIN;
  const to = email;
  const subject = 'Sweeper Contest - Password Reset';
  const html = `
  <p>Hi,</p>
  <p>You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>The link will expire in an hour.</p>
  <p>–Sweeper Contest</p>
  `;

  return { from, to, subject, html };
};

module.exports = emailTemplate;
