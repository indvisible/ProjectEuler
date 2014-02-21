define(['n004'], function(test) {
	describe('Tests for 4 problem', function() {
		describe('# should return', function() {
			it('# 9009 when \'2\'', function() {
				expect(test(2)).toEqual(9009);
			});

			it('# 906609 when \'3\'', function() {
				expect(test(3)).toEqual(906609);
			});
		})
	})
});
