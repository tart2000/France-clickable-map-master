$( document ).ready(function() {
	$('#existe').hide(); 
	$('#afaire').hide();

	for (var i = 0; i < blagues.length; i++) { 
		var dpt = blagues[i].id; 
		$('path[name='+dpt+']').attr("class", "dpt done");
	};
	counting();
});


$('.dpt').click(function(e) {
	e.preventDefault();
	clearAll();
	dptid = $(this).attr('name');
	$('#nomDpt').text(dptid);
	$('#theImg').remove();
	pic = 'images/travolta.gif';
	existe = false;
	// iterate over each element in the array
	for (var i = 0; i < blagues.length; i++) { 
	  // look for the entry with a matching `code` value
	  if (blagues[i].id == dptid) {
	     // we found it
	    // obj[i].name is the matched result
	    nom = blagues[i].nom;
	    pic = blagues[i].pic;
	    credits = blagues[i].credits;

	    $('#picDpt').prepend('<img id="theImg" class="img-fluid" src='+ pic +' />')
	    $('#creditsDpt').text('@'+credits);
	    $('#creditsDpt').attr('href','https://twitter.com/'+credits);
	    $('#existe').show();
	    existe = true;

	    // $('#creditsDpt').text(credits);
	  } 
	  
	} // end for 

	if (existe == false) {
		$('#afaire').show();
	}
	
	
})

function counting() {
	dpts = $('.dpt').length; 
	done = blagues.length;
	$('#progress').attr("aria-valuenow" , done);
	$("#progress").css("width", done/dpts*100+'%');
}

function clearAll() {
	$('#lancement').hide();
	$('#existe').hide();
	$('#afaire').hide();

}

