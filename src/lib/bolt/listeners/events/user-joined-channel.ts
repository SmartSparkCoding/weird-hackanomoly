module.exports = function ({ app }) {
  app.event("member_joined_channel", async ({ event, client }) => {
    const TARGET_CHANNEL = "C0AHPG4LPUM";

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
              "*Welcome to Hackanomous 👋*\nComplete your RSVP here.",
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
  });
};
