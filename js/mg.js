var fixed = false;
$(document).ready(function() {
	$('card.new button').click(function() {
        $('card.new').toggleClass('minimized').children('input').focus();
	})
    $('button.unfold:not(.active)').click(function() {
        $(this).toggleClass('active').parent().toggleClass('folded');
    })
    
    $( "main" ).scroll(function() {
        offset = $('block.table list').offset();
        if ( offset.top <= 48 ) {
            if ( fixed == false ) {
                console.log('addClass');
                $('.table list header').addClass('fixed');
                fixed = true;
            };
        } else {
            if ( fixed == true ) {
                console.log('removeClass');
                $('.table list header').removeClass('fixed');
                fixed = false;
            };
        };
    })
})