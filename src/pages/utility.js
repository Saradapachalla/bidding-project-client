export const biddingTimeCalc = (expDt) => {
  const today = Math.abs((new Date().getTime() / 1000).toFixed(0));
  const bidDt = Math.abs((new Date(expDt).getTime() / 1000).toFixed(0));
  const diff = bidDt - today;
  const days = Math.floor(diff / 86400);
  const hours = Math.floor(diff / 3600) % 24;
  const mins = Math.floor(diff / 60) % 60;
  const sec = diff % 60;
  return {
    bidMessage: `Days: ${days} : Hours: ${hours} : Minutes : ${mins} : Seconds: ${sec}`,
    bidStatus: days > 0 ? true : false
  };
};
