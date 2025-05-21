import { factories } from '@strapi/strapi';
import { sendSlackMessage } from '../../../utils/slack';  // ✅ Correct path and syntax

export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async submit(ctx) {
    const { name, email, companyName, message } = ctx.request.body.data;

    const entry = await strapi.entityService.create('api::contact-form.contact-form', {
      data: { name, email, companyName, message },
    });

    ctx.send({ message: 'Submitted successfully', entry });

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

      try {
        const slackMsg = `📬 *New Contact Form Submission:*\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${companyName}\n*Message:* ${message}`;
        await sendSlackMessage(slackMsg);
        console.log("✅ Slack message sent");
      } catch (err) {
        console.error("❌ Slack message failed", err);
      }
    });
  },
}));
