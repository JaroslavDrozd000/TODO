export const uuid = (): string => {
  const hexValues = '0123456789abcdef';
  let uuid = '';

  for (let i = 0; i < 36; i++) {
    const randomNumber = Math.random() * 16;
    const digit = hexValues.charAt(
      i === 14 ? 4 : i === 19 ? (randomNumber & 3) | 8 : randomNumber
    );
    uuid += i === 8 || i === 13 || i === 18 || i === 23 ? '-' : '';
    uuid += digit;
  }

  return uuid;
};
