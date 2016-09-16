var Repo = require('../../models/repo');

describe('Repo: ', function() {

  var repo;

  beforeEach(function() {
    repo = new Repo();
  });

  describe('listProjects ', function() {

    it('returns repo project list data', function(){
      var expectedProjectData = {projects: 'foo'};
      var actualProjectData = repo.getProjects();
      expect(actualProjectData).toEqual(expectedProjectData);
    });
  });
});
