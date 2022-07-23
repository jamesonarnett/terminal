import axios from "axios";

export const getQuote = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    const arr = [];
    const quote = `"<span>${data.content}</span>  -${data.author}"`;
    arr.push(quote);

    return arr;
  } catch (error) {
    const arr = [
      `<span>The request seemed to have failed</span>`,
      "<br />",
      `<span>Throwing this error message -> <span class='text-colorGrey'>"${error.message}"</span></span>`,
      "<br />",
      "<span>Here is tux anyway <3</span>",
      "<br />",
      "<br />",
      "<span class='text-colorGrey'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ¯\\_(ツ)_/¯</span>",
      "<br />",
    ];

    let noCommas = arr.join("");
    return noCommas;
  }
};

export const getWeather = async () => {
  try {
    const location = await axios.get("https://ipapi.co/json/");
    const { data } = await axios.get(`https://wttr.in/${location.data.postal}`);

    const arr = [];
    const weather = `<span>${data}</span>`;
    arr.push(weather);

    return arr;
  } catch (error) {
    const arr = [
      `<span>The request seemed to have failed</span>`,
      "<br />",
      `<span>Throwing this error message -> <span class='text-colorGrey'>"${error.message}"</span></span>`,
      "<br />",
      "<span>...hopefully it isn't going to rain today</span>",
      "<br />",
      "<br />",
      "<span class='text-colorGrey'>¯\\_(ツ)_/¯</span>",
      "<br />",
    ];

    let noCommas = arr.join("");
    return noCommas;
  }
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

export const whoami = async () => {
  try {
    const { data } = await axios.get("https://ipapi.co/json/");
    const arr = [
      "<div class='text-color2'>",
      "<br />",
      "<span class='text-color'>Well, that's hard to say, do I know you?</span>",
      "<br />",
      "<span>Here is what I do know...</span>",
      "<br />",
      "<br />",
    ];
    const whoami = `<span>Your current IP address: <span class='text-colorGrey'>${data.ip}</span></span>`;
    arr.push(whoami);
    arr.push("<br />");

    const isp = `<span>Your ISP: <span class='text-colorGrey'>${data.org}</span></span>`;
    arr.push(isp);
    arr.push("<br />");

    const location = `<span>Your current shown location: <span class='text-colorGrey'>${data.city}, ${data.region} ${data.postal} ${data.country_name}</span></span>`;
    arr.push(location);
    arr.push("<br />");

    const latLon = `<span>Latitude and Longitude: <span class='text-colorGrey'>${data.latitude}, ${data.longitude}</span></span>`;
    arr.push(latLon);
    arr.push("<br />");

    arr.push(
      "<br />",
      "<span class='text-color'>I'm not sure what you want me to do with that <span class='text-colorGrey'>¯\\_(ツ)_/¯</span></span>",
      "<br />",
      "<span>But hey, consider us friends now</span>",
      "</div>"
    );

    let noCommas = arr.join("");
    return noCommas;
  } catch (error) {
    const arr = [
      "<div class='text-color2'>",
      "<br />",
      "<span class='text-color'>Not an Admin <span class='text-colorGrey'>¯\\_(ツ)_/¯</span></span>",
      "<br />",
      "<span>But, it's hard to say, do I know you?</span>",
      "<br />",
      "<span>Tryout the <span class='text-colorYellow'>email</span> or <span class='text-colorYellow'>gui</span> commands if you want to chat!</span>",
      "<br />",
      "</div>",
    ];

    let noCommas = arr.join("");
    return noCommas;
  }
};
