function reflexAgent(location, state) {
    if (state === "DIRTY") {
        return 'CLEAN';
    } else if (location === 'A') {
        return 'RIGHT';
    } else if (location === 'B') {
        return 'LEFT';
    }
}

function test(states) {
    let stateCounter = 0;
    let log = "";

    function simulate() {
        if (stateCounter < 8) {
            let location = states[0];
            let state = (location === 'A') ? states[1] : states[2];
            let action = reflexAgent(location, state);
            log += "Location: " + location + " | Action: " + action + "<br>";

            if (action === "CLEAN") {
                if (location === 'A') {
                    states[1] = "CLEAN";
                } else if (location === 'B') {
                    states[2] = "CLEAN";
                }
            } else if (action === "RIGHT") {
                states[0] = 'B';
            } else if (action === "LEFT") {
                states[0] = 'A';
            }

            stateCounter++;
            document.getElementById('log').innerHTML = log;
            setTimeout(simulate, 3000); // Esperar 3 segundos antes de continuar
        }
    }

    simulate();
}

test(['A', 'DIRTY', 'DIRTY']);
