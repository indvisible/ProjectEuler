define(['n006'], function(test) {
	describe('Tests for 6 problem', function() {
		describe('# should return', function() {
			it('# 2640 when \'10\'', function() {
				expect(test(10)).toEqual(2640);
			});

			it('# 25164150 when \'100\'', function() {
				expect(test(100)).toEqual(25164150);
			});
		})
	})
});
