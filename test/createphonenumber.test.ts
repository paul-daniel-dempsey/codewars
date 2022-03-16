import {createPhoneNumber, createPhoneNumber1, createPhoneNumber2,createPhoneNumber3} from '../src/createphonenumber';

describe("Create Phone Number", () => {
  test("Fixed tests", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber1([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");
    expect(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");
    expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    expect(createPhoneNumber3([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");
    expect(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
  });
});