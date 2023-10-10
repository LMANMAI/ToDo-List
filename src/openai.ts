const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  Authorization: "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",
});

const openai = new OpenAIApi(configuration);
const systemMessage = {
  role: "system",
  content:
    "You are a Askbot. You are supposed to answer the questions asked by the users. Validate the prompts to be a question and it should not in approprite. Give funky responses",
};
export async function sendMsgToOpenAI(message: any) {
  const res = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    messages: [systemMessage, { role: "user", content: message }],
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.data.choices[0].text;
}
