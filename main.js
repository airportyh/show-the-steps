const FONT_FAMILY = "Inconsolata";
const ADDITION_TABLE = {

    // "XY": ["R", carry] X + Y = R plus carry
    
    "00": ["0", "0"],
    "01": ["1", "0"],
    "02": ["2", "0"],
    "03": ["3", "0"],
    "04": ["4", "0"],
    "05": ["5", "0"],
    "06": ["6", "0"],
    "07": ["7", "0"],
    "08": ["8", "0"],
    "09": ["9", "0"],
    
    "10": ["1", "0"],
    "11": ["2", "0"],
    "12": ["3", "0"],
    "13": ["4", "0"],
    "14": ["5", "0"],
    "15": ["6", "0"],
    "16": ["7", "0"],
    "17": ["8", "0"],
    "18": ["9", "0"],
    "19": ["0", "1"],
    
    "20": ["2", "0"],
    "21": ["3", "0"],
    "22": ["4", "0"],
    "23": ["5", "0"],
    "24": ["6", "0"],
    "25": ["7", "0"],
    "26": ["8", "0"],
    "27": ["9", "0"],
    "28": ["0", "1"],
    "29": ["1", "1"],
    
    "30": ["3", "0"],
    "31": ["4", "0"],
    "32": ["5", "0"],
    "33": ["6", "0"],
    "34": ["7", "0"],
    "35": ["8", "0"],
    "36": ["9", "0"],
    "37": ["0", "1"],
    "38": ["1", "1"],
    "39": ["2", "1"],
    
    "40": ["4", "0"],
    "41": ["5", "0"],
    "42": ["6", "0"],
    "43": ["7", "0"],
    "44": ["8", "0"],
    "45": ["9", "0"],
    "46": ["0", "1"],
    "47": ["1", "1"],
    "48": ["2", "1"],
    "49": ["3", "1"],
    
    "50": ["5", "0"],
    "51": ["6", "0"],
    "52": ["7", "0"],
    "53": ["8", "0"],
    "54": ["9", "0"],
    "55": ["0", "1"],
    "56": ["1", "1"],
    "57": ["2", "1"],
    "58": ["3", "1"],
    "59": ["4", "1"],
    
    "60": ["6", "0"],
    "61": ["7", "0"],
    "62": ["8", "0"],
    "63": ["9", "0"],
    "64": ["0", "1"],
    "65": ["1", "1"],
    "66": ["2", "1"],
    "67": ["3", "1"],
    "68": ["4", "1"],
    "69": ["5", "1"],
    
    "70": ["7", "0"],
    "71": ["8", "0"],
    "72": ["9", "0"],
    "73": ["0", "1"],
    "74": ["1", "1"],
    "75": ["2", "1"],
    "76": ["3", "1"],
    "77": ["4", "1"],
    "78": ["5", "1"],
    "79": ["6", "1"],
    
    "80": ["8", "0"],
    "81": ["9", "0"],
    "82": ["0", "1"],
    "83": ["1", "1"],
    "84": ["2", "1"],
    "85": ["3", "1"],
    "86": ["4", "1"],
    "87": ["5", "1"],
    "88": ["6", "1"],
    "89": ["7", "1"],
    
    "90": ["9", "0"],
    "91": ["0", "1"],
    "92": ["1", "1"],
    "93": ["2", "1"],
    "94": ["3", "1"],
    "95": ["4", "1"],
    "96": ["5", "1"],
    "97": ["6", "1"],
    "98": ["7", "1"],
    "99": ["8", "1"],
}

const SUBTRACTION_TABLE = {

    // "XY": ["R", carry] X - Y = R plus borrow
    
    "00": ["0", "0"],
    "01": ["9", "1"],
    "02": ["8", "1"],
    "03": ["7", "1"],
    "04": ["6", "1"],
    "05": ["5", "1"],
    "06": ["4", "1"],
    "07": ["3", "1"],
    "08": ["2", "1"],
    "09": ["1", "1"],
    
    "10": ["1", "0"],
    "11": ["0", "0"],
    "12": ["9", "1"],
    "13": ["8", "1"],
    "14": ["7", "1"],
    "15": ["6", "1"],
    "16": ["5", "1"],
    "17": ["4", "1"],
    "18": ["3", "1"],
    "19": ["2", "1"],
    
    "20": ["2", "0"],
    "21": ["1", "0"],
    "22": ["0", "0"],
    "23": ["9", "1"],
    "24": ["8", "1"],
    "25": ["7", "1"],
    "26": ["6", "1"],
    "27": ["5", "1"],
    "28": ["4", "1"],
    "29": ["3", "1"],
    
    "30": ["3", "0"],
    "31": ["2", "0"],
    "32": ["1", "0"],
    "33": ["0", "0"],
    "34": ["9", "1"],
    "35": ["8", "1"],
    "36": ["7", "1"],
    "37": ["6", "1"],
    "38": ["5", "1"],
    "39": ["4", "1"],
    
    "40": ["4", "0"],
    "41": ["3", "0"],
    "42": ["2", "0"],
    "43": ["1", "0"],
    "44": ["0", "0"],
    "45": ["9", "1"],
    "46": ["8", "1"],
    "47": ["7", "1"],
    "48": ["6", "1"],
    "49": ["5", "1"],
    
    "50": ["5", "0"],
    "51": ["4", "0"],
    "52": ["3", "0"],
    "53": ["2", "0"],
    "54": ["1", "0"],
    "55": ["0", "0"],
    "56": ["9", "1"],
    "57": ["8", "1"],
    "58": ["7", "1"],
    "59": ["6", "1"],
    
    "60": ["6", "0"],
    "61": ["5", "0"],
    "62": ["4", "0"],
    "63": ["3", "0"],
    "64": ["2", "0"],
    "65": ["1", "0"],
    "66": ["0", "0"],
    "67": ["9", "1"],
    "68": ["8", "1"],
    "69": ["7", "1"],
    
    "70": ["7", "0"],
    "71": ["6", "0"],
    "72": ["5", "0"],
    "73": ["4", "0"],
    "74": ["3", "0"],
    "75": ["2", "0"],
    "76": ["1", "0"],
    "77": ["0", "0"],
    "78": ["9", "1"],
    "79": ["8", "1"],
    
    "80": ["8", "0"],
    "81": ["7", "0"],
    "82": ["6", "0"],
    "83": ["5", "0"],
    "84": ["4", "0"],
    "85": ["3", "0"],
    "86": ["2", "0"],
    "87": ["1", "0"],
    "88": ["0", "0"],
    "89": ["9", "1"],
    
    "90": ["9", "0"],
    "91": ["8", "0"],
    "92": ["7", "0"],
    "93": ["6", "0"],
    "94": ["5", "0"],
    "95": ["4", "0"],
    "96": ["3", "0"],
    "97": ["2", "0"],
    "98": ["1", "0"],
    "99": ["0", "0"],
}

main().catch(error => console.log(error.stack));

async function main() {
    const [canvas, ctx] = createCanvas();
    let command;
    while (true) {
        displayMenu(canvas, ctx);
        const event = await waitForEvent("keypress");
        command = event.key;
        if (command === "1") {
            await addition(canvas, ctx);    
        } else if (command === "2") {
            await subtraction(canvas, ctx);    
        }
    }
}

function displayMenu(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fontSize = 50;
    const lineHeight = 12;
    const padding = 100;
    ctx.font = `${fontSize}px ${FONT_FAMILY}`;
    ctx.fillText("Show the Steps", padding, padding);
    ctx.fillText("1 - Add two numbers", padding, padding + lineHeight + fontSize);
    ctx.fillText("2 - Subtract two numbers", padding, padding + 2 * (fontSize + lineHeight));
}

async function addition(canvas, ctx) {
    let state = {
        instruction: "Type a number and ENTER",
        x: "",
        y: "",
        inputComplete: false,
        carries: "",
        result: ""
    };
    
    render(state);
    
    await inputNumber(state, "x", render);
    
    state.instruction = "Type another number and ENTER";
    render(state);
    
    await inputNumber(state, "y", render);
    
    state.inputComplete = true;
    state.instruction = "⇽ last step           ⇾ next step";
    
    render(state);
    const steps = addProcedure(state);
    await executeStepsWithRewind(steps, render);
    
    function *addProcedure(state) {
        let digitX = null;
        let digitY = null;
        let _ = null;
        let place = 1;
        let carry = "0";
        let instruction;
        yield state;
        while (place <= state.x.length || place <= state.y.length) {
            digitX = state.x[state.x.length - place] || "0";
            digitY = state.y[state.y.length - place] || "0";
            let resultDigit;
            let carryB;
            let tempAnswer;
            const [resultDigitA, carryA] = ADDITION_TABLE[digitX + digitY];
            tempAnswer = (carryA == "0" ? "" : carryA) + resultDigitA;
            state = {
                ...state,
                instruction: `${digitX} + ${digitY} = ${tempAnswer}`
            };
            yield state;
            
            if (carry !== "0") {
                let carryB;
                [resultDigit, carryB] = ADDITION_TABLE[resultDigitA + carry];
                [carry, _] = ADDITION_TABLE[carryA + carryB];
                const answerFinalStep = (carry == "0" ? "": carry) + resultDigit;
                state = {
                    ...state,
                    instruction: `from ${tempAnswer}, add the carry to get ${answerFinalStep}`
                };
                tempAnswer = answerFinalStep;
                yield state;
            } else {
                resultDigit = resultDigitA;
                carry = carryA;
            }
            if (carry !== "0") {
                state = {
                    ...state,
                    carries: carry + state.carries,
                    instruction: `from ${tempAnswer}, carry ${carry} over`
                };
                yield state;
            }
            state = {
                ...state,
                result: resultDigit + state.result,
                instruction: state.instruction + `, put ${resultDigit} in here`
            };
            yield state;
            place++;
        }
        
        if (carry !== "0") {
            state = {
                ...state,
                result: carry + state.result,
                instruction: `extra carry goes in here`
            };
            yield state;
        }
        
        state = {
            ...state,
            instruction: "That's the final answer!"
        }
        
        yield state;
        
        return state;
    }
    
    function render(state) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `100px ${FONT_FAMILY}`;
        const ratio = ctx.measureText("0").width / 100;
        
        const textSize1 = canvas.height / 6.2;
        const maxTextLength = state.inputComplete ? ("+ " + state.y).length : Math.max(state.x.length, state.y.length);
        const textSize2 = canvas.width / (1 + maxTextLength * ratio);
        const textSize = Math.min(textSize1, textSize2);
        const subscriptTextSize = textSize * 0.2;
        
        const padding = textSize * 0.5;
        const lineSpacing = textSize * 0.2;
        const dividerHeight = textSize * 0.3;
        
        ctx.fillStyle = "black";
        ctx.textBaseline = "top";
        
        ctx.font = `35px ${FONT_FAMILY}`;
        ctx.fillText(
            state.instruction,
            padding,
            padding
        );
        
        ctx.font = `${textSize}px ${FONT_FAMILY}`;
        ctx.fillText(
            state.x, 
            canvas.width - padding - ctx.measureText(state.x).width, 
            padding + textSize
        );
        
        if (state.inputComplete) {
            ctx.fillText(
                "+ " + state.y,
                canvas.width - padding - ctx.measureText("+ " + state.y).width,
                padding + 2 * textSize + lineSpacing
            );
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(
                canvas.width - padding - ctx.measureText("+ " + state.y).width, 
                padding + 3 * textSize + lineSpacing + dividerHeight);
            ctx.lineTo(
                canvas.width - padding, 
                padding + 3 * textSize + lineSpacing + dividerHeight);
            ctx.stroke();
        } else {
            ctx.fillText(
                state.y, 
                canvas.width - padding - ctx.measureText(state.y).width, 
                padding + 2 * textSize + lineSpacing
            );
        }
        const digitWidth = ctx.measureText("0").width;
        const startXOffset = canvas.width - padding - ctx.measureText(state.carries).width;
        ctx.font = `${subscriptTextSize}px ${FONT_FAMILY}`;
        for (let i = 0; i < state.carries.length; i++) {
            const carry = state.carries[i];
            if (carry !== "0") {
                ctx.fillText(
                    carry, 
                    startXOffset + i * digitWidth - textSize * 0.05, 
                    padding + 3 * textSize + lineSpacing * 0.5
                );
            }
        }
        ctx.font = `${textSize}px ${FONT_FAMILY}`;
        if (state.result) {
            ctx.fillText(
                state.result, 
                canvas.width - padding - ctx.measureText(state.result).width, 
                padding + 3 * textSize + 2 * lineSpacing + dividerHeight
            );
        }
    }
}

async function subtraction(canvas, ctx) {
    let state = {
        instruction: "Type a number and ENTER",
        x: "",
        y: "",
        inputComplete: false,
        borrows: "",
        result: "",
        negativeAnswer: false,
        leftovers: ""
    };
    
    render(state);
    
    await inputNumber(state, "x", render);
    
    state.instruction = "Type another number and ENTER";
    render(state);
    
    await inputNumber(state, "y", render);
    
    state.inputComplete = true;
    
    state.instruction = "⇽ last step           ⇾ next step";
    
    render(state);
    const steps = subtractProcedure(state);
    await executeStepsWithRewind(steps, render);
    
    function *subtractProcedure(state) {
        if (isLessThan(state.x, state.y)) {
            // Swap the numbers
            yield state;
            state = {
                ...state,
                x: state.y,
                y: state.x
            };
            yield state;
            state = {
                ...state,
                negativeAnswer: true
            };
        }
        
        let digitX = null;
        let digitY = null;
        let _ = null;
        let place = 1;
        let borrow = "0";
        yield state;
        while (place <= state.x.length || place <= state.y.length) {
            digitX = state.x[state.x.length - place] || "0";
            digitY = state.y[state.y.length - place] || "0";
            const [digitXAfterBorrow, _] = SUBTRACTION_TABLE[digitX + borrow];
            let resultDigit;
            [resultDigit, borrow] = SUBTRACTION_TABLE[digitXAfterBorrow + digitY];
            if (digitXAfterBorrow !== digitX) {
                state = {
                    ...state,
                    leftovers: state.leftovers + digitXAfterBorrow
                };
                yield state;
            } else {
                state = {
                    ...state,
                    leftovers: state.leftovers + " "
                };
            }
            
            if (borrow != "0") {
                state = {
                    ...state,
                    borrows: state.borrows + borrow
                };
                yield state;
            }
            state = {
                ...state,
                result: resultDigit + state.result
            };
            yield state;
            place++;
        }
        
        if (state.result[0] === "0") {
            state = {
                ...state,
                result: state.result.slice(1)
            };
            yield state;
        }
        
        state = {
            ...state,
            instruction: "That's the final answer!"
        };
        yield state;
        
        return state;
    }
    
    function isLessThan(one, other) {
        if (one.length === other.length) {
            for (let i = 0; i < one.length; i++) {
                if (one[i] < other[i]) {
                    return true;
                } else if (one[i] > other[i]) {
                    return false;
                }
            }
            return false;
        } else {
            return one.length < other.length;
        }
    }
    
    function render(state) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `100px ${FONT_FAMILY}`;
        const ratio = ctx.measureText("0").width / 100;
        
        const textSize1 = canvas.height / 7.2;
        const maxTextLength = state.inputComplete ? ("- " + state.y).length : Math.max(state.x.length, state.y.length);
        const textSize2 = canvas.width / (1 + maxTextLength * ratio);
        const textSize = Math.min(textSize1, textSize2);
        const subscriptTextSize = textSize * 0.2;
        
        const padding = textSize * 0.5;
        const lineSpacing = textSize * 0.2;
        const dividerHeight = textSize * 0.3;
        
        ctx.fillStyle = "black";
        ctx.textBaseline = "top";
        
        ctx.font = `40px ${FONT_FAMILY}`;
        ctx.fillText(
            state.instruction,
            padding,
            padding
        );
        
        ctx.font = `${textSize}px ${FONT_FAMILY}`;
        ctx.fillText(
            state.x, 
            canvas.width - padding - ctx.measureText(state.x).width, 
            padding + 2 * textSize
        );
        
        if (state.inputComplete) {
            ctx.fillText(
                "- " + state.y,
                canvas.width - padding - ctx.measureText("- " + state.y).width,
                padding + 3 * textSize + lineSpacing
            );
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(
                canvas.width - padding - ctx.measureText("- " + state.y).width, 
                padding + 4 * textSize + lineSpacing + dividerHeight);
            ctx.lineTo(
                canvas.width - padding, 
                padding + 4 * textSize + lineSpacing + dividerHeight);
            ctx.stroke();
        } else {
            ctx.fillText(
                state.y, 
                canvas.width - padding - ctx.measureText(state.y).width, 
                padding + 3 * textSize + lineSpacing
            );
        }
        const digitWidth = ctx.measureText("0").width;
        
        // render borrows
        ctx.font = `${subscriptTextSize}px ${FONT_FAMILY}`;
        for (let i = 0; i < state.borrows.length; i++) {
            const borrow = state.borrows[i];
            if (borrow !== " " && borrow !== "0") {
                ctx.fillText(
                    borrow,
                    canvas.width - padding - (i + 1) * digitWidth - subscriptTextSize * 0.3,
                    padding + 2 * textSize + lineSpacing * 0.5
                );
            }
        }
        
        // render leftovers
        ctx.font = `${textSize}px ${FONT_FAMILY}`;
        for (let i = 0; i < state.leftovers.length; i++) {
            const leftover = state.leftovers[i];
            if (leftover !== " ") {
                ctx.beginPath();
                ctx.moveTo(canvas.width - padding - i * digitWidth, padding + 3 * textSize);
                ctx.lineTo(canvas.width - padding - (i + 1) * digitWidth, padding + 2 * textSize);
                ctx.stroke();
                ctx.fillText(
                    leftover,
                    canvas.width - padding - (i + 1) * digitWidth,
                    padding + textSize
                );
            }
        }
        
        ctx.font = `${textSize}px ${FONT_FAMILY}`;
        
        if (state.negativeAnswer) {
            ctx.fillText(
                "-", 
                canvas.width - padding - ctx.measureText("- " + state.y).width, 
                padding + 4 * textSize + 2 * lineSpacing + dividerHeight
            );
        }
        
        if (state.result) {
            ctx.fillText(
                state.result, 
                canvas.width - padding - ctx.measureText(state.result).width, 
                padding + 4 * textSize + 2 * lineSpacing + dividerHeight
            );
        }
    }
}

function createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.border = "2px solid black";
    canvas.style.margin = "auto";
    canvas.style.display = "block";
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    return [canvas, ctx];
}

async function inputNumber(state, prop, render) {
    while (true) {
        const press = await waitForEvent("keypress");
        if (press.key.match(/^[0-9]$/)) {
            state[prop] += press.key;
        }
        render(state);
        if (press.key === "Enter" && state[prop].length > 0) {
            break;
        }
    }
}

async function executeStepsWithRewind(steps, render) {
    const history = [];
    let historyCursor = -1;
    const result = steps.next();
    if (result.done) {
        return;
    }
    let state = result.value;
    historyCursor = history.push(state) - 1;
    render(state);
    while (true) {
        const press = await waitForEvent("keyup");
        if (press.key === "ArrowRight") {
            if (historyCursor < history.length - 1) {
                historyCursor++;
                state = history[historyCursor];
                render(state);
            } else {
                // we are at the end of the history queue, perform the next step
                const result = steps.next();
                state = result.value;
                historyCursor = history.push(state) - 1;
                render(state);
                if (result.done) {
                    break;
                }
            }
        } else if (press.key === "ArrowLeft") {
            if (historyCursor <= 0) {
                continue;
            }
            historyCursor--;
            state = history[historyCursor];
            render(state);
        }
    }
}

function waitForEvent(eventName, element = window) {
    return new Promise(accept => {
        const handler = (event) => {
            element.removeEventListener(eventName, handler);
            accept(event);
        }
        element.addEventListener(eventName, handler);
    });
}