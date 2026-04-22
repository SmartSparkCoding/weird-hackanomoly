import type {
  AllMiddlewareArgs,
  SlackCommandMiddlewareArgs,
} from "@slack/bolt";

export default async function timesCommand(
  { ack, client, command }: AllMiddlewareArgs & SlackCommandMiddlewareArgs
) {
  await ack();

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

  await client.chat.postMessage({
    channel: "C0AHPA379SR",          // ← forced channel
    text: message,
    thread_ts: command.thread_ts || command.ts,
  });
}
