import { Novu } from '@novu/node';

const novu = new Novu(process.env.NEXT_PUBLIC_NOVU_API_KEY);

export default async function handler(req, res) {
  const { uuid } = JSON.parse(req.body);

  await novu.trigger('test', {
    to: {
      subscriberId: uuid,
    },
  });

  return res.json({ finish: true });
}
