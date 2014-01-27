define(['n015'], function (test) {
    describe('Tests for 15 problem', function() {
        it('should return 6 as result of 2', function () {
            expect(test(2)).toEqual(6);
        });

        it('should return 137846528820 as result of 20', function () {
            expect(test(20)).toEqual(137846528820);
        });
    })
});