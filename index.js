$(document).ready(function(){
	$.getJSON("topspots.json", function(json){
		$.each(json, function(key, value){
			$("#topSpots tbody").append('<tr><td>' + json[key].name + '</td><td>' + json[key].description + '</td><td><a class="btn btn-primary" href="google.com/maps?q=' + json[key].location + '">Click here to open google maps</a></tr></tr>');
		});
	});
});
