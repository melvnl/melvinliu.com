const VALORANT_API_URL = `https://api.henrikdev.xyz/valorant/v3/matches/ap/NingNing/5545`;

export const getMatchHistory = async () => {
  return fetch(VALORANT_API_URL);
};
