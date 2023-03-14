import { describe, expect, test } from 'vitest';
import { getMealFromHour, getAverageWaitTimeForHalls } from './helpers';

describe('Meal from hour test', () => {
    test('Given an hour before 11, getMealFromHour should return 0 (breakfast)', () => {
        //checking breakfast hours
        for(var i = 0; i < 11; i++) {
            expect(getMealFromHour(i)).toEqual(0);
        }
    });
    test('Given an hour between 11 and 16(4pm), getMealFromHour should return 1 (lunch)', () => {
        //checking lunch hours
        for(var i = 11; i < 16; i++) {
            expect(getMealFromHour(i)).toEqual(1);
        }
    });
    test('Given an hour between 4pm and midnight, getMealFromHour should return 2 (dinner)', () => {
        //checking dinner hours
        for(var i = 16; i < 25; i++) {
            expect(getMealFromHour(i)).toEqual(2);
        }
    });
});

describe('Wait time calculation test', () => {
    test('If no wait times are reported, getAverageWaitTimeForHalls should default to 5 min wait for all halls', () => {
        var result = getAverageWaitTimeForHalls([]);
        console.log(result);
        result.forEach((hall) => {
            expect(hall['Wait Time']).toEqual(5);
        })
    });
    test('For a single reported wait time, getAverageWaitTimesForHalls will return that reported time', () => {
        const report = [{
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Wait Time": 14,
          }];
        var result = getAverageWaitTimeForHalls(report);
        console.log(report);
        result.forEach((hall) => {
            if(hall['Dining Hall Id']=='Allison') {
                expect(hall['Wait Time']).toEqual(14);
            }
        })
    });
    test('If no wait times are reported, getAverageWaitTimeForHalls should default to 5 min wait for all halls', () => {
        var result = getAverageWaitTimeForHalls([]);
        console.log(result);
        result.forEach((hall) => {
            expect(hall['Wait Time']).toEqual(5);
        })
    });
    test('For multiple reported wait times, getAverageWaitTimesForHalls will correctly average the wait times', () => {
        const report = [{
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Wait Time": 15,
          },
          {
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Wait Time": 30,
          },
          {
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Wait Time": 24,
          }];
        var result = getAverageWaitTimeForHalls(report);
        console.log(report);
        result.forEach((hall) => {
            if(hall['Dining Hall Id']=='Allison') {
                expect(hall['Wait Time']).toEqual(23);
            }
        })
    });
});
