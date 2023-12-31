var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generate() {
  var finalName =
    nameList[Math.floor(Math.random() * nameList.length)] +
    " " +
    nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

export const staticRankingData = [
  {
    _id: 1,
    shopLogo: "https://source.unsplash.com/random/300×300",
    shopName: generate(),
    sellerName: generate(),
    itemsSold: Math.round(Math.random() * 100),
    rating: Math.round(Math.abs(Math.random() * 5 - 1)),
    profit: Math.round(Math.random() * 1000),
  },
  {
    _id: 2,
    shopLogo: "https://source.unsplash.com/random/300×300",
    shopName: generate(),
    sellerName: generate(),
    itemsSold: Math.round(Math.random() * 100),
    rating: Math.round(Math.abs(Math.random() * 5 - 1)),
    profit: Math.round(Math.random() * 1000),
  },
  {
    _id: 3,
    shopLogo: "https://source.unsplash.com/random/300×300",
    shopName: generate(),
    sellerName: generate(),
    itemsSold: Math.round(Math.random() * 100),
    rating: Math.round(Math.abs(Math.random() * 5 - 1)),
    profit: Math.round(Math.random() * 1000),
  },
  {
    _id: 4,
    shopLogo: "https://source.unsplash.com/random/300×300",
    shopName: generate(),
    sellerName: generate(),
    itemsSold: Math.round(Math.random() * 100),
    rating: Math.round(Math.abs(Math.random() * 5 - 1)),
    profit: Math.round(Math.random() * 1000),
  },
  {
    _id: 5,
    shopLogo: "https://source.unsplash.com/random/300×300",
    shopName: generate(),
    sellerName: generate(),
    itemsSold: Math.round(Math.random() * 100),
    rating: Math.round(Math.abs(Math.random() * 5 - 1)),
    profit: Math.round(Math.random() * 1000),
  },
];
