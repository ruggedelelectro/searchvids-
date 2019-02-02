// searchbar handler

$function()
	var searchfField = $('$query');
	var icon = $('$search-btn');

	// Focus Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		}, 400);
		$(icon).animate({
			right: '10px'
		},400);
	});
    //blur event handler
    $(searchField).on('blur'. function(){
		if(searchField.val() == ''){
			$(searchField).animate({
				width:'45%'
			}, 400, function(){});
			$(icon).animate({
				right:'360px'
			},400,function(){});
		 }

	});

	$('$search-form').submit(function(e){
		e.preventDefault();
	});
})

function search(){
	//Clear results 
	$('$results').html('');
	$('$buttons').html('');

	//get form input 
	q = $('$query').val();

	//Run GET request on API
	$.get(
	     "https://www.googleapis.com/youtube/v3/search",{
	     	part: 'snippet, id'
	     	q: q, 
	     	type:'video',
	     	key: AIzaSyCKv21RiI_2jiQxW3ar3FIfw9slLsqs8lk},
	     	function(data){
	     		var nextPageToken = data.nextPageToken;
	     		var prevPageToken = data.prevPageToken;

	     		console.log(data);

	     		$.each(data.items, function(i, item){
	     			var output = getOutput(item);

	     			//Display Results
	     			$('$results').append(output);
	     		});
	     	}
	    );
	}

	// Build Output 
	function getOutput(item){
		var videoId = item.id.videoId;
		var title = item.snippet.title;
		var description = item.snippet.description;
		var thumb = item.snippet.thumbnails.high.url;
		var channelTitle = item.snippet.channelTitle;
		var videoData = item.snippet.publishedAt;

		// Build output String 
		var output = '<li>' +
		'<div class="list-left">' +
		'<img src="'+thumb+'">' +
		'</div>' +
		'<div class="list-right">' +
		'<h3>'+title+'</h3>'
		'<small>By <span class="cTitle">+channelTitle+'</span> on '+videoDate+'</small>' +
		'<p>'+description+</p>' +
		'</div>' +
		'</li>' +
		'<div class="clearfix"></div>'+
		'';

		return output;






		);

