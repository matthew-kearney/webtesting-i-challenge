const enhancer = require('./enhancer.js');
// test away!
const { repair, fail, succeed } = require("./enhancer.js");

describe('enhancer.js', () => {
    it('make sure we working', () => {
        expect(false).toBeFalsy();
    })


    describe("repair() method", () => {
        it("should return durability to 100", () => {
            const item = {
                name: "sword",
                enhancement: 5,
                durability: 3
            };
            const expected = {
                name: "sword",
                enhancement: 5,
                durability: 100
            };
            const result = repair(item);
            expect(result).toEqual(expected);
        });
    })

    describe("succeed() method", () => {
        it("should increase enhancment by 1 if < 20", () => {
          const item = {
            name: "sword",
            enhancement: 10,
            durability: 50
          };
          const expected = {
            name: "sword",
            enhancement: 11,
            durability: 50
          };
          const result = succeed(item);
          expect(result).toEqual(expected);
        });
        it("no change  >= 20", () => {
          const item = {
            name: "sword",
            enhancement: 21,
            durability: 50
          };
          const expected = {
            name: "sword",
            enhancement: 21,
            durability: 50
          };
          const result = succeed(item);
          expect(result).toEqual(expected);
        });
      });



})