import {
  banner,
  defaultCmd,
  email,
  help,
  ls,
  projects,
  secret,
  social,
  sudo,
  tuxsay,
  whoami,
  whoareyou,
} from "./commands";
import { getQuote, sudoRedirect, guiRediect, getWeather } from "../api/calls";

//scroll by lines does not work in Chrome || Safari'
//must be fixed
const scrollPage = (arr) => {
  if (arr.length > 20) {
    window.scrollByLines(arr.length - 3);
  }
};

// add the command to the commandsOutput array in TheTerminal.vue
// for loop checks line[i] for spaces to make ascii art look correct
// as long as the previous letter was not "n", so the <span> tags work
const add = (cmd, arr) => {
  cmd.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === " " && line[i - 1] !== "n" && line[i - 1] !== "a") {
        line = line.slice(0, i) + "&nbsp;" + line.slice(i + 1);
      }
    }
    arr.push(line);
    scrollPage(arr);
  });
};

export const terminalSwitch = async (input, arr) => {
  if (input.includes("sudo")) {
    input = "sudo";
  }
  switch (input) {
    case "banner":
      add(banner, arr);
      break;
    case "email":
      add(email, arr);
      break;
    case "gui":
      guiRediect();
      break;
    case "help":
      add(help, arr);
      break;
    case "history":
      add(history, arr);
      break;
    case "ls":
      add(ls, arr);
      break;
    case "projects":
      add(projects, arr);
      break;
    case "secret":
      add(secret, arr);
      break;
    case "social":
      add(social, arr);
      break;
    case "sudo":
      add(sudo, arr);
      sudoRedirect();
      break;
    case "tuxsay":
      arr.push("<br />");
      arr.push(await getQuote());
      add(tuxsay, arr);
      break;
    case "weather":
      arr.push("<br />");
      arr.push(await getWeather());
      break;
    case "whoami":
      add(whoami, arr);
      break;
    case "whoareyou":
      add(whoareyou, arr);
      break;
    default:
      add(defaultCmd, arr);
      break;
  }
};
