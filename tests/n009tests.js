define(
    ['n009'],
    function(test) {
    describe('Tests for 9 problem should return', function() {
        it('# 31875000 when \'1000\'', function() {
            expect(test(1000)).toEqual(31875000);
        });
    })
});
