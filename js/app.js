$(document).ready(function(){
	
	$('.ing-specify form').submit(function(event){
		event.preventDefault();
		var add = $(this).find('input[type="text"]').val();
		var html = '<li class="i-list">' + 
					'<span class="i-text">'+add+'</span>' +
					'<span class="right-check">&#10005;</span>' +
				'</li>';
		$(this).siblings('ul').append(html);
		$(this).find('input[type="text"]').val('');
	});

	$('.recipe-search').submit(function(event){
		event.preventDefault();
		var keyword = $('.recipe-search_input').val();
		var additions = $('.ingredient-addition').val();
		var subtractions = $('.ingredient-subtraction').val();
		getRecipe();
		$('.recipe-search_input').val('');
	})

	var getRecipe = function(keyword, additions, subtractions) {

		var baseURL = 'https://api.yummly.com/v1/api/recipes';
		var query = {
			q: keyword + '&allowedIngredient[]=' + additions + '&excludedIngredient[]=' + subtractions,
			_app_id: 'ecc8e08e',
			_app_key: '1f1523599d47bfaebe84f01732917a96',
		};
		$.ajax({
			url: baseURL,
			data: query,
			dataType: 'jsonp',
			type: 'GET'
		})
		.done(function(result){
			$('.recipe-list').html('');
			$.each(result.matches, function(i, match) {
				console.log(match)
			});
		})
		.fail(function(jqXHR, textStatus, errorThrown){
		});
	};



});