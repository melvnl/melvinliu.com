/* eslint-disable import/no-anonymous-default-export */

import { getMatchHistory } from "@/lib/valorant";

export default async (_: any, res: any) => {
  const response = await getMatchHistory();

  const { data } = await response.json();

  return res.status(200).json({
    matchData: data,
  });
};
