/* MHFU: Monster Hunter Freedom Unite quest-file addresses & logic
   Auto-split module — shares global scope with the other <script> files.
   Load order (set in index.html): shared.js → mhf2.js → mhfu.js → init.js */


const FU_ITEM_LIST=[[0,'－－－－－－'],[1,'Book of Combos 1'],[2,'Book of Combos 2'],[3,'Book of Combos 3'],[4,'Book of Combos 4'],[5,'Book of Combos 5'],[6,'Alchemy Guide'],[7,'Potion'],[8,'Mega Potion'],[9,'Nutrients'],[10,'Mega Nutrients'],[11,'Antidote'],[12,'Immunizer'],[13,'Power Juice'],[14,'Mega Juice'],[15,'Demondrug'],[16,'Mega Demondrug'],[17,'Power Pill'],[18,'Armorskin'],[19,'Mega Armorskin'],[20,'Armor Pill'],[21,'Cool Drink'],[22,'Hot Drink'],[23,'Thawing Agent'],[24,'Psychoserum'],[25,'Monster Fluid'],[26,'Monster Broth'],[27,'Monster Essence'],[28,'Thunderbug Juice'],[29,'Thunderbug Jelly'],[30,'Herbal Medicine'],[31,'Max Potion'],[32,'Ancient Potion'],[33,'Catalyst'],[34,'Energy Drink'],[35,'Gunpowder'],[36,'Lifecrystals'],[37,'Lifepowder'],[38,'Powercharm'],[39,'Powertalon'],[40,'Armorcharm'],[41,'Armortalon'],[42,'Tranquilizer'],[43,'Raw Meat'],[44,'Poisoned Meat'],[45,'Tainted Meat'],[46,'Drugged Meat'],[47,'Rare Steak'],[48,'Well-Done Steak'],[49,'Gourmet Steak'],[50,'Burnt Meat'],[51,'Hot Meat'],[52,'Cold Meat'],[53,'Rare Fish'],[54,'Gourmet Fish'],[55,'Gourmet Fish+'],[56,'Burnt Fish'],[57,'Boomerang'],[58,'Throwing Knife'],[59,'Poison Thrw Knf'],[60,'Sleeping Thr Knf'],[61,'Paralyze Thr Knf'],[62,'Tranq Thrwng Knf'],[63,'Bomb Material'],[64,'Paintball'],[65,'Flash Bomb'],[66,'Sonic Bomb'],[67,'Dung'],[68,'Wyvern Droppings'],[69,'Dung Bomb'],[70,'Smoke Bomb'],[71,'Poison Smoke Bmb'],[72,'Farcaster'],[73,'Deodorant'],[74,'Tranq Bomb'],[75,'Spiderweb'],[76,'Net'],[77,'Trap Tool'],[78,'Pitfall Trap'],[79,'Shock Trap'],[80,'Lightning Rod'],[81,'Barrel Lid'],[82,'Small Barrel'],[83,'Large Barrel'],[84,'Sm Barrel-Bomb'],[85,'Sm Barrel-Bomb+'],[86,'Lg Barrel-Bomb'],[87,'Lg Barrel-Bomb+'],[88,'Bounce Bomb'],[89,'Bounce Bomb+'],[90,'Anti-Dragon Bomb'],[91,'Polytan Bomb'],[92,'JUMP Barrel Bomb'],[93,'Huskberry'],[94,'Sm Bone Husk'],[95,'Lg Bone Husk'],[96,'Normal S Lv1'],[97,'Normal S Lv2'],[98,'Normal S Lv3'],[99,'Pierce S Lv1'],[100,'Pierce S Lv2'],[101,'Pierce S Lv3'],[102,'Pellet S Lv1'],[103,'Pellet S Lv2'],[104,'Pellet S Lv3'],[105,'Crag S Lv1'],[106,'Crag S Lv2'],[107,'Crag S Lv3'],[108,'Clust S Lv1'],[109,'Clust S Lv2'],[110,'Clust S Lv3'],[111,'Flaming S'],[112,'Water S'],[113,'Thunder S'],[114,'Freeze S'],[115,'Dragon S'],[116,'Recov S Lv1'],[117,'Recov S Lv2'],[118,'Poison S Lv1'],[119,'Poison S Lv2'],[120,'Para S Lv1'],[121,'Para S Lv2'],[122,'Sleep S Lv1'],[123,'Sleep S Lv2'],[124,'Tranq S'],[125,'Paint S'],[126,'Demon S'],[127,'Armor S'],[128,'No Coating'],[129,'Empty Bottle'],[130,'Power Coating'],[131,'Poison Coating'],[132,'ParalysisCoating'],[133,'Sleep Coating'],[134,'CloseRngCoating'],[135,'Paint Coating'],[136,'Cricket'],[137,'Worm'],[138,'Firefly'],[139,'Frog'],[140,'Tuna Bait'],[141,'Arrowana Bait'],[142,'Goldenfish Bait'],[143,'Mega Fishing Fly'],[144,'Old Pickaxe'],[145,'Iron Pickaxe'],[146,'Mega Pickaxe'],[147,'Expand Pickaxe'],[148,'Old Bugnet'],[149,'Bugnet'],[150,'Mega Bugnet'],[151,'BBQ Spit'],[152,'Gourmet BBQ Spit'],[153,'Whetstone'],[154,'Binoculars'],[155,'Garbage'],[156,'Flute'],[157,'Health Flute'],[158,'Antidote Flute'],[159,'Demon Flute'],[160,'Armor Flute'],[161,'Honey'],[162,'Sunset Herb'],[163,'Herb'],[164,'Antidote Herb'],[165,'Fire Herb'],[166,'Ivy'],[167,'Sleep Herb'],[168,'Sap Plant'],[169,'Felvine'],[170,'Cactus Flower'],[171,'Hot Pepper'],[172,'Dosbiscus'],[173,'Mountain Herbs'],[174,'Giant Corn'],[175,'Special Mushroom'],[176,'Select Mushroom'],[177,'Blue Mushroom'],[178,'Nitroshroom'],[179,'Parashroom'],[180,'Toadstool'],[181,'Exciteshroom'],[182,'Dragon Toadstool'],[183,'Spicy Mushroom'],[184,'Chaos Mushroom'],[185,'Paintberry'],[186,'Power Seed'],[187,'Armor Seed'],[188,'Dragon Seed'],[189,'Scatternut'],[190,'Needleberry'],[191,'Bomberry'],[192,'Tropical Berry'],[193,'Frozen Berry'],[194,'Red Seed'],[195,'Green Seed'],[196,'Yellow Seed'],[197,'Beautiful Shell'],[198,'Black Pearl'],[199,'Giant Blk Pearl'],[200,'Stone'],[201,'Disk Stone'],[202,'Iron Ore'],[203,'Earth Crystal'],[204,'Machalite Ore'],[205,'Dragonite Ore'],[206,'Carbalite Ore'],[207,'Eltalite Ore'],[208,'Union Ore'],[209,'Mellanje Ore'],[210,'Firestone'],[211,'Firecell Stone'],[212,'Coal'],[213,'Goldstone Piece'],[214,'Goldstone Hunk'],[215,'Lightcrystal'],[216,'Novacrystal'],[217,'Purecrystal'],[218,'Antiseptic Stone'],[219,'Ice Crystal'],[220,'Rainbow Ore'],[221,'Great Stone'],[222,'Armor Stone'],[223,'Armor Sphere'],[224,'Armor Sphere+'],[225,'Hrd Armor Sphere'],[226,'Hvy Armor Sphere'],[227,'Ryl Armor Sphere'],[228,'Tru Armor Sphere'],[229,'Knife Mackerel'],[230,'Sushifish'],[231,'Sleepyfish'],[232,'Pin Tuna'],[233,'Rumblefish'],[234,'Scatterfish'],[235,'Burst Arrowana'],[236,'Bomb Arrowana'],[237,'Glutton Tuna'],[238,'Gastronome Tuna'],[239,'Speartuna'],[240,'Small Goldenfish'],[241,'Goldenfish'],[242,'Silverfish'],[243,'Ancient Fish'],[244,'Springnight Carp'],[245,'Tailed Frog'],[246,'Insect Husk'],[247,'Yambug'],[248,'Bughopper'],[249,'Snakebee Larva'],[250,'Godbug'],[251,'Bitterbug'],[252,'Flashbug'],[253,'Thunderbug'],[254,'Carpenterbug'],[255,'King Scarab'],[256,'Emperor Cricket'],[257,'Killer Beetle'],[258,'Hercudrome'],[259,'Rare Scarab'],[260,'PhantomButterfly'],[261,'Royal Rhino'],[262,'Divine Rhino'],[263,'Rainbow Insect'],[264,'Great Hornfly'],[265,'Great Ladybug'],[266,'Screamer'],[267,'Poison Sac'],[268,'Toxin Sac'],[269,'DeadlyPoisonSac'],[270,'Paralysis Sac'],[271,'Sleep Sac'],[272,'Coma Sac'],[273,'Flame Sac'],[274,'Inferno Sac'],[275,'Blazing Fire Sac'],[276,'Electro Sac'],[277,'Thunder Sac'],[278,'Lightning Sac'],[279,'Power Extract'],[280,'Pale Extract'],[281,'Sm Monster Bone'],[282,'Med Monster Bone'],[283,'Lg Monster Bone'],[284,'Monster Bone+'],[285,'Hrd Monster Bone'],[286,'Hvy Monster Bone'],[287,'Eldr Dragon Bone'],[288,'BigEDragonBone'],[289,'Mystery Bone'],[290,'Unknown Skull'],[291,'Master\'s Skull'],[292,'Bone'],[293,'RobustWyvernBone'],[294,'Brute Bone'],[295,'Giant Bone'],[296,'Stout Bone'],[297,'Massive Bone'],[298,'Wyvern Fang'],[299,'Wyvern Claw '],[300,'Wyvern Stone'],[301,'Big Wyvern Stone'],[302,'BigEDragonJewel'],[303,'White Liver'],[304,'Popo Tongue'],[305,'Secret Pouch'],[306,'CarapaceonBrains'],[307,'CarapaceonBrain+'],[308,'Piscine Liver'],[309,'Wyvern Tears'],[310,'Wyvern Sobs'],[311,'Territorial Dung'],[312,'TerritorialDung+'],[313,'Crab Pearl'],[314,'Crab Pearl+'],[315,'Dragon Treasure'],[316,'Anc Drgn Treasre'],[317,'Decayed Drgn Scl'],[318,'Dragon Herb'],[319,'Felyne Fur Ruby'],[320,'Mosswine Hide'],[321,'Bullfango Pelt'],[322,'ThkBullfangoPelt'],[323,'Bullfango Head'],[324,'Bulldrome Tusk'],[325,'Bulldrome Hide'],[326,'Bulldrome Hide+'],[327,'Kelbi Horn'],[328,'Kelbi Hide'],[329,'Anteka Antlers'],[330,'Anteka Pelt'],[331,'High Qualty Pelt'],[332,'Remobra Skin'],[333,'Remobra Skin+'],[334,'SpecRemobraSkin+'],[335,'Striped Skin'],[336,'Remobra Skull'],[337,'ShakalakaTreasre'],[338,'ShakalakaTreasr+'],[339,'ShakaInheritance'],[340,'Giaprey Scale'],[341,'Giaprey Scale+'],[342,'Giaprey Hide'],[343,'Giaprey Hide+'],[344,'Giadrome Hide'],[345,'Giadrome Claw'],[346,'Giadrome Claw+'],[347,'Giadrome Skull'],[348,'Velociprey Fang'],[349,'Velociprey Scale'],[350,'Velociprey Scle+'],[351,'Velociprey Hide'],[352,'Velociprey Hide+'],[353,'Velocidrome Hide'],[354,'Velocidrome Claw'],[355,'Velocidrome Clw+'],[356,'Velocidrome Head'],[357,'Genprey Fang'],[358,'Genprey Scale'],[359,'Genprey Scale+'],[360,'Genprey Hide'],[361,'Genprey Hide+'],[362,'Gendrome Hide'],[363,'Gendrome Tail'],[364,'Gendrome Skull'],[365,'Ioprey Fang'],[366,'Ioprey Scale'],[367,'Ioprey Scale+'],[368,'Ioprey Hide'],[369,'Ioprey Hide+'],[370,'Iodrome Hide'],[371,'Iodrome Skull'],[372,'OrangeHypnoPelt'],[373,'OrangeHypnoPelt+'],[374,'Top-GrdHypnoClaw'],[375,'Hypno Claw+'],[376,'Hypno Bezoar'],[377,'Hypno Bezoar+'],[378,'Hypno Beak'],[379,'Hypno Fang'],[380,'RainbowTailFeath'],[381,'Hypno Ticket'],[382,'Kut-Ku Scale'],[383,'Kut-Ku Scale+'],[384,'Thick Kut-Ku Scl'],[385,'Kut-Ku Shell'],[386,'Kut-Ku Carapace'],[387,'Hvy Kut-Ku Shell'],[388,'Kut-Ku Ear'],[389,'Long Kut-Ku Ear'],[390,'Lucky Kut-Ku Ear'],[391,'Giant Beak'],[392,'Splendid Beak'],[393,'Kut-Ku Webbing'],[394,'Str Kut-Ku Wing'],[395,'Blue Kut-Ku Scl'],[396,'Blue Kut-Ku Scl+'],[397,'ThkBlueKut-KuScl'],[398,'Blue Kut-Ku Shl'],[399,'Blue Kut-Ku Cpc'],[400,'HvyBlueKut-KuShl'],[401,'Rubbery Hide'],[402,'Rubbery Hide+'],[403,'SpecRubberyHide+'],[404,'Gypceros Head'],[405,'HardGypcerosHead'],[406,'Pur Rubbery Hide'],[407,'Pur Gypceros Wng'],[408,'HrdPuGypcerosWng'],[409,'Garuga Scale'],[410,'Garuga Scale+'],[411,'ThickGarugaScale'],[412,'Garuga Shell'],[413,'Garuga Carapace'],[414,'Hvy Garuga Shell'],[415,'Garuga Ear'],[416,'Long Garuga Ear'],[417,'Sharpened Beak'],[418,'Rejuvenated Beak'],[419,'Garuga Wing'],[420,'Str Garuga Wing'],[421,'Garuga Tail'],[422,'LethrGarugaTail'],[423,'Garuga Mane'],[424,'SilverGarugaPelt'],[425,'Blango Pelt'],[426,'Blango Pelt+'],[427,'Sharp Claw'],[428,'Piercing Claw'],[429,'Blangonga Fang'],[430,'Blangonga Fang+'],[431,'HvyBlangongaFang'],[432,'Blangonga Pelt'],[433,'Blangonga Pelt+'],[434,'HrdBlangongaPlt+'],[435,'Blangonga Whiskr'],[436,'Lthr Pelagus Plt'],[437,'Blangonga Tail'],[438,'LeathrBlangoTail'],[439,'C.BlangongaPelt+'],[440,'HvyC.BlangoFang'],[441,'LthrC.BlangoTail'],[442,'Conga Pelt'],[443,'Conga Pelt+'],[444,'Congalala Pelt'],[445,'Congalala Pelt+'],[446,'HrdCongalalaPlt+'],[447,'Vibrant Pelt'],[448,'Congalala Claw'],[449,'Congalala Claw+'],[450,'HrdCongalalaClw+'],[451,'Congalala Fang'],[452,'Lg Pelagus Fang'],[453,'E.CongalalaPelt+'],[454,'HrdE.CongaClaw'],[455,'Vibrant Comb'],[456,'Rajang Horn'],[457,'Hard Rajang Horn'],[458,'Rajang Fang'],[459,'Hvy Rajang Fang'],[460,'Blk Rajang Pelt'],[461,'Blk Rajang Pelt+'],[462,'Rajang Claw'],[463,'Hard Rajang Claw'],[464,'Rajang Tail'],[465,'Dummy'],[466,'Gold Rajang Pelt'],[467,'GoldRajangPelt+'],[468,'Piscine Fang'],[469,'HvyPiscineFang'],[470,'Plesioth Scale'],[471,'Plesioth Scale+'],[472,'ThckPlesiothScl'],[473,'Plesioth Fin'],[474,'Plesioth Fin+'],[475,'SpecPlesiothFin+'],[476,'Grn Plesioth Scl'],[477,'Grn Plsioth Scl+'],[478,'ThckGrnPlesioScl'],[479,'Grn Plesioth Fin'],[480,'Grn Plsioth Fin+'],[481,'SpecGrnPlesioFn+'],[482,'Cephalos Scale'],[483,'Cephalos Scale+'],[484,'Cephalos Fin'],[485,'Cephalos Fin+'],[486,'Coral Cphlos Scl'],[487,'Coral Cphlos Fin'],[488,'ThckLavasiothScl'],[489,'HvyLavasiothShl'],[490,'HvyLavasiothFang'],[491,'SpecLavasioFin+'],[492,'Lavasioth Ticket'],[493,'Wyvern Skull Shl'],[494,'Sm Hermitaur Shl'],[495,'Hermitaur Shell'],[496,'Hermitaur Carpce'],[497,'HvyHermitaurShl'],[498,'Hermitaur Claw'],[499,'Hermitaur Claw+'],[500,'HrdHermitaurClaw'],[501,'PlumD.HermitrShl'],[502,'PlumD.HermitrClw'],[503,'Sm Ceanataur Shl'],[504,'Ceanataur Shell'],[505,'Ceanataur Carpce'],[506,'HvyCeanataurShl'],[507,'Ceanataur Leg'],[508,'HvyCeanataurLeg'],[509,'Ceanataur Pincer'],[510,'Ceanataur Claw'],[511,'Ceanataur Claw+'],[512,'HrdCeanataurClaw'],[513,'TerraCeanatrShl'],[514,'TerraCeanatrClaw'],[515,'Sm Lobstershell'],[516,'Lg Lobstershell'],[517,'Gt Lobstershell'],[518,'Amezari Shell'],[519,'Amezari Carapace'],[520,'Rathian Scale'],[521,'Rathian Scale+'],[522,'ThckRathianScl'],[523,'Rathian Plate'],[524,'Rathian Ruby'],[525,'HvnlyRathianScl'],[526,'Rathian Shell'],[527,'Rathian Carapace'],[528,'HvyRathianShell'],[529,'Rathian Spike'],[530,'Rathian Spike+'],[531,'Rathian Thorn'],[532,'Pnk Rathian Scl'],[533,'Pnk Rathian Scl+'],[534,'ThckPnkRathnScl'],[535,'Pnk Rathian Shl'],[536,'Pnk Rathian Cpc'],[537,'HvyPnkRathianShl'],[538,'Gld Rathian Scl+'],[539,'ThckGldRathnScl'],[540,'Gld Rathian Cpc'],[541,'HvyGldRathianShl'],[542,'GoldRathianThorn'],[543,'Fire Wyvern Claw'],[544,'HrdFireWyvernClw'],[545,'FireWyvern Fluid'],[546,'FireWyvrn Marrow'],[547,'FireWyvrn BrnStm'],[548,'Rathalos Scale'],[549,'Rathalos Scale+'],[550,'Hrd Rathalos Scl'],[551,'Rathalos Plate'],[552,'Rathalos Ruby'],[553,'HvnlyRathalosScl'],[554,'Rathalos Shell'],[555,'Rathalos Carpace'],[556,'HvyRathalosShl'],[557,'Rathalos Tail'],[558,'LthrRathalosTail'],[559,'Rathalos Webbing'],[560,'Rathalos Wing'],[561,'StrRathalosWing'],[562,'Azure Rthlos Scl'],[563,'Azre Rthlos Scl+'],[564,'ThckAzurRthlsScl'],[565,'Azure Rthlos Shl'],[566,'Azure Rthlos Cpc'],[567,'HvyAzurRthlsShl'],[568,'Azur Rthlos Tail'],[569,'LthrAzrRthlsTail'],[570,'Azur Rthlos Wing'],[571,'Slvr Rthlos Scl+'],[572,'ThckSlvrRthlsScl'],[573,'Slvr Rthlos Cpc'],[574,'HvySlvrRthlsShl'],[575,'Slvr Rthlos Tail'],[576,'LthrSlvrRthlsTal'],[577,'Slvr Rthlos Wing'],[578,'Flabby Hide'],[579,'Khezu Hide - Tan'],[580,'KhezuHide-Cream'],[581,'Pale Bone'],[582,'Pale Khezu Steak'],[583,'KhezuSpecialCut'],[584,'Alluring Hide'],[585,'Alluring Webbing'],[586,'StrAlluringWing'],[587,'Basarios Shell'],[588,'Basarios Carpace'],[589,'HvyBasariosShell'],[590,'Basarios Wing'],[591,'StrBasariosWing'],[592,'Basarios Tears'],[593,'Tigrex Scale'],[594,'Tigrex Scale+'],[595,'ThickTigrexScale'],[596,'HvnlyTigrexScale'],[597,'Tigrex Shell'],[598,'Tigrex Carapace'],[599,'Hvy Tigrex Shell'],[600,'Tigrex Tail'],[601,'LeathrTigrexTail'],[602,'Tigrex Claw'],[603,'Tigrex Claw+'],[604,'Hard Tigrex Claw'],[605,'Tigrex Fang'],[606,'Tigrex Fang+'],[607,'Hvy Tigrex Fang'],[608,'Tigrex Skull Shl'],[609,'Narga Scale+'],[610,'ThickNargaScale'],[611,'HvnlyNargaScale'],[612,'Black Narga Pelt'],[613,'BlackNargaPelt+'],[614,'Nargacuga Tail'],[615,'LeatherNargaTail'],[616,'Narga Tail Spike'],[617,'HvyNargaTailSpik'],[618,'NargaCuttingWing'],[619,'StrNargaCttngWng'],[620,'Nargacuga Fang+'],[621,'HvyNargacugaFang'],[622,'Narga Brain Stem'],[623,'Gravios Shell'],[624,'Gravios Carapace'],[625,'HvyGraviosShell'],[626,'HvnlyGraviosShl'],[627,'Gravios Skl Shl'],[628,'Gravios BrainStm'],[629,'Blk Gravios Shl'],[630,'Blk Gravios Cpc'],[631,'HvyBlkGraviosShl'],[632,'HvnlyBlkGraviShl'],[633,'Blk Gravios Skl'],[634,'Twisted Horn'],[635,'Majestic Horn'],[636,'StoutWarpedHorn'],[637,'Diablos Shell'],[638,'Diablos Carapace'],[639,'HvyDiablosShell'],[640,'Diablos Spine'],[641,'Diablos Thoracic'],[642,'HvyDiablosSpine'],[643,'Diablos Tail'],[644,'LthrDiablosTail'],[645,'Blos Fang'],[646,'TwstBlkBlosHrn'],[647,'StoutBlkTwstdHrn'],[648,'Black Blos Shell'],[649,'Black Blos Cpc'],[650,'HvyBlkBlosShell'],[651,'Black Blos Spine'],[652,'Blk Blos Thracic'],[653,'HvyBlkBlosSpine'],[654,'Black Blos Tail'],[655,'LthrBlkBlosTail'],[656,'Vespoid Abdomen'],[657,'VespoidQn\'sCrown'],[658,'Vespoid Shell'],[659,'Vespoid Carapace'],[660,'Vespoid Wing'],[661,'Vespoid InnrWng'],[662,'Vspoid Razorwing'],[663,'Hornetaur Shell'],[664,'Hornetaur Crapce'],[665,'Hornetaur Head'],[666,'Hornetaur Wing'],[667,'HornetaurInnrWng'],[668,'Hornet Razorwing'],[669,'Blood Red Horn'],[670,'Top-GrdRedHorn'],[671,'Monoblos Shell'],[672,'MonoblosCarapace'],[673,'Monoblos Spine'],[674,'MonoblosThoracic'],[675,'Monoblos Heart'],[676,'Wht Monoblos Hrn'],[677,'Top-GrdPlatHorn'],[678,'Wht Monoblos Shl'],[679,'Wht Monoblos Cpc'],[680,'Wht Monoblos Spn'],[681,'WhtMonoblosThora'],[682,'Kirin Horn'],[683,'Kirin Hide'],[684,'Kirin Hide+'],[685,'SpecialKirinHide'],[686,'Kirin Mane'],[687,'Platinum Mane'],[688,'Kirin Thndr Tail'],[689,'LthrKirinThndrTl'],[690,'Kirin Azure Horn'],[691,'Lao-Shan\'s Claw'],[692,'Lao-Shan\'s Horn'],[693,'Lao-Shan\'s Scale'],[694,'Lao-Shan Scale+'],[695,'Lao-Shan\'sThkScl'],[696,'Lao-Shan\'s Ruby'],[697,'Lao-ShanHvnlyScl'],[698,'Lao-Shan\'s Shell'],[699,'Lao-ShanCarapace'],[700,'Lao-Shan\'sHvyShl'],[701,'Azure LaoS Horn'],[702,'Azure LaoS Shell'],[703,'Azure LaoS Claw'],[704,'Gaoren Shell'],[705,'Gaoren Carapace'],[706,'HvyGaorenShell'],[707,'HvnlyGaorenShell'],[708,'Gaoren Spine'],[709,'Gaoren Thoracic'],[710,'Hvy Gaoren Spine'],[711,'Gaoren Pincer'],[712,'Gaoren Claw'],[713,'Hard Gaoren Claw'],[714,'Daora Shell'],[715,'Daora Carapace'],[716,'Hvy Daora Shell'],[717,'DaoraDragonScale'],[718,'DaoraDragonScal+'],[719,'ThckDaoraDrgnScl'],[720,'Daora Webbing'],[721,'Str Daora Wing'],[722,'Daora Horn'],[723,'Hard Daora Horn'],[724,'Daora Tail'],[725,'Lthr Daora Tail'],[726,'Daora Claw'],[727,'Daora Sharp Claw'],[728,'Daora Jewel'],[729,'Chameleos Hide'],[730,'Chameleos Hide+'],[731,'SpecChameleHide+'],[732,'Chameleos Horn'],[733,'Chameleos Spike'],[734,'HrdChameleosHorn'],[735,'Chameleos Claw'],[736,'ChameleosWebbing'],[737,'StrChameleosWing'],[738,'Chameleos Tail'],[739,'LthrChameleoTail'],[740,'Chameleos Jewel'],[741,'Fire Dragon Scl'],[742,'Fire Drgn Scl+'],[743,'ThckFireDrgnScl'],[744,'Fire Dragon Claw'],[745,'HrdFireDrgnClaw'],[746,'Fire Drgn Webbng'],[747,'Fire Dragon Pwdr'],[748,'Fire Drgn Jwl'],[749,'ElderDragonBlood'],[750,'Lunastra Shell'],[751,'LunastraCarapace'],[752,'Lunastra Mane'],[753,'Lunastra Tail'],[754,'Lunastra Horn'],[755,'Lunastra Spike'],[756,'Teostra Shell'],[757,'Teostra Carapace'],[758,'HvyTeostraShell'],[759,'Teostra Mane'],[760,'Teostra Tail'],[761,'LthrTeostraTail'],[762,'Teostra Horn'],[763,'Teostra Horn+'],[764,'HardTeostraHorn'],[765,'Dragonmoss'],[766,'Dragonmoss+'],[767,'AncientDrgnmoss'],[768,'Dragonwood'],[769,'Dragonwood+'],[770,'AncientDrgnwood'],[771,'YamaTsukamiHide'],[772,'YamaTsukaFillet'],[773,'YamaTsukamiFluid'],[774,'Dark Piece'],[775,'Dark Stone'],[776,'Fatalis Horn'],[777,'HardFatalisHorn'],[778,'Fatalis Scale'],[779,'ThckFatalisScale'],[780,'Fatalis Shell'],[781,'Hvy Fatalis Shl'],[782,'Fatalis Eye'],[783,'Fatalis Evil Eye'],[784,'Fatalis Webbing'],[785,'Str Fatalis Wng'],[786,'Fatalis CrmsnHrn'],[787,'HrdFatlisCrmHorn'],[788,'Fatalis CrmsnScl'],[789,'ThckFatlisCrmScl'],[790,'Fatalis CrmsnShl'],[791,'HvyFatalisCrmShl'],[792,'Fatalis DevilEye'],[793,'Fatalis CrmsnWng'],[794,'StrFatlisCrmWing'],[795,'Wht Fatalis Scl'],[796,'ThckWhtFatlisScl'],[797,'Wht Fatalis Shl'],[798,'HvyWhtFatalisShl'],[799,'Wht Fatalis Wbng'],[800,'StrWhtFatalisWng'],[801,'Wht Fatalis Horn'],[802,'HrdWhtFatlisHorn'],[803,'Akantor Scale'],[804,'Akantor Shell'],[805,'Akantor Tail'],[806,'Akantor Claw'],[807,'Akantor Fang'],[808,'Akantor Spike'],[809,'HvyUkanlosShell'],[810,'UkanlosUnderscl'],[811,'Hvy Ukanlos Tail'],[812,'UkanlosDiggngClw'],[813,'UkanlosShovelJaw'],[814,'StrongUkanlosFin'],[815,'Ukanlos Stone'],[816,'Wyverian Harp'],[817,'Sinister Cloth'],[818,'Lost Umbrella'],[819,'Ruststone'],[820,'Flat Ruststone'],[821,'Large Ruststone'],[822,'Small Ruststone'],[823,'Ruststone Rod'],[824,'Ancient Stone'],[825,'AncientFlatstone'],[826,'Lg Ancient Stone'],[827,'Sm Ancient Stone'],[828,'Ancient StoneRod'],[829,'Organizer Guide'],[830,'Backpacker Guide'],[831,'Lynian Info'],[832,'Shakalaka Info'],[833,'Neopteron Info'],[834,'GrtThundrbugInfo'],[835,'Herbivore Info'],[836,'Bird Wyvern Info'],[837,'HypnocatriceInfo'],[838,'Yian Garuga Info'],[839,'FlyingWyvernInfo'],[840,'Remobra Info'],[841,'Tigrex Info'],[842,'Nargacuga Info'],[843,'Akantor Info'],[844,'Ukanlos Info'],[845,'Piscine Info'],[846,'Lavasioth Info'],[847,'Carapaceon Info1'],[848,'Carapaceon Info2'],[849,'Shen Gaoren Info'],[850,'Pelagus Info'],[851,'Rajang Info'],[852,'Kirin Info'],[853,'KushalaDaoraInfo'],[854,'Chameleos Info'],[855,'Lunastra Info'],[856,'Teostra Info'],[857,'Lao-Shan Info'],[858,'YamaTsukamiInfo'],[859,'Fatalis Info'],[860,'Steel Egg'],[861,'Silver Egg'],[862,'Golden Egg'],[863,'Map'],[864,'First-Aid Med'],[865,'Ration'],[866,'Portable Spit'],[867,'Mini Whetstone'],[868,'Prtbl Shock Trap'],[869,'Supply Flash Bmb'],[870,'Sply Max Potion'],[871,'Sply Pitfall Trp'],[872,'Sply Lg Brrl Bmb'],[873,'Ballista S'],[874,'Cannon S'],[875,'Wyvern'],[876,'Wyvern Egg'],[877,'Herbivore Egg'],[878,'Carnivore Egg'],[879,'Sootstone Ore'],[880,'Quartz Ore'],[881,'Powderstone'],[882,'Khezu Whelp'],[883,'Khz Whlp Ice Crm'],[884,'Kut-Ku Coin'],[885,'Congalala Coin'],[886,'Khezu Coin'],[887,'Daimyo Coin'],[888,'Blangonga Coin'],[889,'Yian Garuga Coin'],[890,'Tigrex Coin'],[891,'Diablos Coin'],[892,'Gravios Coin'],[893,'Kirin Coin'],[894,'Cephadrome Coin'],[895,'Plesioth Coin'],[896,'Shogun Coin'],[897,'Fire Coin'],[898,'Rajang Coin'],[899,'BlackBeltCoinG'],[900,'Expert Coin G'],[901,'Warrior Coin G'],[902,'Legend Coin G'],[903,'Commendation'],[904,'Commendation G'],[905,'Commendation S'],[906,'Pawprint Stamp'],[907,'Pokke Ticket'],[908,'Pokke Ticket+'],[909,'Normal Ticket'],[910,'Hard Ticket'],[911,'Plus Class Tcket'],[912,'Hero of Kkto Bio'],[913,'Hero of JumboBio'],[914,'Elder Thank You'],[915,'Elder Thnk You+'],[916,'FlynMealPassReg'],[917,'FlynMealPassPlus'],[918,'Comrade Ticket'],[919,'VeggieElderTcket'],[920,'VeggieElderTckt+'],[921,'VegElderTcktBrz'],[922,'VegElderTcktSlv'],[923,'VegElderTcktGld'],[924,'VegElderTcktSky'],[925,'Blackbelt Ticket'],[926,'Expert Ticket'],[927,'Paw Pass Ticket'],[928,'Limited Paw Pass'],[929,'Famitsu Ticket'],[930,'Famitsu Invoice'],[931,'Famitsu PT Tckt'],[932,'FamitsuCustomTkt'],[933,'Dengeki Ticket'],[934,'Dengeki G Ticket'],[935,'Dengeki 2G Tckt'],[936,'Dengeki Maoh Tkt'],[937,'Pirate J Ticket'],[938,'Pirate J Tckt G'],[939,'Magazine Ticket'],[940,'Hunter\'s Ticket'],[941,'Hunter Soul Tkt'],[942,'Puppet Ticket'],[943,'SpecPuppetTicket'],[944,'Suiko Jewel'],[945,'Akito Jewel'],[946,'BattlefieldJewel'],[947,'LapisLazuliJewel'],[948,'Paralysis Jewel'],[949,'Paralysis Jewel+'],[950,'Pep Jewel'],[951,'Jolt Jewel'],[952,'Steadfast Jewel'],[953,'Steadfast Jewel+'],[954,'Antidote Jewel'],[955,'Antidote Jewel+'],[956,'Retroviral Jewel'],[957,'Antiviral Jewel'],[958,'Snowblower Jewel'],[959,'SnowblowerJewel+'],[960,'Tip Toe Jewel'],[961,'Ninja Jewel'],[962,'Strength Jewel'],[963,'Feel Good Jewel'],[964,'Razor Jewel'],[965,'Artisan Jewel'],[966,'Fencer Jewel'],[967,'Expert Jewel'],[968,'Grinder Jewel'],[969,'Stone Wall Jewel'],[970,'Hard Wall Jewel'],[971,'HvnlyShieldJewel'],[972,'Hardball Jewel'],[973,'Early Bird Jewel'],[974,'Recoilless Jewel'],[975,'StrongShot Jewel'],[976,'Pierce Jewel'],[977,'Pellet Jewel'],[978,'Shot Bonus Jewel'],[979,'PierceBonusJewel'],[980,'PelletBonusJewel'],[981,'Crag Bonus Jewel'],[982,'ScattrBonusJewel'],[983,'SpecialAtk Jewel'],[984,'Element Jewel'],[985,'Bombardier Jewel'],[986,'PickyEater Jewel'],[987,'No Food Jewel'],[988,'Fatso Jewel'],[989,'Attack Jewel'],[990,'Defense Jewel'],[991,'Protection Jewel'],[992,'DivineProtectJwl'],[993,'Earplug Jewel'],[994,'Alarm Jewel'],[995,'Friendship Jewel'],[996,'Backpacker Jewel'],[997,'Impervious Jewel'],[998,'Inferno Jewel'],[999,'Crimson Jewel'],[1000,'Stream Jewel'],[1001,'Torrent Jewel'],[1002,'Freeze Jewel'],[1003,'Glacier Jewel'],[1004,'Lightning Jewel'],[1005,'Thunder Jewel'],[1006,'Slayer Jewel'],[1007,'DragonslyrJewel'],[1008,'CoolBreeze Jewel'],[1009,'ColdBreezeJewel'],[1010,'WarmBreeze Jewel'],[1011,'HotBreezeJewel'],[1012,'PaperweightJewel'],[1013,'Map Jewel'],[1014,'Gathering Jewel'],[1015,'Grab\'n\'DashJewel'],[1016,'Good Luck Jewel'],[1017,'Blessing Jewel'],[1018,'Fate Jewel'],[1019,'Fisher Jewel'],[1020,'Psychic Jewel'],[1021,'Curing Jewel'],[1022,'Professor Jewel'],[1023,'Armory Jewel'],[1024,'SecretArts Jewel'],[1025,'Evade Jewel'],[1026,'Danger Jewel'],[1027,'StayingPwr Jewel'],[1028,'Marathon Jewel'],[1029,'Ammo Box Jewel'],[1030,'Sniper Jewel'],[1031,'SharpshootrJewel'],[1032,'QuickEaterJewel'],[1033,'HideCutter Jewel'],[1034,'Melt-Proof Jewel'],[1035,'Anchor Jewel'],[1036,'BBQ Jewel'],[1037,'Small Arms Jewel'],[1038,'Howitzer Jewel'],[1039,'Fife Jewel'],[1040,'Tireless Jewel'],[1041,'Jumping Jewel'],[1042,'Sword Draw Jewel'],[1043,'Cat Guide Jewel'],[1044,'Cat Attack Jewel'],[1045,'CatDefenseJewel'],[1046,'TrapMasterJewel'],[1047,'PoisonCoatJewel'],[1048,'ParalysCoatJewel'],[1049,'Sleep Coat Jewel'],[1050,'Power Coat Jewel'],[1051,'Combo Coat Jewel'],[1052,'Guts Jewel'],[1053,'ConstitutnJewel'],[1054,'Tranq Jewel'],[1055,'Perceive Jewel'],[1056,'ShortChargeJewel'],[1057,'Cont. Fire Jewel'],[1058,'AntiParalyzJewel'],[1059,'Anti-Faint Jewel'],[1060,'Antivenin Jewel'],[1061,'Snowplow Jewel'],[1062,'SpeedyRecvrJewel'],[1063,'Celebrity Jewel'],[1064,'IronCurtainJewel'],[1065,'Wall Jewel'],[1066,'High Speed Jewel'],[1067,'SpecialAtkJewel+'],[1068,'Fasting Jewel'],[1069,'Fierce Jewel'],[1070,'Turtle Jewel'],[1071,'Beloved Jewel'],[1072,'Omnipotent Jewel'],[1073,'Extinction Jewel'],[1074,'Cold Wind Jewel'],[1075,'Hot Wind Jewel'],[1076,'HeavyMetal Jewel'],[1077,'Destiny Jewel'],[1078,'Cure All Jewel'],[1079,'Cure All Jewel+'],[1080,'Dodge Jewel'],[1081,'Pinch Jewel'],[1082,'Permanence Jewel'],[1083,'Eternal Jewel'],[1084,'Fast Food Jewel'],[1085,'Anti-Thaw Jewel'],[1086,'Tectonic Jewel'],[1087,'UnsheathingJewel'],[1088,'ParalysisCAddJwl'],[1089,'PowerCAddJewel'],[1090,'More Guts Jewel'],[1091,'Health Jewel'],[1092,'Knockout Jewel'],[1093,'Cutter Jewel'],[1094,'Master Jewel'],[1095,'Swordsman Jewel'],[1096,'Hermit Jewel'],[1097,'StrongWall Jewel'],[1098,'Shockless Jewel'],[1099,'StrongShotJewel+'],[1100,'Pierce Jewel+'],[1101,'Pellet Jewel+'],[1102,'Element Jewel+'],[1103,'Strongest Jewel'],[1104,'Silencer Jewel'],[1105,'Tenderness Jewel'],[1106,'TrueResistJewel'],[1107,'Solid Rock Jewel'],[1108,'Crisis Jewel'],[1109,'Sprinter Jewel'],[1110,'Magazine Jewel'],[1111,'Scarfing Jewel'],[1112,'Carving Jewel'],[1113,'Flying Jewel'],[1114,'RapidChargeJewel'],[1115,'Barrage Jewel'],[1116,'Giadrome Jewel'],[1117,'Kut-Ku Jewel'],[1118,'Daimyo Jewel'],[1119,'Congalala Jewel'],[1120,'Rathalos Jewel'],[1121,'Gravios Jewel'],[1122,'Garuga Jewel'],[1123,'Eldr Drgn Tears'],[1124,'Lao-Shan Melon'],[1125,'Eldr Drgn Fossil'],[1126,'Gypceros Crystal'],[1127,'Rathian Jewel'],[1128,'Teostra Meteor'],[1129,'ThsandYearForest'],[1130,'Frozen Meatball'],[1131,'Buckshot Acorn'],[1132,'Cephadrome Melon'],[1133,'Golden Cocoon'],[1134,'Amber Egg'],[1135,'Graviscus Bulb'],[1136,'Century Walnut'],[1137,'Hard Dragonrock'],[1138,'Dragonrock+'],[1139,'Dragonrock'],[1140,'Green Fin'],[1141,'Kut-Ku Cartilage'],[1142,'Hermitaur Brains'],[1143,'Congalala Stomch'],[1144,'Rathalos Liver'],[1145,'Gravios Giblets'],[1146,'Garuga Drumstick'],[1147,'Giadrome Thigh'],[1148,'Kut-Ku Gizzards'],[1149,'Daimyo Legs'],[1150,'Congalala Innrds'],[1151,'Rathalos Tongue'],[1152,'Gravios Wingtip'],[1153,'GarugaClavclMeat'],[1154,'Blango Bacon'],[1155,'Kut-Ku Skin'],[1156,'Cephalos Roe'],[1157,'Twstd Bldrm Tsk'],[1158,'Rathian Chops'],[1159,'Purple Crest'],[1160,'GarugaWhiteLiver'],[1161,'Dragonite (L)'],[1162,'Dragonite (M)'],[1163,'Dragonite (S)'],[1164,'Pokke Snowman'],[1165,'Felyne Crown'],[1166,'GldFlynJewelSwd'],[1167,'Dynasty Vase'],[1168,'Mysterious Mask'],[1169,'Eldr Drgn Rfrnc'],[1170,'AncntCatKingStat'],[1171,'Blngo Blzrd Ball'],[1172,'Blngo Flrry Ball'],[1173,'Inferior FlynCrn'],[1174,'Flyn Crwn Frgmnt'],[1175,'Hndlelss Gld Bld'],[1176,'GldBladelessHndl'],[1177,'Bttmlss Old Vase'],[1178,'Old Vase Bottom'],[1179,'Holed Shaka Mask'],[1180,'Shakalaka Stone'],[1181,'Torn Old Book'],[1182,'Old Book Scrap'],[1183,'TaillessCatStatu'],[1184,'BrokenStoneTail'],[1185,'Popo Dandelion'],[1186,'Velociprey Lily'],[1187,'Monoblos Rose'],[1188,'Chameleos\' Purse'],[1189,'Peach Clover'],[1190,'Gravibiscus'],[1191,'Shakalaka Ranka'],[1192,'Wyvern Grass'],[1193,'Glitter Mushroom'],[1194,'Shining Jellyfsh'],[1195,'Bright Mushroom'],[1196,'Glittr Capshroom'],[1197,'Skin Care Shroom'],[1198,'Beauty Shroom'],[1199,'ShimmeringShroom'],[1200,'Wyvernshroom'],[1201,'Blangonga Apple'],[1202,'Kelbi Nuts'],[1203,'Cephalos Wtrmeln'],[1204,'Khezu Seed'],[1205,'Writhe Nut'],[1206,'Basarios Peach'],[1207,'Shakalaka Squash'],[1208,'Lady Mackerel'],[1209,'Angler Snapper'],[1210,'Yokotuna'],[1211,'Nobunaga Bonito'],[1212,'Goldendrome'],[1213,'Amateratuna'],[1214,'Brilliant Aji'],[1215,'Chuck Mackerel'],[1216,'Victory Fish'],[1217,'Plump Goldenfish'],[1218,'Hideyoshi Ambrjk'],[1219,'Silverdrome'],[1220,'Susanofish'],[1221,'Pharr Yellowtail'],[1222,'Large Wyvernfish'],[1223,'Med Wyvernfish'],[1224,'Small Wyvernfish'],[1225,'Pickaxe Fish'],[1226,'Bugnet Fish'],[1227,'Cooler Fish'],[1228,'Pokke Quartz'],[1229,'Telos Stone'],[1230,'Sekumaeya Pearl'],[1231,'Schradite'],[1232,'Minegarde Night'],[1233,'Lateobrium'],[1234,'Mezeporter Topaz'],[1235,'Furiamond'],[1236,'Jumboite'],[1237,'Dragokurium'],[1238,'Liber Ruby'],[1239,'Kokotoite'],[1240,'Dondorumin'],[1241,'GrtForestCrystal'],[1242,'Wyvern Ore'],[1243,'Pure Wyvern Ore'],[1244,'Pillow Bug'],[1245,'Cleopatris'],[1246,'GiantStagBeetle'],[1247,'Ghostly Cicada'],[1248,'Celeb Cicada'],[1249,'Athena Beetle'],[1250,'Hornfly Princess'],[1251,'Princess Scarab'],[1252,'Marilyn Btterfly'],[1253,'Cricket of Troy'],[1254,'Cutie Crawler'],[1255,'Lovely Locust'],[1256,'Killer Venus'],[1257,'Hornfly Prince'],[1258,'Rathian Fly'],[1259,'Rathalos Fly'],[1260,'Embroidered Flag']];

const FU_EQUIP={HeadArmorID:['－－－－－－','Leather Helm','Chain Helm','Hunter\'s Helm','Hunter\'s Cap','Bone Helm','Bone Cap','Velociprey Helm','Velociprey Cap','Battle Helm','Battle Cap','Vespoid Helm','Vespoid Cap','Hornet Helm','Hornet Cap','Hi-Metal Helm','Hi-Metal Cap','Genprey Helm','Genprey Cap','Ioprey Helm','Ioprey Cap','Gypceros Helm','Gypceros Cap','Cephalos Helm','Cephalos Cap','Rathian Helm','Rathian Cap','Khezu Helm','Khezu Cap','Rathalos Helm','Rathalos Cap','Plesioth Helm','Plesioth Cap','Lobster Helm','Basarios Helm','Basarios Cap','Diablo Helm','Diablo Cap','Monoblos Helm','Monoblos Cap','Gravios Helm','Gravios Cap','Black Belt Helm','Mosswine Mask','Felyne Mask','Chaoshroom','Melahoa Flower Hat','Makluva Hood','Bistro Cap','Velociprey Mask','Genprey Mask','Ioprey Mask','Bullfango Mask','Red Piercing','Blue Piercing','Yellow Piercing','Black Piercing','Shinobi Mask (Sun)','Shinobi Mask (Moon)','Guardian Helm','Guardian Mask','Helper Hood','Healer Glasses','Skull Face','Yian Garuga Helm','Yian Garuga Cap','Garuga Mask','Auroros Helm','Genesis Headpiece','Borealis Crown','Glyph Crown','Black Head','Black Face','Leather Helm U','Chain Helm U','Hunter\'s Helm U','Hunter\'s Cap U','Bone Helm U','Bone Cap U','Giaprey Helm U','Giaprey Cap U','Battle Helm U','Battle Cap U','Vespoid Helm U','Vespoid Cap U','Hornet Helm U','Hornet Cap U','Hi-Metal Helm U','Hi-Metal Cap U','Genprey Helm U','Genprey Cap U','Ioprey Helm U','Ioprey Cap U','Gypceros Helm U','Gypceros Cap U','Cephalos Helm U','Cephalos Cap U','Rathian Heart Helm','Rathian Heart Cap','Khezu Helm U','Khezu Cap U','Rathalos Soul Helm','Rathalos Soul Cap','Plesioth Helm U','Plesioth Cap U','Basarios Helm U','Basarios Cap U','Diablo Helm U','Diablo Cap U','Monodevil Helm','Monodevil Cap','Gravios Helm U','Gravios Cap U','Shinobi Mask (Sky)','Shinobi Mask (Sea)','Guardian Helm U','Guardian Mask U','Helper Hood U','Healer Beret U','Auroros Helm Ten','Genesis HeadpieceTen','Borealis Crown Ten','Glyph Crown Ten','Fatalis Head','Fatalis Face','Golden Moon Helm','Golden Moon Cap','Silver Sol Helm','Silver Sol Cap','Leather Helm S','Chain Helm S','Hunter\'s Helm S','Hunter\'s Cap S','Bone Helm S','Bone Cap S','Velociprey Helm S','Velociprey Cap S','Battle Helm S','Battle Cap S','Vespoid Helm S','Vespoid Cap S','Hornet Helm S','Hornet Cap S','Hi-Metal Helm S','Hi-Metal Cap S','Genprey Helm S','Genprey Cap S','Kut-Ku Helm S','Kut-Ku Cap S','Ioprey Helm S','Ioprey Cap S','Gypceros Helm S','Gypceros Cap S','Cephalos Helm S','Cephalos Cap S','Rathian Helm S','Rathian Cap S','Khezu Helm S','Khezu Cap S','Rathalos Helm S','Rathalos Cap S','Plesioth Helm S','Plesioth Cap S','Basarios Helm S','Basarios Cap S','Diablo Helm S','Diablo Cap S','Monoblos Helm S','Monoblos Cap S','Gravios Helm S','Gravios Cap S','Shinobi Mask(Heaven)','Shinobi Mask (Earth)','RdGuildGuardTricorne','Red Guild Guard Mask','Red Guild Guard Hat','RedGuildGuardPiercng','Auroros Helm Haku','GenesisHeadpieceHaku','Borealis Crown Haku','Glyph Crown Haku','Dragonhead S','Dragonface S','Hermitaur Helm','Hermitaur Cap','Hermitaur Helm U','Hermitaur Cap U','Hermitaur Helm S','Hermitaur Cap S','Conga Helm','Conga Cap','Conga Helm U','Conga Cap U','Conga Helm S','Conga Cap S','Blango Helm','Blango Cap','Blango Helm U','Blango Cap U','Blango Helm S','Blango Cap S','Ceanataur Helm','Ceanataur Cap','Ceanataur Helm U','Ceanataur Cap U','Ceanataur Helm S','Ceanataur Cap S','Kirin Horn','Kirin Crest','Kirin Horn S','Kirin Crest S','Kushala Glare','Kushala Snarl','Mizuha Cap','Extravagant Cap','Empress Crown','Empress Mask','Indra Helm','Steadfast Helm','Kaiser Crown','Kaiser Mask','Guardian Spirit Mask','Carnage Mask','Golden Hair Tie','Puppet Master Mask','White Fatalis Head','White Fatalis Face','Black Belt Helm S','Giaprey Mask','Remobra Face','Guild Knight Feather','Guild Knight Mask','Maiden\'s Hat','Designer Glasses','White Piercing','BlGuildGuardTricorne','Blue GuildGuard Mask','Blue Guild Guard Hat','BluGuildGuardPiercng','Lobster Cap','Silence Piercing','Piercing of Rage','Demon Edge Piercing','Blast Piercing','Piercing of Mastery','Piercing of Pursuit','Kirin Piercing','Piercing of Might','Piercing of Fate','Echo Piercing','Amezari Head','Amezari Cap','Mafumofu Hood','Mafumofu Hood S','Giaprey Helm','Giaprey Cap','Melahoa Bloom','Melahoa Flower Hat U','Melahoa Bloom U','Makluva Gills','Makluva Hood U','Makluva Gills U','Bistro Cap U','Kut-Ku Helm','Kut-Ku Cap','Kut-Ku Helm D','Kut-Ku Cap D','Kut-Ku Helm U','Kut-Ku Cap U','Gypceros Helm D','Gypceros Cap D','Plesioth Helm D','Plesioth Cap D','Khezu Helm D','Khezu Cap D','Obituary Testa','Obituary Caput','Butterfly Testa','Butterfly Caput','Obituary Testa S','Obituary Caput S','Butterfly Testa S','Butterfly Caput S','Kushala Glare S','Kushala Snarl S','Tigrex Helm','Tigrex Cap','Tigrex Helm S','Tigrex Cap S','Death Stench Brain','Death Stench Soul','Death Stench Brain S','Death Stench Soul S','Diablo Helm D','Diablo Cap D','Gravios Helm D','Gravios Cap D','Supreme Mizuha Cap','SuprmeExtravagantCap','Kaiser Crown S','Kaiser Mask S','Rathian Heart Helm U','Rathian Heart Cap U','Rathalos Soul Helm U','Rathalos Soul Cap U','Ultimate Indra Helm','SupremeSteadfastHelm','Dark Akantor Mask','Dark Akantor Fangs','Sword Saint Piercing','Barrage Piercing','Protection Piercing','Diasorte Helm','Diasorte Cap','Pirate J Hat','Pirate J Roger','Hypno Helm X','Hypno Cap X','Lava Helm X','Lava Cap X','Garuga Helm X','Garuga Cap X','Kut-Ku Helm Z','Kut-Ku Cap Z','Gypceros Helm Z','Gypceros Cap Z','Khezu Helm Z','Khezu Cap Z','Basarios Helm X','Basarios Cap X','Plesioth Helm Z','Plesioth Cap Z','Hermitaur Helm Z','Hermitaur Cap Z','Conga Helm Z','Conga Cap Z','Rathian Heart Helm Z','Rathian Heart Cap Z','Rathalos Soul Helm Z','Rathalos Soul Cap Z','Ceanataur Helm Z','Ceanataur Cap Z','Blango Helm Z','Blango Cap Z','Auroros Helm Goku','GenesisHeadpieceGoku','Borealis Crown Goku','Glyph Crown Goku','Golden Moon Helm Z','Golden Moon Cap Z','Silver Sol Helm Z','Silver Sol Cap Z','Diablo Helm Z','Diablo Cap Z','Gravios Helm Z','Gravios Cap Z','Tigrex Helm X','Tigrex Cap X','Indra Helm Shin','Steadfast Helm Shin','Golden Hair Tie Shin','PuppetMasterMaskShin','Kirin Horn X','Kirin Crest X','Kushala Glare X','Kushala Snarl X','Mizuha Cap Shin','Extravagant Cap Shin','Kaiser Crown X','Kaiser Mask X','GuardianSprtMaskShin','Carnage Mask Shin','Fatalis Head Z','Fatalis Face Z','White Fatalis Head Z','White Fatalis Face Z','Black Belt Helm X','Black Belt Cap X','Melahoa Flower Hat Z','Melahoa Bloom Z','Makluva Hood Z','Makluva Gills Z','Chakra Piercing','Hypno Helm S','Hypno Cap S','Garuga Helm S','Garuga Cap S','Narga Helm S','Narga Cap S','Monodevil Helm U','Monodevil Cap U','Kut-Ku Helm X','Kut-Ku Cap X','Conga Helm X','Conga Cap X','Gypceros Helm X','Gypceros Cap X','Khezu Helm X','Khezu Cap X','Hermitaur Helm X','Hermitaur Cap X','Plesioth Helm X','Plesioth Cap X','Obituary Testa X','Obituary Caput X','Butterfly Testa X','Butterfly Caput X','Blango Helm X','Blango Cap X','Monoblos Helm X','Monoblos Cap X','Ceanataur Helm X','Ceanataur Cap X','Rathian Helm X','Rathian Cap X','Rathalos Helm X','Rathalos Cap X','Narga Helm X','Narga Cap X','Diablo Helm X','Diablo Cap X','Gravios Helm X','Gravios Cap X','Empress Crown X','Empress Mask X','Dragonhead X','Dragonface X','Dark Ukanlos Mask','Dark Ukanlos Fangs','Hypno Helm','Hypno Cap','Lava Helm','Lava Cap','Ambitious Piercing','Comrade Piercing','Hawkeye Piercing'],ChestArmorID:['－－－－－－','Leather Armor','Chain Mail','Hunter\'s Mail','Hunter\'s Vest','Bone Mail','Bone Vest','Velociprey Mail','Velociprey Vest','Battle Mail','Battle Vest','Vespoid Mail','Vespoid Vest','Hornet Mail','Hornet Vest','Hi-Metal Mail','Hi-Metal Vest','Genprey Mail','Genprey Vest','Kut-Ku Mail','Kut-Ku Vest','Ioprey Mail','Ioprey Vest','Gypceros Mail','Gypceros Vest','Cephalos Mail','Cephalos Vest','Steel Mail','Rathian Mail','Rathian Vest','Khezu Mail','Khezu Vest','Rathalos Mail','Rathalos Vest','Plesioth Mail','Plesioth Vest','Lobster Mail','Lobster Vest','Basarios Mail','Basarios Vest','Diablo Mail','Diablo Vest','Monoblos Mail','Monoblos Vest','Gravios Mail','Gravios Vest','Black Belt Mail','Moss Breastplate','MelahoaFlowerJacket','Makluva Cover','Bistro Jacket','Velociprey Body','Genprey Body','Ioprey Body','Shinobi Suit (Sun)','Shinobi Suit (Moon)','Guardian Suit','Guardian Vest','Helper Vest','Healer Vest','Yian Garuga Mail','Yian Garuga Vest','Auroros Torso','Genesis Torso','Borealis Chest','Glyph Chest','Black Hide','Black Skin','Leather Armor U','Chain Mail U','Hunter\'s Mail U','Hunter\'s Vest U','Bone Mail U','Bone Vest U','Giaprey Mail U','Giaprey Vest U','Battle Mail U','Battle Vest U','Vespoid Mail U','Vespoid Vest U','Hornet Mail U','Hornet Vest U','Hi-Metal Mail U','Hi-Metal Vest U','Genprey Mail U','Genprey Vest U','Kut-Ku Mail U','Kut-Ku Vest U','Ioprey Mail U','Ioprey Vest U','Gypceros Mail U','Gypceros Vest U','Cephalos Mail U','Cephalos Vest U','Steel Mail U','Rathian Heart Mail','Rathian Heart Vest','Khezu Mail U','Khezu Vest U','Rathalos Soul Mail','Rathalos Soul Vest','Plesioth Mail U','Plesioth Vest U','Basarios Mail U','Basarios Vest U','Diablo Mail U','Diablo Vest U','Monodevil Mail','Monodevil Vest','Gravios Mail U','Gravios Vest U','Shinobi Suit (Sky)','Shinobi Suit (Sea)','Guardian Suit U','Guardian Vest U','Helper Vest U','Healer Vest U','Auroros Torso Ten','Genesis Torso Ten','Borealis Chest Ten','Glyph Chest Ten','Fatalis Hide','Fatalis Skin','Golden Moon Mail','Golden Moon Vest','Silver Sol Mail','Silver Sol Vest','Leather Armor S','Chain Mail S','Hunter\'s Mail S','Hunter\'s Vest S','Bone Mail S','Bone Vest S','Velociprey Mail S','Velociprey Vest S','Battle Mail S','Battle Vest S','Vespoid Mail S','Vespoid Vest S','Hornet Mail S','Hornet Vest S','Hi-Metal Mail S','Hi-Metal Vest S','Genprey Mail S','Genprey Vest S','Kut-Ku Mail S','Kut-Ku Vest S','Ioprey Mail S','Ioprey Vest S','Gypceros Mail S','Gypceros Vest S','Cephalos Mail S','Cephalos Vest S','Steel Mail S','Rathian Mail S','Rathian Vest S','Khezu Mail S','Khezu Vest S','Rathalos Mail S','Rathalos Vest S','Plesioth Mail S','Plesioth Vest S','Basarios Mail S','Basarios Vest S','Diablo Mail S','Diablo Vest S','Monoblos Mail S','Monoblos Vest S','Gravios Mail S','Gravios Vest S','Shinobi Suit(Heaven)','Shinobi Suit (Earth)','Red Guild Guard Suit','Red Guild Guard Vest','Red Guild Guard Suit','Red Guild Guard Vest','Auroros Torso Haku','Genesis Torso Haku','Borealis Chest Haku','Glyph Chest Haku','Dragonhide S','Dragonskin S','Hermitaur Mail','Hermitaur Vest','Hermitaur Mail U','Hermitaur Vest U','Hermitaur Mail S','Hermitaur Vest S','Conga Mail ','Conga Vest','Conga Mail U','Conga Vest U','Conga Mail S','Conga Vest S','Blango Mail','Blango Vest','Blango Mail U','Blango Vest U','Blango Mail S','Blango Vest S','Ceanataur Mail','Ceanataur Vest','Ceanataur Mail U','Ceanataur Vest U','Ceanataur Mail S','Ceanataur Vest S','Kirin Jacket','Kirin Cape','Kirin Jacket S','Kirin Cape S','Kushala Cista','Kushala Vise','Mizuha Guards','Extravagant Camise','Empress Mail','Empress Vest','Indra Vest','Steadfast Vest','Kaiser Mail','Kaiser Vest','GuardianSpritRaiment','Carnage Raiment','Golden Haori','PuppetMaster Costume','White Fatalis Hide','White Fatalis Skin','Black Belt Mail S','Giaprey Body','Famitsu T-Shirt S','Remobra Suit','Guild Knight Suit','Guild Knight Vest','Maiden\'s Vest','Personal Vest','Hunter T-Shirt','Famitsu T-Shirt','Blue GuildGuard Suit','Blue GuildGuard Vest','Blue GuildGuard Suit','Blue GuildGuard Vest','Amezari Mail','Amezari Skin','Mafumofu Jacket','Mafumofu Jacket S','Giaprey Mail','Giaprey Vest','Melahoa Stalk','MelahoaFlowerJacketU','Melahoa Stalk U','Makluva Scale','Makluva Cover U','Makluva Scale U','Bistro Jacket U','Kut-Ku Mail D','Kut-Ku Vest D','Gypceros Mail D','Gypceros Vest D','Plesioth Mail D','Plesioth Vest D','Khezu Mail D','Khezu Vest D','Obituary Petto','Obituary Pectus','Butterfly Petto','Butterfly Pectus','Obituary Petto S','Obituary Pectus S','Butterfly Petto S','Butterfly Pectus S','Kushala Cista S','Kushala Vise S','Tigrex Mail','Tigrex Vest','Tigrex Mail S','Tigrex Vest S','Death Stench Muscle','Death Stench Heart','DeathStench Muscle S','Death Stench Heart S','Diablo Mail D','Diablo Vest D','Gravios Mail D','Gravios Vest D','SupremeMizuha Guards','SprmExtrvagantCamise','Kaiser Mail S','Kaiser Vest S','Rathian Heart Mail U','Rathian Heart Vest U','Rathalos Soul Mail U','Rathalos Soul Vest U','Ultimate Indra Vest','SupremeSteadfastVest','Dark Akantor Aegis','Dark Akantor Plate','Diasorte Mail','Diasorte Vest','Pirate J Suit','Pirate J Jacket','Hunting Soul T-Shirt','Hypno Mail X','Hypno Vest X','Lava Mail X','Lava Vest X','Garuga Mail X','Garuga Vest X','Kut-Ku Mail Z','Kut-Ku Vest Z','Gypceros Mail Z','Gypceros Vest Z','Khezu Mail Z','Khezu Vest Z','Basarios Mail X','Basarios Vest X','Plesioth Mail Z','Plesioth Vest Z','Hermitaur Mail Z','Hermitaur Vest Z','Conga Mail Z','Conga Vest Z','Rathian Heart Mail Z','Rathian Heart Vest Z','Rathalos Soul Mail Z','Rathalos Soul Vest Z','Ceanataur Mail Z','Ceanataur Vest Z','Blango Mail Z','Blango Vest Z','Auroros Torso Goku','Genesis Torso Goku','Borealis Chest Goku','Glyph Chest Goku','Golden Moon Mail Z','Golden Moon Vest Z','Silver Sol Mail Z','Silver Sol Vest Z','Diablo Mail Z','Diablo Vest Z','Gravios Mail Z','Gravios Vest Z','Tigrex Mail X','Tigrex Vest X','Indra Vest Shin','Steadfast Vest Shin','Golden Haori Shin','PupptMastrCostShin','Kirin Jacket X','Kirin Cape X','Kushala Cista X','Kushala Vise X','Mizuha Guards Shin','ExtrvagantCamiseShin','Kaiser Mail X','Kaiser Vest X','GuardSprRaimentShin','Carnage Raiment Shin','Fatalis Hide Z','Fatalis Skin Z','White Fatalis Hide Z','White Fatalis Skin Z','Black Belt Mail X','Black Belt Vest X','MelahoaFlowerJacketZ','Melahoa Stalk Z','Makluva Cover Z','Makluva Scale Z','Chakra Necklace','Hypno Mail S','Hypno Vest S','Garuga Mail S','Garuga Vest S','Narga Mail S','Narga Vest S','Monodevil Mail U','Monodevil Vest U','Kut-Ku Mail X','Kut-Ku Vest X','Conga Mail X','Conga Vest X','Gypceros Mail X','Gypceros Vest X','Khezu Mail X','Khezu Vest X','Hermitaur Mail X','Hermitaur Vest X','Plesioth Mail X','Plesioth Vest X','Obituary Petto X','Obituary Pectus X','Butterfly Petto X','Butterfly Pectus X','Blango Mail X','Blango Vest X','Monoblos Mail X','Monoblos Vest X','Ceanataur Mail X','Ceanataur Vest X','Rathian Mail X','Rathian Vest X','Rathalos Mail X','Rathalos Vest X','Narga Mail X','Narga Vest X','Diablo Mail X','Diablo Vest X','Gravios Mail X','Gravios Vest X','Empress Mail X','Empress Vest X','Dragonhide X','Dragonskin X','Dark Ukanlos Aegis','Dark Ukanlos Plate','HuntingSoulT-ShirtX','Hunter T-Shirt X','Famitsu T-Shirt X','Hypno Mail','Hypno Vest','Lava Mail','Lava Vest'],ArmArmorID:['－－－－－－','Leather Vambraces','Chain Vambraces','Hunter\'s Vambraces','Hunter\'s Guards','Bone Vambraces','Bone Guards','Velociprey Braces','Velociprey Guards','Battle Vambraces','Battle Guards','Vespoid Vambraces','Vespoid Guards','Hornet Vambraces','Hornet Guards','Hi-Metal Vambraces','Hi-Metal Guards','Genprey Vambraces','Genprey Guards','Kut-Ku Vambraces','Kut-Ku Guards','Ioprey Vambraces','Ioprey Guards','Gypceros Vambraces','Gypceros Guards','Cephalos Vambraces','Cephalos Guards','Steel Vambraces','Rathian Vambraces','Rathian Guards','Khezu Vambraces','Khezu Guards','Rathalos Vambraces','Rathalos Guards','Plesioth Vambraces','Plesioth Guards','Lobster Vambraces','Lobster Guards','Basarios Vambraces','Basarios Guards','Diablo Vambraces','Diablo Guards ','Monoblos Vambraces','Monoblos Guards','Gravios Vambraces','Gravios Guards','Black Belt Vambraces','Mosswine Gloves','Makluva Sleeves','Velociprey Gloves','Genprey Gloves','Ioprey Gloves','Shinobi Kote (Sun)','Shinobi Kote (Moon)','Guardian Vambraces','Guardian Guards','Helper Sleeves','Healer Sleeves','Garuga Vambraces','Garuga Guards','Auroros Gauntlets','Genesis Gauntlets','Borealis Gauntlets','Glyph Gauntlets','Black Claw','Black Fist','Leather Vambraces U','Chain Vambraces U','Hunter\'s Vambraces U','Hunter\'s Guards U','Bone Vambraces U','Bone Guards U','Giaprey Vambraces U','Giaprey Guards U','Battle Vambraces U','Battle Guards U','Vespoid Vambraces U','Vespoid Guards U','Hornet Vambraces U','Hornet Guards U','Hi-Metal Vambraces U','Hi-Metal Guards U','Genprey Vambraces U','Genprey Guards U','Kut-Ku Vambraces U','Kut-Ku Guards U','Ioprey Vambraces U','Ioprey Guards U','Gypceros Vambraces U','Gypceros Guards U','Cephalos Vambraces U','Cephalos Guards U','Steel Vambraces U','Rathian Heart Braces','Rathian Heart Guards','Khezu Vambraces U','Khezu Guards U','Rathalos Soul Braces','Rathalos Soul Guards','Plesioth Vambraces U','Plesioth Guards U','Basarios Vambraces U','Basarios Guards U','Diablo Vambraces U','Diablo Guards U','Monodevil Vambraces','Monodevil Guards','Gravios Vambraces U','Gravios Guards U','Shinobi Kote (Sky)','Shinobi Kote (Sea)','Guardian Vambraces U','Guardian Guards U','Helper Sleeves U','Healer Sleeves U','Auroros Gauntlet Ten','Genesis Gauntlet Ten','Borealis GauntletTen','Glyph Gauntlets Ten','Fatalis Claw','Fatalis Fist','Golden Moon Braces','Golden Moon Guards','Silver Sol Braces','Silver Sol Guards','Leather Vambraces S','Chain Vambraces S','Hunter\'s Vambraces S','Hunter\'s Guards S','Bone Vambraces S','Bone Guards S','Velociprey Braces S','Velociprey Guards S','Battle Vambraces S','Battle Guards S','Vespoid Vambraces S','Vespoid Guards S','Hornet Vambraces S','Hornet Guards S','Hi-Metal Vambraces S','Hi-Metal Guards S','Genprey Vambraces S','Genprey Guards S','Kut-Ku Vambraces S','Kut-Ku Guards S','Ioprey Vambraces S','Ioprey Guards S','Gypceros Vambraces S','Gypceros Guards S','Cephalos Vambraces S','Cephalos Guards S','Steel Vambraces S','Rathian Vambraces S','Rathian Guards S','Khezu Vambraces S','Khezu Guards S','Rathalos Vambraces S','Rathalos Guards S','Plesioth Vambraces S','Plesioth Guards S','Basarios Vambraces S','Basarios Guards S','Diablo Vambraces S','Diablo Guards S','Monoblos Vambraces S','Monoblos Guards S','Gravios Vambraces S','Gravios Guards S','Shinobi Kote(Heaven)','Shinobi Kote (Earth)','RedGuildGuard Gloves','RedGuildGuardSleeves','RedGuildGuard Gloves','RedGuildGuardSleeves','Auroros GauntletHaku','Genesis GauntletHaku','BorealisGauntletHaku','Glyph Gauntlets Haku','Dragonclaw S','Dragonfist S','Hermitaur Braces','Hermitaur Guards ','Hermitaur Braces U','Hermitaur Guards U','Hermitaur Braces S','Hermitaur Guards S','Conga Vambraces','Conga Guards ','Conga Vambraces U','Conga Guards U','Conga Vambraces S','Conga Guards S','Blango Vambraces','Blango Guards','Blango Vambraces U','Blango Guards U','Blango Vambraces S','Blango Guards S','Ceanataur Braces','Ceanataur Guards','Ceanataur Braces U','Ceanataur Guards U','Ceanataur Braces S','Ceanataur Guards S','Kirin Longarms','Kirin Gloves','Kirin Longarms S','Kirin Gloves S','Kushala Grip','Kushala Embrace','Mizuha Sleeves','Extravagant Sleeves','Empress Vambraces','Empress Guards','Indra Gloves','Steadfast Guards','Kaiser Vambraces','Kaiser Guards','GuardianSprtVambrces','Carnage Vambraces','Golden Kote','PuppetMaster Gloves','White Fatalis Claw','White Fatalis Fist','BlackBeltVambraces S','Giaprey Gloves','Remobra Hands','Guild Knight Gloves','Guild Knight Sleeves','Maiden\'s Sleeves','Personal Sleeves','BlueGuildGuardGloves','BluGuildGuardSleeves','BlueGuildGuardGloves','BluGuildGuardSleeves','Amezari Vambraces','Amezari Guards','Mafumofu Mittens','Mafumofu Mittens S','Giaprey Vambraces','Giaprey Guards','Melahoa Branch','Melahoa Petal','Melahoa Branch U','Melahoa Petal U','Makluva Sucker','Makluva Sleeves U','Makluva Sucker U','Kut-Ku Vambraces D','Kut-Ku Guards D','Gypceros Vambraces D','Gypceros Guards D','Plesioth Vambraces D','Plesioth Guards D','Khezu Vambraces D','Khezu Guards D','Obituary Mano','Obituary Brasso','Butterfly Mano','Butterfly Brasso','Obituary Mano S','Obituary Brasso S','Butterfly Mano S','Butterfly Brasso S','Kushala Grip S','Kushala Embrace S','Tigrex Vambraces','Tigrex Guards','Tigrex Vambraces S','Tigrex Guards S','Death Stench Grip','Death Stench Grasp','Death Stench Grip S','Death Stench Grasp S','Diablo Vambraces D','Diablo Guards D','Gravios Vambraces D','Gravios Guards D','SupremeMizuhaSleeves','SprmExtrvgantSleeves','Kaiser Vambraces S','Kaiser Guards S','Rthan Heart Braces U','Rathian HeartGuardsU','Rthlos Soul Braces U','Rthlos Soul Guards U','UltimateIndraGloves','SuprmSteadfastGuards','Dark Akantor Claw','DarkAkantor Gauntlet','Diasorte Vambraces','Diasorte Guards','Pirate J Gloves','Pirate J Cuffs','Hypno Vambraces X','Hypno Guards X','Lava Vambraces X','Lava Guards X','Garuga Vambraces X','Garuga Guards X','Kut-Ku Vambraces Z','Kut-Ku Guards Z','Gypceros Vambraces Z','Gypceros Guards Z','Khezu Vambraces Z','Khezu Guards Z','Basarios Vambraces X','Basarios Guards X','Plesioth Vambraces Z','Plesioth Guards Z','HermitaurVambracesZ','Hermitaur Guards Z','Conga Vambraces Z','Conga Guards Z','RathianHrtVambracesZ','RathianHeartGuardsZ','RathSoulVambracesZ','RathalosSoulGuardsZ','CeanataurVambracesZ','Ceanataur Guards Z','Blango Vambraces Z','Blango Guards Z','AurorosGauntletsGoku','GenesisGauntletsGoku','BorealsGauntletsGoku','Glyph Gauntlets Goku','GoldenMoonVambracesZ','Golden Moon Guards Z','SilverSolVambracesZ','Silver Sol Guards Z','Diablo Vambraces Z','Diablo Guards Z','Gravios Vambraces Z','Gravios Guards Z','Tigrex Vambraces X','Tigrex Guards X','Indra Gloves Shin','SteadfastGuardsShin','Golden Kote Shin','PupptMastrGlovesShin','Kirin Longarms X','Kirin Gloves X','Kushala Grip X','Kushala Embrace X','Mizuha Sleeves Shin','ExtrvagntSleevesShin','Kaiser Vambraces X','Kaiser Guards X','GuardSprtVmbrcesShin','CarnageVambracesShin','Fatalis Claw Z','Fatalis Fist Z','White Fatalis Claw Z','White Fatalis Fist Z','BlackBeltVambracesX','Black Belt Guards X','Melahoa Branch Z','Melahoa Petal Z','Makluva Sleeves Z','Makluva Sucker Z','Chakra Bracelet','Hypno Vambraces S','Hypno Guards S','Garuga Vambraces S','Garuga Guards S','Narga Vambraces S','Narga Guards S','MonodevilVambracesU','Monodevil Guards U','Kut-Ku Vambraces X','Kut-Ku Guards X','Conga Vambraces X','Conga Guards X','Gypceros Vambraces X','Gypceros Guards X','Khezu Vambraces X','Khezu Guards X','HermitaurVambracesX','Hermitaur Guards X','Plesioth Vambraces X','Plesioth Guards X','Obituary Mano X','Obituary Brasso X','Butterfly Mano X','Butterfly Brasso X','Blango Vambraces X','Blango Guards X','Monoblos Vambraces X','Monoblos Guards X','CeanataurVambracesX','Ceanataur Guards X','Rathian Vambraces X','Rathian Guards X','Rathalos Vambraces X','Rathalos Guards X','Narga Vambraces X','Narga Guards X','Diablo Vambraces X','Diablo Guards X','Gravios Vambraces X','Gravios Guards X','Empress Vambraces X','Empress Guards X','Dragonclaw X','Dragonfist X','Dark Ukanlos Claw','DarkUkanlosGauntlet','Hypno Vambraces','Hypno Guards','Lava Vambraces','Lava Guards'],WaistArmorID:['－－－－－－','Leather Belt','Light Belt','Chain Belt','Iron Belt','Hunter\'s Tasset','Hunter\'s Coat','Bone Tasset','Bone Coat','Velociprey Tasset','Velociprey Coat','Battle Tasset','Battle Coat','Hide Belt','Vespoid Tasset','Vespoid Coat','Hornet Tasset','Hornet Coat','Hi-Metal Tasset','Hi-Metal Coat','Genprey Tasset','Genprey Coat','Chrome Metal Coat','Kut-Ku Tasset','Kut-Ku Coat','Ioprey Tasset','Ioprey Coat','Gypceros Tasset','Gypceros Coat','Cephalos Tasset','Cephalos Coat','Steel Belt','Rathian Tasset','Rathian Coat','Khezu Tasset','Khezu Coat','Rathalos Tasset','Rathalos Coat','Basarios Tasset','Basarios Coat','Diablo Coil','Diablo Coat','Monoblos Coil','Monoblos Coat','Gravios Tasset','Gravios Coat','Black Belt Tasset','Mosswine Hip','Melahoa Skirt','Bistro Apron','Shinobi Belt (Sun)','Shinobi Belt (Moon)','Guardian Coil','Guardian Coat','Helper Skirt','Healer Frills','Garuga Tasset','Garuga Coat','Auroros Tasset','Genesis Tasset','Borealis Tasset','Glyph Tasset','Red Borealis Tasset','Red Glyph Tasset','Black Spine','Black Scale','Leather Belt U','Chain Belt U','Hunter\'s Tasset U','Hunter\'s Coat U','Bone Tasset U','Bone Coat U','Giaprey Tasset U','Giaprey Coat U','Battle Tasset U','Battle Coat U','Vespoid Tasset U','Vespoid Coat U','Hornet Tasset U','Hornet Coat U','Hi-Metal Tasset U','Hi-Metal Coat U','Genprey Tasset U','Genprey Coat U','Kut-Ku Tasset U','Kut-Ku Coat U','Ioprey Tasset U','Ioprey Coat U','Gypceros Tasset U','Gypceros Coat U','Cephalos Tasset U','Cephalos Coat U','Steel Belt U','Rathian Heart Coil','Rathian Heart Coat','Khezu Tasset U','Khezu Coat U','Rathalos Soul Coil','Rathalos Soul Coat','Basarios Tasset U','Basarios Coat U','Diablo Coil U','Diablo Coat U','Monodevil Coil','Monodevil Coat','Gravios Tasset U','Gravios Coat U','Shinobi Belt (Sky)','Shinobi Belt (Sea)','Guardian Coil U','Guardian Coat U','Helper Skirt U','Healer Frills U','Auroros Tasset Ten','Genesis Tasset Ten','Borealis Tasset Ten','Glyph Tasset Ten','Fatalis Spine','Fatalis Scales','Golden Moon Tasset ','Golden Moon Coat','Silver Sol Tasset','Silver Sol Coat','Leather Belt S','Chain Belt S','Hunter\'s Tasset S','Hunter\'s Coat S','Bone Tasset S','Bone Coat S','Velociprey Tasset S','Velociprey Coat S','Battle Tasset S','Battle Coat S','Vespoid Tasset S','Vespoid Coat S','Hornet Tasset S','Hornet Coat S','Hi-Metal Tasset S','Hi-Metal Coat S','Genprey Tasset S','Genprey Coat S','Kut-Ku Tasset S','Kut-Ku Coat S','Ioprey Tasset S','Ioprey Coat S','Gypceros Tasset S','Gypceros Coat S','Cephalos Tasset S','Cephalos Coat S','Steel Belt S','Rathian Tasset S','Rathian Coat S','Khezu Tasset S','Khezu Coat S','Rathalos Tasset S','Rathalos Coat S','Basarios Tasset S','Basarios Coat S','Diablo Coil S','Diablo Coat S','Monoblos Coil S','Monoblos Coat S','Gravios Tasset S','Gravios Coat S','Shinobi Belt(Heaven)','Shinobi Belt (Earth)','Red Guild Guard Coil','Red Guild Guard Coat','Red Guild Guard Coil','Red Guild Guard Coat','Auroros Tasset Haku','Genesis Tasset Haku','Borealis Tasset Haku','Glyph Tasset Haku','Dragon Spine S','Dragon Scales S','Hermitaur Tasset','Hermitaur Coat','Hermitaur Tasset U','Hermitaur Coat U','Hermitaur Tasset S','Hermitaur Coat S','Conga Tasset','Conga Coat','Conga Tasset U','Conga Coat U','Conga Tasset S','Conga Coat S','Blango Tasset','Blango Coat','Blango Tasset U','Blango Coat U','Blango Tasset S','Blango Coat S','Ceanataur Tasset','Ceanataur Coat','Ceanataur Tasset U','Ceanataur Coat U','Ceanataur Tasset S','Ceanataur Coat S','Kirin Hoop','Kirin Shorts','Kirin Hoop S','Kirin Shorts S','Kushala Cocoon','Kushala Wind Wrap','Mizuha Sash','Extravagant Coat','Empress Tasset','Empress Coat','Indra Wrap','Steadfast Coat','Kaiser Tasset','Kaiser Coat','Guardian Spirit Coil','Carnage Wrap','Golden Obi','Puppet Master Obi','White Fatalis Spine','White Fatalis Scale','Plesioth Tasset S','Plesioth Coat S','Black Belt Tasset S','Remobra Belt','Guild Knight Coat','Guild Knight Kilt','Maiden\'s Skirt','Personal Frills','Blue GuildGuard Coil','Blue GuildGuard Coat','Blue GuildGuard Coil','Blue GuildGuard Coat','Lobster Coil','Lobster Coat','Amezari Tasset','Amezari Coat','Mafumofu Coat','Mafumofu Coat S','Giaprey Tasset','Giaprey Coat','Melahoa Trunk','Melahoa Skirt U','Melahoa Trunk U','Makluva Coat','Makluva Fin','Makluva Coat U','Makluva Fin U','Bistro Apron U','Kut-Ku Tasset D','Kut-Ku Coat D','Gypceros Tasset D','Gypceros Coat D','Khezu Tasset D','Khezu Coat D','Obituary Anca','Obituary Cocusa','Butterfly Anca','Butterfly Cocusa','Obituary Anca S','Obituary Cocusa S','Butterfly Anca S','Butterfly Cocusa S','Kushala Cocoon S','Kushala Wind Wrap S','Tigrex Tasset','Tigrex Coat','Tigrex Tasset S','Tigrex Coat S','Death Stench Bowels','Death Stench Belly','DeathStench Bowels S','Death Stench Belly S','Diablo Coil D','Diablo Coat D','Gravios Tasset D','Gravios Coat D','Supreme Mizuha Sash','SuprmExtravagantCoat','Kaiser Tasset S','Kaiser Coat S','Rathian Heart Coil U','Rathian Heart Coat U','Rathalos Soul Coil U','Rathalos Soul Coat U','Ultimate Indra Wrap','SupremeSteadfastCoat','DarkAkantor Cincture','Dark Akantor Sash','Diasorte Coil','Diasorte Coat','Pirate J Coil','Pirate J Skirt','Hypno Tasset X','Hypno Coat X','Lava Tasset X','Lava Coat X','Garuga Tasset X','Garuga Coat X','Kut-Ku Tasset Z','Kut-Ku Coat Z','Gypceros Tasset Z','Gypceros Coat Z','Khezu Tasset Z','Khezu Coat Z','Basarios Tasset X','Basarios Coat X','Plesioth Tasset Z','Plesioth Coat Z','Hermitaur Tasset Z','Hermitaur Coat Z','Conga Tasset Z','Conga Coat Z','Rathian Heart Coil Z','Rathian Heart Coat Z','Rathalos Soul Coil Z','Rathalos Soul Coat Z','Ceanataur Tasset Z','Ceanataur Coat Z','Blango Tasset Z','Blango Coat Z','Auroros Tasset Goku','Genesis Tasset Goku','Borealis Tasset Goku','Glyph Tasset Goku','Golden Moon Coil Z','Golden Moon Coat Z','Silver Sol Coil Z','Silver Sol Coat Z','Diablo Coil Z','Diablo Coat Z','Gravios Tasset Z','Gravios Coat Z','Tigrex Tasset X','Tigrex Coat X','Indra Wrap Shin','Steadfast Coat Shin','Golden Obi Shin','PuppetMasterObiShin','Kirin Hoop X','Kirin Shorts X','Kushala Cocoon X','Kushala Wind Wrap X','Mizuha Sash Shin','ExtravagantCoatShin','Kaiser Tasset X','Kaiser Coat X','GuardianSprtCoilShin','Carnage Wrap Shin','Fatalis Spine Z','Fatalis Scale Z','WhiteFatalisSpineZ','WhiteFatalisScaleZ','Black Belt Tasset X','Black Belt Coat X','Melahoa Skirt Z','Melahoa Trunk Z','Makluva Coil Z','Makluva Fin Z','Chakra Tasset','Hypno Tasset S','Hypno Coat S','Garuga Tasset S','Garuga Coat S','Narga Tasset S','Narga Coat S','Monodevil Coil U','Monodevil Coat U','Kut-Ku Tasset X','Kut-Ku Coat X','Conga Tasset X','Conga Coat X','Gypceros Tasset X','Gypceros Coat X','Khezu Tasset X','Khezu Coat X','Hermitaur Tasset X','Hermitaur Coat X','Plesioth Tasset X','Plesioth Coat X','Obituary Anca X','Obituary Cocusa X','Butterfly Anca X','Butterfly Cocusa X','Blango Tasset X','Blango Coat X','Monoblos Coil X','Monoblos Coat X','Ceanataur Tasset X','Ceanataur Coat X','Rathian Tasset X','Rathian Coat X','Rathalos Tasset X','Rathalos Coat X','Narga Tasset X','Narga Coat X','Diablo Coil X','Diablo Coat X','Gravios Tasset X','Gravios Coat X','Empress Coil X','Empress Coat X','Dragon Spine X','Dragon Scales X','DarkUkanlosCincture','Dark Ukanlos Sash','Hypno Tasset','Hypno Coat','Lava Tasset','Lava Coat'],LegArmorID:['－－－－－－','Green Pants','Blue Pants','Hunter\'s Greaves','Hunter\'s Leggings','Bone Greaves','Bone Leggings','Velociprey Greaves','Velociprey Leggings','Battle Greaves','Battle Leggings','Silver Metal Boots','Vespoid Greaves','Vespoid Leggings','Hornet Greaves','Hornet Leggings','Hi-Metal Greaves','Hi-Metal Leggings','Dark Metal Boots','Genprey Greaves','Genprey Leggings','Pink Metal Boots','Chrome Metal Boots','Ioprey Greaves','Ioprey Leggings','Gypceros Greaves','Gypceros Leggings','Cephalos Greaves','Cephalos Leggings','Rathian Greaves','Rathian Leggings','Khezu Greaves','Khezu Leggings','Rathalos Greaves','Rathalos Leggings','Plesioth Greaves','Plesioth Leggings','Basarios Greaves','Basarios Leggings','Diablo Greaves','Diablo Leggings','Monoblos Greaves','Monoblos Leggings','Gravios Greaves','Gravios Leggings','Black Belt Greaves','Mosswine Feet','Velociprey Feet','Genprey Feet','Ioprey Feet','Shinobi Boots (Sun)','Shinobi Boots (Moon)','Guardian Boots','Guardian Pants','Helper Socks','Healer Socks','Garuga Greaves','Garuga Leggings','Auroros Pants','Genesis Pants','Borealis Pants','Glyph Pants','Red Borealis Pants','Red Glyph Pants','Black Feet','Black Legs','Cream Pants','Coffee Pants','Hunter\'s Greaves U','Hunter\'s Leggings U','Bone Greaves U','Bone Leggings U','Giaprey Greaves U','Giaprey Leggings U','Battle Greaves U','Battle Leggings U','Vespoid Greaves U','Vespoid Leggings U','Hornet Greaves U','Hornet Leggings U','Hi-Metal Greaves U','Hi-Metal Leggings U','Genprey Greaves U','Genprey Leggings U','Ioprey Greaves U','Ioprey Leggings U','Gypceros Greaves U','Gypceros Leggings U','Cephalos Greaves U','Cephalos Leggings U','Rathian HeartGreaves','RathianHeartLeggings','Khezu Greaves U','Khezu Leggings U','Rathalos SoulGreaves','RathalosSoulLeggings','Plesioth Greaves U','Plesioth Leggings U','Basarios Greaves U','Basarios Leggings U','Diablo Greaves U','Diablo Leggings U','Monodevil Greaves','Monodevil Leggings','Gravios Greaves U','Gravios Leggings U','Shinobi Boots (Sky)','Shinobi Boots (Sea)','Guardian Boots U','Guardian Pants U','Helper Socks U','Healer Socks U','Auroros Pants Ten','Genesis Pants Ten','Borealis Pants Ten','Glyph Pants Ten','Fatalis Feet','Fatalis Legs','Golden Moon Greaves','Golden Moon Leggings','Silver Sol Greaves','Silver Sol Leggings','Green Pants S','Blue Pants S','Hunter\'s Greaves S','Hunter\'s Leggings S','Bone Greaves S','Bone Leggings S','Velociprey Greaves S','Velociprey LeggingsS','Battle Greaves S','Battle Leggings S','Vespoid Greaves S','Vespoid Leggings S','Hornet Greaves S','Hornet Leggings S','Hi-Metal Greaves S','Hi-Metal Leggings S','Genprey Greaves S','Genprey Leggings S','Kut-Ku Greaves S','Kut-Ku Leggings S','Ioprey Greaves S','Ioprey Leggings S','Gypceros Greaves S','Gypceros Leggings S','Cephalos Greaves S','Cephalos Leggings S','Rathian Greaves S','Rathian Leggings S','Khezu Greaves S','Khezu Leggings S','Rathalos Greaves S','Rathalos Leggings S','Plesioth Greaves S','Plesioth Leggings S','Basarios Greaves S','Basarios Leggings S','Diablo Greaves S','Diablo Leggings S','Monoblos Greaves S','Monoblos Leggings S','Gravios Greaves S','Gravios Leggings S','ShinobiBoots(Heaven)','Shinobi Boots(Earth)','Red GuildGuard Boots','RedGuildGuard Tights','Red GuildGuard Boots','RedGuildGuard Tights','Auroros Pants Haku','Genesis Pants Haku','Borealis Pants Haku','Glyph Pants Haku','Dragonfeet S','Dragonlegs S','Hermitaur Greaves','Hermitaur Leggings','Hermitaur Greaves U','Hermitaur Leggings U','Hermitaur Greaves S','Hermitaur Leggings S','Conga Greaves','Conga Leggings','Conga Greaves U','Conga Leggings U','Conga Greaves S','Conga Leggings S','Blango Greaves','Blango Leggings','Blango Greaves U','Blango Leggings U','Blango Greaves S','Blango Leggings S','Ceanataur Greaves','Ceanataur Leggings','Ceanataur Greaves U','Ceanataur Leggings U','Ceanataur Greaves S','Ceanataur Leggings S','Kirin Leg Guards','Kirin Boots','Kirin Leg Guards S','Kirin Boots S','Kushala Crus','Kushala Shank','Mizuha Leg Wrap','Extravagant Trousers','Empress Greaves','Empress Leggings','Indra Leggings','Steadfast Boots','Kaiser Greaves','Kaiser Leggings','GuardianSpirit Boots','Carnage Boots','Golden Hakama','Puppet Master Socks','White Fatalis Feet','White Fatalis Legs','Black Belt Greaves S','Giaprey Feet','Remobra Feet','Guild Knight Boots','Guild Knight Tights','Maiden\'s Stockings','Personal Tights','BlueGuildGuard Boots','BlueGuildGuardTights','BlueGuildGuard Boots','BlueGuildGuardTights','Lobster Greaves','Lobster Leggings','Amezari Greaves','Amezari Leggings','Mafumofu Boots','Mafumofu Boots S','Giaprey Greaves','Giaprey Leggings','Melahoa Roots','Melahoa Taproot','Melahoa Roots U','Melahoa Taproot U','Makluva Pants','Makluva Leggings','Makluva Pants U','Makluva Leggings U','Kut-Ku Greaves','Kut-Ku Leggings','Kut-Ku Greaves D','Kut-Ku Leggings D','Kut-Ku Greaves U','Kut-Ku Leggings U','Gypceros Greaves D','Gypceros Leggings D','Plesioth Greaves D','Plesioth Leggings D','Khezu Greaves D','Khezu Leggings D','Obituary Gamba','Obituary Femur','Butterfly Gamba','Butterfly Femur','Obituary Gamba S','Obituary Femur S','Butterfly Gamba S','Butterfly Femur S','Kushala Crus S','Kushala Shank S','Tigrex Greaves','Tigrex Leggings','Tigrex Greaves S','Tigrex Leggings S','Death Stench Heel','Death Stench March','Death Stench Heel S','Death Stench March S','Diablo Greaves D','Diablo Leggings D','Gravios Greaves D','Gravios Leggings D','SupremeMizuhaLegWrap','SprmExtrvgntTrousers','Kaiser Greaves S','Kaiser Leggings S','RathianHeartGreavesU','RthianHeartLeggingsU','RathalosSoulGreavesU','RthalosSoulLeggingsU','UltimateIndraLggings','SupremSteadfastBoots','Dark Akantor Hessian','Dark Akantor Boots','Diasorte Greaves','Diasorte Leggings','Pirate J Boots','Pirate J Pants','Famitsu Cloth Wrap','Famitsu Cloth Wrap S','Famitsu Shorts','Famitsu Shorts S','Hypno Greaves X','Hypno Leggings X','Lava Greaves X','Lava Leggings X','Garuga Greaves X','Garuga Leggings X','Kut-Ku Greaves Z','Kut-Ku Leggings Z','Gypceros Greaves Z','Gypceros Leggings Z','Khezu Greaves Z','Khezu Leggings Z','Basarios Greaves X','Basarios Leggings X','Plesioth Greaves Z','Plesioth Leggings Z','Hermitaur Greaves Z','Hermitaur Leggings Z','Conga Greaves Z','Conga Leggings Z','RathianHeartGreavesZ','RathHeartLeggingsZ','RathalosSoulGreavesZ','RathSoulLeggingsZ','Ceanataur Greaves Z','Ceanataur Leggings Z','Blango Greaves Z','Blango Leggings Z','Auroros Pants Goku','Genesis Pants Goku','Borealis Pants Goku','Glyph Pants Goku','GoldenMoonGreavesZ','GoldenMoonLeggingsZ','Silver Sol Greaves Z','SilverSolLeggingsZ','Diablo Greaves Z','Diablo Leggings Z','Gravios Greaves Z','Gravios Leggings Z','Tigrex Greaves X','Tigrex Leggings X','Indra Leggings Shin','Steadfast Boots Shin','Golden Hakama Shin','PuppetMastrSocksShin','Kirin Leg Guards X','Kirin Boots X','Kushala Crus X','Kushala Shank X','Mizuha Leg Wrap Shin','ExtravgntTrousrsShin','Kaiser Greaves X','Kaiser Leggings X','GuardianSprtBtsShin','Carnage Boots Shin','Fatalis Feet Z','Fatalis Legs Z','White Fatalis Feet Z','White Fatalis Legs Z','Black Belt Greaves X','BlackBeltLeggingsX','Melahoa Roots Z','Melahoa Taproot Z','Makluva Pants Z','Makluva Leggings Z','Chakra Anklet','Hypno Greaves S','Hypno Leggings S','Garuga Greaves S','Garuga Leggings S','Narga Greaves S','Narga Leggings S','Monodevil Greaves U','Monodevil Leggings U','Kut-Ku Greaves X','Kut-Ku Leggings X','Conga Greaves X','Conga Leggings X','Gypceros Greaves X','Gypceros Leggings X','Khezu Greaves X','Khezu Leggings X','Hermitaur Greaves X','Hermitaur Leggings X','Plesioth Greaves X','Plesioth Leggings X','Obituary Gamba X','Obituary Femur X','Butterfly Gamba X','Butterfly Femur X','Blango Greaves X','Blango Leggings X','Monoblos Greaves X','Monoblos Leggings X','Ceanataur Greaves X','Ceanataur Leggings X','Rathian Greaves X','Rathian Leggings X','Rathalos Greaves X','Rathalos Leggings X','Narga Greaves X','Narga Leggings X','Diablo Greaves X','Diablo Leggings X','Gravios Greaves X','Gravios Leggings X','Empress Greaves X','Empress Leggings X','Dragonfeet X','Dragonlegs X','Dark Ukanlos Hessian','Dark Ukanlos Boots','Famitsu Cloth Wrap X','Famitsu Pants X','Hypno Greaves','Hypno Leggings','Lava Greaves','Lava Leggings'],WepBMID:['－－－－－－','Carbalite Sword','Carbalite Sword+','Buster Sword','Cat\'s Soul','Supremacy Blade','Buster Blade','Blue Wing','Ravager Blade','Lacerator Blade','Iron Katana','Iron Katana Grace','Iron Katana Gospel','Bone Katana Wolf','Bone Katana Shark','Bone Katana Dragon','Black Katana Mk.I','Black Katana Mk.II','Defender','Wyvern Blade Blood','Sentinel','Halberd','Wyvern Blade Leaf','Judgment','Executioner','Executioner+','Dark Scythe','Tormentor','Bone Blade','Bone Blade+','Agito','Black Katana Mk.III','Wyvern Agito','Red Stripe','Golem Blade','Valkyrie Blade','Sieglinde','Dragonslayer','Red Pincer','Finblade','Ceanataur Blade','Plesioth Watersword','Red Wing','Rathalos Firesword','Rusted Great Sword','Tarnished Great Swd','Blue Claw Blade','Ancient Blade','Bone','Dragonwood L.Sword','Fire Dragonsword','Red Dragonsword','Buster Sword+','Sword of the Diablos','Vile Serpentblade','Iron Devil','War Hammer+','War Hammer','Torment Hammer','War Mace','Iron Striker','Bull Head Hammer','Diablos Hammer','Iron Impact','Spiked Hammer','Spiked Hammer+','Crystal Hammer','Crystal Nova','Anvil Hammer','Venom Monster','Bone Axe','Lobster Hammer','Bone Broadaxe','Gigaton Hammer','Anchor Hammer','Conehead Hammer','Raven Torrent','Graviton Hammer','Hard Bone Hammer','Hard Bone Hammer+','Cyclo-Hammer','Dragonhead Hammer','Atlas Hammer','Skullcrusher','Skullcrusher+','Kut-Ku Jaw','Great Cone','Titan Hammer','Basarios Blow','Diablos Maul','Jail Hammer','Jadite Mace','Jade Mace','Gunhammer Prototype','Dead Revolver','Rusted Hammer','Tarnished Hammer','Steel Ice Hammer','Breath Core Hammer','Bone Club','Large Bone Club','Dragon Destroyer','Dragonbreaker','Iron Lance','Iron Lance+','Knight Lance','Growling Wyvern','Knight Spear','Paladin Lance','Rampart','Iron Gunlance','Babel Spear','Great Demon Hammer','Iron Gunlance+','Special Ops Gunlance','Dark Lance','Silver Rook','Dark Spear','Paralyzer','Trident','Bone Javelin','Luna\'s Howl','Spiked Spear','Aqua Spear','Luna\'s Roar','Lullaby Spear','White Gunlance','Hard Bone Lance','Hard Bone Lance+','Longhorn+','Black Gunlance','Long Tusk','Barbarian Tusk','Hellsting','Hard Hitter','Ogre Tusk','Red Tail','Scissor Gunlance','Dragonwood Gunlance','Diablo Horn','Aqua Spear+','Diablo Spear','Bone Claw Lance','Crimson War Pike','Venom Lance','Blade Stinger','Basarios Venom Spear','Gravios Spear','Gatling Lance','Gatling Lance+','Rusted Lance','Tarnished Lance','Ceanataur Stinger','Undertaker','Black Lance','Demon Lance','Odyssey','Upper Battleaxe','Hunter\'s Dagger','Hunter\'s Dagger+','Assassin\'s Dagger','Kirin Bolt','Kirin Bolt+','Rusted Replica','Kirin Bolt Ultimus','Serpent Bite','Velocidrome Bite','Viper Bite','Eternal Replica','Deathprize','Hydra Bite','Flame Syphos','Deadly Poison','Thunderbane','Princess Rapier','Frightbane','Princess Rapier+','Poison Battleaxe','Bone Kris','Bone Kris+','Osteon Pick','Osteon Pick+','Chief Kris','Red Saber','Master\'s Replica','Djinn','Blazing Falchion','Weary Finsword','Steel Ice Dagger','Sandman Finsword','Hero\'s Blade Replica','Frost Edge','Studded Club','Frost Edge+','Spiked Bat','Crimson Club','Monoblos Club','Rusted Sword','Tarnished Sword','Blue Ogre Sword','Eternal Strife','Rajang Club','Taboo Rajang Club','Black Sword','Raven Blade','Catspaw','Catburglar','Tactical Blade','Eager Cleaver','Divine Slasher','Chrome Razor','Eternal Annihilator','Finishing Hammer','Onslaught Hammer','Binder Mace','Fist of Fury','Grayburg Javelin','Requiem Spear','Spear of Prominence','Black Dragon Spear','Twin Kut-Ku','Corona','Black Dragon Sword','Odyssey+','Teddybear','Estoc','Ninja Sword','Demon Rod','Siegmund','Frozen Tuna','Great Demon Lance','Valhalla','Native Spear','Polytan','Twin Dagger','Hi Twin Daggers','Hurricane','Pink Maracas','Cyclone','Dual Tomahawk','Dual Tomahawk+','Order Rapier','Raven Tessen','Holy Saber','Prototype Saw-Slicer','Sanctioned Blades','Bone Scythe','Bone Scythe+','Cutlass','Cutlass+','Dual Diablo','Dual Diablo+','Insector','Insector+','Twin Flames','Hi Twin Flames','Gradios Ultimus','Double Dragon','Dual Dragon Ultimus','Barbaroi Blade','Crimson Goat','Shiny Rathalos Sword','Torment (Purgatory)','White Disaster','Velocidrome Bite+','Gavas Twin Iron Fans','Crimson Scythe','White Mantis','Sentoryu Raven','Teostra Blade','True Dragon\'s Jaw','Saber','Lion Dance Saber','Guardian Sword','True Devil Slicer','White Serpentblade','Plesioth Crystasword','Scythe of Menace','Enforcer\'s Axe','Plesioth Azureblade','Smolder Dragonsword','Blushing Dame','Pael Keizah','Steel Ice Blade','Steel Ice Blade+','Devil Slicer','Chrome Death Razor','Eternal Eradicator','Black Belt Blade','Expert Blade','Worn Great Sword','Weathered Grt Sword','Crab Cutter','Epitaph Blade','Bone Horn','War Drum','Sonic Glass','Sonic Glass+','Devil Masher','Sanctioned Gunhammer','War Stamp','War Basher','Metal Bagpipe','Dragon Demolisher','Khezu Horn','Kut-Ku Pick','Great Nova','Blessed Ocarina','Black Belt Hammer','Expert Hammer','Worn Hammer','Weathered Hammer','Iron Striker+','Pulsating Core','War Bongo','Blood Horn','Bronze Bell','Dragonwood Horn','Dark','Sanctioned Gunlance','Dragon Rider Spear','Incessant Raven','Black Ruiner Lance','Black Tempest','Steel Ice Spear','Steel Ice Spear+','Blue Tail','Blue Prominence','Thunderspear','Black Gravios Spear','Black Belt Lance','Expert Lance','Worn Spear','Weathered Spear','Teostra\'s Howl','Matenro','Dragonic Rim','Void Gravios Spear','Bladed Edge','Bladed Edge+','Odyssey Blade','Deadly Battleaxe','Kirin Bolt Indora','Flaming Pair','Black Ruiner Sword','Cursed Spirit','Rouge Flames','Velociprey Claws','Melting Wail','Golden Falchion','Sandman Spike','High Sandman Spike','Melynx Tool','Black Belt Sword','Expert Sword','Hi Ninja Sword','Thor\'s Dagger','Ultimus Heaven&Earth','Improved Power Saws','Guild Knight Sabers','Insect Slicer','Corpse Blades','Worn Blades','Weathered Blades','Melting Wail+','Eternal Schism','Obelion','Titernia','Ceramic Blos Lance','Death Venom Hammer','Legendary Replica','Demon Halberd','Rusty Claymore','Grind Claymore','Polytan G','Chick Decapitator','Great Demon Rod','Kirin Thundersword','Black Blade','Kirin Bolts','Ravager Blade+','Susano Blade','Daimyo Cutter','Wyvern Blade Verde','Lion King Saber','Monoblos Scythe','Frost Ripper','Imperial Sword','Fanatic Dragonwd LS','Wyvern Blade Maple','Great Demon Halberd','Gaelic Flame','Bone Horn+','War Drum+','Glass Queen','Khezu Flute','Great Bagpipe','Cursed Ocarina','War Conga','Blood Flute','Gaoren Bell','Spirit Dragonwd Horn','Steel Gunlance','Big Slugger','Hellstinger','White Cannon','Luna\'s Flare','Scissor Cannon','Black Gore Cannon','Gun Chariot','Gld Dragonwd GLance','Imperial Gunlance','Great Pincer','King Thundersword','Daora\'s Decimator','Killer\'s Scythe','Sentoryu Wolf','Rooster Decapitator','Chicken Decapitator','Diablo Destroyer','King Teostra Blade','Fatalis Blade','Fatalis Ancestor','Cat\'s Curse','Bull Tusk Hammer','Conehead Hammer+','Lunastra\'s Crown','Anchor Crusher','Wolf Torrent','Ancient Blow','Diablo Chaos Broker','Ancient Relic','Basarios Bash','Daora\'s Colossus','White Cat Hammer','Black Cat Stamp','Gold Cat Hammer','King Lobster Hammer','Violence Hammer','Bone Claw Lance+','Daora\'s Fang','Ceanataur Piercer','Incessant Wolf','Roaring Wyvern','Thunderlance','Teostra\'s Roar','Sealed Dragonlance','Emerald Spear','Strategic Blade','Black Doom Flame','Queen Rapier','Daora\'s Razor','Hi Frost Edge','Azure Ogre Sword','Wolf Blade','Twin Kut-Ku+','Funky Maracas','Limb Cutter','Wolf Tessen','Crimson Lotus Blades','Dual Chameleos','Hi Velociprey Claws','Spatula Set','Silhouette Sabers','Rookie Knife','Khezu Shock Sword','Khezu Shock Blade','Cat\'s King','Dos Fang Dagger','Melynx Gadget','Anchor Hammer+','Shining Wyvern Blade','Gavas LS Fan','Black Hammer','Poison Serpentblade','Fatalis Buster','AncientFatalisBuster','Shell Hammer','Wyvern Blade Holly','Large Bone','Blango Destroyer','Blango Destroyer+','Blango Decimator','Blango Destructor','Centenarian Dagger','Great Ogre Tusk','Silver Serpentblade','Golden Serpentblade','Deadly Serpentblade','Bronze Coin','Gaoren Coin','Bone Slasher','Golem Blade+','Spartacus Blade','Wyvern Blade Fall','Crystallized Tuna','Tiger Agito','Tigrex Great Sword','Tigrex Tooth','Tigrex Katana','Akantor Katana','Steel Lance','Naag Serpentblade','Devta Serpentblade','Gravios Venom Spear','Marine Fisher','Deep Fisher','Deep Ocean','Sea King Gunlance','Snow Gunlance','Snow Gunlance Mk. II','Blizzard Gunlance','Longhorn','Barbaroi Tusk','Crimson Lance','Ceramic Blos Lance+','Wild Bone Lance','Wild Bone Lance+','Bulldrome Spear','Fragrance','Fragrance+','Noble Fragrance','Bone Gunlance','Great Bone Gunlance','Wyvern Bone Gunlance','Hellsting+','Average Hitter','Grand Slam','Vermillion Rim','Vacuum Striker','Hyper Vacuum','Primal Spear','Tiger Stinger','Tigrex Lance','Rex Blast','Tigrex Gunlance','Akantor Gunlance','Kitchen Knife','Iron Chefblade','Millennium Knife','Velociprey Claws+','Giaprey Claws','Giaprey Claws+','White Death','Snake Bite','Snake Bite+','Twin Dagger+','Glutton\'s Set','Chereau\'s Tool','Serpent Bite+','Chief Scythe','Dual Kut-Ku','Pink Maracas+','Shaka Poison Bite','Shakalaka Saber','Felyne and Melynx','Steel Ice Dagger+','Rex Talon','Tigrex Sword','Rex Slicers','Tigrex Claws','Sakura Recorder','Gold Recorder','Black Cauldron','True Black Cauldron','One Star Silver Pot','Two Star Silver Pot','Bone Great Axe','Crater Maker','Basarios Rock','Volcanic Rock','Enormous Ham','Ham of Hams','Basarios Rock Mk.II','Dynamic Hammer','Sakura Recorder+','Khezu Horn+','Giadrome Balloon','Bull Hammer','Giaprey Balloon','Giaprey Balloon+','Ivory Horn','White Cat Stamp','Black Cat Hammer','Cactus Creamer','Green Monster','Striped Striker','Tigrex Hammer','Striped Dragonga','Tigrex Horn','Akantor Horn','Amezari Hammer','Akantor Blades','Khezu Shock Full','Khezu Shock Full+','Cat of Venus','Cat of Gold','Wailing Cleaver','Wailing Cleaver Shin','Mirage Finsword','Mirage Finsword+','Phantom Mirage','Lion Emperor Saber','Big Menacing Scythe','Monoblos Scythe+','Weiss Crescent','C.Blango Decimator','C.Blango Destructor','Master Blaze','Decider','Punisher','Igneous Blade','Igneous Sword','Liquid Fire Blade','Divine Fire Blade','GrtDemnHalberdRaksha','Gaoren Cleaver','Aqua Guardian','Atlantica','Edelweiss Ice Blade','Edelweiss Ice Blade+','Alveblade','Brünhild','Plesioth Wave Sword','Plesioth Wave Blade','Hermitaur Slicer','Hermitaur Slasher','Violet Pincer','Grand Pincer','Shogun Cutter','Killer\'s Sickle','Carmine Blade','Killer\'s Carver','Pickaxe Blade','Pickaxe Blade+','Sleep Sword Zantoma','Slaughter','Slaughter+','Poison King','Sentoryu Crow','Daito Wolf','Daito Crow','Hellish Slasher','Knockout Dragonsword','WyvernBlade Silver','WyvrnBlade Camellia','Lost Black Katana','Final Black Katana','ImperialThundersword','King Atillart Sword','Great Demon Hot Rod','Last Gaelic Flame','Eternal Destroyer','Black Fatalis Blade','Fatalis Legacy','Black Scythe','Fatalis Sickle','LgndaryFatalisSickle','Great Hornfly Saber','ExceptnlHornflySaber','AncientDragonwoodLS','AncientSlayrDrgnwdLS','Daora\'s Tughril Beg','Icesteel Blade','Daora\'s Raid','Epitaph Eternal','Teostra del Sol','10k Gavas LS Fan','Tigrex Supreme Sword','Hidden Blaze','Darkness Darkblade','Tigrex Great Katana','Hidden Saber','Shadow of the Moon','Akantor Broadsword','Akantor Broadsword+','Akantor Broadswrd S','Ukanlos Destructor','Ukanlos Slicer','Buster Blade G','Ravager Blade G','Chrome Razor G','Tactical Blade G','Cat\'s Soul G','Sentinel G','Barbaroi Blade G','Judgment G','GoldnSerpentblade G','Great Serpentblade G','PoisnSerpentblade G','Carbalite Sword G','Iron Katana G','Eager Cleaver G','Saber G','Tormentor G','Crimson Scythe G','Frost Ripper G','Blango Destroyer G','Blango Destructor G','Imperial Sword G','Bone Blade G','Golem Blade G','Siegmund G','Sieglinde G','Pael Keizah G','Blushing Dame G','Executioner G','Enforcer\'s Axe G','Plesioth Waterswd G','Plesioth Crystaswd G','Red Stripe G','Great Pincer G','Daimyo Cutter G','Killer\'s Scythe G','Decapitator G','Rathalos Firesword G','ShinyRathalosSwd G','Wyvern Agito G','True Dragon\'s Jaw G','Bone G','BoneKatan Dragon G','Red Dragonsword G','WyvernBlade Maple G','WyvernBlade Holly G','Black Katana G','Susano Blade G','FanaticDragonwdLS G','EternlAnnihilator G','Crystallized Tuna G','Black Belt Blade G','Warrior\'s Blade','TarnishdGreatSwd G','Ancient P G','Amezari Sword','Pirate J Sword','Severed Roar','G Blade','SanctionedDrillLance','Gravedigger','OuroborosSerpntblade','Gravios Lance','Gravios Fire Lance','Naar Thunderlance','Gun Chariot+','World\'s End','Luna\'s Sun','Black Gore Buster','Sea God Leviathan','Sea Abyss','Volcano Gunlance','Lavasioth Gunlance','Lost Babel','Sadalsuud','Sadalmelek','Aquarius','Ancient Destroyer','Genesis','Spark Plug','ThunderbugShockLance','Cold Icicle','Frost Icicle','Icicle Blizzard','Feather Gunlance','Feather Gunlance+','Hypno Cannon','Dragoon\'s Gáe Bulg','Incessant Crow','Crimson War Pike+','White Catastrophe','Rising Tempest','Violet Cannon','Violet Buster','Shell Claw Lance','GiantHermitaurLance','Carmine Stinger','Shish Kabob Stick','Darkness','Prominence Soul','Demonic Blizzard','Desert Slingshot','Desert Slinger','Triple Crown','Venomous Cologne','Venomous Attar','Venomous Perfume','Giant Tusk','Brutal Tusk','Heavy Bone Gunlance','Hard Bone Cannon','Full Voltage','Full Generator','High Volt Gunlance','Demonlance Rajang','DragonSealer Virtue','DragonSealer Null','Pop Corn','Large Pop Corn','True Blk Dragon Spr','True Blk Dragon Spr+','Black Smoke Gunlance','BlackDragonGunlance','TrueBlkDrgnGunlance','AncientDrgnwoodLance','AncientDrgnwoodLanc+','Daora\'s Regulus','Sky Scraper','Teostra\'s Fire','Great Tigrex Lance','Hidden Stinger','Black Rain Darklance','GreatTigrexGunlance','Hidden Gunlance','WanningMoonDarklance','AkantorNoirGunlance','Ukanlos Calamity','UkanlosBlazeGunlance','Iron Lance G','Rampart G','Roaring Wyvern G','Gatling Lance G','SanctionedGunlance G','Valhalla G','Spiked Spear G','Requiem Spear G','Trident G','Venom Lance G','Gravios Spear G','BlackGraviousSpear G','Iron Gunlance G','Imperial Gunlance G','White Cannon G','Marine Fisher G','Blizzard Gunlance G','Knight Spear G','Aqua Spear G','Emerald Spear G','Grayburg Javelin G','Long Tusk G','Great Ogre Tusk G','Crimson War Pike G','Ceramic Blos Lance G','Diablo Spear G','Bone Claw Lance G','Scissor Cannon G','Ceanataur Piercer G','Dark Spear G','Bulldrome Spear G','SpearOfProminence G','Fragrance G','Noble Fragrance G','WyvernBoneGunlance G','Grand Slam G','Hard Bone Lance G','Barbarian Tusk G','Sealed Dragonlance G','Hyper Vacuum G','Native Spear G','Black Belt Lance G','Warrior\'s Lance','GldDragonwdGLance G','Tarnished Lance G','Undertaker G','EldrDrgnGLanceEmblem','Crow Blade','Dual Battleaxe','Dual Battleaxe+','Final Battleaxe','Snow Venom','Snow Venom+','Glacial Medusa','Queen\'s Rose','Royal Rose','ChameleosDualBlades','Ice Fang','Freezing Daggers','Icicle Daggers','Frozen Death','Master Sabers','Holy Guild Knight','Alated Insect','Insect Lord','Master Odyssey','Heavy Bang','Master Bang','Thunderblade Vajra','Thunderblade Vajra+','Tornado Tomahawks','Typhoon','Firestorm','Volcanic Storm','Divine Power Saws','Black Curse','Blos Doppelganger','Grand Blos','Festive Fall Typhoon','FestiveRustlingRain','Golden Falchion+','Golden Eclipse','Punishment Blades','Red Divine Flame','Carmine Edge','Red Rippers','Dual Carapace','Dual Carapace+','Dual Scissors','Twin Shells','Twin Shears','Crow Tessen','Jungle Maracas','Evergreen','Binding Blade','Binding Blade+','Feather Knife','Feather Sword','Hi Feather Sword','Melting Blazer','ForbiddenRajangClub','Hexed Shaka Hatchet','Hexed Shaka Sword','Demonic Flaming Pair','Azure Dual Swords','Indigo Ogre Sword','True Blk Dragon Swd','True Blk Ruiner Swd','Dual Dragon Ultimus+','Black Twin Daggers','Fatalis Dual Blades','Fatalis Dual Sky','Ultimus Celestials','Ultimus Apocalypse','Daora\'s Maelstrom','Twin Nails','Twin Nails+','Fire and Ice','Eternal Sacrifice','100GavasTwinIronFans','10kGavasTwinIronFans','Tigrex Sword+','Hidden Edge','Midnight Blades','Tigrex Claws+','Hidden Ones','Ebony Wings','Akantor Shadow Claws','Ukanlos Soul Hatchet','UkanlosRuinerBlades','Hunter\'s Dagger G','Velocidrome Bite G','Thunderbane G','Kirin Bolt Indora G','Poison Battleaxe G','Deadly Battleaxe G','Millennium Knife G','White Death G','Velociprey Claws G','Snake Bite G','Deathprize G','Deadly Poison G','Queen Rapier G','Hi Frost Edge G','Dual Tomahawk G','Holy Saber G','Hi Ninja Sword G','Insector G','Glutton\'s Set G','Spatula Set G','Odyssey G','Serpent Bite G','Cyclone G','PrototypeSaw-Slicr G','Chief Kris G','Monoblos Club G','Spiked Bat G','Dual Diablo G','Kirin Bolt G','Kirin Bolt+ G','Thor\'s Dagger G','Kirin Bolts G','Sandman Finsword G','High Sandman Spike G','Djinn G','Blazing Falchion G','Corona G','Gradios Ultimus G','Bone Scythe G','Limb Cutter G','Cutlass G','Dual Kut-Ku G','Funky Maracas G','Osteon Pick G','Catburglar G','Melynx Tool G','Shakalaka Saber G','CrimsonLotusBlades G','Master\'s Blade G','Legendary Blades G','Eternal Treasure G','DualDragonUltimus G','Warrior\'s Sword','Tarnished Sword G','Worn Blades G','Eternal Strife G','Silhouette Sabers G','ShiningWyvernBlade G','Amezari Claws','Blacksmith','Juggernaut','Lava Alphorn','Volcano Alphorn','Gaoren Zhong','Gold Recorder+','Lunar Recorder','Regulation GunHammer','ImperialGunHmmrSpark','Ceanataur Head Axe','Big Blue Chopper','Carmine Axe','The Great Divider','Heavy Bagpipe','Heavy Bagpipe+','Master Bagpipe','Sforzando','Super Nova','VenomousCraterMaker','Glasya-Labolas','Volcanic Gig','Devil Masher+','Iron Devil\'s Soul','Iron Repellant','Icy Impact','Axion','Foolhardy Stone Fist','Feather Whistle','Hypno Whistle','Hypno Slide Whistle','Crow Torrent','Wolf Shamisen','Crow Shamisen','Mysterious Jaw','Purple Mace','Pitohui Bird Mace','Blood Flute+','Brute Flute','Purse Bop','Purse Bop+','Khezu Thunder','Shell Castanet','Shell Castanet+','Bi-Colored Castanet','Crabby Castanet','Klick-Klack','Glass Royale','Queen\'s Flute','Desert Cone','Magnitude','Giadrome Balloon G','Velociprey Balloon','Velociprey Balloon+','Velocidrome Balloon','Velocidrome Balloon+','Hunter\'s Horn','Hunter\'s Horn+','Native\'s Horn','Genie\'s Ocarina','Conga Conga','Jungle Bongo','Jungle Conga','Chaotic Order','Royal Lobster Hammer','Claw of Doom','Gold Cat Crusher','Fatalis Demolisher','AncientFatalisRuiner','Black Lute','Fatalis Menace','Fatalis Menace Lute','Ancient Fatalis Lied','Ancient Fatalis Lute','AncientDrgnwoodFlute','DivineAncDrgnwdFlute','Handmade Frog','Handcrafted Frog','Luna\'s Skirt','Pulse Crusher Core','Daora\'s Hyperborea','True Polytan G','Amezari Hammer+','Amezari Impact','Tigrex Hammer+','Hidden Breaker','Deep Darkhammer','Tigrex Horn+','Hidden Tone','Demon\'s Darkflute','Akantor Dark Melody','Ukanlos Trampler','Ukanlos Horned Flute','War Hammer G','Iron Striker G','Onslaught Hammer G','War Basher G','Sakura Recorder G','Dead Revolver G','SanctionedGunHammr G','Anchor Crusher G','TrueBlackCauldron G','TwoStarSilverPot G','Bone Axe G','Great Bagpipe G','Heavy Bagpipe G','Spiked Hammer G','Crystal Nova G','Titan Hammer G','Crater Maker G','Torment(Purgatory) G','Basarios Rock G','Great Demon Hammer G','Bone Club G','Enormous Ham G','Atlas Hammer G','Kut-Ku Jaw G','Kut-Ku Pick G','Venom Monster G','Binder Mace G','Khezu Flute G','Skullcrusher G','Finishing Hammer G','Dragonhead Hammer G','Basarios Bash G','Glass Queen G','Great Cone G','Bull Tusk Hammer G','Velociprey Balloon G','Bone Horn G','War Drum G','Hard Bone Hammer G','Dragonbreaker G','White Cat Hammer G','Black Cat Hammer G','Teddybear G','Cactus Creamer G','SpiritDragonwdHorn G','Black Belt Hammer G','Warrior\'s Hammer','Tarnished Hammer G','Breath Core Hammer G','Original Polytan G','Felyne and Melynx+','Ms. M.H. Puppet','Great Kris'],WepGunID:['－－－－－－','Shooter\'s Barrel','Chain Blitz','Shotgun (White)','Shotgun (Azure)','Shotgun (Green)','Shotgun (Blood)','Desert Storm','Sandfall','Maelstrom','Jade Storm','Lobster Gun','Amezari Crossbow','Tail String','Tail String+','Kut-Ku Anger','Kut-Ku Rage','Raven Do','Angel Parasol','Sakura Parasol','Tigrex Tank','Grenade Launcher','Titan Launcher','Uranos Grenade','Valkyrie Fire','Valkyrie Heart','Spartacus Fire','Spartacus Soul','Azure Sakura','Felyne Ragdoll','Melynx Ragdoll','Black Belt Bowgun','Demonlock','Blessed Lamp','Black Parasol','Great Crossbow Gun','Hornet Gun','Bullet Storm','Aqua Blade Shower','Green Blade Shower','Crimson Blade Shower','Desert Tempest','Sandfall+','Maelstrom+','Jade Tempest','King Lobster Gun','Tail Catapult','Wolf Do','Peach Parasol','Tigrex Wargun','Grenade Launcher+','Titan Launcher+','Chronos Grenade','Rajang Barrage','Valkyrie Blaze','Valkyrie Heart+','Gold Valkyrie','Spartacus Blaze','Spartacus Soul+','Silver Spartacus','Crimson Blue','Supreme Azure Sakura','Profusion','Fire Wrath','Felyne Helldoll','Melynx Helldoll','Expert Bowgun','Island of the Gods','Cursed Lamp','Dark Parasol','Bone Shooter','Rapidcaster','Monodevilcaster','Duelcaster','Quickcaster','Injector Cannon','Flechette Gun','Ladybug Cannon','Yian Kut-Ku Cannon','Blue Kut-Ku Cannon','Raven Heirloom','Tankmage','Bastionmage','Crab Buster','Meteor Cannon','Rock Eater','Tigrex Howl','Daora\'s Delphinidae','Lunastra\'s Cannon','Teostra\'s Artillery','Lao-Shan Lung Cannon','Bronze Fire','Black Cannon','Great Arbalest','Monodevilcaster+','Duelcaster+','Quickcaster+','Honeycomber','Ladybug Cannon+','Mega Kut-Ku Cannon','Wolf Heirloom','Tankmage+','Blastion Cannon','Heavy Buster Crab','Meteor Buster','Earth Eater','Tigrex Skull','Gravios Howl','Gravios Roar','Daora Grande','Teostra\'s Flames','Supreme Lao-Shan Can','Empr Lao-Shan Cannon','Gaoren\'s Fire','Vor Cannon','Destiny\'s Hand','Hunter\'s Bow I','Hunter\'s Bow II','Hunter\'s Bow III','Hunter\'s Bow IV','Hunter\'s Power BowI','Hunter\'s Power BowII','Hunter\'s PowerBowIII','Wild Bow I','Wild Bow II','Wild Bow III','Wild Bow IV','Wild Power Bow I','Wild Power Bow II','Blango Fur Bow I','Blango Fur Bow II','Blango Fur Bow III','Blango Fur Bow IV','Abominable Bow I','Kut-Ku Stave I','Kut-Ku Stave II','Kut-Ku Stave III','Blue Kut-Ku Stave I','Daimyo\'s Warbow I','Daimyo\'s Warbow II','Daimyo\'s Warbow III','Daimyo\'s Warbow IV','Sonic Bow I','Sonic Bow II','Sonic Bow III','Queen Blaster I','Queen Blaster II','Queen Blaster III','Heartshot Bow I','Heartshot Bow II','Prominence Bow I','Prominence Bow II','Prominence Bow III','Courageous Hope','Courageous Wish','Diablos Horn Bow I','Diablos Horn Bow II','Tiger Arrow I','Tiger Arrow II','Tigrex Whisker','Dragonhead Harp I','Dragon Bow Halo','Dragon Bow Solar','Dragon Bow Earth','Dragon Bow Mountain','Akantor Bow','Exterminator Bow I','Glorious Victory I','Assault Conga','Shakalaka Prized Bow','Assault Conga+','Hidden Gaze','Hi Chain Blitz','Nebula Storm','Jade Typhoon','Royal Lobster Gun','Hexed Shaka Bow','Heartfelt Cast','Combat Conga','Jungle Assault','Kut-Ku Counterattack','Kut-Ku Barrage','Owl\'s Eye Darkbow','Grenade Revolver','Warrior\'s Bowgun','Fierce Moss Green','Fierce Wine Red','Promenade','Shotgun (Snake)','Sakura Semi-Auto','Azure Semi-Auto','Pollination','Tail Launcher','Crow Do','Lava Storm','Desert Tail','Mythical Three-Horn','Gold Semi-Auto ','Silver Semi-Auto','Prosperity','Genie\'s Lamp','Titan Panzer','Chronos Panzer','EngravedFireWyvnBow','Ten-Thousand Volts','Tigrex Wargun+','Absolute Bow','Ukanlos Flame Bow','Island of the Gods G','Crossbow Gun G','Shotgun (White) G','Shotgun (Azure) G','Shotgun (Emerald) G','Shotgun (Blood) G','Hornet Gun G','Desert Tempest G','Sandfall G','Angel Parasol G','Peach Parasol G','Felyne Helldoll G','Melynx Helldoll G','Maelstrom G','Jade Typhoon G','King Lobster Gun G','Amezari Crossbow G','Hexed Shaka Bow G','Heartfelt Cast G','Combat Conga G','Jungle Assault G','Kut-Ku Counteratk G','Kut-Ku Barrage G','Dark Parasol G','Sand Diver','Piercing Crab','Desert Diver','Heavy Piercing Crab','Lunastra\'s Flames','Hidden Sniper','Great Arbalest+','Tanksorcerer','Bastionwitch','Pressurized Plesioth','Queen Needle','Power Stinger','Violet Punisher','Super Kut-Ku Cannon','Ultra Kut-Ku Cannon','Evil Wind Darkcannon','Meteor Shower','GreatLadybugCannon+','Gaia Eater','Icethrower','Crow Heirloom','Ceanataur Blaster','Terra C Blaster','UltimateLao-ShaoCan','Quick Quiver','Destiny\'s Arm','Daora\'s Ceti','Gravios Gigahowl','Gravios Gigaroar','Teostra Flamethrower','Vor Buster','Dark Duelcaster','Tigrex Skull+','AncientDrgnwoodCan','Gaoren Orb','Ukanlos Cannon','Arbalest G','Injector Cannon G','Rapidcaster G','Honeycomber G','Tanksorcerer G','Bastionwitch G','Desert Diver G','PressurizedPlesiothG','Meteor Cannon G','Black Cannon G','Power Stinger G','Queen Needle G','Lunastra\'s Flames G','SuperKut-KuCannon G','UltraKut-KuCannon G','Crab Buster G','Violet Punisher G','Monodevilcaster G','Duelcaster G','Lao-ShanLungCannon G','Hunter\'s Bow G','Hunter\'s Power BowIV','Icicle Bow I','Icicle Bow II','Blango Fur Bow G','Abominable Bow II','Wild Bow G','Wild Power Bow G','Jungle Bow I','Jungle Bow II','Kut-Ku Stave G','Blue Kut-Ku Stave II','BlueKut-KuStave III','Wolf Bow','Crow Bow','Defect Swordfish Bow','Whole Swordfish Bow','PerfectSwordfishBow','Swordfish Bow G','Sonic Bow IV','Sonic Bow G','Daimyo\'s Warbow G','Grt Purple Emperor I','GrtPurpleEmperor II','Blue Blade Bow I','Blue Blade Bow II','Blue Blade Bow III','Showroom Model','Carmine Bow','Eraser','Tigrex Whisker+','Hidden Bow','Midnight Bow','Black Bow I','Black Bow II','Black Bow G','Exterminator Bow II','Glorious Victory II','Dragon Bow Chaos','Dragon Bow Solar G','AncientDragonwoodBow','Prominence Bow IV','Prominence Bow V','Queen Blaster IV','Queen Blaster V','Heartshot Bow III','Wing Bow I','Wing Bow II','Wing Bow III','Wing Bow IV','Dragonhead Harp II','Dragonhead Harp III','Diablos Horn Bow G','Gale Horn Bow','DiablosKingHornBow','Courageous Dream','Akantor Chaos Bow','Ukanlos Bow','Khezu Bow I','Khezu Bow II','Beast Thunderbow','BeastKingThunderbow','Icy Steel Bow','Daora\'s Sagittarii','Pirate J Cannon','Diasorte Arrow'],AncRustID:['Flat Ruststone (GS/LS)','Ruststone Rod (Lance/GL)','Small Ruststone (SnS/DB)','Large Ruststone (Hammer/HH)','Ancient Flatstone (GS/LS)','Ancient StoneRod (Lance/GL)','Small Ancient Stone (SnS/DB)','Large Ancient Stone (Hammer/HH)','Ruststone','Ancient Stone'],SkillID:['None','Torso Inc','Paralysis','Sleep','Faint','Poison','Antiseptic','Snow Res','Sneak','Health','Rec Speed','Sharpness','Artisan','Fencing','Expert','SwdShrpner','Guard','Guard Up','Auto-Guard','Throw','Reload','Recoil','NormalS Up','PierceS Up','PelletS Up','NormalSAdd','PierceSAdd','PelletSAdd','Crag S Add','ClustS Add','Spc Attack','ElementAtk','BombStrUp','Hunger','Gluttony','Attack','Defense','Protection','HearProtct','Anti-Theft','Wide Area','Backpackng','All Resist','Fire Res','Water Res','Ice Res','ThunderRes','Dragon Res','Heat Res','Cold Res','WindPress','Map','Gathering','HiSpdGathr','Whim','Fate','Fishing','PsychicVis','Recovery','MixSucRate','Shot Mix','Alchemy','Evade','Potential','Everlastng','Stamina','Capacity','Precision','Cooking','Carving','Terrain','Quake Res','BBQ','Gunnery','Horn','Fatigue','Evade Dist','Sword Draw','ComrdGuide','ComradeAtk','ComradeDef','SpeedSetup','PoisonCAdd','ParalyCAdd','SleepCAdd','PowerCAdd','ClsRngCAdd','Guts','Constitutn','Tranquilzr','Perceive','ResistSts','Edgemaster','SteadyHand','Fury','AntiFirDrg','AntiDaora','AntiChamel','ShortCharg','AutoReload'],BowChargeID:['RapdLv1','RapdLv2','RapdLv3','RapdLv4','RapdLv5','SctrLv1','SctrLv2','SctrLv3','SctrLv4','SctrLv5','PrceLv1','PrceLv2','PrceLv3','PrceLv4','PrceLv5']};
 // 'mhf2' | 'mhfu'

// MHFU map names (from hexpat stages.enum values)
const MHFU_MAPS = {
  1:'Fortress',2:'Forest & Hills (Day)',3:'Desert (Day)',4:'Swamp (Day)',
  5:'Volcano (Day)',6:'Jungle (Day)',7:'Castle Schrade',8:'Battleground',
  9:'Great Arena',10:'Arena (Small)',11:'Snowy Mountain (Day)',12:'Town',
  13:'Tower 3',14:'Tower 2',15:'Tower 1',16:'Forest & Hills (Night)',
  17:'Desert (Night)',18:'Swamp (Night)',19:'Volcano (Night)',20:'Jungle (Night)',
  21:'Snowy Mountain (Night)',22:'Moat Arena',23:'Snowy Mountains Peak',
  26:'Old Jungle',27:'Old Desert',28:'Old Swamp',29:'Old Volcano',
  30:'Great Forest (Day)',31:'Great Forest (Night)'
};


// ══════════════════════════════════════════════════════════════════════════════
// MHFU STATE
// ══════════════════════════════════════════════════════════════════════════════

var fuState = {
  vdatPtr: 0,    // 0x4C always
  strTblPtr: 0,  // StringPTRTbl
  strPtr: 0,     // First StringPTRs block (all langs share same ptr in this quest)
  strOffsets: {title:0,goal:0,fail:0,details:0,monsters:0,client:0},
  strCapacity: {title:42,goal:84,fail:84,details:256,monsters:64,client:42},
  supplyPtr: 0,
  rewardPtr: 0,
  scriptPtr: 0,
  lgMonPtr: 0,
  smMonPtr: 0,
  gLocPtr: 0,
  unk2Ptr: 0,
  gItmPtr: 0,
};


// Full editable model of the loaded MHFU quest (parse → edit → serialize).
var fuModel = null;


// ── Continuous / infinite spawn ("Baby Boom") support ────────────────────────
// Verified against m60026. The wave-loop script re-triggers spawns until the
// timer ends. stage 251 = roaming (monster pool spawns across the map). The
// QuestType survival flag (byte 2 = 0x28) marks it a survival quest.
const BABYBOOM_SCRIPT = [
  [27,0,0,0],[57,0,0,0],[-1,0,0,0],[45,0,0,0],[30,0,0,0],[26,0,0,0],
  [55,0,0,0],[-1,0,0,0],[45,0,0,0],[30,0,0,0],[56,0,0,0],[-2,0,0,0],
  [9,150,0,0],[10,0,0,0],[31,0,0,0]
];

// A plain "kill the targets" script (normal hunt), for turning the toggle off.
const NORMAL_SCRIPT = [
  [27,0,0,0],[3,0,0,0],[-1,0,0,0],[45,0,0,0],[30,0,0,0],[-2,0,0,0],
  [9,150,0,0],[10,0,0,0],[31,0,0,0],[26,0,0,0],[37,0,0,0],
  [9,150,0,0],[10,0,0,0],[31,0,0,0]
];

const SPAWN_STAGE_ROAMING = 251;
   // special "all areas" stage used by Baby Boom
const QTYPE_SURVIVAL_FLAG = 0x00280000;


// ══════════════════════════════════════════════════════════════════════════════
// MHFU PARSE
// ══════════════════════════════════════════════════════════════════════════════

function parseFU(d) {
  // Validate magic at offset 4
  const magic = String.fromCharCode(d[4],d[5],d[6],d[7]);
  if (magic !== '2NDG') {
    alert('Not a valid MHFU quest file (magic: ' + magic + ', expected 2NDG)');
    return false;
  }
  const vd = ru32(d, 0x00); // VDatPTR (always 0x4C)
  fuState.vdatPtr   = vd;
  fuState.supplyPtr = ru32(d, 0x08);
  fuState.rewardPtr = ru32(d, 0x0C);
  fuState.scriptPtr = ru32(d, 0x10);
  fuState.lgMonPtr  = ru32(d, 0x14);
  fuState.smMonPtr  = ru32(d, 0x18);
  fuState.gLocPtr   = ru32(d, 0x1C);
  fuState.unk2Ptr   = ru32(d, 0x20);
  fuState.gItmPtr   = ru32(d, 0x24);
  fuState.strTblPtr = ru32(d, vd + 20);
  fuState.strPtr    = ru32(d, fuState.strTblPtr);
  const sp = fuState.strPtr;
  fuState.strOffsets = {
    title:    ru32(d, sp + 0),
    goal:     ru32(d, sp + 4),
    fail:     ru32(d, sp + 8),
    details:  ru32(d, sp + 12),
    monsters: ru32(d, sp + 16),
    client:   ru32(d, sp + 20),
  };

  // ── Build the editable model ──
  const m = { header:{}, vdat:{}, strings:{}, script:[], supply:[], rewards:[],
              largeMons:[], smallAreas:[], gather:{tables:[],itemTables:[]},
              arenaPtr:0, raw:null };
  // Keep an untouched copy of the original bytes. On save we PATCH this copy in
  // place (and append a new large-monster block at EOF) rather than rebuilding
  // the whole file from scratch — rebuilding dropped data the model doesn't
  // track and corrupted the quest. The patch approach mirrors exactly how the
  // working 2→9 Black Gravios file was produced.
  m.raw = d.slice(0);
  // Remember where the large-monster data entries live + their original 60-byte
  // contents so we preserve each entry's unmodelled dynamic data on save.
  m.lgMeta = { tablePtr: fuState.lgMonPtr, datPtr: 0, idlPtr: 0, rawEntries: [] };
  {
    const lp = fuState.lgMonPtr;
    if (lp && lp+16 <= d.length) {
      m.lgMeta.idlPtr = ru32(d, lp+8);
      m.lgMeta.datPtr = ru32(d, lp+12);
      let dp = m.lgMeta.datPtr;
      for (let k=0; k<32 && dp+60 <= d.length; k++) {
        if (ru16(d, dp) === 0xFFFF) break;
        m.lgMeta.rawEntries.push(Array.from(d.slice(dp, dp+60)));
        dp += 60;
      }
    }
  }

  // Header fixed fields
  m.header.unkn1 = ru32(d,0x2C); m.header.unkn2 = ru32(d,0x30); m.header.unkn3 = ru32(d,0x34);
  m.header.monSize = ru32(d,0x38); m.header.hrpSucc = ru32(d,0x3C); m.header.hrpFail = ru32(d,0x40);
  m.header.rank = ru8(d,0x44); m.header.spawn = ru8(d,0x45); m.header.supplyCond = ru8(d,0x46);
  m.header.unkn4 = ru8(d,0x47); m.header.unkn5 = ru8(d,0x48); m.header.unkn6 = ru8(d,0x49);
  m.header.unkn7 = ru8(d,0x4A); m.header.attackRoll = ru8(d,0x4B);

  // Visual data
  m.vdat.questType = ru32(d,vd+0);
  m.vdat.fee = ru32(d,vd+4); m.vdat.reward = ru32(d,vd+8); m.vdat.penalty = ru32(d,vd+12);
  m.vdat.timeTicks = ru32(d,vd+16);
  m.vdat.questId = ru16(d,vd+24); m.vdat.stars = ru8(d,vd+26);
  m.vdat.map = ru8(d,vd+28); m.vdat.specialCond = ru8(d,vd+29);
  m.vdat.targetId = ru16(d,vd+36); m.vdat.targetNum = ru16(d,vd+38);
  m.vdat.targetCount = ru8(d,vd+34);
  m.vdat.tgtCond = ru8(d,vd+30); m.vdat.tgtAdd = ru16(d,vd+31); m.vdat.tgtPad = ru8(d,vd+33);
  m.arenaPtr = ru32(d,vd+48);
  // Training/arena equipment sets: ArenaSet[5], each 154 bytes = 770 total
  if (m.arenaPtr && m.arenaPtr + 770 <= d.length) {
    m.arenaRaw = Array.from(d.slice(m.arenaPtr, m.arenaPtr + 770));
    m.arenaSets = parseFUArenaSets(d, m.arenaPtr);
  } else {
    m.arenaRaw = null;
    m.arenaSets = [];
  }
  // Training pointer: the F2 'qi+0x30' analogue. In FU the arena/training sets
  // hang off ArenaPTR (vd+48). Expose that as the training pointer.
  m.vdat.trainingPtr = m.arenaPtr;

  // Strings
  m.strings = {
    title:    rstr(d, fuState.strOffsets.title),
    goal:     rstr(d, fuState.strOffsets.goal),
    fail:     rstr(d, fuState.strOffsets.fail),
    details:  rstr(d, fuState.strOffsets.details),
    monsters: rstr(d, fuState.strOffsets.monsters),
    client:   rstr(d, fuState.strOffsets.client),
  };

  // Quest script packets (4×s16) — count = (supplyPtr - scriptPtr)/8
  if (fuState.scriptPtr > 0 && fuState.supplyPtr > fuState.scriptPtr) {
    const n = Math.floor((fuState.supplyPtr - fuState.scriptPtr) / 8);
    for (let i = 0; i < n && i < 64; i++) {
      const o = fuState.scriptPtr + i*8;
      m.script.push([ru16(d,o), ru16(d,o+2), ru16(d,o+4), ru16(d,o+6)]);
    }
  }

  // Supply (item u16 + amount u16, term item==0)
  { let o = fuState.supplyPtr;
    while (o+4 <= d.length) { const it=ru16(d,o); if(it===0)break;
      m.supply.push({item:it, amt:ru16(d,o+2)}); o+=4; } }

  // Rewards: blocks {unkn1,unkn2,itemsPtr} term unkn1==0xFFFF; items {chance,item,amt} term chance==0xFFFF
  { let o = fuState.rewardPtr;
    for (let b=0;b<32 && o+8<=d.length;b++){
      const u1=ru16(d,o); if(u1===0xFFFF)break;
      const u2=ru16(d,o+2), ip=ru32(d,o+4);
      const items=[]; let r=ip;
      for(let k=0;k<64 && r+6<=d.length;k++){ const ch=ru16(d,r); if(ch===0xFFFF)break;
        items.push({chance:ch, item:ru16(d,r+2), amt:ru16(d,r+4)}); r+=6; }
      m.rewards.push({unkn1:u1, unkn2:u2, items}); o+=8;
    } }

  // Large monsters: table {unkn1,unkn2,idlPtr,datPtr} term unkn1==0.
  // We collapse to a single logical list (matches the 2→9 expansion model).
  { let o = fuState.lgMonPtr;
    for (let t=0;t<8 && o+16<=d.length;t++){
      const u1=ru32(d,o); if(u1===0)break;
      const idl=ru32(d,o+8), dat=ru32(d,o+12);
      const tbl={unkn1:u1, unkn2:ru32(d,o+4), mons:[]};
      let dp=dat;
      for(let k=0;k<16 && dp+60<=d.length;k++){
        if(ru16(d,dp)===0xFFFF)break;
        tbl.mons.push({
          id:ru16(d,dp), qty:ru8(d,dp+4), pow:ru8(d,dp+5),
          a1:ru8(d,dp+6), a2:ru8(d,dp+7), stage:ru16(d,dp+8),
          dyn1:Array.from(d.slice(dp+12,dp+28)),
          rot:ru32(d,dp+28), x:rf32(d,dp+32), y:rf32(d,dp+36), z:rf32(d,dp+40),
          dyn2:Array.from(d.slice(dp+44,dp+60)),
          _raw:Array.from(d.slice(dp,dp+60)), // full original 60 bytes, preserved
        });
        dp+=60;
      }
      m.largeMons.push(tbl); o+=16;
    } }

  // Small monsters: SmallMonIndex[] → each ptr → SmallMonTable[] (16 bytes each, term u32==0)
  // SmallMonTable: { u16 stageId, u16 unk, u32 pad, u32 idlPtr, u32 datPtr }
  { let o = fuState.smMonPtr;
    const seenTblPtrs = new Set();
    m.smMeta = { ptrListOff: fuState.smMonPtr, ptrCount: 0, tablePtrs: [] };
    for (let a=0;a<32 && o+4<=d.length;a++){
      if(ru16(d,o)===0)break; const tp=ru32(d,o);
      m.smMeta.ptrCount++;
      m.smMeta.tablePtrs.push(tp);
      o+=4;
      if(seenTblPtrs.has(tp)) continue;
      seenTblPtrs.add(tp);
      let toff=tp;
      for(let t=0;t<64 && toff+16<=d.length;t++){
        if(ru16(d,toff)===0) break;
        const stg=ru16(d,toff), idl=ru32(d,toff+8), dat=ru32(d,toff+12);
        const area={stageId:stg, _tblOff:toff, _origRaw:Array.from(d.slice(toff,toff+16)), mons:[]};
        if(dat && dat+2<=d.length){
          let dp=dat;
          for(let k=0;k<32 && dp+60<=d.length;k++){
            if(ru16(d,dp)===0xFFFF)break;
            area.mons.push({
              id:ru16(d,dp), vari:ru16(d,dp+2), qty:ru8(d,dp+4), pow:ru8(d,dp+5),
              a1:ru8(d,dp+6), a2:ru8(d,dp+7),
              dyn1:Array.from(d.slice(dp+8,dp+28)),
              rot:ru32(d,dp+28), x:rf32(d,dp+32), y:rf32(d,dp+36), z:rf32(d,dp+40),
              dyn2:Array.from(d.slice(dp+44,dp+60)),
            });
            dp+=60;
          }
        }
        m.smallAreas.push(area);
        toff+=16;
      }
    } }

  // Gathering (re-uses parseFUGather which fills fuGather; copy into model)
  parseFUGather(d);
  m.gather = JSON.parse(JSON.stringify(fuGather));

  fuModel = m;
  return true;
}


// ══════════════════════════════════════════════════════════════════════════════
// MHFU POPULATE UI
// ══════════════════════════════════════════════════════════════════════════════

function populateFU(d) {
  const m = fuModel;
  // Quest params
  gv('fu-qnum').value = m.vdat.questId;
  gv('fu-star').value = m.vdat.stars;
  gv('fu-qtype').value = '0x' + m.vdat.questType.toString(16).padStart(8,'0').toUpperCase();
  gv('fu-mapid').value = m.vdat.map;
  gv('fu-speccond').value = m.vdat.specialCond;
  gv('fu-targetcount').value = m.vdat.targetCount;
  gv('fu-trainingptr').value = (m.vdat.trainingPtr>>>0) ? 'training' : '0x00000000';
  fuSyncQTypeSelFromHex();
  gv('fu-rank').value = m.header.rank;
  gv('fu-spawn').value = m.header.spawn;
  gv('fu-supplycond').value = m.header.supplyCond;
  gv('fu-difficulty').value = m.header.unkn4;
  gv('fu-carve').value = m.header.unkn5;
  gv('fu-arrive').value = m.header.unkn6;
  gv('fu-unkn7').value = m.header.unkn7;
  gv('fu-bsize').value = m.header.unkn7;
  gv('fu-attackroll').value = m.header.attackRoll;
  gv('fu-monsize').value = m.header.monSize;
  gv('fu-hrpsucc').value = m.header.hrpSucc;
  gv('fu-hrpfail').value = m.header.hrpFail;
  gv('fu-unkn1').value = '0x' + m.header.unkn1.toString(16).padStart(8,'0');
  gv('fu-unkn2').value = '0x' + m.header.unkn2.toString(16).padStart(8,'0');
  gv('fu-unkn3').value = '0x' + m.header.unkn3.toString(16).padStart(8,'0');

  // Economy
  gv('fu-fee').value = m.vdat.fee;
  gv('fu-reward').value = m.vdat.reward;
  gv('fu-penalty').value = m.vdat.penalty;
  gv('fu-time').value = (m.vdat.timeTicks/1800).toFixed(1);
  gv('fu-time-raw').textContent = 'raw: ' + m.vdat.timeTicks;

  // Target
  const tpick = document.getElementById('fu-target-pick');
  tpick.innerHTML = '';
  tpick.appendChild(makeMonsterPick('fu-target', m.vdat.targetId, {'id':'fu-target-pick-inner'}));
  gv('fu-targetnum').value = m.vdat.targetNum;
  gv('fu-carrydmg').checked = (m.vdat.tgtAdd === 0x0400 && m.vdat.tgtPad === 0x80);
  gv('fu-arenaptr').value = (m.arenaPtr>>>0) ? 'arena' : '0';

  // Strings
  gv('fu-title').value = m.strings.title;
  gv('fu-goal').value = m.strings.goal;
  gv('fu-fail').value = m.strings.fail;
  gv('fu-details').value = m.strings.details;
  gv('fu-monsters').value = m.strings.monsters;
  gv('fu-client').value = m.strings.client;
  ['title','goal','fail','details','monsters','client'].forEach(k => fuBadge(k, fuState.strCapacity[k]));

  fuRenderSupply();
  fuRenderRewards();
  fuRenderLargeMon();
  fuRenderSmallMon();
  populateFUGather(d);
  fuRenderArena();

  // Pointers panel (read-only)
  const pb = document.getElementById('fu-ptrs-body');
  if (pb) {
    const pm = {
      'VDatPTR [0x00]': ru32(d,0x00), 'SuppliesPTR [0x08]': ru32(d,0x08),
      'RewardsPTR [0x0C]': ru32(d,0x0C), 'QuestScriptPTR [0x10]': ru32(d,0x10),
      'LargeMonPTR [0x14]': ru32(d,0x14), 'SmallMonPTR [0x18]': ru32(d,0x18),
      'GatherLocPTR [0x1C]': ru32(d,0x1C), 'GatherItemsPTR [0x24]': ru32(d,0x24),
      'ArenaPTR': m.arenaPtr,
    };
    pb.innerHTML = Object.entries(pm).map(([k,v]) =>
      `<div><b style="color:var(--accent)">${k}</b> → 0x${(v>>>0).toString(16).padStart(6,'0')} (${v})</div>`).join('');
  }
}


// ── Quest-type dropdown sync (reuses F2 low-byte semantics over the u32) ──
function fuSyncQTypeSelFromHex() {
  const v = parseInt((gv('fu-qtype').value||'0').replace(/^0x/i,''),16)>>>0;
  const hex = '0x' + v.toString(16).padStart(8,'0').toUpperCase();
  const sel = gv('fu-qtype-sel');
  const opts = [...sel.options].map(o => o.value);
  if (opts.includes(hex)) { sel.value = hex; return; }
  let best = null, bestBits = 0;
  const lowV = v & 0xFF;
  for (const o of opts) {
    if (o === 'custom') continue;
    const ov = parseInt(o.replace(/^0x/i,''),16)>>>0;
    if (!ov) continue;
    if ((v & ov) === ov) {
      let bits = 0; for(let x=ov;x;x&=x-1) bits++;
      if (bits > bestBits) { best = o; bestBits = bits; }
    } else if (!best && (ov & 0xFF) === lowV) {
      best = o;
    }
  }
  sel.value = best || 'custom';
}

function fuSyncQType() {
  const sel = gv('fu-qtype-sel');
  if (sel.value === 'custom') return;
  const v = parseInt(sel.value.replace(/^0x/i,''),16)>>>0;
  gv('fu-qtype').value = '0x' + v.toString(16).padStart(8,'0').toUpperCase();
  markDirty();
}

function fuSyncQTypeFromHex() { fuSyncQTypeSelFromHex(); markDirty(); }


// ── SUPPLY (model-driven) ──
function fuRenderSupply() {
  const tb = document.getElementById('fu-supply-tbody');
  tb.innerHTML = '';
  fuModel.supply.forEach((s, i) => tb.appendChild(fuSupplyRow(i, s)));
}

function fuSupplyRow(i, s) {
  const tr = document.createElement('tr');
  const idxTd = document.createElement('td');
  idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=i;
  const itemTd = document.createElement('td');
  itemTd.appendChild(makeItemPick('fu-sup'+i, s.item, {'class':'fu-sup-pick'}));
  const amtTd = document.createElement('td');
  amtTd.innerHTML = `<input type="number" class="fu-sup-amt" min="0" max="9999" value="${s.amt}" style="width:70px">`;
  const delTd = document.createElement('td');
  delTd.style.whiteSpace='nowrap';
  delTd.innerHTML = `<button class="btn-dup" title="Duplicate" onclick="fuDupSupply(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="fuDelSupply(this)">✕</button>`;
  tr.appendChild(idxTd); tr.appendChild(itemTd); tr.appendChild(amtTd); tr.appendChild(delTd);
  return tr;
}

function fuDupSupply(btn){
  fuCommitSupply();
  const tb=document.getElementById('fu-supply-tbody');
  const idx=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(idx<0)return;
  fuModel.supply.splice(idx+1,0,JSON.parse(JSON.stringify(fuModel.supply[idx])));
  fuRenderSupply(); markDirty();
}

function fuAddSupplyRow() {
  fuCommitSupply();
  fuModel.supply.push({item:1, amt:1});
  fuRenderSupply(); markDirty();
}

function fuDelSupply(btn) {
  fuCommitSupply();
  const tb = document.getElementById('fu-supply-tbody');
  const idx = Array.from(tb.children).indexOf(btn.closest('tr'));
  if (idx>=0) fuModel.supply.splice(idx,1);
  fuRenderSupply(); markDirty();
}

function fuCommitSupply() {
  const tb = document.getElementById('fu-supply-tbody');
  if (!tb) return;
  fuModel.supply = Array.from(tb.children).map(tr => ({
    item: readItemPick(tr) & 0xFFFF,
    amt: clamp(parseInt(tr.querySelector('.fu-sup-amt').value)||0,0,9999)
  }));
}


// ── REWARDS (model-driven, F2-style blocks) ──
function fuRenderRewards() {
  const body = document.getElementById('fu-reward-body');
  body.innerHTML = '';
  fuModel.rewards.forEach((blk, bi) => {
    const div = document.createElement('div');
    div.className='card'; div.style.margin='0 14px 14px'; div.dataset.blk=bi;
    const hdr = document.createElement('div');
    hdr.className='card-hdr';
    hdr.style.cssText='display:flex;align-items:center;gap:10px';
    hdr.innerHTML = `<span>Reward Block ${bi}</span>`+
      `<span style="font-size:10px;color:var(--muted)">Unkn1</span>`+
      `<input type="text" class="fu-rb-u1" value="0x${blk.unkn1.toString(16).padStart(4,'0')}" style="width:70px;font-family:var(--mono);background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 6px;font-size:12px">`+
      `<span style="font-size:10px;color:var(--muted)">Unkn2</span>`+
      `<input type="text" class="fu-rb-u2" value="0x${blk.unkn2.toString(16).padStart(4,'0')}" style="width:70px;font-family:var(--mono);background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 6px;font-size:12px">`+
      `<button class="btn-danger" style="margin-left:auto" onclick="fuDelRewardBlock(this)">✕ Block</button>`;
    div.appendChild(hdr);
    const tbl = document.createElement('table');
    tbl.innerHTML = '<thead><tr><th>#</th><th>Chance %</th><th>Item</th><th>Amount</th><th></th></tr></thead>';
    const tb = document.createElement('tbody'); tb.className='fu-rb-entries';
    blk.items.forEach((it,ri)=>tb.appendChild(fuRewardRow(ri,it)));
    tbl.appendChild(tb); div.appendChild(tbl);
    const add=document.createElement('button');
    add.className='btn-add'; add.style.margin='8px 14px 14px'; add.textContent='+ Add Entry';
    add.onclick=()=>{ fuCommitRewards(); fuModel.rewards[bi].items.push({chance:100,item:1,amt:1}); fuRenderRewards(); markDirty(); };
    div.appendChild(add);
    body.appendChild(div);
  });
}

function fuRewardRow(ri, it) {
  const tr=document.createElement('tr');
  const riTd=document.createElement('td'); riTd.style.cssText='color:var(--muted);font-family:var(--mono)'; riTd.textContent=ri;
  const chTd=document.createElement('td'); chTd.innerHTML=`<input type="number" class="fu-re-ch" min="0" max="100" value="${it.chance}" style="width:60px">`;
  const itTd=document.createElement('td'); itTd.appendChild(makeItemPick('fu-re'+ri, it.item, {'class':'fu-re-pick'}));
  const amTd=document.createElement('td'); amTd.innerHTML=`<input type="number" class="fu-re-amt" min="0" max="9999" value="${it.amt}" style="width:60px">`;
  const delTd=document.createElement('td'); delTd.style.whiteSpace='nowrap';
  delTd.innerHTML=`<button class="btn-dup" title="Duplicate" onclick="fuDupRewardRow(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="fuDelRewardRow(this)">✕</button>`;
  tr.appendChild(riTd); tr.appendChild(chTd); tr.appendChild(itTd); tr.appendChild(amTd); tr.appendChild(delTd);
  return tr;
}

function fuDupRewardRow(btn){
  fuCommitRewards();
  const blkDiv=btn.closest('[data-blk]'); const bi=+blkDiv.dataset.blk;
  const tb=blkDiv.querySelector('.fu-rb-entries');
  const ri=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(ri<0)return;
  fuModel.rewards[bi].items.splice(ri+1,0,JSON.parse(JSON.stringify(fuModel.rewards[bi].items[ri])));
  fuRenderRewards(); markDirty();
}

function fuAddRewardBlock() { fuCommitRewards(); fuModel.rewards.push({unkn1:1,unkn2:0,items:[{chance:100,item:1,amt:1}]}); fuRenderRewards(); markDirty(); }

function fuDelRewardBlock(btn) { fuCommitRewards(); const bi=+btn.closest('[data-blk]').dataset.blk; fuModel.rewards.splice(bi,1); fuRenderRewards(); markDirty(); }

function fuDelRewardRow(btn) {
  fuCommitRewards();
  const blkDiv=btn.closest('[data-blk]'); const bi=+blkDiv.dataset.blk;
  const tb=blkDiv.querySelector('.fu-rb-entries');
  const ri=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(ri>=0) fuModel.rewards[bi].items.splice(ri,1);
  fuRenderRewards(); markDirty();
}

function fuCommitRewards() {
  const body=document.getElementById('fu-reward-body'); if(!body)return;
  fuModel.rewards = Array.from(body.querySelectorAll('[data-blk]')).map(div=>({
    unkn1: parseInt((div.querySelector('.fu-rb-u1').value||'0').replace(/^0x/i,''),16)||0,
    unkn2: parseInt((div.querySelector('.fu-rb-u2').value||'0').replace(/^0x/i,''),16)||0,
    items: Array.from(div.querySelectorAll('.fu-rb-entries tr')).map(tr=>({
      chance: clamp(parseInt(tr.querySelector('.fu-re-ch').value)||0,0,100),
      item: readItemPick(tr) & 0xFFFF,
      amt: clamp(parseInt(tr.querySelector('.fu-re-amt').value)||0,0,9999)
    }))
  }));
}


// ── LARGE MONSTERS (model-driven, max 10) ──
function fuRenderLargeMon() {
  const body=document.getElementById('fu-largemon-body'); body.innerHTML='';
  // Single logical list = first table's monsters (merge any extra tables in).
  const mons = fuLargeMonList();
  const tbl=document.createElement('table');
  tbl.innerHTML='<thead><tr><th>#</th><th>Monster</th><th>Qty</th><th>Power</th><th>Attr1</th><th>Attr2</th><th>Stage</th><th>Orient</th><th>X</th><th>Y</th><th>Z</th><th></th></tr></thead>';
  const tb=document.createElement('tbody'); tb.id='fu-lg-tbody';
  mons.forEach((mn,i)=>tb.appendChild(fuLargeMonRow(i,mn)));
  tbl.appendChild(tb); body.appendChild(tbl);
  const note=document.createElement('div'); note.className='note';
  note.innerHTML = `${mons.length} monster${mons.length!==1?'s':''}.` +
    (mons.length > 10 ? ' <span style="color:var(--danger)">Warning: &gt;10 may be unstable!</span>' : '');
  body.appendChild(note);
  // Sync the Baby Boom checkbox with the loaded quest's script.
  const bb = document.getElementById('fu-babyboom');
  if (bb) bb.checked = fuDetectBabyBoom();
}

function fuLargeMonList() {
  // flatten all tables' mons into one array (keep stage on each)
  if (!fuModel._lgList) {
    fuModel._lgList = [];
    fuModel.largeMons.forEach(t => t.mons.forEach(mn => fuModel._lgList.push(mn)));
  }
  return fuModel._lgList;
}

function fuLargeMonRow(i, mn) {
  const tr=document.createElement('tr'); tr.dataset.di=i;
  const idxTd=document.createElement('td'); idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=i;
  const monTd=document.createElement('td'); monTd.appendChild(makeMonsterPick('fu-lg'+i, mn.id, {'class':'fu-lg-pick'}));
  tr.appendChild(idxTd); tr.appendChild(monTd);
  tr.insertAdjacentHTML('beforeend',
    `<td><input type="number" class="fu-lg-qty" min="0" max="255" value="${mn.qty}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-lg-pow" min="0" max="255" value="${mn.pow}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-lg-a1" min="0" max="255" value="${mn.a1}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-lg-a2" min="0" max="255" value="${mn.a2}" style="width:50px"></td>`+
    `<td><select class="fu-lg-stg">${stageOpts(mn.stage, true)}</select></td>`+
    `<td><input type="number" class="fu-lg-rot" value="${mn.rot}" style="width:90px"></td>`+
    `<td><input type="number" class="fu-lg-x" step="0.1" value="${(mn.x||0).toFixed(1)}" style="width:80px"></td>`+
    `<td><input type="number" class="fu-lg-y" step="0.1" value="${(mn.y||0).toFixed(1)}" style="width:80px"></td>`+
    `<td><input type="number" class="fu-lg-z" step="0.1" value="${(mn.z||0).toFixed(1)}" style="width:80px"></td>`+
    `<td style="white-space:nowrap">`+
      `<button class="btn-dup" title="Duplicate this monster" onclick="fuDupLargeMon(this)">⧉</button> `+
      `<button class="btn-danger" title="Delete" onclick="fuDelLargeMon(this)">✕</button></td>`);
  return tr;
}


// Duplicate a large-monster entry (clone all fields; user then tweaks coords).
function fuDupLargeMon(btn) {
  fuCommitLargeMon();
  const list = fuLargeMonList();
  const tb = document.getElementById('fu-lg-tbody');
  const idx = Array.from(tb.children).indexOf(btn.closest('tr'));
  if (idx < 0) return;
  const clone = JSON.parse(JSON.stringify(list[idx]));
  list.splice(idx+1, 0, clone);
  fuRenderLargeMon(); markDirty();
}

function fuAddLargeMon() {
  fuCommitLargeMon();
  const list=fuLargeMonList();
  list.push({id:0x2F,qty:1,pow:0,a1:0,a2:0,stage:0,dyn1:new Array(16).fill(0),rot:0,x:0,y:0,z:0,dyn2:new Array(16).fill(0)});
  fuRenderLargeMon(); markDirty();
}

function fuDelLargeMon(btn) {
  fuCommitLargeMon();
  const tb=document.getElementById('fu-lg-tbody');
  const idx=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(idx>=0) fuLargeMonList().splice(idx,1);
  fuRenderLargeMon(); markDirty();
}

function fuCommitLargeMon() {
  const tb=document.getElementById('fu-lg-tbody'); if(!tb)return;
  const list=fuLargeMonList();
  Array.from(tb.children).forEach((tr)=>{
    const i=+tr.dataset.di; const mn=list[i]; if(!mn)return;
    mn.id = readMonsterPick(tr) & 0xFFFF;
    mn.qty=clamp(parseInt(tr.querySelector('.fu-lg-qty').value)||0,0,255);
    mn.pow=clamp(parseInt(tr.querySelector('.fu-lg-pow').value)||0,0,255);
    mn.a1=clamp(parseInt(tr.querySelector('.fu-lg-a1').value)||0,0,255);
    mn.a2=clamp(parseInt(tr.querySelector('.fu-lg-a2').value)||0,0,255);
    mn.stage=clamp(parseInt(tr.querySelector('.fu-lg-stg').value)||0,0,65535);
    mn.rot=(parseInt(tr.querySelector('.fu-lg-rot').value)||0)>>>0;
    mn.x=parseFloat(tr.querySelector('.fu-lg-x').value)||0;
    mn.y=parseFloat(tr.querySelector('.fu-lg-y').value)||0;
    mn.z=parseFloat(tr.querySelector('.fu-lg-z').value)||0;
  });
}


// Toggle the infinite/continuous "Baby Boom" spawn behaviour for MHFU.
function fuToggleBabyBoom(on) {
  fuCommitLargeMon();
  const m = fuModel; if (!m) return;
  if (on) {
    m.script = JSON.parse(JSON.stringify(BABYBOOM_SCRIPT));
    m.vdat.questType = ((m.vdat.questType >>> 0) | QTYPE_SURVIVAL_FLAG) >>> 0;
    fuLargeMonList().forEach(mn => {
      mn.stage = SPAWN_STAGE_ROAMING;
      if (!mn.qty || mn.qty < 2) mn.qty = 10; // sensible default pool size
    });
  } else {
    m.script = JSON.parse(JSON.stringify(NORMAL_SCRIPT));
    m.vdat.questType = (m.vdat.questType >>> 0) & ~QTYPE_SURVIVAL_FLAG;
  }
  // Reflect changes in the UI
  gv('fu-qtype').value = '0x' + (m.vdat.questType>>>0).toString(16).padStart(8,'0').toUpperCase();
  if (typeof fuSyncQTypeSelFromHex === 'function') fuSyncQTypeSelFromHex();
  fuRenderLargeMon();
  markDirty();
}


// Detect whether the loaded quest already uses the Baby Boom wave loop.
function fuDetectBabyBoom() {
  const m = fuModel; if (!m || !m.script) return false;
  const ops = m.script.map(p => p[0]);
  return ops.includes(57) && ops.includes(55) && ops.includes(56);
}


// ── SMALL MONSTERS (model-driven, per area) ──
function fuRenderSmallMon() {
  const body=document.getElementById('fu-smallmon-body'); body.innerHTML='';
  if(!fuModel.smallAreas.length){ body.innerHTML='<div class="note">No small-monster areas. Use "+ Add Area".</div>'; }
  fuModel.smallAreas.forEach((area,ai)=>{
    const card=document.createElement('div'); card.className='card'; card.style.marginBottom='12px'; card.dataset.area=ai;
    const stg=area.stageId;
    card.innerHTML=`<div class="card-hdr" style="display:flex;align-items:center;gap:10px">`+
      `<span>Small Monsters — Area ${ai}</span>`+
      `<select class="fu-sm-stage" style="font-size:11px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(stg, true)}</select>`+
      `<button class="btn-danger" style="margin-left:auto" onclick="fuDelSmallArea(this)">✕ Area</button></div>`;
    const tbl=document.createElement('table');
    tbl.innerHTML='<thead><tr><th>#</th><th>Monster</th><th>Variant</th><th>Qty</th><th>Power</th><th>Attr1</th><th>Attr2</th><th>Orient</th><th>X</th><th>Y</th><th>Z</th><th></th></tr></thead>';
    const tb=document.createElement('tbody'); tb.className='fu-sm-entries';
    area.mons.forEach((mn,mi)=>tb.appendChild(fuSmallMonRow(mi,mn)));
    tbl.appendChild(tb); card.appendChild(tbl);
    const add=document.createElement('button'); add.className='btn-add'; add.style.margin='8px 14px 14px';
    add.textContent='+ Add Spawn'; add.onclick=()=>{ fuCommitSmallMon(); fuModel.smallAreas[ai].mons.push({id:0x02,vari:0,qty:1,pow:0,a1:0,a2:0,dyn1:new Array(20).fill(0),rot:0,x:0,y:0,z:0,dyn2:new Array(16).fill(0)}); fuRenderSmallMon(); markDirty(); };
    card.appendChild(add);
    body.appendChild(card);
  });
}

function fuSmallMonRow(i, mn) {
  const tr=document.createElement('tr'); tr.dataset.di=i;
  const idxTd=document.createElement('td'); idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=i;
  const monTd=document.createElement('td'); monTd.appendChild(makeMonsterPick('fu-sm'+i, mn.id, {'class':'fu-sm-pick'}));
  tr.appendChild(idxTd); tr.appendChild(monTd);
  tr.insertAdjacentHTML('beforeend',
    `<td><input type="number" class="fu-sm-vari" min="0" max="65535" value="${mn.vari||0}" style="width:50px" title="Subtype (e.g. Boulder: 0=breakable, 1=unbreakable, 3=ice)"></td>`+
    `<td><input type="number" class="fu-sm-qty" min="0" max="255" value="${mn.qty}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-sm-pow" min="0" max="255" value="${mn.pow}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-sm-a1" min="0" max="255" value="${mn.a1}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-sm-a2" min="0" max="255" value="${mn.a2}" style="width:50px"></td>`+
    `<td><input type="number" class="fu-sm-rot" value="${mn.rot}" style="width:90px"></td>`+
    `<td><input type="number" class="fu-sm-x" step="0.1" value="${(mn.x||0).toFixed(1)}" style="width:80px"></td>`+
    `<td><input type="number" class="fu-sm-y" step="0.1" value="${(mn.y||0).toFixed(1)}" style="width:80px"></td>`+
    `<td><input type="number" class="fu-sm-z" step="0.1" value="${(mn.z||0).toFixed(1)}" style="width:80px"></td>`+
    `<td style="white-space:nowrap"><button class="btn-dup" title="Duplicate" onclick="fuDupSmallMon(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="fuDelSmallMon(this)">✕</button></td>`);
  return tr;
}

function fuDupSmallMon(btn){
  fuCommitSmallMon();
  const card=btn.closest('[data-area]'); const ai=+card.dataset.area;
  const tb=card.querySelector('.fu-sm-entries');
  const mi=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(mi<0)return;
  fuModel.smallAreas[ai].mons.splice(mi+1,0,JSON.parse(JSON.stringify(fuModel.smallAreas[ai].mons[mi])));
  fuRenderSmallMon(); markDirty();
}

function fuAddSmallArea() { fuCommitSmallMon(); fuModel.smallAreas.push({stageId: fuModel.vdat.map||1, mons:[]}); fuRenderSmallMon(); markDirty(); }

function fuDelSmallArea(btn) { fuCommitSmallMon(); const ai=+btn.closest('[data-area]').dataset.area; fuModel.smallAreas.splice(ai,1); fuRenderSmallMon(); markDirty(); }

function fuDelSmallMon(btn) {
  fuCommitSmallMon();
  const card=btn.closest('[data-area]'); const ai=+card.dataset.area;
  const tb=card.querySelector('.fu-sm-entries');
  const mi=Array.from(tb.children).indexOf(btn.closest('tr'));
  if(mi>=0) fuModel.smallAreas[ai].mons.splice(mi,1);
  fuRenderSmallMon(); markDirty();
}

function fuCommitSmallMon() {
  const body=document.getElementById('fu-smallmon-body'); if(!body)return;
  Array.from(body.querySelectorAll('[data-area]')).forEach(card=>{
    const ai=+card.dataset.area; const area=fuModel.smallAreas[ai]; if(!area)return;
    area.stageId = clamp(parseInt(card.querySelector('.fu-sm-stage').value)||0,0,65535);
    Array.from(card.querySelectorAll('.fu-sm-entries tr')).forEach(tr=>{
      const i=+tr.dataset.di; const mn=area.mons[i]; if(!mn)return;
      mn.id=readMonsterPick(tr)&0xFFFF;
      mn.vari=clamp(parseInt(tr.querySelector('.fu-sm-vari').value)||0,0,65535);
      mn.qty=clamp(parseInt(tr.querySelector('.fu-sm-qty').value)||0,0,255);
      mn.pow=clamp(parseInt(tr.querySelector('.fu-sm-pow').value)||0,0,255);
      mn.a1=clamp(parseInt(tr.querySelector('.fu-sm-a1').value)||0,0,255);
      mn.a2=clamp(parseInt(tr.querySelector('.fu-sm-a2').value)||0,0,255);
      mn.rot=(parseInt(tr.querySelector('.fu-sm-rot').value)||0)>>>0;
      mn.x=parseFloat(tr.querySelector('.fu-sm-x').value)||0;
      mn.y=parseFloat(tr.querySelector('.fu-sm-y').value)||0;
      mn.z=parseFloat(tr.querySelector('.fu-sm-z').value)||0;
    });
  });
}


function fuBadge(field, cap) {
  const el = document.getElementById('fu-' + field);
  const badge = document.getElementById('fu-b-' + field);
  if (!el || !badge) return;
  const len = new TextEncoder().encode(el.value).length;
  badge.textContent = len + ' / ' + cap;
  badge.style.color = len > cap ? 'var(--danger)' : '';
}


// ══════════════════════════════════════════════════════════════════════════════
// MHFU APPLY CHANGES (save back to binary)
// ══════════════════════════════════════════════════════════════════════════════

function applyChangesFU() {
  // Pull all UI edits back into the model first
  fuCommitSupply();
  fuCommitRewards();
  fuCommitLargeMon();
  fuCommitArena();
  fuCommitSmallMon();
  fuCommitGather();

  const m = fuModel;

  // Scalar fields from the Quest Info / Spawn / Fixed tabs
  m.vdat.questId   = clamp(parseInt(gv('fu-qnum').value)||0,0,65535);
  m.vdat.stars     = clamp(parseInt(gv('fu-star').value)||1,1,11);
  m.vdat.questType = parseInt((gv('fu-qtype').value||'0').replace(/^0x/i,''),16)>>>0;
  m.vdat.map       = parseInt(gv('fu-mapid').value)||0;
  m.vdat.specialCond = clamp(parseInt(gv('fu-speccond').value)||0,0,255);
  m.vdat.targetCount = clamp(parseInt(gv('fu-targetcount').value)||0,0,2);
  m.vdat.fee       = clamp(parseInt(gv('fu-fee').value)||0,0,9999999);
  m.vdat.reward    = clamp(parseInt(gv('fu-reward').value)||0,0,9999999);
  m.vdat.penalty   = clamp(parseInt(gv('fu-penalty').value)||0,0,9999999);
  m.vdat.timeTicks = Math.round((parseFloat(gv('fu-time').value)||0)*1800);
  const tpSel = gv('fu-trainingptr').value;
  if (tpSel === 'training') { if(!m.vdat.trainingPtr) m.vdat.trainingPtr = m.arenaPtr || 0x100; }
  else m.vdat.trainingPtr = 0;
  const apSel = gv('fu-arenaptr').value;
  if (apSel === 'arena') { if(!m.arenaPtr) m.arenaPtr = m.vdat.trainingPtr || 0x100; }
  else m.arenaPtr = 0;

  const tpickEl = document.getElementById('fu-target-pick-inner') ||
    document.querySelector('#fu-target-pick .monster-pick');
  m.vdat.targetId  = tpickEl ? (readMonsterPick(tpickEl) & 0xFFFF) : 0;
  m.vdat.targetNum = clamp(parseInt(gv('fu-targetnum').value)||0,0,10);
  if (gv('fu-carrydmg').checked) {
    m.vdat.tgtCond=1; m.vdat.tgtAdd=0x0400; m.vdat.tgtPad=0x80;
  } else {
    m.vdat.tgtCond=1; m.vdat.tgtAdd=0x0101; m.vdat.tgtPad=0x02;
  }

  m.header.rank=clamp(parseInt(gv('fu-rank').value)||0,0,5);
  m.header.spawn=clamp(parseInt(gv('fu-spawn').value)||0,0,255);
  m.header.supplyCond=clamp(parseInt(gv('fu-supplycond').value)||0,0,255);
  m.header.unkn4=clamp(parseInt(gv('fu-difficulty').value)||0,0,255);
  m.header.unkn5=clamp(parseInt(gv('fu-carve').value)||0,0,255);
  m.header.unkn6=clamp(parseInt(gv('fu-arrive').value)||0,0,255);
  m.header.unkn7=clamp(parseInt(gv('fu-bsize').value)||0,0,255);
  gv('fu-unkn7').value=m.header.unkn7;
  m.header.attackRoll=clamp(parseInt(gv('fu-attackroll').value)||0,0,255);
  m.header.monSize=clamp(parseInt(gv('fu-monsize').value)||0,0,0xFFFFFFFF);
  m.header.hrpSucc=clamp(parseInt(gv('fu-hrpsucc').value)||0,0,9999);
  m.header.hrpFail=clamp(parseInt(gv('fu-hrpfail').value)||0,0,9999);
  m.header.unkn1=parseInt((gv('fu-unkn1').value||'0').replace(/^0x/i,''),16)>>>0;
  m.header.unkn2=parseInt((gv('fu-unkn2').value||'0').replace(/^0x/i,''),16)>>>0;
  m.header.unkn3=parseInt((gv('fu-unkn3').value||'0').replace(/^0x/i,''),16)>>>0;

  m.strings = {
    title:gv('fu-title').value, goal:gv('fu-goal').value, fail:gv('fu-fail').value,
    details:gv('fu-details').value, monsters:gv('fu-monsters').value, client:gv('fu-client').value
  };

  // Rebuild the whole binary from the model and swap it in
  D = serializeFU(m);
  applyEUTexts(D, 'mhfu');
  // Re-parse so offsets/state and the Hex tab stay consistent
  parseFU(D);
  if (typeof renderHex === 'function') renderHex(D);
}


// ── Pull gather-tab edits into the model ──
function fuCommitGather() {
  const g = fuModel && fuModel.gather;
  if (!g) return;
  // Node tables (now div-based)
  document.querySelectorAll('#fu-gathernodes-body .fu-gn-row').forEach(div => {
    const ti = +div.dataset.gt, ni = +div.dataset.gn;
    const tbl = g.tables[ti]; if (!tbl) return;
    const n = tbl.nodes[ni]; if (!n) return;
    const q = (f) => { const el=div.querySelector(`[data-f="${f}"]`); return el ? el.value : null; };
    const x=q('x'); if(x!==null) n.x=parseFloat(x)||0;
    const y=q('y'); if(y!==null) n.y=parseFloat(y)||0;
    const z=q('z'); if(z!==null) n.z=parseFloat(z)||0;
    const mm=q('mm'); if(mm!==null) n.maxMine=parseFloat(mm)||0;
    const ii=q('ii'); if(ii!==null) n.itemIdx=parseInt(ii)||0;
    const unk=q('unk'); if(unk!==null) n.unkn=parseInt(unk)||0;
    const ty=q('ty'); if(ty!==null) n.type=parseInt(ty)||0;
    const mt=q('mt'); if(mt!==null) n.maxTimes=parseInt(mt)||0;
  });
  // Item tables (both inline and unreferenced)
  document.querySelectorAll('[data-git]').forEach(el => {
    const ti = +el.dataset.git; const tbl = g.itemTables[ti]; if (!tbl) return;
    el.querySelectorAll('.fu-gi-rows tr').forEach(tr => {
      const ii = +tr.dataset.gii; const it = tbl.items[ii]; if (!it) return;
      const v = tr.querySelector('[data-f="val"]');
      if (v) it.value = parseInt(v.value)||0;
      it.item = readItemPick(tr) & 0xFFFF;
    });
  });
}


// ════════════════════════════════════════════════════════════════════════════
// FU SERIALIZER — build a fresh binary from the model with recomputed pointers.
// Layout order:  Header(0x4C) Visual(0x4C..) Strings StringPtrs StringTbl
//   Script Supply Rewards(tbl+items) LargeMon(tbl+idlist+data)
//   SmallMon(index+tables+idlists+data) GatherLoc(tbl+nodelists)
//   GatherItems(tbl+lists) Unk2  [Arena untouched/omitted]
// All section pointers in the header & visual block are rewritten.
// This is what makes add/remove/grow work for every section.
// ════════════════════════════════════════════════════════════════════════════
function serializeFU(m) {
  // ── IN-PLACE PATCHER (not a full rebuild) ──────────────────────────────────
  // Start from the original bytes and patch only what changed. The large-monster
  // block (ID list + 60-byte data entries + table) is rebuilt and appended at the
  // end of the file, then LargeMonPTR is repointed — exactly how the working
  // 2→9 Black Gravios file was produced. Nothing else in the file is moved, so
  // unmodelled data (arena sets, dynamic data, exact string layout, gather, small
  // monsters, script slack, etc.) stays byte-for-byte intact.
  if (!m.raw) {
    // No original bytes (e.g. brand-new quest built from a template): the raw
    // template IS the starting point, so fall back to the template's own bytes.
    m.raw = (typeof D !== 'undefined' && D) ? D.slice(0) : new Uint8Array(0);
  }

  // Work on a growable copy of the original.
  let out = Array.from(m.raw); // byte array; we can push to grow
  const vd = ru32Arr(out, 0x00);

  const w8  = (o,v)=>{ out[o]=v&0xFF; };
  const w16 = (o,v)=>{ out[o]=v&0xFF; out[o+1]=(v>>8)&0xFF; };
  const w32 = (o,v)=>{ v>>>=0; out[o]=v&0xFF; out[o+1]=(v>>>8)&0xFF; out[o+2]=(v>>>16)&0xFF; out[o+3]=(v>>>24)&0xFF; };
  const wf  = (o,v)=>{ const b=new ArrayBuffer(4); new DataView(b).setFloat32(0,v,true); const u=new Uint8Array(b); for(let i=0;i<4;i++) out[o+i]=u[i]; };
  const align4 = ()=>{ while(out.length & 3) out.push(0); };

  // ── 1. Patch scalar header fields ───────────────────────────────────────────
  w32(0x2C, m.header.unkn1); w32(0x30, m.header.unkn2); w32(0x34, m.header.unkn3);
  w32(0x38, m.header.monSize); w32(0x3C, m.header.hrpSucc); w32(0x40, m.header.hrpFail);
  w8(0x44, m.header.rank); w8(0x45, m.header.spawn); w8(0x46, m.header.supplyCond);
  w8(0x47, m.header.unkn4); w8(0x48, m.header.unkn5); w8(0x49, m.header.unkn6);
  w8(0x4A, m.header.unkn7); w8(0x4B, m.header.attackRoll);

  // ── 2. Patch visual-data scalar fields (in place — same offsets) ────────────
  w32(vd+0, m.vdat.questType);
  w32(vd+4, m.vdat.fee); w32(vd+8, m.vdat.reward); w32(vd+12, m.vdat.penalty);
  w32(vd+16, m.vdat.timeTicks);
  w16(vd+24, m.vdat.questId);
  w8(vd+26, m.vdat.stars);
  w8(vd+28, m.vdat.map);
  w8(vd+29, m.vdat.specialCond);
  w8(vd+30, m.vdat.tgtCond); w16(vd+31, m.vdat.tgtAdd); w8(vd+33, m.vdat.tgtPad);
  w8(vd+34, m.vdat.targetCount||0);
  w16(vd+36, m.vdat.targetId);
  w16(vd+38, m.vdat.targetNum);

  // ── 3. Patch strings in place (within their original capacity) ──────────────
  // String offsets come from the original StringPTRs block; we only overwrite up
  // to (next string start) bytes so we never run past into the neighbour.
  patchFUStringsInPlace(out, m);

  // ── 4. Patch quest script in place (same region, same packet count) ─────────
  // Only rewrite if the count matches the original capacity, otherwise leave it.
  {
    const sp = ru32Arr(out, 0x10), sup = ru32Arr(out, 0x08);
    if (sp>0 && sup>sp) {
      const cap = Math.floor((sup - sp)/8);
      const packets = (m.script && m.script.length) ? m.script : null;
      if (packets) {
        for (let i=0;i<cap;i++){
          const p = i<packets.length ? packets[i] : [-1,0,0,0];
          const o = sp + i*8;
          w16(o, p[0]); w16(o+2, p[1]); w16(o+4, p[2]); w16(o+6, p[3]);
        }
      }
    }
  }

  // ── 5. Patch supply in place IF the count is unchanged; else append at EOF ──
  patchFUListInPlaceOrAppend(out, m, w32, align4);

  // ── 5b. Patch gathering data in place ────────────────────────────────────────
  patchFUGatherInPlace(out, m);

  // ── 5c. Rebuild small monsters at EOF ────────────────────────────────────────
  // The old in-place patcher silently dropped new entries/areas because it could
  // not grow beyond the original allocation.  Rebuild the entire block at EOF
  // (same strategy used for large monsters) so additions always work.
  if (isDirty && m.smallAreas && m.smallAreas.length) {
    align4();

    // Phase 1: write spawn detail entries for each area at EOF
    const areas = m.smallAreas;
    areas.forEach(area => {
      align4();
      area._newDataOff = out.length;
      (area.mons||[]).forEach(mn => {
        const base = out.length;
        for (let b=0;b<60;b++) out.push(0);
        w16(base, mn.id); w16(base+2, mn.vari||0);
        out[base+4]=mn.qty&0xFF; out[base+5]=mn.pow&0xFF;
        out[base+6]=mn.a1&0xFF; out[base+7]=mn.a2&0xFF;
        if(mn.dyn1) for(let j=0;j<20;j++) out[base+8+j]=(mn.dyn1[j]||0)&0xFF;
        w32(base+28, mn.rot>>>0); wf(base+32, mn.x); wf(base+36, mn.y); wf(base+40, mn.z);
        if(mn.dyn2) for(let j=0;j<16;j++) out[base+44+j]=(mn.dyn2[j]||0)&0xFF;
      });
      // 0xFFFF terminator
      out.push(0xFF, 0xFF);

      // Species slot IDs (4 × u32) — auto-derived from spawn entries
      align4();
      area._newIdlOff = out.length;
      const seenIds = [];
      (area.mons||[]).forEach(mn => { if(mn.id && mn.id!==0xFFFF && !seenIds.includes(mn.id)) seenIds.push(mn.id); });
      for(let s=0;s<4;s++){
        const v = s < seenIds.length ? seenIds[s] : 0xFFFFFFFF;
        out.push(v&0xFF,(v>>>8)&0xFF,(v>>>16)&0xFF,(v>>>24)&0xFF);
      }
    });

    // Phase 2: area header table (16 bytes per area + 16 byte zero terminator)
    align4();
    const areaTableOff = out.length;
    areas.forEach(area => {
      const base = out.length;
      for(let b=0;b<16;b++) out.push(0);
      w16(base, area.stageId);
      // bytes 2-7: preserve original padding if available
      if(area._origRaw) for(let b=2;b<8;b++) out[base+b]=area._origRaw[b];
      w32(base+8, area._newIdlOff);
      w32(base+12, area._newDataOff);
    });
    // 16-byte zero terminator (stageId == 0)
    for(let b=0;b<16;b++) out.push(0);

    // Phase 3: table pointer list (same count as original, all pointing to one table)
    align4();
    const ptrListOff = out.length;
    const ptrCount = (m.smMeta && m.smMeta.ptrCount > 0) ? m.smMeta.ptrCount : 1;
    for(let p=0;p<ptrCount;p++){
      out.push(areaTableOff&0xFF,(areaTableOff>>>8)&0xFF,(areaTableOff>>>16)&0xFF,(areaTableOff>>>24)&0xFF);
    }
    // u32 zero terminator (low u16 == 0)
    out.push(0,0,0,0);

    // Repoint header
    w32(0x18, ptrListOff);
  }

  // ── 5d. Patch arena/training data in place ─────────────────────────────────
  patchFUArenaInPlace(out, m);

  // ── 6. Rebuild the LARGE-MONSTER block and append at EOF ────────────────────
  // Only do this when something actually changed. Appending on every export
  // repoints the header even when no edits were made, which corrupts quests.
  if (isDirty) {
  // Build the list from the UI's flattened _lgList (falls back to model tables).
  const lgList = (m._lgList && m._lgList.length !== undefined)
    ? m._lgList
    : (function(){ const a=[]; (m.largeMons||[]).forEach(t=>t.mons.forEach(x=>a.push(x))); return a; })();

  // Write entries and IDL in-place at their original locations. The boss table
  // stays where it is and the header pointer (0x14) is NOT changed. This
  // matches how the working 3rd-party editor operates. Only when the count
  // grows beyond the available space do we relocate to the file's content-end.
  const origDat = m.lgMeta.datPtr;
  const origIdl = m.lgMeta.idlPtr;
  const origTbl = m.lgMeta.tablePtr;
  const origCount = m.lgMeta.rawEntries.length;

  // Always write entries starting at origDat. When count grows, entries overwrite
  // the old IDL/table region and new IDL+table go right after — matching the
  // working 3rd-party editor. When count fits, IDL and table stay in place.
  {
    const datBase = origDat > 0 ? origDat : origTbl + 14;
    const entryEnd = datBase + lgList.length * 60;
    const termEnd = entryEnd + 2; // FFFF data terminator

    const idlStaysInPlace = origIdl > 0 && termEnd <= origIdl;
    const newIdlBase = idlStaysInPlace ? origIdl : ((termEnd + 3) & ~3);
    const idlEnd = newIdlBase + lgList.length * 4 + 4;
    const tblStaysInPlace = idlStaysInPlace && idlEnd <= origTbl;
    const newTblBase = tblStaysInPlace ? origTbl : ((idlEnd + 3) & ~3);

    // Ensure out array is large enough (table is 32 bytes)
    while (out.length < newTblBase + 32) out.push(0);

    // Write data entries at datBase
    lgList.forEach((mn, i) => {
      let e = (mn._raw && mn._raw.length === 60) ? mn._raw.slice()
            : (lgList.find(x=>x._raw)? lgList.find(x=>x._raw)._raw.slice() : new Array(60).fill(0));
      const base = datBase + i * 60;
      for (let b = 0; b < 60; b++) out[base + b] = e[b];
      w16(base+0, mn.id); w16(base+2, 0);
      w8(base+4, mn.qty); w8(base+5, mn.pow); w8(base+6, mn.a1); w8(base+7, mn.a2);
      w16(base+8, mn.stage);
      w32(base+28, mn.rot>>>0);
      wf(base+32, mn.x); wf(base+36, mn.y); wf(base+40, mn.z);
    });
    w16(entryEnd, 0xFFFF); // data terminator

    // Fill gap between data terminator and IDL
    for (let b = termEnd; b < newIdlBase; b++) out[b] = 0;

    // Write IDL
    lgList.forEach((mn, i) => {
      const off = newIdlBase + i * 4;
      out[off] = mn.id & 0xFF; out[off+1] = (mn.id >> 8) & 0xFF;
      out[off+2] = 0; out[off+3] = 0;
    });
    // IDL terminator: full u32 0xFFFFFFFF
    const idlTerm = newIdlBase + lgList.length * 4;
    out[idlTerm] = 0xFF; out[idlTerm+1] = 0xFF; out[idlTerm+2] = 0xFF; out[idlTerm+3] = 0xFF;

    // Fill gap between IDL end and table with 0xFF
    for (let b = idlTerm + 4; b < newTblBase; b++) out[b] = 0xFF;

    // Write/update table (32 bytes: 16 bytes fields + 16 bytes zero padding)
    while (out.length < newTblBase + 32) out.push(0);
    const tu1 = (m.largeMons[0] && m.largeMons[0].unkn1) ? m.largeMons[0].unkn1 : 1;
    const tu2 = (m.largeMons[0] && m.largeMons[0].unkn2) ? m.largeMons[0].unkn2 : 0;
    w32(newTblBase+0, tu1); w32(newTblBase+4, tu2);
    w32(newTblBase+8, newIdlBase); w32(newTblBase+12, datBase);
    for (let b = newTblBase+16; b < newTblBase+32; b++) out[b] = 0;

    // Only repoint header if table moved
    if (newTblBase !== origTbl) {
      w32(0x14, newTblBase);
    }
  }
  } // end isDirty large-monster rebuild

  return new Uint8Array(out);
}


// Read a u32 from a plain byte array (Array or Uint8Array).
function ru32Arr(a, o){ return ((a[o]|a[o+1]<<8|a[o+2]<<16|a[o+3]<<24)>>>0); }

function ru16Arr(a, o){ return (a[o]|a[o+1]<<8); }


// Patch the six quest strings in place, each within its original capacity
// (distance to the next string start, or to the StringPTRs block).
function patchFUStringsInPlace(out, m){
  const vd = ru32Arr(out, 0x00);
  const strTbl = ru32Arr(out, vd+20);
  const sp = ru32Arr(out, strTbl);
  const fields = ['title','goal','fail','details','monsters','client'];
  const offs = fields.map((f,i)=> ru32Arr(out, sp + i*4));
  // capacity = distance to the next-higher string offset (or model capacity)
  const enc = new TextEncoder();
  fields.forEach((f,i)=>{
    const start = offs[i];
    if (!start || start >= out.length) return;
    // capacity: smallest gap to any other string start that is greater, else fall
    // back to the model's declared capacity.
    let cap = fuState.strCapacity[f] || 32;
    offs.forEach((o2)=>{ if (o2>start) cap = Math.min(cap, o2-start); });
    if (sp > start) cap = Math.min(cap, sp - start);
    const bytes = enc.encode(m.strings[f]||'');
    const n = Math.min(bytes.length, cap-1);
    for (let k=0;k<cap;k++) out[start+k] = (k<n ? bytes[k] : 0);
  });
}


// Supply is the only variable-length list we patch directly. If the edited count
// equals the original count we overwrite in place; if it changed we append a new
// supply array at EOF and repoint SuppliesPTR (0x08). Rewards/gather/small-mon are
// left exactly as loaded unless the user edited them — for those, the previous
// build already round-trips correctly because we keep the original bytes.
function patchFUListInPlaceOrAppend(out, m, w32, align4){
  const supPtr = ru32Arr(out, 0x08);
  // count original supply entries (term item==0)
  let origCount = 0; { let o=supPtr; while(o+4<=out.length){ if(ru16Arr(out,o)===0) break; origCount++; o+=4; } }
  const items = m.supply || [];
  const sameLen = items.length === origCount;
  if (sameLen) {
    let o = supPtr;
    items.forEach(s=>{ out[o]=s.item&0xFF; out[o+1]=(s.item>>8)&0xFF; out[o+2]=s.amt&0xFF; out[o+3]=(s.amt>>8)&0xFF; o+=4; });
  } else {
    align4();
    const base = out.length;
    items.forEach(s=>{ out.push(s.item&0xFF,(s.item>>8)&0xFF,s.amt&0xFF,(s.amt>>8)&0xFF); });
    out.push(0,0); // terminator item==0
    align4();
    w32(0x08, base);
  }
}


// ── MHFU blank quest (based on Giadrome template) ───────────────────────────
const FU_QUEST_TPL='TAAAADJOREdoBwAAxA4AAPgGAACMFwAA9BYAAHAOAADUDgAAMAoAAAAAAAAAAAABAAAAAAAAAAJkAAAAeAAAAA8AAAAAAAAAAAADBAQAAABkAAAAsAQAAJABAACQXwEA3AYAAAEAAQELAAEAAQAAAE0AAQAAAAAAAAAAAAAAAABBIFRydWUgRm9lIC0gVGhlIEdpYWRyb21lIQAASHVudCB0aGUgR2lhZHJvbWUAAABSZXdhcmQgWmVybwpUaW1lIE92ZXIAAABXaXRoaW4gYSBncm91cCBvZiB0aGUgc2x5CmNhcm5pdm9yb3VzIEdpYXByZXksIHRoZXJlCmlzIGEgbGVhZGVyLiBUaGV5IGNhbGwgaXQKdGhlIEdpYWRyb21lLiBJIG5lZWQgYQpodW50ZXIncyBzdHJlbmd0aCB0byBzaG93CnRoYXQgcGFjayBvZiBiZWFzdHMgYW5kCnRoZWlyIGxlYWRlciB3aG8ncyBib3NzIQAAAABHaWFkcm9tZQpHaWFwcmV5AAAAAFNwaXJpdGVkIEJveQAAAACAAAAAnAAAALAAAADIAAAAfAEAAJABAABTYWNyw6kgZW5uZW1pIDogbGUgR2lhZHJvbWUgIQAAAENoYXNzZXIgbGUgR2lhZHJvbWUAAAAAAEF1Y3VuZSBwcmltZQpEw6lsYWkgw6ljb3Vsw6kAAAAASWwgeSBhIHRvdWpvdXJzIHVuIGNoZWYKZGFucyBsZXMgZ3JvdXBlcyBkZSBHaWFwcmV5CmNhcm5pdm9yZXMuIE9uIGxlIG5vbW1lCkdpYWRyb21lLiBJbCBmYXV0IHRvdXRlIGxhCmZvcmNlIGQndW4gY2hhc3NldXIgcG91cgptb250cmVyIMOgIGNlcyBiw6p0ZXMgcXVpIGVzdApsZSBjaGVmICEAAAAAAEdpYWRyb21lCkdpYXByZXkAAAAAR2Fyw6dvbiBwbGVpbiBkZSB2aWUAAAAAuAEAANgBAADwAQAAEAIAALwCAADQAgAAV8O8cmRpZ2VyIEdlZ25lciAtIEdpYWRyb21lIQAAAABEZW4gR2lhZHJvbWUgZXJqYWdlbgAAAABCZWxvaG51bmcgMApaZWl0IGFiZ2VsYXVmZW4AAAAAAERpZSBoaW50ZXJow6RsdGlnZW4gZmxlaXNjaC0KZnJlc3NlbmRlbiBHaWFwcmV5cwpoYWJlbiBlaW5lbiBBbmbDvGhyZXIgbmFtZW5zCkdpYWRyb21lLiBJY2ggYnJhdWNoZSBlaW5lbgpKw6RnZXIsIGRlciBkZW0gUnVkZWwgc2FtdApBbmbDvGhyZXIgemVpZ3QsIHdlciBoaWVyCmRhcyBTYWdlbiBoYXQhAAAAR2lhZHJvbWUKR2lhcHJleQAAAABBdWZnZXdlY2t0ZXIgSnVuZ2UAAAADAAAgAwAAOAMAAFgDAAAIBAAAHAQAAFVuIHZlcm8gbmVtaWNvOiBpbCBHaWFkcm9tZSEAAAAAQ2FjY2lhIGlsIEdpYWRyb21lAABOZXNzdW4gcHJlbWlvClRlbXBvIHRlcm1pbmF0bwAAAE5laSBncnVwcGkgZGVpIGZ1cmJpCmNhcm5pdm9yaSBHaWFwcmV5IGPigJnDqCB1bgpjYXBvLiBMbyBjaGlhbWFubyBHaWFkcm9tZS4KTWkgc2VydmUgbGEgZm9yemEgZGkgdW4KY2FjY2lhdG9yZSBwZXIgbW9zdHJhcmUgY2hpCmNvbWFuZGEgYSBxdWVsIGJyYW5jbyBkaQpiZXN0aWUgZSBhbCBsb3JvIGNhcG8hAAAAAEdpYWRyb21lCkdpYXByZXkAAAAAUmFnYXp6byBhbmltb3NvAAAAAABIBAAAaAQAAHwEAACcBAAAUAUAAGQFAABUb2RvIHVuIGVuZW1pZ286IGVsIEdpYWRyb21lAAAAAENhemEgYWwgR2lhZHJvbWUAAAAAUmVjb21wZW5zYSBjZXJvCkZpbiBkZWwgdGllbXBvAABFbiBsb3MgZ3J1cG9zIGRlIGFzdHV0b3MKR2lhcHJleSBjYXJuw612b3JvcywgaGF5CnVuIGzDrWRlci4gTGUgbGxhbWFuIGVsCkdpYWRyb21lLiDCoU5lY2VzaXRvIGxhCmZ1ZXJ6YSBkZSB1biBjYXphZG9yIHBhcmEKZGVtb3N0cmFybGVzIGEgZXNhcyBiZXN0aWFzCnkgc3UgbMOtZGVyIHF1acOpbiBtYW5kYSBhcXXDrSEAAAAAAEdpYWRyb21lCkdpYXByZXkAAAAAQ2hpY28gYWxlZ3JlAAAAAJAFAACwBQAAxAUAAOQFAACgBgAAtAYAAKABAACgAQAAMAQAAOgCAADEBgAAeAUAAKABAAAbAAAAAAAAAAMAAAAAAAAA//8AAAAAAAAtAAAAAAAAAB4AAAAAAAAA/v8AAAAAAAAJAJYAAAAAAAoAAAAAAAAAHwAAAAAAAAAaAAAAAAAAACUAAAAAAAAACQCWAAAAAAAKAAAAAAAAAB8AAAAAAAAAXwMBAF8DAQBfAwEAXwMBAGMDAgBjAwIAYAMDAGADAwBgAwMAYAMDAGEDAgBhAwIAYQMCAGEDAgBAAAEAQAABABYAAQAWAAEAFgABABYAAQBgAAEAZgAKAHQABQB4AAgAgwAPAIEACgAXAAIAFwACAEoAAwB8AAQAZAMBAAAAAQAUAMgALQDKAA8A2wAFANUADwCZAP//AAAUAMgALQDKAA8A2wAFANUADwCZAP//AABBAKEACgD2ABkArQD//wAASwDbABkAyAD//wAAMgCtAB4AuQAUAF0A//8AAEYAXgAeACQB//8AACMAogAZAK0AFACoABQAXQD//wAAFADIAC0AygAPANsABQDVAA8AmQD//wAAHgCZAA0A2wAoAMkABQDVAAwAzAD//wAARgBeAB4AJAH//wAAHgBuA0AAIQEGACIB//8AAFAAsQAKACQBCgCzAP//AAAKAIgAHAD8ABQA+gAWAP4ABQAFAQ8A+wD//wAACgCZACgAygAeAMkAFADMAP//AAA3AKYAHgBdAA8AiQD//wAAQQChAAoA9gAZAK0A//8AAEYAQAAZAGEDBQBMAP//AABGAEAAGQA6AAUAGAD//wAALQCnAB4AowAZAK0A//8AAB4AyAA8AJkACgAAAP//AAAPAD0BPACZABkAyAD//wAABQCnAEsArQAUAKIA//8AAC0ApwAeAKMAGQCtAP//AAAPAD0BFADJAAUAyAAUANsADwDMABkAcgP//wAAPgCjACEAqAAFAF0A//8AAA8A/QAbAP4ACgCKAAgA9gAKAAUBHgD7AP//AAAjAIsAPACJAAUAAAD//wAAQgCjAB4AXQAEAAAA//8AAD4AowAhAKgABQBdAP//AAAPAMgAPACZABkAAAD//wAARgC7AAUAXQAZAK0A//8AAAoA2wAZAMoAKADJAAoA1QAPAJkA//8AAOgHAAAACAAAGAgAACgIAAA0CAAARAgAAFAIAABkCAAAfAgAAJQIAACgCAAAsAgAAMAIAADcCAAA8AgAAAAJAAAQCQAAIAkAADAJAABACQAAUAkAAGAJAABwCQAAgAkAAJwJAACsCQAAyAkAANgJAADoCQAA+AkAAAgKAAAYCgAAALB+RgCAE0QAAMNFAABIQwAABgADAAIAADgVRgAAFkMA8DlGAACWQwEABgADAAMAABAkRgAAFkMAIDJGAACWQwIABgAAAAIAADg4RgCACUQAsNFFAACWQwMABQAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAJAwRgBAtUQAQLVFAACWQwQABgAAAAIAANAdRgBAnEQAoPBFAACWQwUACAAAAAUAABAkRgCAu0QAAJZFAACWQwYABgAAAAMAALAzRgBAg0QAABZGAACWQwcABgADAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAIgQRgAAr0QAQE5GAABIQwgACAADAAQAAPA5RgAAAAAAcBRGAAD6QwkACAAAAAMAAAD6RQAAlkMAsDNGAABIQwoACgAAAAgAAAAWRgAAAAAAUENGAACWQwsACgAAAAUAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAOArRgAASMIA8FJGAADIQwwACgAEAAQAAIgQRgBAHEUAECRGAABIQw0ABQADAAMAAKDXRQBAtUQAkBdGAABIQw4ABQAAAAMAAMgvRgBAtUQAECRGAABIQw8ABgAAAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAOwpRgAAAAAAkGJGAABIQxAABAAAAAEAAHAtRgAAAAAAwFpGAABIQxEABAAAAAEAAPgORgAAAAAAgCJGAABIQxIABgAAAAIAAJBJRgAAAAAAABZGAABIQxMABQAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAGgIRgCAnkMAgAlGAABIQxQABAAAAAEAALxDRgAAlkMAiMhFAABIQxUACgAAAAYAABQwRgCAnEMAyA9GAABIQxYABgAAAAMAANAhRgBgGkUAePtFAABIQxcABQADAAQAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAALAzRgAAyEEAEAtGAABIQxgABgAAAAMAAEBnRgAAAAAAQBxGAAD6QxkACgAEAAQAAHiCRgAASEMAIABGAABIQxoACAAAAAQAAAiERgAASEIAEFZGAACWQxsABgAAAAIAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAMDaRQAAAAAAILJFAABIQxwABgAAAAQAAGAGRgAAAAAAIEtGAABIQx0ABQAAAAIAAIC7RQCAokMAoAxGAABIQx4ABgAAAAIAANjMRQAAAAAAeMNFAABIQx8ABQADAAMAAACAvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAKAAAoCwAAoAsAABgMAACQDAAACA0AAIANAAD4DQAAAAAAAAEAWQEBABkAVgEBAAoAWAEBABkAGQEBAAoAGQECABkAVAEBAAQA3wABAP//AIAABZgOAAD//wAAAAAAAP//AAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////yMAAAACAAAAAAABAAAAAAAAAAAAAAAAAAAAAACF+QAAAKQrRgCAu0QAqKpFAAAAAAAAAAAAAAAAAAAAACMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlAwAAAHQoRgCAu0QAiKJFAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAAABAAAAAAAAAAAAAAAAAAAAAABS4gAAAMAiRgCAu0QAsKBFAAAAAAAAAAAAAAAAAAAAABMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABonAAAALQGRgAARkMAeE9GAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAATAAAA//////////8jAAAAAwAAAAAAAAIAAAAAAAAAAAAAAAAAAAAA6roAAAAsH0YAAAAAAFQXRgAAAAAAAAAAAAAAAAAAAAAjAAAAAgAAAAAAAQAAAAAAAAAAAAAAAAAAAAAANJIAAAC0EEYAAAAAABArRgAAAAAAAAAAAAAAAAAAAAAjAAAAAwAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAdGwAAADYMkYAAAAAAIQfRgAAAAAAAAAAAAAAAAAAAAATAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMp8AAACgDkYAEAhFAKxTRgAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAAEwAAAP//////////RQAAAAMAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAFSoAAAA4M9FAAAAAACwTEYAAAAAAAAAAAAAAAAAAAAARQAAAAQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAF8VAAAA6N9FAAAAAACYPEYAAAAAAAAAAAAAAAAAAAAARQAAAAIAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAGR3AAAA+PlFAAAAAAAwREYAAAAAAAAAAAAAAAAAAAAARQAAAAMAAAAAAAEAAAAAAAAAAAAAAAAAAAAAACEgAAAA/AdGAAAAAAD8TUYAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAFeiAAAAuDZGAMBaRQDQ8UUAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARQAAAAUAAAD//////////yMAAAACAAAAAAABAAAAAAAAAAAAAAAAAAAAAADTXQAAAMASRgAAAAAA4DFGAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAAABAAAAAAAAAAAAAAAAAAAAAAD05AAAAEAqRgAAAAAAeBhGAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAD//////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////RgADAAQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAK2eAAAAEHlGAAAAAACgJEYAAAAAAAAAAAAAAAAAAAAARgACAAMAAAAAAAEAAAAAAAAAAAAAAAAAAAAAANqIAAAAnH1GAAAAAABYM0YAAAAAAAAAAAAAAAAAAAAARgAAAAQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAJX5AAAAcoRGAAAAAABkH0YAAAAAAAAAAAAAAAAAAAAAEwAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIPvAAAAnHxGAMASRACAyUUAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARgAAABMAAAD//////////yMAAAADAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAsMAAAAAwBRgAAAAAAEPhFAAAAAAAAAAAAAAAAAAAAACMAAAACAAAAAAABAAAAAAAAAAAAAAAAAAAAAAApOwAAAMjNRQAAAAAAAN5FAAAAAAAAAAAAAAAAAAAAACMAAAADAAAAAAABAAAAAAAAAAAAAAAAAAAAAABNFgAAAPgIRgAAAAAA5B1GAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAAD///////////////9cAAAAAAAAABgPAADcDgAAXQAAAAAAAABUEAAAKA8AAF4AAAAAAAAAkBEAAGQQAABfAAAAAAAAAAgTAACgEQAAYAAAAAAAAADMEwAAGBMAAGEAAAAAAAAAGBQAANwTAABjAAAAAAAAAFQVAAAoFAAAZAAAAAAAAABUFgAAZBUAAAAAAAAhEQAAAAAAAAAAAABkFgAAZBYAAGQWAAAAAAAATQAAAAEEAABhAAAAAAAAAAAAAAAAAAAAAAAAAI3kAAAAiBxGAACJQwAoN0YAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQAAAP///////////////wEAAAAAAAAAfBcAAAQXAAAAAAAAAAAAAAAAAAAAAAAA0JvY4JKU2eOolnmU9lX4cY+QlB/b2OhecguV+8erG7HgN6byW30Tz3774dN3dvJCm2nrmw==';
function buildNewFUQuest() {
  const raw = Uint8Array.from(atob(FU_QUEST_TPL), c => c.charCodeAt(0));
  const d = new Uint8Array(raw.length);
  d.set(raw);
  // Set unique quest ID to avoid EVENT.BIN conflicts
  const vd = d[0] | d[1]<<8 | d[2]<<16 | d[3]<<24;
  if (vd + 25 < d.length) {
    const newId = 64000 + Math.floor(Math.random()*1000);
    d[vd+24] = newId & 0xFF; d[vd+25] = (newId>>8) & 0xFF;
  }
  return d;
}


function importFUFromJSON(obj){
  D = buildNewFUQuest(); fname = obj.file || 'imported.bin'; PAT_PREFIX = null;
  if(!parseFU(D)) return;
  const m = fuModel;
  const qi = obj.questInfo || {};
  const s = obj.strings || {};
  const v = obj.visual || obj.header || {};
  for(const k in v){ if(v[k]!==undefined && k in m.vdat) m.vdat[k] = v[k]; }
  if(qi.stars!==undefined) m.vdat.stars = qi.stars;
  if(qi.fee!==undefined) m.vdat.fee = qi.fee;
  if(qi.reward!==undefined) m.vdat.reward = qi.reward;
  if(qi.penalty!==undefined) m.vdat.penalty = qi.penalty;
  if(qi.timeTicks!==undefined) m.vdat.time = qi.timeTicks;
  if(qi.questNumber!==undefined) m.vdat.questNumber = qi.questNumber;
  if(qi.hrpSuccess!==undefined) m.vdat.hrpSuccess = qi.hrpSuccess;
  if(qi.hrpFail!==undefined) m.vdat.hrpFail = qi.hrpFail;
  if(s.title!==undefined) m.strings.title = s.title;
  if(s.goal!==undefined) m.strings.goal = s.goal;
  if(s.fail!==undefined) m.strings.fail = s.fail;
  if(s.details!==undefined) m.strings.details = s.details;
  if(s.monsters!==undefined) m.strings.monsters = s.monsters;
  if(s.client!==undefined) m.strings.client = s.client;
  if(obj.supply) m.supply = obj.supply.map(x=>({item:x.itemId!==undefined?x.itemId:(x.item||0), qty:x.qty||1}));
  if(obj.rewards) m.rewards = (obj.rewards||[]).map(b=>({
    unkn1:b.unkn1!==undefined?b.unkn1:(b.condition!==undefined?b.condition:(b.cond||0)),
    unkn2:b.unkn2||0,
    items:(b.items||[]).map(i=>({chance:i.chance!==undefined?i.chance:(i.probability!==undefined?i.probability:(i.prob||0)), item:i.itemId!==undefined?i.itemId:(i.item||0), amt:i.amt!==undefined?i.amt:(i.qty||1)}))}));
  if(obj.largeMonsters){
    m._lgList = obj.largeMonsters.map(x=>({id:x.id||0,qty:x.qty||1,pow:x.pow||0,stage:x.stage||0,x:x.x||0,y:x.y||0,z:x.z||0,rot:x.rot||0}));
    m.largeMons = [];
  }
  if(obj.smallAreas) m.smallAreas = obj.smallAreas.map(a=>({stageId:a.stageId||0,mons:(a.monsters||[]).map(x=>({id:x.id||0,qty:x.qty||1,x:x.x||0,y:x.y||0,z:x.z||0}))}));
  if(obj.gathering) m.gather = obj.gathering;
  populateFU(D);
}

// ══════════════════════════════════════════════════════════════════════════════
// MHFU GATHERING — parse / populate / apply
// Structures from the MHP2G quest format:
//   GatherLocPTR [0x1C] → GatherNodeLocTbl[] { u32 NodeListPtr } (count by map)
//     NodeList: { X f32, Y f32, Z f32, MaxMineValue f32,
//                 ItemIndex u16, Unkn u16, NodeType u16, MaxTimesMined u16 }
//     terminated when X == -1.0 (0xBF800000)
//   GatherItemsPTR [0x24] → GatherNodeItemTbl[] { u32 ItemListPtr }
//     while ptr != 0 && ptr < 0x30000000; ItemList: { u16 value, u16 item } term 0xFFFF
// ══════════════════════════════════════════════════════════════════════════════

// Gathering-table count per map (from the MHP2G quest hexpat)
const FU_GATHER_TBL_COUNT = {1:7,2:13,3:12,4:11,5:12,6:11,7:2,8:2,9:2,10:0,11:10,12:4,
  13:2,14:8,15:11,16:13,17:12,18:11,19:12,20:11,21:10,22:2,23:2,26:11,27:13,28:13,
  29:10,30:10,31:10};


// GATHER_NODE_TYPES moved to shared.js


var fuGather = { tables: [], itemTables: [] };


function parseFUGather(d) {
  fuGather = { tables: [], itemTables: [] };
  const locBase = ru32(d, 0x1C);
  if (locBase > 0 && locBase < d.length) {
    for (let t = 0; t < 90; t++) {
      const po = locBase + t*4;
      if (po + 4 > d.length) break;
      const nodePtr = ru32(d, po);
      if (nodePtr > d.length) break;
      const tbl = { ptrOff: po, nodePtr, nodes: [] };
      if (nodePtr > 0 && nodePtr + 4 <= d.length) {
        let off = nodePtr;
        for (let n = 0; n < 64; n++) {
          if (off + 24 > d.length) break;
          if (ru32(d, off) === 0xBF800000) break;
          tbl.nodes.push({
            off,
            x: rf32(d, off), y: rf32(d, off+4), z: rf32(d, off+8),
            maxMine: rf32(d, off+12),
            itemIdx: ru16(d, off+16), unkn: ru16(d, off+18),
            type: ru16(d, off+20), maxTimes: ru16(d, off+22)
          });
          off += 24;
        }
      }
      fuGather.tables.push(tbl);
    }
  }
  const itmBase = ru32(d, 0x24);
  if (itmBase > 0 && itmBase < d.length) {
    for (let t = 0; t < 128; t++) {
      const po = itmBase + t*4;
      if (po + 4 > d.length) break;
      const lp = ru32(d, po);
      if (lp === 0 || lp >= 0x30000000 || lp >= d.length) break;
      const items = [];
      let off = lp;
      for (let i = 0; i < 64; i++) {
        if (off + 4 > d.length) break;
        const val = ru16(d, off);
        if (val === 0xFFFF) break;
        items.push({ off, value: val, item: ru16(d, off+2) });
        off += 4;
      }
      fuGather.itemTables.push({ ptrOff: po, listPtr: lp, items });
    }
  }
}


function populateFUGather(d) {
  // Ensure the model carries gather data (parseFU already copied fuGather in).
  if (!fuModel.gather) { parseFUGather(d); fuModel.gather = JSON.parse(JSON.stringify(fuGather)); }
  fuRenderGather();
}


function fuRenderGather() {
  const g = fuModel.gather || (fuModel.gather = {tables:[],itemTables:[]});
  const renderedTables = new Set();

  // ── Node location tables with inline item tables ──
  const nb = document.getElementById('fu-gathernodes-body');
  nb.innerHTML = '';
  if (!g.tables.length) {
    nb.innerHTML = '<div class="note">No gathering area tables. Use "+ Add Area Table".</div>';
  }
  g.tables.forEach((tbl, ti) => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.marginBottom = '10px'; card.dataset.gt = ti;
    const fuMapId=fuModel.vdat.map||0;
    const fuStages=GATHER_STAGES[fuMapId]||[];
    const fuCurStage=fuStages[ti]!==undefined?fuStages[ti]:ti;
    card.innerHTML = `<div class="card-hdr" style="display:flex;align-items:center;gap:10px">`+
      `<select class="fu-ga-stage-sel" data-area="${ti}" style="font-size:12px;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:3px;padding:2px 4px">${stageOpts(fuCurStage,false)}</select>`+
      `<span style="font-size:10px;color:var(--muted)">Table ${ti} · ${(tbl.nodes||[]).length} node(s)</span>`+
      `<button class="btn-danger" style="margin-left:auto" onclick="fuDelGatherTable(this)">✕ Table</button></div>`;
    const body = document.createElement('div'); body.className='card-body';
    (tbl.nodes||[]).forEach((n, ni) => {
      // Node coordinate row as a flex div
      const nodeDiv = document.createElement('div');
      nodeDiv.style.cssText='display:flex;flex-wrap:nowrap;gap:3px;align-items:center;padding:3px 0;border-bottom:1px solid var(--border)';
      nodeDiv.className='fu-gn-row'; nodeDiv.dataset.gt=ti; nodeDiv.dataset.gn=ni;
      const typeOpts = gatherTypeOpts(n.type);
      const LB='display:block;font-size:12px;color:var(--muted);margin-bottom:1px';
      const IG='width:100%;padding:3px 4px;font-size:14px', IS='width:100%;padding:3px 4px;font-size:14px';
      const W3='flex:3 1 60px;min-width:50px', W2='flex:2 1 40px;min-width:34px';
      function fld(label,style,inner){ return `<div style="${style}"><span style="${LB}">${label}</span>${inner}</div>`; }
      nodeDiv.innerHTML = [
        `<span style="color:var(--muted);font-family:var(--mono);min-width:16px;font-size:12px;align-self:end;padding-bottom:4px">${ni}</span>`,
        fld('X',W3,`<input type=number step=0.1 value=${(n.x||0).toFixed(1)} data-f=x style="${IG}">`),
        fld('Y',W3,`<input type=number step=0.1 value=${(n.y||0).toFixed(1)} data-f=y style="${IG}">`),
        fld('Z',W3,`<input type=number step=0.1 value=${(n.z||0).toFixed(1)} data-f=z style="${IG}">`),
        fld('Range',W2,`<input type=number step=0.1 value=${(n.maxMine||0).toFixed(1)} data-f=mm style="${IS}">`),
        fld('Table',W2,`<input type=number min=0 max=65535 value=${n.itemIdx||0} data-f=ii style="${IS}">`),
        fld('Unkn',W2,`<input type=number min=0 max=65535 value=${n.unkn||0} data-f=unk style="${IS}">`),
        fld('Times',W2,`<input type=number min=0 max=65535 value=${n.maxTimes||0} data-f=mt style="${IS}">`),
        fld('Type','flex:0 0 auto',`<select data-f=ty style="font-size:14px;padding:3px 4px">${typeOpts}</select>`),
        `<div style="flex:0 0 auto;align-self:end;padding-bottom:2px;white-space:nowrap"><button class=btn-dup title=Duplicate onclick="fuDupGatherNode(this)">⧉</button> <button class=btn-danger title=Delete onclick="fuDelGatherNode(this)">✕</button></div>`
      ].join('');
      body.appendChild(nodeDiv);

      // Inline editable item table
      const ci = n.itemIdx;
      const itbl = (g.itemTables||[])[ci];
      if(itbl && itbl.items && !renderedTables.has(ci)){
        renderedTables.add(ci);
        const itDiv = document.createElement('div');
        itDiv.style.cssText='margin:0 0 8px 24px;padding:4px 8px;border-left:3px solid var(--accent);background:var(--bg)';
        itDiv.dataset.git=ci;
        const itTbl=document.createElement('table'); itTbl.style.fontSize='14px';
        itTbl.innerHTML='<thead><tr><th>#</th><th>Chance</th><th>Item</th><th></th></tr></thead>';
        const itTb=document.createElement('tbody'); itTb.className='fu-gi-rows';
        itbl.items.forEach((it, ii) => itTb.appendChild(fuGatherItemRow(ci, ii, it)));
        itTbl.appendChild(itTb); itDiv.appendChild(itTbl);
        const addIt=document.createElement('button');
        addIt.className='btn-add'; addIt.style.cssText='margin:4px 0;font-size:11px';
        addIt.textContent='+ Item'; addIt.onclick=()=>{ fuCommitGather(); fuModel.gather.itemTables[ci].items.push({value:10,item:1}); fuRenderGather(); markDirty(); };
        itDiv.appendChild(addIt);
        body.appendChild(itDiv);
      } else if(itbl && renderedTables.has(ci)){
        const ref=document.createElement('div');
        ref.style.cssText='margin:0 0 4px 24px;font-size:11px;color:var(--muted)';
        ref.textContent='↑ Uses Item Table #'+ci+' (edited above)';
        body.appendChild(ref);
      }
    });
    card.appendChild(body);
    const add = document.createElement('button');
    add.className='btn-add'; add.style.margin='8px 14px 14px'; add.textContent='+ Add Node';
    add.onclick = () => { fuCommitGather(); fuModel.gather.tables[ti].nodes.push({off:0,x:0,y:0,z:0,maxMine:100,itemIdx:0,unkn:1,type:0,maxTimes:1}); fuRenderGather(); markDirty(); };
    card.appendChild(add);
    nb.appendChild(card);
  });
  const addTbl = document.createElement('button');
  addTbl.className='btn-add'; addTbl.textContent='+ Add Area Table';
  addTbl.onclick = () => { fuCommitGather(); fuModel.gather.tables.push({nodes:[]}); fuRenderGather(); markDirty(); };
  nb.appendChild(addTbl);

  // ── Unreferenced item tables ──
  const allIt = g.itemTables||[];
  const unreferenced=[];
  allIt.forEach((_,ci)=>{ if(!renderedTables.has(ci)) unreferenced.push(ci); });
  if(unreferenced.length){
    unreferenced.forEach(ci=>{
      const tbl2=allIt[ci]; if(!tbl2) return;
      const card=document.createElement('div');
      card.className='card'; card.style.marginBottom='10px'; card.dataset.git=ci;
      card.innerHTML=`<div class="card-hdr" style="display:flex;align-items:center;gap:10px"><span>Unreferenced Table ${ci}</span><button class="btn-danger" style="margin-left:auto" onclick="fuDelGatherItemTable(this)">✕</button></div>`;
      const t=document.createElement('table'); t.style.fontSize='12px';
      t.innerHTML='<thead><tr><th>#</th><th>Chance</th><th>Item</th><th></th></tr></thead>';
      const tb=document.createElement('tbody'); tb.className='fu-gi-rows';
      (tbl2.items||[]).forEach((it,ii)=>tb.appendChild(fuGatherItemRow(ci,ii,it)));
      t.appendChild(tb); card.appendChild(t);
      const add=document.createElement('button');
      add.className='btn-add'; add.style.margin='8px 14px 14px'; add.textContent='+ Item';
      add.onclick=()=>{ fuCommitGather(); fuModel.gather.itemTables[ci].items.push({value:10,item:1}); fuRenderGather(); markDirty(); };
      card.appendChild(add); nb.appendChild(card);
    });
  }
  upgradeSelectsToCombo();
}


function fuGatherNodeRow(ti, ni, n) {
  const tr = document.createElement('tr'); tr.dataset.gt=ti; tr.dataset.gn=ni;
  const typeOpts = gatherTypeOpts(n.type);
  tr.innerHTML =
    `<td style="color:var(--muted);font-family:var(--mono)">${ni}</td>`+
    `<td><input type="number" step="0.1" value="${(n.x||0).toFixed(1)}" data-gt="${ti}" data-gn="${ni}" data-f="x" style="width:85px"></td>`+
    `<td><input type="number" step="0.1" value="${(n.y||0).toFixed(1)}" data-gt="${ti}" data-gn="${ni}" data-f="y" style="width:85px"></td>`+
    `<td><input type="number" step="0.1" value="${(n.z||0).toFixed(1)}" data-gt="${ti}" data-gn="${ni}" data-f="z" style="width:85px"></td>`+
    `<td><input type="number" step="0.1" value="${(n.maxMine||0).toFixed(1)}" data-gt="${ti}" data-gn="${ni}" data-f="mm" style="width:85px"></td>`+
    `<td><input type="number" min="0" max="65535" value="${n.itemIdx||0}" data-gt="${ti}" data-gn="${ni}" data-f="ii" style="width:60px"></td>`+
    `<td><input type="number" min="0" max="65535" value="${n.unkn||0}" data-gt="${ti}" data-gn="${ni}" data-f="unk" style="width:60px"></td>`+
    `<td><input type="number" min="0" max="65535" value="${n.maxTimes||0}" data-gt="${ti}" data-gn="${ni}" data-f="mt" style="width:60px"></td>`+
    `<td><select data-gt="${ti}" data-gn="${ni}" data-f="ty">${typeOpts}</select></td>`+
    `<td style="white-space:nowrap"><button class="btn-dup" title="Duplicate" onclick="fuDupGatherNode(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="fuDelGatherNode(this)">✕</button></td>`;
  return tr;
}

function fuDupGatherNode(btn){
  fuCommitGather();
  const row=btn.closest('.fu-gn-row'); const ti=+row.dataset.gt, ni=+row.dataset.gn;
  const nodes=fuModel.gather.tables[ti].nodes;
  nodes.splice(ni+1,0,JSON.parse(JSON.stringify(nodes[ni])));
  fuRenderGather(); markDirty();
}


function fuGatherItemRow(ti, ii, it) {
  const tr = document.createElement('tr'); tr.dataset.git=ti; tr.dataset.gii=ii;
  const idxTd = document.createElement('td'); idxTd.style.cssText='color:var(--muted);font-family:var(--mono)'; idxTd.textContent=ii;
  const valTd = document.createElement('td'); valTd.innerHTML=`<input type="number" min="0" max="65535" value="${it.value}" data-git="${ti}" data-gii="${ii}" data-f="val" style="width:70px">`;
  const itTd = document.createElement('td'); itTd.appendChild(makeItemPick('fu-gi'+ti+'-'+ii, it.item, {'data-git':ti,'data-gii':ii}));
  const delTd = document.createElement('td'); delTd.style.whiteSpace='nowrap';
  delTd.innerHTML=`<button class="btn-dup" title="Duplicate" onclick="fuDupGatherItem(this)">⧉</button> <button class="btn-danger" title="Delete" onclick="fuDelGatherItem(this)">✕</button>`;
  tr.appendChild(idxTd); tr.appendChild(valTd); tr.appendChild(itTd); tr.appendChild(delTd);
  return tr;
}

function fuDupGatherItem(btn){
  fuCommitGather();
  const tr=btn.closest('tr'); const ti=+tr.dataset.git, ii=+tr.dataset.gii;
  const items=fuModel.gather.itemTables[ti].items;
  items.splice(ii+1,0,JSON.parse(JSON.stringify(items[ii])));
  fuRenderGather(); markDirty();
}


function fuDelGatherTable(btn){ fuCommitGather(); fuModel.gather.tables.splice(+btn.closest('[data-gt]').dataset.gt,1); fuRenderGather(); markDirty(); }

function fuDelGatherItemTable(btn){ fuCommitGather(); fuModel.gather.itemTables.splice(+btn.closest('[data-git]').dataset.git,1); fuRenderGather(); markDirty(); }

function fuDelGatherNode(btn){ fuCommitGather(); const row=btn.closest('.fu-gn-row'); fuModel.gather.tables[+row.dataset.gt].nodes.splice(+row.dataset.gn,1); fuRenderGather(); markDirty(); }

function fuDelGatherItem(btn){ fuCommitGather(); const tr=btn.closest('tr'); fuModel.gather.itemTables[+tr.dataset.git].items.splice(+tr.dataset.gii,1); fuRenderGather(); markDirty(); }


// ══════════════════════════════════════════════════════════════════════════════
// TRAINING / ARENA SETS
// ══════════════════════════════════════════════════════════════════════════════

const EQUIP_TYPES = {0:'Legs',1:'Head',2:'Chest',3:'Arms',4:'Waist',5:'Weapon (BM)',6:'Weapon (Gun)'};

function parseFUArenaSets(d, base) {
  const sets = [];
  for (let s = 0; s < 5; s++) {
    let o = base + s * 154;
    const set = { players: d[o], pointMult: d[o+1], equips: [], items: [] };
    o += 2;
    for (let e = 0; e < 6; e++) {
      set.equips.push({
        unkn: d[o], type: d[o+1], id: ru16(d,o+2), grade: ru16(d,o+4),
        deco1: ru16(d,o+6), deco2: ru16(d,o+8), deco3: ru16(d,o+10)
      });
      o += 12;
    }
    for (let i = 0; i < 20; i++) {
      set.items.push({ item: ru16(d,o), qty: ru16(d,o+2) });
      o += 4;
    }
    sets.push(set);
  }
  return sets;
}

function fuRenderArena() {
  const wrap = document.getElementById('fu-arena-body');
  if (!wrap) return;
  wrap.innerHTML = '';
  const sets = fuModel.arenaSets || [];
  if (!sets.length) {
    wrap.innerHTML = '<div class="note">No arena/training data (ArenaPTR is 0).</div>';
    return;
  }
  const fuEquipListForType = (type) => {
    const map = {0:'LegArmorID',1:'HeadArmorID',2:'ChestArmorID',3:'ArmArmorID',4:'WaistArmorID',5:'WepBMID',6:'WepGunID'};
    return FU_EQUIP[map[type]] || [];
  };
  const fuEquipOpts = (list, sel) => {
    let h=''; list.forEach((n,i)=>{ if(n==='dummy') return; h+=`<option value="${i}"${i===sel?' selected':''}>${i} – ${n}</option>`; });
    if(!list[sel]||list[sel]==='dummy') h+=`<option value="${sel}" selected>${sel} – ???</option>`;
    return h;
  };
  const fuItemOpts = (sel) => {
    let h=''; ITEM_LIST.forEach(([id,n])=>{ h+=`<option value="${id}"${id===sel?' selected':''}>${id} – ${n}</option>`; });
    return h;
  };

  sets.forEach((set, si) => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.marginBottom = '12px';
    let h = `<div class="card-hdr">Set ${si+1} — Players: <input type="number" class="arena-players" data-si="${si}" value="${set.players}" min="0" max="4" style="width:50px"> `+
      `Points: <input type="number" class="arena-points" data-si="${si}" value="${set.pointMult}" min="0" max="255" style="width:60px">%</div>`;
    h += '<div class="card-body"><div style="font-size:11px;color:var(--accent);margin-bottom:4px;font-weight:bold">Equipment</div>';
    h += '<table style="font-size:12px"><thead><tr><th>Slot</th><th>Type</th><th>Equip</th><th>Deco 1</th><th>Deco 2</th><th>Deco 3</th></tr></thead><tbody>';
    set.equips.forEach((eq, ei) => {
      const label = ei === 0 ? 'Weapon' : ['Head','Chest','Arms','Waist','Legs'][ei-1] || ('Slot'+ei);
      const typeOpts = Object.entries(EQUIP_TYPES).map(([k,v])=>`<option value="${k}"${+k===eq.type?' selected':''}>${v}</option>`).join('');
      const eqList = fuEquipListForType(eq.type);
      h += `<tr>`+
        `<td style="color:var(--muted)">${label}</td>`+
        `<td><select class="arena-eq-type" data-si="${si}" data-ei="${ei}">${typeOpts}</select></td>`+
        `<td><select class="arena-eq-id" data-si="${si}" data-ei="${ei}" style="max-width:220px">${fuEquipOpts(eqList, eq.id)}</select></td>`+
        `<td><select class="arena-eq-d1" data-si="${si}" data-ei="${ei}" style="max-width:170px">${fuItemOpts(eq.deco1)}</select></td>`+
        `<td><select class="arena-eq-d2" data-si="${si}" data-ei="${ei}" style="max-width:170px">${fuItemOpts(eq.deco2)}</select></td>`+
        `<td><select class="arena-eq-d3" data-si="${si}" data-ei="${ei}" style="max-width:170px">${fuItemOpts(eq.deco3)}</select></td></tr>`;
    });
    h += '</tbody></table>';
    h += '<div style="font-size:11px;color:var(--accent);margin:8px 0 4px;font-weight:bold">Supply Items</div>';
    h += '<table style="font-size:12px"><thead><tr><th>#</th><th>Item</th><th>Qty</th></tr></thead><tbody>';
    set.items.forEach((it, ii) => {
      h += `<tr><td style="color:var(--muted)">${ii}</td>`+
        `<td><select class="arena-sitem" data-si="${si}" data-ii="${ii}" style="max-width:220px">${fuItemOpts(it.item)}</select></td>`+
        `<td><input type="number" class="arena-sqty" data-si="${si}" data-ii="${ii}" value="${it.qty}" min="0" max="65535" style="width:60px"></td></tr>`;
    });
    h += '</tbody></table></div>';
    card.innerHTML = h;
    card.querySelectorAll('.arena-eq-type').forEach(sel => {
      sel.addEventListener('change', function() {
        const si2=this.dataset.si, ei2=this.dataset.ei;
        const eqSel = card.querySelector(`.arena-eq-id[data-si="${si2}"][data-ei="${ei2}"]`);
        if(eqSel){ const list=fuEquipListForType(+this.value); eqSel.innerHTML=fuEquipOpts(list,0); }
      });
    });
    wrap.appendChild(card);
  });
}

function fuCommitArena() {
  const sets = fuModel.arenaSets || [];
  sets.forEach((set, si) => {
    const p = document.querySelector(`.arena-players[data-si="${si}"]`);
    if (p) set.players = parseInt(p.value)||0;
    const pt = document.querySelector(`.arena-points[data-si="${si}"]`);
    if (pt) set.pointMult = parseInt(pt.value)||0;
    set.equips.forEach((eq, ei) => {
      const sel = (cls) => document.querySelector(`.${cls}[data-si="${si}"][data-ei="${ei}"]`);
      const t = sel('arena-eq-type'); if(t) eq.type = parseInt(t.value)||0;
      const id = sel('arena-eq-id'); if(id) eq.id = parseInt(id.value)||0;
      const g = sel('arena-eq-grade'); if(g) eq.grade = parseInt(g.value)||0;
      const d1 = sel('arena-eq-d1'); if(d1) eq.deco1 = parseInt(d1.value)||0;
      const d2 = sel('arena-eq-d2'); if(d2) eq.deco2 = parseInt(d2.value)||0;
      const d3 = sel('arena-eq-d3'); if(d3) eq.deco3 = parseInt(d3.value)||0;
    });
    set.items.forEach((it, ii) => {
      const s = document.querySelector(`.arena-sitem[data-si="${si}"][data-ii="${ii}"]`);
      if(s) it.item = parseInt(s.value)||0;
      const q = document.querySelector(`.arena-sqty[data-si="${si}"][data-ii="${ii}"]`);
      if(q) it.qty = parseInt(q.value)||0;
    });
  });
}

function patchFUArenaInPlace(out, m) {
  if (!m.arenaSets || !m.arenaSets.length || !m.arenaPtr) return;
  const base = m.arenaPtr;
  const w16 = (o,v)=>{ out[o]=v&0xFF; out[o+1]=(v>>8)&0xFF; };
  m.arenaSets.forEach((set, si) => {
    let o = base + si * 154;
    out[o] = set.players & 0xFF;
    out[o+1] = set.pointMult & 0xFF;
    o += 2;
    set.equips.forEach(eq => {
      out[o] = eq.unkn & 0xFF; out[o+1] = eq.type & 0xFF;
      w16(o+2, eq.id); w16(o+4, eq.grade);
      w16(o+6, eq.deco1); w16(o+8, eq.deco2); w16(o+10, eq.deco3);
      o += 12;
    });
    set.items.forEach(it => { w16(o, it.item); w16(o+2, it.qty); o += 4; });
  });
}

// Patch gather data in-place from fuModel.gather into a byte array.
function patchFUGatherInPlace(out, m) {
  const g = m.gather; if (!g) return;
  const w16 = (o,v)=>{ out[o]=v&0xFF; out[o+1]=(v>>8)&0xFF; };
  const wf32 = (o,v)=>{ const b=new ArrayBuffer(4); new DataView(b).setFloat32(0,v,true); const u=new Uint8Array(b); for(let i=0;i<4;i++) out[o+i]=u[i]; };

  // Patch node tables: write each node back to its original offset
  g.tables.forEach(tbl => {
    (tbl.nodes||[]).forEach(n => {
      if (n.off === undefined || n.off <= 0) return;
      wf32(n.off,    n.x||0);
      wf32(n.off+4,  n.y||0);
      wf32(n.off+8,  n.z||0);
      wf32(n.off+12, n.maxMine||0);
      w16(n.off+16,  n.itemIdx||0);
      w16(n.off+18,  n.unkn||0);
      w16(n.off+20,  n.type||0);
      w16(n.off+22,  n.maxTimes||0);
    });
  });

  // Patch item tables: write each item back to its original offset
  g.itemTables.forEach(tbl => {
    (tbl.items||[]).forEach(it => {
      if (it.off === undefined || it.off <= 0) return;
      w16(it.off,   it.value||0);
      w16(it.off+2, it.item||0);
    });
  });
}
