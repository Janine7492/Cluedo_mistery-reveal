// ============================
//         Variablen
// ============================
const button = document.getElementById("button");
const outputText = document.getElementById("outputMisteryInWords");
const susImg = document.getElementById("suspectImg");
const susNick = document.getElementById("suspectNickname");
const susFullnameAndAge = document.getElementById("suspectFullnameAndAge");
const susOccupation = document.getElementById("suspectOccupation");
const susDescr = document.getElementById("suspectDescription");
const chosenWeapon = document.getElementById("chosenWeapon");
const chosenWeaponWeight = document.getElementById("chosenWeaponWeight");
const chosenRoom = document.getElementById("chosenRoom");

// 6 Verdächtige
const suspectsArray = [];

// 9 Waffen
const weaponsArray = [];

// 15 Räume
const roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

console.log(roomsArray);

// ============================
//         Constructors
// ============================

class Suspect {
    constructor(nickname, firstName, lastName, occupation, age, description, image, color) {
        this.nickname = nickname;
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.description = description;
        this.image = image;
        this.color = color;
    }
}

const mrGreen = new Suspect("mrGreen", "Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green");
const drOrchid = new Suspect("drOrchid", "Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white");
const profPlum = new Suspect("profPlum", "Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple");
const missScarlet = new Suspect("missScarlet", "Kasandra", "Scarlet", "Actress", 31, "She is an A-list movie star with a dark past", "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg", "red");
const mrsPeacock = new Suspect("mrsPeacock", "Eleanor", "Peacock", "Socialité ", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg", "blue");
const mrMustard = new Suspect("mrMustard", "Jack", "Mustard", "Retired Football Player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow");

suspectsArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
console.log(suspectsArray);


class Weapon {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

const rope = new Weapon("rope", 10);
const knife = new Weapon("knife", 8);
const candlestick = new Weapon("candlestick", 2);
const dumbbell = new Weapon("dumbbell", 30);
const poison = new Weapon("poison", 2);
const axe = new Weapon("axe", 15);
const bat = new Weapon("bat", 13);
const trophy = new Weapon("trophy", 25);
const pistol = new Weapon("pistol", 20);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
console.log(weaponsArray);

// ============================
//         Funktionen
// ============================

// Select Random Number for each type
// =============================
function selectRandomSuspect() {
    let randomNumberS = Math.floor(Math.random() * 6);
    console.log(randomNumberS);

    let chosenSuspectObject = suspectsArray[randomNumberS];

    console.log(chosenSuspectObject);
    return randomNumberS;
}

function selectRandomWeapon() {
    let randomNumberW = Math.floor(Math.random() * 9);
    console.log(randomNumberW);

    let chosenWeaponObject = weaponsArray[randomNumberW];

    console.log(chosenWeaponObject);
    return randomNumberW;
}

function selectRandomRoom() {
    let randomNumberR = Math.floor(Math.random() * 15);
    console.log(randomNumberR);

    let chosenRoomName = roomsArray[randomNumberR];

    console.log(chosenRoomName);
    return randomNumberR;
}

//  Output to HTML for Objects
// ============================
function outPutSuspectCard(img, nickname, fullname, age, occupation, description) {
    susImg.src = img;
    susImg.alt = "picture of suspect " + nickname;
    susNick.innerHTML = nickname;
    susFullnameAndAge.innerHTML = fullname + ", " + age;
    susOccupation.innerHTML = occupation;
    susDescr.innerHTML = description;
}

function outputWeaponCard(name, weight) {
    chosenWeapon.innerHTML = name;
    chosenWeaponWeight.innerHTML = "(" + weight + " kg)";
}


//     Main Function
// ================================

function pickMistery() {
    let randomNumberS = selectRandomSuspect();
    let randomNumberW = selectRandomWeapon();
    let randomNumberR = selectRandomRoom();

    let img = suspectsArray[randomNumberS].image;
    let nickname = suspectsArray[randomNumberS].nickname;
    let fullname = suspectsArray[randomNumberS].firstName + " " + suspectsArray[randomNumberS].lastName;
    let age = suspectsArray[randomNumberS].age;
    let occupation = suspectsArray[randomNumberS].occupation;
    let description = suspectsArray[randomNumberS].description;

    outPutSuspectCard(img, nickname, fullname, age, occupation, description);

    let name = weaponsArray[randomNumberW].name;
    let weight = weaponsArray[randomNumberW].weight;

    outputWeaponCard(name, weight);

    chosenRoom.innerHTML = roomsArray[randomNumberR];

    outputText.innerHTML = `<span id="color"> ${fullname} </span> killed Mr. Boddy using the ${name} in the ${roomsArray[randomNumberR]}!`

    document.getElementById("color").style.color = suspectsArray[randomNumberS].color;

    document.getElementById("suspectNickname").style.backgroundColor = suspectsArray[randomNumberS].color;
}



