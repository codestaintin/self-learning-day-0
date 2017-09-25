import chai, {assert} from 'chai';
import arithGeoTest from './arithGeo.js';


describe("Arithmetic progression:", () => {
  it("should return: Enter atleast 3 array index values, if array.length < 2", () => {
      let input = arithGeoTest([2,3]);
      assert.equal(input, "Enter at least 3 array index values", `Array length > 2`);
   });

   it("should return 0 if array is emtpy", () => {
    let input = arithGeoTest([]);
    assert.equal(input, 0, `Not Empty Array`);
   });

   it("should return `Arithmetic` if the array is Arithmetic", () => {
     let input = arithGeoTest([2,4,6]);
     assert.equal(input, "Arithmetic", `Not Arithmetic`);
   });

   it("should return -1 if not Arithmetic/Geometric", () => {
      let input = arithGeoTest([2,4,16]);
      assert.equal(input, -1);
   });

   it("should return 'Not an array'", () => {
      let input = arithGeoTest("arandomstring");
      assert.equal(input, "Not an array");
   });
});

describe("Geometric progression:", () => {

  it("should return: Enter at least 3 array index values, if array.length < 2", () =>{
      let input = arithGeoTest([2,3]);
      assert.equal(input, "Enter at least 3 array index values", `Array length < 2`);
  });

  it("should return 0 if array is emtpy", () =>{
    let input = arithGeoTest([]);
    assert.equal(input, 0, `Not Empty Array`);
  });
  
  it("should return 'Not an array'", () =>{
      let input = arithGeoTest(1,1);
      assert.equal(input, "Not an array");
  });

  it("should return -1 if not Geometric/Arithmetic", () =>{
    let input = arithGeoTest([3,6,11]);
    assert.equal(input, -1, `Geometric`);
  });

  it("should return 'Not an array'", () => {
      let input = arithGeoTest(null);
      assert.equal(input, "Not an array");
  });

});

