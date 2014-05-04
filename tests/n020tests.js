define(
    ['n020'],
    function(test) {
    describe("Tests for 20 problem should return", function(){
        it("# 27 as a result of digits sum in (10)!", function () {
            expect(test(10)).toEqual(27);
        });

        it("# 63 as a result of digits sum in (21)!", function () {
            expect(test(21)).toEqual(63);
        });

        it("# 72 as a result of digits sum in (22)!", function () {
            expect(test(22)).toEqual(72);
        });

        it("# 144 as a result of digits sum in (35)!", function () {
            expect(test(35)).toEqual(144);
        });

        it("# 648 as a result of digits sum in (100)!", function () {
            expect(test(100)).toEqual(648);
        });
    });
});
