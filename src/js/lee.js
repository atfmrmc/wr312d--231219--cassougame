const leeDiv = $('#leeDiv');
let lee = $('#lee');

$('#items').sortable({
    connectWith: '#items',
    placeholder: 'placeholder',
});

$('.item').draggable({
    revert: 'invalid',
    start: function (event, ui) {
        $(ui.helper).addClass('dragging');
    },
    stop: function (event, ui) {
        $(ui.helper).removeClass('dragging');
    }
});
$(leeDiv).droppable({
        drop: function (event, ui) {
            if (ui.draggable.hasClass('item')) {
                ui.draggable.remove();

                // if items has specific class, do something specific
                if (ui.draggable.hasClass('eyes')) {
                    lee.attr('src', 'img/lee/lee-eyes.png');

                }

            }
        }
    }
);