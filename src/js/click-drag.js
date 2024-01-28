$(function () {
    const grid = $('#colors--grid');
    let coloredSquares = [];

    $.each(new Array(100), function (i) {
        const square = $('<div></div>');
        square.addClass('colored--square');
        square.css('background-color', 'hsl(' + (i * 360 / 100) + ', 100%, 50%)');
        square.html(i);
        coloredSquares.push(square);
        grid.append(square);
    });

    
});