async function splitString(inputStr) {
  if (inputStr) {
    const wordsNinja = new WordsNinja(); // Create an instance of WordsNinja
    await wordsNinja.loadDictionary(); // Load the dictionary
    let words = wordsNinja.splitSentence(inputStr); // Use the instance to split the input string
    return words;
  }
  return [];
}
