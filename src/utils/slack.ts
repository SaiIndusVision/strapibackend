// src/utils/slack.ts
import axios from 'axios';

export const sendSlackMessage = async (message: string): Promise<void> => {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error('SLACK_WEBHOOK_URL not defined in .env');
    }

    await axios.post(webhookUrl, { text: message });
  } catch (error: any) {
    console.error('Slack error:', error.message);
  }
};
