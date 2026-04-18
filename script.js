
// TYPES
const types = ["Datejust", "DayDate", "nautilus", "royalOak"];
let currentType = 0;

// BRACELETS
const bracelets = {
    Datejust: ["argent", "gold"],
    DayDate: ["argent", "gold"],
    nautilus: ["argent", "noire", "rose"],
    royalOak: ["argent", "gold", "noire", "rose"]
};
let currentBracelet = 0;

// CADRAN
const dialTypes = ["arabic", "baton"];
let currentDialType = 0;

const dialColors = {
    arabic: ["blanc", "bleu"],
    baton: ["blanc", "bleu"]
};
let currentDialColor = 0;

// AIGUILLES
const hands = ["1_argent", "2_rose"];
let currentHands = 0;


// 🔥 NOUVEAU : contrôle affichage
let showType = true;
let showBracelet = true;


// UPDATE
function updateWatch() {

    const type = types[currentType];
    const bracelet = bracelets[type][currentBracelet];
    const dialType = dialTypes[currentDialType];
    const dialColor = dialColors[dialType][currentDialColor];
    const hand = hands[currentHands];

    const typePath = `assets/types/${type}.png`;
    const braceletPath = `assets/bracelets/${type}/${bracelet}.png`;
    const dialPath = `assets/cadransCouleur/${dialType}/${dialColor}.png`;
    const handsPath = `assets/aiguilles/${hand}.png`;

    const typeImg = document.getElementById("typeImg");
    const braceletImg = document.getElementById("braceletImg");

    // TYPE
    if (showType) {
        typeImg.src = typePath;
        typeImg.style.display = "block";
    } else {
        typeImg.style.display = "none";
    }

    // BRACELET
    if (showBracelet) {
        braceletImg.src = braceletPath;
        braceletImg.style.display = "block";
    } else {
        braceletImg.style.display = "none";
    }

    // AUTRES
    document.getElementById("dialImg").src = dialPath;
    document.getElementById("handsImg").src = handsPath;

    // LABELS
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

    showType = true;
    showBracelet = false; // 🔥 on cache bracelet

    updateWatch();
}

function prevType() {
    currentType = (currentType - 1 + types.length) % types.length;
    currentBracelet = 0;

    showType = true;
    showBracelet = false;

    updateWatch();
}

function nextBracelet() {
    const type = types[currentType];
    currentBracelet = (currentBracelet + 1) % bracelets[type].length;

    showType = false; // 🔥 on cache type
    showBracelet = true;

    updateWatch();
}

function prevBracelet() {
    const type = types[currentType];
    currentBracelet = (currentBracelet - 1 + bracelets[type].length) % bracelets[type].length;

    showType = false;
    showBracelet = true;

    updateWatch();
}


// reste inchangé
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
