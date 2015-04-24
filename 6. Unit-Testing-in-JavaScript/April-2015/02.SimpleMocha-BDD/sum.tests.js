describe('#sum', function () {

    it('when empty array, expect to return 0', function () {
      var actual = app.sum([]);
      var expected = 0;
      expect(actual).to.equal(expected);
    });
    it('when with single number, expect the number', function () {
      var number = 6;
      var actual = app.sum([number]);
      var expected = number;
      expect(actual).to.equal(expected);
    });
});