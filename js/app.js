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
		getRecipe(keyword, additions, subtractions);
		$('.recipe-search_input').val('');
	})

	var getRecipe = function(keyword, additions, subtractions) {

		var baseURL = 'https://api.yummly.com/v1/api/recipes?_app_id=ecc8e08e'
			+ '&_app_key=1f1523599d47bfaebe84f01732917a96'
			+ '&q=' + keyword + '&maxResult=100';
		$('.added-ingredients li .i-text').each(function(i, ingredient){
			baseURL += '&allowedIngredient[]=' + $(ingredient).text();
		});
		$('.subtracted-ingredients li .i-text').each(function(i, ingredient){
			baseURL += '&excludedIngredient[]=' + $(ingredient).text();
		});
		
		$.ajax({
			url: baseURL,
			dataType: 'jsonp',
			type: 'GET',
			success: function(result){
				console.log(result);
				$('.recipe-list').html('');
				$.each(result.matches, function(i, match) {
					console.log(match);
					$('.recipe-list').append('<li>' + 
						'<div class="image" style="background-image: url(' + match.imageUrlsBySize[90].replace('s90-c', 's360-c') + ')">' + '</div>' +
						'<div class="name">' +
							'<p><a target="_blank" href=https://www.yummly.com/recipe/' + match.id + ' >' + match.recipeName + '</a></p>' + 
							'<p>Rating: ' + match.rating +  " out of 5" + '</p>'+ 

						'</div></li>');
				});
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown){
		});
	};




					// $('.recipe-list').append('<li style="background-image: url(' + match.imageUrlsBySize[90].replace('s90-c', 's360-c') + ')">' + 
					// 	'<div class="name">' +
					// 		'<p><a target="_blank" href=https://www.yummly.com/recipe/' + match.id + ' >' + match.recipeName + '</a></p>' + 
					// 		'<p>Rating: ' + match.rating +  " out of 5" + '</p>'+ 

					// 	'</div></li>');




});