/* MHF2: Monster Hunter Freedom 2 quest-file addresses & logic
   Auto-split module — shares global scope with the other <script> files.
   Load order (set in index.html): shared.js → mhf2.js → mhfu.js → init.js */


// ── Per-game item lists ──────────────────────────────────────────
// F2 lists: raw game lists start at line 1 = ID 1; ID 0 is the
// 'nothing' entry (－－－－－－), so it is prepended here. Equipment
// lists already include 'Nothing equipped.' at ID 0.
const F2_ITEM_LIST=[[0,'－－－－－－'],[1,'Book of Combos 1'],[2,'Book of Combos 2'],[3,'Book of Combos 3'],[4,'Book of Combos 4'],[5,'Book of Combos 5'],[6,'Alchemy Guide'],[7,'Potion'],[8,'Mega Potion'],[9,'Nutrients'],[10,'Mega Nutrients'],[11,'Antidote'],[12,'Immunizer'],[13,'Power Juice'],[14,'Mega Juice'],[15,'Demondrug'],[16,'Mega Demondrug'],[17,'Power Pill'],[18,'Armorskin'],[19,'Mega Armorskin'],[20,'Armor Pill'],[21,'Cool Drink'],[22,'Hot Drink'],[23,'Thawing Agent'],[24,'Psychoserum'],[25,'Monster Fluid'],[26,'Monster Broth'],[27,'Thunderbug Juice'],[28,'Herbal Medicine'],[29,'Max Potion'],[30,'Ancient Potion'],[31,'Catalyst'],[32,'Energy Drink'],[33,'Gunpowder'],[34,'Lifecrystals'],[35,'Lifepowder'],[36,'Powercharm'],[37,'Powertalon'],[38,'Armorcharm'],[39,'Armortalon'],[40,'Tranquilizer'],[41,'Raw Meat'],[42,'Poisoned Meat'],[43,'Tainted Meat'],[44,'Drugged Meat'],[45,'Rare Steak'],[46,'Well-Done Steak'],[47,'Gourmet Steak'],[48,'Burnt Meat'],[49,'Hot Meat'],[50,'Cold Meat'],[51,'Rare Fish'],[52,'Gourmet Fish'],[53,'Gourmet Fish+'],[54,'Burnt Fish'],[55,'Boomerang'],[56,'Throwing Knife'],[57,'Poison Thrw Knf'],[58,'Sleeping Thr Knf'],[59,'Paralyze Thr Knf'],[60,'Tranq Thrwng Knf'],[61,'Bomb Material'],[62,'Paintball'],[63,'Flash Bomb'],[64,'Sonic Bomb'],[65,'Dung'],[66,'Wyvern Droppings'],[67,'Dung Bomb'],[68,'Smoke Bomb'],[69,'Poison Smoke Bmb'],[70,'Farcaster'],[71,'Deodorant'],[72,'Tranq Bomb'],[73,'Spiderweb'],[74,'Net'],[75,'Trap Tool'],[76,'Pitfall Trap'],[77,'Shock Trap'],[78,'Lightning Rod'],[79,'Barrel Lid'],[80,'Small Barrel'],[81,'Large Barrel'],[82,'Sm Barrel-Bomb'],[83,'Sm Barrel-Bomb+'],[84,'Lg Barrel-Bomb'],[85,'Lg Barrel-Bomb+'],[86,'Bounce Bomb'],[87,'Bounce Bomb+'],[88,'Anti-Dragon Bomb'],[89,'Polytan Bomb'],[90,'JUMP Barrel Bomb'],[91,'Huskberry'],[92,'Sm Bone Husk'],[93,'Lg Bone Husk'],[94,'Normal S Lv1'],[95,'Normal S Lv2'],[96,'Normal S Lv3'],[97,'Pierce S Lv1'],[98,'Pierce S Lv2'],[99,'Pierce S Lv3'],[100,'Pellet S Lv1'],[101,'Pellet S Lv2'],[102,'Pellet S Lv3'],[103,'Crag S Lv1'],[104,'Crag S Lv2'],[105,'Crag S Lv3'],[106,'Clust S Lv1'],[107,'Clust S Lv2'],[108,'Clust S Lv3'],[109,'Flaming S'],[110,'Water S'],[111,'Thunder S'],[112,'Freeze S'],[113,'Dragon S'],[114,'Recov S Lv1'],[115,'Recov S Lv2'],[116,'Poison S Lv1'],[117,'Poison S Lv2'],[118,'Para S Lv1'],[119,'Para S Lv2'],[120,'Sleep S Lv1'],[121,'Sleep S Lv2'],[122,'Tranq S'],[123,'Paint S'],[124,'Demon S'],[125,'Armor S'],[126,'No Coating'],[127,'Empty Bottle'],[128,'Power Coating'],[129,'Poison Coating'],[130,'ParalysisCoating'],[131,'Sleep Coating'],[132,'Cricket'],[133,'Worm'],[134,'Firefly'],[135,'Frog'],[136,'Tuna Bait'],[137,'Arrowana Bait'],[138,'Goldenfish Bait'],[139,'Mega Fishing Fly'],[140,'Old Pickaxe'],[141,'Iron Pickaxe'],[142,'Mega Pickaxe'],[143,'Expand Pickaxe'],[144,'Old Bugnet'],[145,'Bugnet'],[146,'Mega Bugnet'],[147,'BBQ Spit'],[148,'Gourmet BBQ Spit'],[149,'Whetstone'],[150,'Binoculars'],[151,'Garbage'],[152,'Flute'],[153,'Health Flute'],[154,'Antidote Flute'],[155,'Demon Flute'],[156,'Armor Flute'],[157,'Honey'],[158,'Sunset Herb'],[159,'Herb'],[160,'Antidote Herb'],[161,'Fire Herb'],[162,'Ivy'],[163,'Sleep Herb'],[164,'Sap Plant'],[165,'Felvine'],[166,'Cactus Flower'],[167,'Hot Pepper'],[168,'Dosbiscus'],[169,'Mountain Herbs'],[170,'Special Mushroom'],[171,'Select Mushroom'],[172,'Blue Mushroom'],[173,'Nitroshroom'],[174,'Parashroom'],[175,'Toadstool'],[176,'Exciteshroom'],[177,'Dragon Toadstool'],[178,'Spicy Mushroom'],[179,'Chaos Mushroom'],[180,'Paintberry'],[181,'Power Seed'],[182,'Armor Seed'],[183,'Dragon Seed'],[184,'Scatternut'],[185,'Needleberry'],[186,'Bomberry'],[187,'Tropical Berry'],[188,'Frozen Berry'],[189,'Red Seed'],[190,'Green Seed'],[191,'Beautiful Shell'],[192,'Black Pearl'],[193,'Stone'],[194,'Disk Stone'],[195,'Iron Ore'],[196,'Earth Crystal'],[197,'Machalite Ore'],[198,'Dragonite Ore'],[199,'Carbalite Ore'],[200,'Union Ore'],[201,'Firestone'],[202,'Firecell Stone'],[203,'Coal'],[204,'Goldstone Piece'],[205,'Goldstone Hunk'],[206,'Lightcrystal'],[207,'Novacrystal'],[208,'Antiseptic Stone'],[209,'Ice Crystal'],[210,'Rainbow Ore'],[211,'Armor Stone'],[212,'Armor Sphere'],[213,'Armor Sphere+'],[214,'Hrd Armor Sphere'],[215,'Hvy Armor Sphere'],[216,'Knife Mackerel'],[217,'Sushifish'],[218,'Sleepyfish'],[219,'Pin Tuna'],[220,'Rumblefish'],[221,'Scatterfish'],[222,'Burst Arrowana'],[223,'Bomb Arrowana'],[224,'Glutton Tuna'],[225,'Gastronome Tuna'],[226,'Speartuna'],[227,'Small Goldenfish'],[228,'Goldenfish'],[229,'Silverfish'],[230,'Ancient Fish'],[231,'Springnight Carp'],[232,'Insect Husk'],[233,'Yambug'],[234,'Bughopper'],[235,'Snakebee Larva'],[236,'Godbug'],[237,'Bitterbug'],[238,'Flashbug'],[239,'Thunderbug'],[240,'Carpenterbug'],[241,'King Scarab'],[242,'Killer Beetle'],[243,'Hercudrome'],[244,'Rare Scarab'],[245,'Royal Rhino'],[246,'Divine Rhino'],[247,'Rainbow Insect'],[248,'Great Hornfly'],[249,'Great Ladybug'],[250,'Screamer'],[251,'Poison Sac'],[252,'Toxin Sac'],[253,'Paralysis Sac'],[254,'Sleep Sac'],[255,'Flame Sac'],[256,'Inferno Sac'],[257,'Electro Sac'],[258,'Thunder Sac'],[259,'Power Extract'],[260,'Pale Extract'],[261,'Sm Monster Bone'],[262,'Med Monster Bone'],[263,'Lg Monster Bone'],[264,'Monster Bone+'],[265,'Hrd Monster Bone'],[266,'Eldr Dragon Bone'],[267,'Mystery Bone'],[268,'Unknown Skull'],[269,'Master\'s Skull'],[270,'Bone'],[271,'Brute Bone'],[272,'Giant Bone'],[273,'Stout Bone'],[274,'Wyvern Fang'],[275,'Wyvern Claw'],[276,'Wyvern Stone'],[277,'White Liver'],[278,'Popo Tongue'],[279,'Secret Pouch'],[280,'CarapaceonBrains'],[281,'CarapaceonBrain+'],[282,'Piscine Liver'],[283,'Wyvern Tears'],[284,'Wyvern Sobs'],[285,'Territorial Dung'],[286,'TerritorialDung+'],[287,'Crab Pearl'],[288,'Crab Pearl+'],[289,'Dragon Treasure'],[290,'Anc Drgn Treasre'],[291,'Decayed Drgn Scl'],[292,'Dragon Herb'],[293,'Felyne Fur Ruby'],[294,'Mosswine Hide'],[295,'Bullfango Pelt'],[296,'Bullfango Head'],[297,'Bulldrome Tusk'],[298,'Bulldrome Hide'],[299,'Bulldrome Hide+'],[300,'Kelbi Horn'],[301,'Kelbi Hide'],[302,'Anteka Antlers'],[303,'Anteka Pelt'],[304,'High Qualty Pelt'],[305,'Remobra Skin'],[306,'Remobra Skin+'],[307,'Striped Skin'],[308,'Remobra Skull'],[309,'ShakalakaTreasre'],[310,'ShakaInheritance'],[311,'Giaprey Scale'],[312,'Giaprey Scale+'],[313,'Giaprey Hide'],[314,'Giaprey Hide+'],[315,'Giadrome Hide'],[316,'Giadrome Claw'],[317,'Giadrome Claw+'],[318,'Giadrome Skull'],[319,'Velociprey Fang'],[320,'Velociprey Scale'],[321,'Velociprey Scle+'],[322,'Velociprey Hide'],[323,'Velociprey Hide+'],[324,'Velocidrome Hide'],[325,'Velocidrome Claw'],[326,'Velocidrome Clw+'],[327,'Velocidrome Head'],[328,'Genprey Fang'],[329,'Genprey Scale'],[330,'Genprey Scale+'],[331,'Genprey Hide'],[332,'Genprey Hide+'],[333,'Gendrome Hide'],[334,'Gendrome Tail'],[335,'Gendrome Skull'],[336,'Ioprey Fang'],[337,'Ioprey Scale'],[338,'Ioprey Scale+'],[339,'Ioprey Hide'],[340,'Ioprey Hide+'],[341,'Iodrome Hide'],[342,'Iodrome Skull'],[343,'Kut-Ku Scale'],[344,'Kut-Ku Scale+'],[345,'Kut-Ku Shell'],[346,'Kut-Ku Carapace'],[347,'Kut-Ku Ear'],[348,'Long Kut-Ku Ear'],[349,'Giant Beak'],[350,'Splendid Beak'],[351,'Kut-Ku Webbing'],[352,'Blue Kut-Ku Scl'],[353,'Blue Kut-Ku Scl+'],[354,'Blue Kut-Ku Shl'],[355,'Blue Kut-Ku Cpc'],[356,'Rubbery Hide'],[357,'Rubbery Hide+'],[358,'Gypceros Head'],[359,'Pur Rubbery Hide'],[360,'Pur Gypceros Wng'],[361,'Garuga Scale'],[362,'Garuga Shell'],[363,'Garuga Ear'],[364,'Sharpened Beak'],[365,'Garuga Wing'],[366,'Garuga Tail'],[367,'Garuga Mane'],[368,'Blango Pelt'],[369,'Blango Pelt+'],[370,'Sharp Claw'],[371,'Blangonga Fang'],[372,'Blangonga Fang+'],[373,'Blangonga Pelt'],[374,'Blangonga Pelt+'],[375,'Blangonga Whiskr'],[376,'Blangonga Tail'],[377,'Conga Pelt'],[378,'Conga Pelt+'],[379,'Congalala Pelt'],[380,'Vibrant Pelt'],[381,'Congalala Claw'],[382,'Congalala Fang'],[383,'Congalala Pelt+'],[384,'Congalala Claw+'],[385,'Rajang Horn'],[386,'Rajang Fang'],[387,'Blk Rajang Pelt'],[388,'Rajang Claw'],[389,'Rajang Tail'],[390,'Gold Rajang Pelt'],[391,'Piscine Fang'],[392,'Plesioth Scale'],[393,'Plesioth Scale+'],[394,'Plesioth Fin'],[395,'Plesioth Fin+'],[396,'Grn Plesioth Scl'],[397,'Grn Plsioth Scl+'],[398,'Grn Plesioth Fin'],[399,'Grn Plsioth Fin+'],[400,'Cephalos Scale'],[401,'Cephalos Scale+'],[402,'Cephalos Fin'],[403,'Cephalos Fin+'],[404,'Coral Cphlos Scl'],[405,'Coral Cphlos Fin'],[406,'Wyvern Skull Shl'],[407,'Sm Hermitaur Shl'],[408,'Hermitaur Shell'],[409,'Hermitaur Claw'],[410,'Hermitaur Carpce'],[411,'Hermitaur Claw+'],[412,'Sm Ceanataur Shl'],[413,'Ceanataur Shell'],[414,'Ceanataur Carpce'],[415,'Ceanataur Leg'],[416,'Ceanataur Pincer'],[417,'Ceanataur Claw'],[418,'Ceanataur Claw+'],[419,'Sm Lobstershell'],[420,'Lg Lobstershell'],[421,'Gt Lobstershell'],[422,'Rathian Scale'],[423,'Rathian Scale+'],[424,'Rathian Plate'],[425,'Rathian Ruby'],[426,'Rathian Shell'],[427,'Rathian Carapace'],[428,'Rathian Spike'],[429,'Rathian Spike+'],[430,'Pnk Rathian Scl'],[431,'Pnk Rathian Scl+'],[432,'Pnk Rathian Shl'],[433,'Pnk Rathian Cpc'],[434,'Gld Rathian Scl+'],[435,'Gld Rathian Cpc'],[436,'Fire Wyvern Claw'],[437,'FireWyvern Fluid'],[438,'FireWyvrn Marrow'],[439,'FireWyvrn BrnStm'],[440,'Rathalos Scale'],[441,'Rathalos Scale+'],[442,'Rathalos Plate'],[443,'Rathalos Ruby'],[444,'Rathalos Shell'],[445,'Rathalos Carpace'],[446,'Rathalos Tail'],[447,'Rathalos Webbing'],[448,'Rathalos Wing'],[449,'Azure Rthlos Scl'],[450,'Azre Rthlos Scl+'],[451,'Azure Rthlos Shl'],[452,'Azure Rthlos Cpc'],[453,'Azur Rthlos Tail'],[454,'Azur Rthlos Wing'],[455,'Slvr Rthlos Scl+'],[456,'Slvr Rthlos Cpc'],[457,'Slvr Rthlos Tail'],[458,'Slvr Rthlos Wing'],[459,'Flabby Hide'],[460,'Khezu Hide - Tan'],[461,'Pale Bone'],[462,'Pale Khezu Steak'],[463,'Alluring Hide'],[464,'Alluring Webbing'],[465,'Basarios Shell'],[466,'Basarios Carpace'],[467,'Basarios Wing'],[468,'Basarios Tears'],[469,'Tigrex Scale'],[470,'Tigrex Scale+'],[471,'Tigrex Shell'],[472,'Tigrex Carapace'],[473,'Tigrex Tail'],[474,'Tigrex Claw'],[475,'Tigrex Claw+'],[476,'Tigrex Fang'],[477,'Tigrex Fang+'],[478,'Tigrex Skull Shl'],[479,'Gravios Shell'],[480,'Gravios Carapace'],[481,'Gravios Skl Shl'],[482,'Gravios BrainStm'],[483,'Blk Gravios Shl'],[484,'Blk Gravios Cpc'],[485,'Blk Gravios Skl'],[486,'Twisted Horn'],[487,'Majestic Horn'],[488,'Diablos Shell'],[489,'Diablos Carapace'],[490,'Diablos Spine'],[491,'Diablos Thoracic'],[492,'Diablos Tail'],[493,'Blos Fang'],[494,'TwstBlkBlosHrn'],[495,'Black Blos Shell'],[496,'Black Blos Cpc'],[497,'Black Blos Spine'],[498,'Blk Blos Thracic'],[499,'Black Blos Tail'],[500,'Vespoid Abdomen'],[501,'Vespoid Shell'],[502,'Vespoid Carapace'],[503,'Vespoid Wing'],[504,'Vespoid InnrWng'],[505,'Hornetaur Shell'],[506,'Hornetaur Crapce'],[507,'Hornetaur Head'],[508,'Hornetaur Wing'],[509,'HornetaurInnrWng'],[510,'Blood Red Horn'],[511,'Monoblos Shell'],[512,'Monoblos Spine'],[513,'Monoblos Heart'],[514,'Wht Monoblos Hrn'],[515,'Wht Monoblos Shl'],[516,'Wht Monoblos Spn'],[517,'Kirin Horn'],[518,'Kirin Hide'],[519,'Kirin Hide+'],[520,'Kirin Mane'],[521,'Kirin Thndr Tail'],[522,'Kirin Azure Horn'],[523,'Lao-Shan\'s Claw'],[524,'Lao-Shan\'s Horn'],[525,'Lao-Shan\'s Scale'],[526,'Lao-Shan Scale+'],[527,'Lao-Shan\'s Ruby'],[528,'Lao-Shan\'s Shell'],[529,'Lao-ShanCarapace'],[530,'Azure LaoS Horn'],[531,'Azure LaoS Shell'],[532,'Gaoren Shell'],[533,'Gaoren Carapace'],[534,'Gaoren Spine'],[535,'Gaoren Thoracic'],[536,'Gaoren Pincer'],[537,'Gaoren Claw'],[538,'Daora Shell'],[539,'Daora Carapace'],[540,'DaoraDragonScale'],[541,'DaoraDragonScal+'],[542,'Daora Webbing'],[543,'Daora Horn'],[544,'Daora Tail'],[545,'Daora Claw'],[546,'Daora Sharp Claw'],[547,'Daora Jewel'],[548,'Chameleos Hide'],[549,'Chameleos Hide+'],[550,'Chameleos Horn'],[551,'Chameleos Spike'],[552,'Chameleos Claw'],[553,'ChameleosWebbing'],[554,'Chameleos Tail'],[555,'Chameleos Jewel'],[556,'Fire Dragon Scl'],[557,'Fire Dragon Claw'],[558,'Fire Drgn Webbng'],[559,'Fire Dragon Pwdr'],[560,'Fire Drgn Jwl'],[561,'ElderDragonBlood'],[562,'Fire Drgn Scl+'],[563,'Lunastra Shell'],[564,'Lunastra Mane'],[565,'Lunastra Tail'],[566,'Lunastra Horn'],[567,'Teostra Shell'],[568,'Teostra Carapace'],[569,'Teostra Mane'],[570,'Teostra Tail'],[571,'Teostra Horn'],[572,'Teostra Horn+'],[573,'Dragonmoss'],[574,'Dragonmoss+'],[575,'Dragonwood'],[576,'Dragonwood+'],[577,'Dark Piece'],[578,'Dark Stone'],[579,'Fatalis Horn'],[580,'Fatalis Scale'],[581,'Fatalis Shell'],[582,'Fatalis Eye'],[583,'Fatalis Webbing'],[584,'Fatalis CrmsnHrn'],[585,'Fatalis CrmsnScl'],[586,'Fatalis CrmsnShl'],[587,'Fatalis DevilEye'],[588,'Fatalis CrmsnWng'],[589,'Wht Fatalis Scl'],[590,'Wht Fatalis Shl'],[591,'Wht Fatalis Wbng'],[592,'Wht Fatalis Horn'],[593,'Akantor Scale'],[594,'Akantor Shell'],[595,'Akantor Tail'],[596,'Akantor Claw'],[597,'Akantor Fang'],[598,'Akantor Spike'],[599,'Wyverian Harp'],[600,'Sinister Cloth'],[601,'Lost Umbrella'],[602,'Ruststone'],[603,'Flat Ruststone'],[604,'Large Ruststone'],[605,'Small Ruststone'],[606,'Ruststone Rod'],[607,'Ancient Stone'],[608,'AncientFlatstone'],[609,'Lg Ancient Stone'],[610,'Sm Ancient Stone'],[611,'Ancient StoneRod'],[612,'Organizer Guide'],[613,'Backpacker Guide'],[614,'Lynian Info'],[615,'Shakalaka Info'],[616,'Neopteron Info'],[617,'GrtThundrbugInfo'],[618,'Herbivore Info'],[619,'Bird Wyvern Info'],[620,'Yian Garuga Info'],[621,'FlyingWyvernInfo'],[622,'Remobra Info'],[623,'Tigrex Info'],[624,'Akantor Info'],[625,'Piscine Info'],[626,'Carapaceon Info1'],[627,'Carapaceon Info2'],[628,'Shen Gaoren Info'],[629,'Primatius Info'],[630,'Rajang Info'],[631,'Kirin Info'],[632,'KushalaDaoraInfo'],[633,'Chameleos Info'],[634,'Lunastra Info'],[635,'Teostra Info'],[636,'Lao-Shan Info'],[637,'Fatalis Info'],[638,'Steel Egg'],[639,'Silver Egg'],[640,'Golden Egg'],[641,'Map'],[642,'First-Aid Med'],[643,'Ration'],[644,'Portable Spit'],[645,'Mini Whetstone'],[646,'Prtbl Shock Trap'],[647,'Supply Flash Bmb'],[648,'Sply Max Potion'],[649,'Sply Pitfall Trp'],[650,'Sply Lg Brrl Bmb'],[651,'Ballista S'],[652,'Cannon S'],[653,'Wyvern'],[654,'Wyvern Egg'],[655,'Herbivore Egg'],[656,'Carnivore Egg'],[657,'Sootstone Ore'],[658,'Quartz Ore'],[659,'Powderstone'],[660,'Khezu Whelp'],[661,'Khz Whlp Ice Crm'],[662,'Kut-Ku Coin'],[663,'Congalala Coin'],[664,'Khezu Coin'],[665,'Daimyo Coin'],[666,'Blangonga Coin'],[667,'Yian Garuga Coin'],[668,'Tigrex Coin'],[669,'Diablos Coin'],[670,'Gravios Coin'],[671,'Kirin Coin'],[672,'Cephadrome Coin'],[673,'Plesioth Coin'],[674,'Shogun Coin'],[675,'Fire Coin'],[676,'Rajang Coin'],[677,'Commendation'],[678,'Pawprint Stamp'],[679,'Pokke Ticket'],[680,'Pokke Ticket+'],[681,'Normal Ticket'],[682,'Hard Ticket'],[683,'Plus Class Tcket'],[684,'Hero of Kkto Bio'],[685,'Hero of JumboBio'],[686,'Elder Thank You'],[687,'Elder Thnk You+'],[688,'FlynMealPassPlus'],[689,'FlynMealPassReg'],[690,'VeggieElderTcket'],[691,'VeggieElderTckt+'],[692,'VegElderTcktBrz'],[693,'VegElderTcktSlv'],[694,'VegElderTcktGld'],[695,'Blackbelt Ticket'],[696,'Expert Ticket'],[697,'Paw Pass Ticket'],[698,'Limited Paw Pass'],[699,'Famitsu Ticket'],[700,'Famitsu Invoice'],[701,'Famitsu PT Tckt'],[702,'FamitsuCustomTkt'],[703,'Dengeki Ticket'],[704,'Dengeki G Ticket'],[705,'Pirate J Ticket'],[706,'Hunter\'s Ticket'],[707,'Hunter Soul Tkt'],[708,'Puppet Ticket'],[709,'Suiko Jewel'],[710,'Akito Jewel'],[711,'BattlefieldJewel'],[712,'LapisLazuliJewel'],[713,'Paralysis Jewel'],[714,'Pep Jewel'],[715,'Jolt Jewel'],[716,'Steadfast Jewel'],[717,'Antidote Jewel'],[718,'Retroviral Jewel'],[719,'Antiviral Jewel'],[720,'Snowblower Jewel'],[721,'Tip Toe Jewel'],[722,'Ninja Jewel'],[723,'Strength Jewel'],[724,'Feel Good Jewel'],[725,'Razor Jewel'],[726,'Artisan Jewel'],[727,'Fencer Jewel'],[728,'Expert Jewel'],[729,'Grinder Jewel'],[730,'Stone Wall Jewel'],[731,'Hard Wall Jewel'],[732,'HvnlyShieldJewel'],[733,'Hardball Jewel'],[734,'Early Bird Jewel'],[735,'Speed Fire Jewel'],[736,'Recoilless Jewel'],[737,'StrongShot Jewel'],[738,'Pierce Jewel'],[739,'Pellet Jewel'],[740,'Shot Bonus Jewel'],[741,'PierceBonusJewel'],[742,'PelletBonusJewel'],[743,'Bomb Bonus Jewel'],[744,'ScattrBonusJewel'],[745,'SpecialAtk Jewel'],[746,'Element Jewel'],[747,'Bombardier Jewel'],[748,'PickyEater Jewel'],[749,'Fatso Jewel'],[750,'Attack Jewel'],[751,'Defense Jewel'],[752,'Protection Jewel'],[753,'Earplug Jewel'],[754,'Alarm Jewel'],[755,'Friendship Jewel'],[756,'Backpacker Jewel'],[757,'Impervious Jewel'],[758,'Inferno Jewel'],[759,'Crimson Jewel'],[760,'Stream Jewel'],[761,'Torrent Jewel'],[762,'Freeze Jewel'],[763,'Glacier Jewel'],[764,'Lightning Jewel'],[765,'Thunder Jewel'],[766,'Slayer Jewel'],[767,'CoolBreeze Jewel'],[768,'WarmBreeze Jewel'],[769,'PaperweightJewel'],[770,'Map Jewel'],[771,'Gathering Jewel'],[772,'Grab\'n\'DashJewel'],[773,'Good Luck Jewel'],[774,'Blessing Jewel'],[775,'Fate Jewel'],[776,'Fisher Jewel'],[777,'Psychic Jewel'],[778,'Curing Jewel'],[779,'Professor Jewel'],[780,'Armory Jewel'],[781,'SecretArts Jewel'],[782,'Evade Jewel'],[783,'Danger Jewel'],[784,'StayingPwr Jewel'],[785,'Marathon Jewel'],[786,'Ammo Box Jewel'],[787,'Sniper Jewel'],[788,'SharpshootrJewel'],[789,'QuickEaterJewel'],[790,'HideCutter Jewel'],[791,'Melt-Proof Jewel'],[792,'Anchor Jewel'],[793,'BBQ Jewel'],[794,'Small Arms Jewel'],[795,'Howitzer Jewel'],[796,'Fife Jewel'],[797,'Tireless Jewel'],[798,'AntiParalyzJewel'],[799,'Anti-Faint Jewel'],[800,'Antivenin Jewel'],[801,'Snowplow Jewel'],[802,'SpeedyRecvrJewel'],[803,'Celebrity Jewel'],[804,'IronCurtainJewel'],[805,'High Speed Jewel'],[806,'Fasting Jewel'],[807,'Fierce Jewel'],[808,'Turtle Jewel'],[809,'Beloved Jewel'],[810,'Omnipotent Jewel'],[811,'Extinction Jewel'],[812,'Cold Wind Jewel'],[813,'Hot Wind Jewel'],[814,'HeavyMetal Jewel'],[815,'Destiny Jewel'],[816,'Cure All Jewel'],[817,'Dodge Jewel'],[818,'Permanence Jewel'],[819,'Fast Food Jewel'],[820,'Anti-Thaw Jewel'],[821,'Tectonic Jewel'],[822,'Cutter Jewel'],[823,'Master Jewel'],[824,'Swordsman Jewel'],[825,'Hermit Jewel'],[826,'StrongWall Jewel'],[827,'Barrage Jewel'],[828,'Shockless Jewel'],[829,'Silencer Jewel'],[830,'Crisis Jewel'],[831,'Sprinter Jewel'],[832,'Magazine Jewel'],[833,'Giadrome Jewel'],[834,'Kut-Ku Jewel'],[835,'Daimyo Jewel'],[836,'Congalala Jewel'],[837,'Rathalos Jewel'],[838,'Gravios Jewel'],[839,'Eldr Drgn Tears'],[840,'Lao-Shan Melon'],[841,'Eldr Drgn Fossil'],[842,'Gypceros Crystal'],[843,'Rathian Jewel'],[844,'Teostra Meteor'],[845,'Frozen Meatball'],[846,'Buckshot Acorn'],[847,'Cephadrome Melon'],[848,'Golden Cocoon'],[849,'Amber Egg'],[850,'Graviscus Bulb'],[851,'Hard Dragonrock'],[852,'Dragonrock+'],[853,'Dragonrock'],[854,'Green Fin'],[855,'Kut-Ku Cartilage'],[856,'Hermitaur Brains'],[857,'Congalala Stomch'],[858,'Rathalos Liver'],[859,'Gravios Giblets'],[860,'Giadrome Thigh'],[861,'Kut-Ku Gizzards'],[862,'Daimyo Legs'],[863,'Congalala Innrds'],[864,'Rathalos Tongue'],[865,'Gravios Wingtip'],[866,'Blango Bacon'],[867,'Kut-Ku Skin'],[868,'Cephalos Roe'],[869,'Twstd Bldrm Tsk'],[870,'Rathian Chops'],[871,'Purple Crest'],[872,'Dragonite (L)'],[873,'Dragonite (M)'],[874,'Dragonite (S)'],[875,'Pokke Snowman'],[876,'Felyne Crown'],[877,'GldFlynJewelSwd'],[878,'Dynasty Vase'],[879,'Mysterious Mask'],[880,'Eldr Drgn Rfrnc'],[881,'Blngo Blzrd Ball'],[882,'Blngo Flrry Ball'],[883,'Inferior FlynCrn'],[884,'Flyn Crwn Frgmnt'],[885,'Hndlelss Gld Bld'],[886,'GldBladelessHndl'],[887,'Bttmlss Old Vase'],[888,'Old Vase Bottom'],[889,'Holed Shaka Mask'],[890,'Shakalaka Stone'],[891,'Torn Old Book'],[892,'Old Book Scrap'],[893,'Popo Dandelion'],[894,'Velociprey Lily'],[895,'Monoblos Rose'],[896,'Chameleos\' Purse'],[897,'Peach Clover'],[898,'Gravibiscus'],[899,'Wyvern Grass'],[900,'Glitter Mushroom'],[901,'Shining Jellyfsh'],[902,'Bright Mushroom'],[903,'Glittr Capshroom'],[904,'Skin Care Shroom'],[905,'Beauty Shroom'],[906,'Wyvernshroom'],[907,'Blangonga Apple'],[908,'Kelbi Nuts'],[909,'Cephalos Wtrmeln'],[910,'Khezu Seed'],[911,'Writhe Nut'],[912,'Basarios Peach'],[913,'Lady Mackeral'],[914,'Angler Snapper'],[915,'Yokotuna'],[916,'Nobunaga Bonito'],[917,'Goldendrome'],[918,'Amateratuna'],[919,'Chuck Mackerel'],[920,'Victory Fish'],[921,'Plump Goldenfish'],[922,'Hideyoshi Ambrjk'],[923,'Silverdrome'],[924,'Susanofish'],[925,'Large Wyvernfish'],[926,'Med Wyvernfish'],[927,'Small Wyvernfish'],[928,'Pickaxe Fish'],[929,'Bugnet Fish'],[930,'Cooler Fish'],[931,'Pokke Quartz'],[932,'Telos Stone'],[933,'Sekumaeya Pearl'],[934,'Schradite'],[935,'Minegarde Night'],[936,'Lateobrium'],[937,'Furiamond'],[938,'Jumboite'],[939,'Dragokurium'],[940,'Liber Ruby'],[941,'Kokotoite'],[942,'Dondorumin'],[943,'Wyvern Ore'],[944,'Pure Wyvern Ore'],[945,'Pillow Bug'],[946,'Cleopatris'],[947,'GiantStagBeetle'],[948,'Ghostly Cicada'],[949,'Celeb Cicada'],[950,'Athena Beetle'],[951,'Princess Scarab'],[952,'Marilyn Btterfly'],[953,'Cricket of Troy'],[954,'Cutie Crawler'],[955,'Lovely Locust'],[956,'Killer Venus'],[957,'Rathian Fly'],[958,'Rathalos Fly'],[959,'Embroidered Flag']];

// Equipment reference lists (ID = index). For training/arena gear and
// hex-ID lookups. F2: helm/mail/vambraces/belt/pants/weapons.
// FU: hexpat-style arrays (HeadArmorID, ChestArmorID, ... WepBMID, WepGunID).
const F2_EQUIP={helm:['Nothing equipped.','Leather Helm','Chain Helm','Hunter\'s Helm','Hunter\'s Cap','Bone Helm','Bone Cap','Velociprey Helm','Velociprey Cap','Battle Helm','Battle Cap','Vespoid Helm','Vespoid Cap','Hornet Helm','Hornet Cap','Hi-Metal Helm','Hi-Metal Cap','Genprey Helm','Genprey Cap','Ioprey Helm','Ioprey Cap','Gypceros Helm','Gypceros Cap','Cephalos Helm','Cephalos Cap','Rathian Helm','Rathian Cap','Khezu Helm','Khezu Cap','Rathalos Helm','Rathalos Cap','Plesioth Helm','Plesioth Cap','Lobster Helm','Basarios Helm','Basarios Cap','Diablo Helm','Diablo Cap','Monoblos Helm','Monoblos Cap','Gravios Helm','Gravios Cap','Black Belt Helm','Mosswine Mask','Felyne Mask','Chaoshroom','Melahoa Flower Hat','Makluva Hood','Bistro Cap','Velociprey Mask','Genprey Mask','Ioprey Mask','Bullfango Mask','Red Piercing','Blue Piercing','Yellow Piercing','Black Piercing','Shinobi Mask (Sun)','Shinobi Mask (Moon)','Guardian Helm','Guardian Mask','Helper Hood','Healer Glasses','Skull Face','Yian Garuga Helm','Yian Garuga Cap','Garuga Mask','Auroros Helm','Genesis Headpiece','Borealis Crown','Glyph Crown','Black Head','Black Face','Leather Helm U','Chain Helm U','Hunter\'s Helm U','Hunter\'s Cap U','Bone Helm U','Bone Cap U','Giaprey Helm U','Giaprey Cap U','Battle Helm U','Battle Cap U','Vespoid Helm U','Vespoid Cap U','Hornet Helm U','Hornet Cap U','Hi-Metal Helm U','Hi-Metal Cap U','Genprey Helm U','Genprey Cap U','Ioprey Helm U','Ioprey Cap U','Gypceros Helm U','Gypceros Cap U','Cephalos Helm U','Cephalos Cap U','Rathian Heart Helm','Rathian Heart Cap','Khezu Helm U','Khezu Cap U','Rathalos Soul Helm','Rathalos Soul Cap','Plesioth Helm U','Plesioth Cap U','Basarios Helm U','Basarios Cap U','Diablo Helm U','Diablo Cap U','Monodevil Helm','Monodevil Cap','Gravios Helm U','Gravios Cap U','Shinobi Mask (Sky)','Shinobi Mask (Sea)','Guardian Helm U','Guardian Mask U','Helper Hood U','Healer Beret U','Auroros Helm Ten','Genesis HeadpieceTen','Borealis Crown Ten','Glyph Crown Ten','Fatalis Head','Fatalis Face','Golden Moon Helm','Golden Moon Cap','Silver Sol Helm','Silver Sol Cap','Leather Helm S','Chain Helm S','Hunter\'s Helm S','Hunter\'s Cap S','Bone Helm S','Bone Cap S','Velociprey Helm S','Velociprey Cap S','Battle Helm S','Battle Cap S','Vespoid Helm S','Vespoid Cap S','Hornet Helm S','Hornet Cap S','Hi-Metal Helm S','Hi-Metal Cap S','Genprey Helm S','Genprey Cap S','Kut-Ku Helm S','Kut-Ku Cap S','Ioprey Helm S','Ioprey Cap S','Gypceros Helm S','Gypceros Cap S','Cephalos Helm S','Cephalos Cap S','Rathian Helm S','Rathian Cap S','Khezu Helm S','Khezu Cap S','Rathalos Helm S','Rathalos Cap S','Plesioth Helm S','Plesioth Cap S','Basarios Helm S','Basarios Cap S','Diablo Helm S','Diablo Cap S','Monoblos Helm S','Monoblos Cap S','Gravios Helm S','Gravios Cap S','Shinobi Mask(Heaven)','Shinobi Mask (Earth)','RdGuildGuardTricorne','Red Guild Guard Mask','Red Guild Guard Hat','RedGuildGuardPiercng','Auroros Helm Haku','GenesisHeadpieceHaku','Borealis Crown Haku','Glyph Crown Haku','Dragonhead S','Dragonface S','Hermitaur Helm','Hermitaur Cap','Hermitaur Helm U','Hermitaur Cap U','Hermitaur Helm S','Hermitaur Cap S','Conga Helm','Conga Cap','Conga Helm U','Conga Cap U','Conga Helm S','Conga Cap S','Blango Helm','Blango Cap','Blango Helm U','Blango Cap U','Blango Helm S','Blango Cap S','Ceanataur Helm','Ceanataur Cap','Ceanataur Helm U','Ceanataur Cap U','Ceanataur Helm S','Ceanataur Cap S','Kirin Horn','Kirin Crest','Kirin Horn S','Kirin Crest S','Kushala Glare','Kushala Snarl','Mizuha Cap','Extravagant Cap','Empress Crown','Empress Mask','Indra Helm','Steadfast Helm','Kaiser Crown','Kaiser Mask','Guardian Spirit Mask','Carnage Mask','Golden Hair Tie','Puppet Master Mask','White Fatalis Head','White Fatalis Face','Black Belt Helm S','Giaprey Mask','Remobra Face','Guild Knight Feather','Guild Knight Mask','Maiden\'s Hat','Designer Glasses','White Piercing','BlGuildGuardTricorne','Blue GuildGuard Mask','Blue Guild Guard Hat','BluGuildGuardPiercng','Lobster Cap','Silence Piercing','Piercing of Rage','Demon Edge Piercing','Blast Piercing','Ambitious Piercing','Piercing of Pursuit','Kirin Piercing','Piercing of Might','Piercing of Fate','Echo Piercing','dummy','dummy','Mafumofu Hood','Mafumofu Hood S','Giaprey Helm','Giaprey Cap','Melahoa Bloom','Melahoa Flower Hat U','Melahoa Bloom U','Makluva Gills','Makluva Hood U','Makluva Gills U','Bistro Cap U','Kut-Ku Helm','Kut-Ku Cap','Kut-Ku Helm D','Kut-Ku Cap D','Kut-Ku Helm U','Kut-Ku Cap U','Gypceros Helm D','Gypceros Cap D','Plesioth Helm D','Plesioth Cap D','Khezu Helm D','Khezu Cap D','Obituary Testa','Obituary Caput','Butterfly Testa','Butterfly Caput','Obituary Testa S','Obituary Caput S','Butterfly Testa S','Butterfly Caput S','Kushala Glare S','Kushala Snarl S','Tigrex Helm','Tigrex Cap','Tigrex Helm S','Tigrex Cap S','Death Stench Brain','Death Stench Soul','Death Stench Brain S','Death Stench Soul S','Diablo Helm D','Diablo Cap D','Gravios Helm D','Gravios Cap D','Supreme Mizuha Cap','SuprmeExtravagantCap','Kaiser Crown S','Kaiser Mask S','Rathian Heart Helm U','Rathian Heart Cap U','Rathalos Soul Helm U','Rathalos Soul Cap U','Ultimate Indra Helm','SupremeSteadfastHelm','Dark Akantor Mask','Dark Akantor Fangs','Sword Saint Piercing','Barrage Piercing','Protection Piercing','dummy','dummy','Jolly Roger Hat','Jolly Roger Cap'],mail:['<NEW SECTION>','Nothing equipped.','Leather Armor','Chain Mail','Hunter\'s Mail','Hunter\'s Vest','Bone Mail','Bone Vest','Velociprey Mail','Velociprey Vest','Battle Mail','Battle Vest','Vespoid Mail','Vespoid Vest','Hornet Mail','Hornet Vest','Hi-Metal Mail','Hi-Metal Vest','Genprey Mail','Genprey Vest','Kut-Ku Mail','Kut-Ku Vest','Ioprey Mail','Ioprey Vest','Gypceros Mail','Gypceros Vest','Cephalos Mail','Cephalos Vest','Steel Mail','Rathian Mail','Rathian Vest','Khezu Mail','Khezu Vest','Rathalos Mail','Rathalos Vest','Plesioth Mail','Plesioth Vest','Lobster Mail','Lobster Vest','Basarios Mail','Basarios Vest','Diablo Mail','Diablo Vest','Monoblos Mail','Monoblos Vest','Gravios Mail','Gravios Vest','Black Belt Mail','Moss Breastplate','MelahoaFlowerJacket','Makluva Cover','Bistro Jacket','Velociprey Body','Genprey Body','Ioprey Body','Shinobi Suit (Sun)','Shinobi Suit (Moon)','Guardian Suit','Guardian Vest','Helper Vest','Healer Vest','Yian Garuga Mail','Yian Garuga Vest','Auroros Torso','Genesis Torso','Borealis Chest','Glyph Chest','Black Hide','Black Skin','Leather Armor U','Chain Mail U','Hunter\'s Mail U','Hunter\'s Vest U','Bone Mail U','Bone Vest U','Giaprey Mail U','Giaprey Vest U','Battle Mail U','Battle Vest U','Vespoid Mail U','Vespoid Vest U','Hornet Mail U','Hornet Vest U','Hi-Metal Mail U','Hi-Metal Vest U','Genprey Mail U','Genprey Vest U','Kut-Ku Mail U','Kut-Ku Vest U','Ioprey Mail U','Ioprey Vest U','Gypceros Mail U','Gypceros Vest U','Cephalos Mail U','Cephalos Vest U','Steel Mail U','Rathian Heart Mail','Rathian Heart Vest','Khezu Mail U','Khezu Vest U','Rathalos Soul Mail','Rathalos Soul Vest','Plesioth Mail U','Plesioth Vest U','Basarios Mail U','Basarios Vest U','Diablo Mail U','Diablo Vest U','Monodevil Mail','Monodevil Vest','Gravios Mail U','Gravios Vest U','Shinobi Suit (Sky)','Shinobi Suit (Sea)','Guardian Suit U','Guardian Vest U','Helper Vest U','Healer Vest U','Auroros Torso Ten','Genesis Torso Ten','Borealis Chest Ten','Glyph Chest Ten','Fatalis Hide','Fatalis Skin','Golden Moon Mail','Golden Moon Vest','Silver Sol Mail','Silver Sol Vest','Leather Armor S','Chain Mail S','Hunter\'s Mail S','Hunter\'s Vest S','Bone Mail S','Bone Vest S','Velociprey Mail S','Velociprey Vest S','Battle Mail S','Battle Vest S','Vespoid Mail S','Vespoid Vest S','Hornet Mail S','Hornet Vest S','Hi-Metal Mail S','Hi-Metal Vest S','Genprey Mail S','Genprey Vest S','Kut-Ku Mail S','Kut-Ku Vest S','Ioprey Mail S','Ioprey Vest S','Gypceros Mail S','Gypceros Vest S','Cephalos Mail S','Cephalos Vest S','Steel Mail S','Rathian Mail S','Rathian Vest S','Khezu Mail S','Khezu Vest S','Rathalos Mail S','Rathalos Vest S','Plesioth Mail S','Plesioth Vest S','Basarios Mail S','Basarios Vest S','Diablo Mail S','Diablo Vest S','Monoblos Mail S','Monoblos Vest S','Gravios Mail S','Gravios Vest S','Shinobi Suit(Heaven)','Shinobi Suit (Earth)','Red Guild Guard Suit','Red Guild Guard Vest','Red Guild Guard Suit','Red Guild Guard Vest','Auroros Torso Haku','Genesis Torso Haku','Borealis Chest Haku','Glyph Chest Haku','Dragonhide S','Dragonskin S','Hermitaur Mail','Hermitaur Vest','Hermitaur Mail U','Hermitaur Vest U','Hermitaur Mail S','Hermitaur Vest S','Conga Mail','Conga Vest','Conga Mail U','Conga Vest U','Conga Mail S','Conga Vest S','Blango Mail','Blango Vest','Blango Mail U','Blango Vest U','Blango Mail S','Blango Vest S','Ceanataur Mail','Ceanataur Vest','Ceanataur Mail U','Ceanataur Vest U','Ceanataur Mail S','Ceanataur Vest S','Kirin Jacket','Kirin Cape','Kirin Jacket S','Kirin Cape S','Kushala Cista','Kushala Vise','Mizuha Guards','Extravagant Camise','Empress Mail','Empress Vest','Indra Vest','Steadfast Vest','Kaiser Mail','Kaiser Vest','GuardianSpritRaiment','Carnage Raiment','Golden Haori','PuppetMaster Costume','White Fatalis Hide','White Fatalis Skin','Black Belt Mail S','Giaprey Body','dummy','Remobra Suit','Guild Knight Suit','Guild Knight Vest','Maiden\'s Vest','Personal Vest','Hunter T-Shirt','dummy','Blue GuildGuard Suit','Blue GuildGuard Vest','Blue GuildGuard Suit','Blue GuildGuard Vest','dummy','dummy','Mafumofu Jacket','Mafumofu Jacket S','Giaprey Mail','Giaprey Vest','Melahoa Stalk','MelahoaFlowerJacketU','Melahoa Stalk U','Makluva Scale','Makluva Cover U','Makluva Scale U','Bistro Jacket U','Kut-Ku Mail D','Kut-Ku Vest D','Gypceros Mail D','Gypceros Vest D','Plesioth Mail D','Plesioth Vest D','Khezu Mail D','Khezu Vest D','Obituary Petto','Obituary Pectus','Butterfly Petto','Butterfly Pectus','Obituary Petto S','Obituary Pectus S','Butterfly Petto S','Butterfly Pectus S','Kushala Cista S','Kushala Vise S','Tigrex Mail','Tigrex Vest','Tigrex Mail S','Tigrex Vest S','Death Stench Muscle','Death Stench Heart','DeathStench Muscle S','Death Stench Heart S','Diablo Mail D','Diablo Vest D','Gravios Mail D','Gravios Vest D','SupremeMizuha Guards','SprmExtrvagantCamise','Kaiser Mail S','Kaiser Vest S','Rathian Heart Mail U','Rathian Heart Vest U','Rathalos Soul Mail U','Rathalos Soul Vest U','Ultimate Indra Vest','SupremeSteadfastVest','Dark Akantor Aegis','Dark Akantor Plate','dummy','dummy','Jolly Roger Suit','Jolly Roger Jacket','Hunting Soul T-Shirt'],vambraces:['Nothing equipped.','Leather Vambraces','Chain Vambraces','Hunter\'s Vambraces','Hunter\'s Guards','Bone Vambraces','Bone Guards','Velociprey Braces','Velociprey Guards','Battle Vambraces','Battle Guards','Vespoid Vambraces','Vespoid Guards','Hornet Vambraces','Hornet Guards','Hi-Metal Vambraces','Hi-Metal Guards','Genprey Vambraces','Genprey Guards','Kut-Ku Vambraces','Kut-Ku Guards','Ioprey Vambraces','Ioprey Guards','Gypceros Vambraces','Gypceros Guards','Cephalos Vambraces','Cephalos Guards','Steel Vambraces','Rathian Vambraces','Rathian Guards','Khezu Vambraces','Khezu Guards','Rathalos Vambraces','Rathalos Guards','Plesioth Vambraces','Plesioth Guards','Lobster Vambraces','Lobster Guards','Basarios Vambraces','Basarios Guards','Diablo Vambraces','Diablo Guards','Monoblos Vambraces','Monoblos Guards','Gravios Vambraces','Gravios Guards','Black Belt Vambraces','Mosswine Gloves','Makluva Sleeves','Velociprey Gloves','Genprey Gloves','Ioprey Gloves','Shinobi Kote (Sun)','Shinobi Kote (Moon)','Guardian Vambraces','Guardian Guards','Helper Sleeves','Healer Sleeves','Garuga Vambraces','Garuga Guards','Auroros Gauntlets','Genesis Gauntlets','Borealis Gauntlets','Glyph Gauntlets','Black Claw','Black Fist','Leather Vambraces U','Chain Vambraces U','Hunter\'s Vambraces U','Hunter\'s Guards U','Bone Vambraces U','Bone Guards U','Giaprey Vambraces U','Giaprey Guards U','Battle Vambraces U','Battle Guards U','Vespoid Vambraces U','Vespoid Guards U','Hornet Vambraces U','Hornet Guards U','Hi-Metal Vambraces U','Hi-Metal Guards U','Genprey Vambraces U','Genprey Guards U','Kut-Ku Vambraces U','Kut-Ku Guards U','Ioprey Vambraces U','Ioprey Guards U','Gypceros Vambraces U','Gypceros Guards U','Cephalos Vambraces U','Cephalos Guards U','Steel Vambraces U','Rathian Heart Braces','Rathian Heart Guards','Khezu Vambraces U','Khezu Guards U','Rathalos Soul Braces','Rathalos Soul Guards','Plesioth Vambraces U','Plesioth Guards U','Basarios Vambraces U','Basarios Guards U','Diablo Vambraces U','Diablo Guards U','Monodevil Vambraces','Monodevil Guards','Gravios Vambraces U','Gravios Guards U','Shinobi Kote (Sky)','Shinobi Kote (Sea)','Guardian Vambraces U','Guardian Guards U','Helper Sleeves U','Healer Sleeves U','Auroros Gauntlet Ten','Genesis Gauntlet Ten','Borealis GauntletTen','Glyph Gauntlets Ten','Fatalis Claw','Fatalis Fist','Golden Moon Braces','Golden Moon Guards','Silver Sol Braces','Silver Sol Guards','Leather Vambraces S','Chain Vambraces S','Hunter\'s Vambraces S','Hunter\'s Guards S','Bone Vambraces S','Bone Guards S','Velociprey Braces S','Velociprey Guards S','Battle Vambraces S','Battle Guards S','Vespoid Vambraces S','Vespoid Guards S','Hornet Vambraces S','Hornet Guards S','Hi-Metal Vambraces S','Hi-Metal Guards S','Genprey Vambraces S','Genprey Guards S','Kut-Ku Vambraces S','Kut-Ku Guards S','Ioprey Vambraces S','Ioprey Guards S','Gypceros Vambraces S','Gypceros Guards S','Cephalos Vambraces S','Cephalos Guards S','Steel Vambraces S','Rathian Vambraces S','Rathian Guards S','Khezu Vambraces S','Khezu Guards S','Rathalos Vambraces S','Rathalos Guards S','Plesioth Vambraces S','Plesioth Guards S','Basarios Vambraces S','Basarios Guards S','Diablo Vambraces S','Diablo Guards S','Monoblos Vambraces S','Monoblos Guards S','Gravios Vambraces S','Gravios Guards S','Shinobi Kote(Heaven)','Shinobi Kote (Earth)','RedGuildGuard Gloves','RedGuildGuardSleeves','RedGuildGuard Gloves','RedGuildGuardSleeves','Auroros GauntletHaku','Genesis GauntletHaku','BorealisGauntletHaku','Glyph Gauntlets Haku','Dragonclaw S','Dragonfist S','Hermitaur Braces','Hermitaur Guards','Hermitaur Braces U','Hermitaur Guards U','Hermitaur Braces S','Hermitaur Guards S','Conga Vambraces','Conga Guards','Conga Vambraces U','Conga Guards U','Conga Vambraces S','Conga Guards S','Blango Vambraces','Blango Guards','Blango Vambraces U','Blango Guards U','Blango Vambraces S','Blango Guards S','Ceanataur Braces','Ceanataur Guards','Ceanataur Braces U','Ceanataur Guards U','Ceanataur Braces S','Ceanataur Guards S','Kirin Longarms','Kirin Gloves','Kirin Longarms S','Kirin Gloves S','Kushala Grip','Kushala Embrace','Mizuha Sleeves','Extravagant Sleeves','Empress Vambraces','Empress Guards','Indra Gloves','Steadfast Guards','Kaiser Vambraces','Kaiser Guards','GuardianSprtVambrces','Carnage Vambraces','Golden Kote','PuppetMaster Gloves','White Fatalis Claw','White Fatalis Fist','BlackBeltVambraces S','Giaprey Gloves','Remobra Hands','Guild Knight Gloves','Guild Knight Sleeves','Maiden\'s Sleeves','Personal Sleeves','BlueGuildGuardGloves','BluGuildGuardSleeves','BlueGuildGuardGloves','BluGuildGuardSleeves','dummy','dummy','Mafumofu Mittens','Mafumofu Mittens S','Giaprey Vambraces','Giaprey Guards','Melahoa Branch','Melahoa Petal','Melahoa Branch U','Melahoa Petal U','Makluva Sucker','Makluva Sleeves U','Makluva Sucker U','Kut-Ku Vambraces D','Kut-Ku Guards D','Gypceros Vambraces D','Gypceros Guards D','Plesioth Vambraces D','Plesioth Guards D','Khezu Vambraces D','Khezu Guards D','Obituary Mano','Obituary Brasso','Butterfly Mano','Butterfly Brasso','Obituary Mano S','Obituary Brasso S','Butterfly Mano S','Butterfly Brasso S','Kushala Grip S','Kushala Embrace S','Tigrex Vambraces','Tigrex Guards','Tigrex Vambraces S','Tigrex Guards S','Death Stench Grip','Death Stench Grasp','Death Stench Grip S','Death Stench Grasp S','Diablo Vambraces D','Diablo Guards D','Gravios Vambraces D','Gravios Guards D','SupremeMizuhaSleeves','SprmExtrvgantSleeves','Kaiser Vambraces S','Kaiser Guards S','Rthan Heart Braces U','Rathian HeartGuardsU','Rthlos Soul Braces U','Rthlos Soul Guards U','UltimateIndraGloves','SuprmSteadfastGuards','Dark Akantor Claw','DarkAkantor Gauntlet','dummy','dummy','Jolly Roger Gloves','Jolly Roger Cuffs'],belt:['Nothing equipped.','Leather Belt','Light Belt','Chain Belt','Iron Belt','Hunter\'s Tasset','Hunter\'s Coat','Bone Tasset','Bone Coat','Velociprey Tasset','Velociprey Coat','Battle Tasset','Battle Coat','Hide Belt','Vespoid Tasset','Vespoid Coat','Hornet Tasset','Hornet Coat','Hi-Metal Tasset','Hi-Metal Coat','Genprey Tasset','Genprey Coat','Chrome Metal Coat','Kut-Ku Tasset','Kut-Ku Coat','Ioprey Tasset','Ioprey Coat','Gypceros Tasset','Gypceros Coat','Cephalos Tasset','Cephalos Coat','Steel Belt','Rathian Tasset','Rathian Coat','Khezu Tasset','Khezu Coat','Rathalos Tasset','Rathalos Coat','Basarios Tasset','Basarios Coat','Diablo Coil','Diablo Coat','Monoblos Coil','Monoblos Coat','Gravios Tasset','Gravios Coat','Black Belt Tasset','Mosswine Hip','Melahoa Skirt','Bistro Apron','Shinobi Belt (Sun)','Shinobi Belt (Moon)','Guardian Coil','Guardian Coat','Helper Skirt','Healer Frills','Garuga Tasset','Garuga Coat','Auroros Tasset','Genesis Tasset','Borealis Tasset','Glyph Tasset','Red Borealis Tasset','Red Glyph Tasset','Black Spine','Black Scale','Leather Belt U','Chain Belt U','Hunter\'s Tasset U','Hunter\'s Coat U','Bone Tasset U','Bone Coat U','Giaprey Tasset U','Giaprey Coat U','Battle Tasset U','Battle Coat U','Vespoid Tasset U','Vespoid Coat U','Hornet Tasset U','Hornet Coat U','Hi-Metal Tasset U','Hi-Metal Coat U','Genprey Tasset U','Genprey Coat U','Kut-Ku Tasset U','Kut-Ku Coat U','Ioprey Tasset U','Ioprey Coat U','Gypceros Tasset U','Gypceros Coat U','Cephalos Tasset U','Cephalos Coat U','Steel Belt U','Rathian Heart Coil','Rathian Heart Coat','Khezu Tasset U','Khezu Coat U','Rathalos Soul Coil','Rathalos Soul Coat','Basarios Tasset U','Basarios Coat U','Diablo Coil U','Diablo Coat U','Monodevil Coil','Monodevil Coat','Gravios Tasset U','Gravios Coat U','Shinobi Belt (Sky)','Shinobi Belt (Sea)','Guardian Coil U','Guardian Coat U','Helper Skirt U','Healer Frills U','Auroros Tasset Ten','Genesis Tasset Ten','Borealis Tasset Ten','Glyph Tasset Ten','Fatalis Spine','Fatalis Scales','Golden Moon Tasset','Golden Moon Coat','Silver Sol Tasset','Silver Sol Coat','Leather Belt S','Chain Belt S','Hunter\'s Tasset S','Hunter\'s Coat S','Bone Tasset S','Bone Coat S','Velociprey Tasset S','Velociprey Coat S','Battle Tasset S','Battle Coat S','Vespoid Tasset S','Vespoid Coat S','Hornet Tasset S','Hornet Coat S','Hi-Metal Tasset S','Hi-Metal Coat S','Genprey Tasset S','Genprey Coat S','Kut-Ku Tasset S','Kut-Ku Coat S','Ioprey Tasset S','Ioprey Coat S','Gypceros Tasset S','Gypceros Coat S','Cephalos Tasset S','Cephalos Coat S','Steel Belt S','Rathian Tasset S','Rathian Coat S','Khezu Tasset S','Khezu Coat S','Rathalos Tasset S','Rathalos Coat S','Basarios Tasset S','Basarios Coat S','Diablo Coil S','Diablo Coat S','Monoblos Coat S','Monoblos Coat S','Gravios Tasset S','Gravios Coat S','Shinobi Belt(Heaven)','Shinobi Belt (Earth)','Red Guild Guard Coil','Red Guild Guard Coat','Red Guild Guard Coil','Red Guild Guard Coat','Auroros Tasset Haku','Genesis Tasset Haku','Borealis Tasset Haku','Glyph Tasset Haku','Dragon Spine S','Dragon Scales S','Hermitaur Tasset','Hermitaur Coat','Hermitaur Tasset U','Hermitaur Coat U','Hermitaur Tasset S','Hermitaur Coat S','Conga Tasset','Conga Coat','Conga Tasset U','Conga Coat U','Conga Tasset S','Conga Coat S','Blango Tasset','Blango Coat','Blango Tasset U','Blango Coat U','Blango Tasset S','Blango Coat S','Ceanataur Tasset','Ceanataur Coat','Ceanataur Tasset U','Ceanataur Coat U','Ceanataur Tasset S','Ceanataur Coat S','Kirin Hoop','Kirin Shorts','Kirin Hoop S','Kirin Shorts S','Kushala Cocoon','Kushala Wind Wrap','Mizuha Sash','Extravagant Coat','Empress Tasset','Empress Coat','Indra Wrap','Steadfast Coat','Kaiser Tasset','Kaiser Coat','Guardian Spirit Coil','Carnage Wrap','Golden Obi','Puppet Master Obi','White Fatalis Spine','White Fatalis Scale','Plesioth Tasset S','Plesioth Coat S','Black Belt Tasset S','Remobra Belt','Guild Knight Coat','Guild Knight Kilt','Maiden\'s Skirt','Personal Frills','Blue GuildGuard Coil','Blue GuildGuard Coat','Blue GuildGuard Coil','Blue GuildGuard Coat','Lobster Coil','Lobster Coat','dummy','dummy','Mafumofu Coat','Mafumofu Coat S','Giaprey Tasset','Giaprey Coat','Melahoa Trunk','Melahoa Skirt U','Melahoa Trunk U','Makluva Coat','Makluva Fin','Makluva Coat U','Makluva Fin U','Bistro Apron U','Kut-Ku Tasset D','Kut-Ku Coat D','Gypceros Tasset D','Gypceros Coat D','Khezu Tasset D','Khezu Coat D','Obituary Anca','Obituary Cocusa','Butterfly Anca','Butterfly Cocusa','Obituary Anca S','Obituary Cocusa S','Butterfly Anca S','Butterfly Cocusa S','Kushala Cocoon S','Kushala Wind Wrap S','Tigrex Tasset','Tigrex Coat','Tigrex Tasset S','Tigrex Coat S','Death Stench Bowels','Death Stench Belly','DeathStench Bowels S','Death Stench Belly S','Diablo Coil D','Diablo Coat D','Gravios Tasset D','Gravios Coat D','Supreme Mizuha Sash','SuprmExtravagantCoat','Kaiser Tasset S','Kaiser Coat S','Rathian Heart Coil U','Rathian Heart Coat U','Rathalos Soul Coil U','Rathalos Soul Coat U','Ultimate Indra Wrap','SupremeSteadfastCoat','DarkAkantor Cincture','Dark Akantor Sash','dummy','dummy','Jolly Roger Coil','Jolly Roger Skirt'],pants:['Nothing equipped.','Green Pants','Blue Pants','Hunter\'s Greaves','Hunter\'s Leggings','Bone Greaves','Bone Leggings','Velociprey Greaves','Velociprey Leggings','Battle Greaves','Battle Leggings','Silver Metal Boots','Vespoid Greaves','Vespoid Leggings','Hornet Greaves','Hornet Leggings','Hi-Metal Greaves','Hi-Metal Leggings','Dark Metal Boots','Genprey Greaves','Genprey Leggings','Pink Metal Boots','Chrome Metal Boots','Ioprey Greaves','Ioprey Leggings','Gypceros Greaves','Gypceros Leggings','Cephalos Greaves','Cephalos Leggings','Rathian Greaves','Rathian Leggings','Khezu Greaves','Khezu Leggings','Rathalos Greaves','Rathalos Leggings','Plesioth Greaves','Plesioth Leggings','Basarios Greaves','Basarios Leggings','Diablo Greaves','Diablo Leggings','Monoblos Greaves','Monoblos Leggings','Gravios Greaves','Gravios Leggings','Black Belt Greaves','Mosswine Feet','Velociprey Feet','Genprey Feet','Ioprey Feet','Shinobi Boots (Sun)','Shinobi Boots (Moon)','Guardian Boots','Guardian Pants','Helper Socks','Healer Socks','Garuga Greaves','Garuga Leggings','Auroros Pants','Genesis Pants','Borealis Pants','Glyph Pants','Red Borealis Pants','Red Glyph Pants','Black Feet','Black Legs','Cream Pants','Coffee Pants','Hunter\'s Greaves U','Hunter\'s Leggings U','Bone Greaves U','Bone Leggings U','Giaprey Greaves U','Giaprey Leggings U','Battle Greaves U','Battle Leggings U','Vespoid Greaves U','Vespoid Leggings U','Hornet Greaves U','Hornet Leggings U','Hi-Metal Greaves U','Hi-Metal Leggings U','Genprey Greaves U','Genprey Leggings U','Ioprey Greaves U','Ioprey Leggings U','Gypceros Greaves U','Gypceros Leggings U','Cephalos Greaves U','Cephalos Leggings U','Rathian HeartGreaves','RathianHeartLeggings','Khezu Greaves U','Khezu Leggings U','Rathalos SoulGreaves','RathalosSoulLeggings','Plesioth Greaves U','Plesioth Leggings U','Basarios Greaves U','Basarios Leggings U','Diablo Greaves U','Diablo Leggings U','Monodevil Greaves','Monodevil Leggings','Gravios Greaves U','Gravios Leggings U','Shinobi Boots (Sky)','Shinobi Boots (Sea)','Guardian Boots U','Guardian Pants U','Helper Socks U','Healer Socks U','Auroros Pants Ten','Genesis Pants Ten','Borealis Pants Ten','Glyph Pants Ten','Fatalis Feet','Fatalis Legs','Golden Moon Greaves','Golden Moon Leggings','Silver Sol Greaves','Silver Sol Leggings','Green Pants S','Blue Pants S','Hunter\'s Greaves S','Hunter\'s Leggings S','Bone Greaves S','Bone Leggings S','Velociprey Greaves S','Velociprey LeggingsS','Battle Greaves S','Battle Leggings S','Vespoid Greaves S','Vespoid Leggings S','Hornet Greaves S','Hornet Leggings S','Hi-Metal Greaves S','Hi-Metal Leggings S','Genprey Greaves S','Genprey Leggings S','Kut-Ku Greaves S','Kut-Ku Leggings S','Ioprey Greaves S','Ioprey Leggings S','Gypceros Greaves S','Gypceros Leggings S','Cephalos Greaves S','Cephalos Leggings S','Rathian Greaves S','Rathian Leggings S','Khezu Greaves S','Khezu Leggings S','Rathalos Greaves S','Rathalos Leggings S','Plesioth Greaves S','Plesioth Leggings S','Basarios Greaves S','Basarios Leggings S','Diablo Greaves S','Diablo Leggings S','Monoblos Greaves S','Monoblos Leggings S','Gravios Greaves S','Gravios Leggings S','ShinobiBoots(Heaven)','Shinobi Boots(Earth)','Red GuildGuard Boots','RedGuildGuard Tights','Red GuildGuard Boots','RedGuildGuard Tights','Auroros Pants Haku','Genesis Pants Haku','Borealis Pants Haku','Glyph Pants Haku','Dragonfeet S','Dragonlegs S','Hermitaur Greaves','Hermitaur Leggings','Hermitaur Greaves U','Hermitaur Leggings U','Hermitaur Greaves S','Hermitaur Leggings S','Conga Greaves','Conga Leggings','Conga Greaves U','Conga Leggings U','Conga Greaves S','Conga Leggings S','Blango Greaves','Blango Leggings','Blango Greaves U','Blango Leggings U','Blango Greaves S','Blango Leggings S','Ceanataur Greaves','Ceanataur Leggings','Ceanataur Greaves U','Ceanataur Leggings U','Ceanataur Greaves S','Ceanataur Leggings S','Kirin Leg Guards','Kirin Boots','Kirin Leg Guards S','Kirin Boots S','Kushala Crus','Kushala Shank','Mizuha Leg Wrap','Extravagant Trousers','Empress Greaves','Empress Leggings','Indra Leggings','Steadfast Boots','Kaiser Greaves','Kaiser Leggings','GuardianSpirit Boots','Carnage Boots','Golden Hakama','Puppet Master Socks','White Fatalis Feet','White Fatalis Legs','Black Belt Greaves S','Giaprey Feet','Remobra Feet','Guild Knight Boots','Guild Knight Tights','Maiden\'s Stockings','Personal Tights','BlueGuildGuard Boots','BlueGuildGuardTights','BlueGuildGuard Boots','BlueGuildGuardTights','Lobster Greaves','Lobster Leggings','dummy','dummy','Mafumofu Boots','Mafumofu Boots S','Giaprey Greaves','Giaprey Leggings','Melahoa Roots','Melahoa Taproot','Melahoa Roots U','Melahoa Taproot U','Makluva Pants','Makluva Leggings','Makluva Pants U','Makluva Leggings U','Kut-Ku Greaves','Kut-Ku Leggings','Kut-Ku Greaves D','Kut-Ku Leggings D','Kut-Ku Greaves U','Kut-Ku Leggings U','Gypceros Greaves D','Gypceros Leggings D','Plesioth Greaves D','Plesioth Leggings D','Khezu Greaves D','Khezu Leggings D','Obituary Gamba','Obituary Femur','Butterfly Gamba','Butterfly Femur','Obituary Gamba S','Obituary Femur S','Butterfly Gamba S','Butterfly Femur S','Kushala Crus S','Kushala Shank S','Tigrex Greaves','Tigrex Leggings','Tigrex Greaves S','Tigrex Leggings S','Death Stench Heel','Death Stench March','Death Stench Heel S','Death Stench March S','Diablo Greaves D','Diablo Leggings D','Gravios Greaves D','Gravios Leggings D','SupremeMizuhaLegWrap','SprmExtrvgntTrousers','Kaiser Greaves S','Kaiser Leggings S','RathianHeartGreavesU','RthianHeartLeggingsU','RathalosSoulGreavesU','RthalosSoulLeggingsU','UltimateIndraLggings','SupremSteadfastBoots','Dark Akantor Hessian','Dark Akantor Boots','dummy','dummy','Jolly Roger Boots','Jolly Roger Pants','dummy','dummy','dummy','dummy'],weapons:['Nothing equipped.','Carbalite Sword','Carbalite Sword+','Buster Sword','Cat\'s Soul','Supremacy Blade','Buster Blade','Blue Wing','Ravager Blade','Lacerator Blade','Iron Katana','Iron Katana "Grace"','Iron Katana "Gospel"','Bone Katana "Wolf"','Bone Katana "Shark"','Bone Katana "Dragon"','Black Katana Mk.I','Black Katana Mk.II','Defender','Wyvern Blade "Blood"','Sentinel','Halberd','Wyvern Blade "Leaf"','Judgment','Executioner','Executioner+','Dark Scythe','Tormentor','Bone Blade','Bone Blade+','Agito','Black Katana Mk.III','Wyvern Agito','Red Stripe','Golem Blade','Valkyrie Blade','Sieglinde','Dragonslayer','Red Pincer','Finblade','Ceanataur Blade','Plesioth Watersword','Red Wing','Rathalos Firesword','Rusted Great Sword','Tarnished Great Swd','Blue Claw Blade','Ancient Blade','Bone','Dragonwood L.Sword','Fire Dragonsword','Red Dragonsword','Buster Sword+','Sword of the Diablos','Vile Serpentblade','Iron Devil','War Hammer+','War Hammer','Torment Hammer','War Mace','Iron Striker','Bull Head Hammer','Diablos Hammer','Iron Impact','Spiked Hammer','Spiked Hammer+','Crystal Hammer','Crystal Nova','Anvil Hammer','Venom Monster','Bone Axe','Lobster Hammer','Bone Broadaxe','Gigaton Hammer','Anchor Hammer','Conehead Hammer','Raven Torrent','Graviton Hammer','Hard Bone Hammer','Hard Bone Hammer+','Cyclo-Hammer','Dragonhead Hammer','Atlas Hammer','Skullcrusher','Skullcrusher+','Kut-Ku Jaw','Great Cone','Titan Hammer','Basarios Blow','Diablos Maul','Jail Hammer','Jadite Mace','Jade Mace','Gunhammer Prototype','Dead Revolver','Rusted Hammer','Tarnished Hammer','Steel Ice Hammer','Breath Core Hammer','Bone Club','Large Bone Club','Dragon Destroyer','Dragonbreaker','Iron Lance','Iron Lance+','Knight Lance','Growling Wyvern','Knight Spear','Paladin Lance','Rampart','Iron Gunlance','Babel Spear','Great Demon Hammer','Iron Gunlance+','Special Ops Gunlance','Dark Lance','Silver Rook','Dark Spear','Paralyzer','Trident','Bone Javelin','Luna\'s Howl','Spiked Spear','Aqua Spear','Luna\'s Roar','Lullaby Spear','White Gunlance','Hard Bone Lance','Hard Bone Lance+','Longhorn+','Black Gunlance','Long Tusk','Barbarian Tusk','Hellsting','Hard Hitter','Ogre Tusk','Red Tail','Scissor Gunlance','Dragonwood Gunlance','Diablo Horn','Aqua Spear+','Diablo Spear','Bone Claw Lance','Crimson War Pike','Venom Lance','Blade Stinger','Basarios Venom Spear','Gravios Spear','Gatling Lance','Gatling Lance+','Rusted Lance','Tarnished Lance','Ceanataur Stinger','Undertaker','Black Lance','Demon Lance','Odyssey','Upper Battleaxe','Hunter\'s Dagger','Hunter\'s Dagger+','Assassin\'s Dagger','Kirin Bolt','Kirin Bolt+','Rusted Replica','Kirin Bolt Ultimus','Serpent Bite','Velocidrome Bite','Viper Bite','Eternal Replica','Deathprize','Hydra Bite','Flame Syphos','Deadly Poison','Thunderbane','Princess Rapier','Frightbane','Princess Rapier+','Poison Battleaxe','Bone Kris','Bone Kris+','Osteon Pick','Osteon Pick+','Chief Kris','Red Saber','Master\'s Replica','Djinn','Blazing Falchion','Weary Finsword','Steel Ice Dagger','Sandman Finsword','Hero\'s Blade Replica','Frost Edge','Studded Club','Frost Edge+','Spiked Bat','Crimson Club','Monoblos Club','Rusted Sword','Tarnished Sword','Blue Ogre Sword','Eternal Strife','Rajang Club','Taboo Rajang Club','Black Sword','Raven Blade','Catspaw','Catburglar','Tactical Blade','Eager Cleaver','Divine Slasher','Chrome Razor','Eternal Annihilator','Finishing Hammer','Onslaught Hammer','Binder Mace','Fist of Fury','Grayburg Javelin','Requiem Spear','Spear of Prominence','Black Dragon Spear','Twin Kut-Ku','Corona','Black Dragon Sword','Odyssey+','Teddybear','Estoc','Ninja Sword','Demon Rod','Siegmund','Frozen Tuna','Great Demon Lance','Valhalla','Native Spear','Polytan','Twin Dagger','Hi Twin Daggers','Hurricane','Pink Maracas','Cyclone','Dual Tomahawk','Dual Tomahawk+','Order Rapier','Raven Tessen','Holy Saber','Prototype Saw-Slicer','Sanctioned Blades','Bone Scythe','Bone Scythe+','Cutlass','Cutlass+','Dual Diablo','Dual Diablo+','Insector','Insector+','Twin Flames','Hi Twin Flames','Gradios Ultimus','Double Dragon','Dual Dragon Ultimus','Barbaroi Blade','Crimson Goat','Shiny Rathalos Sword','Torment (Purgatory)','White Disaster','Velocidrome Bite+','dummy','Crimson Scythe','White Mantis','Sentoryu Raven','Teostra Blade','True Dragon\'s Jaw','Saber','Lion Dance Saber','Guardian Sword','True Devil Slicer','White Serpentblade','Plesioth Crystasword','Scythe of Menace','Enforcer\'s Axe','Plesioth Azureblade','Smolder Dragonsword','Blushing Dame','Pael Keizah','Steel Ice Blade','Steel Ice Blade+','Devil Slicer','Chrome Death Razor','Eternal Eradicator','Black Belt Blade','Expert Blade','Worn Great Sword','Weathered Grt Sword','Crab Cutter','Epitaph Blade','Bone Horn','War Drum','Sonic Glass','Sonic Glass+','Devil Masher','Sanctioned Gunhammer','War Stamp','War Basher','Metal Bagpipe','Dragon Demolisher','Khezu Horn','Kut-Ku Pick','Great Nova','Blessed Ocarina','Black Belt Hammer','Expert Hammer','Worn Hammer','Weathered Hammer','Iron Striker+','Pulsating Core','War Bongo','Blood Horn','Bronze Bell','Dragonwood Horn','Dark','Sanctioned Gunlance','Dragon Rider Spear','Incessant Raven','Black Ruiner Lance','Black Tempest','Steel Ice Spear','Steel Ice Spear+','Blue Tail','Blue Prominence','Thunderspear','Black Gravios Spear','Black Belt Lance','Expert Lance','Worn Spear','Weathered Spear','Teostra\'s Howl','Matenro','Dragonic Rim','Void Gravios Spear','Bladed Edge','Bladed Edge+','Odyssey Blade','Deadly Battleaxe','Kirin Bolt Indora','Flaming Pair','Black Ruiner Sword','Cursed Spirit','Rouge Flames','Velociprey Claws','Melting Wail','Golden Falchion','Sandman Spike','High Sandman Spike','Melynx Tool','Black Belt Sword','Expert Sword','Hi Ninja Sword','Thor\'s Dagger','Ultimus Heaven&Earth','Improved Power Saws','Guild Knight Sabers','Insect Slicer','Corpse Blades','Worn Blades','Weathered Blades','Melting Wail+','Eternal Schism','Obelion','Titernia','Ceramic Blos Lance','Death Venom Hammer','Legendary Replica','Demon Halberd','Rusty Claymore','Grind Claymore','dummy','Chick Decapitator','Great Demon Rod','Kirin Thundersword','Black Blade','Kirin Bolts','Ravager Blade+','Susano Blade','Daimyo Cutter','Wyvern Blade "Verde"','Lion King Saber','Monoblos Scythe','Frost Ripper','Imperial Sword','Fanatic Dragonwd LS','Wyvern Blade "Maple"','Great Demon Halberd','Gaelic Flame','Bone Horn+','War Drum+','Glass Queen','Khezu Flute','Great Bagpipe','Cursed Ocarina','War Conga','Blood Flute','Gaoren Bell','Spirit Dragonwd Horn','Steel Gunlance','Big Slugger','Hellstinger','White Cannon','Luna\'s Flare','Scissor Cannon','Black Gore Cannon','Gun Chariot','Gld Dragonwd GLance','Imperial Gunlance','Great Pincer','King Thundersword','Daora\'s Decimator','Killer\'s Scythe','Sentoryu Wolf','Rooster Decapitator','Chicken Decapitator','Diablo Destroyer','King Teostra Blade','Fatalis Blade','Fatalis Ancestor','Cat\'s Curse','Bull Tusk Hammer','Conehead Hammer+','Lunastra\'s Crown','Anchor Crusher','Wolf Torrent','Ancient Blow','Diablo Chaos Broker','Ancient Relic','Basarios Bash','Daora\'s Colossus','White Cat Hammer','Black Cat Stamp','Gold Cat Hammer','King Lobster Hammer','Violence Hammer','Bone Claw Lance+','Daora\'s Fang','Ceanataur Piercer','Incessant Wolf','Roaring Wyvern','Thunderlance','Teostra\'s Roar','Sealed Dragonlance','Emerald Spear','Strategic Blade','Black Doom Flame','Queen Rapier','Daora\'s Razor','Hi Frost Edge','Azure Ogre Sword','Wolf Blade','Twin Kut-Ku+','Funky Maracas','Limb Cutter','Wolf Tessen','Crimson Lotus Blades','Dual Chameleos','Hi Velociprey Claws','Spatula Set','Silhouette Sabers','Rookie Knife','Khezu Shock Sword','Khezu Shock Blade','Cat\'s King','Dos Fang Dagger','Melynx Gadget','Anchor Hammer+','Shining Wyvern Blade','dummy','Black Hammer','Poison Serpentblade','Fatalis Buster','AncientFatalisBuster','Shell Hammer','Wyvern Blade "Holly"','Large Bone','Blango Destroyer','Blango Destroyer+','Blango Decimator','Blango Destructor','Centenarian Dagger','Great Ogre Tusk','Silver Serpentblade','Golden Serpentblade','Deadly Serpentblade','Bronze Coin','Gaoren Coin','Bone Slasher','Golem Blade+','Spartacus Blade','Wyvern Blade "Fall"','Crystallized Tuna','Tiger Agito','Tigrex Great Sword','Tigrex Tooth','Tigrex Katana','Akantor Katana','Steel Lance','Naag Serpentblade','Devta Serpentblade','Gravios Venom Spear','Marine Fisher','Deep Fisher','Deep Ocean','Sea King Gunlance','Snow Gunlance','Snow Gunlance Mk. II','Blizzard Gunlance','Longhorn','Barbaroi Tusk','Crimson Lance','Ceramic Blos Lance+','Wild Bone Lance','Wild Bone Lance+','Bulldrome Spear','Fragrance','Fragrance+','Noble Fragrance','Bone Gunlance','Great Bone Gunlance','Wyvern Bone Gunlance','Hellsting+','Average Hitter','Grand Slam','Vermillion Rim','Vacuum Striker','Hyper Vacuum','Primal Spear','Tiger Stinger','Tigrex Lance','Rex Blast','Tigrex Gunlance','Akantor Gunlance','Kitchen Knife','Iron Chefblade','Millennium Knife','Velociprey Claws+','Giaprey Claws','Giaprey Claws+','White Death','Snake Bite','Snake Bite+','Twin Dagger+','Glutton\'s Set','Chereau\'s Tool','Serpent Bite+','Chief Scythe','Dual Kut-Ku','Pink Maracas+','Shaka Poison Bite','Shakalaka Saber','Felyne and Melynx','Steel Ice Dagger+','Rex Talon','Tigrex Sword','Rex Slicers','Tigrex Claws','Sakura Recorder','Gold Recorder','Black Cauldron','True Black Cauldron','One Star Silver Pot','Two Star Silver Pot','Bone Great Axe','Crater Maker','Basarios Rock','Volcanic Rock','Enormous Ham','Ham of Hams','Basarios Rock Mk.II','Dynamic Hammer','Sakura Recorder+','Khezu Horn+','Giadrome Balloon','Bull Hammer','Giaprey Balloon','Giaprey Balloon+','Ivory Horn','White Cat Stamp','Black Cat Hammer','Cactus Creamer','Green Monster','Striped Striker','Tigrex Hammer','Striped Dragonga','Tigrex Horn','Akantor Horn','dummy','Akantor Blades','Nothing equipped.','Nothing equipped.','Nothing equipped.','Nothing equipped.','Nothing equipped.','Nothing equipped.','Nothing equipped.','Nothing equipped.']};
  // parsed gathering info
var f2TrainingSets = [];

// ── PARSE ────────────────────────────────────────────────────────────────────
function parseFile(d){
  // Header pointers (template order)
  ptrs.qi        = ru32(d,0x04);
  ptrs.supply    = ru32(d,0x08);
  ptrs.reward    = ru32(d,0x0C);
  ptrs.fixed     = ru32(d,0x10);
  ptrs.questarea = ru32(d,0x14);
  ptrs.boss      = ru32(d,0x18);
  ptrs.gather    = ru32(d,0x1C);
  ptrs.unknown   = ru32(d,0x20);
  ptrs.acqdata   = ru32(d,0x24);

  // Text pointer chain — TaskContentPtr at qi+0x14 (= decimal 20)
  const qi=ptrs.qi;
  const tcPtr=ru32(d,qi+0x14);
  const ecPtr=ru32(d,tcPtr);
  tptrs.name    = ru32(d,ecPtr);
  tptrs.success = ru32(d,ecPtr+4);
  tptrs.failure = ru32(d,ecPtr+8);
  tptrs.desc    = ru32(d,ecPtr+12);
  tptrs.monster = ru32(d,ecPtr+16);
  tptrs.client  = ru32(d,ecPtr+20);

  // Compute current allocations (distance to next neighbour)
  const sorted=Object.entries(tptrs).sort((a,b)=>a[1]-b[1]);
  for(let i=0;i<sorted.length;i++){
    const [k,o]=sorted[i];
    tcaps[k]=i+1<sorted.length ? sorted[i+1][1]-o : ecPtr-o;
  }

  // Boss appearance details
  const bossBase=ptrs.boss;
  const mixedPtr=ru32(d,bossBase+8);
  bossAppearPtr=ru32(d,bossBase+12);
  bossAppearEntries=[];
  let off=bossAppearPtr;
  while(off+2<=d.length){
    const id=ru16(d,off);
    if(id===0xFFFF){bossEndMarkOff=off;break;}
    bossAppearEntries.push({off, raw:Array.from(d.slice(off,off+60))});
    off+=60;
  }

  // Small monster data — 3 config sets (Initial, Change1, Change2)
  // questAreaPtr → MonsterInformation { MonSettingsPtr(u32), Change1Ptr(u32), Change2Ptr(u32) }
  // Each config: areas loop { areaID(u32), skip(u32), MixedFishPtr(u32), AppearanceDetailsPtr(u32) }
  // until areaID==0 (after first area) or 0xFFFF
  const qaBase=ptrs.questarea;
  const smConfigPtrs=[ru32(d,qaBase), ru32(d,qaBase+4), ru32(d,qaBase+8)];
  const smConfigNames=['Initial','Change 1','Change 2'];
  smData=[];  // array of {name, ptr, areas:[{areaID, mixedPtr, appearPtr, slots:[u32x4], entries:[{off,raw}]}]}
  smConfigPtrs.forEach((cfgPtr,ci)=>{
    const cfg={name:smConfigNames[ci], ptr:cfgPtr, areas:[]};
    // De-duplicate: if same pointer as previous, mark as shared
    if(ci>0){ for(let prev=0;prev<ci;prev++){ if(cfgPtr===smConfigPtrs[prev]){cfg.sharedWith=prev;smData.push(cfg);return;} } }
    if(!cfgPtr||cfgPtr>d.length-4){smData.push(cfg);return;}
    // Check if starts with 0 (no data)
    if(ru16(d,cfgPtr)===0){smData.push(cfg);return;}
    let aOff=cfgPtr;
    for(let ai=0;ai<64;ai++){
      if(aOff+16>d.length)break;
      const areaID=ru32(d,aOff);
      if(areaID===0&&ai>0)break;
      if(areaID===0xFFFF||areaID===0xFFFFFFFF)break;
      const mxPtr=ru32(d,aOff+8);
      const apPtr=ru32(d,aOff+12);
      const area={areaID, areaIDOff:aOff, mixedOff:aOff+8, appearOff:aOff+12, mixedPtr:mxPtr, appearPtr:apPtr, slots:[], entries:[]};
      // Spawn slots (4 x u32)
      if(mxPtr>0&&mxPtr+16<=d.length){
        for(let s=0;s<4;s++) area.slots.push({off:mxPtr+s*4, id:ru32(d,mxPtr+s*4)});
      }
      // Appearance entries (60 bytes each)
      if(apPtr>0&&apPtr+2<=d.length){
        let ep=apPtr;
        while(ep+2<=d.length){
          const eid=ru16(d,ep);
          if(eid===0xFFFF)break;
          area.entries.push({off:ep, raw:Array.from(d.slice(ep,ep+60))});
          ep+=60;
        }
        area.endMarkOff=ep; // where to write 0xFFFF
      }
      area.origEntryCap = area.entries.length; // capacity for in-place writes
      cfg.areas.push(area);
      aOff+=16;
    }
    smData.push(cfg);
  });

  // Gathering Information (0x1C → GatheringInfo block → Area pointers → Point arrays)
  // GatheringInfo @ ptrs.gather: { AreaInfo[0] (u32 ptr), AreaInfo[1] (u32 ptr) }
  // Each AreaInfo: array of GatheringPoint structs (0x18 bytes each), terminated by ptr==0 or EOF
  //   GatheringPoint: X(f32)+Z(f32)+Y(f32)+unk4(u32)+unused(u32)+unused(u32) @ [0..24]
  //   then: GatheringCode(u16)+FreqUpperLimit(u16) following immediately after point data
  // GatheringPointData @ ptrs.acqdata: array of { Ptr→MaterialList } per code index
  //   MaterialList: { prob(u16)+item(u16) }* terminated by prob==0xFFFF
  gatherData = parseGatheringData(d);
}

function degToBam(val){ return (val >>> 0) & 0xFFFF; }


// ── STAGE SELECT ─────────────────────────────────────────────────────────────
function buildStageSelect(){
  document.getElementById('f-mapid').innerHTML = mapOpts(0, false);
}


// ── POPULATE UI ──────────────────────────────────────────────────────────────
function populateUI(d){
  const qi=ptrs.qi;

  // Quest Info
  document.getElementById('f-qnum').value     = ru16(d,qi+0x18);   // TaskNumber at qi+18
  document.getElementById('f-star').value     = ru8(d,qi+0x1A);    // MissionStar at qi+1A
  document.getElementById('f-qtype').value    = ru8(d,qi);
  document.getElementById('f-additional').value = '0x'+ru8(d,qi+1).toString(16).padStart(2,'0');
  document.getElementById('f-mapid').value    = ru8(d,qi+0x1C);    // MissionMap at qi+1C
  document.getElementById('f-speccond').value = ru8(d,qi+0x1D);
  document.getElementById('f-targetcount').value = ru8(d,qi+0x1E); // TargetNumber at qi+1E
  document.getElementById('f-fee').value      = ru32(d,qi+4);
  document.getElementById('f-reward').value   = ru32(d,qi+8);
  origPenalty=ru32(d,qi+12);
  document.getElementById('f-penalty').value = origPenalty;
  const penBad = origPenalty > 0xFFFF || (origPenalty >>> 16) !== 0;
  document.getElementById('penalty-hint').style.display = penBad ? 'block' : 'none';
  document.getElementById('penalty-lo').textContent = ru16(d,qi+12);
  const pb = document.getElementById('penalty-badge');
  if(penBad){pb.textContent='⚠ suspicious';pb.className='badge be';pb.style.display='inline-block';}
  else{pb.style.display='none';}
  document.getElementById('f-gp').value       = ru32(d,0x2C);
  const qt=ru32(d,qi+0x10);  // MissionTime at qi+10
  document.getElementById('f-time').value     = (qt/1800).toFixed(2);
  document.getElementById('time-raw').textContent = 'raw ticks: '+qt;
  document.getElementById('f-carve').value    = ru8(d,0x34);
  document.getElementById('f-difficulty').value = ru8(d,0x39);
  document.getElementById('f-arrive').value   = ru8(d,0x35);
  const bshapeVal = ru16(d,0x28);
  document.getElementById('f-bshape').value   = bshapeVal;
  document.getElementById('bshape-hex').textContent = '0x'+bshapeVal.toString(16).toUpperCase().padStart(4,'0');
  document.getElementById('f-bsize').value    = ru8(d,0x2A);
  document.getElementById('f-bstr').value     = ru8(d,0x2B);

  // Supply state (header 0x36-0x38)
  document.getElementById('f-ratmode').value  = ru8(d,0x36);
  document.getElementById('f-ratcond').value  = '0x'+ru8(d,0x37).toString(16).padStart(2,'0');
  document.getElementById('f-ratqty').value   = ru8(d,0x38);

  // questAreaChange[0] at 0x3C, [1] at 0x44 (fixed 2 slots in header)
  const tb=document.getElementById('tb-qac');
  tb.innerHTML='';
  [{o:0x3C,i:0},{o:0x44,i:1}].forEach(({o,i})=>{
    const cc=ru32(d,o), tid=ru16(d,o+4), qty=ru8(d,o+6), num=ru8(d,o+7);
    tb.appendChild(makeQacRow(i, cc, tid, qty, num));
  });

  // Text fields
  // Display real \n (0x0A) as actual newlines in textareas
  function showStr(key){ return rstr(d,tptrs[key]); }
  document.getElementById('f-tname').value    = showStr('name');
  document.getElementById('f-tsuccess').value = showStr('success');
  document.getElementById('f-tfailure').value = showStr('failure');
  document.getElementById('f-tmonster').value = showStr('monster');
  document.getElementById('f-tclient').value  = showStr('client');
  document.getElementById('f-tdesc').value    = showStr('desc');
  ['tname','tsuccess','tfailure','tmonster','tclient','tdesc'].forEach(id=>{
    const key=id.replace('t','');
    updateBadge(id,key,MAX_BYTES[key]);
  });

  // Targets at qi+0x20 (Target0) and qi+0x28 (Target1)
  const tbt=document.getElementById('tb-targets');
  tbt.innerHTML='';
  [0,1].forEach(i=>{
    const base=qi+0x20+i*8;
    const cond=ru8(d,base), add=ru16(d,base+1), id=ru16(d,base+4), qty=ru16(d,base+6);
    const tr=document.createElement('tr');
    const condTd=document.createElement('td');
    condTd.innerHTML=`<td style="color:var(--muted);font-family:var(--mono)">${i}</td>`;
    // Build cells
    tr.innerHTML=`<td style="color:var(--muted);font-family:var(--mono)">${i}</td>`+
      `<td><select data-ti="${i}" data-f="cond"><option value="0"${cond===0?' selected':''}>0 – None</option><option value="1"${cond===1?' selected':''}>1 – Slay</option><option value="2"${cond===2?' selected':''}>2 – Deliver</option><option value="4"${cond===4?' selected':''}>4 – Slay[Elder]</option></select></td>`+
      `<td><input type="text" data-ti="${i}" data-f="add" value="${fmtHex(add,2)}" style="font-family:var(--mono)"></td>`;
    const idTd=document.createElement('td');
    idTd.id='tgt-cell-'+i;
    function fillIdCell(c,v){
      idTd.innerHTML='';
      if(c===2) idTd.appendChild(makeItemPick('tgt-id-'+i, v, {'data-ti':i,'data-f':'id'}));
      else idTd.appendChild(makeMonsterPick('tgt-id-'+i, v, {'data-ti':i,'data-f':'id'}));
    }
    fillIdCell(cond, id);
    const condSel=tr.querySelector('[data-f="cond"]');
    condSel.addEventListener('change', ()=>{
      const curVal=parseInt(idTd.querySelector('.mcb-hex')?.value||idTd.querySelector('select')?.value)||0;
      fillIdCell(+condSel.value, curVal);
    });
    tr.appendChild(idTd);
    const qtyTd=document.createElement('td');
    qtyTd.innerHTML=`<input type="number" data-ti="${i}" data-f="qty" value="${qty}" min="0" max="9999">`;
    tr.appendChild(qtyTd);
    tbt.appendChild(tr);
  });
  // Carry damage check: target0 cond=4 + additional=0x0180
  {
    const c0=ru8(d,qi+0x20), a0=ru16(d,qi+0x21);
    document.getElementById('f-carrydmg').checked = (c0===4 && a0===0x0180);
  }

  // Supply
  populateSupply(d);

  // Rewards — fully editable
  renderRewards(readRewardBlocks(d));

  // Boss appearance details — show all loaded entries (dynamic count)
  renderBossDetailTable();

  // Sync the F2 Baby Boom checkbox with the loaded quest's script.
  { const bb=document.getElementById('f-babyboom'); if(bb) bb.checked=f2DetectBabyBoom(d); }

  // Training Data Ptr at qi+0x30
  const f2TrainPtr = ru32(d,qi+0x30);
  document.getElementById('f-trainingptr').value = '0x'+f2TrainPtr.toString(16).toUpperCase().padStart(8,'0');
  f2TrainingSets = parseF2Training(d, f2TrainPtr);
  renderF2Training();

  // Small Monsters — render all config sets
  renderSmallMonsters();

  // Gathering
  renderGathering();

  // Fixed Info
  document.getElementById('f-fixed-val').value = '0x'+ru32(d,ptrs.fixed).toString(16).toUpperCase().padStart(8,'0');
  document.getElementById('f-fixed-unk').value = '0x'+ru16(d,ptrs.fixed+8).toString(16).toUpperCase().padStart(4,'0');
  // Pointer display
  const pd = document.getElementById('ptr-display');
  if(pd){
    pd.innerHTML = [
      ['Quest Info',ptrs.qi],['Supply',ptrs.supply],['Rewards',ptrs.reward],
      ['Fixed',ptrs.fixed],['Small Monsters',ptrs.questarea],['Boss',ptrs.boss],
      ['Gathering',ptrs.gather],['Unknown',ptrs.unknown],['Point Data',ptrs.acqdata]
    ].map(([n,v])=>`<div class="f"><label>${n}</label><span>0x${v.toString(16).toUpperCase().padStart(6,'0')}</span></div>`).join('');
  }

  renderHex(d);
}


// ── BOSS DETAIL RENDERING & MANAGEMENT ──────────────────────────────────────
function renderBossDetailTable() {
  const dbt=document.getElementById('tb-bossdetail');
  dbt.innerHTML='';
  const count = bossAppearEntries.length;
  for(let ei=0;ei<count;ei++){
    dbt.appendChild(makeBossDetailRow(ei, bossAppearEntries[ei]));
  }
  const cspan=document.getElementById('f2-boss-count');
  if(cspan) {
    cspan.textContent = count+' monster'+(count!==1?'s':'')+'.';
    if(count>10) cspan.innerHTML += ' <span style="color:var(--danger)">Warning: >10 may be unstable!</span>';
  }
}

function makeBossDetailRow(ei, entry) {
  let id=0,state=0,num=1,power=0,attr1=0,exit_=0,xv=0,zv=0,yv=0,orient=0,seq=0,size=0,hp=0;
  if(entry){
    const e=entry.raw;
    id    =e[0]|e[1]<<8;
    state =e[2]|e[3]<<8;
    num   =e[4];
    power =e[5];
    attr1 =e[6];
    exit_ =e[7];
    xv=new DataView(new Uint8Array(e.slice(32,36)).buffer).getFloat32(0,true);
    zv=new DataView(new Uint8Array(e.slice(36,40)).buffer).getFloat32(0,true);
    yv=new DataView(new Uint8Array(e.slice(40,44)).buffer).getFloat32(0,true);
    orient=e[28]|e[29]<<8|e[30]<<16|e[31]<<24;
    seq   =e[44]|e[45]<<8;
    size  =e[48]|e[49]<<8;
    hp    =e[50]|e[51]<<8;
  }
  const tr=document.createElement('tr');
  const slotTd=document.createElement('td');
  slotTd.style.cssText='color:var(--muted);font-family:var(--mono)';
  slotTd.textContent=ei;
  const idTd=document.createElement('td');
  idTd.appendChild(makeMonsterPick('bdid'+ei, id, {'data-bd':ei,'data-f':'id'}));
  tr.appendChild(slotTd);
  tr.appendChild(idTd);
  tr.insertAdjacentHTML('beforeend', [
    `<td><input type="text" data-bd="${ei}" data-f="state" value="${fmtHex(state,2)}" style="font-family:var(--mono)"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="num" value="${num}" min="0" max="127"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="power" value="${power}" min="0" max="255"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="attr1" value="${attr1}" min="0" max="255"></td>`,
    `<td><select data-bd="${ei}" data-f="exit">${stageOpts(exit_, false)}</select></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="x" value="${xv.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="y" value="${yv.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="z" value="${zv.toFixed(2)}" step="0.1"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="orient" value="${orient & 0xFFFF}" title="Raw orientation value (u16)"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="seq" value="${seq}" min="0"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="size" value="${size}" min="0"></td>`,
    `<td><input type="number" data-bd="${ei}" data-f="hp" value="${hp}" min="0"></td>`,
    `<td style="white-space:nowrap">`+
      `<button class="btn-dup" title="Duplicate" onclick="dupBossDetail(${ei})">⧉</button> `+
      `<button class="btn-danger" title="Delete" onclick="delBossDetail(${ei})">✕</button></td>`,
  ].join(''));
  return tr;
}

function commitBossDetailFromUI() {
  const rows=document.querySelectorAll('#tb-bossdetail tr');
  bossAppearEntries=[];
  rows.forEach(tr=>{
    const pick=tr.querySelector('.monster-pick');
    const id = pick ? readMonsterPick(pick) : 0;
    if(!id || id===0xFFFF) return;
    const g=f=>{ const el=tr.querySelector(`[data-f="${f}"]`); return el?el.value:'0'; };
    const raw=new Array(60).fill(0);
    const state=parseHD(g('state'));
    raw[0]=id&0xFF; raw[1]=(id>>8)&0xFF;
    raw[2]=state&0xFF; raw[3]=(state>>8)&0xFF;
    raw[4]=parseInt(g('num'))||0;
    raw[5]=parseInt(g('power'))||0;
    raw[6]=parseInt(g('attr1'))||0;
    raw[7]=parseInt(g('exit'))||0;
    const orient=(parseInt(g('orient'))||0)>>>0;
    raw[28]=orient&0xFF; raw[29]=(orient>>8)&0xFF; raw[30]=(orient>>16)&0xFF; raw[31]=(orient>>24)&0xFF;
    const buf=new ArrayBuffer(4), dv=new DataView(buf);
    dv.setFloat32(0,parseFloat(g('x'))||0,true); new Uint8Array(buf).forEach((b,i)=>raw[32+i]=b);
    dv.setFloat32(0,parseFloat(g('z'))||0,true); new Uint8Array(buf).forEach((b,i)=>raw[36+i]=b);
    dv.setFloat32(0,parseFloat(g('y'))||0,true); new Uint8Array(buf).forEach((b,i)=>raw[40+i]=b);
    const seq=parseInt(g('seq'))||0; raw[44]=seq&0xFF; raw[45]=(seq>>8)&0xFF;
    const sz=parseInt(g('size'))||0; raw[48]=sz&0xFF; raw[49]=(sz>>8)&0xFF;
    const hp=parseInt(g('hp'))||0; raw[50]=hp&0xFF; raw[51]=(hp>>8)&0xFF;
    bossAppearEntries.push({off:0, raw});
  });
}

function addBossDetail() {
  commitBossDetailFromUI();
  const template = bossAppearEntries.length>0 ? bossAppearEntries[0].raw.slice() : new Array(60).fill(0);
  template[0]=0x2F; template[1]=0; template[2]=0; template[3]=0; template[4]=1;
  bossAppearEntries.push({off:0, raw:template});
  renderBossDetailTable();
  markDirty();
}

function delBossDetail(ei) {
  commitBossDetailFromUI();
  bossAppearEntries.splice(ei, 1);
  renderBossDetailTable();
  markDirty();
}

function dupBossDetail(srcEi){
  commitBossDetailFromUI();
  if(srcEi >= bossAppearEntries.length) return;
  const clone = {off:0, raw: bossAppearEntries[srcEi].raw.slice()};
  bossAppearEntries.splice(srcEi+1, 0, clone);
  renderBossDetailTable();
  markDirty();
}


// Detect / read the F2 quest script (same structure as FU, at header 0x10).
function f2ScriptRegion(d){
  const script=ru32(d,0x10), supply=ru32(d,0x08);
  if(script>0 && supply>script){ return {off:script, count:Math.floor((supply-script)/8)}; }
  return null;
}

function f2DetectBabyBoom(d){
  const r=f2ScriptRegion(d); if(!r)return false;
  const ops=[]; for(let i=0;i<r.count;i++) ops.push(ru16(d,r.off+i*8));
  return ops.includes(57)&&ops.includes(55)&&ops.includes(56);
}


// Write a packed script (array of [op,a1,a2,a3]) into the F2 script region.
// The region is fixed-size (scriptPtr..supplyPtr); we write up to that capacity
// and pad the remainder with the End opcode (-1) so the slot count is preserved.
function f2WriteScript(d, packets){
  const r=f2ScriptRegion(d); if(!r)return;
  const cap=r.count;
  for(let i=0;i<cap;i++){
    const p = i<packets.length ? packets[i] : [-1,0,0,0];
    const o=r.off+i*8;
    wu16(d,o,   p[0]&0xFFFF);
    wu16(d,o+2, p[1]&0xFFFF);
    wu16(d,o+4, p[2]&0xFFFF);
    wu16(d,o+6, p[3]&0xFFFF);
  }
}


function f2ToggleBabyBoom(on){
  if(!D){return;}
  const qi=ptrs.qi;
  if(on){
    f2WriteScript(D, BABYBOOM_SCRIPT);
    // Survival QuestType flag (byte 2). F2 QuestType is a u8 at qi+0 plus flags
    // at qi+1; the survival marker lives in the visual-data QuestType dword the
    // same way as FU. F2 stores TaskType u8 @qi and flag u8 @qi+1; set the
    // additional-flag byte to mark survival (0x28 high-nibble pattern).
    wu8(D, qi+1, (ru8(D,qi+1)|0x28)&0xFF);
  } else {
    f2WriteScript(D, NORMAL_SCRIPT);
    wu8(D, qi+1, ru8(D,qi+1) & ~0x28 & 0xFF);
  }
  renderHex(D);
  markDirty();
}


function makeQacRow(i, cc, tid, qty, num){
  const tr=document.createElement('tr');
  tr.innerHTML=
    `<td style="color:var(--muted);font-family:var(--mono)">${i}</td>`+
    `<td><select data-qac="${i}" data-f="cc"><option value="0"${cc===0?' selected':''}>0 – None</option><option value="1"${cc===1?' selected':''}>1 – On Kill</option><option value="2"${cc===2?' selected':''}>2 – On Gather</option></select></td>`+
    `<td><input type="number" data-qac="${i}" data-f="tid" value="${tid}" min="0" max="65535"></td>`+
    `<td><input type="number" data-qac="${i}" data-f="qty" value="${qty}" min="0" max="255"></td>`+
    `<td><input type="number" data-qac="${i}" data-f="num" value="${num}" min="0" max="255"></td>`+
    `<td><button class="btn-danger" onclick="removeQacRow(this)">✕</button></td>`;
  return tr;
}

function addQacRow(){
  const tb=document.getElementById('tb-qac');
  const i=tb.querySelectorAll('tr').length;
  tb.appendChild(makeQacRow(i,0,0,0,0));
  renumberQac();markDirty();
}

function removeQacRow(btn){btn.closest('tr').remove();renumberQac();markDirty();}

function renumberQac(){document.querySelectorAll('#tb-qac tr').forEach((tr,i)=>{tr.cells[0].textContent=i;tr.querySelectorAll('[data-qac]').forEach(el=>el.dataset.qac=i);});}


// ── SMALL MONSTER RENDERER ───────────────────────────────────────────────────
function renderSmallMonsters(){
  const wrap=document.getElementById('sm-sets-wrap');
  wrap.innerHTML='';
  const dv4=new DataView(new ArrayBuffer(4));
  function rf32bytes(b,o){const a=new Uint8Array(4);for(let i=0;i<4;i++)a[i]=b[o+i];return new DataView(a.buffer).getFloat32(0,true);}

  smData.forEach((cfg,ci)=>{
    const section=document.createElement('div');
    section.className='card';
    section.style.marginBottom='14px';
    let hdrExtra='';
    if(cfg.sharedWith!==undefined) hdrExtra=` <span style="font-size:10px;color:var(--muted)">(same data as ${smData[cfg.sharedWith].name})</span>`;
    section.innerHTML=`<div class="card-hdr">🐾 Small Monsters — ${cfg.name}${hdrExtra} <span style="font-size:10px;font-family:var(--mono);color:var(--muted)">[ptr: 0x${cfg.ptr.toString(16).padStart(6,'0')}]</span></div>`;
    if(cfg.sharedWith!==undefined||!cfg.areas||cfg.areas.length===0){
      const empty=document.createElement('div');
      empty.className='note';
      if(cfg.sharedWith!==undefined){
        // Shared with another config. Show a note AND an add-entry table; if the
        // user adds entries here, the share is broken on save (new block at EOF).
        empty.innerHTML=`Currently shares data with <b>${smData[cfg.sharedWith].name}</b>. `+
          `Adding a spawn entry below will split it into its own configuration.`;
        section.appendChild(empty);
        const syntheticArea={areaID:cfg.areaIDHint||1, mixedOff:-1, appearOff:-1,
          mixedPtr:0, appearPtr:0, slots:[], entries:[], endMarkOff:-1, origEntryCap:0, synthetic:true, splitFromShare:true};
        cfg.areas=[syntheticArea]; cfg._wasShared=cfg.sharedWith; delete cfg.sharedWith;
        const aDiv=document.createElement('div');
        aDiv.style.cssText='padding:12px;border-bottom:1px solid var(--border)';
        const slotNote=document.createElement('div');
        slotNote.className='note'; slotNote.style.cssText='font-size:11px;margin-bottom:8px';
        slotNote.textContent='Species slot IDs are filled automatically from the monsters you add (up to 4 unique types).';
        aDiv.appendChild(slotNote);
        const areaRow=document.createElement('div');
        areaRow.style.cssText='display:flex;gap:8px;align-items:center;margin-bottom:8px';
        areaRow.innerHTML=`<span style="font-size:11px;color:var(--muted)">Area:</span>`+
          `<select class="sm-area-id" data-cfg="${ci}" data-area="0" style="font-size:11px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(syntheticArea.areaID, false)}</select>`;
        aDiv.appendChild(areaRow);
        const entLabel=document.createElement('div');
        entLabel.style.cssText='font-size:10px;color:var(--muted);font-family:var(--mono);margin:10px 0 4px;letter-spacing:1px;text-transform:uppercase';
        entLabel.textContent='Spawn Detail Entries:';
        aDiv.appendChild(entLabel);
        const entTbl=document.createElement('table');
        entTbl.innerHTML='<thead><tr><th>#</th><th>Monster</th><th>Variant</th><th>Qty</th><th>ActMode</th><th>X</th><th>Z</th><th>Y</th><th>Orientation</th><th>SeqNum</th><th>Size</th><th>HP</th><th></th></tr></thead>';
        const entBody=document.createElement('tbody');
        entBody.dataset.cfg=ci; entBody.dataset.area=0;
        entTbl.appendChild(entBody); aDiv.appendChild(entTbl);
        const addBtn=document.createElement('button');
        addBtn.className='btn-add'; addBtn.style.cssText='margin-top:8px;font-size:11px';
        addBtn.textContent='+ Add Spawn Entry';
        addBtn.onclick=()=>addSmEntry(entBody,ci,0);
        aDiv.appendChild(addBtn);
        section.appendChild(aDiv);
        wrap.appendChild(section);
        return;
      }
      {
        // No areas yet — but let the user add entries from scratch
        empty.textContent='No small monster data for this configuration. You can add spawn entries below.';
        section.appendChild(empty);
        // Create a synthetic empty area so the user can add entries
        const syntheticArea = {areaID:0, mixedOff:cfg.ptr+8, appearOff:cfg.ptr+12,
          mixedPtr:0, appearPtr:0, slots:[], entries:[], endMarkOff:-1, origEntryCap:0, synthetic:true};
        cfg.areas = [syntheticArea];
        // Render the add-entry UI for this synthetic area
        const aDiv=document.createElement('div');
        aDiv.style.cssText='padding:12px;border-bottom:1px solid var(--border)';
        const areaRow2=document.createElement('div');
        areaRow2.style.cssText='display:flex;gap:8px;align-items:center;margin-bottom:8px';
        areaRow2.innerHTML=`<span style="font-size:11px;color:var(--muted)">Area:</span>`+
          `<select class="sm-area-id" data-cfg="${ci}" data-area="0" style="font-size:11px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(syntheticArea.areaID, false)}</select>`;
        aDiv.appendChild(areaRow2);
        // Species slot IDs are auto-derived from spawn entries on save.
        const slotNote=document.createElement('div');
        slotNote.className='note';
        slotNote.style.cssText='font-size:11px;margin-bottom:8px';
        slotNote.textContent='Species slot IDs are filled automatically from the monsters you add in the spawn entries below (up to 4 unique types).';
        aDiv.appendChild(slotNote);
        // Entry table
        const entLabel=document.createElement('div');
        entLabel.style.cssText='font-size:10px;color:var(--muted);font-family:var(--mono);margin:10px 0 4px;letter-spacing:1px;text-transform:uppercase';
        entLabel.textContent='Spawn Detail Entries:';
        aDiv.appendChild(entLabel);
        const entTbl=document.createElement('table');
        entTbl.innerHTML='<thead><tr><th>#</th><th>Monster</th><th>Variant</th><th>Qty</th><th>ActMode</th><th>X</th><th>Z</th><th>Y</th><th>Orientation</th><th>SeqNum</th><th>Size</th><th>HP</th><th></th></tr></thead>';
        const entBody=document.createElement('tbody');
        entBody.dataset.cfg=ci; entBody.dataset.area=0;
        entTbl.appendChild(entBody);
        aDiv.appendChild(entTbl);
        const addBtn=document.createElement('button');
        addBtn.className='btn-add'; addBtn.style.cssText='margin-top:8px;font-size:11px';
        addBtn.textContent='+ Add Spawn Entry';
        addBtn.onclick=()=>addSmEntry(entBody,ci,0);
        aDiv.appendChild(addBtn);
        section.appendChild(aDiv);
      }
      wrap.appendChild(section);
      return;
    }
    cfg.areas.forEach((area,ai)=>{
      const aDiv=document.createElement('div');
      aDiv.style.cssText='padding:12px;border-bottom:1px solid var(--border)';
      aDiv.innerHTML=`<div style="font-size:11px;color:var(--accent);margin-bottom:8px;display:flex;align-items:center;gap:8px">`+
        `<span style="font-family:var(--mono)">Area ${ai}</span>`+
        `<select class="sm-area-id" data-cfg="${ci}" data-area="${ai}" style="font-size:11px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(area.areaID, false)}</select>`+
        `<button class="btn-danger" style="margin-left:auto;font-size:10px" onclick="f2RemoveSmArea(${ci},${ai})">✕ Area</button></div>`;

      // Slot IDs are auto-derived from spawn entries on save — no separate input needed.
      const slotNote=document.createElement('div');
      slotNote.className='note';
      slotNote.style.cssText='font-size:11px;margin-bottom:8px';
      const existingSlotNames = area.slots.filter(s=>s.id!==0xFFFFFFFF).map(s=>MONSTERS[s.id]||'0x'+s.id.toString(16));
      slotNote.textContent='Species slots (auto-managed): ' + (existingSlotNames.length ? existingSlotNames.join(', ') : 'none yet — add spawn entries below');
      aDiv.appendChild(slotNote);

      // Appearance entries table — always shown so user can add new entries
      const entLabel=document.createElement('div');
      entLabel.style.cssText='font-size:10px;color:var(--muted);font-family:var(--mono);margin:10px 0 4px;letter-spacing:1px;text-transform:uppercase';
      entLabel.textContent='Spawn Detail Entries (60 bytes each):';
      aDiv.appendChild(entLabel);
      const entTbl=document.createElement('table');
      entTbl.innerHTML='<thead><tr><th>#</th><th>Monster</th><th>Variant</th><th>Qty</th><th>ActMode</th><th>X</th><th>Z</th><th>Y</th><th>Orientation</th><th>SeqNum</th><th>Size</th><th>HP</th><th></th></tr></thead>';
      const entBody=document.createElement('tbody');
      entBody.dataset.cfg=ci; entBody.dataset.area=ai;
      area.entries.forEach((entry,ei)=>{
        entBody.appendChild(makeSmEntryRow(ci,ai,ei,entry.raw));
      });
      entTbl.appendChild(entBody);
      aDiv.appendChild(entTbl);
      const addBtn=document.createElement('button');
      addBtn.className='btn-add'; addBtn.style.cssText='margin-top:8px;font-size:11px';
      addBtn.textContent='+ Add Spawn Entry';
      addBtn.onclick=()=>addSmEntry(entBody,ci,ai);
      aDiv.appendChild(addBtn);
      section.appendChild(aDiv);
    });
    const addAreaBtn=document.createElement('button');
    addAreaBtn.className='btn-add'; addAreaBtn.style.cssText='margin:8px 14px 14px';
    addAreaBtn.textContent='+ Add Area';
    addAreaBtn.onclick=()=>f2AddSmArea(ci);
    section.appendChild(addAreaBtn);
    wrap.appendChild(section);
  });
}

function commitSmFromUI(){}

function dupSmEntry(btn){
  const tbody = btn.closest('tbody');
  const ci = parseInt(tbody.dataset.cfg), ai = parseInt(tbody.dataset.area);
  const rowIdx = Array.from(tbody.querySelectorAll('tr')).indexOf(btn.closest('tr'));
  const src = smData[ci].areas[ai].entries[rowIdx];
  const clone = {off:-1, raw: src.raw.slice()};
  smData[ci].areas[ai].entries.splice(rowIdx+1, 0, clone);
  renderSmallMonsters(); markDirty();
}

function f2AddSmArea(ci){
  commitSmFromUI();
  if(!smData[ci].areas) smData[ci].areas=[];
  smData[ci].areas.push({areaID:1, slots:[], entries:[], synthetic:true, mixedOff:-1, appearOff:-1, mixedPtr:0, appearPtr:0, endMarkOff:-1, origEntryCap:0});
  renderSmallMonsters(); markDirty();
}

function f2RemoveSmArea(ci, ai){
  commitSmFromUI();
  if(!smData[ci].areas) return;
  smData[ci].areas.splice(ai, 1);
  renderSmallMonsters(); markDirty();
}

function makeSmEntryRow(ci,ai,ei,raw){
  const e=raw||new Array(60).fill(0);
  const smid =e[0]|e[1]<<8;
  const state=e[2]|e[3]<<8;
  const qty  =e[4]|e[5]<<8;
  const act  =e[6]|e[7]<<8;
  const orient=(e[28]|e[29]<<8|e[30]<<16|e[31]<<24)>>>0;
  const xv=new DataView(new Uint8Array(e.slice(32,36)).buffer).getFloat32(0,true);
  const zv=new DataView(new Uint8Array(e.slice(36,40)).buffer).getFloat32(0,true);
  const yv=new DataView(new Uint8Array(e.slice(40,44)).buffer).getFloat32(0,true);
  const seq =e[44]|e[45]<<8;
  const size=e[48]|e[49]<<8;
  const hp  =e[50]|e[51]<<8;
  const tr=document.createElement('tr');
  const p=`data-cfg="${ci}" data-area="${ai}" data-ei="${ei}"`;

  const idxTd=document.createElement('td');
  idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=ei;
  const idTd=document.createElement('td');
  const monPick=makeMonsterPick('smentry', smid, Object.fromEntries([['data-cfg',ci],['data-area',ai],['data-ei',ei],['data-f','id']]));
  idTd.appendChild(monPick);
  tr.appendChild(idxTd); tr.appendChild(idTd);
  tr.insertAdjacentHTML('beforeend',
    `<td><div class="hd-wrap"><input type="text" ${p} data-f="state" value="${fmtHex(state,2)}" style="font-family:var(--mono)"><button class="hd-btn" onclick="toggleHexDec(this)">dec</button></div></td>`+
    `<td><input type="number" ${p} data-f="qty" value="${qty}" min="0" max="65535"></td>`+
    `<td><input type="number" ${p} data-f="act" value="${act}" min="0" max="65535"></td>`+
    `<td><input type="number" ${p} data-f="x" value="${xv.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="z" value="${zv.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="y" value="${yv.toFixed(2)}" step="0.1"></td>`+
    `<td><input type="number" ${p} data-f="orient" value="${orient & 0xFFFF}" title="Raw orientation value (u16)"></td>`+
    `<td><input type="number" ${p} data-f="seq" value="${seq}" min="0"></td>`+
    `<td><input type="number" ${p} data-f="size" value="${size}" min="0"></td>`+
    `<td><input type="number" ${p} data-f="hp" value="${hp}" min="0"></td>`+
    `<td style="white-space:nowrap"><button class="btn-dup" title="Duplicate" onclick="dupSmEntry(this)">⧉</button> <button class="btn-danger" onclick="removeSmEntry(this)">✕</button></td>`
  );
  return tr;
}


function addSmEntry(tbody,ci,ai){
  const ei=tbody.querySelectorAll('tr').length;
  tbody.appendChild(makeSmEntryRow(ci,ai,ei,null));
  renumberSmEntries(tbody);
  // Ensure cfg.areas exists and has this area
  if(!smData[ci].areas) smData[ci].areas=[];
  while(smData[ci].areas.length<=ai) smData[ci].areas.push({areaID:0,mixedOff:-1,appearOff:-1,mixedPtr:0,appearPtr:0,slots:[],entries:[],endMarkOff:-1,origEntryCap:0,synthetic:true});
  smData[ci].areas[ai].entries.push({off:-1, raw:new Array(60).fill(0)});
  markDirty();
}


function removeSmEntry(btn){
  const tbody=btn.closest('tbody');
  const ci=parseInt(tbody.dataset.cfg), ai=parseInt(tbody.dataset.area);
  const rowIdx=Array.from(tbody.querySelectorAll('tr')).indexOf(btn.closest('tr'));
  btn.closest('tr').remove();
  smData[ci].areas[ai].entries.splice(rowIdx,1);
  renumberSmEntries(tbody);
  markDirty();
}


function renumberSmEntries(tbody){
  tbody.querySelectorAll('tr').forEach((tr,i)=>{
    tr.cells[0].textContent=i;
    tr.querySelectorAll('[data-ei]').forEach(el=>el.dataset.ei=i);
  });
}


// ── GATHERING RENDERER ───────────────────────────────────────────────────────
function commitF2Gather(){
  if(!gatherData) return;
  gatherData.areas.forEach((area,ai)=>{
    const card=document.querySelector(`#gather-wrap [data-ga-card="${ai}"]`);
    if(!card) return;
    area.points=[];
    card.querySelectorAll('.f2-gn-row').forEach(div=>{
      area.points.push({
        off: parseInt(div.dataset.off)||0,
        x: parseFloat(div.querySelector('[data-f="x"]').value)||0,
        z: parseFloat(div.querySelector('[data-f="z"]').value)||0,
        y: parseFloat(div.querySelector('[data-f="y"]').value)||0,
        range: parseFloat(div.querySelector('[data-f="range"]').value)||0,
        code: parseInt(div.querySelector('[data-f="code"]').value)||0,
        freqUpper: parseInt(div.querySelector('[data-f="freqUpper"]').value)||0,
        gatherType: parseInt(div.querySelector('[data-f="gatherType"]').value)||0,
        freqLower: parseInt(div.querySelector('[data-f="freqLower"]').value)||0
      });
    });
  });
  gatherData.pointDataMaterials=[];
  document.querySelectorAll('#gather-wrap [data-gc-card]').forEach(card=>{
    const mats=[];
    card.querySelectorAll('.f2-gi-rows tr').forEach(tr=>{
      mats.push({
        off: parseInt(tr.dataset.off)||0,
        prob: parseInt(tr.querySelector('[data-f="prob"]').value)||0,
        item: readItemPick(tr) & 0xFFFF
      });
    });
    gatherData.pointDataMaterials.push(mats);
  });
}

function renderGathering(){
  const wrap=document.getElementById('gather-wrap');
  if(!wrap)return;
  wrap.innerHTML='';
  const renderedTables = new Set();

  (gatherData&&gatherData.areas||[]).forEach((area,ai)=>{
    const card=document.createElement('div');
    card.className='card'; card.style.marginBottom='10px'; card.dataset.gaCard=ai;
    const mapId=parseInt(document.getElementById('f-mapid').value)||0;
    const stages=GATHER_STAGES[mapId]||[];
    const curStage=stages[ai]!==undefined?stages[ai]:ai;
    card.innerHTML=`<div class="card-hdr" style="display:flex;align-items:center;gap:10px">`+
      `<select class="f2-ga-stage-sel" data-area="${ai}" style="font-size:12px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(curStage,false)}</select>`+
      `<span style="font-size:10px;color:var(--muted)">Table ${ai} · ${area.points.length} node(s)</span>`+
      `<button class="btn-danger" style="margin-left:auto" onclick="delF2GatherArea(${ai})">✕ Table</button></div>`;
    const body=document.createElement('div'); body.className='card-body';
    area.points.forEach((pt,pi)=>{
      // Node coordinate row
      const nodeDiv=document.createElement('div');
      nodeDiv.style.cssText='display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding:4px 0;border-bottom:1px solid var(--border)';
      nodeDiv.dataset.off=pt.off||0; nodeDiv.dataset.ai=ai; nodeDiv.dataset.pi=pi;
      nodeDiv.className='f2-gn-row';
      nodeDiv.innerHTML=
        `<span style="color:var(--muted);font-family:var(--mono);width:20px">${pi}</span>`+
        `<label style="font-size:13px">X</label><input type="number" data-f="x" value="${pt.x.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Y</label><input type="number" data-f="y" value="${pt.y.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Z</label><input type="number" data-f="z" value="${pt.z.toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Range</label><input type="number" data-f="range" value="${(pt.range||0).toFixed(2)}" step="0.1" style="width:75px">`+
        `<label style="font-size:13px">Code</label><input type="number" data-f="code" value="${pt.code}" min="0" max="65535" style="width:50px">`+
        `<label style="font-size:13px">FrqUp</label><input type="number" data-f="freqUpper" value="${pt.freqUpper}" min="0" max="65535" style="width:50px">`+
        `<label style="font-size:13px">FrqLo</label><input type="number" data-f="freqLower" value="${pt.freqLower||0}" min="0" max="65535" style="width:50px">`+
        `<select data-f="gatherType" style="font-size:14px">${gatherTypeOpts(pt.gatherType||0)}</select>`+
        `<button class="btn-dup" title="Duplicate" onclick="dupF2GatherNode(${ai},${pi})">⧉</button> `+
        `<button class="btn-danger" title="Delete" onclick="delF2GatherNode(${ai},${pi})">✕</button>`;
      body.appendChild(nodeDiv);

      // Inline editable item table
      const ci=pt.code;
      const mats=(gatherData.pointDataMaterials||[])[ci];
      if(mats!==undefined && !renderedTables.has(ci)){
        renderedTables.add(ci);
        const itDiv=document.createElement('div');
        itDiv.style.cssText='margin:0 0 8px 24px;padding:4px 8px;border-left:3px solid var(--accent);background:var(--bg)';
        itDiv.dataset.gcCard=ci;
        const itTbl=document.createElement('table'); itTbl.style.fontSize='14px';
        itTbl.innerHTML='<thead><tr><th>#</th><th>Prob %</th><th>Item</th><th></th></tr></thead>';
        const itTb=document.createElement('tbody'); itTb.className='f2-gi-rows';
        mats.forEach((m,mi)=>{
          const tr=document.createElement('tr'); tr.dataset.off=m.off||0;
          const idxTd=document.createElement('td'); idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=mi;
          const probTd=document.createElement('td'); probTd.innerHTML=`<input type="number" data-f="prob" value="${m.prob}" min="0" max="100" style="width:60px">`;
          const itemTd=document.createElement('td'); itemTd.appendChild(makeItemPick('f2gi'+ci+'-'+mi, m.item, {}));
          const delTd=document.createElement('td'); delTd.style.whiteSpace='nowrap';
          delTd.innerHTML=`<button class="btn-dup" title="Dup" onclick="dupF2GatherItem(${ci},${mi})">⧉</button> <button class="btn-danger" title="Del" onclick="delF2GatherItem(${ci},${mi})">✕</button>`;
          tr.appendChild(idxTd); tr.appendChild(probTd); tr.appendChild(itemTd); tr.appendChild(delTd);
          itTb.appendChild(tr);
        });
        itTbl.appendChild(itTb); itDiv.appendChild(itTbl);
        const addIt=document.createElement('button');
        addIt.className='btn-add'; addIt.style.cssText='margin:4px 0;font-size:11px';
        addIt.textContent='+ Item'; addIt.onclick=()=>{ commitF2Gather(); gatherData.pointDataMaterials[ci].push({off:0,prob:10,item:0}); renderGathering(); markDirty(); };
        itDiv.appendChild(addIt);
        body.appendChild(itDiv);
      } else if(mats!==undefined && renderedTables.has(ci)){
        const ref=document.createElement('div');
        ref.style.cssText='margin:0 0 4px 24px;font-size:11px;color:var(--muted)';
        ref.textContent='↑ Uses Item Table #'+ci+' (edited above)';
        body.appendChild(ref);
      }
    });
    card.appendChild(body);
    const add=document.createElement('button');
    add.className='btn-add'; add.style.margin='8px 14px 14px'; add.textContent='+ Add Node';
    add.onclick=()=>{ commitF2Gather(); gatherData.areas[ai].points.push({off:0,x:0,z:0,y:0,range:50,code:0,freqUpper:3,gatherType:0,freqLower:1}); renderGathering(); markDirty(); };
    card.appendChild(add);
    wrap.appendChild(card);
  });
  const addArea=document.createElement('button');
  addArea.className='btn-add'; addArea.textContent='+ Add Area Table';
  addArea.onclick=()=>{ commitF2Gather(); gatherData.areas.push({ptr:0,points:[]}); renderGathering(); markDirty(); };
  wrap.appendChild(addArea);

  // Unreferenced item tables
  const allMats=gatherData&&gatherData.pointDataMaterials||[];
  const unreferenced=[];
  allMats.forEach((_,ci)=>{ if(!renderedTables.has(ci)) unreferenced.push(ci); });
  if(unreferenced.length){
    const sec2=document.createElement('div'); sec2.style.marginTop='16px';
    sec2.innerHTML='<div style="font-size:11px;color:var(--muted);margin-bottom:4px">Unreferenced Item Tables</div>';
    unreferenced.forEach(ci=>{
      const mats=allMats[ci];
      const itDiv=document.createElement('div');
      itDiv.style.cssText='margin-bottom:8px;padding:4px 8px;border-left:3px solid var(--border);background:var(--bg)';
      itDiv.dataset.gcCard=ci;
      itDiv.innerHTML=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="font-size:11px;font-weight:bold">Table ${ci}</span><button class="btn-danger" style="font-size:10px" onclick="delF2GatherItemTable(${ci})">✕</button></div>`;
      const itTbl=document.createElement('table'); itTbl.style.fontSize='14px';
      itTbl.innerHTML='<thead><tr><th>#</th><th>Prob %</th><th>Item</th><th></th></tr></thead>';
      const itTb=document.createElement('tbody'); itTb.className='f2-gi-rows';
      mats.forEach((m,mi)=>{
        const tr=document.createElement('tr'); tr.dataset.off=m.off||0;
        const idxTd=document.createElement('td'); idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=mi;
        const probTd=document.createElement('td'); probTd.innerHTML=`<input type="number" data-f="prob" value="${m.prob}" min="0" max="100" style="width:60px">`;
        const itemTd=document.createElement('td'); itemTd.appendChild(makeItemPick('f2gi'+ci+'-'+mi, m.item, {}));
        const delTd=document.createElement('td'); delTd.style.whiteSpace='nowrap';
        delTd.innerHTML=`<button class="btn-dup" title="Dup" onclick="dupF2GatherItem(${ci},${mi})">⧉</button> <button class="btn-danger" title="Del" onclick="delF2GatherItem(${ci},${mi})">✕</button>`;
        tr.appendChild(idxTd); tr.appendChild(probTd); tr.appendChild(itemTd); tr.appendChild(delTd);
        itTb.appendChild(tr);
      });
      itTbl.appendChild(itTb); itDiv.appendChild(itTbl);
      const addIt=document.createElement('button');
      addIt.className='btn-add'; addIt.style.cssText='margin:4px 0;font-size:11px';
      addIt.textContent='+ Item'; addIt.onclick=()=>{ commitF2Gather(); gatherData.pointDataMaterials[ci].push({off:0,prob:10,item:0}); renderGathering(); markDirty(); };
      itDiv.appendChild(addIt);
      sec2.appendChild(itDiv);
    });
    wrap.appendChild(sec2);
  }
  upgradeSelectsToCombo();
}

function delF2GatherArea(ai){ commitF2Gather(); gatherData.areas.splice(ai,1); renderGathering(); markDirty(); }
function delF2GatherNode(ai,pi){ commitF2Gather(); gatherData.areas[ai].points.splice(pi,1); renderGathering(); markDirty(); }
function dupF2GatherNode(ai,pi){ commitF2Gather(); const p=gatherData.areas[ai].points[pi]; gatherData.areas[ai].points.splice(pi+1,0,JSON.parse(JSON.stringify(p))); renderGathering(); markDirty(); }
function delF2GatherItemTable(ci){ commitF2Gather(); gatherData.pointDataMaterials.splice(ci,1); gatherData.pointDataPtrs.splice(ci,1); renderGathering(); markDirty(); }
function delF2GatherItem(ci,mi){ commitF2Gather(); gatherData.pointDataMaterials[ci].splice(mi,1); renderGathering(); markDirty(); }
function dupF2GatherItem(ci,mi){ commitF2Gather(); const it=gatherData.pointDataMaterials[ci][mi]; gatherData.pointDataMaterials[ci].splice(mi+1,0,JSON.parse(JSON.stringify(it))); renderGathering(); markDirty(); }


function syncSmSlotDec(inp){
  const ci=inp.dataset.cfg, ai=inp.dataset.area, si=inp.dataset.slot;
  const id=parseInt(inp.value.replace(/^0x/i,''),16)>>>0;
  const el=document.getElementById(`smdec-c${ci}a${ai}s${si}`);
  if(el)el.textContent=id===0xFFFFFFFF?'—':id;
}


function populateSupply(d){
  const tb=document.getElementById('tb-supply');
  tb.innerHTML='';
  let off=ptrs.supply, idx=0;
  for(let i=0;i<64;i++){
    const v=ru16(d,off);
    if(!v)break;
    appendSupplyRow(tb,idx,v,ru16(d,off+2));
    idx++;off+=4;
  }
}


function appendSupplyRow(tb,idx,itemId,qty){
  const tr=document.createElement('tr');
  const idxTd=document.createElement('td');
  idxTd.style.cssText='color:var(--muted);font-family:var(--mono)';
  idxTd.textContent=idx;
  const itemTd=document.createElement('td');
  const pick=makeItemPick('s-item-'+idx, itemId, {});
  pick.querySelector('select').className='s-item-sel';
  pick.querySelector('input').className='s-item-inp';
  itemTd.appendChild(pick);
  const qtyTd=document.createElement('td');
  qtyTd.innerHTML=`<input type="number" class="s-qty" value="${qty}" min="1" max="99">`;
  const delTd=document.createElement('td');
  delTd.style.whiteSpace='nowrap';
  delTd.innerHTML=`<button class="btn-dup" title="Duplicate" onclick="dupSupplyRow(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="removeRow(this)">✕</button>`;
  tr.appendChild(idxTd); tr.appendChild(itemTd); tr.appendChild(qtyTd); tr.appendChild(delTd);
  tb.appendChild(tr);
}

function dupSupplyRow(btn){
  const tr=btn.closest('tr'); const tb=tr.closest('tbody');
  const item=readItemPick(tr.querySelector('.s-item-sel')) & 0xFFFF;
  const qty=parseInt(tr.querySelector('.s-qty').value)||1;
  const idx=Array.from(tb.children).indexOf(tr)+1;
  appendSupplyRow(tb, idx, item, qty);
  // move the freshly-appended row to just after the source
  tb.insertBefore(tb.lastElementChild, tr.nextSibling);
  renumberTable(tb); markDirty();
}

function addSupplyRow(){const tb=document.getElementById('tb-supply');appendSupplyRow(tb,tb.querySelectorAll('tr').length,1,1);renumberTable(tb);markDirty();}

function removeRow(btn){btn.closest('tr').remove();renumberTable(btn.closest('tbody'));markDirty();}

function renumberTable(tb){tb.querySelectorAll('tr').forEach((tr,i)=>{tr.cells[0].textContent=i;});}


function readRewardBlocks(d){
  const blocks=[];let off=ptrs.reward;
  for(let i=0;i<20;i++){
    const cond=ru32(d,off);
    if(cond===0xFFFFFFFF||cond===0xFFFF)break;
    const bptr=ru32(d,off+4);const entries=[];let boff=bptr;
    for(let j=0;j<50;j++){
      const prob=ru16(d,boff),item=ru16(d,boff+2),qty=ru16(d,boff+4);
      if(prob===0xFFFF||prob===0)break;
      entries.push({prob,item_id:item,qty});boff+=6;
    }
    blocks.push({cond,rewards:entries});off+=8;
  }
  return blocks;
}


function renderRewards(blocks){
  const rb=document.getElementById('rewards-body');
  rb.innerHTML='';
  if(!blocks.length){
    rb.innerHTML='<div style="padding:12px;color:var(--muted)">No reward blocks found.</div>';
    return;
  }
  blocks.forEach((blk,bi)=>{
    const div=document.createElement('div');
    div.dataset.rblock=bi;
    div.style.cssText='padding:12px;border-bottom:1px solid var(--border)';
    // Block header row: cond input + delete block button
    const hdr=document.createElement('div');
    hdr.style.cssText='display:flex;align-items:center;gap:10px;margin-bottom:8px';
    hdr.innerHTML=
      `<span style="font-family:var(--mono);font-size:11px;color:var(--muted)">Block ${bi} — cond:</span>`+
      `<input type="text" class="rb-cond" value="0x${blk.cond.toString(16).padStart(8,'0').toUpperCase()}" style="font-family:var(--mono);width:130px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:3px 7px;font-size:13px">`+
      `<button class="btn-danger" onclick="removeRewardBlock(this)">✕ Delete Block</button>`;
    div.appendChild(hdr);
    // Entries table
    const tbl=document.createElement('table');
    tbl.innerHTML=`<thead><tr><th>#</th><th>Prob %</th><th>Item ID (hex)</th><th>Qty</th><th></th></tr></thead>`;
    const tbody=document.createElement('tbody');
    tbody.className='rb-entries';
    blk.rewards.forEach((r,ri)=>{
      tbody.appendChild(makeRewardRow(ri,r.prob,r.item_id,r.qty));
    });
    tbl.appendChild(tbody);
    div.appendChild(tbl);
    const addBtn=document.createElement('button');
    addBtn.className='btn-add'; addBtn.style.marginTop='8px';
    addBtn.textContent='+ Add Entry';
    addBtn.onclick=()=>{ addRewardEntry(tbody); };
    div.appendChild(addBtn);
    rb.appendChild(div);
  });
}


function makeRewardRow(ri,prob,item_id,qty){
  const tr=document.createElement('tr');
  const riTd=document.createElement('td');
  riTd.style.cssText='color:var(--muted);font-family:var(--mono);width:28px';
  riTd.textContent=ri;
  const probTd=document.createElement('td');
  probTd.innerHTML=`<input type="number" class="re-prob" value="${prob}" min="0" max="100" style="width:70px">`;
  const itemTd=document.createElement('td');
  const pick=makeItemPick('re-item-'+ri, item_id, {});
  pick.querySelector('select').className='re-item-sel';
  pick.querySelector('input').className='re-item-inp';
  itemTd.appendChild(pick);
  const qtyTd=document.createElement('td');
  qtyTd.innerHTML=`<input type="number" class="re-qty" value="${qty}" min="1" max="99" style="width:60px">`;
  const delTd=document.createElement('td');
  delTd.style.whiteSpace='nowrap';
  delTd.innerHTML=`<button class="btn-dup" title="Duplicate" onclick="dupRewardRow(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="removeRewardRow(this)">✕</button>`;
  tr.appendChild(riTd); tr.appendChild(probTd); tr.appendChild(itemTd); tr.appendChild(qtyTd); tr.appendChild(delTd);
  return tr;
}

function dupRewardRow(btn){
  const tr=btn.closest('tr'); const tb=tr.closest('tbody');
  const prob=parseInt(tr.querySelector('.re-prob').value)||0;
  const item=readItemPick(tr.querySelector('.re-item-sel')) & 0xFFFF;
  const qty=parseInt(tr.querySelector('.re-qty').value)||1;
  const clone=makeRewardRow(0,prob,item,qty);
  tb.insertBefore(clone, tr.nextSibling);
  tb.querySelectorAll('tr').forEach((r,i)=>{r.cells[0].textContent=i;});
  markDirty();
}


function addRewardEntry(tbody){
  const rows=tbody.querySelectorAll('tr');
  tbody.appendChild(makeRewardRow(rows.length,10,1,1));
  renumberRewardRows(tbody);
  markDirty();
}


function removeRewardRow(btn){
  const tbody=btn.closest('tbody');
  btn.closest('tr').remove();
  renumberRewardRows(tbody);
  markDirty();
}


function renumberRewardRows(tbody){
  tbody.querySelectorAll('tr').forEach((tr,i)=>{tr.cells[0].textContent=i;});
}


function addRewardBlock(){
  if(!D)return;
  const blocks=collectRewardBlocksFromUI();
  blocks.push({cond:0,rewards:[{prob:100,item_id:1,qty:1}]});
  renderRewards(blocks);
  markDirty();
}


function removeRewardBlock(btn){
  btn.closest('[data-rblock]').remove();
  // Renumber block headers
  document.querySelectorAll('#rewards-body [data-rblock]').forEach((div,i)=>{
    div.dataset.rblock=i;
    div.querySelector('span').textContent=`Block ${i} — cond:`;
  });
  markDirty();
}


function collectRewardBlocksFromUI(){
  const blocks=[];
  document.querySelectorAll('#rewards-body [data-rblock]').forEach(div=>{
    const cond=parseInt(div.querySelector('.rb-cond').value.replace(/^0x/i,'')||'0',16)>>>0;
    const rewards=[];
    div.querySelectorAll('.rb-entries tr').forEach(tr=>{
      const prob=parseInt(tr.querySelector('.re-prob').value)||0;
      const item=readItemPick(tr)&0xFFFF;
      const qty =parseInt(tr.querySelector('.re-qty').value)||1;
      if(prob>0||item>0) rewards.push({prob,item_id:item,qty});
    });
    blocks.push({cond,rewards});
  });
  return blocks;
}


function updateTargetName(inp){
  const idx=inp.dataset.ti;
  const id=parseInt(inp.value.replace(/^0x/i,''),16);
  const el=document.getElementById('tname'+idx);
  if(el)el.textContent=MONSTERS[id]||'?';
}

function updateBossName(inp){
  const slot=inp.dataset.bslot;
  const id=parseInt(inp.value.replace(/^0x/i,''),16)>>>0;
  const el=document.getElementById('bname'+slot);
  if(el)el.textContent=id===0xFFFFFFFF?'— empty —':(MONSTERS[id]||'unknown');
}

function syncBossDetailName(inp){/* name col not shown but hook is here for future */}


// ── APPLY CHANGES ─────────────────────────────────────────────────────────────
// ── F2 buffer growth helpers ─────────────────────────────────────────────────
// firstFreeByte: high-water mark of meaningful data. We conservatively use the
// current buffer length (file end) as the allocation point and grow as needed.
function firstFreeByte(){ return D.length; }


// Ensure D has at least `need` bytes; grows (zero-filled) and re-points the
// module-level D. Returns D.
function f2EnsureLen(need){
  if(need<=D.length) return D;
  const nd=new Uint8Array(need);
  nd.set(D);
  D=nd;
  return D;
}


function applyChanges() {
  let d = D;
  const qi = ptrs.qi;

  // Quest info
  wu16(d,qi+0x18, clamp(parseInt(document.getElementById('f-qnum').value)||0,0,65535));
  wu8 (d,qi+0x1A, clamp(parseInt(document.getElementById('f-star').value)||1,1,10));
  wu8 (d,qi,    parseInt(document.getElementById('f-qtype').value)||4);
  wu8 (d,qi+1,  parseInt(document.getElementById('f-additional').value)||0);
  wu8 (d,qi+0x1C, parseInt(document.getElementById('f-mapid').value)||0);
  wu8 (d,qi+0x1D, parseInt(document.getElementById('f-speccond').value)||0);
  wu8 (d,qi+0x1E, clamp(parseInt(document.getElementById('f-targetcount').value)||0,0,2));
  wu32(d,qi+4,  clamp(parseInt(document.getElementById('f-fee').value)||0,0,99999));
  wu32(d,qi+8,  clamp(parseInt(document.getElementById('f-reward').value)||0,0,9999999));
  const penInput=parseInt(document.getElementById('f-penalty').value)||0;
  wu32(d,qi+12,penInput>>>0);
  wu32(d,0x2C,  clamp(parseInt(document.getElementById('f-gp').value)||0,0,99999));
  const mins=parseFloat(document.getElementById('f-time').value)||0;
  wu32(d,qi+0x10, Math.round(mins*1800));
  document.getElementById('time-raw').textContent='raw ticks: '+ru32(d,qi+0x10);
  wu8 (d,0x34,  parseInt(document.getElementById('f-carve').value)||0);
  wu8 (d,0x39,  parseInt(document.getElementById('f-difficulty').value)||0);
  wu8 (d,0x35,  parseInt(document.getElementById('f-arrive').value)||0);
  const bsh=clamp(parseInt(document.getElementById('f-bshape').value)||0,0,65535);
  wu16(d,0x28,bsh);
  document.getElementById('bshape-hex').textContent='0x'+bsh.toString(16).toUpperCase().padStart(4,'0');
  wu8(d,0x2A,  clamp(parseInt(document.getElementById('f-bsize').value)||0,0,255));
  wu8(d,0x2B,  clamp(parseInt(document.getElementById('f-bstr').value)||0,0,15));

  // Supply state
  wu8(d,0x36, parseInt(document.getElementById('f-ratmode').value)||0);
  wu8(d,0x37, parseInt(document.getElementById('f-ratcond').value.replace(/^0x/i,'')||'0',16));
  wu8(d,0x38, clamp(parseInt(document.getElementById('f-ratqty').value)||0,0,255));

  // questAreaChange — write all rows (max 2 in header, but respect however many are in UI)
  // Header has fixed slots at 0x3C and 0x44. Extra rows beyond 2 are ignored (no space in header).
  document.querySelectorAll('#tb-qac tr').forEach(tr=>{
    const i=parseInt(tr.querySelector('[data-f="cc"]').dataset.qac);
    if(i>1)return; // only 2 fixed slots in header
    const o=i===0?0x3C:0x44;
    wu32(d,o, parseInt(tr.querySelector('[data-f="cc"]').value)||0);
    const tid=parseInt(tr.querySelector('[data-f="tid"]').value)||0;
    wu16(d,o+4, tid);
    wu8(d,o+6, clamp(parseInt(tr.querySelector('[data-f="qty"]').value)||0,0,255));
    wu8(d,o+7, clamp(parseInt(tr.querySelector('[data-f="num"]').value)||0,0,255));
  });

  // Targets at qi+0x20 and qi+0x28
  document.querySelectorAll('#tb-targets tr').forEach(tr=>{
    const i=parseInt(tr.querySelector('[data-f="cond"]').dataset.ti);
    const base=qi+0x20+i*8;
    wu8 (d,base,   parseInt(tr.querySelector('[data-f="cond"]').value)||0);
    wu16(d,base+1, parseHD(tr.querySelector('[data-f="add"]').value));
    const pick=tr.querySelector('.monster-pick');
    const hexInp=tr.querySelector('.mcb-hex');
    wu16(d,base+4, pick?readMonsterPick(pick):(hexInp?parseInt(hexInp.value)||0:0));
    wu16(d,base+6, parseInt(tr.querySelector('[data-f="qty"]').value)||0);
  });
  // Carry damage override for target0
  if (document.getElementById('f-carrydmg').checked) {
    wu8(d,qi+0x20, 4); wu16(d,qi+0x21, 0x0180);
  }

  // Text fields — write with possible expansion
  const textFields = [
    ['tname','name',42],['tsuccess','success',84],['tfailure','failure',84],
    ['tmonster','monster',64],['tclient','client',42],['tdesc','desc',256]
  ];
  for(const [fid,key,maxB] of textFields){
    const val=document.getElementById('f-'+fid).value;
    const result=writeString(d, key, val);
    if(result){
      // File grew — replace D
      D=result; d=D;
    }
  }

  // Supply: items (u16 item + u16 qty), terminated with a SINGLE u16 0x0000.
  // The original supply array sits between ptrs.supply and the next section, so
  // writing more entries than originally present would overrun into that section
  // and corrupt the quest. Compute the original capacity; if the new list fits we
  // write in place, otherwise we relocate the whole array to EOF and repoint
  // SuppliesPTR (0x08) — the same safe append strategy used for monsters.
  {
    const supRows = Array.from(document.querySelectorAll('#tb-supply tr'));
    const newItems = supRows.map(tr => ({
      item: readItemPick(tr) & 0xFFFF,
      qty: parseInt(tr.querySelector('.s-qty').value)||1
    }));
    // Original entry count (terminated by item==0).
    let origCount = 0; { let o = ptrs.supply; while(o+4 <= d.length){ if(ru16(d,o)===0) break; origCount++; o+=4; } }
    const fits = newItems.length <= origCount;
    if (fits) {
      let off = ptrs.supply;
      newItems.forEach(it => { wu16(d,off,it.item); wu16(d,off+2,it.qty); off+=4; });
      wu16(d, off, 0); // 2-byte terminator only
    } else {
      // Relocate to EOF (4-aligned).
      while(D.length & 3){ f2EnsureLen(D.length+1); d=D; d[D.length-1]=0; }
      const base = D.length;
      f2EnsureLen(base + newItems.length*4 + 2); d=D;
      let off = base;
      newItems.forEach(it => { wu16(d,off,it.item); wu16(d,off+2,it.qty); off+=4; });
      wu16(d, off, 0); // terminator
      wu32(d, 0x08, base); // repoint SuppliesPTR
      ptrs.supply = base;
    }
  }

    // Boss write-back — species list + 60-byte appearance entries.
  //
  // The F2 boss block is the SAME structure as the MHFU large-monster table:
  //   table @ ptrs.boss : {Unkn1, Unkn2, idlPtr(=MixedBossPtr), datPtr(=AppearPtr)}
  //   species list @ idlPtr : u16 id + u16 0, ... , 0xFFFF terminator
  //   data entries @ datPtr : 60 bytes each, ... , 0xFFFF terminator
  //
  // To add/remove monsters without corrupting anything (this is what froze the
  // game before), we use the exact approach proven by the working 2→9 Black
  // Gravios .pat: keep the whole file intact and APPEND a fresh species list +
  // data array + table struct at EOF, then repoint the header boss pointer
  // (0x18). Nothing existing is overwritten, so the quest never breaks.

  const buf4=new ArrayBuffer(4); const dv4=new DataView(buf4);
  const wf32=(off,v)=>{ dv4.setFloat32(0,v,true); const u=new Uint8Array(buf4); for(let b=0;b<4;b++) d[off+b]=u[b]; };

  // --- Collect active appearance detail rows from the UI ---
  const detailRows = Array.from(document.querySelectorAll('#tb-bossdetail tr')).filter(tr=>{
    const pick=tr.querySelector('.monster-pick');
    const id = pick ? readMonsterPick(pick) : parseHD(tr.querySelector('[data-f="id"]')?.value||'0');
    return id && id!==0xFFFF;
  });

  // Gather the full field set for each active monster.
  const mons = detailRows.map(tr=>{
    const pick=tr.querySelector('.monster-pick');
    return {
      id:    pick ? readMonsterPick(pick) : parseHD(tr.querySelector('[data-f="id"]')?.value||'0'),
      state: parseHD(tr.querySelector('[data-f="state"]')?.value||'0'),
      num:   parseInt(tr.querySelector('[data-f="num"]')?.value)||0,
      exit_: parseInt(tr.querySelector('[data-f="exit"]')?.value)||0,
      x:     parseFloat(tr.querySelector('[data-f="x"]')?.value)||0,
      z:     parseFloat(tr.querySelector('[data-f="z"]')?.value)||0,
      y:     parseFloat(tr.querySelector('[data-f="y"]')?.value)||0,
      orient:parseInt(tr.querySelector('[data-f="orient"]')?.value)||0,
      seq:   parseInt(tr.querySelector('[data-f="seq"]')?.value)||0,
      size:  parseInt(tr.querySelector('[data-f="size"]')?.value)||0,
      hp:    parseInt(tr.querySelector('[data-f="hp"]')?.value)||0,
    };
  });

  // Preserve each existing entry's original 60 bytes (for unmodelled dynamic
  // data) by reading from the current datPtr; new rows start from a zeroed
  // template (or the first existing entry as a base).
  const origAppearPtr = ru32(d, ptrs.boss+12);
  const origRaws = [];
  if(origAppearPtr>0 && origAppearPtr<d.length){
    let o=origAppearPtr;
    for(let k=0;k<32 && o+60<=d.length;k++){ if(ru16(d,o)===0xFFFF)break; origRaws.push(Array.from(d.slice(o,o+60))); o+=60; }
  }
  const template = origRaws[0] ? origRaws[0].slice() : new Array(60).fill(0);

  // Skip the append entirely when no changes were made — repointing the boss
  // pointer on every export corrupts quests even when nothing was edited.
  if (!isDirty && origRaws.length > 0 && origAppearPtr > 0) {
    // Boss block is unchanged; leave ptrs.boss / bossAppearEntries as-is.
  } else {

  // Write entries and IDL in-place at their original locations. The boss table
  // stays where it is and the header pointer (0x18) is NOT changed. This
  // matches how the older working F2 editor operates. Only when the count
  // grows beyond the available space do we relocate to the file's content-end.
  const origIdlPtr = ru32(d, ptrs.boss+8);
  const origTable = ptrs.boss;

  // Helper to write one 60-byte entry at a given base offset
  function writeEntry(base, mn, i) {
    const src60 = origRaws[i] ? origRaws[i] : template;
    for(let b=0;b<60;b++) d[base+b]=src60[b];
    wu16(d,base+0,  mn.id);
    wu16(d,base+2,  mn.state);
    wu8 (d,base+4,  mn.num & 0xFF);
    wu8 (d,base+7,  mn.exit_);
    const orientU32 = (ru32(d,base+28)&0xFFFF0000) | (mn.orient&0xFFFF);
    wu32(d,base+28, orientU32);
    wf32(base+32, mn.x);
    wf32(base+36, mn.z);
    wf32(base+40, mn.y);
    wu16(d,base+44, mn.seq);
    wu16(d,base+48, mn.size);
    wu16(d,base+50, mn.hp);
  }

  // Always write entries starting at the original datPtr. When count grows,
  // entries overwrite the old IDL/table area and the new IDL+table are placed
  // right after — exactly how the working 3rd-party editor operates.
  // When count fits, IDL and table stay at their original locations.
  {
    const datBase = origAppearPtr > 0 ? origAppearPtr : origTable + 16;
    const entryEnd = datBase + mons.length * 60;
    const termEnd = entryEnd + 2; // FFFF data terminator

    // Can IDL stay at its original location? Only if entries+term don't reach it.
    const idlStaysInPlace = origIdlPtr > 0 && termEnd <= origIdlPtr;
    const newIdlBase = idlStaysInPlace ? origIdlPtr : ((termEnd + 3) & ~3);
    const idlEnd = newIdlBase + mons.length * 4 + 4; // entries + FFFF term
    const tblStaysInPlace = idlStaysInPlace && idlEnd <= origTable;
    const newTblBase = tblStaysInPlace ? origTable : ((idlEnd + 3) & ~3);

    // Ensure file is large enough (table is 32 bytes: 16 fields + 16 zero padding)
    f2EnsureLen(newTblBase + 32); d=D;

    // Write data entries at datBase
    mons.forEach((mn,i) => writeEntry(datBase + i*60, mn, i));
    wu16(d, entryEnd, 0xFFFF); // data terminator

    // Fill gap between data terminator and IDL with 0xFF (preserve padding style)
    for(let b = termEnd; b < newIdlBase; b++) d[b] = 0;

    // Write IDL
    mons.forEach((mn,i) => { wu16(d, newIdlBase+i*4, mn.id); wu16(d, newIdlBase+i*4+2, 0); });
    // IDL terminator: full u32 0xFFFFFFFF (F2 game uses u32 reads)
    wu32(d, newIdlBase + mons.length*4, 0xFFFFFFFF);

    // Fill gap between IDL end and table with 0xFF
    for(let b = newIdlBase + mons.length*4 + 4; b < newTblBase; b++) d[b] = 0xFF;

    // Write/update table (32 bytes: 16 fields + 16 zero padding)
    wu32(d, newTblBase+0, ru32(d, ptrs.boss+0) || 1);
    wu32(d, newTblBase+4, ru32(d, ptrs.boss+4) || 0);
    wu32(d, newTblBase+8, newIdlBase);
    wu32(d, newTblBase+12, datBase);
    for(let b = newTblBase+16; b < newTblBase+32; b++) d[b] = 0;

    // Only repoint header if table moved
    if (newTblBase !== origTable) {
      wu32(d, 0x18, newTblBase);
      ptrs.boss = newTblBase;
    }

    bossAppearEntries=[];
    for(let s=datBase; s<datBase+mons.length*60; s+=60)
      bossAppearEntries.push({off:s, raw:Array.from(d.slice(s,s+60))});
  }

  } // end isDirty / new-data block

  // Small monster write-back — iterate all configs/areas/entries from smData
  // For new entries (off===-1), allocate space at the end of used file data.
  const smBuf4=new ArrayBuffer(4);const smDv=new DataView(smBuf4);

  smData.forEach((cfg,ci)=>{
    if(cfg.sharedWith!==undefined||!cfg.areas)return;
    cfg.areas.forEach((area,ai)=>{
      // Write back areaID from dropdown
      const aidSel=document.querySelector(`.sm-area-id[data-cfg="${ci}"][data-area="${ai}"]`);
      if(aidSel && area.areaIDOff>=0 && area.areaIDOff<d.length-4){
        wu32(d, area.areaIDOff, parseInt(aidSel.value)||0);
      }

      const entBodySel=document.querySelector(`tbody[data-cfg="${ci}"][data-area="${ai}"]`);
      if(!entBodySel)return;
      const entRows=Array.from(entBodySel.querySelectorAll('tr'));

      // If this config was split from a shared one, allocate a fresh config
      // block (areaID + skip + mixedPtr + appearPtr = 16 bytes) at EOF and point
      // the MonsterInformation slot (questarea + ci*4) at it.
      if(area.splitFromShare && entRows.length>0){
        const cfgBlock=D.length;
        f2EnsureLen(cfgBlock+32); d=D; // 16 for area + 16 terminator
        const aidInput=document.querySelector(`.sm-area-id[data-cfg="${ci}"][data-area="0"]`);
        const aid=aidInput?(parseInt(aidInput.value)||1):1;
        wu32(d,cfgBlock+0,aid); wu32(d,cfgBlock+4,0);
        area.mixedOff=cfgBlock+8; area.appearOff=cfgBlock+12;
        wu32(d,cfgBlock+16,0); // next area terminator (areaID=0)
        wu32(d,ptrs.questarea+ci*4,cfgBlock); // re-point this config
        area.splitFromShare=false;
      }
      // Allocate free space (at EOF) for new areas that have no pointers yet
      if(area.appearPtr===0&&entRows.length>0){
        let slotsOff=area.mixedPtr;
        if(slotsOff===0){
          slotsOff=D.length;            // append slots at end of file
          f2EnsureLen(slotsOff+16); d=D;
          area.mixedPtr=slotsOff;
          for(let s=0;s<4;s++) area.slots.push({off:slotsOff+s*4,id:0xFFFFFFFF});
          if(area.mixedOff>=0&&area.mixedOff<d.length) wu32(d,area.mixedOff,slotsOff);
        }
        const appearOff=slotsOff+16; // 4 slots * 4 bytes = 16
        // Ensure room for the entries + 2-byte terminator
        f2EnsureLen(appearOff + entRows.length*60 + 2); d=D;
        area.appearPtr=appearOff;
        area.endMarkOff=appearOff+entRows.length*60;
        if(area.appearOff>=0&&area.appearOff<d.length) wu32(d,area.appearOff,appearOff);
        entRows.forEach((_,ei)=>{
          if(ei<area.entries.length) area.entries[ei].off=appearOff+ei*60;
          else area.entries.push({off:appearOff+ei*60,raw:new Array(60).fill(0)});
        });
      }

      // EXISTING area that GREW beyond its original entry capacity: writing the
      // extra 60-byte entries in place would overrun into the next area/section
      // and corrupt the quest (this is what crashed added-small-monster quests).
      // Relocate this area's whole entry array to EOF and repoint appearPtr.
      if(area.appearPtr>0 && entRows.length>area.origEntryCap){
        while(D.length & 3){ f2EnsureLen(D.length+1); d=D; d[D.length-1]=0; }
        const newAppear=D.length;
        f2EnsureLen(newAppear + entRows.length*60 + 2); d=D;
        // copy existing entries' raw bytes, extend with zeroed templates
        const tmpl = (area.entries[0]&&area.entries[0].raw)?area.entries[0].raw:new Array(60).fill(0);
        entRows.forEach((_,ei)=>{
          const src = (area.entries[ei]&&area.entries[ei].raw)?area.entries[ei].raw:tmpl;
          for(let b=0;b<60;b++) d[newAppear+ei*60+b]=src[b];
          if(ei<area.entries.length) area.entries[ei].off=newAppear+ei*60;
          else area.entries.push({off:newAppear+ei*60,raw:src.slice()});
        });
        area.appearPtr=newAppear;
        area.endMarkOff=newAppear+entRows.length*60;
        if(area.appearOff>=0&&area.appearOff<d.length) wu32(d,area.appearOff,newAppear);
      }

      // Auto-derive slot IDs from spawn entry monsters (unique, up to 4)
      {
        const entBodyForSlots=document.querySelector(`tbody[data-cfg="${ci}"][data-area="${ai}"]`);
        const seenIds=[];
        if(entBodyForSlots){
          entBodyForSlots.querySelectorAll('tr').forEach(tr=>{
            const pick=tr.querySelector('.monster-pick');
            const id=(pick?readMonsterPick(pick)>>>0:0);
            if(id && id!==0xFFFFFFFF && !seenIds.includes(id)) seenIds.push(id);
          });
        }
        // Fill slots: write unique IDs, pad rest with 0xFFFFFFFF
        if(area.slots.length){
          area.slots.forEach((s,si)=>{
            wu32(d, s.off, si < seenIds.length ? seenIds[si] : 0xFFFFFFFF);
          });
        }
      }

      // Write appearance entries. Start from each entry's preserved original 60
      // bytes so unmodelled fields (state, attributes, dynamic data) survive, and
      // only overwrite the fields the UI actually edits.
      entRows.forEach((tr,ei)=>{
        const entry=area.entries[ei];
        if(!entry||entry.off<0)return;
        const soff=entry.off;
        // Restore the original 60 bytes first (for relocated/existing entries the
        // raw was carried along; for brand-new rows it's a zeroed template).
        if(entry.raw && entry.raw.length===60){
          for(let b=0;b<60;b++) d[soff+b]=entry.raw[b];
        }
        const smPick=tr.querySelector('.monster-pick');
        const smid =smPick?readMonsterPick(smPick):parseHD(tr.querySelector('[data-f="id"]').value);
        const qty  =parseInt(tr.querySelector('[data-f="qty"]').value)||0;
        const xv   =parseFloat(tr.querySelector('[data-f="x"]').value)||0;
        const zv   =parseFloat(tr.querySelector('[data-f="z"]').value)||0;
        const yv   =parseFloat(tr.querySelector('[data-f="y"]').value)||0;
        const orient=degToBam(parseInt(tr.querySelector('[data-f="orient"]').value)||0);
        const seq  =parseInt(tr.querySelector('[data-f="seq"]').value)||0;
        const size =parseInt(tr.querySelector('[data-f="size"]').value)||0;
        const hp   =parseInt(tr.querySelector('[data-f="hp"]').value)||0;
        wu16(d,soff,   smid);
        // +2 state, +4 qty, +6 act: preserve state/act from raw, set qty only.
        wu16(d,soff+4, qty);
        // soff+8..27 = FSkip(20) — preserved from raw
        wu32(d,soff+28,orient);
        smDv.setFloat32(0,xv,true);for(let b=0;b<4;b++) d[soff+32+b]=new Uint8Array(smBuf4)[b];
        smDv.setFloat32(0,zv,true);for(let b=0;b<4;b++) d[soff+36+b]=new Uint8Array(smBuf4)[b];
        smDv.setFloat32(0,yv,true);for(let b=0;b<4;b++) d[soff+40+b]=new Uint8Array(smBuf4)[b];
        wu16(d,soff+44,seq);
        wu16(d,soff+48,size);
        wu16(d,soff+50,hp);
      });
      // Write 0xFFFF end marker after last entry
      if(area.endMarkOff>0) wu16(d,area.endMarkOff,0xFFFF);
    });
  });

  // Training Data Ptr at qi+0x30
  const tpRaw = document.getElementById('f-trainingptr').value.replace(/^0x/i,'');
  if(tpRaw) wu32(d, ptrs.qi+0x30, parseInt(tpRaw,16)>>>0);

  // Rewards — write blocks back. Each block's entries are terminated by 0xFFFF.
  // If a block's edited entry count exceeds what fits before the next block's
  // original entry pointer, writing in place would overrun and corrupt the next
  // block. So for each block: if it fits in the original slot, write in place;
  // otherwise relocate that block's entry array to EOF and repoint it.
  {
    const uiBlocks = collectRewardBlocksFromUI();
    let blockOff = ptrs.reward;
    uiBlocks.forEach((blk) => {
      const origBptr = ru32(d, blockOff + 4);
      if (!origBptr || origBptr >= d.length || origBptr === 0xFFFFFFFF) { blockOff += 8; return; }
      // Original entry capacity for this block (count until 0xFFFF).
      let origEntries = 0; { let o = origBptr; while(o+6 <= d.length){ if(ru16(d,o)===0xFFFF) break; origEntries++; o+=6; } }
      wu32(d, blockOff, blk.cond >>> 0);
      const fits = blk.rewards.length <= origEntries;
      let eoff;
      if (fits) {
        eoff = origBptr;
      } else {
        while(D.length & 3){ f2EnsureLen(D.length+1); d=D; d[D.length-1]=0; }
        eoff = D.length;
        f2EnsureLen(eoff + blk.rewards.length*6 + 2); d=D;
        wu32(d, blockOff + 4, eoff); // repoint this block's items pointer
      }
      blk.rewards.forEach(r => {
        wu16(d, eoff,     clamp(r.prob, 0, 100));
        wu16(d, eoff + 2, r.item_id & 0xFFFF);
        wu16(d, eoff + 4, clamp(r.qty, 1, 99));
        eoff += 6;
      });
      wu16(d, eoff, 0xFFFF);
      blockOff += 8;
    });
  }

  // Gathering — commit UI and write back in-place
  commitF2Gather();
  const gbuf4=new ArrayBuffer(4); const gdv=new DataView(gbuf4);
  const gwf=(off,v)=>{ gdv.setFloat32(0,v,true); for(let b=0;b<4;b++) d[off+b]=new Uint8Array(gbuf4)[b]; };
  gatherData.areas.forEach(area=>{
    area.points.forEach(pt=>{
      if(!pt.off) return;
      gwf(pt.off, pt.x); gwf(pt.off+4, pt.z); gwf(pt.off+8, pt.y);
      gwf(pt.off+12, pt.range||0);
      wu16(d, pt.off+0x10, pt.code);
      wu16(d, pt.off+0x12, pt.freqUpper);
      wu16(d, pt.off+0x14, pt.gatherType||0);
      wu16(d, pt.off+0x16, pt.freqLower||0);
    });
  });
  gatherData.pointDataMaterials.forEach(mats=>{
    mats.forEach(m=>{
      if(!m.off) return;
      wu16(d, m.off, m.prob);
      wu16(d, m.off+2, m.item);
    });
  });

  // Training data
  commitF2Training();
  { const tp = parseInt((document.getElementById('f-trainingptr').value||'').replace(/^0x/i,''),16)||0;
    if (tp && f2TrainingSets.length) patchF2TrainingInPlace(d, tp, f2TrainingSets); }

  // Fixed Information
  const fixedVal=document.getElementById('f-fixed-val').value.replace(/^0x/i,'');
  const fixedUnk=document.getElementById('f-fixed-unk').value.replace(/^0x/i,'');
  if(fixedVal) wu32(d, ptrs.fixed, parseInt(fixedVal,16)>>>0);
  if(fixedUnk) wu16(d, ptrs.fixed+8, parseInt(fixedUnk,16));

  applyEUTexts(d, 'mhf2');
  renderHex(D);
}


// ── F2 Training Data ─────────────────────────────────────────────────────────
function parseF2Training(d, ptr) {
  if (!ptr || ptr < 128 || ptr + 771 > d.length) return [];
  const sets = [];
  const playerCount = d[ptr];
  let o = ptr + 1;
  for (let s = 0; s < 5; s++) {
    const set = { players: playerCount, pointMult: ru16(d, o), weapon: null, armors: [], items: [] };
    o += 2;
    // Weapon: 11 bytes (type u8, id u16, grade u16, deco×3 u16)
    set.weapon = { type: d[o], id: ru16(d,o+1), grade: ru16(d,o+3), deco1: ru16(d,o+5), deco2: ru16(d,o+7), deco3: ru16(d,o+9) };
    o += 11;
    // 5 armor pieces, each 12 bytes (1 skip + 11 data)
    for (let a = 0; a < 5; a++) {
      const skip = d[o]; o++;
      set.armors.push({ skip: skip, type: d[o], id: ru16(d,o+1), grade: ru16(d,o+3), deco1: ru16(d,o+5), deco2: ru16(d,o+7), deco3: ru16(d,o+9) });
      o += 11;
    }
    // 20 supply items
    for (let i = 0; i < 20; i++) {
      set.items.push({ item: ru16(d,o), qty: ru16(d,o+2) });
      o += 4;
    }
    o += 1; // trailing pad
    sets.push(set);
  }
  return sets;
}

function f2EquipOpts(list, selectedId) {
  let h='';
  list.forEach((name,i)=>{
    if(name==='<NEW SECTION>'||name==='dummy') return;
    h+=`<option value="${i}"${i===selectedId?' selected':''}>${i} – ${name}</option>`;
  });
  if(!list[selectedId]||list[selectedId]==='dummy')
    h+=`<option value="${selectedId}" selected>${selectedId} – ???</option>`;
  return h;
}
function f2ItemOpts(selectedId) {
  let h='';
  F2_ITEM_LIST.forEach(([id,name])=>{
    h+=`<option value="${id}"${id===selectedId?' selected':''}>${id} – ${name}</option>`;
  });
  return h;
}

function renderF2Training() {
  const wrap = document.getElementById('f2-train-body');
  if (!wrap) return;
  wrap.innerHTML = '';
  if (!f2TrainingSets.length) {
    wrap.innerHTML = '<div class="note">No training data (Training Data Ptr is 0).</div>';
    return;
  }
  const pc = f2TrainingSets[0].players || 0;
  wrap.insertAdjacentHTML('beforeend', '<div class="f" style="margin-bottom:8px"><label>Player Count</label><input type="number" id="f2-train-players" value="'+pc+'" min="0" max="4" style="width:50px"></div>');

  const E = F2_EQUIP;
  const armorKeys = ['helm','mail','vambraces','belt','pants'];
  const armorLabels = ['Head','Chest','Arms','Waist','Legs'];

  f2TrainingSets.forEach((set, si) => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.marginBottom = '12px';
    let h = '<div class="card-hdr">Set '+(si+1)+' — Point Mult: <input type="number" class="f2t-points" data-si="'+si+'" value="'+set.pointMult+'" min="0" max="65535" style="width:70px"></div>';
    h += '<div class="card-body">';

    // Weapon
    const w = set.weapon;
    h += '<div style="font-size:11px;color:var(--accent);margin-bottom:4px;font-weight:bold">Weapon</div>';
    h += '<table style="font-size:12px"><tbody><tr>';
    h += '<td><select class="f2t-wid" data-si="'+si+'" style="max-width:220px">'+f2EquipOpts(E.weapons, w.id)+'</select></td>';
    h += '<td><label style="font-size:10px">Grade</label><input type="number" class="f2t-wgrade" data-si="'+si+'" value="'+w.grade+'" min="0" max="65535" style="width:60px"></td>';
    h += '<td><label style="font-size:10px">D1</label><select class="f2t-wd1" data-si="'+si+'" style="max-width:180px">'+f2ItemOpts(w.deco1)+'</select></td>';
    h += '<td><label style="font-size:10px">D2</label><select class="f2t-wd2" data-si="'+si+'" style="max-width:180px">'+f2ItemOpts(w.deco2)+'</select></td>';
    h += '<td><label style="font-size:10px">D3</label><select class="f2t-wd3" data-si="'+si+'" style="max-width:180px">'+f2ItemOpts(w.deco3)+'</select></td>';
    h += '</tr></tbody></table>';

    // Armor
    h += '<div style="font-size:11px;color:var(--accent);margin:8px 0 4px;font-weight:bold">Armor</div>';
    h += '<table style="font-size:12px"><thead><tr><th>Slot</th><th>Equip</th><th>Grade</th><th>Deco 1</th><th>Deco 2</th><th>Deco 3</th></tr></thead><tbody>';
    set.armors.forEach((ar, ai) => {
      h += '<tr><td style="color:var(--muted)">'+armorLabels[ai]+'</td>';
      h += '<td><select class="f2t-aid" data-si="'+si+'" data-ai="'+ai+'" style="max-width:220px">'+f2EquipOpts(E[armorKeys[ai]], ar.id)+'</select></td>';
      h += '<td><input type="number" class="f2t-agrade" data-si="'+si+'" data-ai="'+ai+'" value="'+ar.grade+'" min="0" max="65535" style="width:60px"></td>';
      h += '<td><select class="f2t-ad1" data-si="'+si+'" data-ai="'+ai+'" style="max-width:170px">'+f2ItemOpts(ar.deco1)+'</select></td>';
      h += '<td><select class="f2t-ad2" data-si="'+si+'" data-ai="'+ai+'" style="max-width:170px">'+f2ItemOpts(ar.deco2)+'</select></td>';
      h += '<td><select class="f2t-ad3" data-si="'+si+'" data-ai="'+ai+'" style="max-width:170px">'+f2ItemOpts(ar.deco3)+'</select></td></tr>';
    });
    h += '</tbody></table>';

    // Supply items — editable table
    h += '<div style="font-size:11px;color:var(--accent);margin:8px 0 4px;font-weight:bold">Supply Items</div>';
    h += '<table style="font-size:12px"><thead><tr><th>#</th><th>Item</th><th>Qty</th></tr></thead><tbody>';
    set.items.forEach((it, ii) => {
      h += '<tr><td style="color:var(--muted)">'+ii+'</td>';
      h += '<td><select class="f2t-sitem" data-si="'+si+'" data-ii="'+ii+'" style="max-width:220px">'+f2ItemOpts(it.item)+'</select></td>';
      h += '<td><input type="number" class="f2t-sqty" data-si="'+si+'" data-ii="'+ii+'" value="'+it.qty+'" min="0" max="65535" style="width:60px"></td></tr>';
    });
    h += '</tbody></table>';

    h += '</div>';
    card.innerHTML = h;
    wrap.appendChild(card);
  });
}

function commitF2Training() {
  if (!f2TrainingSets.length) return;
  const pc = document.getElementById('f2-train-players');
  if (pc) { const v = parseInt(pc.value)||0; f2TrainingSets.forEach(s => s.players = v); }
  f2TrainingSets.forEach((set, si) => {
    const pt = document.querySelector('.f2t-points[data-si="'+si+'"]');
    if (pt) set.pointMult = parseInt(pt.value)||0;
    const sel = (cls, extra) => document.querySelector('.'+cls+'[data-si="'+si+'"]'+(extra||''));
    const wi = sel('f2t-wid'); if(wi) set.weapon.id = parseInt(wi.value)||0;
    const wg = sel('f2t-wgrade'); if(wg) set.weapon.grade = parseInt(wg.value)||0;
    const wd1 = sel('f2t-wd1'); if(wd1) set.weapon.deco1 = parseInt(wd1.value)||0;
    const wd2 = sel('f2t-wd2'); if(wd2) set.weapon.deco2 = parseInt(wd2.value)||0;
    const wd3 = sel('f2t-wd3'); if(wd3) set.weapon.deco3 = parseInt(wd3.value)||0;
    set.armors.forEach((ar, ai) => {
      const asel = (cls) => document.querySelector('.'+cls+'[data-si="'+si+'"][data-ai="'+ai+'"]');
      const id = asel('f2t-aid'); if(id) ar.id = parseInt(id.value)||0;
      const g = asel('f2t-agrade'); if(g) ar.grade = parseInt(g.value)||0;
      const d1 = asel('f2t-ad1'); if(d1) ar.deco1 = parseInt(d1.value)||0;
      const d2 = asel('f2t-ad2'); if(d2) ar.deco2 = parseInt(d2.value)||0;
      const d3 = asel('f2t-ad3'); if(d3) ar.deco3 = parseInt(d3.value)||0;
    });
    set.items.forEach((it, ii) => {
      const isel = document.querySelector('.f2t-sitem[data-si="'+si+'"][data-ii="'+ii+'"]');
      if(isel) it.item = parseInt(isel.value)||0;
      const qsel = document.querySelector('.f2t-sqty[data-si="'+si+'"][data-ii="'+ii+'"]');
      if(qsel) it.qty = parseInt(qsel.value)||0;
    });
  });
}

function patchF2TrainingInPlace(d, ptr, sets) {
  if (!sets.length || !ptr || ptr < 128) return;
  const w16 = (o,v)=>{ d[o]=v&0xFF; d[o+1]=(v>>8)&0xFF; };
  d[ptr] = sets[0].players & 0xFF;
  let o = ptr + 1;
  sets.forEach(set => {
    w16(o, set.pointMult); o += 2;
    d[o] = set.weapon.type & 0xFF;
    w16(o+1, set.weapon.id); w16(o+3, set.weapon.grade);
    w16(o+5, set.weapon.deco1); w16(o+7, set.weapon.deco2); w16(o+9, set.weapon.deco3);
    o += 11;
    set.armors.forEach(ar => {
      d[o] = ar.skip & 0xFF; o++;
      d[o] = ar.type & 0xFF;
      w16(o+1, ar.id); w16(o+3, ar.grade);
      w16(o+5, ar.deco1); w16(o+7, ar.deco2); w16(o+9, ar.deco3);
      o += 11;
    });
    set.items.forEach(it => { w16(o, it.item); w16(o+2, it.qty); o += 4; });
    o += 1; // pad
  });
}

// ── MHF2 blank quest (based on 9311.bin Giadrome template) ───────────────────
const F2_QUEST_TPL='TUhQMkwAAABEAgAAnAkAANQBAADMEQAAZBIAAEgJAACsCQAACAUAAGQAAwR4AAAADwAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgQAAABkAAAAsAQAAJABAACQXwEAuAEAAAEAAQELAAEAAQAAAE0AAQAAAAAAAAAAAAAAAABBIFRydWUgRm9lIC0gVGhlIEdpYWRyb21lIQAASHVudCB0aGUgR2lhZHJvbWUAAABSZXdhcmQgWmVybwpUaW1lIE92ZXIAAABXaXRoaW4gYSBncm91cCBvZiB0aGUgc2x5CmNhcm5pdm9yb3VzIEdpYXByZXksIHRoZXJlCmlzIGEgbGVhZGVyLiBUaGV5IGNhbGwgaXQKdGhlIEdpYWRyb21lLiBJIG5lZWQgYQpodW50ZXIncyBzdHJlbmd0aCB0byBzaG93CnRoYXQgcGFjayBvZiBiZWFzdHMgYW5kCnRoZWlyIGxlYWRlciB3aG8ncyBib3NzIQAAAABHaWFkcm9tZQpHaWFwcmV5AAAAAFNwaXJpdGVkIEJveQAAAACAAAAAnAAAALAAAADIAAAAfAEAAJABAACgAQAAoAEAAKABAACgAQAAoAEAAKABAACgAQAAGwAAAAAAAAADAAAAAAAAAP//AAAAAAAALQAAAAAAAAAeAAAAAAAAAP7/AAAAAAAACQCWAAAAAAAKAAAAAAAAAB8AAAAAAAAAGgAAAAAAAAAlAAAAAAAAAAkAlgAAAAAACgAAAAAAAAAfAAAAAAAAAIECAQCBAgEAgQIBAIECAQCFAgIAhQICAIICAwCCAgMAggIDAIICAwCDAgIAgwICAIMCAgCDAgIAPgABAD4AAQAWAAEAFgABABYAAQAWAAEAXgABAGQACgByAAUAdgAIAIEADwAXAAIAFwACAEgAAwB6AAQAhgIBAAAAAQAUAMEALQDDAA8A0QAFAMwADwCVAP//AAAUAMEALQDDAA8A0QAFAMwADwCVAP//AABBAJ0ACgDoABkAqQD//wAASwDRABkAwQD//wAAMgCpAB4AtAAUAFsA//8AAEYAXAAeAA4B//8AACMAngAZAKkAFACkABQAWwD//wAAFADBAC0AwwAPANEABQDMAA8AlQD//wAAHgCVAA0A0QAoAMIABQDMAAwAxQD//wAARgBcAB4ADgH//wAAHgCQAkAACwEGAAwB//8AAFAArAAKAA4BCgCuAP//AAAKAIQAHADuABQA7AAWAPAABQD1AA8A7QD//wAACgCVACgAwwAeAMIAFADFAP//AAA3AKIAHgBbAA8AhQD//wAAQQCdAAoA6AAZAKkA//8AAEYAPgAZAIMCBQBKAP//AABGAD4AGQA4AAUAGAD//wAALQCjAB4AnwAZAKkA//8AAB4AwQA8AJUACgAAAP//AAAPACMBPACVABkAwQD//wAABQCjAEsAqQAUAJ4A//8AAC0AowAeAJ8AGQCpAP//AAAPACMBFADCAAUAwQAUANEADwDFABkAlAL//wAAPgCfACEApAAFAFsA//8AAA8A7wAbAPAACgCGAAgA6AAKAPUAHgDtAP//AAAjAIcAPACFAAUAAAD//wAAQgCfAB4AWwAEAAAA//8AAD4AnwAhAKQABQBbAP//AAAPAMEAPACVABkAAAD//wAARgC2AAUAWwAZAKkA//8AAAoA0QAZAMMAKADCAAoAzAAPAJUA//8AAMACAADYAgAA8AIAAAADAAAMAwAAHAMAACgDAAA8AwAAVAMAAGwDAAB4AwAAiAMAAJgDAAC0AwAAyAMAANgDAADoAwAA+AMAAAgEAAAYBAAAKAQAADgEAABIBAAAWAQAAHQEAACEBAAAoAQAALAEAADABAAA0AQAAOAEAADwBAAAALB+RgCAE0QAAMNFAABIQwAABgADAAIAADgVRgAAFkMA8DlGAACWQwEABgADAAMAABAkRgAAFkMAIDJGAACWQwIABgAAAAIAADg4RgCACUQAsNFFAACWQwMABQAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAJAwRgBAtUQAQLVFAACWQwQABgAAAAIAANAdRgBAnEQAoPBFAACWQwUACAAAAAUAABAkRgCAu0QAAJZFAACWQwYABgAAAAMAALAzRgBAg0QAABZGAACWQwcABgADAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAIgQRgAAr0QAQE5GAABIQwgACAADAAQAAPA5RgAAAAAAcBRGAAD6QwkACAAAAAMAAAD6RQAAlkMAsDNGAABIQwoACgAAAAgAAAAWRgAAAAAAUENGAACWQwsACgAAAAUAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAOArRgAASMIA8FJGAADIQwwACgAEAAQAAIgQRgBAHEUAECRGAABIQw0ABQADAAMAAKDXRQBAtUQAkBdGAABIQw4ABQAAAAMAAMgvRgBAtUQAECRGAABIQw8ABgAAAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAOwpRgAAAAAAkGJGAABIQxAABAAAAAEAAHAtRgAAAAAAwFpGAABIQxEABAAAAAEAAPgORgAAAAAAgCJGAABIQxIABgAAAAIAAJBJRgAAAAAAABZGAABIQxMABQAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAGgIRgCAnkMAgAlGAABIQxQABAAAAAEAALxDRgAAlkMAiMhFAABIQxUACgAAAAYAABQwRgCAnEMAyA9GAABIQxYABgAAAAMAANAhRgBgGkUAePtFAABIQxcABQADAAQAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAALAzRgAAyEEAEAtGAABIQxgABgAAAAMAAEBnRgAAAAAAQBxGAAD6QxkACgAEAAQAAHiCRgAASEMAIABGAABIQxoACAAAAAQAAAiERgAASEIAEFZGAACWQxsABgAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAMDaRQAAAAAAILJFAABIQxwABgAAAAQAAGAGRgAAAAAAIEtGAABIQx0ABQAAAAIAAIC7RQCAokMAoAxGAABIQx4ABgAAAAIAANjMRQAAAAAAeMNFAABIQx8ABQADAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgFAAAABgAAeAYAAPAGAABoBwAA4AcAAFgIAADQCAAAAAAAAAEAPAEBABkAOQEBAAoAOwEBABkABQEBAAoABQECABkANwEBAAQA1AABAP//AIAAAHAJAAD//wAAAAAAAP//AAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////yMAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAACF+QAAAKQrRgCAu0QAqKpFAAAAAAAAAAAAAAAAAAAAACMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAwAAAHQoRgCAu0QAiKJFAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAABS4gAAAMAiRgCAu0QAsKBFAAAAAAAAAAAAAAAAAAAAABMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABonAAAALQGRgAARkMAeE9GAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAATAAAA//////////8jAAAAAwAAAAACAAAAAAAAAAAAAAAAAAAAAAAA6roAAAAsH0YAAAAAAFQXRgAAAAAAAAAAAAAAAAAAAAAjAAAAAgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAANJIAAAC0EEYAAAAAABArRgAAAAAAAAAAAAAAAAAAAAAjAAAAAwAAAAACAAAAAAAAAAAAAAAAAAAAAAAAdGwAAADYMkYAAAAAAIQfRgAAAAAAAAAAAAAAAAAAAAATAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMp8AAACgDkYAEAhFAKxTRgAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAAEwAAAP//////////RQAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAFSoAAAA4M9FAAAAAACwTEYAAAAAAAAAAAAAAAAAAAAARQAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAF8VAAAA6N9FAAAAAACYPEYAAAAAAAAAAAAAAAAAAAAARQAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAGR3AAAA+PlFAAAAAAAwREYAAAAAAAAAAAAAAAAAAAAARQAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAACEgAAAA/AdGAAAAAAD8TUYAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAFeiAAAAuDZGAMBaRQDQ8UUAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARQAAAAUAAAD//////////yMAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAADTXQAAAMASRgAAAAAA4DFGAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD05AAAAEAqRgAAAAAAeBhGAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAD//////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////RgADAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAK2eAAAAEHlGAAAAAACgJEYAAAAAAAAAAAAAAAAAAAAARgACAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAANqIAAAAnH1GAAAAAABYM0YAAAAAAAAAAAAAAAAAAAAARgAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAJX5AAAAcoRGAAAAAABkH0YAAAAAAAAAAAAAAAAAAAAAEwAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIPvAAAAnHxGAMASRACAyUUAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARgAAABMAAAD//////////yMAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAsMAAAAAwBRgAAAAAAEPhFAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAApOwAAAMjNRQAAAAAAAN5FAAAAAAAAAAAAAAAAAAAAACMAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAABNFgAAAPgIRgAAAAAA5B1GAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAD///////////////9cAAAAAAAAAPAJAAC0CQAAXQAAAAAAAAAsCwAAAAoAAF4AAAAAAAAAaAwAADwLAABfAAAAAAAAAOANAAB4DAAAYAAAAAAAAACkDgAA8A0AAGEAAAAAAAAA8A4AALQOAABjAAAAAAAAACwQAAAADwAAZAAAAAAAAAAsEQAAPBAAAAAAAAAhEQAAAAAAAAAAAAA8EQAAPBEAADwRAAAAAAAATQAAAAEAAGEAAAAAAAAAAAAAAAAAAAAAAAAAAI3kAAAAiBxGAACJQwAoN0YAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQAAAP///////////////wEAAAAAAAAAVBIAANwRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
function buildNewF2Quest() {
  const raw = Uint8Array.from(atob(F2_QUEST_TPL), c => c.charCodeAt(0));
  let end = raw.length;
  while (end > 0 && raw[end - 1] === 0) end--;
  end = (end + 3) & ~3;
  const d = raw.slice(0, end);
  const qi = d[4] | d[5]<<8 | d[6]<<16 | d[7]<<24;
  if (qi + 0x19 < d.length) {
    d[qi+0x18] = 60001 & 0xFF; d[qi+0x19] = (60001>>8) & 0xFF;
  }
  return d;
}

function importF2FromJSON(obj){
  D = buildNewF2Quest(); fname = obj.file || 'imported.bin'; PAT_PREFIX = null;
  parseFile(D); buildStageSelect(); populateUI(D);
  const qi = obj.questInfo || {};
  const s = obj.strings || {};
  const gv = id => document.getElementById(id);
  if(qi.type!==undefined && gv('f-qtype')) gv('f-qtype').value = qi.type;
  if(qi.questNumber!==undefined && gv('f-qnum')) gv('f-qnum').value = qi.questNumber;
  if(qi.stars!==undefined && gv('f-star')) gv('f-star').value = qi.stars;
  if(qi.map!==undefined && gv('f-mapid')) gv('f-mapid').value = qi.map;
  if(qi.fee!==undefined && gv('f-fee')) gv('f-fee').value = qi.fee;
  if(qi.reward!==undefined && gv('f-reward')) gv('f-reward').value = qi.reward;
  if(qi.penalty!==undefined && gv('f-penalty')) gv('f-penalty').value = qi.penalty;
  if(qi.timeTicks!==undefined && gv('f-time')) gv('f-time').value = qi.timeTicks;
  if(qi.specialCond!==undefined && gv('f-speccond')) gv('f-speccond').value = qi.specialCond;
  if(s.name!==undefined && gv('f-tname')) gv('f-tname').value = s.name;
  if(s.success!==undefined && gv('f-tsuccess')) gv('f-tsuccess').value = s.success;
  if(s.failure!==undefined && gv('f-tfailure')) gv('f-tfailure').value = s.failure;
  if(s.description!==undefined && gv('f-tdesc')) gv('f-tdesc').value = s.description;
  if(s.monster!==undefined && gv('f-tmonster')) gv('f-tmonster').value = s.monster;
  if(s.client!==undefined && gv('f-tclient')) gv('f-tclient').value = s.client;
  // Supply
  if(obj.supply && obj.supply.length){
    const tb = document.getElementById('tb-supply');
    if(tb) { tb.innerHTML = ''; obj.supply.forEach((s,i)=> appendSupplyRow(tb, i, s.itemId!==undefined?s.itemId:(s.item||0), s.qty||1)); renumberTable(tb); }
  }
  // Rewards
  if(obj.rewards && obj.rewards.length){
    const rw = document.getElementById('reward-blocks');
    if(rw){ rw.innerHTML = '';
      obj.rewards.forEach(b=>{
        const cond = b.condition!==undefined?b.condition:(b.cond||0);
        addRewardBlock(cond);
        const lastBlock = rw.lastElementChild;
        const rt = lastBlock ? lastBlock.querySelector('.reward-tbl') : null;
        if(rt && b.items){
          rt.innerHTML = '';
          b.items.forEach((it,i)=>appendRewardRow(rt, i, it.probability!==undefined?it.probability:(it.prob||0), it.itemId!==undefined?it.itemId:(it.item||0), it.qty||1));
          renumberTable(rt);
        }
      });
    }
  }
  // Boss monsters
  if(obj.boss && obj.boss.length){
    const bt = document.getElementById('tb-boss');
    if(bt){ bt.innerHTML = '';
      obj.boss.forEach((b,i)=>{
        appendBossRow(bt, i, b.id||0, b.qty||1, b.x||0, b.z||0, b.y||0);
      });
      renumberTable(bt);
    }
  }
  upgradeSelectsToCombo();
}
