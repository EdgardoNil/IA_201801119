import time

def reflex_agent(location, state):
    if state == "DIRTY":
        return 'CLEAN'
    elif location == 'A':
        return 'RIGHT'
    elif location == 'B':
        return 'LEFT'

def test(states):
    # Añadir un contador para los estados
    state_counter = 0
    while state_counter < 8:  # Mientras no se hayan visitado los 8 estados
        location = states[0]
        state = (states[2], states[1])[states[0] == 'A']
        action = reflex_agent(location, state)
        print("Location: " + location + " | Action: " + action)
        if action == "CLEAN":
            if location == 'A':
                states[1] = "CLEAN"
            elif location == 'B':
                states[2] = "CLEAN"
        elif action == "RIGHT":
            states[0] = 'B'
        elif action == "LEFT":
            states[0] = 'A'
        # Incrementar el contador de estados
        state_counter += 1
        time.sleep(3)

test(['A', 'DIRTY', 'DIRTY'])
