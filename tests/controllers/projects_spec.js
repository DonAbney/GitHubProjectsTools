var getProjects = require('../../controllers/getProjects');
var Repo = require('../../models/repo');

describe('Status: ', function() {

  describe('GET ', function() {

    it('replies to list requests with the list of repo Projects', function(){
      var req,res;
      req = res = {};
      res.end = function() {};
      var testRepoProjects = {test: 'test'}
      spyOn(Repo.prototype, 'getProjects').andReturn(testRepoProjects);
      spyOn(res, 'end');

      getProjects(req, res);

      expect(Repo.prototype.getProjects).toHaveBeenCalled();
      expect(res.end).toHaveBeenCalledWith(JSON.stringify(testRepoProjects));
    });

  });

});
