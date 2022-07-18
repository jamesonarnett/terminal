import {
  banner,
  defaultCmd,
  help,
  projects,
  secret,
  social,
  tuxsay,
  whoami,
  whoareyou,
} from "./commands";
import { getQuote } from "../api/calls";

// add the command to the commandsOutput array in TheTerminal.vue
// for loop checks line[i] for spaces to make ascii art look correct
// as long as the previous letter was not "n", so the <span> tags work
const add = (cmd, arr) => {
  cmd.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === " " && line[i - 1] !== "n") {
        line = line.slice(0, i) + "&nbsp;" + line.slice(i + 1);
      }
    }
    console.log(line);
    arr.push(line);
  });
};

export const terminalSwitch = async (input, arr) => {
  switch (input) {
    case "banner":
      add(banner, arr);
      break;
    case "help":
      add(help, arr);
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
    case "tuxsay":
      arr.push("<br />");
      arr.push(await getQuote());
      add(tuxsay, arr);
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
