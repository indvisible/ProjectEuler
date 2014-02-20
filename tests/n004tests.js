define(['n004'], function(test) {
	describe('Tests for 4 problem', function() {
		describe('# should return', function() {
			it('# 9009 when \'99\'', function() {
				expect(test(99)).toEqual(9009);
			});

			it('# 906609 when \'999\'', function() {
				expect(test(999)).toEqual(906609);
			});
		})
	})
});
