export const saveHistory = (input, arr) => {
  if (input !== "") {
    const command = `<span class='text-colorWhite'>${input} </span>`;

    const time = new Date().toLocaleTimeString();
    arr.push(`<span class='text-color2'>${time}:</span> ${command}`);

    arr.push("<br>");
  }
};

export const sudoRedirect = () => {
  const rickUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};
