define(
    ['n016'],
    function(test) {
    describe("Tests for 16 problem should return", function(){
        it("# 8 as a result of sum results digits 2 ^ 3", function () {
            expect(test(2, 3)).toEqual(8);
        });

        it("# 13 as a result of sum results digits 5 ^ 4", function () {
            expect(test(5, 4)).toEqual(13);
        });

        it("# 19 as a result of sum results digits 2 ^ 12", function () {
            expect(test(2, 12)).toEqual(19);
        });

        it("# 26 as a result of sum results digits 2 ^ 15", function () {
            expect(test(2, 15)).toEqual(26);
        });

        it("# 37 as a result of sum results digits 2 ^ 30", function () {
            expect(test(2, 30)).toEqual(37);
        });

        it("# 61 as a result of sum results digits 2 ^ 40", function () {
            expect(test(2, 40)).toEqual(61);
        });

        it("# 1366 as a result of sum results digits 2 ^ 1000", function () {
            expect(test(2, 1000)).toEqual(1366);
        });
    });
});
