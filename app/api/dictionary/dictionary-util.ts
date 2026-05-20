export async function getMeaningFromApi(word: string) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
