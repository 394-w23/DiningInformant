import { describe, expect, test } from 'vitest';
import { menusToDictionary } from './helpers';

describe('counter tests', () => {
  test('menuToDictionary doesnt cause an error in the edge case when no dining hall info can be retrieved', () => {
    var result = menusToDictionary([]);
    console.log(result);
    expect(result).toEqual({});
  });

  test('menuToDictionary simple test', () => {
    const report = [{
      "Dining Hall Id": "Allison",
      "menu": "Cheese Pizza"
    },
    {
      "Dining Hall Id": "Sargent",
      "menu": "Buffalo Chicken Calzone"
    }];
    var result = menusToDictionary(report);
    console.log(result);
    expect(result["Allison"]).toEqual("Cheese Pizza");
    expect(result["Sargent"]).toEqual("Buffalo Chicken Calzone");
  });
});
