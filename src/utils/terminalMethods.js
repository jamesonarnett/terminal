export const saveHistory = (input, arr) => {
  if (input !== "") {
    const command = `<span class='text-colorWhite'>${input} </span>`;

    const time = new Date().toLocaleTimeString();
    arr.push(`<span class='text-color2'>${time}:</span> ${command}`);

    arr.push("<br>");
  }
};
