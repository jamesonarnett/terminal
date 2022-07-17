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

// adds a new command to the commandOutput array
const add = (cmd, arr) => {
  cmd.forEach((line) => {
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
      arr.push(await getQuote());
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