// Let's assign some variables
let health = 100;
let xp = 0;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterName;
let monsterHealth;
let monsterXp;
let monsterPower;
let monsterGold;
let inventory = ["rocks"];
const text = document.querySelector("#text");
const screamText = document.querySelector("#screamText");
const xpText = document.querySelector("xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const monsterXpText = document.querySelector("#monsterXpText");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


// Main location array
const locations = [
    {
        name: "start",
        "button text": ["Go to townsquare", "Go to cave", "Go home"],
        "button functions": [goTown, goCave, goHome],
        text: "You stand at a fork in the road."
    },
    {
        name: "town square",
        "button text": ["Go to tavern", "Go to shop", "Go back"],
        "button functions": [goTavern, goShop, goBack],
        text: "The town square is bustling with people! You see a shopkeeper, and a group of friends headed into the tavern."
    }, {
        name: "cave",
        "button text": ["Fight monster", "Inspect Cave", "Go back!"],
        "button functions": [fightMonster, inspectCave, goBack],
        text: "You walk into the dark cave. You see red eyes all around you...."
    }, {
        name: "home",
        "button text": ["Go upstairs", "Watch TV", "Leave house"],
        "button functions": [goUpstairs, watchTV, goBack],
        text: "You open the door to your humble abode."
    },
    {
        name: "upstairs",
        "button text": ["Go to room", "Check on roommate", "Go downstairs"],
        "button functions": [goRoom, goRoommate, goHome],
        text: "Your bedroom is to the right, and your roommate Chad's room is to the left."
    },
    {
        name: "room",
        "button text": ["Go to bed", "Open drawer", "Leave room"],
        "button functions": [sleep, openDrawer, goUpstairs],
        text: "An unmade bed and janky dresser drawer: this is where the magic happens."
    },
    {
        name: "chads room",
        "button text": ["Inspect Chad", "Talk to Chad", "Leave room"],
        "button functions": [inspectRoommate, talkRoommate, goUpstairs],
        text: "Your roommate Chad is mumbling to himself: \"they're everywhere....get them off...help...help...\"",
    },
    {
        name: "tavern",
        "button text": ["Talk to barkeep", "Rent a room", "Leave tavern"],
        "button functions": [talkBarKeep, rentRoom, goTown],
        text: "Your eyes adjust to the dimly lit tavern. The fireplace is roaring in the center of the room, with many travelers gathering around trying to warm their tootsies."
    }, {
        name: "shop",
        "button text": ["Buy health", "Buy weapon", "Leave"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "The shopkeeper greets you: \"Welcome traveler! Please look at all this cool stuff I found.\""
    }, {
        name: "tavern room",
        "button text": ["Sleep in bed", "Sit and stare at the wall", "Leave room"],
        "button functions": [sleepTavernBed, sitStare, goTavern],
        text: "You look at a miserable looking room, the rats are ready to snuggle up with you for the night."
    }, {
        name: "monster fight",
        "button text": ["Fight monster", "Scream at monster", "Run away like a baby"],
        "button functions": [fight, screamMonster, run],
        text: "You scream \"LETS TUSSLE\" out into the dark cave. You hear growls as a response..."
    },
    {
        name: "win",
        "button text": ["Leave cave", "Leave cave", "Leave cave"],
        "button functions": [goBack, goBack, goBack],
        text: "random"
    },
    {
        name: "you lose",
        "button text": ["START OVER", "START OVER", "START OVER"],
        "button functions": [restart, restart, restart],
        text: "YOU DIED."
    }
]

// Weapons array
const weapons = [
    {
        name: "rocks",
        "power": 1,
        "cost": 30
    },
    {
        name: "sharp stick",
        "power": 5,
        "cost": 50
    },
    {
        name: "dagger",
        "power": 10,
        "cost": 100
    },
    {
        name: "short sword",
        "power": 15,
        "cost": 150
    },
    {
        name: "long sword",
        "power": 25,
        "cost": 200
    }
]

// Monster array
const monsters = [
    {
        name: "Cave bear",
        "power": 25,
        "health": 15,
        "xp": 30,
        "gold": 5,
    },
    {
        name: "Rock with googly eyes",
        "power": 1,
        "health": 50,
        "xp": 200,
        "gold": 100
    },
    {
        name: "Highschool bully",
        "power": 60,
        "health": 10,
        "xp": 500,
        "gold": 25
    }
]

// Make sure the button onclick function is set
button1.onclick = goTown;
button2.onclick = goCave;
button3.onclick = goHome;


// Update function
function update(locations) {
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations["text"];
}

// Ok here are my  ** Go ** functions
function goTown() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
    document.getElementById("screamText").style.display = "none";
}

function goHome() {
    update(locations[3]);
}

function goBack() {
    update(locations[0]);
}
function goUpstairs() {
    update(locations[4]);
}

function goRoom() {
    update(locations[5]);
}

function goRoommate() {
    update(locations[6]);
}

function goTavern() {
    update(locations[7]);
}

function goShop() {
    update(locations[8]);
}

function youLose() {
    if (health <= 0) {
        update(locations[12]);
        health.innerText = 0;
        document.getElementById("screamText").style.display = "none";
    }
}

// Monster fighting values
function caveBear() {
    fighting = 0;
    fightMonster();
}
function rockGooglyEyes() {
    fighting = 1;
    fightMonster();
}
function highSchoolBully() {
    fighting = 2;
    fightMonster();
}


// Fighting actions
function randomMonster() {
    fighting = Math.floor(Math.random() * 2);
    console.log("Fighting monster number is: " + fighting);
}

function fightMonster() {
    update(locations[10]);
    randomMonster();
    monsterName = monsters[fighting].name;
    monsterPower = monsters[fighting].power;
    monsterHealth = monsters[fighting].health;
    monsterXp = monsters[fighting].xp;
    monsterGold = monsters[fighting].gold;
    monsterNameText.innerText = monsterName;
    monsterHealthText.innerText = monsterHealth;
    monsterXpText.innerText = monsterXp;
    document.getElementById("monsterStats").style.display = "block";
}

function hit() {
    let damage = Math.floor(Math.random(weapons[currentWeapon].power) * 10);
    if (damage === 0) {
        damage++;
    } else {
        damage === damage;
    }
    if (damage === (weapons[currentWeapon].power) + 10) {
        text.innerText = "Critical hit! You damaged the monster for " + damage + "!";
    } else {
        damage === weapons[currentWeapon].power;
        text.innerText = "You hit the monster for " + damage + "!";
    }
    monsterHealth -= damage;
    if (monsterHealth <= 0) {
        win();
    } else {
        monsterHealthText.innerText = monsterHealth;
    }

}

function fight() {
    document.getElementById("screamText").style.display = "none";
    if (health <= 0) {
        youLose();
    }
    else if (monsterHealth > 0) {
        hit();
        damage();
    } else {
        win();
    }
}

function screamMonster() {
    let screamRandom = Math.floor(Math.random() * 100);
    console.log("screamRandom: " + screamRandom);
    if (health <= 0) {
        youLose();
    }
    else if (screamRandom === 50) {
        let screamDamage = 100;
        monsterHealth -= screamDamage;
        monsterHealthText.innerText = monsterHealth;
        document.getElementById("screamText").style.display = "block";
        screamText.innerText = "You screamed at the monster and he exploded!";
        win();
    } else {
        document.getElementById("screamText").style.display = "block";
        screamText.innerText = "You screamed at the monster and it weirded him out.";
        damage();
    }
}

function damage() {
    monsterPower = monsters[fighting].power;
    let monsterDamage = Math.floor(Math.random(monsterPower) * 10);
    console.log("Monster Damage: " + monsterDamage);
    if (monsterDamage === 0) {
        text.innerText = "The monster slashes at you, but missed!";
    } else {
        health -= monsterDamage;
        healthText.innerText = health;
        if (monsterHealth > 0) {
            if (monsterDamage === 1) {
                text.innerText = "You've been hit! You take " + monsterDamage + " point of damage.";
            } else {
                text.innerText = "You've been hit! You take " + monsterDamage + " points of damage.";
            }

        }
    }
}

function run() {
    console.log("run away like a little bug");
    document.getElementById("monsterStats").style.display = "none";
    update(locations[0]);
}

function win() {
    console.log("I won!");
    update(locations[11]);
    gold += monsters[fighting].gold;
    goldText.innerText = gold;
    text.innerText = "You defeated the monster! You collected " + monsters[fighting].gold + " gold from its corpse."
    document.getElementById("monsterStats").style.display = "none";
}

function restart() {
    location.reload();
}

function inspectCave() {
    text.innerText = "You squint your eyes to try and make anything out. Its too dark.";
}

// Home actions
function watchTV() {
    text.innerText = "You sit down infront of your 10\" plasma screen TV. The new episode of Law & Order SVU is on. You can't believe this show is still on the air.";
}

function talkRoommate() {
    text.innerText = "\"Lovely weather we're having\" - you say sheepishly. Chad keeps mumbling to himself aggressively.";
}

function inspectRoommate() {
    text.innerText = "You take a closer look at your roommate, Chad. He is sweating profusely. His eyes are completely dialated. He is clearly having a bad trip.";
}

function sleep() {
    boostHealth();
    if (health < 100) {
        text.innerText = "You take a little cat nap and wake up feeling refreshed. You gain +15 health";
    } else {
        text.innerText = "You take a little cat nap and wake up feeling refreshed.";
    }
}

function boostHealth() {
    if (health < 100) {
        health += 15;
        healthText.innerText = health;
    }
}

function openDrawer() {
    text.innerText = "You look inside the drawer. You see some loose coins. \"That was worth while\" you say to yourself.";
}

// Tavern actions
function talkBarKeep() {
    text.innerText = "\"I'm sorry were you saying something?\" - the bartender asks. You are too embarassed to repeat yourself.";
}
function rentRoom() {
    if (gold >= 15) {
        text.innerText = "\"I'll get you our finest suite!\" - the bartender exclaims."
        gold -= 15;
        goldText.innerText = gold;
        setTimeout(() => { update(locations[9]); }, 3000);
    } else {
        text.innerText = "You don't have enough gold.";
    }

}

function sleepTavernBed() {
    boostHealth();
    if (health < 100) {
        text.innerText = "You rest for the night. You gain +15 health";
    } else {
        text.innerText = "You rest for the night.";
    }
}
function sitStare() {
    text.innerText = "You take a seat on the floor and decide to stare at the wall. What an adventure."
}

// Shop actions
function buyHealth() {
    if (gold >= 10) {
        health += 10;
        gold -= 10;
        goldText.innerText = gold;
        healthText.innerText = health;
        text.innerText = "You bought +10 points of health for 10 gold."
    } else {
        text.innerText = "You don't have enough gold."
    }
}
function buyWeapon() {
    if (gold >= weapons[currentWeapon + 1].cost) {
        gold -= weapons[currentWeapon].cost;
        currentWeapon++;
        text.innerText = "You now have a brand new " + weapons[currentWeapon].name + "!";
        goldText.innerText = gold;
    } else {
        text.innerText = "You don't have enough gold.";
    }
}
