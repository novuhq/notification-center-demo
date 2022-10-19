import { Novu } from '@novu/node';

const novu = new Novu('11a8c44ffd4f1ef1a88cc688abd6e770'); // process.env.NOVU_API_KEY

export default async function handler(req, res) {
  const { uuid } = JSON.parse(req.body);

  novu.trigger('test', {
    to: {
      subscriberId: uuid,
    },
  });

  return res.json({ finish: true });
}
