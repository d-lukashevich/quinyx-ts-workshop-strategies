/*  Adding alpha channel to achieve transparency  */
export const hexToRGBA = (hex, alpha = false) => {
  let hexAlpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map((x) => x + x).join('');
  else if (h.length === 8) hexAlpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha || hexAlpha ? 'a' : '') +
    '(' +
    (h >>> (hexAlpha ? 24 : 16)) +
    ', ' +
    ((h & (hexAlpha ? 0x00ff0000 : 0x00ff00)) >>> (hexAlpha ? 16 : 8)) +
    ', ' +
    ((h & (hexAlpha ? 0x0000ff00 : 0x0000ff)) >>> (hexAlpha ? 8 : 0)) +
    (alpha !== false ? `, ${alpha}` : '') +
    ')'
  );
};

/* Suma el porcentaje indicado a un color (RR, GG o BB) hexadecimal para aclararlo */
export const addLight = function (color, amount) {
  let cc = parseInt(color, 16) + amount;
  let c = cc > 255 ? 255 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
  return c;
};

/* Aclara un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
export const lighten = (color, amount) => {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
  amount = parseInt((255 * amount) / 100);
  return (color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(
    color.substring(4, 6),
    amount
  )}`);
};

/* Resta el porcentaje indicado a un color (RR, GG o BB) hexadecimal para oscurecerlo */
export const subtractLight = function (color, amount) {
  let cc = parseInt(color, 16) - amount;
  let c = cc < 0 ? 0 : cc;
  c = c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
  return c;
};

/* Oscurece un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
export const darken = (color, amount) => {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
  amount = parseInt((255 * amount) / 100);
  return (color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(
    color.substring(2, 4),
    amount
  )}${subtractLight(color.substring(4, 6), amount)}`);
};
