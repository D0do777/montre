// TYPES (ATTENTION AUX MAJUSCULES)
const types = ["DateJust", "DayDate", "Nautilus", "RoyalOak"];
let currentType = 0;

// BRACELETS (NOMS EXACTS)
const bracelets = {
    DateJust: ["Gold", "Argent"],
    DayDate: ["Gold", "Argent"],
    Nautilus: ["Argent", "Rose"],
    RoyalOak: ["argent", "gold", "noire", "rose"]
};
let currentBracelet = 0;

// CADRAN
const dialTypes = ["Baton", "Arabic"];
let currentDialType = 0;

const dialColors = {
    Baton: ["Bleu", "Blanc"],
    Arabic: ["Bleu", "Blanc"]
};
let currentDialColor = 0;

// AIGUILLES (TES NOMS)
const hands = ["1 argent", "2 rose"];
let currentHands = 0;


// UPDATE
function updateWatch() {

    const type = types[currentType];
    const bracelet = bracelets[type][currentBracelet];
    const dialType = dialTypes[currentDialType];
    const dialColor = dialColors[dialType][currentDialColor];
    const hand = hands[currentHands];

    const typePath = `assets/type/${type}.png`;
    const braceletPath = `assets/bracelets/${type}/${bracelet}.png`;
    const dialPath = `assets/cadran/${dialType}/${dialColor}.png`;
    const handsPath = `assets/aiguilles/${hand}.png`;

    console.log("TYPE:", typePath);
    console.log("BRACELET:", braceletPath);
    console.log("CADRAN:", dialPath);
    console.log("AIGUILLES:", handsPath);

    document.getElementById("typeImg").src = typePath;
    document.getElementById("braceletImg").src = braceletPath;
    document.getElementById("dialImg").src = dialPath;
    document.getElementById("handsImg").src = handsPath;

    document.getElementById("typeName").innerText = type;
    document.getElementById("braceletName").innerText = bracelet;
    document.getElementById("dialTypeName").innerText = dialType;
    document.getElementById("dialColorName").innerText = dialColor;
    document.getElementById("handsName").innerText = hand;
}


// NAVIGATION
function nextType() {
    currentType = (currentType + 1) % types.length;
    currentBracelet = 0;
    updateWatch();
}

function prevType() {
    currentType = (currentType - 1 + types.length) % types.length;
    currentBracelet = 0;
    updateWatch();
}

function nextBracelet() {
    const type = types[currentType];
    currentBracelet = (currentBracelet + 1) % bracelets[type].length;
    updateWatch();
}

function prevBracelet() {
    const type = types[currentType];
    currentBracelet = (currentBracelet - 1 + bracelets[type].length) % bracelets[type].length;
    updateWatch();
}

function nextDialType() {
    currentDialType = (currentDialType + 1) % dialTypes.length;
    currentDialColor = 0;
    updateWatch();
}

function prevDialType() {
    currentDialType = (currentDialType - 1 + dialTypes.length) % dialTypes.length;
    currentDialColor = 0;
    updateWatch();
}

function nextDialColor() {
    const type = dialTypes[currentDialType];
    currentDialColor = (currentDialColor + 1) % dialColors[type].length;
    updateWatch();
}

function prevDialColor() {
    const type = dialTypes[currentDialType];
    currentDialColor = (currentDialColor - 1 + dialColors[type].length) % dialColors[type].length;
    updateWatch();
}

function nextHands() {
    currentHands = (currentHands + 1) % hands.length;
    updateWatch();
}

function prevHands() {
    currentHands = (currentHands - 1 + hands.length) % hands.length;
    updateWatch();
}

updateWatch();
