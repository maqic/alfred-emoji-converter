import 'dotenv/config';
import alfy from 'alfy';
import { ask } from './utils.js';

const {
  choices,
  model,
  usage: {
    completion_tokens,
    prompt_tokens,
    total_tokens,
  },
} = await ask(alfy.input);

alfy.output(choices.map(choice => {
  const {
    message: {
      content,
    }
  } = choice;

  return {
    title: content,
    subtitle: 'Press Enter to copy to clipboard',
    arg: content,
    mods: {
      ctrl: {
        arg: content,
        subtitle: `Token Cost: ${total_tokens}(${prompt_tokens} + ${completion_tokens})`,
      },
      alt: {
        arg: content,
        subtitle: `Model: ${model}`,
      }
    },
  };
}));
