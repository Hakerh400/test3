'use strict';

const O = require('../omikron');

const tabSize = 2;

const openParenChars = '([{';
const closedParenChars = ')]}';
const strLiteralDelimChars = '"`';

const addSpacing = (str, before=1, after=1) => {
  return sp(before) + str + sp(after);
};

const addParens = str => {
  return encap(str, '()');
};

const addBrackets = str => {
  return encap(str, '[]');
};

const addBraces = str => {
  return encap(str, '{}');
};

const isStrDelim = char => {
  return strLiteralDelimChars.includes(char);
};

const getTabSize = line => {
  const lineLen = line.length;

  for(let i = 0; i !== lineLen; i++)
    if(line[i] !== ' ')
      return i / tabSize | 0;

  return lineLen / tabSize | 0;
};

const getTabStr = line => {
  return tab(getTabSize(line));
};

const getSpSize = line => {
  const lineLen = line.length;

  for(let i = 0; i !== lineLen; i++)
    if(line[i] !== ' ')
      return i;

  return lineLen;
};

const getSpStr = line => {
  return sp(getSpSize(line));
};

const tab = (size, str='') => {
  return sp(size * tabSize) + str;
};

const sp = size => {
  return ' '.repeat(size);
};

const isOpenParen = char => {
  return getOpenParenType(char) !== null;
};

const isClosedParen = char => {
  return getClosedParenType(char) !== null;
};

const getOpenParenType = char => {
  return O.indexOf(openParenChars, char);
};

const getClosedParenType = char => {
  return O.indexOf(closedParenChars, char);
};

const quote = (str, c='"') => {
  return encap(str, c + c)
};

const encap = (str, chars) => {
  return chars[0] + str + chars[1];
};

const isInt = str => {
  return /^(?:0|\-?[1-9][0-9]*)$/.test(str);
};

const tabStr = tab(1);

module.exports = {
  tabSize,
  tabStr,

  openParenChars,
  closedParenChars,
  strLiteralDelimChars,

  addSpacing,
  addParens,
  addBrackets,
  addBraces,
  isStrDelim,
  getTabSize,
  getTabStr,
  getSpSize,
  getSpStr,
  tab,
  sp,
  isOpenParen,
  isClosedParen,
  getOpenParenType,
  getClosedParenType,
  quote,
  encap,
  isInt,
};