import alfy from 'alfy';

export async function ask(description) {
  const gateway = process.env.GATEWAY || 'https://api.openai.com';
  const model = process.env.MODEL || 'gpt-3.5-turbo';
  const apiKey = process.env.API_KEY;
  const useCache = process.env.USE_CACHE !== 'false';

  const cacheKey = `ask:${model}:${description}`;
  const cached = await alfy.cache.get(cacheKey);

  if (useCache && cached) {
    return cached;
  }

  if (!apiKey) {
    throw new Error('Missing OpenAI API key');
  }

  const data = await alfy.fetch(`${gateway}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{
        content: 'Suggest the most fitting Emoji based on my input;only output Emoji,return an empty string if not found',
        role: 'system',
      }, {
        content: description,
        role: 'user',
      }],
    })
  });

  const validChoices = data.choices.filter(choice => choice.message.content !== '');
  if (validChoices.length === 0) {
    throw new Error('No response from OpenAI，modify your description and try again');
  }

  // cache for 1 day
  await alfy.cache.set(cacheKey, data, { maxAge: 86400000 });

  return data;
}
