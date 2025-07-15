import { LOREM_WORDS } from "./dictionary";

export function generateSentence(wordCount: number): string {

  const words = [];

  // Add random words from the dictionart
  for (let i = 0; i < wordCount; i++) {
    const randomWord = LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
    words.push(randomWord);
  }
  // Capitalize first word and add full stop
  let sentence = words.join(" ");
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";

  return sentence;

}

export function generateParagraph(sentenceCount: number, avgSentenceLength: number): string {

  const sentences = [];

  for (let i = 0; i < sentenceCount; i++) {
    const variation = Math.floor(Math.random() * 5) - 2; // +/- 3 words
    const wordCount = Math.max(3, avgSentenceLength + variation);
    sentences.push(generateSentence(wordCount));
  }

  return sentences.join(" ");
}

export function generateMultipleParagraphs(sentenceCount: number, avgSentenceLength: number, paragraphCount: number): string[] {
    
    const paragraphs = [];

    // I ain't explaining this
    for (let i = 0; i < paragraphCount; i++) {
        paragraphs.push(generateParagraph(sentenceCount, avgSentenceLength));
    }

    return paragraphs

}
