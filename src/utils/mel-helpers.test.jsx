import { describe, expect, test } from 'vitest';
import { getMealFromHour, getAverageWaitTimeForHalls, getAverageRatings } from './helpers';

describe('All dining halls default rating is 3', () => {
    test('If no ratings, getAverageRatings returns a rating of 3 for each dining hall', () => {
                var result = getAverageRatings([]);
                console.log(result);
                expect(result['Sargent']);
                expect(result['Allison']);
                expect(result['Plex West']);
                expect(result['Elder']);
                
            });
}
);

describe('Star rating calculation test', () => {
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
        var result = getAverageRatings([]);
        expect(result['Plex West']).toEqual(3);
        expect(result['Sargent']).toEqual(3);
        expect(result['Allison']).toEqual(3);
        expect(result['Elder']).toEqual(3);
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
        result = getAverageRatings(report);
        expect(result['Sargent']).toEqual(5);
        expect(result['Allison']).toEqual(4);
        expect(result['Plex West']).toEqual(3);
        expect(result['Elder']).toEqual(2);
        expect(result['Sargent']).not.toEqual(3);
        expect(result['Allison']).not.toEqual(3);
        expect(result['Elder']).not.toEqual(3);
    });
});
