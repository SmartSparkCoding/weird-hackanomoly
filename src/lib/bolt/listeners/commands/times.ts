import { SlackCommandMiddlewareArgs } from "@slack/bolt";

export default async function timesCommand({ ack, respond, command }: SlackCommandMiddlewareArgs) {
  await ack();

  // Helper to format time in a given timezone
  const fmt = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());

  const jacob = fmt("Europe/London");
  const abby = fmt("Asia/Kuwait");
  const techno = fmt("America/Chicago");

  const message = `Heyo! Times are:

• *Jacob* – ${jacob} (London, GMT/BST)
• *Abby* – ${abby} (Kuwait, GMT+3)
• *Techno* – ${techno} (CDT, GMT-5)
`;

  await respond({
    text: message,
    thread_ts: command.thread_ts || command.ts, // reply in thread if triggered in one
  });
}
