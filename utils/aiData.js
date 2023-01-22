const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const getScript = (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        return;
    }

    
}