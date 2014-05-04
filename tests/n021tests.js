define(
    ['n021'],
    function(test) {
    describe('Tests for 21 problem should return', function() {
        it('# 71910 when \'220\'', function() {
            expect(test(10000)).toEqual(71910);
        });
    })
});