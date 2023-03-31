$(function () {
    $('#keyboard-cont button').click(function () {
        var $write = document.getElementById('write').value;
        var $this = $(this),
            character = $this.html().toUpperCase();
        console.log($write, character);
        // Delete
        if ($this.hasClass('delete')) {
            document.getElementById('write').value = $write.substr(
                0,
                $write.length - 1
            );
            return false;
        }
        if ($this.hasClass('enter')) character = '\n';

        // Add the character
        document.getElementById('write').value = $write + character;
    });
});
