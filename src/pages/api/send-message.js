import sendNotification from 'helpers/send-notification';

export default async function handler(req, res) {
  await sendNotification('test', '55403046-fee9-43a6-9489-2bee5fee2e81', {});

  return res.json({ finish: true });
}
