import { describe, expect, test } from 'vitest';
import { getMealFromHour, getAverageWaitTimeForHalls, getAverageRatings } from './helpers';

describe('all dining halls in halls', () => {
    test('halls includes Sargent Allison Elder and Plex West', () => {
        var sargent = 0;
        var allison = 0;
        var plex = 0;
        var elder = 0;
        var result = getAverageWaitTimeForHalls([]);
        console.log(result);
        result.forEach((hall) => {
            if (hall['Dining Hall Id'] == 'Sargent' ){
                sargent = 1;
            }
            if (hall['Dining Hall Id'] == 'Elder' ){
                elder = 1;
            }
            if (hall['Dining Hall Id'] == 'Plex West' ){
                plex = 1;
            }
            if (hall['Dining Hall Id'] == 'Allison' ){
                allison = 1;
            }
        })  
        expect(allison).toEqual(1);
        expect(plex).toEqual(1);
        expect(sargent).toEqual(1);
        expect(elder).toEqual(1);
    });
}
);

describe('Wait time calculation test', () => {
    test('If no ratings, getAverageRatings returns a rating of 3 for each dining hall', () => {
        var result = getAverageRatings([]);
        console.log(result);
        expect(result['Sargent']).toEqual(3);
        expect(result['Allison']).toEqual(3);
        expect(result['Plex West']).toEqual(3);
        expect(result['Elder']).toEqual(3);
        
    });
    test('When only 1 rating is reported for each dining hall, getAverageRatings will return that rating', () => {
        const report = [{
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 1,
          },
          {
            "Dining Hall Id": "Elder",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 2,
          },
          {
            "Dining Hall Id": "Plex West",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 4,
          },
          {
            "Dining Hall Id": "Sargent",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 5,
          }];
        var result = getAverageRatings(report);
        expect(result['Sargent']).toEqual(5);
        expect(result['Allison']).toEqual(1);
        expect(result['Plex West']).toEqual(4);
        expect(result['Elder']).toEqual(2);
    });
    test('For multiple reported ratings per dining hall, getAverageRatings will correctly average the ratings', () => {
        const report = [{
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 3,
          },
          {
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 4,
          },
          {
            "Dining Hall Id": "Allison",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 5,
          },
          {
            "Dining Hall Id": "Elder",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 2,
          },
          {
            "Dining Hall Id": "Elder",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 3,
          },
          {
            "Dining Hall Id": "Elder",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 1,
          },
          {
            "Dining Hall Id": "Sargent",
            Timestamp: {nanoseconds: 0, seconds: Date.now()/1000},
            "Stars": 5,
          }];
        var result = getAverageRatings(report);
        expect(result['Sargent']).toEqual(5);
        expect(result['Allison']).toEqual(4);
        expect(result['Plex West']).toEqual(3);
        expect(result['Elder']).toEqual(2);
    });
});
