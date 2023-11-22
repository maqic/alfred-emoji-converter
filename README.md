# Alfred Emoji Converter

A text to emoji converter powered by ChatGPT.

## Dependencies

- [Alfred 4 or later](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade
- [Node.js 16+](https://nodejs.org)

## Installation

```bash
npm i -g alfred-emoji-converter
```

## Configuration

> Inject variables through Alfred plugin Environment Variables

![env-configuration](https://mdn.alipayobjects.com/huamei_ewonmy/afts/img/A*AbVtTYCc85kAAAAAAAAAAAAADmihAQ/original)

### GATEWAY

- OpenAI API gateway
- Type: URL
- Default: https://api.openai.com

### API_KEY

- [OpenAI API key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-api-key)
- Type: String
- Default: None, **MUST BE SET**

### MODEL

- [OpenAI ChatGPT models](https://platform.openai.com/docs/models/continuous-model-upgrades)
- Type: String
- Default: gpt-3.5-turbo

### USE_CACHE

- Cache result or not
- Type: Boolean
- Default: true

## Usage

- Invoke Alfred, enter the keyword `emoji`, and input the description.

## Screenshots

![100-to-emoji](https://mdn.alipayobjects.com/huamei_ewonmy/afts/img/A*V7aUTYqvHTAAAAAAAAAAAAAADmihAQ/original)
