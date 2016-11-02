$(document).ready(function(){
	
	var userSearch = '';

	var getRecipe = function(keyword,additions,subtractions) {

		var baseURL = 'https://api.yummly.com/v1/api/recipes';
		var query = {
			q: keyword,
			_app_id: 'ecc8e08e',
			_app_key: '1f1523599d47bfaebe84f01732917a96',
		};
		$.ajax({
			url: baseURL,
			data: query,
			dataType: 'jsonp',
			type: 'GET'
		})
	}


	$('')
})