for (var i = 0; i < blagues.length; i++) { 
	var dpt = blagues[i].id; 
	$('path[name='+dpt+']').attr("class", "dpt done");;
}


$('.dpt').click(function(e) {
	e.preventDefault();
	dptid = $(this).attr('name');
	$('#nomDpt').text(dptid);
	$('#theImg').remove();
	pic = 'images/travolta.gif';
	// iterate over each element in the array
	for (var i = 0; i < blagues.length; i++) { 
	  // look for the entry with a matching `code` value
	  if (blagues[i].id == dptid) {
	     // we found it
	    // obj[i].name is the matched result
	    nom = blagues[i].nom;
	    pic = blagues[i].pic;
	    credits = blagues[i].credits;

	    // $('#creditsDpt').text(credits);
	  } 
	  
	}
	$('#picDpt').prepend('<img id="theImg" class="img-fluid" src='+ pic +' />')

	
})