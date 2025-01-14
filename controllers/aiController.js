const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const getScript = async (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        return;
    }
    const text = req.body.text;
    try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: text,
          temperature: 0,
        });

        console.log(completion);
        res.status(200).json({ result: completion.data.choices[0].text});
    }catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          res.status(error.response.status).json(error.response.data);
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
        }
    }
}

module.exports =  getScript;