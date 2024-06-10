/**
 * @file helpers.test.js
 * @description Tests for helper functions
 * @github oaslananka
 */

const chai = require('chai');
const { formatDate } = require('../utils/helpers');
const should = chai.should();

describe('Helper Functions', () => {
    describe('formatDate()', () => {
        it('should format the date correctly', (done) => {
            const date = new Date('2024-01-01T00:00:00Z');
            const formattedDate = formatDate(date);
            formattedDate.should.equal('2024-01-01 00:00:00');
            done();
        });
    });
});
