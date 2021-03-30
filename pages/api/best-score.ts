import type { NextApiRequest, NextApiResponse } from 'next';

type responseBestScoreType = {
  score: number,
}

export default (req: NextApiRequest, res: NextApiResponse<responseBestScoreType>) => {
  res.status(200).json({ score: 20 })
};
