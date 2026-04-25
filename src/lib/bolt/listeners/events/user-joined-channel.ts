import { App } from "@slack/bolt";

const TARGET_CHANNEL = "C0AHPG4LPUM";

module.exports = function ({ app }: { app: App }) {
  app.event("member_joined_channel", async ({ event, client, logger }) => {
    try {
      // Only for Hackanomous channel
      if (event.channel !== TARGET_CHANNEL) return;

      await client.chat.postEphemeral({
        channel: TARGET_CHANNEL,
        user: event.user,
        text: "Welcome to Hackanomous 👋",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "*Welcome to Hackanomous 👋*\nPlease complete your RSVP to continue.",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Open RSVP",
                },
                style: "primary",
                url: "https://hackanomous.vercel.app/",
              },
            ],
          },
        ],
      });
    } catch (error) {
      logger.error("Error in joined listener", error);
    }
  });
};
