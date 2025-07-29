// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a known palindrome", () => {
    const result = isPalindrome("racecar");
    expect(result).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    const result = isPalindrome("car");
    expect(result).toBe(false);
  });
  it("throws error for non-alphabetic characters", () => {
  expect(() => isPalindrome("hello!")).toThrow("Input must contain only letters");
});

it("throws error if input is not a string", () => {
  expect(() => isPalindrome(123)).toThrow("Input must be a string");
});

});
