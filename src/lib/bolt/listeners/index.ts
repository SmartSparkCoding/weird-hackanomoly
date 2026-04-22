import type { App } from "@slack/bolt";
import actions from "./actions";
import assistant from "./assistant";
import commands from "./commands";
import shortcuts from "./shortcuts";
import messages from "./messages";
import views from "./views";

const registerListeners = (app: App) => {
  actions.register(app);
  assistant.register(app);
  commands.register(app);
  shortcuts.register(app);
  messages.register(app);
  views.register(app);
};

export default registerListeners;
