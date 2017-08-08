$('.int').css('display', 'none');

function showIntro(pauseTime){
        $('#icon').fadeIn(500);
        setTimeout(function(){
		    $('#welcome').fadeIn(700)}, pauseTime*5);
		setTimeout(function(){ 
			$('#to').fadeIn(700)}, pauseTime*6);
		setTimeout(function(){ 
            $('#discuss').fadeIn(700)}, pauseTime*7);
        //setTimeout(function(){ 
            //$('.int').css('display', 'none')}, pauseTime*7);
}

showIntro(200);

function fadeloop(el,timeout,timein,loop){
    var $el = $(el),intId,fn = function(){
         $el.fadeOut(timeout).fadeIn(timein);
    };
    fn();
    if(loop){
        intId = setInterval(fn,timeout+timein+100);
        return intId;
    }
    return false;
}

//fadeloop('.int', 500, 500, true);