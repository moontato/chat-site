var options = {
    direction: "top",
}

$(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton(options);
    
    $(".fab-option-btn:nth-child(1)").click(() => {
        // $(this).children
    });

    $("#fab-button").click(() => {
		$("#file-insert").fadeOut(300);
		$("#edit-message").delay(300).fadeIn(300);
	});

    $("#fab-option-btn1").click(() => {
        $("#edit-message").fadeOut(300);
        $("#file-insert").delay(300).fadeIn(300);
    });
});
