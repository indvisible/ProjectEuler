define(
    ['n005'],
    function(test) {
    describe('Tests for 5 problem should return', function() {
        it('# 2520 when \'10\'', function() {
            expect(test(10)).toEqual(2520);
        });

        it('# 232792560 when \'20\'', function() {
            expect(test(20)).toEqual(232792560);
        });
    })
});
