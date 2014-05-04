define(
    ['n010'],
    function(test) {
    describe('Tests for 10 problem  should return', function() {
        it('# 17 when \'10\'', function() {
            expect(test(10)).toEqual(17);
        });

        it('# 142913828922 when \'2 000 000\'', function() {
            expect(test(2000000)).toEqual(142913828922);
        });
    })
});
