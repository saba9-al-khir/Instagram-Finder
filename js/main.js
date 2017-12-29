$(document).ready(function(){

	// SEARCH BY USERNAME
	$('#searchuser').on('keyup', function(e){
		
		let username = e.target.value;

		var token = '3499030586.be8cde9.f93677d5fdf14a41bb0a8656ee83dcdb', // learn how to obtain it below
		    userid =  3499030586, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
		    num_photos = 6; // how much photos do you want to get
		 
		$.ajax({
				url: 'https://api.instagram.com/v1/users/' + userid, // or /users/self/media/recent for Sandbox
				dataType: 'jsonp',
				type: 'GET',
				data: {access_token: token, count: num_photos},
				success: function(user){
				 		//what to do with user infos
				 		console.log(user);
						$('#profile').html(`
							<div class="panel panel-default">
							  <div class="panel-heading">${user.data.username}</div>
							  <div class="panel-body">
								<div class="row">
									<div class="col-md-3">
										<img src="${user.data.profile_picture}" class="thumbnail" width="100%" alt="" />
										<a href="https://www.instagram.com/${user.data.username}/" target="_blank" class="btn btn-primary btn-block">View Profile</a>
									</div>

									<div class="col-md-9">
										<ul class="list-group">
											<li class="list-group-item">Pictures: ${user.data.counts.media}</li>
											<li class="list-group-item">Followers: ${user.data.counts.follows}</li>
											<li class="list-group-item">Followed by: ${user.data.counts.followed_by}</li>
										</ul>
									</div>
								</div>
							  </div>
							</div>
						`);
				}
			});
		

		$.ajax({
			url: 'https://api.instagram.com/v1/users/'+userid+'/media/recent/?access_token='+token,
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: num_photos},
			success: function(data){
		 		$('#repos').html('<div class="row">');

		 		for( x in data.data ){
					$('#repos').append(`
							<div class="col-md-4">
								<img width="100%" src="${data.data[x].images.standard_resolution.url}">
							</div>
						`);
						$('#repos').append('</div>');
				};
			}
		});

	});

	});
		/*
		//make request to Github
		$.ajax({
			3499030586.be8cde9.f93677d5fdf14a41bb0a8656ee83dcdb
			url : 'https://api.instagram.com/v1/users/'+username+'/?access_token=3499030586.be8cde9.f93677d5fdf14a41bb0a8656ee83dcdb',
		}).done(function(user){
			//what to do with user infos
				$('#profile').html(`
					<div class="panel panel-default">
					  <div class="panel-heading">${user.username}</div>
					  <div class="panel-body">
						<div class="row">
							<div class="col-md-3">
								<img src="${user.profile_picture}" class="thumbnail" width="100%" alt="" />
								<a href="https://www.instagram.com/${user.username}/" target="_blank" class="btn btn-primary btn-block">View Profile</a>
							</div>

							<div class="col-md-9">
								<ul class="list-group">
									<li class="list-group-item">Company: ${user.counts.media}</li>
									<li class="list-group-item">Website/Blog: ${user.counts.follows}</li>
									<li class="list-group-item">Location: ${user.counts.followed_by}</li>
								</ul>
							</div>
						</div>
					  </div>
					</div>
				`);
		 	});
		//that's it folks
	});
	/*
	// SEARCH BY LOCATION 
	$('#searchloca').on('keyup', function(e){
		
		let location = e.target.value;

		//make request to Github
		$.ajax({
			url : 'https://api.github.com/search/users?q=location%3A'+location,
			data: {
				client_id:'be8cde9a60624b16801a88a023e3c80c'
				client_secret:'d1c59ffddee14ee9b5bd2bceb6acaafb'
			} 
		}).done(function(users){
				$('#profile').html('<div class="row">');
				$.each(users.items, function(index, user){

					$('#profile').append(`
						<div class="col-md-3">
							<div class="panel panel-default">
							    <div class="panel-heading">${user.login}</div>
							    <div class="panel-body">
									<img src="${user.avatar_url}" class="thumbnail" width="100%" alt="" />
									<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
							    </div>
							</div>
						</div>
					`);
				$('#profile').append('</div>');
				});
			});
	});

	//SEARCH BY TECHNOLOGY
	$('#searchtech').on('keyup', function(e){
		
		let tech = e.target.value;

		//make request to Github
		$.ajax({
			url : 'https://api.github.com/search/repositories?q='+tech,
			data: {
				client_id:'be8cde9a60624b16801a88a023e3c80c'
				client_secret:'d1c59ffddee14ee9b5bd2bceb6acaafb'
			} 
		}).done(function(repos){
				$('#profile').html('<div class="row">');
				$.each(repos.items, function(index, repo){

					$('#profile').append(`
						<div class="col-md-4">
							<div class="panel panel-default">
							    <div class="panel-heading">${repo.full_name}</div>
							    <div class="panel-body">
									<p>${repo.description}</p>
									<a href="${repo.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
							    </div>
							</div>
						</div>
					`);
				$('#profile').append('</div>');
				});
			});
	});
	
});
*/
