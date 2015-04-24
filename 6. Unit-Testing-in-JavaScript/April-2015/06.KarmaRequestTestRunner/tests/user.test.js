describe('#student', function () {
   it('should get user by id', function () {
       getStudent('u5Y2bNhHPV').then(
           function (data) {
               expect(data).to.not.be.null;
               expect(data.name).to.equal('Жичка');
               expect(data.grade).to.equal(6);
           }, function (error) {
           }
       )
   })
});