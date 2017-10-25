const expect = require('chai').expect
const morath_sum = require('..').sum
const morath_ded = require('..').ded
const morath_ply = require('..').ply
const morath_div = require('..').div

describe('#morath', function() {
    it('Sumar 2 + 2', function() {
        const sum = morath_sum(2,2);
        expect(sum==4);
    });
    it('Restar 3 - 1', function() {
        const sum = morath_ded(3,1);
        expect(sum==2);
    });
    it('Multiplicar 2 * 2', function() {
        const sum = morath_ply(2,2);
        expect(sum==4);
    });
    it('Dividir 2 / 2', function() {
        const sum = morath_div(2,2);
        expect(sum==1);
    });
})
