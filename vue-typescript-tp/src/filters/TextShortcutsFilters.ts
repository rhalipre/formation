export default function(text: string, limit: number, isShortText: boolean) {
  if (isShortText) {
    return `${text.substring(0, limit)} ...`;
  }
  return text;
}
