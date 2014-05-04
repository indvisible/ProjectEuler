define(
    ['n030'],
    function(test) {
    describe('Tests for 30 problem should return', function() {
        it('# 443839 when \'5\'', function() {
            expect(test(5)).toEqual(443839);
        });
    })
});