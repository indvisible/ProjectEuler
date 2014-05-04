define(
    ['n003'],
    function(test) {
    describe('Tests for 3 problem should return', function() {
        it('# 29 when \'13195\'', function() {
            expect(test(13195)).toEqual(29);
        });

        it('# 6857 when \'600851475143\'', function() {
            expect(test(600851475143)).toEqual(6857);
        });
    })
});
