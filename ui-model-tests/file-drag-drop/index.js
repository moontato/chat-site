function dropHandler(event) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();

    if (event.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < event.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (event.dataTransfer.items[i].kind === "file") {
                var file = event.dataTransfer.items[i].getAsFile();
                console.log("... file[" + i + "].name = " + file.name);
            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            console.log(
                "... file[" +
                i +
                "].name = " +
                event.dataTransfer.files[i].name
            );
        }
    }
}

function dragOverHandler(event) {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
}
