export default () => {
  const currentTime = new Date().getTime();
  const randNum = Math.floor((Math.random() * 100000) + 1);
  return `${currentTime}-${randNum}`;
};
