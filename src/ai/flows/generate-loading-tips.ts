// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview A loading screen tips generator AI agent.
 *
 * - generateLoadingTips - A function that generates loading screen tips.
 * - GenerateLoadingTipsInput - The input type for the generateLoadingTips function.
 * - GenerateLoadingTipsOutput - The return type for the generateLoadingTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoadingTipsInputSchema = z.object({
  theme: z
    .string()
    .default('Neon sci-fi')
    .describe("The theme of the loading tips. Examples: 'Medieval', 'Modern', 'Sci-fi'."),
  style: z
    .string()
    .default('Concise and helpful')
    .describe("The style of the loading tips. Examples: 'Funny', 'Serious', 'Informative'."),
  numTips: z
    .number()
    .default(3)
    .describe('The number of loading tips to generate.'),
});
export type GenerateLoadingTipsInput = z.infer<typeof GenerateLoadingTipsInputSchema>;

const GenerateLoadingTipsOutputSchema = z.object({
  tips: z.array(z.string()).describe('An array of loading screen tips.'),
});
export type GenerateLoadingTipsOutput = z.infer<typeof GenerateLoadingTipsOutputSchema>;

export async function generateLoadingTips(input: GenerateLoadingTipsInput): Promise<GenerateLoadingTipsOutput> {
  return generateLoadingTipsFlow(input);
}

const generateLoadingTipsPrompt = ai.definePrompt({
  name: 'generateLoadingTipsPrompt',
  input: {schema: GenerateLoadingTipsInputSchema},
  output: {schema: GenerateLoadingTipsOutputSchema},
  prompt: `You are a Minecraft server assistant that generates loading screen tips.

  I want you to generate {{numTips}} loading screen tips in a {{style}} style with a {{theme}} theme.

  Return a JSON array of strings. Each string should be a tip that is less than 20 words. The tips should be helpful and informative to the player. For example, if the theme is "Neon sci-fi", you could say: "Explore the neon-lit districts for rare resources."
  `,
});

const generateLoadingTipsFlow = ai.defineFlow(
  {
    name: 'generateLoadingTipsFlow',
    inputSchema: GenerateLoadingTipsInputSchema,
    outputSchema: GenerateLoadingTipsOutputSchema,
  },
  async input => {
    const {output} = await generateLoadingTipsPrompt(input);
    return output!;
  }
);
