$('#items').sortable({
    connectWith: '#items',
    placeholder: 'placeholder',
});

$('.section-drag').draggable({
    handle: '.window-bar',
    stack: '.section-drag',
}).resizable({
    handles: "n, e, s, w"
});

$('.item').draggable({
    revert: 'invalid',
    stack: '.section-drag',
    start: function (event, ui) {
        $(ui.helper).addClass('dragging');
    },
    stop: function (event, ui) {
        $(ui.helper).removeClass('dragging');
    }
});
$('#leeDiv').droppable({
    drop: function (event, ui) {
        if (ui.draggable.hasClass('item')) {
            ui.draggable.remove();

            if (ui.draggable.hasClass('eyes')) {
                $('#leeDiv').append('<img alt="Eyes" src="./img/lee/lee-eyes.webp" class="lee-img lee-eyes"/>');
            }
            if (ui.draggable.hasClass('mini')) {
                $('#leeDiv').append('<img alt="Mini Lee" src="./img/lee/lee-mini.webp" class="lee-img lee-mini"/>');
            }
            if (ui.draggable.hasClass('slee')) {
                $('#leeDiv').append('<img alt="Mouth" src="./img/lee/lee-cooper.webp" class="lee-img lee-mouth"/>');
            }
            if (ui.draggable.hasClass('rgb')) {
                $('#leeDiv').addClass('lee-rgb');
            }
            if (ui.draggable.hasClass('windows')) {
                $('#leeDiv img.bg').attr('src', './img/background/windowsbg.webp');
            }
        }
    }
});
