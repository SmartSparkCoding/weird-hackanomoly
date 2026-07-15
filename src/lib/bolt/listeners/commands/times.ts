import type { Middleware, SlackCommandMiddlewareArgs } from "@slack/bolt";

const timesCommand: Middleware<SlackCommandMiddlewareArgs> = async ({
  ack,
  respond,
}) => {
  await ack();

  // Helper to format time in a given timezone
  const fmt = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: tz,
    }).format(new Date());

  const jacob = fmt("Europe/London");
  const abby = fmt("Asia/Kuwait");
  const techno = fmt("America/Chicago");
  const jenny = fmt("America/New_York");

  const message = `Heyo! (Daylight Savings Factored) Times are:

• *Jacob* – ${jacob} (London, GMT/BST)
• *Abby* – ${abby} (Kuwait, GMT+3)
• *Techno* – ${techno} (CDT, GMT-5)
• *Jenny* – ${jenny} (EDT, GMT-4)
`;

  await respond({
    response_type: "in_channel",
    text: message,
  });
};

export default timesCommand;
