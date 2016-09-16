var getProjectsHome = require('../../controllers/getProjectsHome');

describe('Projects Home: ', function() {

  describe('GET ', function() {

    it('replies to requests with the projects home page', function(){
      var req,res,spy;
      req = {};
      res = {sendFile: function(){}};
      spyOn(res, 'sendFile');

      getProjectsHome(req, res);

      expect(res.sendFile).toHaveBeenCalledWith('list.html', jasmine.any(Object));
    });

  });
});
