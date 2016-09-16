$(document).ready(function() {
  setInterval(refreshRace, 5000);

  function refreshRace() {
    $.ajax({
      url: "http://localhost:8081/list",
      crossDomain: true
    }).then(function(data) {
      var project = $.parseJSON(data);
	      $(".project").text(project.projects);
        console.log(project.projects);
      });
  }
});
