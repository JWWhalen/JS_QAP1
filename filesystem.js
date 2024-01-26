const fs = require('fs');
const readline = require('readline');

// create a readline interface (i wanted to experiment with having the user type delete in the terminal)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fileOperations() {
    // create a file (i tried to use try/catch and couldn't get it to work)
    fs.writeFile('example.txt', 'Hello good sir!', (writeErr) => {
        if (writeErr) {
            console.error('Error writing file:', writeErr);
            return;
        }
        console.log('File is created successfully.');

        // reads the file
        fs.readFile('example.txt', 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr);
                return;
            }
            console.log('File content:', data);

            // Appends to the file
            fs.appendFile('example.txt', ' Hello again!', (appendErr) => {
                if (appendErr) {
                    console.error('Error appending file:', appendErr);
                    return;
                }
                console.log('File is appended successfully.');

                // Asks user to type 'delete' to delete the file
                rl.question('Type "delete" to remove the file: ', (answer) => {
                    if (answer.trim().toLowerCase() === 'delete') { // making sure it is lowercase regardless of case used
                        fs.unlink('example.txt', (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting file:', unlinkErr); // Deletion gets cancels if there is an error when typing delete
                                rl.close();
                                return;
                            }
                            console.log('File is deleted successfully.');
                            rl.close();
                        });
                    } else {
                        console.log('File deletion cancelled.');
                        rl.close();
                    }
                });
            });
        });
    });
}

fileOperations();
