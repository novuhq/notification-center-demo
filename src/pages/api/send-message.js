import { Novu } from '@novu/node';

const novu = new Novu(process.env.NEXT_PUBLIC_NOVU_API_KEY, {
  backendUrl: process.env.NEXT_PUBLIC_API_URL,
});
export const notificationTemplateName = 'on-boarding-notification';

export default async function handler(req, res) {
  const { uuid } = JSON.parse(req.body);

  await novu.trigger(notificationTemplateName, {
    to: {
      subscriberId: uuid,
    },
    payload: {
      __source: 'notification-center-demo-app'
    }
  });

  return res.json({ finish: true });
}
