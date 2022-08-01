export const saveHistory = (input, arr) => {
  if (input !== "") {
    const command = `<span class='text-colorWhite'>${input} </span>`;

    const time = new Date().toLocaleTimeString();
    arr.push(`<span class='text-color2'>${time}:</span> ${command}`);

    arr.push("<br>");
  }
};

export const isMobileUser = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }
  return false;
};

export const scrollTojShell = (arr) => {
  setTimeout(() => {
    if (!isMobileUser()) {
      window.scrollBy(0, arr.length * 5);
    } else {
      window.scrollBy(0, arr.length * 3);
    }
  }, 80);
};

export const forceScroll = () => {
  let arr;
  isMobileUser() ? (arr = new Array(100)) : (arr = new Array(170));
  arr.fill(0, 0, 170);
  scrollTojShell(arr);
};

// commands
export const echo = (input, arr) => {
  const newPut = input.replace("echo", "");
  arr.push("<br />");
  arr.push(`<span class='text-colorWhite'>${newPut}</span>`);
  arr.push("<br />");
  return arr;
};

export const changeTheme = (input) => {
  const terminal = document.querySelector(".terminal");
  const newPut = input.replace("theme", "").trim();

  if (newPut === "dark") {
    document.body.style.backgroundColor = "black";
    terminal.classList.remove("light-mode", "halcyon");
    terminal.classList.add("dark-mode");
  } else if (newPut === "light") {
    document.body.style.backgroundColor = "#ffffff";
    terminal.classList.remove("dark-mode", "halcyon");
    terminal.classList.add("light-mode");
  } else if (newPut === "halcyon") {
    document.body.style.backgroundColor = "#1d2433";
    terminal.classList.remove("dark-mode", "light-mode");
    terminal.classList.add("halcyon");
  }
};
