define(['n007'], function(test) {
	describe('Tests for 7 problem', function() {
		describe('# should return', function() {
			it('# 13 when \'6\'', function() {
				expect(test(6)).toEqual(13);
			});

			it('# 104743 when \'10001\'', function() {
				expect(test(10001)).toEqual(104743);
			});
		})
	})
});
