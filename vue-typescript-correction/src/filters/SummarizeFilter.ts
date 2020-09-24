export default function summarizeFilter(
  textToSummarize: string,
  shouldSummarize = true
) {
  if (shouldSummarize) {
    return `${textToSummarize.substring(0, 35)}...`;
  }
  return textToSummarize;
}
