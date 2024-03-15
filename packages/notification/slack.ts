"use server";
import { ChatPostMessageArguments } from "@slack/web-api";

export type SlackBetaFeedback = {
  stars: number;
  feedback: string;
  email: string;
  name: string;
};
export async function sendBetaFeedback(data: SlackBetaFeedback) {
  const { stars, feedback, name, email } = data;

  const { WebClient } = await import("@slack/web-api");

  const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

  const blocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*New Feedback from <mailto:${email}|${name}>*`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*New Beta Feedback*`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Stars: ${stars}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Feedback: ${feedback}`,
      },
    },
  ];
  const textSummary = `New Feedback from ${name} (${email}): ${stars} Stars - ${feedback}`;

  try {
    const arg: ChatPostMessageArguments = {
      channel: "#beta-feedback",
      blocks,
      text: textSummary,
    };
    await slack.chat.postMessage(arg);
    return true;
  } catch (error) {
    console.error("Error sending slack message", error);
    return false;
  }
}
