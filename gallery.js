$(function(){

	$.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(response){
		var finalCard = renderGallery(response);
		$('.container').html(finalCard);

	});
	

	function renderGallery(gallery) {
		var finalCard = '';
		gallery.forEach(function(student){
			finalCard += '<div class="card" style="width: 18rem;">';
			finalCard += '<img class="card-img-top" src="./img/logo.png" alt="Card image cap">';
			finalCard += '<div class="card-body">';
			finalCard += '<h5 class="card-title">'+ student.fullName +'</h5>';
			finalCard += '<h6>Status: Graduate</h6>';
			finalCard += '<p class="card-text">'+ student.missionStatement +'</p>';
			// finalCard += '<a href="#" class="btn btn-primary">Quick View</a>';
			finalCard += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#profileModal">Profile</button>';
			finalCard += '</div>';
			finalCard += '</div>';
		});
		return finalCard;
		

	} 


	 function renderModal(modal) {
		var finalModal = '';
		modal.forEach(function(student){
			finalModal += '<div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true"';
			finalModal += '<div class="modal-dialog" role="document">';
			finalModal += '<div class="modal-content">';
			finalModal += '<div class="modal-header">';
			finalModal += '<div class="modal-title" id="profileModalLabel">student.firstName</div>';
			finalModal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
			finalModal += '<span aria-hidden="true">&times;</span>';
			finalModal += '</button>';
			finalModal += '</div>';
			finalModal += '<div class="modal-body">';
			finalModal += '<a href="'+ student.portfolioUrl +'">Porfolio</a> <br>';
			finalModal += '<a href="'+ student.githbuUrl +'">Github</a> <br>';
			finalModal += '<a href="'+ student.linkedinUrl +'">Linkedin</a> <br>';
			finalModal += '<p>'+ student.fullBio +'</p>';
			finalModal += '<p>'+ student.email +'</p>';
			finalModal += '</div>';
			finalModal += '<div class="modal-footer">';
			finalModal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
			finalModal += '</div>';
			finalModal += '</div>';
			finalModal += '</div>';
			finalModal += '</div>';
		});
		return finalModal;
	}
	
	$('button').click(function(){
		console.log(finalModal);
		return finalModal;
	});



});