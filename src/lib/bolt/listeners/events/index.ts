import type { App } from "@slack/bolt";
import userJoinedChannel from "./user-joined-channel";

const register = (_app: App) => {
  app.event("joined", userJoinedChannel);
};

export default { register };
