// ═══════════════════════════════════════════════════════════════════════════════
//  MHF1 (Monster Hunter Freedom 1) Quest Editor Module
// ═══════════════════════════════════════════════════════════════════════════════

// ── DATA TABLES ──────────────────────────────────────────────────────────────
const F1_ITEM_LIST = [
"------","Book of Combos 1","Book of Combos 2","Book of Combos 3","Book of Combos 4","Book of Combos 5","Alchemy Guide","Potion","Mega Potion","Nutrients",
"Mega Nutrients","Antidote","Immunizer","Power Juice","Mega Juice","Demondrug","Mega Demondrug","Power Pill","Armorskin","Mega Armorskin",
"Armor Pill","Cool Drink","Hot Drink","Psychoserum","Monster Fluid","Monster Broth","Herbal Medicine","Max Potion","Ancient Potion","Catalyst",
"Gunpowder","Lifecrystals","Lifepowder","Powercharm","Powertalon","Armorcharm","Armortalon","Raw Meat","Rare Steak","Well-Done Steak",
"Gourmet Steak","Burnt Meat","Poisoned Meat","Tainted Meat","Drugged Meat","Kingmeat","Throwing Knife","Poison Thrw Knf","Sleeping Thr Knf","Paralyze Thr Knf",
"Bomb Material","Paintball","Flash Bomb","Sonic Bomb","Dung","Wyvern Droppings","Dung Bomb","Smoke Bomb","Poison Smoke Bmb","Farcaster",
"Spiderweb","Net","Pitfall Trap","Trap Tool","Barrel Lid","Small Barrel","Large Barrel","Sm Barrel-Bomb","Sm Barrel-Bomb+","Lg Barrel-Bomb",
"Lg Barrel-Bomb+","Huskberry","Sm Bone Husk","Lg Bone Husk","Normal S Lv1","Normal S Lv2","Normal S Lv3","Pierce S Lv1","Pierce S Lv2","Pierce S Lv3",
"Pellet S Lv1","Pellet S Lv2","Pellet S Lv3","Crag S Lv1","Crag S Lv2","Crag S Lv3","Clust S Lv1","Clust S Lv2","Clust S Lv3","Flaming S",
"Ice S","Thunder S","Dragon S","Recov S Lv1","Recov S Lv2","Poison S Lv1","Poison S Lv2","Stun S Lv1","Stun S Lv2","Sleep S Lv1",
"Sleep S Lv2","Tranq S","Paint S","Demon S","Armor S","Cricket","Worm","Firefly","Frog","Tuna Bait",
"Arrowana Bait","Goldenfish Bait","Mega Fishing Fly","Old Pickaxe","Iron Pickaxe","Mega Pickaxe","Expand Pickaxe","Old Bugnet","Bugnet","Mega Bugnet",
"BBQ Spit","Gourmet BBQ Spit","Whetstone","Binoculars","Garbage","Flute","Health Flute","Antidote Flute","Demon Flute","Armor Flute",
"Honey","Herb","Antidote Herb","Fire Herb","Ivy","Sleep Herb","Sap Plant","Felvine","Cactus Flower","King Cactus",
"Hot Pepper","Dosbiscus","Special Mushroom","Blue Mushroom","Nitroshroom","Stunshroom","Toadstool","Dragon Toadstool","Spicy Mushroom","Chaos Mushroom",
"Paintberry","Power Seed","Armor Seed","Dragon Seed","Scatternut","Needleberry","Bomberry","Red Seed","Green Seed","Stone",
"Disk Stone","Iron Ore","Earth Crystal","Machalite Ore","Dragonite Ore","Carbalite Ore","Great Stone","Union Ore","Firestone","Firecell Stone",
"Coal","Lightcrystal","Novacrystal","Pure Crystal","Antiseptic Stone","Ice Crystal","Rainbow Ore","Knife Mackerel","Sushifish","Sleepyfish",
"Pin Tuna","Rumblefish","Scatterfish","Burst Arrowana","Bomb Arrowana","Goldenfish","Speartuna","Small Goldenfish","Springnight Carp","Pickaxe Fish",
"Bugnet Fish","Cooler Fish","Insect Husk","Yambug","Bughopper","Snakebee Larva","Godbug","Bitterbug","Flashbug","Thunderbug",
"King Scarab","Joiner Grasshppr","Rainbow Insect","Screamer","Poison Sac","Toxin Sac","Stun Sac","Paralysis Sac","Sleep Sac","Coma Sac",
"Flame Sac","Inferno Sac","Electro Sac","Thunder Sac","Power Extract","Pale Extract","Sm Monster Bone","Med Monster Bone","Lg Monster Bone","Monster Bone+",
"Hrd Monster Bone","Mystery Bone","Unknown Skull","Master's Skull","Bone","Wyvern Fang","Wyvern Claw","Mosswine Hide","Mosswine Head","Bullfango Pelt",
"Bullfango Head","Kelbi Horn","Kelbi Hide","Velociprey Fang","Velociprey Scale","Velociprey Scle+","Velociprey Hide","Velociprey Hide+","Velocidrome Claw","Velocidrome Head",
"WhtVeloprySclPc","WhtVelopry Scale","Wht Velopry Hide","Genprey Fang","Genprey Scale","Genprey Scale+","Genprey Hide","Genprey Hide+","Gendrome Hide","Ioprey Fang",
"Ioprey Scale","Ioprey Scale+","Ioprey Hide","Ioprey Hide+","Iodrome Hide","Kut-Ku Coin","Kut-Ku Scale","Kut-Ku Shell","Kut-Ku Carapace","Kut-Ku Ear",
"Long Kut-Ku Ear","Tiny Beak","Giant Beak","Splendid Beak","Kut-Ku Webbing","Kut-Ku Wing","Blue Kut-Ku Scl","Blue Kut-Ku Shl","BluKutKuCarapace","SmlBlueKut-KuEar",
"Blue Kut-Ku Ear","Blue Kut-Ku Wing","Gypceros Coin","Rubbery Hide","Rubbery Hide+","Gypceros Head","Pur Rubbery Hide","Piscine Fang","Piscine Liver","Piscine Jaw",
"Plesioth Coin","Plesioth Scale","Plesioth Scale+","Plesioth Fin","Plesioth Top Fin","GrnPlesiothSclPc","Grn Plesioth Scl","GrnPlesiothFinPc","Grn Plesioth Fin","Cephalos Coin",
"Cephalos Scale","Cephalos Scale+","Cephalos Fin","Cephalos Fin+","Coral Cphlos Scl","Coral Cphlos Fin","Rathian Coin","Rathian Claw","Rathian Scale","Rathian Scale+",
"Rathian Plate","Rathian Ruby","Rathian Shell","Rathian Carapace","Rathian Spike","Pnk Rathian Claw","Pnk Rathian Scl","Pnk Rathian Scl+","Pnk Rthian Plate","Pnk Rathian Rby",
"Pnk Rathian Shl","Pnk Rathian Cpc","Pnk Rthian Thorn","Gld Rathian Clw","Gld Rathian Scl","Gld Rthian Plate","Gld Rathian Rby","Gld Rathian Shl","Gld Rthian Thorn","Rathalos Coin",
"Rathalos Claw","Rathalos Scale","Rathalos Scale+","Rathalos Plate","Rathalos Ruby","Rathalos Shell","Rathlos Carapace","Wyvern Marrow","Rathalos Tail","Rathalos Webbing",
"Rathalos Wing","Azure Rthlos Clw","Azure Rthlos Scl","Azre Rthlos Scl+","Azre Rthls Plate","Azure Rthlos Rby","Azure Rthlos Shl","Azure Rthlos Cpc","Rthlos BrainStem","Azur Rthlos Tail",
"Azr Rthls Webbng","Azur Rthlos Wing","Slvr Rthalos Clw","Slvr Rthalos Scl","Slvr Rthls Plate","Slvr Rthalos Rby","Slvr Rthalos Shl","Slvr Rthals Tail","Slv Rthls Webbng","Slvr Rthlos Wing",
"Khezu Coin","Flabby Hide","Khezu Hide - Tan","Pale Bone","Pale Khezu Steak","Pale Lips","Alluring Hide","Basarios Coin","Basarios Shell","Basrios Carapace",
"Basarios Wing","Basarios Tears","Gravios Coin","Gravios Shell","Gravios Carapace","GraviosHeavyShl","Gravios Wing","StrngGraviosWing","Gravios Head","Gravios Jaw",
"Blk Gravios Crst","Blk Gravios Shl","Blk Gravios Cpc","Blk Gravios Head","Blk Gravios Wing","Twisted Horn","Majestic Horn","Solid Blos Horn","Diablos Shell","Diablos Carapace",
"Diablos Spine","Diablos Thoracic","Diablos Tail","Blos Jaw","Blos Fang","TwstBlkBlosHrn","Black Blos Shell","Black Blos Spine","Black Blos Tail","Vespoid Abdomen",
"Vespoid Shell","Vespoid Carapace","Vespoid Wing","Vespoid Bladefin","Vspoid Razorwing","Hornetaur Shell","Hornet Carapace","Hornetaur Head","Hornetaur Wing","Hornet Bladefin",
"Hornet Razorwing","Sm Lobstershell","Lg Lobstershell","Gt Lobstershell","Monoblos Coin","Crimson Horn","Monoblos Shell","Monoblos Spine","Monoblos Heart","Wht Monoblos Hrn",
"Wht Monoblos Shl","Wht Monoblos Spn","Kirin Horn","Kirin Hide","Kirin Hide+","SpecialKirinHide","Kirin Mane","Kirin Thndr Tail","Kirin Azure Horn","Kirin Azr T-Tail",
"Sm Lao-Shan Claw","Lao-Shan's Claw","Lao-Shan's Horn","Lao-Shan's Scale","Lao-Shan Scale+","Lao-Shan's Plate","Lao-Shan's Ruby","Lao-Shan's Shell","Lao-ShanCarapace","Lao-Shan's Spine",
"LaoShan Thoracic","LaoS Heavy Shell","Azure LaoS Claw","Azure LaoS Horn","Azure LaoS Scale","Azure LaoS Plate","Azure LaoS Shell","Azure LaoS Spine","Fatalis' Horn","Fatalis' Spike",
"Fatalis' Gore","Fatalis' Scale","Fatalis' Scale+","Thck Fatalis Scl","Fatalis' Shell","Fatalis Carapace","Fatalis Hvy Shl","Fatalis' Crust","Hrd Fatalis Crst","Hvy Fatalis Crst",
"Fatalis' Eye","Fatalis Shrp Eye","Fatalis Evil Eye","Fatalis' Webbing","Fatalis' Wing","Fatalis Strg Wng","Fatlis Crmsn Hrn","Fatlis Crmsn Scl","Fatlis Crmsn Shl","Ft Crmsn B-Plate",
"Fatalis Devl Eye","Fatlis Crmsn Wng","Garuga Scale","Garuga Shell","Garuga Ear","Sharpened Beak","Garuga Wing","Garuga Plate","Garuga Mane","Garuga Carapace",
"Long Garuga Ear","Stylish Beak","StrongGarugaWing","Egg Ticket","Jewel Ticket","Commendation","Pawprint Stamp","Old Lady's Note","Guild Ticket","Silver Ticket",
"Gold Ticket","Platinum Ticket","BBQ Ticket","Hunter Citation","Heaven&EarthCrst","Grt Sword Ticket","Hammer Ticket","Lance Ticket","Saber Ticket","Gunner Ticket",
"Paw Pass Ticket","Limited Paw Pass","Magazine Ticket","Dummy item","ThunderG Voucher","Chrome Voucher","PineFlynMealPass","BmboFlynMealPass","PlumFlynMealPass","VeggieElderTcket",
"VeggieElderTckt+","VegElderTcktBrz","VegElderTcktSlv","VegElderTcktGld","Lost Umbrella","Chief's Old Swrd","Ruststone","Ruststone","Ruststone","Ruststone",
"Ruststone","Ancient Stone","Ancient Stone","Ancient Stone","Ancient Stone","Ancient Stone","Organizer Guide","Backpacker Guide","Mosswine Info","Bullfango Info",
"Kelbi Info","Aptonoth Info","Apceros Info","Felyne Info","Melynx Info","Velociprey Info","Velocidrome Info","Genprey Info","Gendrome Info","Ioprey Info",
"Iodrome Info","Rathalos Info","Rathian Info","Yian Kut-Ku Info","Gypceros Info","Vespoid Info","Hornetaur Info","Khezu Info","Plesioth Info","Cephalos Info",
"Cephadrome Info","Monoblos Info","Diablos Info","Gravios Info","Basarios Info","Kirin Info","Lao-Shan Info","Fatalis Info","Garuga Info","Steel Egg",
"Silver Egg","Golden Egg","Map","First-aid Med.","Ration","Portable Spit","Mini Whetstone","Tranq Bomb","Ballista S","Cannon S",
"Wyvern","Wyvern Egg","Herbivore Egg","Sootstone Ore","Quartz Ore","Powderstone","Disk S","Antidote S","Dung S","Gravios Jewel",
"Gravios Jewel","Blos Jewel","Blos Jewel","Rathian Jewel","Rathian Jewel","Plesioth Jewel","Plesioth Jewel","Rathalos Jewel","Rathalos Jewel","SearingJewelRock",
"SearingJewelRock","Dragon Fossil","Dragon Fossil","Prizm Egg","Prizm Egg","Stalactite Egg","Stalactite Egg","Amber Egg","Amber Egg","Lava Springs Egg",
"Lava Springs Egg","Wyvern Fossil","Wyvern Fossil","Swamp Pea","Swamp Pea","Giant Quail Egg","Giant Quail Egg","Hard Dragonrock","Hard Dragonrock","Dragonrock",
"Dragonrock","Gravios Giblets","Blos Heart","Rathian Chops","Plesioth Filet","Rathalos Tongue","Gravios Wingtip","Blos Sirloin","Rathian Roast","Fatty Plesioth",
"Rathalos Liver","Purple Crest","Orange Crest","Red Crest","Dragonite (L)","Dragonite (M)","Dragonite (S)","MelyneTreasurBrl","Foreign Currency","Felyne Flute",
"Rich Spiderweb","Vivacious Plant","Vitamin Grass","Queen Cactus","Rascal Wheat","Peach Clover","Energy Plant","Romantic Shroom","Long Mushroom","Charisma Shroom",
"Glamour Shroom","Skin Care Shroom","Layered Mushroom","Flaming Bean","Desert Lotusroot","Writhe Nut","Melonberry","King Speartuna","Volcano Mackerel","FlamingPondSmelt",
"Magma Trout","TannedGoldenfish","Feudal Tuna","Merchant Sardine","Geisha Arrowana","Latin Tuna","Goldendrome","Messengerfish","Jewel Fragment","Searing Diamond",
"Zealous Ruby","Charming Crystal","Zealous Emerald","Minagarde Night","Meteorite","Power Pebble","Star Fragment","Fireworks Stone","Maiden Termite","Desert Strider",
"Madame Cricket","Killer Beetle","Designer Locust","Scorpion Beetle","Golden Butterfly","Mansion Crab","Tuxedo Beetle","Longleg Bagworm","King Earthworm"
];

const F1_MONSTER_LIST = [
"NO DATA","Rathian","Fatalis","Kelbi","Mosswine","Bullfango","Yian Kut-Ku","Lao-Shan Lung","Cephadrome","Felyne",
"Veggie Elder","Rathalos","Aptonoth","Genprey","Diablos","Khezu","Velociprey","Gravios","Cat Cart","Vespoid",
"Gypceros","Plesioth","Basarios","Melynx","Hornetaur","Apceros","Monoblos","Velocidrome","Gendrome","Rocks",
"Ioprey","Iodrome","Poogie","Kirin","Cephalos","Giaprey","Crimson Fatalis","Pink Rathian","Blue Yian Kut-Ku","Purple Gypceros",
"Yian Garuga","Silver Rathalos","Gold Rathian","Black Diablos","White Monoblos","Red Khezu","Green Plesioth","Black Gravios","Pink Basarios","Azure Rathalos",
"Ashen Lao-Shan Lung"
];

const F1_ITEM_PAIRS = F1_ITEM_LIST.map((n,i) => [i,n]);
const F1_MONSTER_PAIRS = F1_MONSTER_LIST.map((n,i) => [i,n]);

const F1_BREAK_PARTS = {
  1:  [[0x02,'Head'],[0x03,'Tail']],
  2:  [[0x0B,'Head'],[0x0C,'Body'],[0x0D,'Wing'],[0x0E,'Tail'],[0x0F,'Leg']],
  6:  [[0xF9,'Break 1'],[0xFB,'Break 2'],[0xFD,'Break 3'],[0xFE,'Break 4'],[0xFF,'Break 5'],[0x100,'Break 6'],[0x101,'Break 7'],[0x103,'Break 8'],[0x104,'Break 9'],[0x106,'Break 10']],
  7:  [[0x10,'Body'],[0x11,'Back'],[0x12,'Head'],[0x13,'Tail'],[0x14,'Leg']],
  8:  [[0x33,'Break 1'],[0x35,'Break 2'],[0x37,'Break 3'],[0x39,'Break 4']],
  11: [[0x04,'Head'],[0x05,'Tail']],
  14: [[0x04,'Horn'],[0x05,'Tail']],
  15: [[0x06,'Head'],[0x07,'Body'],[0x08,'Wing'],[0x09,'Tail'],[0x0A,'Leg']],
  17: [[0x94,'Break 1'],[0x95,'Break 2'],[0x96,'Break 3'],[0x97,'Break 4'],[0x98,'Break 5'],[0x99,'Break 6'],[0x9A,'Break 7'],[0x9B,'Break 8'],[0x9C,'Break 9'],[0x9D,'Break 10']],
  20: [[0x15,'Head'],[0x16,'Crest'],[0x17,'Body'],[0x18,'Tail'],[0x19,'Wing']],
  21: [[0x1A,'Head'],[0x1B,'Body'],[0x1C,'Fin'],[0x1D,'Tail'],[0x1E,'Leg']],
  22: [[0x1F,'Head'],[0x20,'Body'],[0x21,'Wing'],[0x22,'Belly'],[0x23,'Tail']],
  26: [[0x04,'Horn'],[0x05,'Tail']],
  27: [[0x04,'Horn'],[0x05,'Tail']],
  28: [[0x02,'Head'],[0x03,'Tail']],
  31: [[0x02,'Head'],[0x03,'Tail']],
  36: [[0x24,'Head'],[0x25,'Chest'],[0x26,'Belly'],[0x27,'Tail'],[0x28,'Wing']],
  37: [[0x02,'Head'],[0x03,'Tail']],
  38: [[0x06,'Head'],[0x07,'Body']],
  39: [[0x15,'Head'],[0x16,'Crest']],
  40: [[0x29,'Head'],[0x2A,'Chest'],[0x2B,'Belly'],[0x2C,'Tail'],[0x2D,'Wing']],
  41: [[0x04,'Head'],[0x05,'Tail']],
  42: [[0x02,'Head'],[0x03,'Tail']],
  43: [[0x04,'Horn'],[0x05,'Tail']],
  44: [[0x04,'Horn'],[0x05,'Tail']],
  45: [[0x06,'Head'],[0x07,'Body']],
  47: [[0x94,'Break 1'],[0x95,'Break 2'],[0x96,'Break 3'],[0x97,'Break 4'],[0x98,'Break 5']],
  49: [[0x04,'Head'],[0x05,'Tail']],
  50: [[0x10,'Body'],[0x11,'Back'],[0x12,'Head'],[0x13,'Tail'],[0x14,'Leg']],
};

const F1_MAPS = [
  "Fort","Village","Forest & Hills","Desert (Day)","Swamp (Day)",
  "Volcano (Day)","Jungle (Day)","Schrade","Battleground","Arena","Great Arena"
];

const F1_AREA_IDS = {
  0x00:"Empty Room",0x01:"Jungle 3",0x02:"Jungle 1",0x03:"Jungle 7",0x04:"Jungle Camp",0x05:"Jungle 5",
  0x06:"Swamp 3",0x07:"Desert Secret",0x08:"Battlegrounds Camp",0x09:"Swamp 5",0x0A:"Fortress Camp",
  0x0B:"Fortress 4",0x0C:"Fortress 5",0x0D:"Tavern",0x0E:"Fortress 1",0x10:"Swamp 1",0x11:"Farm",
  0x12:"Jungle 4",0x13:"Jungle 6",0x14:"Schrade Camp",0x15:"Forest & Hills Camp",0x16:"Jungle 9",
  0x17:"Jungle 10",0x19:"Schrade 1",0x1A:"Jungle 8",0x1C:"Fortress 3",0x1E:"Fortress 2",0x1F:"Fortress 6",
  0x20:"Forest & Hills 6",0x21:"Forest & Hills 3",0x22:"Forest & Hills 10",0x23:"Forest & Hills 8",
  0x24:"Forest & Hills 9",0x25:"Forest & Hills 4",0x26:"Forest & Hills 2",0x27:"Forest & Hills 1",
  0x28:"Forest & Hills 5",0x29:"Forest & Hills 7",0x2A:"Forest & Hills 11",0x2B:"Forest & Hills 12",
  0x2C:"Swamp 4",0x2D:"Desert 2",0x2E:"Jungle 2",0x2F:"Desert 6",0x30:"Desert 9",0x31:"Desert 8",
  0x32:"Desert Camp",0x33:"Desert 1",0x34:"Desert 4",0x35:"Desert 10",0x36:"Desert 5",0x37:"Desert 11",
  0x38:"Desert 7",0x39:"Desert 3",0x3A:"Volcano 2",0x3B:"Volcano 4",0x3C:"Volcano 5",0x3D:"Volcano Camp",
  0x3E:"Volcano 8",0x3F:"Volcano 1",0x40:"Volcano 3",0x41:"Volcano 6",0x42:"Volcano 7",0x43:"Swamp Camp",
  0x44:"Swamp 2",0x45:"Swamp 9",0x46:"Swamp 8",0x47:"Swamp 10",0x48:"Swamp 6",0x49:"Swamp 11",
  0x4A:"Swamp Secret",0x4B:"Swamp 7",
  0x4C:"Tavern (Center)",0x56:"Home",0x57:"Kokoto Village",
  0x58:"Battlegrounds 1",0x59:"Arena Camp",0x5A:"Big Arena 1",0x5B:"Small Arena 1"
};

function f1AreaName(id){ return F1_AREA_IDS[id] || ('Area 0x'+id.toString(16).toUpperCase()); }

const F1_MAP_AREAS = {
  0: [0x0A,0x0E,0x1E,0x1C,0x0B,0x0C,0x1F],
  1: [0x0D,0x11,0x4C,0x56,0x57],
  2: [0x15,0x27,0x26,0x21,0x25,0x28,0x20,0x29,0x23,0x24,0x22,0x2A,0x2B],
  3: [0x32,0x33,0x2D,0x39,0x34,0x36,0x2F,0x38,0x31,0x30,0x35,0x37,0x07],
  4: [0x43,0x10,0x44,0x06,0x2C,0x09,0x48,0x4B,0x46,0x45,0x47,0x49,0x4A],
  5: [0x3D,0x3F,0x3A,0x40,0x3B,0x3C,0x41,0x42,0x3E],
  6: [0x04,0x02,0x2E,0x01,0x12,0x05,0x13,0x03,0x1A,0x16,0x17],
  7: [0x14,0x19],
  8: [0x08,0x58],
  9: [0x59,0x5B],
  10:[0x59,0x5A],
};

// ── MODEL ────────────────────────────────────────────────────────────────────
var f1Model = null;

function importF1FromJSON(obj){
  const qi = obj.questInfo || {};
  const s = obj.strings || {};
  f1Model = {
    questTypeFlagsPtr:0x3C, loadedStagesPtr:0, supplyBoxPtr:0, rewardPtr:0,
    fixedInfoPtr:0, questAreaPtr:0, largeMonsterPtr:0, gatherPtr:0, someStringsPtr:0,
    unk1C:0, unk28:0, hrp:qi.hrp||0, hrpSwitch:0, bossSize:qi.bossSize||100,
    difficulty:qi.difficulty||0, arrivePos:qi.arrivePos||0, sizeMulti:qi.sizeMulti||0,
    supplyMode:qi.supplyMode||0, supplyCond:qi.supplyCond||0, supplyCondQty:qi.supplyCondQty||0,
    qtype:qi.type||1, bgSound:qi.bgSound||0, stars:qi.stars||1,
    fee:qi.fee||0, reward:qi.reward||0, penalty:qi.penalty||0,
    timeTicks:qi.timeTicks||(qi.timeMinutes?qi.timeMinutes*1800:90000),
    mapId:qi.mapId||0, specCond:qi.specCond||0, qnum:qi.questNumber||0,
    taskContentPtr:0, fixedStatus:0, fixedUnk:0,
    name:s.name||'', success:s.success||'', failure:s.failure||'', desc:s.description||'',
    hints:s.hints||[],
    supply:(obj.supply||[]).map(x=>({item:x.itemId!==undefined?x.itemId:(x.item||0), qty:x.qty||1})),
    rewards:(obj.rewards||[]).map(b=>({cond:b.condition!==undefined?b.condition:(b.cond||0), items:(b.items||[]).map(i=>({prob:i.probability!==undefined?i.probability:(i.prob||0), item:i.itemId!==undefined?i.itemId:(i.item||0), qty:i.qty||1}))})),
    bossDetails:(obj.bossDetails||[]).map(b=>({id:b.id||0, state:b.state||0, qty:b.qty||1, pad1:b.pad1||0, pad2:b.pad2||0, area:b.area||0, pad:new Array(20).fill(0), orient:b.orient||0, x:b.x||0, z:b.z||0, y:b.y||0, tail:new Array(16).fill(0)})),
    bossIds:(obj.bossIds||['0xFFFFFFFF','0xFFFFFFFF','0xFFFFFFFF','0xFFFFFFFF']).map(x=>x==='0xFFFFFFFF'||x===-1?0xFFFFFFFF:(x>>>0)),
    smallInitial:(obj.smallMonsters?.initial)||[], smallChange:(obj.smallMonsters?.change)||[],
    gatherAreas:(obj.gathering||[]).map(a=>({areaId:a.areaId||0, ptr:0, points:(a.points||[]).map(p=>({x:p.x||0,y:p.y||0,z:p.z||0,range:p.range||0,collectId:p.collectId||0,freqLimit:p.freqLimit||0,type:p.type||0,unk:p.unk||0}))})),
    fixedEntries:obj.fixedEntries||[],
    bossSkip:new Uint8Array(8),
    stages:[{raw:new Uint8Array(16)},{raw:new Uint8Array(16)},{raw:new Uint8Array(16)},{raw:new Uint8Array(16)}],
    langTexts:(()=>{
      if(!obj.euLanguages) return {};
      const nameToIdx={German:2,French:3,Spanish:4,Italian:5};
      const out={};
      for(const k in obj.euLanguages){ const idx=nameToIdx[k]; if(idx!==undefined) out[idx]=obj.euLanguages[k]; }
      return out;
    })(),
  };
  D = serializeF1(f1Model);
  populateF1(D);
}

function f1BuildMapSelect(){
  const sel = document.getElementById('f1-mapid');
  if(!sel) return;
  sel.innerHTML = F1_MAPS.map((n,i)=>`<option value="${i}">${i} – ${n}</option>`).join('');
}

function f1MonsterOpts(){
  return F1_MONSTER_LIST.map((n,i)=>`<option value="${i}">${i} – ${n}</option>`).join('');
}

function f1ItemOpts(){
  return F1_ITEM_LIST.map((n,i)=>`<option value="${i}">${i} – ${n}</option>`).join('');
}

// ── BINARY HELPERS (local aliases) ───────────────────────────────────────────
function _r8(d,o){ return d[o]; }
function _r16(d,o){ return d[o]|(d[o+1]<<8); }
function _r32(d,o){ return (d[o]|(d[o+1]<<8)|(d[o+2]<<16)|(d[o+3]<<24))>>>0; }
function _rf32(d,o){ const b=new ArrayBuffer(4); const u=new Uint8Array(b); u[0]=d[o];u[1]=d[o+1];u[2]=d[o+2];u[3]=d[o+3]; return new DataView(b).getFloat32(0,true); }
function _rs(d,o){
  let end=o; while(end<d.length&&d[end]) end++;
  const slice = d.slice(o,end);
  try { return new TextDecoder('shift-jis').decode(slice); }
  catch(e){ let s=''; for(let i=0;i<slice.length;i++) s+=String.fromCharCode(slice[i]); return s; }
}

// ── PARSER ───────────────────────────────────────────────────────────────────
function parseF1(d){
  const m = {};
  m.origD = new Uint8Array(d);
  // Header pointers
  m.questTypeFlagsPtr = _r32(d,0x00);
  m.loadedStagesPtr   = _r32(d,0x04);
  m.supplyBoxPtr      = _r32(d,0x08);
  m.rewardPtr         = _r32(d,0x0C);
  m.fixedInfoPtr      = _r32(d,0x10);
  m.questAreaPtr      = _r32(d,0x14);
  m.largeMonsterPtr   = _r32(d,0x18);
  m.unk1C             = _r32(d,0x1C);
  m.gatherPtr         = _r32(d,0x20);
  m.someStringsPtr    = _r32(d,0x24);
  m.unk28             = _r32(d,0x28);
  m.hrp               = _r32(d,0x2C);
  m.hrpSwitch         = _r32(d,0x30);
  m.bossSize          = _r16(d,0x34);
  m.difficulty        = _r8(d,0x36);
  m.arrivePos         = _r8(d,0x37);
  m.sizeMulti         = _r8(d,0x38);
  m.supplyMode        = _r8(d,0x39);
  m.supplyCond        = _r8(d,0x3A);
  m.supplyCondQty     = _r8(d,0x3B);

  // Quest Info section
  const qi = m.questTypeFlagsPtr;
  m.qtype      = _r8(d,qi);
  m.bgSound    = _r8(d,qi+1);
  m.stars      = _r16(d,qi+2);
  m.fee        = _r32(d,qi+4);
  m.reward     = _r32(d,qi+8);
  m.penalty    = _r32(d,qi+12);
  m.timeTicks  = _r32(d,qi+16);
  m.mapId      = _r32(d,qi+20);
  m.taskContentPtr = _r32(d,qi+24);
  m.specCond   = _r16(d,qi+28);
  m.qnum       = _r16(d,qi+30);

  // Strings (double pointer chain)
  const tcPtr = m.taskContentPtr;
  const commPtr = _r32(d,tcPtr);
  m.commPtr = commPtr;
  m.strNamePtr    = _r32(d,commPtr);
  m.strSuccessPtr = _r32(d,commPtr+4);
  m.strFailPtr    = _r32(d,commPtr+8);
  m.strDescPtr    = _r32(d,commPtr+12);
  m.name    = _rs(d,m.strNamePtr);
  m.success = _rs(d,m.strSuccessPtr);
  m.failure = _rs(d,m.strFailPtr);
  m.desc    = _rs(d,m.strDescPtr);

  // Language pointer table (7 entries starting at tcPtr)
  m.langTable = [];
  for(let i=0;i<7;i++) m.langTable.push(_r32(d, tcPtr + i*4));
  m.langTexts = {};
  for(let i=0;i<7;i++){
    const cp = m.langTable[i];
    if(cp !== commPtr && cp > 0 && cp+16 <= d.length){
      const sp = [_r32(d,cp), _r32(d,cp+4), _r32(d,cp+8), _r32(d,cp+12)];
      m.langTexts[i] = {
        name: sp[0]<d.length ? _rs(d,sp[0]) : '',
        success: sp[1]<d.length ? _rs(d,sp[1]) : '',
        failure: sp[2]<d.length ? _rs(d,sp[2]) : '',
        desc: sp[3]<d.length ? _rs(d,sp[3]) : ''
      };
    }
  }

  // Loaded stages (4 × 16 bytes)
  m.stages = [];
  const ls = m.loadedStagesPtr;
  for(let i=0;i<4;i++){
    const off = ls + i*16;
    m.stages.push({ areaId: _r32(d,off), raw: Array.from(d.slice(off,off+16)) });
  }

  // Supply items
  m.supply = [];
  let so = m.supplyBoxPtr;
  while(so+3 < d.length){
    const item = _r16(d,so), qty = _r16(d,so+2);
    if(item === 0) break;
    m.supply.push({item,qty});
    so += 4;
  }

  // Rewards — terminated by cond=0x0000FFFF
  m.rewards = [];
  let ro = m.rewardPtr;
  while(ro+7 < d.length){
    const cond = _r32(d,ro);
    if((cond & 0xFFFF) === 0xFFFF) break;
    const bptr = _r32(d,ro+4);
    const items = [];
    if(bptr && bptr < d.length){
      let bo = bptr;
      while(bo+5 < d.length){
        const prob = _r16(d,bo);
        if(prob === 0xFFFF || prob === 0) break;
        const itm = _r16(d,bo+2), qty = _r16(d,bo+4);
        items.push({prob,item:itm,qty});
        bo += 6;
      }
    }
    m.rewards.push({cond,items});
    ro += 8;
  }

  // Fixed info
  m.fixedStatus = _r32(d,m.fixedInfoPtr);
  m.fixedUnk    = _r32(d,m.fixedInfoPtr+4);
  m.fixedEntries = [];
  let fo = m.fixedInfoPtr + 8;
  for(let i=0;i<25;i++){
    const type = _r16(d,fo);
    if(type === 0xFFFF) break;
    const raw = Array.from(d.slice(fo,fo+8));
    m.fixedEntries.push({type, raw});
    fo += 8;
  }

  // Small monsters
  m.smallInitial = parseF1SmallMon(d, m.questAreaPtr);
  const smChangePtr = _r32(d, m.questAreaPtr+4);
  m.smallChange = smChangePtr ? parseF1SmallMon(d, m.questAreaPtr, true) : [];

  // Boss
  parseBoss(d, m);

  // Gathering
  parseGather(d, m);

  // Hint strings
  parseHints(d, m);

  f1Model = m;
  return m;
}

function parseF1SmallMon(d, basePtr, isChange){
  const ptr = isChange ? _r32(d,basePtr+4) : _r32(d,basePtr);
  if(!ptr || ptr >= d.length) return [];
  const areas = [];
  let o = ptr;
  while(o+15 < d.length){
    const areaId = _r32(d,o);
    if((areaId & 0xFFFF) === 0 && _r16(d,o) === 0) break;
    const skip4 = _r32(d,o+4);
    const spawnIdsPtr = _r32(d,o+8);
    const detailsPtr = _r32(d,o+12);
    const spawnIds = [];
    if(spawnIdsPtr && spawnIdsPtr < d.length){
      for(let i=0;i<4;i++) spawnIds.push(_r32(d,spawnIdsPtr+i*4));
    }
    const details = [];
    if(detailsPtr && detailsPtr < d.length){
      let dp = detailsPtr;
      while(dp+59 <= d.length){
        const id = _r16(d,dp);
        if(id === 0xFFFF) break;
        details.push({
          id, state:_r16(d,dp+2), qty:_r16(d,dp+4), activation:_r16(d,dp+6),
          pad: Array.from(d.slice(dp+8,dp+28)),
          orient:_r32(d,dp+28), x:_rf32(d,dp+32), z:_rf32(d,dp+36), y:_rf32(d,dp+40),
          tail: Array.from(d.slice(dp+44,dp+60))
        });
        dp += 60;
      }
    }
    areas.push({areaId, skip4, spawnIdsPtr, detailsPtr, spawnIds, details});
    o += 16;
  }
  return areas;
}

function parseBoss(d, m){
  const bp = m.largeMonsterPtr;
  m.bossSkip = Array.from(d.slice(bp, bp+8));
  m.bossSpawnPtr = _r32(d,bp+8);
  m.bossDetailsPtr = _r32(d,bp+12);
  m.bossIds = [];
  if(m.bossSpawnPtr && m.bossSpawnPtr < d.length){
    for(let i=0;i<4;i++) m.bossIds.push(_r32(d,m.bossSpawnPtr+i*4));
  }
  m.bossDetails = [];
  if(m.bossDetailsPtr && m.bossDetailsPtr < d.length){
    let dp = m.bossDetailsPtr;
    while(dp+59 <= d.length){
      const id = _r16(d,dp);
      if(id === 0xFFFF) break;
      m.bossDetails.push({
        id, state:_r16(d,dp+2), qty:_r8(d,dp+4), pad1:_r8(d,dp+5), pad2:_r8(d,dp+6),
        area:_r8(d,dp+7),
        pad: Array.from(d.slice(dp+8,dp+28)),
        orient:_r32(d,dp+28), x:_rf32(d,dp+32), z:_rf32(d,dp+36), y:_rf32(d,dp+40),
        tail: Array.from(d.slice(dp+44,dp+60))
      });
      dp += 60;
    }
  }
}

function parseGather(d, m){
  const gp = m.gatherPtr;
  m.gatherUnk1 = _r32(d,gp);
  m.gatherAreas = [];
  const tableStart = gp + 4;
  for(let i=0;i<92;i++){
    const o = tableStart + i*4;
    if(o+3 >= d.length) break;
    const areaPtr = _r32(d,o);
    const points = [];
    if(areaPtr > 0 && areaPtr + 23 <= d.length){
      let pp = areaPtr;
      for(let j=0;j<50;j++){
        if(pp+23 > d.length) break;
        const raw32 = _r32(d,pp);
        if(raw32 === 0xBF800000) break;
        points.push({
          x:_rf32(d,pp), y:_rf32(d,pp+4), z:_rf32(d,pp+8), range:_rf32(d,pp+12),
          collectId:_r16(d,pp+16), freqLimit:_r16(d,pp+18), type:_r16(d,pp+20), unk:_r16(d,pp+22)
        });
        pp += 24;
      }
    }
    m.gatherAreas.push({areaId:i, ptr:areaPtr, points});
  }
}

function parseHints(d, m){
  const sp = m.someStringsPtr;
  const innerPtr = _r32(d,sp);
  m.hints = [];
  if(!innerPtr || innerPtr >= d.length) return;
  let o = innerPtr;
  for(let i=0;i<90;i++){
    if(o+3 >= d.length) break;
    const strPtr = _r32(d,o);
    if(strPtr < 96 || strPtr >= d.length) break;
    m.hints.push(_rs(d,strPtr));
    o += 4;
  }
}

// ── POPULATE UI ──────────────────────────────────────────────────────────────
function populateF1(d){
  const m = f1Model; if(!m) return;
  const $ = id => document.getElementById(id);

  $('f1-qnum').value = m.qnum;
  $('f1-star').value = m.stars;
  const qtSel = $('f1-qtype');
  if (![...qtSel.options].some(o => +o.value === m.qtype)) {
    const opt = document.createElement('option');
    opt.value = m.qtype; opt.textContent = '0x'+m.qtype.toString(16).toUpperCase().padStart(2,'0')+' – Custom';
    qtSel.appendChild(opt);
  }
  qtSel.value = m.qtype;
  $('f1-bgsound').value = '0x'+m.bgSound.toString(16).toUpperCase().padStart(2,'0');
  f1BuildMapSelect();
  $('f1-mapid').value = m.mapId;
  $('f1-speccond').value = m.specCond;
  $('f1-fee').value = m.fee;
  $('f1-reward').value = m.reward;
  $('f1-penalty').value = m.penalty;
  $('f1-hrp').value = m.hrp;
  $('f1-hrpswitch').value = '0x'+m.hrpSwitch.toString(16).toUpperCase().padStart(8,'0');
  $('f1-time').value = (m.timeTicks / 1800).toFixed(1).replace(/\.0$/,'');
  $('f1-time-raw').textContent = '(raw: '+m.timeTicks+' ticks)';
  $('f1-difficulty').value = m.difficulty;
  $('f1-arrive').value = m.arrivePos;
  $('f1-bosssize').value = m.bossSize;
  $('f1-sizemulti').value = m.sizeMulti;
  $('f1-supplymode').value = m.supplyMode;
  $('f1-supplycond').value = m.supplyCond;
  $('f1-supplycondqty').value = m.supplyCondQty;

  // Strings
  $('f1-name').value = m.name;
  $('f1-success').value = m.success;
  $('f1-failure').value = m.failure;
  $('f1-desc').value = m.desc;

  // Hints
  f1RenderHints();

  // Unknown header fields
  $('f1-fixedstatus').value = '0x'+m.fixedStatus.toString(16).toUpperCase().padStart(8,'0');
  $('f1-fixedunk').value = '0x'+m.fixedUnk.toString(16).toUpperCase().padStart(8,'0');
  $('f1-unk1c').value = '0x'+m.unk1C.toString(16).toUpperCase().padStart(8,'0');
  $('f1-unk28').value = '0x'+m.unk28.toString(16).toUpperCase().padStart(8,'0');

  // Pointers
  $('f1-ptrs-body').innerHTML = [
    `[0x00] questTypeFlagsPtr = 0x${m.questTypeFlagsPtr.toString(16).toUpperCase()}`,
    `[0x04] loadedStagesPtr   = 0x${m.loadedStagesPtr.toString(16).toUpperCase()}`,
    `[0x08] supplyBoxPtr      = 0x${m.supplyBoxPtr.toString(16).toUpperCase()}`,
    `[0x0C] rewardPtr         = 0x${m.rewardPtr.toString(16).toUpperCase()}`,
    `[0x10] fixedInfoPtr      = 0x${m.fixedInfoPtr.toString(16).toUpperCase()}`,
    `[0x14] questAreaPtr      = 0x${m.questAreaPtr.toString(16).toUpperCase()}`,
    `[0x18] largeMonsterPtr   = 0x${m.largeMonsterPtr.toString(16).toUpperCase()}`,
    `[0x20] gatherPtr         = 0x${m.gatherPtr.toString(16).toUpperCase()}`,
    `[0x24] someStringsPtr    = 0x${m.someStringsPtr.toString(16).toUpperCase()}`,
  ].join('<br>');

  // Supply
  renderF1Supply();

  // Rewards
  renderF1Rewards();

  // Targets / Fixed info
  renderF1Targets();

  // Boss
  renderF1Boss();

  // Small monsters
  renderF1SmallMon();

  // Gathering
  renderF1Gather();

  // Training
  renderF1Training();
}

// ── SUPPLY RENDERING (F2-style) ─────────────────────────────────────────────
function f1AppendSupplyRow(tb, idx, itemId, qty){
  const tr = document.createElement('tr');
  const idxTd = document.createElement('td');
  idxTd.style.cssText = 'color:var(--muted);font-family:var(--mono)';
  idxTd.textContent = idx;
  const itemTd = document.createElement('td');
  const pick = makeItemPick('f1s-'+idx, itemId, {});
  itemTd.appendChild(pick);
  const qtyTd = document.createElement('td');
  qtyTd.innerHTML = `<input type="number" class="f1s-qty" value="${qty}" min="1" max="99">`;
  const delTd = document.createElement('td');
  delTd.style.whiteSpace = 'nowrap';
  delTd.innerHTML = `<button class="btn-dup" title="Duplicate" onclick="f1DupSupplyRow(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="f1RemoveRow(this)">✕</button>`;
  tr.appendChild(idxTd); tr.appendChild(itemTd); tr.appendChild(qtyTd); tr.appendChild(delTd);
  tb.appendChild(tr);
}

function renderF1Supply(){
  const tb = document.getElementById('f1-supply-tbody');
  tb.innerHTML = '';
  f1Model.supply.forEach((s,i) => f1AppendSupplyRow(tb, i, s.item, s.qty));
}

function f1AddSupplyRow(){
  const tb = document.getElementById('f1-supply-tbody');
  f1AppendSupplyRow(tb, tb.querySelectorAll('tr').length, 1, 1);
  f1Renumber(tb);
  markDirty();
}

function f1DupSupplyRow(btn){
  const tr = btn.closest('tr'), tb = tr.closest('tbody');
  const item = readItemPick(tr) & 0xFFFF;
  const qty = parseInt(tr.querySelector('.f1s-qty').value) || 1;
  const idx = Array.from(tb.children).indexOf(tr) + 1;
  f1AppendSupplyRow(tb, idx, item, qty);
  tb.insertBefore(tb.lastElementChild, tr.nextSibling);
  f1Renumber(tb); markDirty();
}

function f1RemoveRow(btn){ btn.closest('tr').remove(); f1Renumber(btn.closest('tbody')); markDirty(); }
function f1Renumber(tb){ tb.querySelectorAll('tr').forEach((tr,i)=>{ tr.cells[0].textContent=i; }); }

// ── REWARDS RENDERING (F2-style) ────────────────────────────────────────────
function f1MakeRewardRow(ri, prob, itemId, qty){
  const tr = document.createElement('tr');
  const riTd = document.createElement('td');
  riTd.style.cssText = 'color:var(--muted);font-family:var(--mono);width:28px';
  riTd.textContent = ri;
  const probTd = document.createElement('td');
  probTd.innerHTML = `<input type="number" class="f1r-prob" value="${prob}" min="0" max="100" style="width:70px">`;
  const itemTd = document.createElement('td');
  itemTd.appendChild(makeItemPick('f1r-'+ri, itemId, {}));
  const qtyTd = document.createElement('td');
  qtyTd.innerHTML = `<input type="number" class="f1r-qty" value="${qty}" min="1" max="99" style="width:60px">`;
  const delTd = document.createElement('td');
  delTd.style.whiteSpace = 'nowrap';
  delTd.innerHTML = `<button class="btn-dup" title="Duplicate" onclick="f1DupRewardRow(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="f1RemoveRewardRow(this)">✕</button>`;
  tr.appendChild(riTd); tr.appendChild(probTd); tr.appendChild(itemTd); tr.appendChild(qtyTd); tr.appendChild(delTd);
  return tr;
}

function renderF1Rewards(){
  const rb = document.getElementById('f1-rewards-body');
  rb.innerHTML = '';
  if(!f1Model.rewards.length){
    rb.innerHTML = '<div style="padding:12px;color:var(--muted)">No reward blocks found.</div>';
    f1BuildRewardAddOptions();
    return;
  }
  f1Model.rewards.forEach((blk,bi) => {
    const div = document.createElement('div');
    div.dataset.rblock = bi;
    div.style.cssText = 'padding:12px;border-bottom:1px solid var(--border)';
    const hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:8px';
    let condLabel = '';
    if(blk.cond === 0x8000) condLabel = ' (Base Reward)';
    else if(blk.cond === 1) condLabel = ' (Subquest)';
    else {
      const bossId = f1Model.bossIds ? f1Model.bossIds[0] : -1;
      const parts = F1_BREAK_PARTS[bossId];
      if(parts){ const p = parts.find(([c])=>c===blk.cond); if(p) condLabel = ` (Break: ${p[1]})`; }
    }
    hdr.innerHTML =
      `<span style="font-family:var(--mono);font-size:11px;color:var(--muted)">Block ${bi} — cond:</span>`+
      `<input type="text" class="f1rb-cond" value="0x${blk.cond.toString(16).padStart(8,'0').toUpperCase()}" style="font-family:var(--mono);width:130px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:3px 7px;font-size:13px">`+
      `<span style="font-size:11px;color:var(--accent)">${condLabel}</span>`+
      `<button class="btn-danger" onclick="f1RemoveRewardBlock(this)">✕ Delete Block</button>`;
    div.appendChild(hdr);
    const tbl = document.createElement('table'); tbl.className = 'tbl';
    tbl.innerHTML = '<thead><tr><th>#</th><th>Prob %</th><th>Item ID (hex)</th><th>Qty</th><th></th></tr></thead>';
    const tbody = document.createElement('tbody'); tbody.className = 'f1rb-entries';
    blk.items.forEach((r,ri) => tbody.appendChild(f1MakeRewardRow(ri, r.prob, r.item, r.qty)));
    tbl.appendChild(tbody); div.appendChild(tbl);
    const addBtn = document.createElement('button');
    addBtn.className = 'btn-add'; addBtn.style.marginTop = '8px';
    addBtn.textContent = '+ Add Entry';
    addBtn.onclick = () => { f1AddRewardEntry(tbody); };
    div.appendChild(addBtn);
    rb.appendChild(div);
  });
  f1BuildRewardAddOptions();
}

function f1DupRewardRow(btn){
  const tr = btn.closest('tr'), tb = tr.closest('tbody');
  const prob = parseInt(tr.querySelector('.f1r-prob').value) || 0;
  const item = readItemPick(tr) & 0xFFFF;
  const qty = parseInt(tr.querySelector('.f1r-qty').value) || 1;
  const clone = f1MakeRewardRow(0, prob, item, qty);
  tb.insertBefore(clone, tr.nextSibling);
  f1RenumberReward(tb); markDirty();
}

function f1AddRewardEntry(tbody){
  tbody.appendChild(f1MakeRewardRow(tbody.querySelectorAll('tr').length, 10, 1, 1));
  f1RenumberReward(tbody); markDirty();
}

function f1RemoveRewardRow(btn){
  const tbody = btn.closest('tbody');
  btn.closest('tr').remove();
  f1RenumberReward(tbody); markDirty();
}

function f1RenumberReward(tbody){ tbody.querySelectorAll('tr').forEach((tr,i)=>{ tr.cells[0].textContent=i; }); }

function f1AddRewardBlock(){
  f1CollectRewardsFromUI();
  f1Model.rewards.push({cond:0, items:[{prob:100,item:1,qty:1}]});
  renderF1Rewards(); markDirty();
}

function f1AddSpecialRewardBlock(cond){
  f1CollectRewardsFromUI();
  const existing = new Set(f1Model.rewards.map(b=>b.cond));
  if(existing.has(cond)){ alert('A reward block with this condition already exists.'); return; }
  f1Model.rewards.push({cond, items:[{prob:100,item:1,qty:1}]});
  renderF1Rewards(); markDirty();
}

function f1BuildRewardAddOptions(){
  const sel = document.getElementById('f1-reward-add-select');
  if(!sel) return;
  sel.innerHTML = '';
  sel.innerHTML += '<option value="0x8000">Base Reward (0x8000)</option>';
  sel.innerHTML += '<option value="0x1">Subquest (0x1)</option>';
  const addedConds = new Set();
  const bossIds = f1Model.bossIds ? f1Model.bossIds.filter(id => id !== 0xFFFFFFFF && id !== 0) : [];
  bossIds.forEach(bid => {
    const parts = F1_BREAK_PARTS[bid];
    if(!parts) return;
    const mname = F1_MONSTER_LIST[bid] || ('Monster '+bid);
    parts.forEach(([cond, label]) => {
      if(addedConds.has(cond)) return;
      addedConds.add(cond);
      sel.innerHTML += `<option value="${cond}">Break: ${label} — ${mname} (0x${cond.toString(16)})</option>`;
    });
  });
  // Add all other known break conditions not already listed
  let hasOtherHeader = false;
  Object.entries(F1_BREAK_PARTS).forEach(([mid, parts]) => {
    parts.forEach(([cond, label]) => {
      if(addedConds.has(cond)) return;
      addedConds.add(cond);
      if(!hasOtherHeader){ sel.innerHTML += '<option disabled>── Other Monsters ──</option>'; hasOtherHeader = true; }
      const mname = F1_MONSTER_LIST[parseInt(mid)] || ('Monster '+mid);
      sel.innerHTML += `<option value="${cond}">${mname}: ${label} (0x${cond.toString(16)})</option>`;
    });
  });
  sel.innerHTML += '<option value="custom">Custom condition...</option>';
}

function f1RemoveRewardBlock(btn){
  btn.closest('[data-rblock]').remove();
  document.querySelectorAll('#f1-rewards-body [data-rblock]').forEach((div,i)=>{
    div.dataset.rblock = i;
    div.querySelector('span').textContent = `Block ${i} — cond:`;
  });
  markDirty();
}

function f1CollectRewardsFromUI(){
  const blocks = [];
  document.querySelectorAll('#f1-rewards-body [data-rblock]').forEach(div => {
    const cond = parseInt((div.querySelector('.f1rb-cond').value||'0').replace(/^0x/i,''),16) >>> 0;
    const items = [];
    div.querySelectorAll('.f1rb-entries tr').forEach(tr => {
      const prob = parseInt(tr.querySelector('.f1r-prob').value) || 0;
      const item = readItemPick(tr) & 0xFFFF;
      const qty = parseInt(tr.querySelector('.f1r-qty').value) || 1;
      if(prob > 0 || item > 0) items.push({prob, item, qty});
    });
    blocks.push({cond, items});
  });
  f1Model.rewards = blocks;
}

// ── TARGETS / FIXED INFO (editable, F2-style) ──────────────────────────────
const F1_FIXED_TYPES = {
  0x01:'Slay Ending', 0x02:'Slay Target', 0x04:'Delivery Target', 0x07:'Hint Text',
  0x0B:'Stage Complete', 0x1A:'Special Ending', 0x1C:'Capture Specific', 0x20:'Small Mon Change',
  0x21:'Acquisition Cond', 0x22:'Delivery Ending', 0x23:'Capture Specific', 0x24:'Kill Condition',
  0x27:'Delivery (no end)', 0x2E:'Kill→SM Change', 0x2F:'Time-Up Judgment', 0x30:'Treasure Target'
};

function f1FixedTypeOpts(selected){
  let html = '';
  for(const [val,label] of Object.entries(F1_FIXED_TYPES)){
    const v = parseInt(val);
    html += `<option value="${v}"${v===selected?' selected':''}>0x${v.toString(16).toUpperCase().padStart(2,'0')} – ${label}</option>`;
  }
  if(!F1_FIXED_TYPES[selected]) html += `<option value="${selected}" selected>0x${selected.toString(16).toUpperCase().padStart(2,'0')} – Unknown</option>`;
  return html;
}

function f1MakeTargetRow(ei, entry){
  const tr = document.createElement('tr');
  const r = entry.raw;
  const type = r[0] | (r[1]<<8);
  const targetId = r[2] | (r[3]<<8);
  const qty = r[4] | (r[5]<<8);
  const p2 = r[6] | (r[7]<<8);
  const isDelivery = (type === 0x04 || type === 0x22 || type === 0x27 || type === 0x30);

  const idxTd = document.createElement('td');
  idxTd.style.cssText = 'color:var(--muted);font-family:var(--mono)'; idxTd.textContent = ei;
  const typeTd = document.createElement('td');
  typeTd.innerHTML = `<select class="f1t-type" data-ei="${ei}" onchange="f1TargetTypeChanged(this)">${f1FixedTypeOpts(type)}</select>`;
  const targetTd = document.createElement('td');
  targetTd.className = 'f1t-target-cell';
  if(isDelivery) targetTd.appendChild(makeItemPick('f1t-id-'+ei, targetId));
  else targetTd.appendChild(makeMonsterPick('f1t-id-'+ei, targetId));
  const qtyTd = document.createElement('td');
  qtyTd.innerHTML = `<input type="number" class="f1t-qty" value="${qty}" min="0" max="65535" style="width:60px">`;
  const p2Td = document.createElement('td');
  p2Td.innerHTML = `<input type="number" class="f1t-p2" value="${p2}" min="0" max="65535" style="width:60px">`;
  const rawTd = document.createElement('td');
  rawTd.style.cssText = 'font-family:var(--mono);font-size:11px;color:var(--muted)';
  rawTd.textContent = r.map(b=>b.toString(16).toUpperCase().padStart(2,'0')).join(' ');
  const delTd = document.createElement('td');
  delTd.innerHTML = `<button class="btn-danger" onclick="f1RemoveFixedEntry(this)">✕</button>`;
  tr.append(idxTd, typeTd, targetTd, qtyTd, p2Td, rawTd, delTd);
  return tr;
}

function f1TargetTypeChanged(sel){
  const tr = sel.closest('tr');
  const cell = tr.querySelector('.f1t-target-cell');
  const oldVal = (cell.querySelector('.monster-pick') ? readMonsterPick(cell) : readItemPick(cell)) || 0;
  const type = parseInt(sel.value) || 0;
  const isDelivery = (type === 0x04 || type === 0x22 || type === 0x27 || type === 0x30);
  cell.innerHTML = '';
  if(isDelivery) cell.appendChild(makeItemPick('f1t-x', oldVal));
  else cell.appendChild(makeMonsterPick('f1t-x', oldVal));
  markDirty();
}

function f1SyncHintsFromUI(){
  const hintEls = document.querySelectorAll('.f1-hint');
  f1Model.hints = Array.from(hintEls).map(el => el.value);
}

function f1RenderHints(){
  const $ = id => document.getElementById(id);
  const m = f1Model;
  const hb = $('f1-hints-body');
  hb.innerHTML = '';
  m.hints.forEach((h,i)=>{
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:6px;align-items:flex-start;margin-bottom:6px';
    row.innerHTML = `<div class="f" style="flex:1"><label>Hint ${i}</label><textarea rows="2" class="f1-hint" data-idx="${i}" oninput="markDirty()">${h.replace(/</g,'&lt;')}</textarea></div>`
      + `<button class="btn-danger" style="margin-top:18px" onclick="f1RemoveHint(${i})">✕</button>`;
    hb.appendChild(row);
  });
  if(!m.hints.length) hb.innerHTML = '<p style="color:var(--muted);font-size:12px">No hint strings. Click + Add Hint to create one.</p>';
  const addBtn = document.createElement('button');
  addBtn.className = 'btn-add'; addBtn.style.marginTop = '6px';
  addBtn.textContent = '+ Add Hint'; addBtn.onclick = f1AddHint;
  hb.appendChild(addBtn);
}

function f1AddHint(){
  f1SyncHintsFromUI();
  f1Model.hints.push('');
  f1RenderHints();
  markDirty();
}

function f1RemoveHint(idx){
  f1SyncHintsFromUI();
  f1Model.hints.splice(idx, 1);
  f1RenderHints();
  markDirty();
}

function renderF1Targets(){
  const tb = document.getElementById('f1-targets-tbody');
  if(!tb) return;
  tb.innerHTML = '';
  f1Model.fixedEntries.forEach((e,i) => tb.appendChild(f1MakeTargetRow(i, e)));
}

function f1AddFixedEntry(){
  f1Model.fixedEntries.push({type:0x02, raw:[0x02,0,0,0,1,0,0,0]});
  renderF1Targets(); markDirty();
}

function f1RemoveFixedEntry(btn){
  const tbody = btn.closest('tbody');
  const idx = Array.from(tbody.children).indexOf(btn.closest('tr'));
  f1Model.fixedEntries.splice(idx, 1);
  renderF1Targets(); markDirty();
}

function f1CollectTargetsFromUI(){
  const rows = document.querySelectorAll('#f1-targets-tbody tr');
  f1Model.fixedEntries = [];
  rows.forEach(tr => {
    const type = parseInt(tr.querySelector('.f1t-type').value) || 0;
    const cell = tr.querySelector('.f1t-target-cell');
    const targetId = (cell.querySelector('.monster-pick') ? readMonsterPick(cell) : readItemPick(cell)) || 0;
    const qty = parseInt(tr.querySelector('.f1t-qty')?.value) || 0;
    const p2 = parseInt(tr.querySelector('.f1t-p2')?.value) || 0;
    const raw = [type&0xFF,(type>>8)&0xFF, targetId&0xFF,(targetId>>8)&0xFF, qty&0xFF,(qty>>8)&0xFF, p2&0xFF,(p2>>8)&0xFF];
    f1Model.fixedEntries.push({type, raw});
  });
}

// ── BOSS RENDERING (F2-style, auto-managed IDs) ─────────────────────────────
function f1MakeBossRow(ei, entry){
  const b = entry || {id:0,state:0,qty:1,pad1:0,pad2:0,area:0,pad:new Array(20).fill(0),orient:0,x:0,z:0,y:0,tail:new Array(16).fill(0)};
  const tr = document.createElement('tr');
  const slotTd = document.createElement('td');
  slotTd.style.cssText = 'color:var(--muted);font-family:var(--mono)'; slotTd.textContent = ei;
  const idTd = document.createElement('td');
  idTd.appendChild(makeMonsterPick('f1bd'+ei, b.id));
  tr.appendChild(slotTd); tr.appendChild(idTd);

  const areaOpts = Object.entries(F1_AREA_IDS).map(([k,v])=>{
    const id = parseInt(k);
    return `<option value="${id}"${id===b.area?' selected':''}>0x${id.toString(16).toUpperCase().padStart(2,'0')} – ${v}</option>`;
  }).join('');

  tr.insertAdjacentHTML('beforeend', [
    `<td><input type="text" data-f="state" value="${fmtHex(b.state,2)}" style="font-family:var(--mono)"></td>`,
    `<td><input type="number" data-f="qty" value="${b.qty}" min="0" max="127"></td>`,
    `<td><select data-f="area">${areaOpts}</select></td>`,
    `<td><input type="number" data-f="x" value="${b.x.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-f="z" value="${b.z.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-f="y" value="${b.y.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-f="orient" value="${b.orient & 0xFFFF}" title="Raw orientation value (u16)"></td>`,
    `<td style="white-space:nowrap">`+
      `<button class="btn-dup" title="Duplicate" onclick="f1DupBossDetail(${ei})">⧉</button> `+
      `<button class="btn-danger" title="Delete" onclick="f1DelBossDetail(${ei})">✕</button></td>`,
  ].join(''));
  return tr;
}

function renderF1Boss(){
  const tb = document.getElementById('f1-bossdetail-tbody');
  tb.innerHTML = '';
  const count = f1Model.bossDetails.length;
  f1Model.bossDetails.forEach((b,i) => tb.appendChild(f1MakeBossRow(i, b)));
  const cspan = document.getElementById('f1-boss-count');
  if(cspan){
    cspan.textContent = count + ' monster' + (count!==1?'s':'') + '.';
    if(count > 10) cspan.innerHTML += ' <span style="color:var(--danger)">Warning: >10 may be unstable!</span>';
  }
}

function f1CommitBossFromUI(){
  const rows = document.querySelectorAll('#f1-bossdetail-tbody tr');
  f1Model.bossDetails = [];
  rows.forEach(tr => {
    const pick = tr.querySelector('.monster-pick');
    const id = pick ? readMonsterPick(pick) : 0;
    const g = f => { const el = tr.querySelector(`[data-f="${f}"]`); return el ? el.value : '0'; };
    const state = parseHD(g('state'));
    const qty = parseInt(g('qty')) || 1;
    const area = parseInt(g('area')) || 0;
    const orient = (parseInt(g('orient')) || 0) >>> 0;
    const x = parseFloat(g('x')) || 0;
    const z = parseFloat(g('z')) || 0;
    const y = parseFloat(g('y')) || 0;
    f1Model.bossDetails.push({id, state, qty, pad1:0, pad2:0, area, pad:new Array(20).fill(0), orient, x, z, y, tail:new Array(16).fill(0)});
  });
  // Auto-manage boss IDs from detail entries
  const uniqueIds = [...new Set(f1Model.bossDetails.map(b=>b.id))];
  f1Model.bossIds = [];
  for(let i=0;i<4;i++) f1Model.bossIds.push(i < uniqueIds.length ? uniqueIds[i] : 0xFFFFFFFF);
}

function f1AddBossDetail(){
  f1CommitBossFromUI();
  const template = f1Model.bossDetails.length > 0
    ? {...f1Model.bossDetails[0], pad:new Array(20).fill(0), tail:new Array(16).fill(0)}
    : {id:0,state:0,qty:1,pad1:0,pad2:0,area:0,pad:new Array(20).fill(0),orient:0,x:0,z:0,y:0,tail:new Array(16).fill(0)};
  template.id = 0x1C; template.state = 0; template.qty = 1;
  f1Model.bossDetails.push(template);
  renderF1Boss(); markDirty();
}

function f1DelBossDetail(ei){
  f1CommitBossFromUI();
  f1Model.bossDetails.splice(ei, 1);
  renderF1Boss(); markDirty();
}

function f1DupBossDetail(ei){
  f1CommitBossFromUI();
  if(ei >= f1Model.bossDetails.length) return;
  f1Model.bossDetails.splice(ei+1, 0, {...f1Model.bossDetails[ei], pad:new Array(20).fill(0), tail:new Array(16).fill(0)});
  renderF1Boss(); markDirty();
}

// ── SMALL MONSTER RENDERING (editable, F2-style) ────────────────────────────
function f1MakeSmEntryRow(ci, ai, ei, d){
  const e = d || {id:0, state:0, qty:1, activation:0, pad:new Array(20).fill(0), orient:0, x:0, z:0, y:0, tail:new Array(16).fill(0)};
  const tr = document.createElement('tr');
  const p = `data-cfg="${ci}" data-area="${ai}" data-ei="${ei}"`;
  const idxTd = document.createElement('td');
  idxTd.style.cssText = 'color:var(--muted);font-family:var(--mono)'; idxTd.textContent = ei;
  const idTd = document.createElement('td');
  idTd.appendChild(makeMonsterPick('f1sm'+ci+'_'+ai+'_'+ei, e.id, Object.fromEntries([['data-cfg',ci],['data-area',ai],['data-ei',ei],['data-f','id']])));
  tr.appendChild(idxTd); tr.appendChild(idTd);
  tr.insertAdjacentHTML('beforeend',
    `<td><input type="text" ${p} data-f="state" value="${fmtHex(e.state,2)}" style="font-family:var(--mono)"></td>`+
    `<td><input type="number" ${p} data-f="qty" value="${e.qty}" min="0" max="65535"></td>`+
    `<td><input type="number" ${p} data-f="act" value="${e.activation}" min="0" max="65535"></td>`+
    `<td><input type="number" ${p} data-f="x" value="${e.x.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="z" value="${e.z.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="y" value="${e.y.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="orient" value="${e.orient & 0xFFFF}"></td>`+
    `<td style="white-space:nowrap">`+
      `<button class="btn-dup" title="Duplicate" onclick="f1DupSmEntry(${ci},${ai},${ei})">⧉</button> `+
      `<button class="btn-danger" title="Delete" onclick="f1RemoveSmEntry(${ci},${ai},${ei})">✕</button></td>`
  );
  return tr;
}

function renderF1SmallMon(){
  const wrap = document.getElementById('f1-sm-wrap');
  if(!wrap) return;
  wrap.innerHTML = '';
  const configs = [
    {name:'Initial', data:f1Model.smallInitial},
    {name:'Change', data:f1Model.smallChange}
  ];
  configs.forEach((cfg,ci) => {
    const section = document.createElement('div');
    section.className = 'card'; section.style.marginBottom = '14px';
    section.innerHTML = `<div class="card-hdr">🐾 Small Monsters — ${cfg.name}</div>`;
    if(ci===1){
      section.innerHTML += '<div style="padding:6px 12px;font-size:11px;color:var(--muted);background:var(--bg);border-bottom:1px solid var(--border)">'+
        'The "Change" config activates when a Quest State Logic entry triggers it (see Fixed Info tab):<br>'+
        '&nbsp; 0x20 = Stage Complete → change &nbsp; 0x21 = Acquire item (egg carry) → change &nbsp; 0x2E = Kill N monsters → change</div>';
    }
    if(!cfg.data || !cfg.data.length){
      section.innerHTML += '<div class="note" style="padding:8px 12px">No data for this config set. Add areas below to define alternate spawns.</div>';
      wrap.appendChild(section); return;
    }
    cfg.data.forEach((area, ai) => {
      const aDiv = document.createElement('div');
      aDiv.style.cssText = 'padding:12px;border-bottom:1px solid var(--border)';

      const areaOpts = Object.entries(F1_AREA_IDS).map(([k,v])=>{
        const id = parseInt(k);
        return `<option value="${id}"${id===area.areaId?' selected':''}>0x${id.toString(16).toUpperCase().padStart(2,'0')} – ${v}</option>`;
      }).join('');

      aDiv.innerHTML = `<div style="font-size:11px;color:var(--accent);margin-bottom:8px;display:flex;align-items:center;gap:8px">`+
        `<span style="font-family:var(--mono)">Area ${ai}</span>`+
        `<select class="f1sm-area-id" data-cfg="${ci}" data-area="${ai}" style="font-size:11px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${areaOpts}</select>`+
        `<button class="btn-danger" style="margin-left:auto;font-size:10px" onclick="f1RemoveSmArea(${ci},${ai})">✕ Area</button></div>`;

      const slotNote = document.createElement('div');
      slotNote.className = 'note';
      slotNote.style.cssText = 'font-size:11px;margin-bottom:8px';
      const existingSlotNames = area.spawnIds.filter(s=>s!==0xFFFFFFFF && s!==0).map(s=>F1_MONSTER_LIST[s]||'0x'+s.toString(16));
      slotNote.textContent = 'Species slots (auto-managed): ' + (existingSlotNames.length ? existingSlotNames.join(', ') : 'none yet');
      aDiv.appendChild(slotNote);

      const entLabel = document.createElement('div');
      entLabel.style.cssText = 'font-size:10px;color:var(--muted);font-family:var(--mono);margin:10px 0 4px;letter-spacing:1px;text-transform:uppercase';
      entLabel.textContent = 'Spawn Detail Entries (60 bytes each):';
      aDiv.appendChild(entLabel);

      const entTbl = document.createElement('table'); entTbl.className = 'tbl';
      entTbl.innerHTML = '<thead><tr><th>#</th><th>Monster</th><th>Variant</th><th>Qty</th><th>ActMode</th><th>X</th><th>Z</th><th>Y</th><th>Orientation</th><th></th></tr></thead>';
      const entBody = document.createElement('tbody');
      entBody.dataset.cfg = ci; entBody.dataset.area = ai;
      area.details.forEach((entry, ei) => entBody.appendChild(f1MakeSmEntryRow(ci, ai, ei, entry)));
      entTbl.appendChild(entBody); aDiv.appendChild(entTbl);

      const addBtn = document.createElement('button');
      addBtn.className = 'btn-add'; addBtn.style.cssText = 'margin-top:8px;font-size:11px';
      addBtn.textContent = '+ Add Spawn Entry';
      addBtn.onclick = () => f1AddSmEntry(ci, ai);
      aDiv.appendChild(addBtn);
      section.appendChild(aDiv);
    });
    const addAreaBtn = document.createElement('button');
    addAreaBtn.className = 'btn-add'; addAreaBtn.style.cssText = 'margin:8px 14px 14px';
    addAreaBtn.textContent = '+ Add Area';
    addAreaBtn.onclick = () => f1AddSmArea(ci);
    section.appendChild(addAreaBtn);
    wrap.appendChild(section);
  });
}

function f1CommitSmFromUI(){
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  document.querySelectorAll('#f1-sm-wrap tbody[data-cfg]').forEach(tbody => {
    const ci = parseInt(tbody.dataset.cfg), ai = parseInt(tbody.dataset.area);
    if(!configs[ci] || !configs[ci][ai]) return;
    const area = configs[ci][ai];
    area.details = [];
    tbody.querySelectorAll('tr').forEach(tr => {
      const pick = tr.querySelector('.monster-pick');
      const id = pick ? readMonsterPick(pick) : 0;
      const g = f => { const el = tr.querySelector(`[data-f="${f}"]`); return el ? el.value : '0'; };
      area.details.push({
        id, state:parseHD(g('state')), qty:parseInt(g('qty'))||1, activation:parseInt(g('act'))||0,
        pad:new Array(20).fill(0), orient:(parseInt(g('orient'))||0)>>>0,
        x:parseFloat(g('x'))||0, z:parseFloat(g('z'))||0, y:parseFloat(g('y'))||0,
        tail:new Array(16).fill(0)
      });
    });
    // Auto-manage species slots
    const uniqueIds = [...new Set(area.details.map(d=>d.id))];
    area.spawnIds = [];
    for(let i=0;i<4;i++) area.spawnIds.push(i < uniqueIds.length ? uniqueIds[i] : 0xFFFFFFFF);
  });
  // Also read area IDs from selects
  document.querySelectorAll('.f1sm-area-id').forEach(sel => {
    const ci = parseInt(sel.dataset.cfg), ai = parseInt(sel.dataset.area);
    if(configs[ci] && configs[ci][ai]) configs[ci][ai].areaId = parseInt(sel.value) || 0;
  });
}

function f1AddSmEntry(ci, ai){
  f1CommitSmFromUI();
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  if(!configs[ci] || !configs[ci][ai]) return;
  configs[ci][ai].details.push({id:0,state:0,qty:1,activation:0,pad:new Array(20).fill(0),orient:0,x:0,z:0,y:0,tail:new Array(16).fill(0)});
  renderF1SmallMon(); markDirty();
}

function f1RemoveSmEntry(ci, ai, ei){
  f1CommitSmFromUI();
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  if(!configs[ci] || !configs[ci][ai]) return;
  configs[ci][ai].details.splice(ei, 1);
  renderF1SmallMon(); markDirty();
}

function f1AddSmArea(ci){
  f1CommitSmFromUI();
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  if(!configs[ci]) configs[ci] = [];
  const mapId = f1Model.mapId;
  const mapAreas = F1_MAP_AREAS[mapId] || [];
  const usedIds = new Set(configs[ci].map(a=>a.areaId));
  const available = mapAreas.filter(id => !usedIds.has(id));
  const areaId = available.length ? available[0] : (mapAreas[0] || 0);
  configs[ci].push({areaId, spawnIds:[0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF], details:[]});
  renderF1SmallMon(); markDirty();
}

function f1RemoveSmArea(ci, ai){
  f1CommitSmFromUI();
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  if(!configs[ci]) return;
  configs[ci].splice(ai, 1);
  renderF1SmallMon(); markDirty();
}

function f1DupSmEntry(ci, ai, ei){
  f1CommitSmFromUI();
  const configs = [f1Model.smallInitial, f1Model.smallChange];
  if(!configs[ci] || !configs[ci][ai]) return;
  const orig = configs[ci][ai].details[ei];
  if(!orig) return;
  configs[ci][ai].details.splice(ei+1, 0, {...orig, pad:new Array(20).fill(0), tail:new Array(16).fill(0)});
  renderF1SmallMon(); markDirty();
}

// ── GATHERING RENDERING (editable, F2-style) ────────────────────────────────
function renderF1Gather(){
  const wrap = document.getElementById('f1-gather-wrap');
  if(!wrap) return;
  const m = f1Model;
  wrap.innerHTML = '';
  const mapAreaSet = new Set(F1_MAP_AREAS[m.mapId] || []);
  const activeAreas = m.gatherAreas.filter(a => a.points.length > 0 && mapAreaSet.has(a.areaId));

  const hdr = document.createElement('div');
  hdr.style.cssText = 'margin-bottom:10px;font-size:11px;color:var(--muted)';
  hdr.textContent = `Map: ${F1_MAPS[m.mapId]||'?'} — ${activeAreas.length} area(s) with data`;
  wrap.appendChild(hdr);

  if(!activeAreas.length){
    wrap.insertAdjacentHTML('beforeend','<div style="padding:12px;color:var(--muted)">No gathering data for this map.</div>');
  }
  activeAreas.forEach(a => {
    const ai = a.areaId;
    const card = document.createElement('div');
    card.className = 'card'; card.style.marginBottom = '10px'; card.dataset.gaCard = ai;
    // Build area dropdown with all map areas
    let areaOptsHtml = '';
    (F1_MAP_AREAS[m.mapId]||[]).forEach(id => {
      areaOptsHtml += `<option value="${id}"${id===ai?' selected':''}>0x${id.toString(16).toUpperCase().padStart(2,'0')} – ${f1AreaName(id)}</option>`;
    });
    if(!(F1_MAP_AREAS[m.mapId]||[]).includes(ai))
      areaOptsHtml += `<option value="${ai}" selected>0x${ai.toString(16).toUpperCase().padStart(2,'0')} – ${f1AreaName(ai)}</option>`;
    card.innerHTML = `<div class="card-hdr" style="display:flex;align-items:center;gap:10px">`+
      `<select class="f1-ga-area-sel" data-old-area="${ai}" style="font-size:12px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${areaOptsHtml}</select>`+
      `<span style="font-size:10px;color:var(--muted)">${a.points.length} node(s)</span>`+
      `<button class="btn-danger" style="margin-left:auto" onclick="f1DelGatherArea(${ai})">✕ Table</button></div>`;
    const body = document.createElement('div'); body.className = 'card-body';
    a.points.forEach((pt, pi) => {
      const nodeDiv = document.createElement('div');
      nodeDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding:4px 0;border-bottom:1px solid var(--border)';
      nodeDiv.className = 'f1-gn-row'; nodeDiv.dataset.ai = ai; nodeDiv.dataset.pi = pi;
      nodeDiv.innerHTML =
        `<span style="color:var(--muted);font-family:var(--mono);width:20px">${pi}</span>`+
        `<label style="font-size:13px">X</label><input type="number" data-f="x" value="${pt.x.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Y</label><input type="number" data-f="y" value="${pt.y.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Z</label><input type="number" data-f="z" value="${pt.z.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Range</label><input type="number" data-f="range" value="${(pt.range||0).toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Code</label><input type="number" data-f="collectId" value="${pt.collectId}" min="0" max="65535" style="width:55px">`+
        `<label style="font-size:13px">FrqUp</label><input type="number" data-f="freqLimit" value="${pt.freqLimit}" min="0" max="65535" style="width:50px">`+
        `<select data-f="type" style="font-size:14px">${gatherTypeOpts(pt.type||0)}</select>`+
        `<label style="font-size:13px">Unk</label><input type="number" data-f="unk" value="${pt.unk}" min="0" max="65535" style="width:50px">`+
        `<button class="btn-dup" title="Duplicate" onclick="f1DupGatherNode(${ai},${pi})">⧉</button> `+
        `<button class="btn-danger" title="Delete" onclick="f1DelGatherNode(${ai},${pi})">✕</button>`;
      body.appendChild(nodeDiv);
      // Collection ID reference note (F1 has no embedded item tables)
      const refDiv = document.createElement('div');
      refDiv.style.cssText = 'margin:0 0 4px 24px;padding:2px 8px;border-left:3px solid var(--accent);font-size:11px;color:var(--muted)';
      refDiv.textContent = `Collection Table #${pt.collectId} (game-global loot table, not embedded in quest)`;
      body.appendChild(refDiv);
    });
    card.appendChild(body);
    const addNode = document.createElement('button');
    addNode.className = 'btn-add'; addNode.style.margin = '8px 14px 14px'; addNode.textContent = '+ Add Node';
    addNode.onclick = () => { f1CommitGatherFromUI(); a.points.push({x:0,y:0,z:0,range:150,collectId:0,freqLimit:3,type:0,unk:0}); renderF1Gather(); markDirty(); };
    card.appendChild(addNode);
    wrap.appendChild(card);
  });

  // Add Area button
  const addArea = document.createElement('button');
  addArea.className = 'btn-add'; addArea.style.marginTop = '8px';
  addArea.textContent = '+ Add Area Table';
  addArea.onclick = () => {
    f1CommitGatherFromUI();
    const usedIds = new Set(m.gatherAreas.filter(a=>a.points.length>0).map(a=>a.areaId));
    const mapAreas = F1_MAP_AREAS[m.mapId] || [];
    const firstFree = mapAreas.find(id => !usedIds.has(id));
    const newId = firstFree !== undefined ? firstFree : (mapAreas[0] || 0);
    let area = m.gatherAreas.find(a => a.areaId === newId);
    if(!area){ area = {areaId:newId, ptr:0, points:[]}; m.gatherAreas.push(area); }
    area.points = [{x:0,y:0,z:0,range:150,collectId:0,freqLimit:3,type:0,unk:0}];
    renderF1Gather(); markDirty();
  };
  wrap.appendChild(addArea);

  // Wire up area dropdown change events — lets user change which area an existing table is assigned to
  wrap.querySelectorAll('.f1-ga-area-sel').forEach(sel => {
    sel.addEventListener('change', () => {
      f1CommitGatherFromUI();
      const oldId = parseInt(sel.dataset.oldArea);
      const newId = parseInt(sel.value);
      if(oldId === newId) return;
      const area = m.gatherAreas.find(a => a.areaId === oldId);
      if(area) area.areaId = newId;
      renderF1Gather(); markDirty();
    });
  });
  upgradeSelectsToCombo();
}

function f1CommitGatherFromUI(){
  if(!f1Model) return;
  const wrap = document.getElementById('f1-gather-wrap');
  if(!wrap) return;
  f1Model.gatherAreas.forEach(area => {
    const ai = area.areaId;
    const rows = wrap.querySelectorAll(`.f1-gn-row[data-ai="${ai}"]`);
    if(!rows.length) return;
    area.points = [];
    rows.forEach(div => {
      area.points.push({
        x: parseFloat(div.querySelector('[data-f="x"]').value) || 0,
        y: parseFloat(div.querySelector('[data-f="y"]').value) || 0,
        z: parseFloat(div.querySelector('[data-f="z"]').value) || 0,
        range: parseFloat(div.querySelector('[data-f="range"]').value) || 0,
        collectId: parseInt(div.querySelector('[data-f="collectId"]').value) || 0,
        freqLimit: parseInt(div.querySelector('[data-f="freqLimit"]').value) || 0,
        type: parseInt(div.querySelector('[data-f="type"]').value) || 0,
        unk: parseInt(div.querySelector('[data-f="unk"]').value) || 0
      });
    });
  });
}

function f1FindGatherArea(ai){ return f1Model.gatherAreas.find(a=>a.areaId===ai); }
function f1DelGatherArea(ai){ f1CommitGatherFromUI(); const a=f1FindGatherArea(ai); if(a) a.points=[]; renderF1Gather(); markDirty(); }
function f1DelGatherNode(ai,pi){ f1CommitGatherFromUI(); const a=f1FindGatherArea(ai); if(a) a.points.splice(pi,1); renderF1Gather(); markDirty(); }
function f1DupGatherNode(ai,pi){ f1CommitGatherFromUI(); const a=f1FindGatherArea(ai); if(a){ const p=a.points[pi]; a.points.splice(pi+1,0,JSON.parse(JSON.stringify(p))); } renderF1Gather(); markDirty(); }

// ── APPLY CHANGES (read UI → rebuild D) ──────────────────────────────────────
function applyChangesF1(){
  if(!f1Model) throw new Error('No F1 quest loaded');
  const m = f1Model;
  const $ = id => document.getElementById(id);
  const hexVal = id => { const v = $(id).value.replace(/^0x/i,''); return parseInt(v,16)||0; };

  // Read UI values into model
  m.qnum       = +$('f1-qnum').value || 0;
  m.stars      = +$('f1-star').value || 1;
  m.qtype      = +$('f1-qtype').value || 1;
  m.bgSound    = hexVal('f1-bgsound');
  m.mapId      = +$('f1-mapid').value || 0;
  m.specCond   = +$('f1-speccond').value || 0;
  m.fee        = +$('f1-fee').value || 0;
  m.reward     = +$('f1-reward').value || 0;
  m.penalty    = +$('f1-penalty').value || 0;
  m.hrp        = +$('f1-hrp').value || 0;
  m.hrpSwitch  = hexVal('f1-hrpswitch');
  m.timeTicks  = Math.round((+$('f1-time').value || 50) * 1800);
  m.difficulty = +$('f1-difficulty').value || 0;
  m.arrivePos  = +$('f1-arrive').value || 0;
  m.bossSize   = +$('f1-bosssize').value || 100;
  m.sizeMulti  = +$('f1-sizemulti').value || 0;
  m.supplyMode = +$('f1-supplymode').value || 0;
  m.supplyCond = +$('f1-supplycond').value || 0;
  m.supplyCondQty = +$('f1-supplycondqty').value || 0;
  m.fixedStatus = hexVal('f1-fixedstatus');
  m.fixedUnk    = hexVal('f1-fixedunk');
  m.unk1C      = hexVal('f1-unk1c');
  m.unk28      = hexVal('f1-unk28');

  // Read strings
  m.name    = $('f1-name').value;
  m.success = $('f1-success').value;
  m.failure = $('f1-failure').value;
  m.desc    = $('f1-desc').value;

  // Read hints
  const hintEls = document.querySelectorAll('.f1-hint');
  m.hints = [];
  hintEls.forEach(el => m.hints.push(el.value));

  // Read supply from UI
  m.supply = [];
  document.querySelectorAll('#f1-supply-tbody tr').forEach(tr => {
    const item = readItemPick(tr) & 0xFFFF;
    const qty = parseInt(tr.querySelector('.f1s-qty')?.value) || 1;
    m.supply.push({item, qty});
  });

  // Read rewards from UI
  f1CollectRewardsFromUI();

  // Read targets / fixed entries from UI
  f1CollectTargetsFromUI();

  // Read boss details (auto-manages boss IDs)
  f1CommitBossFromUI();

  // Read small monsters from UI
  f1CommitSmFromUI();

  // Read gathering from UI
  f1CommitGatherFromUI();

  // Read EU language texts from UI into model
  f1CommitLangsFromUI();

  // For existing quests, patch in-place to preserve unknown sections.
  // Only use full serializeF1 for new quests (no origD).
  if (m.origD) {
    D = patchF1InPlace(m);
  } else {
    D = serializeF1(m);
  }
}

function f1CommitLangsFromUI() {
  const container = document.getElementById('f1-eu-langs');
  if (!container) return;
  const m = f1Model;
  if (!m.langTexts) m.langTexts = {};
  const fields = ['name','success','failure','desc'];
  container.querySelectorAll('[data-eu-lang][data-eu-field]').forEach(el => {
    const li = +el.dataset.euLang;
    const f = el.dataset.euField;
    if (!m.langTexts[li]) m.langTexts[li] = {name:'',success:'',failure:'',desc:''};
    m.langTexts[li][f] = el.value;
  });
}

function patchF1InPlace(m) {
  let d = new Uint8Array(m.origD);
  const align4 = v => (v+3)&~3;
  const w8  = (o,v) => { d[o] = v & 0xFF; };
  const w16 = (o,v) => { d[o] = v & 0xFF; d[o+1] = (v>>8) & 0xFF; };
  const w32 = (o,v) => { d[o] = v & 0xFF; d[o+1] = (v>>>8) & 0xFF; d[o+2] = (v>>>16) & 0xFF; d[o+3] = (v>>>24) & 0xFF; };
  const wf32 = (o,v) => { const b = new ArrayBuffer(4); new DataView(b).setFloat32(0,v,true); const u = new Uint8Array(b); for(let i=0;i<4;i++) d[o+i] = u[i]; };
  const enc = new TextEncoder();

  // Helper: grow buffer and append data, returns the offset where data was placed
  function appendData(extra) {
    const off = d.length;
    const nd = new Uint8Array(align4(off + extra.length));
    nd.set(d); nd.set(extra, off);
    d = nd;
    return off;
  }

  // Header fields
  w32(0x1C, m.unk1C); w32(0x28, m.unk28); w32(0x2C, m.hrp); w32(0x30, m.hrpSwitch);
  w16(0x34, m.bossSize); w8(0x36, m.difficulty); w8(0x37, m.arrivePos);
  w8(0x38, m.sizeMulti); w8(0x39, m.supplyMode); w8(0x3A, m.supplyCond); w8(0x3B, m.supplyCondQty);

  // Quest info
  const qi = m.questTypeFlagsPtr;
  w8(qi, m.qtype); w8(qi+1, m.bgSound); w16(qi+2, m.stars);
  w32(qi+4, m.fee); w32(qi+8, m.reward); w32(qi+12, m.penalty);
  w32(qi+16, m.timeTicks); w32(qi+20, m.mapId);
  w16(qi+28, m.specCond); w16(qi+30, m.qnum);

  // Fixed info header
  w32(m.fixedInfoPtr, m.fixedStatus); w32(m.fixedInfoPtr+4, m.fixedUnk);

  // Patch English strings in-place
  const patchStr = (ptr, nextBound, str) => {
    const bytes = enc.encode(str);
    const cap = nextBound - ptr;
    for (let i = 0; i < cap; i++) d[ptr+i] = i < bytes.length ? bytes[i] : 0;
  };
  const strPtrs = [m.strNamePtr, m.strSuccessPtr, m.strFailPtr, m.strDescPtr];
  const sorted = strPtrs.slice().sort((a,b) => a-b);
  const commPtr = m.commPtr;
  for (let i = 0; i < 4; i++) {
    const ptr = strPtrs[i];
    const strs = [m.name, m.success, m.failure, m.desc];
    const nexts = sorted.filter(p => p > ptr);
    const bound = nexts.length ? nexts[0] : commPtr;
    patchStr(ptr, bound, strs[i]);
  }

  // Patch fixed entries
  let fo = m.fixedInfoPtr + 8;
  for (let i = 0; i < m.fixedEntries.length; i++)
    for (let j = 0; j < 8; j++) d[fo + i*8 + j] = m.fixedEntries[i].raw[j];
  d[fo + m.fixedEntries.length*8] = 0xFF;
  d[fo + m.fixedEntries.length*8 + 1] = 0xFF;

  // Patch supply items
  let so = m.supplyBoxPtr;
  for (let i = 0; i < m.supply.length; i++) { w16(so+i*4, m.supply[i].item); w16(so+i*4+2, m.supply[i].qty); }
  w16(so + m.supply.length*4, 0);

  // Boss section — check if details fit in original space
  const bossDetNeeded = m.bossDetails.length * 60 + 2;
  const bossDetSpace = m.bossSpawnPtr - m.bossDetailsPtr;

  if (bossDetNeeded <= bossDetSpace) {
    // Fits in-place
    if (m.bossSpawnPtr && m.bossSpawnPtr < d.length)
      for (let i = 0; i < 4; i++) w32(m.bossSpawnPtr + i*4, m.bossIds[i] !== undefined ? m.bossIds[i] : 0xFFFFFFFF);
    if (m.bossDetailsPtr && m.bossDetailsPtr < d.length) {
      let dp = m.bossDetailsPtr;
      for (let i = 0; i < m.bossDetails.length; i++) {
        const b = m.bossDetails[i];
        w16(dp, b.id); w16(dp+2, b.state);
        d[dp+4] = b.qty; d[dp+5] = b.pad1||0; d[dp+6] = b.pad2||0; d[dp+7] = b.area;
        if(b.pad) for(let j=0;j<20;j++) d[dp+8+j] = b.pad[j]||0;
        w32(dp+28, b.orient);
        wf32(dp+32, b.x); wf32(dp+36, b.z); wf32(dp+40, b.y);
        if(b.tail) for(let j=0;j<16;j++) d[dp+44+j] = b.tail[j]||0;
        dp += 60;
      }
      w16(dp, 0xFFFF);
    }
  } else {
    // Overflow — append entire boss section at end of file
    const detData = new Uint8Array(align4(bossDetNeeded));
    for (let i = 0; i < m.bossDetails.length; i++) {
      const b = m.bossDetails[i], o = i*60;
      detData[o]=b.id&0xFF; detData[o+1]=(b.id>>8)&0xFF;
      detData[o+2]=b.state&0xFF; detData[o+3]=(b.state>>8)&0xFF;
      detData[o+4]=b.qty; detData[o+5]=b.pad1||0; detData[o+6]=b.pad2||0; detData[o+7]=b.area;
      if(b.pad) for(let j=0;j<20;j++) detData[o+8+j]=b.pad[j]||0;
      const ob=new ArrayBuffer(4); new DataView(ob).setUint32(0,b.orient,true); detData.set(new Uint8Array(ob),o+28);
      const fb=new ArrayBuffer(4);
      new DataView(fb).setFloat32(0,b.x,true); detData.set(new Uint8Array(fb),o+32);
      new DataView(fb).setFloat32(0,b.z,true); detData.set(new Uint8Array(fb),o+36);
      new DataView(fb).setFloat32(0,b.y,true); detData.set(new Uint8Array(fb),o+40);
      if(b.tail) for(let j=0;j<16;j++) detData[o+44+j]=b.tail[j]||0;
    }
    detData[m.bossDetails.length*60]=0xFF; detData[m.bossDetails.length*60+1]=0xFF;
    const newDetOff = appendData(detData);

    const idsData = new Uint8Array(16);
    for(let i=0;i<4;i++){ const v=m.bossIds[i]!==undefined?m.bossIds[i]:0xFFFFFFFF; idsData[i*4]=v&0xFF;idsData[i*4+1]=(v>>>8)&0xFF;idsData[i*4+2]=(v>>>16)&0xFF;idsData[i*4+3]=(v>>>24)&0xFF; }
    const newIdsOff = appendData(idsData);

    const hdrData = new Uint8Array(16);
    for(let i=0;i<8;i++) hdrData[i] = m.bossSkip[i]||0;
    hdrData[8]=newIdsOff&0xFF; hdrData[9]=(newIdsOff>>>8)&0xFF; hdrData[10]=(newIdsOff>>>16)&0xFF; hdrData[11]=(newIdsOff>>>24)&0xFF;
    hdrData[12]=newDetOff&0xFF; hdrData[13]=(newDetOff>>>8)&0xFF; hdrData[14]=(newDetOff>>>16)&0xFF; hdrData[15]=(newDetOff>>>24)&0xFF;
    const newHdrOff = appendData(hdrData);

    w32(0x18, newHdrOff);
  }

  // Small monsters — rebuild and append at end (patchF1InPlace previously skipped this entirely)
  {
    // First pass: measure sizes to compute final offsets
    const smInitSize = buildSmallMonBin(m.smallInitial, 0).length;
    const smChgSize = (m.smallChange && m.smallChange.length) ? buildSmallMonBin(m.smallChange, 0).length : 0;

    // questArea struct (8 bytes: initPtr, chgPtr)
    const qaOff = d.length;
    appendData(new Uint8Array(8));
    const smInitOff = d.length;
    appendData(new Uint8Array(align4(smInitSize)));
    const smChgOff = smChgSize ? d.length : 0;
    if (smChgSize) appendData(new Uint8Array(align4(smChgSize)));

    // Build with correct absolute offsets and write
    const smInitBin = buildSmallMonBin(m.smallInitial, smInitOff);
    for (let i = 0; i < smInitBin.length; i++) d[smInitOff + i] = smInitBin[i];
    if (smChgOff) {
      const smChgBin = buildSmallMonBin(m.smallChange, smChgOff);
      for (let i = 0; i < smChgBin.length; i++) d[smChgOff + i] = smChgBin[i];
    }

    // Write questArea struct pointers
    w32(qaOff, smInitOff);
    w32(qaOff + 4, smChgOff);
    w32(0x14, qaOff);
  }

  // Gathering — rebuild and append at end
  {
    const gatherOff = d.length;
    const gatherHeader = new Uint8Array(4 + 92*4);
    const gv = new DataView(gatherHeader.buffer);
    gv.setUint32(0, m.gatherUnk1, true);
    appendData(gatherHeader);

    for (let i = 0; i < 92; i++) {
      const a = m.gatherAreas.find(a => a.areaId === i);
      if (!a || !a.points.length) {
        gv.setUint32(4 + i*4, 0, true);
        continue;
      }
      const ptOff = d.length;
      gv.setUint32(4 + i*4, ptOff, true);
      const ad = new Uint8Array(a.points.length * 24 + 4);
      const adv = new DataView(ad.buffer);
      a.points.forEach((p, j) => {
        const o = j * 24;
        adv.setFloat32(o, p.x, true); adv.setFloat32(o+4, p.y, true);
        adv.setFloat32(o+8, p.z, true); adv.setFloat32(o+12, p.range, true);
        adv.setUint16(o+16, p.collectId, true); adv.setUint16(o+18, p.freqLimit, true);
        adv.setUint16(o+20, p.type, true); adv.setUint16(o+22, p.unk, true);
      });
      adv.setUint32(a.points.length * 24, 0xBF800000, true);
      appendData(ad);
    }
    // Write the header back (with pointers filled in)
    for (let i = 0; i < gatherHeader.length; i++) d[gatherOff + i] = gatherHeader[i];
    w32(0x20, gatherOff);
  }

  // Language texts — append new language commBlocks+strings at end
  if (m.langTexts) {
    const tcPtr = m.taskContentPtr;
    for (let li = 0; li < 7; li++) {
      const lt = m.langTexts[li];
      if (!lt) continue;
      const strs = [lt.name||'', lt.success||'', lt.failure||'', lt.desc||''];
      const strBytes = strs.map(s => enc.encode(s));
      const totalStrLen = strBytes.reduce((a,b)=>a+align4(b.length+1), 0);
      const commData = new Uint8Array(16 + totalStrLen);
      let cursor = 16;
      const strOffs = [];
      strBytes.forEach(sb => {
        strOffs.push(cursor);
        commData.set(sb, cursor);
        cursor += align4(sb.length + 1);
      });
      const newCommOff = appendData(commData);
      for (let si = 0; si < 4; si++) w32(newCommOff + si*4, newCommOff + strOffs[si]);
      w32(tcPtr + li*4, newCommOff);
    }
  }

  return d;
}

function f1AddLang(idx) {
  const m = f1Model; if (!m) return;
  if (!m.langTexts) m.langTexts = {};
  m.langTexts[idx] = { name: m.name||'', success: m.success||'', failure: m.failure||'', desc: m.desc||'' };
  toggleEUMode('mhf1', true);
  markDirty();
}
function f1RemoveLang(idx) {
  const m = f1Model; if (!m) return;
  if (m.langTexts) delete m.langTexts[idx];
  toggleEUMode('mhf1', true);
  markDirty();
}
function f1AddAllLangs() {
  [2,3,4,5].forEach(i => { if (!f1Model.langTexts || !f1Model.langTexts[i]) f1AddLang(i); });
}

// ── TRAINING / ARENA TAB ─────────────────────────────────────────────────────
const F1_JOIN_CONDITIONS = {
  0x00:'None',
  0x01:'HR 2+ Required', 0x02:'HR 3+ Required', 0x03:'HR 4+ Required', 0x04:'HR 5+ Required',
  0x18:'Great Sword Only', 0x19:'Lance Only', 0x1A:'Hammer Only',
  0x1B:'Sword & Shield Only', 0x1C:'Bowgun Only', 0x35:'Dual Blades Only',
  0x23:'No Equipped Armor', 0x3C:'2 Hunters Only / Outside Items Forbidden'
};

const F1_TRAINING_MAPS = { 9:'Small Arena', 10:'Big Arena' };

function renderF1Training(){
  const wrap = document.getElementById('f1-train-body');
  if(!wrap) return;
  const m = f1Model; if(!m){ wrap.innerHTML='<div class="note">No quest loaded.</div>'; return; }

  const isTraining = m.difficulty === 3;
  const isArenaMap = m.mapId === 9 || m.mapId === 10;
  const joinLabel = F1_JOIN_CONDITIONS[m.specCond] || ('Unknown (0x'+m.specCond.toString(16).toUpperCase()+')');

  let h = '';

  // Status badge
  if(isTraining){
    h += '<div style="background:var(--accent);color:#000;display:inline-block;padding:4px 12px;border-radius:4px;font-weight:bold;margin-bottom:12px">✓ This is a Training Quest</div>';
  } else {
    h += '<div style="background:var(--surface);color:var(--muted);display:inline-block;padding:4px 12px;border-radius:4px;margin-bottom:12px">This quest is not a Training quest (difficulty = '+m.difficulty+')</div>';
  }

  // Quest overview
  h += '<table style="font-size:13px;margin-bottom:16px"><tbody>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Quest ID</td><td style="font-family:var(--mono)">'+m.qnum+'</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Difficulty</td><td>'+['Low Rank','High Rank','G Rank','Training'][m.difficulty]+'</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Map</td><td>'+(F1_MAPS[m.mapId] || 'Map '+m.mapId)+(isArenaMap?' <span style="color:var(--accent)">(Arena)</span>':'')+'</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Join Condition</td><td>'+joinLabel+'</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Time</td><td>'+(m.timeTicks/1800).toFixed(1).replace(/\.0$/,'')+' min</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Reward</td><td>'+m.reward+'z</td></tr>';
  h += '<tr><td style="color:var(--muted);padding-right:16px">Fee</td><td>'+m.fee+'z</td></tr>';
  h += '</tbody></table>';

  // Join condition editor
  h += '<div style="font-size:11px;color:var(--accent);margin-bottom:4px;font-weight:bold">Edit Join Condition</div>';
  h += '<div class="fg" style="margin-bottom:12px"><div class="f"><select id="f1-train-joincond" onchange="f1TrainJoinChanged();markDirty()">';
  for(const [code, label] of Object.entries(F1_JOIN_CONDITIONS)){
    h += '<option value="'+code+'"'+(parseInt(code)===m.specCond?' selected':'')+'>0x'+parseInt(code).toString(16).toUpperCase().padStart(2,'0')+' – '+label+'</option>';
  }
  if(!F1_JOIN_CONDITIONS[m.specCond])
    h += '<option value="'+m.specCond+'" selected>0x'+m.specCond.toString(16).toUpperCase().padStart(2,'0')+' – Custom</option>';
  h += '</select></div></div>';

  // Note about MHF1 training quests
  h += '<div class="note" style="margin-top:8px">MHF1 training quests do not embed equipment sets like F2/FU. The "training" behavior is controlled by difficulty = 0x03 and join conditions (weapon restrictions, no armor). Equipment loadouts are handled by the game engine based on the quest ID.</div>';

  wrap.innerHTML = h;
}

function f1TrainJoinChanged(){
  const sel = document.getElementById('f1-train-joincond');
  if(!sel) return;
  const v = parseInt(sel.value)||0;
  f1Model.specCond = v;
  const el = document.getElementById('f1-speccond');
  if(el) el.value = v;
}

// ── SERIALIZER ───────────────────────────────────────────────────────────────
function serializeF1(m){
  const enc = new TextEncoder();
  const parts = []; // {offset, data} pairs — we'll assemble at the end
  let cursor = 0x3C; // after header

  function align4(c){ return (c+3)&~3; }
  function allocStr(s){ const b=enc.encode(s); const len=align4(b.length+1); const d=new Uint8Array(len); d.set(b); return d; }
  function w32(arr,o,v){ arr[o]=v&0xFF;arr[o+1]=(v>>>8)&0xFF;arr[o+2]=(v>>>16)&0xFF;arr[o+3]=(v>>>24)&0xFF; }
  function w16(arr,o,v){ arr[o]=v&0xFF;arr[o+1]=(v>>8)&0xFF; }
  function wf32(arr,o,v){ const b=new ArrayBuffer(4);new DataView(b).setFloat32(0,v,true);const u=new Uint8Array(b);arr[o]=u[0];arr[o+1]=u[1];arr[o+2]=u[2];arr[o+3]=u[3]; }

  // Quest info section (32 bytes)
  const questInfoOff = cursor;
  const qiData = new Uint8Array(32);
  qiData[0] = m.qtype; qiData[1] = m.bgSound;
  w16(qiData,2,m.stars); w32(qiData,4,m.fee); w32(qiData,8,m.reward);
  w32(qiData,12,m.penalty); w32(qiData,16,m.timeTicks); w32(qiData,20,m.mapId);
  // taskContentPtr filled later
  w16(qiData,28,m.specCond); w16(qiData,30,m.qnum);
  cursor += 32;

  // Strings
  const strName = allocStr(m.name);
  const strSuccess = allocStr(m.success);
  const strFailure = allocStr(m.failure);
  const strDesc = allocStr(m.desc);

  // String pointer block (4 pointers)
  const strPtrOff = cursor;
  const strPtrData = new Uint8Array(16);
  cursor += 16;

  // Strings data
  const nameOff = cursor; cursor += strName.length;
  const succOff = cursor; cursor += strSuccess.length;
  const failOff = cursor; cursor += strFailure.length;
  const descOff = cursor; cursor += strDesc.length;

  w32(strPtrData,0,nameOff); w32(strPtrData,4,succOff);
  w32(strPtrData,8,failOff); w32(strPtrData,12,descOff);

  // Language-specific commBlocks + strings (for non-English languages)
  const langCommOffs = {};
  if (m.langTexts) {
    for (let li = 0; li < 7; li++) {
      const lt = m.langTexts[li];
      if (!lt) continue;
      const langCommOff = cursor;
      const langCommData = new Uint8Array(16);
      cursor += 16;
      const ls = [allocStr(lt.name||''), allocStr(lt.success||''), allocStr(lt.failure||''), allocStr(lt.desc||'')];
      const lsOffs = [];
      ls.forEach(s => { lsOffs.push(cursor); cursor += s.length; });
      for (let si=0;si<4;si++) w32(langCommData, si*4, lsOffs[si]);
      langCommOffs[li] = {off:langCommOff, comm:langCommData, strs:ls, strOffs:lsOffs};
    }
  }

  // Language pointer table (7 entries, each pointing to a commBlock)
  const langTableOff = cursor;
  const langTableData = new Uint8Array(28);
  for (let i = 0; i < 7; i++) {
    w32(langTableData, i*4, langCommOffs[i] ? langCommOffs[i].off : strPtrOff);
  }
  cursor += 28;

  // Fix quest info taskContentPtr → language table
  w32(qiData,24,langTableOff);

  // Loaded stages (64 bytes)
  const stagesOff = cursor;
  const stagesData = new Uint8Array(64);
  for(let i=0;i<4;i++){
    if(m.stages[i]) for(let j=0;j<16;j++) stagesData[i*16+j] = m.stages[i].raw[j];
  }
  cursor += 64;

  // Hint strings section
  const hintStrs = m.hints.map(h => allocStr(h));
  const hintStrOffs = [];
  const hintDataStart = cursor + 4 + (m.hints.length+1)*4; // someStringsPtr content + inner ptr block
  let hintCursor = hintDataStart;
  hintStrs.forEach(s => { hintStrOffs.push(hintCursor); hintCursor += s.length; });

  const someStringsContentOff = cursor;
  const someStringsContentData = new Uint8Array(4);
  const hintPtrsOff = cursor + 4;
  const hintPtrsData = new Uint8Array((m.hints.length+1)*4);
  for(let i=0;i<m.hints.length;i++) w32(hintPtrsData,i*4,hintStrOffs[i]);
  w32(hintPtrsData,m.hints.length*4,0); // terminator
  w32(someStringsContentData,0,hintPtrsOff);
  cursor = hintCursor;
  cursor = align4(cursor);

  // Supply section
  const supplyOff = cursor;
  const supplyData = new Uint8Array(m.supply.length*4 + 2);
  m.supply.forEach((s,i) => { w16(supplyData,i*4,s.item); w16(supplyData,i*4+2,s.qty); });
  // terminator 0x0000 already zero
  cursor += align4(supplyData.length);

  // Rewards section
  const rewardOff = cursor;
  // First calculate reward block data positions
  const rwBlockStart = cursor + m.rewards.length*8 + 8; // condition+ptr pairs + terminator (8 bytes)
  let rwCursor = rwBlockStart;
  const rwBlockOffs = [];
  m.rewards.forEach(blk => {
    rwBlockOffs.push(rwCursor);
    rwCursor += blk.items.length*6 + 6; // items + 0xFFFF terminator (6 bytes for full entry)
    rwCursor = align4(rwCursor);
  });
  const rewardHeaderData = new Uint8Array(m.rewards.length*8 + 8);
  m.rewards.forEach((blk,i) => {
    w32(rewardHeaderData,i*8,blk.cond);
    w32(rewardHeaderData,i*8+4,rwBlockOffs[i]);
  });
  // terminator: cond=0x0000FFFF, ptr=0
  w32(rewardHeaderData,m.rewards.length*8, 0x0000FFFF);
  w32(rewardHeaderData,m.rewards.length*8+4, 0);
  cursor = rwCursor;

  const rwBlocksData = [];
  m.rewards.forEach(blk => {
    const bd = new Uint8Array(blk.items.length*6 + 6);
    blk.items.forEach((it,i) => { w16(bd,i*6,it.prob); w16(bd,i*6+2,it.item); w16(bd,i*6+4,it.qty); });
    w16(bd, blk.items.length*6, 0xFFFF);
    rwBlocksData.push(bd);
  });

  // Small monster section
  const questAreaOff = cursor;
  const questAreaData = new Uint8Array(8); // 2 pointers
  cursor += 8;

  // We preserve the raw binary for small monsters — rebuilding those from the read-only UI
  // would lose data. Instead, copy the original sections.
  // For a full editor, these would be serialized from the model.
  // For now, we place them with original data.
  const smInitOff = cursor;
  const origSmInit = buildSmallMonBin(m.smallInitial, cursor);
  cursor += origSmInit.length;
  cursor = align4(cursor);

  let smChangeOff = 0;
  if(m.smallChange && m.smallChange.length){
    smChangeOff = cursor;
    const origSmChg = buildSmallMonBin(m.smallChange, cursor);
    cursor += origSmChg.length;
    cursor = align4(cursor);
  }
  w32(questAreaData,0,smInitOff);
  w32(questAreaData,4,smChangeOff);

  // Boss section
  const bossOff = cursor;
  // 8 skip bytes + spawnPtr + detailsPtr
  const bossHeaderData = new Uint8Array(16);
  for(let i=0;i<8;i++) bossHeaderData[i] = m.bossSkip[i]||0;
  cursor += 16;

  const bossIdsOff = cursor;
  const bossIdsData = new Uint8Array(16);
  for(let i=0;i<4;i++) w32(bossIdsData,i*4, m.bossIds[i]!==undefined?m.bossIds[i]:0xFFFFFFFF);
  cursor += 16;

  const bossDetailsOff = cursor;
  const bossDetailsData = new Uint8Array(m.bossDetails.length*60 + 2);
  m.bossDetails.forEach((b,i) => {
    const o = i*60;
    w16(bossDetailsData,o,b.id); w16(bossDetailsData,o+2,b.state);
    bossDetailsData[o+4] = b.qty; bossDetailsData[o+5] = b.pad1||0; bossDetailsData[o+6] = b.pad2||0;
    bossDetailsData[o+7] = b.area;
    if(b.pad) for(let j=0;j<20;j++) bossDetailsData[o+8+j] = b.pad[j]||0;
    w32(bossDetailsData,o+28,b.orient);
    wf32(bossDetailsData,o+32,b.x); wf32(bossDetailsData,o+36,b.z); wf32(bossDetailsData,o+40,b.y);
    if(b.tail) for(let j=0;j<16;j++) bossDetailsData[o+44+j] = b.tail[j]||0;
  });
  w16(bossDetailsData, m.bossDetails.length*60, 0xFFFF);
  cursor += align4(bossDetailsData.length);

  w32(bossHeaderData,8,bossIdsOff);
  w32(bossHeaderData,12,bossDetailsOff);

  // Fixed info section
  const fixedOff = cursor;
  const fixedData = new Uint8Array(8 + m.fixedEntries.length*8 + 8);
  w32(fixedData,0,m.fixedStatus); w32(fixedData,4,m.fixedUnk);
  m.fixedEntries.forEach((e,i) => { for(let j=0;j<8;j++) fixedData[8+i*8+j] = e.raw[j]; });
  w16(fixedData, 8+m.fixedEntries.length*8, 0xFFFF);
  cursor += align4(fixedData.length);

  // Gathering section — always 92 pointer entries (one per area ID 0x00-0x5B)
  const gatherOff = cursor;
  const gatherHeaderData = new Uint8Array(4 + 92*4);
  w32(gatherHeaderData,0,m.gatherUnk1);
  cursor += gatherHeaderData.length;

  const gatherAreaDatas = [];
  const gatherAreaOffs = [];
  for(let i=0;i<92;i++){
    const a = m.gatherAreas.find(a=>a.areaId===i);
    if(!a || !a.points.length){
      w32(gatherHeaderData, 4+i*4, 0);
      continue;
    }
    w32(gatherHeaderData, 4+i*4, cursor);
    gatherAreaOffs.push(cursor);
    const ad = new Uint8Array(a.points.length*24 + 24); // points + terminator pad
    a.points.forEach((p,j) => {
      const o = j*24;
      wf32(ad,o,p.x); wf32(ad,o+4,p.y); wf32(ad,o+8,p.z); wf32(ad,o+12,p.range);
      w16(ad,o+16,p.collectId); w16(ad,o+18,p.freqLimit); w16(ad,o+20,p.type); w16(ad,o+22,p.unk);
    });
    w32(ad, a.points.length*24, 0xBF800000);
    gatherAreaDatas.push(ad);
    cursor += align4(a.points.length*24 + 24);
  }

  // Assemble final binary
  const totalSize = cursor;
  const out = new Uint8Array(totalSize);

  // Header
  w32(out,0x00,questInfoOff);
  w32(out,0x04,stagesOff);
  w32(out,0x08,supplyOff);
  w32(out,0x0C,rewardOff);
  w32(out,0x10,fixedOff);
  w32(out,0x14,questAreaOff);
  w32(out,0x18,bossOff);
  w32(out,0x1C,m.unk1C);
  w32(out,0x20,gatherOff);
  w32(out,0x24,someStringsContentOff);
  w32(out,0x28,m.unk28);
  w32(out,0x2C,m.hrp);
  w32(out,0x30,m.hrpSwitch);
  w16(out,0x34,m.bossSize);
  out[0x36] = m.difficulty;
  out[0x37] = m.arrivePos;
  out[0x38] = m.sizeMulti;
  out[0x39] = m.supplyMode;
  out[0x3A] = m.supplyCond;
  out[0x3B] = m.supplyCondQty;

  // Copy sections
  out.set(qiData, questInfoOff);
  out.set(strPtrData, strPtrOff);
  out.set(strName, nameOff);
  out.set(strSuccess, succOff);
  out.set(strFailure, failOff);
  out.set(strDesc, descOff);
  // Language commBlocks + strings
  for (const li in langCommOffs) {
    const lc = langCommOffs[li];
    out.set(lc.comm, lc.off);
    lc.strs.forEach((s,i) => out.set(s, lc.strOffs[i]));
  }
  out.set(langTableData, langTableOff);
  out.set(stagesData, stagesOff);
  out.set(someStringsContentData, someStringsContentOff);
  out.set(hintPtrsData, hintPtrsOff);
  hintStrs.forEach((s,i) => out.set(s, hintStrOffs[i]));
  out.set(supplyData, supplyOff);
  out.set(rewardHeaderData, rewardOff);
  rwBlocksData.forEach((bd,i) => out.set(bd, rwBlockOffs[i]));
  out.set(questAreaData, questAreaOff);
  out.set(origSmInit, smInitOff);
  if(smChangeOff && m.smallChange.length){
    out.set(buildSmallMonBin(m.smallChange, smChangeOff), smChangeOff);
  }
  out.set(bossHeaderData, bossOff);
  out.set(bossIdsData, bossIdsOff);
  out.set(bossDetailsData, bossDetailsOff);
  out.set(fixedData, fixedOff);
  out.set(gatherHeaderData, gatherOff);
  gatherAreaDatas.forEach((ad,i) => out.set(ad, gatherAreaOffs[i]));

  return out;
}

function buildSmallMonBin(areas, baseOff){
  baseOff = baseOff || 0;
  if(!areas || !areas.length) return new Uint8Array(2); // just 0x0000
  const chunks = [];
  let cursor = areas.length * 16 + 16; // area headers + 16-byte zero terminator

  const headerData = new Uint8Array(areas.length * 16 + 16);
  const spawnIdChunks = [];
  const detailChunks = [];

  areas.forEach((a,i) => {
    const ho = i*16;
    const ab = new ArrayBuffer(4); new DataView(ab).setUint32(0,a.areaId,true);
    new Uint8Array(headerData.buffer,ho,4).set(new Uint8Array(ab));
    // skip4
    const sb = new ArrayBuffer(4); new DataView(sb).setUint32(0,a.skip4||0,true);
    new Uint8Array(headerData.buffer,ho+4,4).set(new Uint8Array(sb));

    // Spawn IDs (16 bytes)
    const idsOff = cursor;
    const idsData = new Uint8Array(16);
    for(let j=0;j<4;j++){
      const v = (a.spawnIds[j] !== undefined) ? a.spawnIds[j] : 0xFFFFFFFF;
      idsData[j*4]=v&0xFF; idsData[j*4+1]=(v>>>8)&0xFF; idsData[j*4+2]=(v>>>16)&0xFF; idsData[j*4+3]=(v>>>24)&0xFF;
    }
    spawnIdChunks.push(idsData);
    new DataView(headerData.buffer).setUint32(ho+8,baseOff+idsOff,true);
    cursor += 16;

    // Details
    const detOff = cursor;
    const detData = new Uint8Array(a.details.length*60 + 2);
    a.details.forEach((d,di) => {
      const o = di*60;
      detData[o]=d.id&0xFF; detData[o+1]=(d.id>>8)&0xFF;
      detData[o+2]=d.state&0xFF; detData[o+3]=(d.state>>8)&0xFF;
      detData[o+4]=d.qty&0xFF; detData[o+5]=(d.qty>>8)&0xFF;
      detData[o+6]=d.activation&0xFF; detData[o+7]=(d.activation>>8)&0xFF;
      if(d.pad) for(let j=0;j<20;j++) detData[o+8+j] = d.pad[j]||0;
      const ob=new ArrayBuffer(4); new DataView(ob).setUint32(0,d.orient,true);
      detData.set(new Uint8Array(ob),o+28);
      const fb=new ArrayBuffer(4);
      new DataView(fb).setFloat32(0,d.x,true); detData.set(new Uint8Array(fb),o+32);
      new DataView(fb).setFloat32(0,d.z,true); detData.set(new Uint8Array(fb),o+36);
      new DataView(fb).setFloat32(0,d.y,true); detData.set(new Uint8Array(fb),o+40);
      if(d.tail) for(let j=0;j<16;j++) detData[o+44+j] = d.tail[j]||0;
    });
    detData[a.details.length*60] = 0xFF; detData[a.details.length*60+1] = 0xFF;
    detailChunks.push(detData);
    new DataView(headerData.buffer).setUint32(ho+12,baseOff+detOff,true);
    cursor += detData.length;
    cursor = (cursor+3)&~3;
  });
  // terminator: 16 zero bytes (Uint8Array is pre-zeroed)

  const total = new Uint8Array(cursor);
  total.set(headerData, 0);
  areas.forEach((a,i) => {
    const idsOff_rel = new DataView(headerData.buffer).getUint32(i*16+8, true) - baseOff;
    total.set(spawnIdChunks[i], idsOff_rel);
    const detOff_rel = new DataView(headerData.buffer).getUint32(i*16+12, true) - baseOff;
    total.set(detailChunks[i], detOff_rel);
  });
  return total;
}

// ── NEW QUEST TEMPLATE ───────────────────────────────────────────────────────
const F1_QUEST_TPL = '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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

function buildNewF1Quest(){
  const b64 = F1_QUEST_TPL;
  const bin = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  // Set unique quest ID to avoid EVENT.BIN conflicts
  const qi = bin[0] | bin[1]<<8 | bin[2]<<16 | bin[3]<<24;
  const newId = 64000 + Math.floor(Math.random()*1000);
  bin[qi+30] = newId & 0xFF; bin[qi+31] = (newId>>8) & 0xFF;
  return bin;
}
