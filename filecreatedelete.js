const fs = require("fs");

if (fs.existsSync("./filewriteTest.html")) {

    fs.unlink("./filewriteTest.html", (err) => {

        if (err) {
            console.log("Have error in file delete");
            console.log(err);
            return;
        }

        console.log("Successfully deleted file");

    });

} else {

    const txt = "Hello";

    fs.writeFile("./filewriteTest.html", txt, (err) => {

        if (err) {
            console.log("Have error in file created");
            console.log(err);
            return;
        }

        console.log("Successfully created file");

    });

}