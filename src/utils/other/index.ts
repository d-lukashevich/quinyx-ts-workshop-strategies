export * from './_index';

export const fromCamelCase = (str: string, separator: string | number = '_') => {
  const _separator = typeof separator === 'number' ? '_'.repeat(separator) : separator;
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + _separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + _separator + '$2')
    .toLowerCase();
};
