export const generateShortUrl = (url) => {
  return (Math.random() + 1).toString(36).substring(7);
};
