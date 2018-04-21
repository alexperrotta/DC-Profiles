$(function(){

	$.get('http://s3.amazonaws.com/dc-profiles/Students.json', function(response){
		var finalCard = renderGallery(response);
		$('.container').html(finalCard);
	});
	

	function renderGallery(gallery) {
		var finalCard = '';
		gallery.forEach(function(card){
			finalCard = '<div class="card" style="width: 18rem;">';
			finalCard += '<img class="card-img-top" src="http://epguides.com/BigBangTheory/cast.jpg" alt="Card image cap">';
			finalCard += '<div class="card-body">';
			finalCard += '<h5 class="card-title">Full Name</h5>';
			finalCard += '<h6>Status: Graduate</h6>';
			finalCard += '<p class="card-text">Mission Statement</p>';
			finalCard += '<a href="#" class="btn btn-primary">Quick View</a>';
			finalCard += '<a href="#" class="btn btn-primary">Full Profile</a>';
			finalCard += '</div>';
			finalCard += '</div>';
		});
		return finalCard;
		
	} 

});