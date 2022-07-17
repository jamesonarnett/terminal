import axios from "axios";

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");
  let arr = [];
  const quote = `"<span>${data.content}</span>  -${data.author}"`;

  arr.push(quote);
  return arr;
};