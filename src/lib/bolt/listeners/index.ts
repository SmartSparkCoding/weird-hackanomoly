import type { App } from "@slack/bolt";
import actions from "./actions";
import assistant from "./assistant";
import commands from "./commands";
import shortcuts from "./shortcuts";
import views from "./views";

const registerListeners = (app: App) => {
  actions.register(app);
  assistant.register(app);
  commands.register(app);
  shortcuts.register(app);
  views.register(app);
};

export default registerListeners;
