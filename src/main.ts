import { createInterface, Interface } from "readline";
import { ls } from "shelljs";

const readline: Interface = createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(): void {
    readline.question('> ', input => {
        let done = false;

        switch (input) {
            case "exit":
                readline.close();
                done = true;
                break;

            case "ls":
                for (const entry of ls()) {
                    console.info(entry);
                }
                break;

            default:
                console.info(`>> ${input}`);
                break;
        }

        if (!done) {
            prompt();
        }
    });
}

prompt();