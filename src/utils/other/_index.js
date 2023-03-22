import { isValidElement } from 'react';

export const testNumber = ['H', /\d/, /\d/, /\d/, /[ABEKMHOPCTYX]/, /[ABEKMHOPCTYX]/, '\u2000', '5', '4'];
export const phone = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
export const date = [/[0-3]/, /[0-9]/, '.', /[0-1]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

export const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

export const dateFn = (value) => {
  const [day = '', month = '', year = ''] = value.split('.');
  let dayMask = [/[0-3]/, /[0-9]/];
  switch (month) {
    case '02':
      // february
      dayMask[0] = /[0-2]/;
      if (day[0] === '2' && year.match(/[\d]{4}/) && !isLeapYear(parseInt(year))) dayMask[1] = /[0-8]/;
      break;
    case '04':
    case '06':
    case '09':
    case '11':
      // 30-days months
      if (day[0] === '3') dayMask[1] = /[0]/;
      break;
    default:
      // 31-days months and not recognized
      if (day[0] === '3') dayMask[1] = /[0-1]/;
  }
  const monthMask = [/[0-1]/, month[0] === '1' ? /[0-2]/ : /[1-9]/];
  const yearMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  return [...dayMask, '.', ...monthMask, '.', ...yearMask];
};

export const time =
  ({ showHours, showMinutes, showSeconds, additionalFn } = {}) =>
  (value) => {
    const chars = value.split('');
    const hours = [/[0-2]/, chars[0] === '2' ? /[0-3]/ : /[0-9]/];

    const minutes = [/[0-5]/, /[0-9]/];
    const seconds = [/[0-5]/, /[0-9]/];

    const timeMask = [];
    if (showHours) {
      timeMask.push(...hours);
    }
    if (showMinutes) {
      if (timeMask.length) {
        timeMask.push(':');
      }
      timeMask.push(...minutes);
    }
    if (showSeconds) {
      if (timeMask.length) {
        timeMask.push(':');
      }
      timeMask.push(...seconds);
    }

    return additionalFn ? additionalFn(timeMask) : timeMask;
  };

export const dateTime =
  ({ ...timeProps } = {}) =>
  (value) => {
    const dateTimeMask = [];

    const dateValue = value.match(/[\d_]{1,3}.[\d_]{1,3}.[\d_]{1,5}/) || [''];
    dateTimeMask.push(...dateFn(dateValue[0]));
    dateTimeMask.push(' ', ...time(timeProps)(value.split(' ')[1] || ''));

    return dateTimeMask;
  };

export const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('_');

export const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

export const toCamelCase = (str) => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

const getType = (element) => {
  switch (true) {
    case isValidElement(element):
      return 'element';
    case Array.isArray(element):
      return 'array';
    case element === null:
      return 'null';
    default:
      return typeof element;
  }
};

export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export default (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
