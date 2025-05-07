// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//Phone Numbers
test('phone number with area code in parentheses works', () => {
  expect(isPhoneNumber("(123)-456-7890)")).toBeTruthy();
});

test('phone number with area code not in parentheses works', () => {
  expect(isPhoneNumber("123-456-7890)")).toBeTruthy();
});

test('phone number with missing numbers does not work', () => {
  expect(isPhoneNumber("(123)-8-7890)")).toBeFalsy();
});

test('phone number with no dashes does not work', () => {
  expect(isPhoneNumber("1234567890)")).toBeFalsy();
});

//Email Tests
test('email with example gmail passes', () => {
  expect(isEmail("example@gmail.com")).toBeTruthy();
});

test('email with edu email works', () => {
  expect(isEmail("student@ucsd.edu")).toBeTruthy();
});

test('email without @ does not work', () => {
  expect(isEmail("examplegmail.edu")).toBeFalsy();
});
test('email without part before @ does not work', () => {
  expect(isEmail("@yahoo.net")).toBeFalsy();
});

//strong Password tests
test('password with first char as letter and 4 chars', () => {
  expect(isStrongPassword("test")).toBeTruthy();
});

test('password with 15 char and num and underscores', () => {
  expect(isStrongPassword("T123456789jkro_")).toBeTruthy();
});

test('password under 4 char', () => {
  expect(isStrongPassword("asd")).toBeFalsy();
});
test('password with 16 char and other symbols', () => {
  expect(isStrongPassword("T123456789jkro_$")).toBeFalsy();
});

//date test
test('date with 2 digit day and month works', () => {
  expect(isDate("01/01/2025")).toBeTruthy();
});
test('date with 1 digit day and month works', () => {
  expect(isDate("1/1/2025")).toBeTruthy();
});
test('date with dashes does not work', () => {
  expect(isDate("1-1-2025")).toBeFalsy();
});
test('date with 2 digit year does not work', () => {
  expect(isDate("1/1/25")).toBeFalsy();
});

//hex color test
test('color with 3 color code', () => {
  expect(isHexColor("#056")).toBeTruthy();
});
test('color with 6 hex color code', () => {
  expect(isHexColor("#008000")).toBeTruthy();
});
test('color with 4 numbers not accepted', () => {
  expect(isHexColor("#0080")).toBeFalsy();
});
test('RGB color code not accepted', () => {
  expect(isHexColor("213, 93, 67")).toBeFalsy();
});
