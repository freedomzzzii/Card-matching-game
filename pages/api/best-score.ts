import type { NextApiRequest, NextApiResponse } from 'next';

import firebase from 'firebase';

type responseBestScoreType = {
  score: number,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<responseBestScoreType>) {
  try {
    const bestScoreRef = firebase.database().ref('best-score');

    if (req.method === 'POST') {
      bestScoreRef.update(req.body);

      bestScoreRef.once('value', (snapshot) => {
        const data = snapshot.val();

        res.status(200).json(data);
      });
    } else if (req.method === 'GET') {
      bestScoreRef.once('value', (snapshot) => {
        const data = snapshot.val();

        res.status(200).json(data);
      });
    }
  } catch (error) { // for don't want to connect firebase
    if (req.method === 'POST') {
      res.status(200).json(req.body);
    } else if (req.method === 'GET') {
      res.status(200).json({ score: 999 });
    }
    return;
  }
}