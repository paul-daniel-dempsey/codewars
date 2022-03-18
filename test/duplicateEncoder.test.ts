import {duplicateEncode,duplicateEncode2} from '../src/duplicateEncoder';


describe("Duplicate Encoder", () => {
    it("Testing for fixed tests", () => {
        expect(duplicateEncode("din")).toEqual("(((");
        expect(duplicateEncode("recede")).toEqual("()()()");
        expect(duplicateEncode("Success")).toEqual(")())())");
        expect(duplicateEncode("(( @")).toEqual("))((");
    });
  });
  describe("Duplicate Encoder", () => {
    it("Testing for fixed tests", () => {
        expect(duplicateEncode2("din")).toEqual("(((");
        expect(duplicateEncode2("recede")).toEqual("()()()");
        expect(duplicateEncode2("Success")).toEqual(")())())");
        expect(duplicateEncode2("(( @")).toEqual("))((");
    });
  });