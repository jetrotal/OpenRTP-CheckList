var checklist = `
<style>
#assetPointer{
    vertical-align: middle;
};
.inner {
    position: relative;
    max-width: calc(100% - 100px);
}
</style>
<table><h1>OpenRTP CheckList</h1>
<thead id="assetPointer"><tr><td>

⬛ Waiting for An Artist <br>🟨 In Progress <br>🟦 Under Review <br>🟩 Done <br>🟥 Something Went Wrong 
</tr></td></thead></table>`;

var rtp = {
    "Backdrop": [
        "Arena.png",
        "Bathhouse.png",
        "Beach.png",
        "Bridge.png",
        "Castle.png",
        "Desert.png",
        "Downtown.png",
        "Dungeon1.png",
        "Dungeon2.png",
        "Dungeon3.png",
        "Dungeon4.png",
        "Dungeon5.png",
        "Dungeon6.png",
        "Forest1.png",
        "Forest2.png",
        "Grassland.png",
        "Graveyard.png",
        "Mansion.png",
        "Mountain Road.png",
        "MountainPath.png",
        "Old Town.png",
        "PoisonSwamp.png",
        "Road.png",
        "Rocky Road.png",
        "RockyArea.png",
        "Ruins.png",
        "Ruins1.png",
        "Ruins2.png",
        "SandyBeach.png",
        "Sea.png",
        "Ship.png",
        "ShipDeck.png",
        "Shrine.png",
        "Sky.png",
        "Snow Field.png",
        "Snowfield.png",
        "Space.png",
        "StrangeSpace.png",
        "Swamp.png",
        "Temple1.png",
        "Temple2.png",
        "Throne.png",
        "Town.png",
        "Universe.png",
        "Wasteland.png"
    ],
    "Sound": [
        "Absorb1.wav",
        "Absorb2.wav",
        "Attack1.wav",
        "Attack2.wav",
        "Barrier.wav",
        "Barrier1.wav",
        "Barrier2.wav",
        "Bell.wav",
        "Bite.wav",
        "Blind.wav",
        "Blow1.wav",
        "Blow2.wav",
        "Blow3.wav",
        "Blow4.wav",
        "Blow5.wav",
        "Blow6.wav",
        "Blow7.wav",
        "Bow1.wav",
        "Bow2.wav",
        "Breath.wav",
        "Buff.wav",
        "Buzzer1.wav",
        "Buzzer2.wav",
        "Buzzer3.wav",
        "Buzzer4.wav",
        "Cancel1.wav",
        "Cancel2.wav",
        "Cat.wav",
        "Chicken.wav",
        "Chime1.wav",
        "Chime2.wav",
        "Clock.wav",
        "Close1.wav",
        "Close2.wav",
        "Collapse1.wav",
        "Collapse2.wav",
        "Combat1.wav",
        "Combat2.wav",
        "Confusion.wav",
        "Cow.wav",
        "Cursor1.wav",
        "Cursor2.wav",
        "Damage1.wav",
        "Damage2.wav",
        "Darkness1.wav",
        "Darkness2.wav",
        "Darkness3.wav",
        "Darkness4.wav",
        "Darkness5.wav",
        "Darkness6.wav",
        "Debuff.wav",
        "Decision1.wav",
        "Decision2.wav",
        "Dog.wav",
        "Earth1.wav",
        "Earth10.wav",
        "Earth2.wav",
        "Earth3.wav",
        "Earth4.wav",
        "Earth5.wav",
        "Earth6.wav",
        "Earth7.wav",
        "Earth8.wav",
        "Earth9.wav",
        "Earthquake1.wav",
        "Earthquake2.wav",
        "Ensnare.wav",
        "Escape.wav",
        "Evade1.wav",
        "Evade2.wav",
        "Explosion1.wav",
        "Explosion2.wav",
        "Explosion3.wav",
        "Explosion4.wav",
        "Explosion5.wav",
        "Explosion6.wav",
        "Explosion7.wav",
        "Fall1.wav",
        "Fall2.wav",
        "Fire1.wav",
        "Fire2.wav",
        "Fire3.wav",
        "Fire4.wav",
        "Fire5.wav",
        "Fire6.wav",
        "Fire7.wav",
        "Fire8.wav",
        "Flash1.wav",
        "Flash2.wav",
        "Flash3.wav",
        "Fog1.wav",
        "Fog2.wav",
        "Glare.wav",
        "GlassShatter.wav",
        "Holy1.wav",
        "Holy2.wav",
        "Holy3.wav",
        "Holy4.wav",
        "Holy5.wav",
        "Holy6.wav",
        "Holy7.wav",
        "Holy8.wav",
        "Holy9.wav",
        "Horse.wav",
        "Ice1.wav",
        "Ice10.wav",
        "Ice11.wav",
        "Ice2.wav",
        "Ice3.wav",
        "Ice4.wav",
        "Ice5.wav",
        "Ice6.wav",
        "Ice7.wav",
        "Ice8.wav",
        "Ice9.wav",
        "Item1.wav",
        "Item2.wav",
        "Jump1.wav",
        "Jump2.wav",
        "Key.wav",
        "Knock.wav",
        "Lion.wav",
        "Magic1.wav",
        "Magic2.wav",
        "Monster1.wav",
        "Monster2.wav",
        "Move.wav",
        "Open1.wav",
        "Open2.wav",
        "Paralyze1.wav",
        "Paralyze2.wav",
        "Paralyze3.wav",
        "Poison.wav",
        "Pollen.wav",
        "Rain1.wav",
        "Rain2.wav",
        "Raise1.wav",
        "Raise2.wav",
        "Raise3.wav",
        "Recovery1.wav",
        "Recovery2.wav",
        "Recovery3.wav",
        "Recovery4.wav",
        "Recovery5.wav",
        "Recovery6.wav",
        "Recovery7.wav",
        "Recovery8.wav",
        "Roar.wav",
        "Sandstorm.wav",
        "Sea1.wav",
        "Sea2.wav",
        "Sheep.wav",
        "Shot1.wav",
        "Shot2.wav",
        "Shot3.wav",
        "Silence.wav",
        "Slash1.wav",
        "Slash10.wav",
        "Slash11.wav",
        "Slash2.wav",
        "Slash3.wav",
        "Slash4.wav",
        "Slash5.wav",
        "Slash6.wav",
        "Slash7.wav",
        "Slash8.wav",
        "Slash9.wav",
        "Sleep.wav",
        "Song.wav",
        "Switch1.wav",
        "Switch2.wav",
        "Sword1.wav",
        "Sword2.wav",
        "Sword3.wav",
        "Teleport1.wav",
        "Teleport2.wav",
        "Thunder1.wav",
        "Thunder10.wav",
        "Thunder2.wav",
        "Thunder3.wav",
        "Thunder4.wav",
        "Thunder5.wav",
        "Thunder6.wav",
        "Thunder7.wav",
        "Thunder8.wav",
        "Thunder9.wav",
        "Tiger.wav",
        "Water1.wav",
        "Water2.wav",
        "Water3.wav",
        "Water4.wav",
        "Water5.wav",
        "Water6.wav",
        "Wave1.wav",
        "Wave2.wav",
        "Wind1.wav",
        "Wind10.wav",
        "Wind11.wav",
        "Wind2.wav",
        "Wind3.wav",
        "Wind4.wav",
        "Wind5.wav",
        "Wind6.wav",
        "Wind7.wav",
        "Wind8.wav",
        "Wind9.wav"
    ],
    "GameOver": [
        "Game Over.png"
    ],
    "BattleCharSet": [
        "Armored Warror A.png",
        "Armored Warror B.png",
        "Chinese Man A.png",
        "Chinese Man B.png",
        "Chinese Woman A.png",
        "Chinese Woman B.png",
        "Female Bandit A.png",
        "Female Bandit B.png",
        "Female Elf A.png",
        "Female Elf B.png",
        "Female Fighter A.png",
        "Female Fighter B.png",
        "Female Hero A.png",
        "Female Hero B.png",
        "Female Mage A.png",
        "Female Mage B.png",
        "Female Monk A.png",
        "Female Monk B.png",
        "Female Ninja A.png",
        "Female Ninja B.png",
        "Female Pirate A.png",
        "Female Pirate B.png",
        "Female Warrior A.png",
        "Female Warrior B.png",
        "Male Bandit A.png",
        "Male Bandit B.png",
        "Male Elf A.png",
        "Male Elf B.png",
        "Male Fighter A.png",
        "Male Fighter B.png",
        "Male Hero A.png",
        "Male Hero B.png",
        "Male Mage A.png",
        "Male Mage B.png",
        "Male Monk A.png",
        "Male Monk B.png",
        "Male Ninja A.png",
        "Male Ninja B.png",
        "Male Pirate A.png",
        "Male Pirate B.png",
        "Male Warrior A.png",
        "Male Warrior B.png",
        "Man1 A.png",
        "Man1 B.png",
        "Man2 A.png",
        "Man2 B.png",
        "Man3 A.png",
        "Man3 B.png",
        "Man4 A.png",
        "Man4 B.png",
        "Man5 A.png",
        "Man5 B.png",
        "Samurai A.png",
        "Samurai B.png",
        "Woman1 A.png",
        "Woman1 B.png",
        "Woman2 A.png",
        "Woman2 B.png",
        "Woman3 A.png",
        "Woman3 B.png",
        "Woman4 A.png",
        "Woman4 B.png",
        "Woman5 A.png",
        "Woman5 B.png"
    ],
    "ChipSet": [
        "Dungeon.png",
        "Exterior.png",
        "Interior.png",
        "Ship.png",
        "World.png"
    ],
    "Monster": [
        "Ahriman.png",
        "Alligator.png",
        "Anaconda.png",
        "Angel.png",
        "Asura.png",
        "Bahamut.png",
        "Basilisk.png",
        "Bat.png",
        "Behemoth.png",
        "Berserker.png",
        "Big Foot.png",
        "Black Knight.png",
        "Byakko.png",
        "Cait Sith.png",
        "Carbuncle.png",
        "Carmilla.png",
        "Catoblepas.png",
        "Centaur.png",
        "Centipede.png",
        "Cerberus.png",
        "Chimera.png",
        "Cockatorice.png",
        "Crab.png",
        "Crawler.png",
        "Cyclops.png",
        "Dark Elf.png",
        "Dark Knight.png",
        "Demon God.png",
        "Demon Lord.png",
        "Demon.png",
        "Dragon Knight.png",
        "Dragon.png",
        "DragonA.png",
        "DragonB.png",
        "Elf.png",
        "Familiar.png",
        "Fenrir.png",
        "Gargoyle.png",
        "Garuda.png",
        "Gazer.png",
        "Genbu.png",
        "Ghost.png",
        "Ghoul.png",
        "Giant Scorpion.png",
        "Giant Spider.png",
        "Giant.png",
        "Goblin.png",
        "Golem.png",
        "Gorgon.png",
        "Grell.png",
        "Griffon.png",
        "Harpy.png",
        "Hornet.png",
        "Horse.png",
        "Hydra.png",
        "Ifreet.png",
        "Imp.png",
        "Jack-O-Lantern.png",
        "Kappa.png",
        "King.png",
        "Kirin.png",
        "Knight.png",
        "Kobold.png",
        "Kraken.png",
        "Kyuubi.png",
        "Lakshmi.png",
        "Lamia.png",
        "Leviathan.png",
        "Lich.png",
        "Lilith.png",
        "Lizard.png",
        "Lizardman.png",
        "Magician1.png",
        "Magician2.png",
        "Mammoth.png",
        "Manticore.png",
        "Mantis.png",
        "Medusa.png",
        "Merman.png",
        "Midgardsormr.png",
        "Mimic.png",
        "Minotaur.png",
        "Monster Fish.png",
        "Mummy.png",
        "Necromancer.png",
        "Nepenthes.png",
        "Ninja.png",
        "Octopus.png",
        "Odin.png",
        "Ogre.png",
        "Oni.png",
        "Orc.png",
        "Ouroboros.png",
        "Parasite.png",
        "People1.png",
        "People2.png",
        "People3.png",
        "People4.png",
        "People5.png",
        "People6.png",
        "People7.png",
        "People8.png",
        "Phoenix.png",
        "Pirate.png",
        "Queen.png",
        "Quetzalcoatl.png",
        "Reaper.png",
        "Remora.png",
        "Ryuu.png",
        "Sahagin.png",
        "Salamander.png",
        "Satan.png",
        "Scorpion.png",
        "Scylla.png",
        "Seraphim.png",
        "Shadow.png",
        "Shark.png",
        "Siren.png",
        "Skeleton.png",
        "Slime.png",
        "Snake.png",
        "Soldier.png",
        "Sorcerer.png",
        "Spectre.png",
        "Sphinx.png",
        "Spirit.png",
        "Suzaku.png",
        "Sylph.png",
        "Tarantula.png",
        "Thief.png",
        "Tiamat.png",
        "Titan.png",
        "Toad.png",
        "Treant.png",
        "Troll.png",
        "Undead Knight.png",
        "Unicorn.png",
        "Vampire.png",
        "Warrior.png",
        "Warrior1.png",
        "Warrior2.png",
        "Werewolf.png",
        "Wight.png",
        "Wisp.png",
        "Worm.png",
        "Wraith.png",
        "Wyvern.png",
        "Zombie.png"
    ],
    "BattleWeapon": [
        "Weapon.png"
    ],
    "Battle": [
        "2003 Absorb.png",
        "2003 Axe.png",
        "2003 Barrier.png",
        "2003 Blow.png",
        "2003 Bow.png",
        "2003 Breath.png",
        "2003 Claw.png",
        "2003 Cold.png",
        "2003 Cure.png",
        "2003 Dark.png",
        "2003 Earth.png",
        "2003 Explosion.png",
        "2003 Fire.png",
        "2003 Holy.png",
        "2003 Light Pillar.png",
        "2003 Other1.png",
        "2003 Other2.png",
        "2003 Paralysis.png",
        "2003 Recovery.png",
        "2003 Revive.png",
        "2003 Spear.png",
        "2003 Sword.png",
        "2003 Thunder.png",
        "2003 Water.png",
        "2003 Whip.png",
        "2003 Wind.png",
        "Arrow.png",
        "Axe.png",
        "Barrier.png",
        "Bite.png",
        "Blow.png",
        "Breath.png",
        "Buff.png",
        "Claw.png",
        "Dark.png",
        "Debuff.png",
        "Earth.png",
        "Explosion.png",
        "Fire1.png",
        "Fire2.png",
        "Holy.png",
        "Ice.png",
        "Other.png",
        "Paralysis.png",
        "Recovery.png",
        "Ressurection.png",
        "Spear.png",
        "Sword1.png",
        "Sword2.png",
        "Thunder.png",
        "Treatment.png",
        "Water.png",
        "Whip.png",
        "Wind.png"
    ],
    "System": [
        "System.png",
        "SystemA.png",
        "SystemB.png",
        "SystemC.png"
    ],
    "FaceSet": [
        "Actor1.png",
        "Actor2.png",
        "Monster.png",
        "People1.png",
        "People2.png"
    ],
    "Panorama": [
        "Cosmos1.png",
        "Dawn1.png",
        "Dawn2.png",
        "Dimension Rift.png",
        "Night Sky1.png",
        "Night Sky2.png",
        "Planet1.png",
        "Planet2.png",
        "Planet3.png",
        "Sky1.png",
        "Sky2.png",
        "Sunset1.png",
        "Sunset2.png"
    ],
    "System2": [
        "System2A.png",
        "System2B.png",
        "System2C.png"
    ],
    "Battle2": [
        "noFile"
    ],
    "Title": [
        "Title1.png",
        "Title2.png",
        "Title3.png",
        "Title4.png"
    ],
    "Music": [
        "2003Adventurers.mid",
        "2003Ancient City.mid",
        "2003Battle with an Evil God.mid",
        "2003Beginning of a War.mid",
        "2003Casino Indulgence.mid",
        "2003Cathedral.mid",
        "2003Church.mid",
        "2003City Bustle.mid",
        "2003Colosseum.mid",
        "2003Creeping Darkness.mid",
        "2003Cyber City.mid",
        "2003DarkAltar.mid",
        "2003Deep Memory.mid",
        "2003Deserted Mansion.mid",
        "2003Dream Forest.mid",
        "2003Dream of Striking It Rich.mid",
        "2003Dreaminess.mid",
        "2003Empire.mid",
        "2003Exploring Ruins.mid",
        "2003Fairy Forest.mid",
        "2003Far Eastern Land.mid",
        "2003Final Battleground.mid",
        "2003Free For All.mid",
        "2003Healing Spring.mid",
        "2003Hero's Return.mid",
        "2003Ice Labyrinth.mid",
        "2003In the Eternal Flow of Time.mid",
        "2003Little Army's March.mid",
        "2003Lonesome Journey.mid",
        "2003Machine Fortress.mid",
        "2003Maximum Battle.mid",
        "2003Otherworldly Corridor.mid",
        "2003Palace Party.mid",
        "2003Panic.mid",
        "2003Repeated Wars.mid",
        "2003Silence.mid",
        "2003Snow Town.mid",
        "2003Sorrow.mid",
        "2003Steady Breeze.mid",
        "2003Subterranean Maze.mid",
        "2003SunnyVillage.mid",
        "2003Tavern.mid",
        "2003Tension.mid",
        "2003Village in the Valley.mid",
        "2003Village of Savages.mid",
        "2003Waltz of Blessings.mid",
        "2003Wings to the Sky.mid",
        "2003Young Memories.mid",
        "Anger.mid",
        "Animal.mid",
        "Battle 1.mid",
        "Battle 2.mid",
        "Battle 3.mid",
        "Battle1.mid",
        "Battle2.mid",
        "Battle3.mid",
        "BattleEnd1.mid",
        "BattleEnd2.mid",
        "BattleEnd3.mid",
        "BattleEnd4.mid",
        "Black Market.mid",
        "BlackMarket.mid",
        "Boss 1.mid",
        "Boss 2.mid",
        "Boss 3.mid",
        "Boss 4.mid",
        "Boss1.mid",
        "Boss2.mid",
        "Boss3.mid",
        "Boss4.mid",
        "Castle 1.mid",
        "Castle 2.mid",
        "Castle 3.mid",
        "Castle1.mid",
        "Castle2.mid",
        "Castle3.mid",
        "Church.mid",
        "Clock.wav",
        "Crisis.mid",
        "Defeat.mid",
        "Demon Lord.mid",
        "Devil.mid",
        "Dungeon 1.mid",
        "Dungeon 2.mid",
        "Dungeon 3.mid",
        "Dungeon 4.mid",
        "Dungeon 5.mid",
        "Dungeon1.mid",
        "Dungeon2.mid",
        "Dungeon3.mid",
        "Dungeon4.mid",
        "Dungeon5.mid",
        "Earthquake.wav",
        "Ending 1.mid",
        "Ending 2.mid",
        "Ending 3.mid",
        "Ending1.mid",
        "Ending2.mid",
        "Ending3.mid",
        "Energy.mid",
        "Exploration.mid",
        "Fairy 1.mid",
        "Fairy 2.mid",
        "Fairy1.mid",
        "Fairy2.mid",
        "Fanfare1.mid",
        "Fanfare2.mid",
        "Fanfare3.mid",
        "Fanfare4.mid",
        "Fanfare5.mid",
        "Fanfare6.mid",
        "Farewell1.mid",
        "Farewell2.mid",
        "Field 1.mid",
        "Field 2.mid",
        "Field 3.mid",
        "Field 4.mid",
        "Field1.mid",
        "Field2.mid",
        "Field3.mid",
        "Field4.mid",
        "Gag1.mid",
        "Gag2.mid",
        "Game Over 1.mid",
        "Game Over 2.mid",
        "Game Over 3.mid",
        "Gameover1.mid",
        "Gameover2.mid",
        "Gameover3.mid",
        "Ghost Town 1.mid",
        "Ghost Town 2.mid",
        "GhostTown1.mid",
        "GhostTown2.mid",
        "Hero 1.mid",
        "Hero 2.mid",
        "Hero1.mid",
        "Hero2.mid",
        "In a Pinch.mid",
        "Inn1.mid",
        "Inn2.mid",
        "Items.mid",
        "J2003Horn.mid",
        "JDoubt.mid",
        "JEnd of Battle 1.mid",
        "JEnd of Battle 2.mid",
        "JEnd of Battle 3.mid",
        "JEnd of Battle 4.mid",
        "JFanfare 1.mid",
        "JFanfare 2.mid",
        "JFanfare 3.mid",
        "JFanfare 4.mid",
        "JFanfare 5.mid",
        "JFanfare 6.mid",
        "JInn 1.mid",
        "JInn 2.mid",
        "JItem.mid",
        "JJoke 1.mid",
        "JJoke 2.mid",
        "JMystery.mid",
        "Liveliness.mid",
        "Lively Market.mid",
        "Marketplace.mid",
        "Mystery 1.mid",
        "Mystery 2.mid",
        "Mystery 3.mid",
        "Mystery.mid",
        "Mystery1.mid",
        "Mystery2.mid",
        "Mystery3.mid",
        "Opening 1.mid",
        "Opening 2.mid",
        "Opening 3.mid",
        "Opening1.mid",
        "Opening2.mid",
        "Opening3.mid",
        "Parting 1.mid",
        "Parting 2.mid",
        "Peace1.mid",
        "Peace2.mid",
        "Peace3.mid",
        "Rain1.wav",
        "Rain2.wav",
        "Repose 1.mid",
        "Repose 2.mid",
        "Repose 3.mid",
        "SE2003Alarm.wav",
        "SE2003Bird.wav",
        "SE2003Bustle.wav",
        "SE2003Jungle.wav",
        "SE2003Wind.wav",
        "SEClock.wav",
        "SEDownpour.wav",
        "SEEarthquake.wav",
        "SERain.wav",
        "SESea.wav",
        "Sea.wav",
        "Search.mid",
        "Secret Treasure.mid",
        "Ship 1.mid",
        "Ship 2.mid",
        "Ship 3.mid",
        "Ship1.mid",
        "Ship2.mid",
        "Ship3.mid",
        "Shop 1.mid",
        "Shop 2.mid",
        "Shop 3.mid",
        "Sorrow.mid",
        "Store1.mid",
        "Store2.mid",
        "Store3.mid",
        "Suspicion.mid",
        "Thief.mid",
        "Tower 1.mid",
        "Tower 2.mid",
        "Tower 3.mid",
        "Tower1.mid",
        "Tower2.mid",
        "Tower3.mid",
        "Town 1.mid",
        "Town 2.mid",
        "Town 3.mid",
        "Town1.mid",
        "Town2.mid",
        "Town3.mid",
        "Treasure.mid",
        "Trial.mid",
        "Vehicle 1.mid",
        "Vehicle 2.mid",
        "Vehicle 3.mid",
        "Vehicle1.mid",
        "Vehicle2.mid",
        "Vehicle3.mid",
        "Victory.mid",
        "Village 1.mid",
        "Village 2.mid",
        "Village 3.mid",
        "Village1.mid",
        "Village2.mid",
        "Village3.mid",
        "Wrath.mid"
    ],
    "CharSet": [
        "Actor1.png",
        "Actor2.png",
        "Actor3.png",
        "Actor4.png",
        "Animal.png",
        "Monster1.png",
        "Monster2.png",
        "Object1.png",
        "Object2.png",
        "People1.png",
        "People2.png",
        "People3.png",
        "People4.png",
        "People5.png",
        "Vehicles.png"
    ]
}
var gitData = {
    user: "jetrotal",
    repo: "OpenRTP-CheckList",
    rtpFolder: "2000+2003 RTP",
    assetsFolders: ["Backdrop","Battle","BattleCharSet","BattleWeapon","CharSet","ChipSet","FaceSet","GameOver","Monster","Music","Panorama","Sound","System","System2","Title"]
}

async function list_directory(user, repo, directory) {
    const url = `https://api.github.com/repos/${user}/${repo}/git/trees/main`;
    directory = directory.split('/').filter(Boolean);
    const dir = await directory.reduce(async (acc, dir) => {
        const {
            url
        } = await acc;
        const list = await fetch(url).then(res => res.json());
        return list.tree.find(node => node.path === dir);
    }, {
        url
    });
    if (dir) {
        const list = await fetch(dir.url).then(res => res.json());
        return list.tree.map(node => node.path);
    }
}

function settingFolders(result) {
    console.log("It succeeded with " + result);
    gitData.assetsFolders = result;
    if (rtp == {}) result.forEach(function(item) {
        getAsset(item);
    });

    gitData.assetsFolders.forEach(function(item) {
            checklist += `<h2>`+item + `</h2> 
<details> <summary>Details</summary><br>`;
            rtp[item].forEach(function(asset) {
              var imgA = encodeURI(`https://raw.githubusercontent.com/`+gitData.user+`/`+gitData.repo+`/main/`+gitData.rtpFolder+`/`+item+`/`+asset);
              checklist += 
`<table>
<thead>
<tr>
<th>⬛ `+asset+` </th>
</tr>
</thead>
<tbody>
<tr>
<td><br><br></div><table><tbody><tr><td><img src="`+imgA+`">   </td><td id="assetPointer">👉</td>  <td> <img src="`+imgA+`"> </td></tr></tbody></table>  <table>


</table>
<ul>
<strong>STATUS</strong>: Free Slot<br>
<strong>ORIGINALLY FROM</strong>: RPG Maker 2000/2003<br>
<strong>REPLACEMENT AUTHOR</strong>: No Author<br>
<strong>LICENSE</strong>: None<br>
<strong>SOURCES</strong>: None</li>
</ul>

</td>
</tr></tbody></table>

`
            });
        checklist += `</details><br>
`
    });
    document.getElementById("main_content").innerHTML = checklist

}

function failureCallback(error) {
    console.log("It failed with " + error);
}

function start() {
  if (!rtp) return rtp = {}, list_directory(gitData.user, gitData.repo, gitData.rtpFolder).then(settingFolders, failureCallback);
  else settingFolders(gitData.assetsFolders)

}

function getAsset(item) {
    list_directory(gitData.user, gitData.repo, gitData.rtpFolder + "/" + item).then(function(result) {
        rtp[item] = result;
    }, failureCallback);
}

start();
