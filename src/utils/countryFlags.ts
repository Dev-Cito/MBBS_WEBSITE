/** ISO 3166-1 alpha-2 codes for flag images (flagcdn). */
const FLAG_CODES: Record<string, string> = {
  kyrgyzstan: 'kg',
  russia: 'ru',
  georgia: 'ge',
  kazakhstan: 'kz',
  uzbekistan: 'uz',
}

export function getCountryFlagUrl(countryId: string, width = 80): string {
  const code = FLAG_CODES[countryId] ?? 'un'
  return `https://flagcdn.com/w${width}/${code}.png`
}
