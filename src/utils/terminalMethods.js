export const saveHistory = (input, arr) => {
  //incorporate localStorage? ehhh...
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

export const changeTheme = () => {
  // maybe worth it?
  // at least one?
};
