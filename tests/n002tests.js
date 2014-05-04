define(
    ['n002'],
    function(test) {
    describe('Tests for 2 problem should return', function() {
        it('# 10 when \'10\'', function() {
            expect(test(10)).toEqual(10);
        });

        it('# 44 when \'35\'', function() {
            expect(test(35)).toEqual(44);
        });

        it('# 4613732 when \'4000000\'', function() {
            expect(test(4000000)).toEqual(4613732);
        });
    })
});
