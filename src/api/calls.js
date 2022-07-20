import axios from "axios";

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");
  const arr = [];
  const quote = `"<span>${data.content}</span>  -${data.author}"`;
  arr.push(quote);

  return arr;
};

export const guiRediect = () => {
  const url = "http://ajameson.com";
  window.open(url, "_blank");
};

export const sudoRedirect = (input) => {
  const rickUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  setTimeout(() => {
    window.open(rickUrl, "_blank");
  }, 1000);
};
