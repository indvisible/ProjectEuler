define(['n001'], function(test) {
	describe('Tests for 1 problem', function() {
		describe('# should return', function() {
			it('# 23 as result of \'10\'', function() {
				expect(test(10)).toEqual(23);
			});

			it('# 233168 as result of \'1000\'', function() {
				expect(test(1000)).toEqual(233168);
			});
		})

	})
});