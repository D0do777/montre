// TYPES
const types = ["DateJuste", "DayDate", "nautilus", "royalOak"];
let currentType = 0;

// BRACELETS (dépendent du type)
const bracelets = {
    DateJuste: ["gold", "silver"],
    DayDate: ["argent", "gold"],
    nautilus: ["ArgentGold", "Argent", "ArgentRose", "Noir", "Rose"],
    royalOak: ["argent", "gold", "noire", "rose"]
};
let currentBracelet = 0;

// CADRAN TYPE
const dialTypes = ["baton", "arabic"];
let currentDialType = 0;

// COULEUR CADRAN
const dialColors = {
    baton: ["blanc", "bleu"],
    arabic: ["blanc", "vert"]
};
let currentDialColor = 0;

// AIGUILLES
const hands = ["argent", "rose"];
let currentHands = 0;


// --- UPDATE IMAGE ---
function updateWatch() {
    const type = types[currentType];
    const bracelet = bracelets[type][currentBracelet];
    const dialType = dialTypes[currentDialType];
    const dialColor = dialColors[dialType][currentDialColor];
    const hand = hands[currentHands];

    // chemins
    document.getElementById("braceletImg").src =
        `assets/bracelets/${type}/${bracelet}.png`;

    document.getElementById("dialImg").src =
        `assets/cadranCouleur/${dialType}/${dialColor}.png`;

    document.getElementById("handsImg").src =
        `assets/aiguilles/${hand}.png`;

    // labels
    document.getElementById("typeName").innerText = type;
    document.getElementById("braceletName").innerText = bracelet;
    document.getElementById("dialTypeName").innerText = dialType;
    document.getElementById("dialColorName").innerText = dialColor;
    document.getElementById("handsName").innerText = hand;
}


// --- NAVIGATION ---

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


// INIT
updateWatch();
