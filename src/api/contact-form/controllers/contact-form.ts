// // path: src/api/contact-form/controllers/contact-form.ts
import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
//   async submit(ctx) {
//     const { name, email, companyName, message } = ctx.request.body.data;

//     // Save to DB
//     const entry = await strapi.entityService.create('api::contact-form.contact-form', {
//       data: { name, email, companyName, message },
//     });

//     // Send Email
//     try {
//       await strapi.plugin('email').service('email').send({
//         to: 'sai@indusvision.ai', // your receiver email
//         from: 'vision@indusvision.ai',
//         subject: '🚀 New Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nCompany: ${companyName}\nMessage: ${message}`,
//       });
//       console.log("✅ Email sent successfully");
//     } catch (err) {
//       console.error("❌ Email send failed", err);
//     }

//     ctx.send({ message: 'Submitted successfully', entry });
//   },
// }));

export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async submit(ctx) {
    const { name, email, companyName, message } = ctx.request.body.data;

    // Save to DB
    const entry = await strapi.entityService.create('api::contact-form.contact-form', {
      data: { name, email, companyName, message },
    });

    // Respond to the client immediately
    ctx.send({ message: 'Submitted successfully', entry });

    // Send email asynchronously
    setImmediate(async () => {
      try {
        await strapi.plugin('email').service('email').send({
          to: 'sai@indusvision.ai',
          from: 'vision@indusvision.ai',
          subject: '🚀 New Contact Form Submission',
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${companyName}\nMessage: ${message}`,
        });
        console.log("✅ Email sent in background");
      } catch (err) {
        console.error("❌ Background email failed", err);
      }
    });
  },
}));

