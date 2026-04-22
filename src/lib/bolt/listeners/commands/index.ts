import type { App } from "@slack/bolt";
import timesCommand from "./times";

const register = (app: App) => {
  app.command("/hackanomous-times", timesCommand);
};

export default { register };
