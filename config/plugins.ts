export default ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env.int('SMTP_PORT'),
          auth: {
            user: env('SMTP_USER'),
            pass: env('SMTP_PASS'),
          },
          secure: false,
          tls: {
            rejectUnauthorized: false,
          },
        },
        settings: {
          defaultFrom: env('SMTP_USER'),
          defaultReplyTo: env('SMTP_USER'),
        },
      },
    },
  });
  