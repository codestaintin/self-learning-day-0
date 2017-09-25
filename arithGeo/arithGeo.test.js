import chai, {assert} from 'chai';
// const {assert} = require("chai");
// const arithGeotest = require("./arithGeo.js");
import arithGeoTest from './arithGeo.js';


describe("Arithmetic progression:", () => {
  it("should return: Enter atleast 3 array index values, if array.length < 2", () => {
      let res = arithGeoTest([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
   });

   it("should return 0 if array is emtpy", () => {
    let res = arithGeoTest([]);
    assert.equal(res, 0, `Not Empty Array`);
   });

   it("should return `Arithmetic` if the array is Arithmetic", () => {
     let res = arithGeoTest([2,4,6]);
     assert.equal(res, "Arithmetic", `Not Arithmetic`);
   });

   it("should return -1 if not Arithmetic/Geometric", () => {
      let res = arithGeoTest([2,4,16]);
      assert.equal(res, -1);
   });

   it("should return 'Not an array'", () => {
      let res = arithGeoTest("arandomstring");
      assert.equal(res, "Not an array");
   });
});

describe("Geometric progression:", () => {

  it("should return: Enter atleast 3 array index values, if array.length < 2", () =>{
      let res = arithGeoTest([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
  });

  it("should return 0 if array is emtpy", () =>{
    let res = arithGeoTest([]);
    assert.equal(res, 0, `Not Empty Array`);
  });
  
  it("should return 'Not an array'", () =>{
      let res = arithGeoTest(1,1);
      assert.equal(res, "Not an array");
  });

  it("should return -1 if not Geometric/Arithmetic", () =>{
    let res = arithGeoTest([3,6,11]);
    assert.equal(res, -1, `Geometric`);
  });

  it("should return 'Not an array'", () => {
      let res = arithGeoTest("aaa");
      assert.equal(res, "Not an array");
  });

});