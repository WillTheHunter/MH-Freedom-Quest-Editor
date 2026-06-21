/* SHARED: core engine, data tables, UI, loading, hex view, export
   Auto-split module — shares global scope with the other <script> files.
   Load order (set in index.html): shared.js → mhf2.js → mhfu.js → init.js */


// ── DATA TABLES ─────────────────────────────────────────────────────────────
const FU_MONSTER_LIST=[[1,'Rathian'],[2,'Fatalis'],[3,'Kelbi'],[4,'Mosswine'],[5,'Bullfango'],[6,'Yian Kut-Ku'],[7,'Lao Shan Lung'],[8,'Cephadrome'],[9,'Felyne'],[10,'Veggie Elder'],[11,'Rathalos'],[12,'Aptonoth'],[13,'Genprey'],[14,'Diablos'],[15,'Khezu'],[16,'Velociprey'],[17,'Gravios'],[19,'Vespoid'],[20,'Gypceros'],[21,'Plesioth'],[22,'Basarios'],[23,'Melynx'],[24,'Hornetaur'],[25,'Apceros'],[26,'Monoblos'],[27,'Velocidrome'],[28,'Gendrome'],[29,'Boulder'],[30,'Ioprey'],[31,'Iodrome'],[32,'Poogie'],[33,'Kirin'],[34,'Cephalos'],[35,'Giaprey'],[36,'Crimson Fatalis'],[37,'Pink Rathian'],[38,'Blue Yian Kut-Ku'],[39,'Purple Gypceros'],[40,'One-Ear Yian Garuga'],[41,'Silver Rathalos'],[42,'Gold Rathian'],[43,'Black Diablos'],[44,'White Monoblos'],[45,'Red Khezu'],[46,'Green Plesioth'],[47,'Black Gravios'],[48,'Daimyo Hermitaur'],[49,'Azure Rathalos'],[50,'Ashen Lao Shan Lung'],[51,'Blangonga'],[52,'Congalala'],[53,'Rajang'],[54,'Kushala Daora'],[55,'Shen Gaoren'],[56,'Great Thunderbug'],[57,'Shakalaka'],[58,'Yama Tsukami'],[59,'Chameleos'],[60,'Rusted Kushala Daora'],[61,'Blango'],[62,'Conga'],[63,'Remobra'],[64,'Lunastra'],[65,'Teostra'],[66,'Hermitaur'],[67,'Shogun Ceanataur'],[68,'Bulldrome'],[69,'Anteka'],[70,'Popo'],[71,'White Fatalis'],[73,'Ceanataur'],[75,'Tigrex'],[76,'Akantor'],[77,'Giadrome'],[78,'Yian Garuga'],[79,'King Shakalaka'],[80,'Queen Vespoid'],[81,'Nargacuga'],[82,'Hypnocatrice'],[83,'Lavasioth'],[84,'Copper Blangonga'],[85,'Emerald Congalala'],[86,'Plum Daimyo Hermitaur'],[87,'Terra Shogun Ceanataur'],[88,'Ukanlos'],[89,'Golden Rajang']];
const F2_MONSTER_LIST=[[1,'Rathian'],[2,'Fatalis'],[3,'Kelbi'],[4,'Mosswine'],[5,'Bullfango'],[6,'Yian Kut-Ku'],[7,'Lao Shan Lung'],[8,'Cephadrome'],[9,'Felyne'],[10,'Veggie Elder'],[11,'Rathalos'],[12,'Aptonoth'],[13,'Genprey'],[14,'Diablos'],[15,'Khezu'],[16,'Velociprey'],[17,'Gravios'],[19,'Vespoid'],[20,'Gypceros'],[21,'Plesioth'],[22,'Basarios'],[23,'Melynx'],[24,'Hornetaur'],[25,'Apceros'],[26,'Monoblos'],[27,'Velocidrome'],[28,'Gendrome'],[29,'Boulder'],[30,'Ioprey'],[31,'Iodrome'],[33,'Kirin'],[34,'Cephalos'],[35,'Giaprey'],[36,'Crimson Fatalis'],[37,'Pink Rathian'],[38,'Blue Yian Kut-Ku'],[39,'Purple Gypceros'],[40,'Yian Garuga'],[41,'Silver Rathalos'],[42,'Gold Rathian'],[43,'Black Diablos'],[44,'White Monoblos'],[45,'Red Khezu'],[46,'Green Plesioth'],[47,'Black Gravios'],[48,'Daimyo Hermitaur'],[49,'Azure Rathalos'],[50,'Ashen Lao Shan Lung'],[51,'Blangonga'],[52,'Congalala'],[53,'Rajang'],[54,'Kushala Daora'],[55,'Shen Gaoren'],[56,'Great Thunderbug'],[57,'Shakalaka'],[59,'Chameleos'],[60,'Rusted Kushala Daora'],[61,'Blango'],[62,'Conga'],[63,'Remobra'],[64,'Lunastra'],[65,'Teostra'],[66,'Hermitaur'],[67,'Shogun Ceanataur'],[68,'Bulldrome'],[69,'Anteka'],[70,'Popo'],[71,'White Fatalis'],[73,'Ceanataur'],[75,'Tigrex'],[76,'Akantor'],[77,'Giadrome']];
var MONSTER_LIST = null; // set by setGame()

var ITEM_LIST = null; // set by setGame()


const GATHER_NODE_TYPES = {0:'Gathering',3:'Mining',4:'Insect'};

// Gather table index → stageID per mapID (order matches stages.enum appearance)
const GATHER_STAGES = {
  1:[10,11,12,14,28,30,31],
  2:[21,32,33,34,35,36,37,38,39,40,41,42,43],
  3:[7,140,141,142,143,144,145,146,147,148,149,150],
  4:[9,151,152,153,154,155,156,157,158,159,160],
  5:[74,76,77,161,162,163,164,165,166,167,168,169],
  6:[110,111,112,113,114,115,116,117,118,119,120],
  7:[20,25],
  8:[8,88],
  9:[89,90],
  10:[91],
  11:[6,92,93,94,95,96,97,99,100,98],
  12:[13,46,66,85,141,176,177,178,179],
  13:[121,122,123,127,128,129,130,197],
  14:[83,84,124,125],
  15:[57,138],
  16:[184,185,186,187,188,189,190,191,192,193,194,195,196],
  17:[24,45,47,48,49,50,51,52,53,54,55,56],
  18:[16,29,44,67,68,69,70,71,72,73,75],
  19:[27,58,59,60,61,62,63,64,65,78,79],
  20:[1,2,3,4,5,18,19,22,23,26],
  21:[15,101,102,103,104,105,106,108,109,107],
  22:[82],
  23:[80,81],
  26:[201,202,203,204,205,206,207,208,209,210,211],
  27:[212,213,214,215,216,217,218,219,220,221,222,223,224],
  28:[225,226,227,228,229,230,231,232,233,234,235,236,237],
  29:[8,238,239,240,241,242,243,244,245,246],
  30:[247,248,249,250,251,252,253,254,255,256],
  31:[257,258,259,260,261,262,263,264,265,266]
};

function gatherStageName(mapId, tableIdx) {
  const stages = GATHER_STAGES[mapId];
  if (stages && tableIdx < stages.length) {
    const sid = stages[tableIdx];
    return STAGE_NAMES[sid] || ('Stage ' + sid);
  }
  return 'Table ' + tableIdx;
}

function gatherTypeOpts(selected) {
  let html = Object.entries(GATHER_NODE_TYPES).map(([k,v]) =>
    `<option value="${k}"${+k===selected?' selected':''}>${k} – ${v}</option>`).join('');
  if (GATHER_NODE_TYPES[selected] === undefined)
    html += `<option value="${selected}" selected>${selected} – ?</option>`;
  return html;
}

const SIZE_TABLE_OPTS = {0:'Fixed',1:'0% to 5%',2:'0% to 15%',3:'-5% to 14%',4:'-15% to 25%'};


const STAGES = {
  0:'Fort',1:'Village',2:'ForestHills (Day)',3:'Desert (Day)',4:'Swamp (Day)',
  5:'Volcano (Day)',6:'Jungle (Day)',7:'Schrade',8:'Battleground',
  9:'Great Arena',10:'Arena',11:'Snowy Mountain (Day)',12:'Town',
  13:'Tower 1',14:'Tower 2',15:'Tower 3',16:'ForestHills (Night)',
  17:'Desert (Night)',18:'Swamp (Night)',19:'Volcano (Night)',20:'Jungle (Night)',
  21:'Snowy Mountain (Night)',22:'Town (Night)',23:'Fort (Night)',
  24:'Great Arena (Night)',25:'Arena (Night)'
};

const STAGE_NAMES=['None','Jungle (N) (Base)','Jungle (N) (Area1)','Jungle (N) (Area2)','Jungle (N) (Area3)','Jungle (N) (Area4)','Snowy Mountains (D) (Secret)','Desert (D) (Secret)','Old Volcano (Secret)/Battleground (Base)','Swamp (D) (Secret)','Fortress (Base)','Fortress (Area4)','Fortress (Area5)','Kitchen','Fortress (Area1)','Snowy Mountains (N) (Secret)','Swamp (N) (Base)','DUMMY','Jungle (N) (Area5)','Jungle (N) (Area9)','Castle Schrade (Base)','Forest and Hills (D) (Base)','Jungle (N) (Area8)','Jungle (N) (Area7)','Desert (N) (Secret)','Castle Schrade (Area2)','Jungle (N) (Area6)','Volcano (N) (Secret)','Fortress (Area3)','Swamp (N) (Secret)','Fortress (Area2)','Fortress (Area6)','Forest and Hills (D) (Area6)','Forest and Hills (D) (Area3)','Forest and Hills (D) (Area10)','Forest and Hills (D) (Area8)','Forest and Hills (D) (Area9)','Forest and Hills (D) (Area4)','Forest and Hills (D) (Area2)','Forest and Hills (D) (Area1)','Forest and Hills (D) (Area5)','Forest and Hills (D) (Area7)','Forest and Hills (D) (Area11)','Forest and Hills (D) (Area12)','Swamp (N) (Area1)','Desert (N) (Base)','Farm','Desert (N) (Area2)','Desert (N) (Area7)','Desert (N) (Area3)','Desert (N) (Area6)','Desert (N) (Area5)','Desert (N) (Area1)','Desert (N) (Area4)','Desert (N) (Area8)','Desert (N) (Area9)','Desert (N) (Area10)','Tower (Kirin) (Base)','Volcano (N) (Base)','Volcano (N) (Area4)','Volcano (N) (Area5)','Volcano (N) (Area1)','Volcano (N) (Area2)','Volcano (N) (Area3)','Volcano (N) (Area7)','Volcano (N) (Area6)','Pokke Village (Room)','Swamp (N) (Area1)','Swamp (N) (Area3)','Swamp (N) (Area9)','Swamp (N) (Area8)','Swamp (N) (Area6)','Swamp (N) (Area5)','Swamp (N) (Area7)','Volcano (D) (Secret)','Swamp (N) (Area4)','Volcano (D) (Area9)','Volcano (D) (Area10)','Volcano (N) (Area9)','Volcano (N) (Area10)','Snowy Mountains Peak (Area1)','Snowy Mountains Peak (Base)','Arena (Moat)','Tower (WhiteFatty) (Area8)','Tower (WhiteFatty) (Area9)','Guildhall','','','Battleground (Area1)','Arena (Base)','Arena (Large)','Arena (Small)','Snowy Mountains (D) (Area4)','Snowy Mountains (D) (Area5)','Snowy Mountains (D) (Area3)','Snowy Mountains (D) (Area2)','Snowy Mountains (D) (Area7)','Snowy Mountains (D) (Area8)','Snowy Mountains (D) (Base)','Snowy Mountains (D) (Area1)','Snowy Mountains (D) (Area6)','Snowy Mountains (N) (Area4)','Snowy Mountains (N) (Area5)','Snowy Mountains (N) (Area3)','Snowy Mountains (N) (Area2)','Snowy Mountains (N) (Area7)','Snowy Mountains (N) (Area8)','Snowy Mountains (N) (Base)','Snowy Mountains (N) (Area1)','Snowy Mountains (N) (Area6)','Jungle (D) (Base)','Jungle (D) (Area1)','Jungle (D) (Area2)','Jungle (D) (Area3)','Jungle (D) (Area4)','Jungle (D) (Area5)','Jungle (D) (Area9)','Jungle (D) (Area8)','Jungle (D) (Area7)','Jungle (D) (Area6)','Jungle (D) (Area10)','Tower (Yama) (Base)','Tower (Yama) (Area1)','Tower (Yama) (Area2)','Tower (WhiteFatty) (Area10)','Tower (WhiteFatty) (Area6)','','Tower (Yama) (Area6)/(WhiteFatty) (Area7)','Tower (Yama) (Area5)','Tower (Yama) (Area4)','Tower (Yama) (Area3)','','','','','','','','Tower (Kirin) (Area1)','Pokke Village','Desert (D) (Base)','Desert (D) (Area2)','Desert (D) (Area7)','Desert (D) (Area3)','Desert (D) (Area6)','Desert (D) (Area5)','Desert (D) (Area1)','Desert (D) (Area4)','Desert (D) (Area8)','Desert (D) (Area9)','Desert (D) (Area10)','Swamp (D) (Base)','Swamp (D) (Area1)','Swamp (D) (Area2)','Swamp (D) (Area3)','Swamp (D) (Area9)','Swamp (D) (Area8)','Swamp (D) (Area6)','Swamp (D) (Area5)','Swamp (D) (Area7)','Swamp (D) (Area4)','Volcano (D) (Base)','Volcano (D) (Area4)','Volcano (D) (Area5)','Volcano (D) (Area1)','Volcano (D) (Area2)','Volcano (D) (Area3)','Volcano (D) (Area7)','Volcano (D) (Area6)','Volcano (D) (Area8)','','','','','','','Town (Area3)','Town (Area1)','Town (Area2)','Town (Base)','','','','','Forest and Hills (N) (Base)','Forest and Hills (N) (Area6)','Forest and Hills (N) (Area3)','Forest and Hills (N) (Area10)','Forest and Hills (N) (Area8)','Forest and Hills (N) (Area9)','Forest and Hills (N) (Area4)','Forest and Hills (N) (Area2)','Forest and Hills (N) (Area1)','Forest and Hills (N) (Area5)','Forest and Hills (N) (Area7)','Forest and Hills (N) (Area11)','Forest and Hills (N) (Area12)','Tower (Yama) (Area7)','','','','Old Jungle (Area3)','Old Jungle (Area1)','Old Jungle (Area7)','Old Jungle (Base)','Old Jungle (Area5)','Old Jungle (Area4)','Old Jungle (Area6)','Old Jungle (Area9)','Old Jungle (Area10)','Old Jungle (Area8)','Old Jungle (Area2)','Old Desert (Area2)','Old Desert (Area6)','Old Desert (Area9)','Old Desert (Area8)','Old Desert (Base)','Old Desert (Area1)','Old Desert (Area4)','Old Desert (Area10)','Old Desert (Area5)','Old Desert (Area11)','Old Desert (Area7)','Old Desert (Area3)','Old Desert (Secret)','Old Swamp (Area3)','Old Swamp (Area5)','Old Swamp (Area1)','Old Swamp (Area4)','Old Swamp (Base)','Old Swamp (Area2)','Old Swamp (Area9)','Old Swamp (Area8)','Old Swamp (Area10)','Old Swamp (Area6)','Old Swamp (Area11)','Old Swamp (Area7)','Old Swamp (Secret)','Old Volcano (Area2)','Old Volcano (Area4)','Old Volcano (Area5)','Old Volcano (Base)','Old Volcano (Area8)','Old Volcano (Area1)','Old Volcano (Area3)','Old Volcano (Area6)','Old Volcano (Area7)','Great Forest (D) (Base)','Great Forest (D) (Area1)','Great Forest (D) (Area2)','Great Forest (D) (Area3)','Great Forest (D) (Area4)','Great Forest (D) (Area5)','Great Forest (D) (Area6)','Great Forest (D) (Area7)','Great Forest (D) (Area8)','Great Forest (D) (Secret)','Great Forest (N) (Base)','Great Forest (N) (Area1)','Great Forest (N) (Area2)','Great Forest (N) (Area3)','Great Forest (N) (Area4)','Great Forest (N) (Area5)','Great Forest (N) (Area6)','Great Forest (N) (Area7)','Great Forest (N) (Area8)','Great Forest (N) (Secret)'];
const F2_STAGE_LIMIT = 199; // indices 0..198 valid for F2 (up to Forest and Hills (N) Area12)

const MAP_NAMES=['None','Fortress','Forest and Hills (D)','Desert (D)','Swamp (D)','Volcano (D)','Jungle (D)','Castle Schrade','Battleground','Arena (Large)','Arena (Small)','Snowy Mountain (D)','Town','Tower 3','Tower 2','Tower 1','Forest and Hills (N)','Desert (N)','Swamp (N)','Volcano (N)','Jungle (N)','Snowy Mountain (N)','Moat Arena','Snowy Mountains Peak','Invalid 24','Invalid 25','Old Jungle','Old Desert','Old Swamp','Old Volcano','Great Forest (D)','Great Forest (N)'];
const F2_MAP_LIMIT = 26; // indices 0..25 valid for F2

function stageName(id) { return STAGE_NAMES[id] || ('Stage ' + id); }
function stageOpts(selected, isFU) {
  const limit = isFU ? STAGE_NAMES.length : F2_STAGE_LIMIT;
  let html = '';
  for (let i = 0; i < limit; i++) {
    const n = STAGE_NAMES[i];
    if (!n) continue;
    html += `<option value="${i}"${i===selected?' selected':''}>${i} – ${n}</option>`;
  }
  if (selected >= limit || !STAGE_NAMES[selected])
    html += `<option value="${selected}" selected>${selected} – Custom</option>`;
  return html;
}
function mapOpts(selected, isFU) {
  const limit = isFU ? MAP_NAMES.length : F2_MAP_LIMIT;
  let html = '';
  for (let i = 0; i < limit; i++) {
    const n = MAP_NAMES[i];
    if (!n || n.startsWith('Invalid')) continue;
    html += `<option value="${i}"${i===selected?' selected':''}>${i} – ${n}</option>`;
  }
  if (selected >= limit || !MAP_NAMES[selected])
    html += `<option value="${selected}" selected>${selected} – Custom</option>`;
  return html;
}

const MONSTERS={0x00:'None',0x01:'Rathian',0x02:'Fatalis',0x03:'Kelbi',0x04:'Mosswine',0x05:'Bullfango',0x06:'Yian Kut-Ku',0x07:'Lao-Shan Lung',0x08:'Cephadrome',0x09:'Felyne',0x0A:'Veggie Elder',0x0B:'Rathalos',0x0C:'Aptonoth',0x0D:'Genprey',0x0E:'Diablos',0x0F:'Khezu',0x10:'Velociprey',0x11:'Gravios',0x12:'Cat Cart',0x13:'Vespoid',0x14:'Gypceros',0x15:'Plesioth',0x16:'Basarios',0x17:'Melynx',0x18:'Hornetaur',0x19:'Apceros',0x1A:'Monoblos',0x1B:'Velocidrome',0x1C:'Gendrome',0x1D:'Rocks',0x1E:'Ioprey',0x1F:'Iodrome',0x20:'Poogie',0x21:'Kirin',0x22:'Cephalos',0x23:'Giaprey',0x24:'Crimson Fatalis',0x25:'Pink Rathian',0x26:'Blue Yian Kut-Ku',0x27:'Purple Gypceros',0x28:'One-Ear Yian Garuga',0x29:'Silver Rathalos',0x2A:'Gold Rathian',0x2B:'Black Diablos',0x2C:'White Monoblos',0x2D:'Red Khezu',0x2E:'Green Plesioth',0x2F:'Black Gravios',0x30:'Daimyo Hermitaur',0x31:'Azure Rathalos',0x32:'Ashen Lao-Shan Lung',0x33:'Blangonga',0x34:'Congalala',0x35:'Rajang',0x36:'Kushala Daora',0x37:'Shen Gaoren',0x38:'Great Thunderbug',0x39:'Shakalaka',0x3A:'Yama Tsukami',0x3B:'Chameleos',0x3C:'Rusted Kushala Daora',0x3D:'Blango',0x3E:'Conga',0x3F:'Remobra',0x40:'Lunastra',0x41:'Teostra',0x42:'Hermitaur',0x43:'Shogun Ceanataur',0x44:'Bulldrome',0x45:'Anteka',0x46:'Popo',0x47:'White Fatalis',0x48:'Yama Tsukami',0x49:'Ceanataur',0x4A:'Miner Wyverian',0x4B:'Tigrex',0x4C:'Akantor',0x4D:'Giadrome',0x4E:'Yian Garuga',0x4F:'King Shakalaka',0x50:'Vespoid Queen',0x51:'Nargacuga',0x52:'Hypnocatrice',0x53:'Lavasioth',0x54:'Copper Blangonga',0x55:'Emerald Congalala',0x56:'Plum Daimyo Hermitaur',0x57:'Terra Shogun Ceanataur',0x58:'Ukanlos',0x59:'Furious Rajang',0xFFFFFFFF:'— empty —'};

const MAX_BYTES = {name:512,success:512,failure:512,desc:1024,monster:512,client:512};


// ── BINARY HELPERS ───────────────────────────────────────────────────────────
const ru32=(d,o)=>((d[o]|d[o+1]<<8|d[o+2]<<16|d[o+3]<<24))>>>0;

const ru16=(d,o)=>(d[o]|d[o+1]<<8)>>>0;

const ru8=(d,o)=>d[o];

function wu32(d,o,v){v>>>=0;d[o]=v&255;d[o+1]=(v>>8)&255;d[o+2]=(v>>16)&255;d[o+3]=(v>>24)&255}

function wu16(d,o,v){d[o]=v&255;d[o+1]=(v>>8)&255}

function wu8(d,o,v){d[o]=v&255}

function rstr(d,o){let e=o;while(e<d.length&&d[e])e++;const sl=d.slice(o,e);try{const u=new TextDecoder('utf-8',{fatal:true}).decode(sl);return u}catch(_){}try{return new TextDecoder('shift-jis').decode(sl)}catch(x){return new TextDecoder().decode(sl)}}

// ── EU MULTI-LANGUAGE SUPPORT ───────────────────────────────────────────────
const EU_LANG_SLOTS = {0:'English',2:'German',3:'French',4:'Spanish',5:'Italian'};
const EU_LANG_ORDER = [0,3,2,5,4]; // EN, FR, DE, IT, ES
const EU_LANG_FLAGS = {0:'🇬🇧',2:'🇩🇪',3:'🇫🇷',4:'🇪🇸',5:'🇮🇹'};
var euMode = false;
var euLangData = null; // {slots:[{commPtr, texts:{name,success,...}},...], isEU:bool}

// Convert JS string (with literal \n) to bytes, treating \n as 0x0A
function strToBytes(s){
  // textarea gives real newline chars, input fields may have literal \n
  // normalize: keep real \n, also convert literal backslash-n
  return new TextEncoder().encode(s);
}


// ── STATE ────────────────────────────────────────────────────────────────────
var D=null, fname='', isDirty=false;

var ptrs={}, tptrs={}, tcaps={};

var origPenalty=0;

var bossAppearEntries=[], bossAppearPtr=0, bossEndMarkOff=0;

var smData=[];
 // full small monster config sets
var gatherData={};


function parseGatheringData(d) {
  const gd = { areaInfoPtrs:[], areas:[], pointDataPtrs:[], pointDataMaterials:[] };
  const giBase = ptrs.gather;
  if (!giBase || giBase >= d.length) return gd;

  // Area pointer table: array of u32 pointers. ptr==0 means empty area (keep it).
  // Terminate when pointer exceeds file size.
  for (let i = 0; i < 90; i++) {
    const pOff = giBase + i*4;
    if (pOff + 4 > d.length) break;
    const ap = ru32(d, pOff);
    if (ap > d.length) break;
    gd.areaInfoPtrs.push(ap);
    const area = { ptr: ap, points: [] };
    if (ap > 0 && ap + 0x18 <= d.length) {
      let off = ap;
      for (let pi = 0; pi < 64; pi++) {
        if (off + 0x18 > d.length) break;
        if (ru32(d, off) === 0xBF800000) break; // X == -1.0 sentinel
        const x = rf32(d, off);
        const z = rf32(d, off+4);
        const y = rf32(d, off+8);
        const range = rf32(d, off+12);
        const code = ru16(d, off+0x10);
        const freqUpper = ru16(d, off+0x12);
        const gatherType = ru16(d, off+0x14);
        const freqLower = ru16(d, off+0x16);
        area.points.push({ off, x, z, y, range, code, freqUpper, gatherType, freqLower });
        off += 0x18;
      }
    }
    gd.areas.push(area);
  }

  // Gathering Point Data @ ptrs.acqdata: array of { Ptr→MaterialList } per code
  const pdBase = ptrs.acqdata;
  if (pdBase > 0 && pdBase < d.length) {
    for (let ci = 0; ci < 128; ci++) {
      if (pdBase + ci*4 + 4 > d.length) break;
      const matPtr = ru32(d, pdBase + ci*4);
      if (matPtr === 0 || matPtr >= d.length) break;
      gd.pointDataPtrs.push({ off: pdBase + ci*4, ptr: matPtr });
      const mats = [];
      let moff = matPtr;
      for (let mi = 0; mi < 32; mi++) {
        if (moff + 4 > d.length) break;
        const prob = ru16(d, moff);
        const item = ru16(d, moff+2);
        if (prob === 0xFFFF) break;
        mats.push({ off: moff, prob, item });
        moff += 4;
      }
      gd.pointDataMaterials.push(mats);
    }
  }
  return gd;
}


// Orientation is a 16-bit BAM (Binary Angle Measurement) stored in the lower 2 bytes of a u32.
// Formula: degrees = (raw_u16 / 65536) * 360  →  raw_u16 = round(degrees / 360 * 65536) & 0xFFFF
function bamToDeg(raw){ return raw & 0xFFFF; }


function rf32(d, o) {
  const buf = new ArrayBuffer(4);
  new Uint8Array(buf).set(d.slice(o, o+4));
  return new DataView(buf).getFloat32(0, true);
}


// ── HEX↔DEC TOGGLE ──────────────────────────────────────────────────────────
function toggleHexDec(btn){
  const inp=btn.previousElementSibling;
  const val=inp.value.trim();
  const isHex=/^0x/i.test(val);
  if(isHex){
    // Convert hex → decimal
    const n=parseInt(val.replace(/^0x/i,''),16);
    inp.value=isNaN(n)?val:n;
    btn.textContent='hex';
    inp.style.fontFamily='var(--sans)';
  } else {
    // Convert decimal → hex
    const n=parseInt(val);
    inp.value=isNaN(n)?val:'0x'+n.toString(16).toUpperCase().padStart(inp.maxLength>6?8:4,'0');
    btn.textContent='dec';
    inp.style.fontFamily='var(--mono)';
  }
  markDirty();
}


// Helper: read hex-or-dec input as number
function parseHD(val){
  val=(val||'').trim();
  if(/^0x/i.test(val)) return parseInt(val.replace(/^0x/i,''),16)>>>0;
  return parseInt(val)||0;
}

// Alias used in gathering write-back
function parseHexDec(val){ return parseHD(val); }




// ── TEXT BADGES ───────────────────────────────────────────────────────────────
function updateBadge(fieldId,key,maxBytes){
  const el=document.getElementById('f-'+fieldId);
  const badge=document.getElementById('b-'+key);
  if(!el||!badge)return;
  const cur=strToBytes(el.value).length;
  badge.textContent=`${cur} bytes`;
  badge.className='badge bi';
}


// ── GLOBAL HEX/DEC MODE ───────────────────────────────────────────────────
var globalHexMode = true;


function fmtHex(n, bytes) {
  if (!globalHexMode) return (n >>> 0).toString();
  const pad = bytes * 2;
  return '0x' + (n >>> 0).toString(16).toUpperCase().padStart(pad, '0');
}


function makeMonsterPick(name, value, attrs) {
  const wrap = document.createElement('div');
  wrap.className = 'monster-pick';
  wrap.style.cssText = 'display:flex;flex-direction:column;gap:2px';
  const sel = document.createElement('select');
  if (attrs) Object.entries(attrs).forEach(([k,v]) => sel.setAttribute(k, v));
  const defOpt = document.createElement('option');
  defOpt.value = ''; defOpt.textContent = '— pick monster —';
  sel.appendChild(defOpt);
  MONSTER_LIST.forEach(([id, nm]) => {
    const o = document.createElement('option');
    o.value = id;
    o.textContent = (globalHexMode ? '0x'+id.toString(16).toUpperCase().padStart(2,'0') : id) + ' – ' + nm;
    sel.appendChild(o);
  });
  const customOpt = document.createElement('option');
  customOpt.value = '__custom__'; customOpt.textContent = '— Custom ID —';
  sel.appendChild(customOpt);
  const hexVal = (value >>> 0) & 0xFFFF;
  let matched = false;
  for (const o of sel.options) { if (o.value !== '__custom__' && parseInt(o.value) === hexVal) { sel.value = o.value; matched = true; break; } }
  const inp = document.createElement('input');
  inp.type = 'number'; inp.min = '0'; inp.max = '65535';
  inp.placeholder = 'ID'; inp.className = 'custom-id-input';
  inp.style.cssText = 'background:var(--bg);border:1px solid var(--border);color:var(--text);font-family:var(--mono);font-size:12px;padding:2px 6px;border-radius:3px;width:80px;display:none';
  if (!matched && hexVal !== 0) {
    sel.value = '__custom__';
    inp.value = hexVal;
    inp.style.display = '';
  }
  sel.addEventListener('change', () => {
    if (sel.value === '__custom__') { inp.style.display = ''; inp.focus(); }
    else { inp.style.display = 'none'; inp.value = ''; }
  });
  wrap.appendChild(sel); wrap.appendChild(inp);
  return wrap;
}


function readMonsterPick(el) {
  return readAnyPick(el, ['monster-pick','mcb-wrap']);
}


// Unified picker reader. Works whether `el` is the wrapper div (item-pick /
// monster-pick / mcb-wrap), the inner <select>, or any ancestor containing one.
// Reads the free-text hex/number input first (if filled), else the select value.
function readAnyPick(el, wrapClasses) {
  if (!el) return 0;
  // All wrapper class names we might encounter (mcb-wrap is the live one).
  const allWraps = wrapClasses.concat(['mcb-wrap','item-pick','monster-pick']);
  let wrap = null;
  if (el.classList) {
    for (const c of allWraps) { if (el.classList.contains(c)) { wrap = el; break; } }
  }
  if (!wrap) {
    if (el.tagName === 'SELECT') {
      wrap = el.parentElement || el;
    } else {
      for (const c of allWraps) { const f = el.querySelector('.'+c); if (f) { wrap = f; break; } }
      // last resort: any select inside el
      if (!wrap) { const s = el.querySelector('select'); wrap = s ? (s.parentElement||s) : el; }
    }
  }
  const sel = wrap.tagName === 'SELECT' ? wrap : wrap.querySelector('select');
  const inp = wrap.tagName === 'SELECT' ? null : wrap.querySelector('input');
  if (sel && sel.value === '__custom__' && inp && inp.value !== '') {
    const v = parseInt(inp.value);
    if (!isNaN(v)) return v;
  }
  if (inp && inp.value !== '' && inp.value != null && inp.style.display !== 'none') {
    const v = parseHD(String(inp.value));
    if (!isNaN(v)) return v;
  }
  if (sel && sel.value !== '' && sel.value !== '__custom__') return parseInt(sel.value) || 0;
  return 0;
}


function makeItemPick(name, value, attrs) {
  const wrap = document.createElement('div');
  wrap.className = 'item-pick';
  wrap.style.cssText = 'display:flex;flex-direction:column;gap:2px;min-width:200px';
  const sel = document.createElement('select');
  if (attrs) Object.entries(attrs).forEach(([k,v]) => sel.setAttribute(k, v));
  const defOpt = document.createElement('option');
  defOpt.value = ''; defOpt.textContent = '— pick item —';
  sel.appendChild(defOpt);
  ITEM_LIST.forEach(([id, nm]) => {
    const o = document.createElement('option');
    o.value = id;
    o.textContent = (globalHexMode ? '0x'+id.toString(16).toUpperCase().padStart(4,'0') : id) + ' – ' + nm;
    sel.appendChild(o);
  });
  const customOpt = document.createElement('option');
  customOpt.value = '__custom__'; customOpt.textContent = '— Custom ID —';
  sel.appendChild(customOpt);
  const hexVal = value >>> 0;
  let matched = false;
  for (const o of sel.options) { if (o.value !== '__custom__' && parseInt(o.value) === hexVal) { sel.value = o.value; matched = true; break; } }
  const inp = document.createElement('input');
  inp.type = 'number'; inp.min = '0'; inp.max = '65535';
  inp.placeholder = 'ID'; inp.className = 'custom-id-input';
  inp.style.cssText = 'background:var(--bg);border:1px solid var(--border);color:var(--text);font-family:var(--mono);font-size:12px;padding:2px 6px;border-radius:3px;width:80px;display:none';
  if (!matched && hexVal !== 0) {
    sel.value = '__custom__';
    inp.value = hexVal;
    inp.style.display = '';
  }
  sel.addEventListener('change', () => {
    if (sel.value === '__custom__') { inp.style.display = ''; inp.focus(); }
    else { inp.style.display = 'none'; inp.value = ''; }
  });
  wrap.appendChild(sel); wrap.appendChild(inp);
  return wrap;
}


function readItemPick(el) {
  return readAnyPick(el, ['item-pick','mcb-wrap']);
}


// ── EDITABLE HEX VIEW ────────────────────────────────────────────────────
var hexEditOffset = -1;

var hexEditPending = '';


function renderHex(d) {
  const lines = []; const lim = d.length;
  document.getElementById('hex-edit-bar').style.display = lim > 0 ? 'block' : 'none';
  for (let o = 0; o < lim; o += 16) {
    let h = '', a = '';
    for (let i = 0; i < 16 && o + i < d.length; i++) {
      const b = d[o + i];
      const off = o + i;
      const hi = (off >= 4 && off < 0x28);
      const hex = b.toString(16).padStart(2, '0');
      h += `<span class="hex-byte${hi?' hh':''}" data-off="${off}">${hex}</span> `;
      a += (b >= 32 && b < 127) ? String.fromCharCode(b) : '·';
    }
    lines.push(`<span class="ho">${o.toString(16).padStart(4, '0')}:</span> ${h}<span class="ha">${a}</span>`);
  }
  const view = document.getElementById('hex-view');
  view.innerHTML = lines.join('\n');
  // Single delegated listener — set once, replaced each render
  view.onclick = e => {
    const span = e.target.closest('.hex-byte');
    if (span) startHexEdit(parseInt(span.dataset.off), span);
  };
}


function startHexEdit(offset, span) {
  document.querySelectorAll('.hex-byte.editing').forEach(s => s.classList.remove('editing'));
  hexEditOffset = offset;
  hexEditPending = '';
  span.classList.add('editing');
  span.textContent = '__';
  const inp = document.getElementById('hex-edit-inp');
  inp.value = ''; inp.focus();
  function onKey(e) {
    if (e.key === 'Escape') { cancelHexEdit(span, offset); cleanup(); return; }
    if (e.key === 'Enter' || e.key === 'Tab') {
      if (hexEditPending.length >= 1) commitHexEdit(offset, hexEditPending.padStart(2,'0'), span);
      else cancelHexEdit(span, offset);
      cleanup(); e.preventDefault(); return;
    }
    if (e.key === 'Backspace') { hexEditPending = hexEditPending.slice(0,-1); span.textContent = hexEditPending.padEnd(2,'_'); return; }
    const c = e.key.toLowerCase();
    if ('0123456789abcdef'.includes(c) && hexEditPending.length < 2) {
      hexEditPending += c;
      span.textContent = hexEditPending.padEnd(2, '_');
      if (hexEditPending.length === 2) { commitHexEdit(offset, hexEditPending, span); cleanup(); }
    }
    e.preventDefault();
  }
  function onBlur() { cancelHexEdit(span, offset); cleanup(); }
  function cleanup() { inp.removeEventListener('keydown', onKey); inp.removeEventListener('blur', onBlur); }
  inp.addEventListener('keydown', onKey);
  inp.addEventListener('blur', onBlur);
}


function commitHexEdit(offset, hexStr, span) {
  const val = parseInt(hexStr, 16);
  D[offset] = val;
  span.classList.remove('editing');
  span.textContent = val.toString(16).padStart(2,'0');
  hexEditOffset = -1;
  markDirty();
}


function cancelHexEdit(span, offset) {
  span.classList.remove('editing');
  span.textContent = D[offset].toString(16).padStart(2,'0');
  hexEditOffset = -1;
}


// ── HEX VIEW (old stub replaced above) ───────────────────────────────────

// ── STRING WRITING ────────────────────────────────────────────────────────────
// Write string into file. If new content fits in current allocation, write in-place.
// If it exceeds current allocation but fits in globalMax, we need to expand.
// Expansion strategy: since strings are contiguous, we shift subsequent strings forward.
// For safety in this tool: warn and truncate to globalMax if needed.
// The 0x0A byte is preserved for newlines.
function writeString(d, key, newVal) {
  const enc = strToBytes(newVal);
  const globalMax = MAX_BYTES[key];
  const cap = tcaps[key]; // current allocation in file (includes null bytes)
  const off = tptrs[key];

  // Truncate to global max
  let bytes = enc.length > globalMax ? enc.slice(0, globalMax) : enc;
  const needed = bytes.length + 1; // +1 for null terminator

  if (needed <= cap) {
    // Fits in current allocation — write in-place, zero the rest of the slot
    for (let i = 0; i < cap; i++) d[off + i] = 0;
    for (let i = 0; i < bytes.length; i++) d[off + i] = bytes[i];
  } else {
    // Need more space than currently allocated.
    // Expand by shifting bytes forward from the point after this field.
    const extraNeeded = needed - cap; // how many bytes we need to insert
    const insertAt = off + cap;       // where to insert extra bytes

    // Build new file with inserted zeros
    const newD = new Uint8Array(d.length + extraNeeded);
    newD.set(d.slice(0, insertAt), 0);
    newD.set(d.slice(insertAt), insertAt + extraNeeded);
    // Copy back into D (we'll overwrite D in place after caller returns)
    d.set(newD.slice(0, d.length)); // only safe if same length - need to resize

    // Since Uint8Array can't resize, rebuild it. We signal caller via return value.
    // Write the string into the new buffer, then return it.
    const nd = new Uint8Array(d.length + extraNeeded);
    nd.set(d.slice(0, insertAt));
    nd.set(d.slice(insertAt), insertAt + extraNeeded);
    // Write string at off in nd
    for (let i = 0; i < cap + extraNeeded; i++) nd[off + i] = 0;
    for (let i = 0; i < bytes.length; i++) nd[off + i] = bytes[i];

    // Update all pointers in nd that pointed past insertAt
    fixPointersAfterInsert(nd, insertAt, extraNeeded);

    // Update tcaps and tptrs for subsequent fields
    for (const [k, v] of Object.entries(tptrs)) {
      if (v > insertAt || (v === off && k !== key)) tptrs[k] = v + extraNeeded;
    }
    tcaps[key] = needed;
    // Update sorted neighbours
    const sorted = Object.entries(tptrs).sort((a,b) => a[1]-b[1]);
    for (let i = 0; i < sorted.length; i++) {
      const [k, o] = sorted[i];
      tcaps[k] = i + 1 < sorted.length
        ? sorted[i+1][1] - o
        : (ptrs.qi + 20 > insertAt ? ru32(nd, ptrs.qi+20)+extraNeeded : ru32(nd, ptrs.qi+20)) - o;
    }

    return nd; // caller must replace D with this
  }
  return null;
}


function fixPointersAfterInsert(d, insertAt, delta) {
  // Scan the first ~0x200 bytes for pointer values; adjust any that point past insertAt.
  // Only adjust the known text pointer locations to be safe (avoid false positives).
  const qi = ptrs.qi;
  const tcPtr = ru32(d, qi+0x14);  // TaskContentPtr at qi+0x14 (decimal 20)
  const ecPtr = ru32(d, tcPtr);

  function fixPtr(off) {
    const v = ru32(d, off);
    if (v >= insertAt && v < 0xFFFF0000) wu32(d, off, v + delta);
  }
  // Header pointers
  [0x04,0x08,0x0C,0x10,0x14,0x18,0x1C,0x20,0x24].forEach(fixPtr);
  // qi+20 (TaskContentPtr)
  fixPtr(qi+20);
  // tcPtr -> ecPtr
  fixPtr(tcPtr);
  // ecPtr -> 6 text ptrs
  for(let i=0;i<6;i++) fixPtr(ecPtr+i*4);
}


function clamp(v,mn,mx){return Math.max(mn,Math.min(mx,v));}


// ── SAVE ─────────────────────────────────────────────────────────────────────
function doExport(format){ closeExportMenu(); doSave(format); }

function toggleExportMenu(){
  const m=document.getElementById('export-menu');
  m.style.display = (m.style.display==='none'||!m.style.display) ? 'block' : 'none';
}

function closeExportMenu(){ const m=document.getElementById('export-menu'); if(m) m.style.display='none'; }

document.addEventListener('click', e=>{
  const wrap=document.getElementById('export-menu-wrap');
  if(wrap && !wrap.contains(e.target)) closeExportMenu();
});


async function doSave(format){
  // format: undefined/'auto' (keep original), 'bin', 'mib', 'pat', or 'json'
  format = format || 'auto';

  // Safe mode: check crown sizes before export
  if(isSafeMode && isSafeMode()){
    applySafeSupply(); applySafeRewards(); applySafeGathering(); applySafeDefaults();
    if(!safeModeExportCheck()) return;
  }

  // 1. Apply edits → rebuild D
  try {
    if (GAME_MODE === 'mhf1') {
      applyChangesF1();
    } else if (GAME_MODE === 'mhfu') {
      applyChangesFU();
    } else {
      applyChanges();
    }
  } catch(err) {
    console.error('Apply/build failed:', err);
    setStatus('err', '⚠️ Could not build file: ' + err.message);
    alert('Export failed while building the quest:\n' + err.message);
    return;
  }
  if (!D || !D.length) { alert('Nothing to export.'); return; }


  // ── JSON export: human-readable dump of the parsed quest ──
  if (format === 'json') {
    const json = buildQuestJSON();
    const base = (fname || 'quest').replace(/\.[^.]+$/, '');
    const blob = new Blob([json], {type:'application/json'});
    await saveBlob(blob, base + '.json', '.json');
    setStatus('ok', fname + '  [exported JSON]');
    return;
  }

  // Determine output extension & whether a 4-byte .pat prefix is needed.
  const origExt = (fname && fname.includes('.')) ? fname.slice(fname.lastIndexOf('.')).toLowerCase() : '';
  let outExt, withPrefix;
  if (format === 'auto') {
    outExt = origExt || (GAME_MODE === 'mhfu' || GAME_MODE === 'mhf1' ? '.mib' : '.bin');
    withPrefix = !!PAT_PREFIX; // keep prefix only if the source had one
  } else if (format === 'pat') {
    if (!PAT_PREFIX) {
      alert('PAT export is only available when a .pat file was loaded.\n\nThe PAT format uses a different internal layout (section pointers, monster data, reward headers) that cannot be generated from a .mib/.bin file by simply adding a prefix.\n\nTo create a .pat quest, load an existing .pat file and edit it.');
      return;
    }
    outExt = '.pat'; withPrefix = true;
  } else { // 'bin' or 'mib' — both are the raw body, no prefix
    outExt = '.' + format; withPrefix = false;
  }

  // Build the bytes: body D, optionally prefixed with the 4-byte .pat header.
  let exportData;
  if (withPrefix) {
    const prefix = PAT_PREFIX || new Uint8Array([0x00,0x00,0x00,0x00]);
    exportData = new Uint8Array(4 + D.length);
    exportData.set(prefix, 0);
    exportData.set(D, 4);
  } else {
    exportData = D;
  }

  const base = (fname || (GAME_MODE === 'mhfu' ? 'quest' : 'quest')).replace(/\.[^.]+$/, '');
  const outName = base + outExt;
  const blob = new Blob([exportData.buffer.slice(exportData.byteOffset, exportData.byteOffset + exportData.byteLength)],
                        {type:'application/octet-stream'});
  await saveBlob(blob, outName, outExt);

  isDirty=false;
  document.getElementById('save-bar').style.display='none';
  document.getElementById('sdot').className='sdot ok';
  document.getElementById('stxt').textContent=outName+'  [exported]';
}


// Shared save helper: tries the File System Access API, falls back to download.
async function saveBlob(blob, suggestedName, ext){
  if (typeof window.showSaveFilePicker === 'function') {
    try {
      const mime = ext === '.json' ? 'application/json' : 'application/octet-stream';
      const handle = await window.showSaveFilePicker({
        suggestedName,
        types: [{ description: 'Quest file', accept: { [mime]: [ext || '.bin'] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return true;
    } catch(e) {
      if (e && e.name === 'AbortError') return false;
      console.warn('showSaveFilePicker failed, falling back to download:', e);
    }
  }
  _anchorDownload(blob, suggestedName);
  return true;
}


// Hex format helper for JSON
function hx(v){ return v===undefined||v===null ? null : '0x'+(v>>>0).toString(16).toUpperCase(); }
function _itemName(id, game) {
  if (game==='mhf1') return (typeof F1_ITEM_LIST!=='undefined'&&F1_ITEM_LIST[id]) || ('Item '+id);
  const e = (typeof ITEM_LIST!=='undefined') ? ITEM_LIST.find(x=>x[0]===id) : null;
  return e ? e[1] : ('Item '+id);
}
function _monName(id, game) {
  if (game==='mhf1') return (typeof F1_MONSTER_LIST!=='undefined'&&F1_MONSTER_LIST[id]) || ('Monster '+id);
  return (typeof MONSTERS!=='undefined'&&MONSTERS[id]) || ('Monster '+id);
}

// Build a readable JSON representation of the current quest.
function buildQuestJSON(){
  if (GAME_MODE==='mhfu') return _buildFUJSON();
  if (GAME_MODE==='mhf1') return _buildF1JSON();
  return _buildF2JSON();
}

function _buildF1JSON(){
  const m = f1Model || {};
  const obj = {
    game:'MHF1', file:fname,
    pointers:{
      questTypeFlagsPtr:hx(m.questTypeFlagsPtr), loadedStagesPtr:hx(m.loadedStagesPtr),
      supplyBoxPtr:hx(m.supplyBoxPtr), rewardPtr:hx(m.rewardPtr),
      fixedInfoPtr:hx(m.fixedInfoPtr), questAreaPtr:hx(m.questAreaPtr),
      largeMonsterPtr:hx(m.largeMonsterPtr), gatherPtr:hx(m.gatherPtr),
      someStringsPtr:hx(m.someStringsPtr), taskContentPtr:hx(m.taskContentPtr), commPtr:hx(m.commPtr),
    },
    questInfo:{
      questNumber:m.qnum, questNumberHex:hx(m.qnum), type:m.qtype, typeHex:hx(m.qtype),
      stars:m.stars, mapId:m.mapId, map:(F1_MAPS||[])[m.mapId]||('Map '+m.mapId),
      fee:m.fee, reward:m.reward, penalty:m.penalty,
      timeTicks:m.timeTicks, timeMinutes:+(m.timeTicks/1800).toFixed(1),
      difficulty:m.difficulty, difficultyHex:hx(m.difficulty),
      arrivePos:m.arrivePos, bossSize:m.bossSize, sizeMulti:m.sizeMulti,
      supplyMode:m.supplyMode, supplyCond:m.supplyCond, supplyCondQty:m.supplyCondQty,
      specCond:m.specCond, specCondHex:hx(m.specCond),
      hrp:m.hrp, hrpSwitch:m.hrpSwitch, bgSound:m.bgSound, bgSoundHex:hx(m.bgSound),
      unk1C:hx(m.unk1C), unk28:hx(m.unk28),
    },
    strings:{name:m.name, success:m.success, failure:m.failure, description:m.desc, hints:m.hints},
    euLanguages:(()=>{
      if(!m.langTexts||!Object.keys(m.langTexts).length) return undefined;
      const names={2:'German',3:'French',4:'Spanish',5:'Italian'};
      const out={}; for(const k in m.langTexts) out[names[k]||('lang'+k)]=m.langTexts[k]; return out;
    })(),
    supply:(m.supply||[]).map(s=>({itemId:s.item, itemIdHex:hx(s.item), name:_itemName(s.item,'mhf1'), qty:s.qty})),
    rewards:(m.rewards||[]).map(b=>({condition:b.cond, conditionHex:hx(b.cond),
      items:b.items.map(i=>({probability:i.prob, itemId:i.item, itemIdHex:hx(i.item), name:_itemName(i.item,'mhf1'), qty:i.qty}))})),
    bossDetails:(m.bossDetails||[]).map(b=>({id:b.id, idHex:hx(b.id), name:_monName(b.id,'mhf1'),
      area:b.area, qty:b.qty, state:b.state, stateHex:hx(b.state),
      x:b.x, y:b.y, z:b.z, orient:b.orient, pad1:b.pad1, pad2:b.pad2})),
    bossIds:(m.bossIds||[]).map(id=>id===0xFFFFFFFF?'0xFFFFFFFF':id),
    smallMonsters:{initial:m.smallInitial, change:m.smallChange},
    gathering:(m.gatherAreas||[]).filter(a=>a.points.length>0).map(a=>({
      areaId:a.areaId, areaIdHex:hx(a.areaId), areaName:f1AreaName(a.areaId),
      points:a.points.map(p=>({x:p.x, y:p.y, z:p.z, range:p.range,
        collectId:p.collectId, collectIdHex:hx(p.collectId), itemName:_itemName(p.collectId,'mhf1'),
        freqLimit:p.freqLimit, type:p.type, typeHex:hx(p.type),
        typeName:(typeof GATHER_NODE_TYPES!=='undefined'?GATHER_NODE_TYPES[p.type]:null)||('Type '+p.type),
        unk:p.unk}))})),
    fixedInfo:{status:m.fixedStatus, statusHex:hx(m.fixedStatus), unk:m.fixedUnk, unkHex:hx(m.fixedUnk)},
    fixedEntries:m.fixedEntries,
  };
  return JSON.stringify(obj, null, 2);
}

function _buildF2JSON(){
  const d=D;
  const obj={
    game:'MHF2', file:fname,
    pointers:{
      questInfo:hx(ptrs.qi), supply:hx(ptrs.supply), reward:hx(ptrs.reward),
      fixed:hx(ptrs.fixed), smallMonInfo:hx(ptrs.questarea), boss:hx(ptrs.boss),
      gather:hx(ptrs.gather), gatherItems:hx(ptrs.acqdata),
    },
    questInfo:{
      type:ru8(d,ptrs.qi), typeHex:hx(ru8(d,ptrs.qi)),
      questNumber:ru16(d,ptrs.qi+0x18), questNumberHex:hx(ru16(d,ptrs.qi+0x18)),
      stars:ru8(d,ptrs.qi+0x1A), map:ru8(d,ptrs.qi+0x1C),
      fee:ru32(d,ptrs.qi+0x04), reward:ru32(d,ptrs.qi+0x08),
      penalty:ru32(d,ptrs.qi+0x0C), timeTicks:ru32(d,ptrs.qi+0x10),
      timeMinutes:+(ru32(d,ptrs.qi+0x10)/1800).toFixed(1),
      specialCond:ru16(d,ptrs.qi+0x1E), specialCondHex:hx(ru16(d,ptrs.qi+0x1E)),
    },
    strings:{
      name:readF2String('name'), success:readF2String('success'),
      failure:readF2String('failure'), description:readF2String('desc'),
      monster:readF2String('monster'), client:readF2String('client'),
    },
    supply:dumpF2Supply(),
    rewards:dumpF2Rewards(),
    boss:dumpF2Boss(),
    smallMonsters:dumpF2SmallMon(),
    gathering:dumpF2Gather(),
  };
  return JSON.stringify(obj, null, 2);
}

function _buildFUJSON(){
  const m=fuModel||{};
  const lg=(m._lgList&&m._lgList.length!==undefined)?m._lgList:(m.largeMons||[]).flatMap(t=>t.mons);
  const obj={
    game:'MHFU', file:fname,
    header:m.header, visual:m.vdat, strings:m.strings,
    script:m.script,
    supply:(m.supply||[]).map(s=>({itemId:s.item, itemIdHex:hx(s.item), name:_itemName(s.item,'mhfu'), qty:s.qty})),
    rewards:(m.rewards||[]).map(b=>({unkn1:b.unkn1, unkn1Hex:hx(b.unkn1), unkn2:b.unkn2, unkn2Hex:hx(b.unkn2),
      items:(b.items||[]).map(i=>({chance:i.chance, itemId:i.item, itemIdHex:hx(i.item), name:_itemName(i.item,'mhfu'), amt:i.amt}))})),
    largeMonsters:lg.map(x=>({id:x.id, idHex:hx(x.id), name:_monName(x.id,'mhfu'), qty:x.qty, pow:x.pow, stage:x.stage, x:x.x, y:x.y, z:x.z, rot:x.rot})),
    smallAreas:(m.smallAreas||[]).map(a=>({stageId:a.stageId, monsters:(a.mons||[]).map(x=>({id:x.id, idHex:hx(x.id), name:_monName(x.id,'mhfu'), qty:x.qty, x:x.x, y:x.y, z:x.z}))})),
    gathering:_dumpFUGather(m),
    arenaPtr:m.arenaPtr?hx(m.arenaPtr):null,
  };
  return JSON.stringify(obj, null, 2);
}

function _dumpFUGather(m){
  const g=m.gather||(typeof fuGather!=='undefined'?fuGather:null);
  if(!g||!g.tables) return null;
  const itTbls = g.itemTables||[];
  return {
    tables:(g.tables||[]).map((t,ti)=>({
      index:ti,
      nodes:(t.nodes||[]).map(n=>{
        const idx = n.itemIdx!==undefined?n.itemIdx:n.collectId;
        const nType = n.type!==undefined?n.type:n.nodeType;
        const nodeItems = itTbls[idx] ? (itTbls[idx].items||[]) : [];
        return {
          x:n.x, y:n.y, z:n.z, range:n.maxMine!==undefined?n.maxMine:n.range,
          collectId:idx, collectIdHex:hx(idx),
          unk:n.unkn!==undefined?n.unkn:n.unk, nodeType:nType, nodeTypeHex:hx(nType),
          typeName:(typeof GATHER_NODE_TYPES!=='undefined'?GATHER_NODE_TYPES[nType]:null)||('Type '+nType),
          maxTimesMined:n.maxTimes!==undefined?n.maxTimes:n.maxTimesMined,
          items:nodeItems.map(it=>({
            probability:it.value!==undefined?it.value:it.prob,
            itemId:it.item, itemIdHex:hx(it.item), name:_itemName(it.item,'mhfu')
          }))
        };
      })
    }))
  };
}


// Small helpers for F2 JSON (best-effort, read from current D).
function readF2String(which){
  try {
    const tptr = {name:tptrs.name, success:tptrs.success, failure:tptrs.failure,
                  desc:tptrs.desc, monster:tptrs.monster, client:tptrs.client}[which];
    if (!tptr) return '';
    let end=tptr; while(end<D.length&&D[end]) end++;
    let s; try{s=new TextDecoder('shift-jis').decode(D.slice(tptr,end));}catch(e){s='';for(let o=tptr;o<end;o++)s+=String.fromCharCode(D[o]);}
    return s;
  } catch(e){ return ''; }
}
function dumpF2Supply(){
  const out=[]; let o=ptrs.supply;
  while(o+4<=D.length){ const it=ru16(D,o); if(it===0)break; out.push({itemId:it, itemIdHex:hx(it), name:_itemName(it,'mhf2'), qty:ru16(D,o+2)}); o+=4; }
  return out;
}

function dumpF2Rewards(){
  const blocks=[]; let o=ptrs.reward;
  for(let b=0;b<32 && o+8<=D.length;b++){
    const cond=ru32(D,o); const ip=ru32(D,o+4);
    if(cond===0xFFFFFFFF || !ip || ip>=D.length) break;
    const items=[]; let r=ip;
    for(let k=0;k<64 && r+6<=D.length;k++){ const pr=ru16(D,r); if(pr===0xFFFF)break; items.push({probability:pr, itemId:ru16(D,r+2), itemIdHex:hx(ru16(D,r+2)), name:_itemName(ru16(D,r+2),'mhf2'), qty:ru16(D,r+4)}); r+=6; }
    blocks.push({condition:cond, conditionHex:hx(cond), items}); o+=8;
  }
  return blocks;
}

function dumpF2Boss(){
  const out=[]; const dat=ru32(D,ptrs.boss+12);
  if(dat && dat<D.length){ let o=dat; for(let k=0;k<16 && o+60<=D.length;k++){ if(ru16(D,o)===0xFFFF)break;
    const id=ru16(D,o);
    out.push({id, idHex:hx(id), name:_monName(id,'mhf2'), state:ru16(D,o+2), stateHex:hx(ru16(D,o+2)),
      qty:D[o+4], area:D[o+7], x:rf32(D,o+32), z:rf32(D,o+36), y:rf32(D,o+40)}); o+=60; } }
  return out;
}

function dumpF2SmallMon(){
  const cfgs=[]; const base=ptrs.questarea;
  for(let ci=0;ci<3;ci++){
    const cp=ru32(D,base+ci*4); if(!cp||cp>=D.length){cfgs.push(null);continue;}
    const areas=[]; let o=cp;
    for(let a=0;a<16 && o+16<=D.length;a++){ const aid=ru32(D,o); if(aid===0&&a>0)break; const ap=ru32(D,o+12); const mons=[];
      if(ap&&ap<D.length){ let e=ap; for(let k=0;k<32 && e+60<=D.length;k++){ if(ru16(D,e)===0xFFFF)break;
        const id=ru16(D,e); mons.push({id, idHex:hx(id), name:_monName(id,'mhf2'), qty:D[e+4], x:rf32(D,e+32), z:rf32(D,e+36), y:rf32(D,e+40)}); e+=60; } }
      areas.push({areaID:aid, monsters:mons}); o+=16; }
    cfgs.push({config:ci, areas});
  }
  return cfgs;
}

function dumpF2Gather(){
  if(!gatherData || !gatherData.areas) return null;
  const out = [];
  gatherData.areas.forEach((area,ti) => {
    if(!area.points || !area.points.length) return;
    out.push({
      tableIndex: ti,
      nodes: area.points.map(p => {
        const n = {
          x:p.x, y:p.y, z:p.z, range:p.range,
          code:p.code, codeHex:hx(p.code),
          freqUpper:p.freqUpper, gatherType:p.gatherType, gatherTypeHex:hx(p.gatherType),
          typeName:(typeof GATHER_NODE_TYPES!=='undefined'?GATHER_NODE_TYPES[p.gatherType]:null)||('Type '+p.gatherType),
          freqLower:p.freqLower,
        };
        // Add material items from pointDataMaterials using code as index
        if(gatherData.pointDataMaterials && gatherData.pointDataMaterials[p.code]){
          n.items = gatherData.pointDataMaterials[p.code].map(m=>({
            probability:m.prob, itemId:m.item, itemIdHex:hx(m.item), name:_itemName(m.item,'mhf2')
          }));
        }
        return n;
      })
    });
  });
  return out.length ? out : null;
}


function _anchorDownload(blob,name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=name;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// ── FILE LOADING ──────────────────────────────────────────────────────────────
var PAT_PREFIX = null;
 // 4-byte Uint8Array saved when loading a .pat file

function loadFile(file){
  fname = file.name;
  // JSON import: read as text, detect game, and populate model
  if(/\.json$/i.test(fname)){
    const tr = new FileReader();
    tr.onload = ev => {
      try {
        const obj = JSON.parse(ev.target.result);
        if(!obj.game){ setStatus('err','⚠️ JSON missing "game" field'); return; }
        const g = obj.game.toLowerCase().replace(/\s/g,'');
        const detectedGame = g.includes('fu')||g.includes('unite') ? 'mhfu' : g.includes('f1')||g.includes('freedom1')||g.includes('mhf1') ? 'mhf1' : 'mhf2';
        if(detectedGame !== GAME_MODE){
          const btn = document.querySelector(`.game-btn[data-game="${detectedGame}"]`);
          setGame(detectedGame, btn);
        }
        if(detectedGame === 'mhf1' && typeof importF1FromJSON === 'function'){
          importF1FromJSON(obj);
        } else if(detectedGame === 'mhfu' && typeof importFUFromJSON === 'function'){
          importFUFromJSON(obj);
        } else if(detectedGame === 'mhf2' && typeof importF2FromJSON === 'function'){
          importF2FromJSON(obj);
        } else {
          setStatus('err','⚠️ JSON import not yet supported for '+obj.game);
          return;
        }
        document.getElementById('dz-wrap').style.display = 'none';
        document.getElementById('editor').style.display = 'block';
        document.getElementById('btn-open').style.display = 'inline-block';
        document.getElementById('export-menu-wrap').style.display = 'inline-block';
        setStatus('ok', fname + '  [imported from JSON]');
        document.getElementById('ssz').textContent = 'JSON import';
        isDirty = true;
        document.getElementById('save-bar').style.display = 'flex';
      } catch(ex){ setStatus('err','⚠️ JSON parse error: '+ex.message); console.error(ex); }
    };
    tr.readAsText(file);
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    const raw = new Uint8Array(e.target.result);
    const s = (o) => raw.length >= o+4 ? String.fromCharCode(raw[o],raw[o+1],raw[o+2],raw[o+3]) : '';
    const u32at = (o) => raw.length >= o+4 ? (raw[o]|raw[o+1]<<8|raw[o+2]<<16|raw[o+3]<<24)>>>0 : 0;

    let detectedGame = null, isPat = false, body = raw;

    if (s(0) === 'MHP2') {
      // MHF2 quest binary — magic at offset 0, pointer chain follows
      detectedGame = 'mhf2';
    } else if (s(4) === '2NDG') {
      // MHFU plain bin / mib — VDatPTR (0x4C) at 0, magic at 4. DO NOT strip anything.
      detectedGame = 'mhfu';
    } else if (s(8) === '2NDG' && u32at(4) === 0x4C) {
      // MHFU .pat — 4-byte prefix, then the quest data (VDatPTR + '2NDG')
      detectedGame = 'mhfu';
      isPat = true;
      PAT_PREFIX = raw.slice(0, 4);
      body = raw.slice(4);
    }
    // Heuristic for MHF1: no magic bytes, but pointers look valid for small files
    if (!detectedGame && raw.length >= 60 && raw.length < 65536) {
      const p0 = u32at(0), p1 = u32at(4), p2 = u32at(8);
      if (p0 > 0 && p0 < raw.length && p1 > 0 && p1 < raw.length && p2 > 0 && p2 < raw.length) {
        detectedGame = 'mhf1';
      }
    }
    // Check for encrypted .mib files (no recognizable magic)
    if (!detectedGame && s(0) !== 'MHP2' && s(4) !== '2NDG' && s(8) !== '2NDG') {
      const looksEncrypted = raw.length > 16 && u32at(0) !== 0x4C && s(0) !== 'MHP2';
      if (looksEncrypted && /\.mib$/i.test(fname)) {
        setStatus('err', '⚠️ This .mib file appears to be encrypted. Decrypt it first (e.g. with a PSP quest decryptor) before loading.');
        return;
      }
    }
    // Unknown header → keep the currently selected game profile and try to
    // parse anyway (permissive, like the original editor — works with any
    // extension: none / .bin / .mib / .pat).

    if (!isPat) PAT_PREFIX = null;
    D = body;

    if (detectedGame && detectedGame !== GAME_MODE) {
      // Switch profile without resetting the freshly loaded data
      const keep = D;
      D = null;
      const btn = document.querySelector(`.game-btn[data-game="${detectedGame}"]`);
      setGame(detectedGame, btn);
      D = keep;
    }

    try {
      if (GAME_MODE === 'mhf1') {
        if (typeof parseF1 === 'function') { parseF1(D); populateF1(D); }
        else { setStatus('err','⚠️ MHF1 module not loaded'); return; }
      } else if (GAME_MODE === 'mhfu') {
        if (!parseFU(D)) return;
        populateFU(D);
      } else {
        parseFile(D);
        buildStageSelect();
        populateUI(D);
      }
      upgradeSelectsToCombo();
    } catch(ex) {
      setStatus('err', '⚠️ Parse error: ' + ex.message);
      console.error(ex); return;
    }

    document.getElementById('dz-wrap').style.display = 'none';
    document.getElementById('editor').style.display = 'block';
    document.getElementById('btn-open').style.display = 'inline-block';
    document.getElementById('export-menu-wrap').style.display = 'inline-block';
    setStatus('ok', fname + (isPat ? '  [.pat — prefix preserved]' : ''));
    document.getElementById('ssz').textContent = D.length.toLocaleString() + ' bytes' + (isPat ? ' (excl. 4B prefix)' : '');
    isDirty = false;
    document.getElementById('save-bar').style.display = 'none';
    onQuestLoaded();
  };
  reader.readAsArrayBuffer(file);
}


// Load an in-memory quest (used by Create New Quest)
function loadFromData(bytes, name, isNew){
  D = bytes; fname = name; PAT_PREFIX = null;
  try {
    if (GAME_MODE === 'mhf1') {
      parseF1(D); populateF1(D);
    } else if (GAME_MODE === 'mhfu') {
      if (!parseFU(D)) return;
      populateFU(D);
    } else {
      parseFile(D);
      buildStageSelect();
      populateUI(D);
    }
    upgradeSelectsToCombo();
    if (isNew && typeof f1Model !== 'undefined' && f1Model) f1Model.origD = null;
  } catch(ex) {
    setStatus('err', '⚠️ Template error: ' + ex.message);
    console.error(ex); return;
  }
  onQuestLoaded();
  document.getElementById('dz-wrap').style.display = 'none';
  document.getElementById('editor').style.display = 'block';
  document.getElementById('export-menu-wrap').style.display = 'inline-block';
  // Switch to first tab for the current game
  const firstTab = GAME_MODE==='mhfu' ? 'mhfu-tab-info' : GAME_MODE==='mhf1' ? 'mhf1-tab-info' : 'info';
  const navSel = GAME_MODE==='mhfu' ? '.nav-item.mhfu-nav' : GAME_MODE==='mhf1' ? '.nav-item.mhf1-nav' : '.nav-item[data-tab="info"]';
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  const firstNav = document.querySelector(navSel);
  if(firstNav) firstNav.classList.add('active');
  const firstPanel = document.getElementById(GAME_MODE==='mhf2'?'tab-info':firstTab);
  if(firstPanel) firstPanel.classList.add('active');
  setStatus('ok', fname + '  [new quest]');
  document.getElementById('ssz').textContent = D.length.toLocaleString() + ' bytes';
  isDirty = true;
  document.getElementById('save-bar').style.display = 'flex';
  renderHex(D);
}


function setStatus(t,m){document.getElementById('sdot').className='sdot '+t;document.getElementById('stxt').textContent=m;}

function markDirty(){if(!D)return;isDirty=true;document.getElementById('save-bar').style.display='flex';document.getElementById('sdot').className='sdot dirty';document.getElementById('stxt').textContent=fname+'  [modified]';}


// ── EU MULTI-LANGUAGE TOGGLE ────────────────────────────────────────────────
function detectEULangTable(d, tcPtrOffset, numTextPtrs) {
  const tcVal = ru32(d, tcPtrOffset);
  if (tcVal + 32 > d.length) return null;
  const slots = [];
  for (let i = 0; i < 8; i++) slots.push(ru32(d, tcVal + i * 4));
  let differ = false;
  for (let i = 2; i <= 5; i++) if (slots[i] !== slots[0]) { differ = true; break; }
  return { slots, isEU: differ };
}

function rstrUTF8(d, o) {
  let e = o; while (e < d.length && d[e]) e++;
  return new TextDecoder('utf-8').decode(d.slice(o, e));
}

function readEUTexts(d, commPtr, fields, langIdx) {
  const texts = {};
  const useUTF8 = langIdx >= 2 && langIdx <= 5;
  fields.forEach((f, i) => {
    const ptr = ru32(d, commPtr + i * 4);
    texts[f] = ptr < d.length ? (useUTF8 ? rstrUTF8(d, ptr) : rstr(d, ptr)) : '';
  });
  return texts;
}

function toggleEUMode(game, on) {
  euMode = on;
  const containerId = game === 'mhf2' ? 'f2-eu-langs' :
                      game === 'mhfu' ? 'fu-eu-langs' : 'f1-eu-langs';
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!on) { container.innerHTML = ''; return; }
  if (!D) { container.innerHTML = '<div class="note" style="color:var(--warn)">Load a quest file first.</div>'; return; }

  let fields, model;
  if (game === 'mhf1') {
    fields = ['name','success','failure','desc'];
    model = typeof f1Model !== 'undefined' ? f1Model : null;
  } else if (game === 'mhf2') {
    const qi = ru32(D, 0x04);
    const tcPtrOff = qi + 0x14;
    fields = ['name','success','failure','desc','monster','client'];
    const info = detectEULangTable(D, tcPtrOff, fields.length);
    euLangData = info;
  } else {
    const vd = ru32(D, 0x00);
    const tcPtrOff = vd + 20;
    fields = ['title','goal','fail','details','monsters','client'];
    const info = detectEULangTable(D, tcPtrOff, fields.length);
    euLangData = info;
  }

  const langSlots = [
    {idx:2, flag:'🇩🇪', name:'German'},
    {idx:3, flag:'🇫🇷', name:'French'},
    {idx:4, flag:'🇪🇸', name:'Spanish'},
    {idx:5, flag:'🇮🇹', name:'Italian'}
  ];

  let html = '<div style="margin-bottom:12px">';

  if (game === 'mhf1' && model) {
    // F1: use model-based language system (supports add/remove)
    const lt = model.langTexts || {};
    const engTexts = {name:model.name||'',success:model.success||'',failure:model.failure||'',desc:model.desc||''};

    langSlots.forEach(lang => {
      const hasLang = !!lt[lang.idx];
      if (hasLang) {
        const texts = lt[lang.idx];
        html += `<details style="margin-bottom:6px;border:1px solid var(--border);border-radius:6px;overflow:hidden">
          <summary style="padding:8px 12px;cursor:pointer;background:var(--bg);font-weight:bold">${lang.flag} ${lang.name}
            <button class="sm-btn" style="float:right;margin-top:-2px" onclick="event.stopPropagation();f1RemoveLang(${lang.idx})">Remove</button></summary>
          <div style="padding:8px 12px" class="fg">`;
        fields.forEach(f => {
          const val = (texts[f]||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
          const label = f.charAt(0).toUpperCase() + f.slice(1);
          const rows = (f === 'desc') ? 5 : 3;
          html += `<div class="f fw"><label>${label}</label><textarea rows="${rows}" data-eu-lang="${lang.idx}" data-eu-field="${f}" oninput="markDirty()">${val}</textarea></div>`;
        });
        html += '</div></details>';
      } else {
        html += `<div style="margin-bottom:6px;padding:8px 12px;border:1px dashed var(--border);border-radius:6px;display:flex;align-items:center;justify-content:space-between">
          <span style="opacity:0.6">${lang.flag} ${lang.name}</span>
          <button class="sm-btn" onclick="f1AddLang(${lang.idx})">+ Add</button>
        </div>`;
      }
    });

    html += `<div style="margin-top:8px"><button class="sm-btn" onclick="f1AddAllLangs()">+ Add All Languages</button></div>`;

  } else {
    // F2/FU: legacy commPtr-based system (read-only detection)
    if (!euLangData || !euLangData.isEU) {
      container.innerHTML = '<div class="note" style="color:var(--warn)">This quest does not contain EU multi-language data.</div>';
      return;
    }
    langSlots.forEach(lang => {
      const commPtr = euLangData.slots[lang.idx];
      const texts = readEUTexts(D, commPtr, fields, lang.idx);
      html += `<details style="margin-bottom:6px;border:1px solid var(--border);border-radius:6px;overflow:hidden">
        <summary style="padding:8px 12px;cursor:pointer;background:var(--bg);font-weight:bold">${lang.flag} ${lang.name}</summary>
        <div style="padding:8px 12px" class="fg">`;
      fields.forEach(f => {
        const val = (texts[f]||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        const label = f.charAt(0).toUpperCase() + f.slice(1);
        const rows = (f === 'desc' || f === 'details') ? 5 : 3;
        html += `<div class="f fw"><label>${label}</label><textarea rows="${rows}" data-eu-lang="${lang.idx}" data-eu-field="${f}" oninput="markDirty()">${val}</textarea></div>`;
      });
      html += '</div></details>';
    });
  }

  html += '</div>';
  container.innerHTML = html;
}

function applyEUTexts(d, game) {
  if (!euMode || !euLangData || !euLangData.isEU) return;
  const containerId = game === 'mhf2' ? 'f2-eu-langs' :
                      game === 'mhfu' ? 'fu-eu-langs' : 'f1-eu-langs';
  const container = document.getElementById(containerId);
  if (!container) return;

  let fields;
  if (game === 'mhf1') fields = ['name','success','failure','desc'];
  else if (game === 'mhf2') fields = ['name','success','failure','desc','monster','client'];
  else fields = ['title','goal','fail','details','monsters','client'];

  container.querySelectorAll('[data-eu-lang][data-eu-field]').forEach(el => {
    const langIdx = +el.dataset.euLang;
    const field = el.dataset.euField;
    const fieldIdx = fields.indexOf(field);
    if (fieldIdx < 0) return;

    const commPtr = euLangData.slots[langIdx];
    const strPtr = ru32(d, commPtr + fieldIdx * 4);
    let text = el.value;
    const bytes = new TextEncoder().encode(text);
    for (let i = 0; i < bytes.length && strPtr + i < d.length; i++) d[strPtr + i] = bytes[i];
    if (strPtr + bytes.length < d.length) d[strPtr + bytes.length] = 0;
  });
}


// ── SEARCHABLE COMBOBOX UPGRADE ──────────────────────────────────────────────
function upgradeSelectsToCombo(){
  document.querySelectorAll('#editor select').forEach(sel=>{
    if(sel.dataset.comboUpgraded) return;
    sel.dataset.comboUpgraded='1';
    if(sel.closest('.combo-wrap')) return;
    if(sel.closest('.monster-pick') || sel.closest('.item-pick') || sel.closest('.mcb-wrap') || sel.classList.contains('no-combo')) return;

    // Add "🔍 Search..." as first option
    if(!sel.querySelector('[value="__search__"]')){
      const so=document.createElement('option');
      so.value='__search__'; so.textContent='🔍 Search...';
      sel.insertBefore(so, sel.firstChild);
    }
    // Add "Custom..." as last option
    if(!Array.from(sel.options).some(o=>o.value==='custom')){
      const co=document.createElement('option');
      co.value='custom'; co.textContent='Custom...';
      sel.appendChild(co);
    }

    // Wrap in combo-wrap
    const wrap=document.createElement('div');
    wrap.className='combo-wrap';
    wrap.style.cssText='position:relative';
    sel.parentNode.insertBefore(wrap,sel);
    wrap.appendChild(sel);

    // Search input (replaces select visually when active)
    const search=document.createElement('input');
    search.type='text'; search.className='combo-search';
    search.placeholder='Type to filter or enter custom value…';
    search.style.cssText='display:none;position:absolute;top:0;left:0;width:100%;z-index:100;'+
      'height:100%;padding:4px 6px;font-size:inherit;background:var(--surface);color:var(--text);'+
      'border:1px solid var(--accent);border-radius:3px;box-sizing:border-box';
    wrap.appendChild(search);

    // Listbox for filtered results
    const listbox=document.createElement('div');
    listbox.className='combo-listbox';
    listbox.style.cssText='display:none;position:absolute;top:100%;left:0;width:100%;'+
      'max-height:220px;overflow-y:auto;z-index:101;background:var(--surface);'+
      'border:1px solid var(--accent);border-top:none;border-radius:0 0 3px 3px;box-sizing:border-box';
    wrap.appendChild(listbox);

    let prevValue = sel.value;
    let realOpts = []; // options excluding __search__ and custom

    function cacheOpts(){
      realOpts = Array.from(sel.options)
        .filter(o => o.value!=='__search__' && o.value!=='custom')
        .map(o => ({v:o.value, t:o.textContent, d:o.disabled}));
    }

    function openSearch(){
      prevValue = sel.value;
      cacheOpts();
      sel.style.visibility = 'hidden';
      search.style.display = 'block';
      search.value = '';
      search.focus();
      buildList('');
    }

    function buildList(q){
      listbox.innerHTML = '';
      const lq = q.toLowerCase();
      let count = 0, hilite = -1;
      realOpts.forEach((o,i) => {
        if(o.d) return;
        if(lq && !o.t.toLowerCase().includes(lq)) return;
        const row = document.createElement('div');
        row.textContent = o.t;
        row.dataset.val = o.v;
        row.style.cssText = 'padding:4px 8px;cursor:pointer;color:var(--text);font-size:13px';
        row.addEventListener('mouseenter', () => { row.style.background='var(--accent)'; row.style.color='#fff'; });
        row.addEventListener('mouseleave', () => { row.style.background=''; row.style.color='var(--text)'; });
        row.addEventListener('mousedown', e => {
          e.preventDefault();
          sel.value = o.v;
          closeSearch();
          sel.dispatchEvent(new Event('change'));
          markDirty();
        });
        listbox.appendChild(row);
        count++;
      });
      // If there's typed text that doesn't match, show a "Use as custom value" row
      if(lq && count===0){
        const n = parseInt(q.replace(/^0x/i,''), q.toLowerCase().startsWith('0x')?16:10);
        if(!isNaN(n)){
          const row = document.createElement('div');
          row.textContent = '↵ Use "'+q+'" as custom value ('+n+')';
          row.style.cssText = 'padding:4px 8px;cursor:pointer;color:var(--accent);font-size:13px;font-style:italic';
          row.addEventListener('mouseenter', () => { row.style.background='var(--accent)'; row.style.color='#fff'; });
          row.addEventListener('mouseleave', () => { row.style.background=''; row.style.color='var(--accent)'; });
          row.addEventListener('mousedown', e => {
            e.preventDefault();
            applyCustomValue(n);
            closeSearch();
            markDirty();
          });
          listbox.appendChild(row);
          count++;
        }
      }
      listbox.style.display = count>0 ? 'block' : 'none';
    }

    function closeSearch(){
      search.style.display = 'none';
      listbox.style.display = 'none';
      sel.style.visibility = '';
      // Reset search/custom options back to non-selected if still on them
      if(sel.value==='__search__' || sel.value==='custom'){
        sel.value = prevValue;
      }
    }

    function applyCustomValue(n){
      Array.from(sel.options).forEach(o=>{if(o.dataset.custom)o.remove();});
      const tmp=document.createElement('option');
      tmp.value=n; tmp.textContent=n+' – Custom'; tmp.dataset.custom='1';
      const cOpt=sel.querySelector('[value="custom"]');
      if(cOpt) sel.insertBefore(tmp,cOpt); else sel.appendChild(tmp);
      sel.value=n;
    }

    search.addEventListener('input', () => { buildList(search.value); });

    search.addEventListener('keydown', e => {
      if(e.key==='Enter'){
        e.preventDefault();
        const q = search.value.trim();
        const match = realOpts.find(o => !o.d && o.t.toLowerCase().includes(q.toLowerCase()));
        if(match){
          sel.value = match.v;
        } else if(q){
          const n = parseInt(q.replace(/^0x/i,''), q.toLowerCase().startsWith('0x')?16:10);
          if(!isNaN(n)) applyCustomValue(n);
        }
        closeSearch();
        sel.dispatchEvent(new Event('change'));
        markDirty();
      } else if(e.key==='Escape'){
        closeSearch();
      }
    });

    search.addEventListener('blur', () => { setTimeout(closeSearch, 200); });

    // When "Search..." or "Custom..." is selected from the normal dropdown
    sel.addEventListener('change', () => {
      if(sel.value==='__search__' || sel.value==='custom'){
        openSearch();
      }
    });
  });
}



// ══════════════════════════════════════════════════════════════════════════════
// GAME MODE SYSTEM
// ══════════════════════════════════════════════════════════════════════════════

var GAME_MODE = 'mhf2';


const GAME_THEMES = {
  mhf2: { bg:'#0a0f18', surface:'#0f1624', panel:'#141c2e', border:'#1e2d4a', accent:'#4a9fe8', accent2:'#2060a8', text:'#c8d8ee', muted:'#4a6080', danger:'#b03030', success:'#2a8a4a' },
  mhfu: { bg:'#0a100a', surface:'#101c10', panel:'#162016', border:'#1e3a1e', accent:'#6abf4a', accent2:'#2e7a18', text:'#c8dcc0', muted:'#4a6848', danger:'#b03030', success:'#2a8a4a' },
  mhf1: { bg:'#18100a', surface:'#1c1408', panel:'#241a0e', border:'#3a2a14', accent:'#d4943a', accent2:'#9a6420', text:'#dcd0b8', muted:'#6a5a3a', danger:'#b03030', success:'#2a8a4a' },
};
function applyTheme(mode){
  const t = GAME_THEMES[mode]; if(!t) return;
  const r = document.documentElement.style;
  r.setProperty('--bg',t.bg); r.setProperty('--surface',t.surface); r.setProperty('--panel',t.panel);
  r.setProperty('--border',t.border); r.setProperty('--accent',t.accent); r.setProperty('--accent2',t.accent2);
  r.setProperty('--text',t.text); r.setProperty('--muted',t.muted); r.setProperty('--danger',t.danger); r.setProperty('--success',t.success);
}
function setGame(mode, btn) {
  GAME_MODE = mode;
  if (mode === 'mhf1') {
    ITEM_LIST = (typeof F1_ITEM_PAIRS !== 'undefined') ? F1_ITEM_PAIRS : F2_ITEM_LIST;
    MONSTER_LIST = (typeof F1_MONSTER_PAIRS !== 'undefined') ? F1_MONSTER_PAIRS : F2_MONSTER_LIST;
  } else if (mode === 'mhfu') {
    ITEM_LIST = FU_ITEM_LIST; MONSTER_LIST = FU_MONSTER_LIST;
  } else {
    ITEM_LIST = F2_ITEM_LIST; MONSTER_LIST = F2_MONSTER_LIST;
  }

  document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  applyTheme(mode);
  const labels = { mhf1:['MHF1 MODE','Load Freedom 1 Quest File','🆕 New MHF1 Quest','Monster Hunter Freedom 1 · Binary Quest Editor'],
                   mhfu:['MHFU MODE','Load Freedom Unite Quest File','🆕 New MHFU Quest','Monster Hunter Freedom Unite · Binary Quest Editor'],
                   mhf2:['MHF2 MODE','Load Freedom 2 Quest File','🆕 New MHF2 Quest','Monster Hunter Freedom 2 · Binary Quest Editor'] };
  const L = labels[mode] || labels.mhf2;
  document.getElementById('game-badge').textContent = L[0];
  document.getElementById('load-title').textContent = L[1];
  const nq = document.getElementById('btn-newquest');
  if (nq) nq.textContent = L[2];
  document.getElementById('hdr-sub').textContent = L[3];

  // Show/hide nav items — each game owns its own class + safe mode hides
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.nav-sep').forEach(s => {
    const isfu = s.classList.contains('mhfu-nav');
    const isf1 = s.classList.contains('mhf1-nav');
    if (mode === 'mhfu')      s.style.display = isfu ? '' : 'none';
    else if (mode === 'mhf1') s.style.display = isf1 ? '' : 'none';
    else                       s.style.display = (isfu || isf1) ? 'none' : '';
  });
  refreshTabVisibility();
  if (mode === 'mhfu') {
    document.querySelector('.nav-item.mhfu-nav').classList.add('active');
  } else if (mode === 'mhf1') {
    document.querySelector('.nav-item.mhf1-nav').classList.add('active');
  } else {
    document.querySelector('.nav-item[data-tab="info"]').classList.add('active');
  }

  // Show/hide tab panels
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.remove('active');
    const id = p.id;
    const shared = id === 'tab-hex' || id === 'tab-calc' || id === 'tab-events' || id === 'tab-sizetable' || id === 'tab-toolmode';
    if (mode === 'mhfu')      p.style.display = (id.startsWith('mhfu-') || shared) ? '' : 'none';
    else if (mode === 'mhf1') p.style.display = (id.startsWith('mhf1-') || shared) ? '' : 'none';
    else                       p.style.display = (id.startsWith('mhfu-') || id.startsWith('mhf1-')) ? 'none' : '';
  });
  if (mode === 'mhfu') {
    document.getElementById('mhfu-tab-info').classList.add('active');
  } else if (mode === 'mhf1') {
    document.getElementById('mhf1-tab-info').classList.add('active');
  } else {
    document.getElementById('tab-info').classList.add('active');
  }

  // Build map selects
  if (mode === 'mhfu') {
    document.getElementById('fu-mapid').innerHTML = mapOpts(0, true);
  } else if (mode === 'mhf1' && typeof f1BuildMapSelect === 'function') {
    f1BuildMapSelect();
  }

  // Reset state — always show dropzone/hide editor when switching games
  D = null; fname = ''; PAT_PREFIX = null;
  document.getElementById('editor').style.display = 'none';
  document.getElementById('dz-wrap').style.display = '';
  document.getElementById('export-menu-wrap').style.display = 'none';
  // Clear loaded EVENT.BIN
  eventSlots = []; eventFileName = '';
  const el = document.getElementById('event-quest-list'); if(el) el.innerHTML = '';
  const ei = document.getElementById('event-info'); if(ei) ei.innerHTML = '';
  const es = document.getElementById('event-save-btn'); if(es) es.style.display = 'none';
  const et = document.getElementById('event-toolbar'); if(et) et.style.display = 'none';
  const ee = document.getElementById('event-empty'); if(ee) ee.style.display = '';
  if(typeof applyToolMode === 'function') applyToolMode();
}


function gv(id) { return document.getElementById(id); }


// (removed populateFUSupply — folded into model system)

// (removed populateFURewards — folded into model system)

// (removed populateFULargeMon — folded into model system)

// (removed populateFUSmallMon — folded into model system)

function makeItemPick(prefix, currentId, attrs) {
  // Simple item combobox using existing ITEM_LIST
  const wrap = document.createElement('div');
  wrap.className = 'mcb-wrap';
  const sel = document.createElement('select');
  sel.className = 'mcb-select';
  Object.entries(attrs||{}).forEach(([k,v]) => sel.setAttribute(k,v));
  ITEM_LIST.forEach(([id,name]) => {
    const opt = document.createElement('option');
    opt.value = id; opt.textContent = `${id} – ${name}`;
    if (id === currentId) opt.selected = true;
    sel.appendChild(opt);
  });
  const hexInp = document.createElement('input');
  hexInp.className = 'mcb-hex'; hexInp.type = 'number';
  hexInp.value = currentId; hexInp.style.width = '70px';
  sel.addEventListener('change', () => { hexInp.value = parseInt(sel.value); markDirty(); });
  hexInp.addEventListener('input', () => { sel.value = parseInt(hexInp.value)||0; markDirty(); });
  wrap.appendChild(sel); wrap.appendChild(hexInp);
  return wrap;
}



// rf32 helper for MHFU (reads float from binary array)
function rf32(d, o) {
  const buf = new ArrayBuffer(4);
  new Uint8Array(buf).set(d.slice ? d.slice(o, o+4) : Array.from(d).slice(o, o+4));
  return new DataView(buf).getFloat32(0, true);
}


// ── EVENT WIRING ──────────────────────────────────────────────────────────────
document.getElementById('fi').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0]);e.target.value='';});

const dz=document.getElementById('dropzone');

dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag-over');});

dz.addEventListener('dragleave',()=>dz.classList.remove('drag-over'));

dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('drag-over');if(e.dataTransfer.files[0])loadFile(e.dataTransfer.files[0]);});

document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const dt=item.dataset.tab||'';
    const noFile = dt==='events'||dt==='calc'||dt==='sizetable'||dt==='toolmode';
    if(!D && !noFile)return;
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    item.classList.add('active');
    const _pid=(dt.startsWith('mhfu-')||dt.startsWith('mhf1-'))?dt:'tab-'+dt;
    const p=document.getElementById(_pid);
    if(p)p.classList.add('active');
    const dz=document.getElementById('dz-wrap');
    const ed=document.getElementById('editor');
    if(noFile && !D) { dz.style.display='none'; ed.style.display=''; }
    else if(!D) { dz.style.display=''; ed.style.display='none'; }
    if(dt==='sizetable') renderSizeTable();
  });
});

document.getElementById('editor').addEventListener('input',markDirty);

document.getElementById('editor').addEventListener('change',markDirty);

// Initialize game mode so MHFU nav items start hidden

// ══════════════════════════════════════════════════════════════════════════════
// CREATE NEW QUEST — build a blank quest binary from scratch (no file needed)
// Layouts mirror the real game formats:
//   MHF2 : 'MHP2' magic @0x00 + 9 header pointers @0x04
//   MHFU : VDatPTR(0x4C) @0x00 + '2NDG' magic @0x04 + section pointers
// ══════════════════════════════════════════════════════════════════════════════

function createNewQuest() {
  if (GAME_MODE === 'mhf1') {
    if (typeof buildNewF1Quest === 'function') loadFromData(buildNewF1Quest(), 'new_quest_mhf1.mib', true);
    else alert('MHF1 module not loaded yet.');
  } else if (GAME_MODE === 'mhfu') {
    loadFromData(buildNewFUQuest(), 'new_quest_mhfu.bin', true);
  } else if (GAME_MODE === 'mhf2') {
    loadFromData(buildNewF2Quest(), 'new_quest_mhf2.bin', true);
  } else {
    alert('This game profile is not enabled yet.');
  }
}


// helpers for builders
function _w8(d,o,v){d[o]=v&0xFF;}

function _w16(d,o,v){d[o]=v&0xFF;d[o+1]=(v>>8)&0xFF;}

function _w32(d,o,v){d[o]=v&0xFF;d[o+1]=(v>>>8)&0xFF;d[o+2]=(v>>>16)&0xFF;d[o+3]=(v>>>24)&0xFF;}

function _wf32(d,o,v){const b=new ArrayBuffer(4);new DataView(b).setFloat32(0,v,true);const u=new Uint8Array(b);for(let i=0;i<4;i++)d[o+i]=u[i];}

function _wstr(d,o,s){const b=new TextEncoder().encode(s);for(let i=0;i<b.length;i++)d[o+i]=b[i];}

// ── Calculator ──────────────────────────────────────────────────────────────
function calcFromDec(){
  const inp=document.getElementById('calc-dec');
  const out=document.getElementById('calc-hex');
  const info=document.getElementById('calc-info');
  const v=inp.value.trim(); if(!v){out.value='';info.textContent='';return;}
  const n=parseInt(v,10);
  if(isNaN(n)){out.value='???';info.textContent='Not a valid decimal number';return;}
  out.value='0x'+((n>>>0).toString(16).toUpperCase());
  const u=n>>>0;
  info.innerHTML=
    'u8: '+(u&0xFF)+' &nbsp; u16: '+(u&0xFFFF)+' &nbsp; u32: '+u+
    '<br>Signed i8: '+((u&0xFF)>127?(u&0xFF)-256:(u&0xFF))+
    ' &nbsp; i16: '+((u&0xFFFF)>32767?(u&0xFFFF)-65536:(u&0xFFFF))+
    ' &nbsp; i32: '+(n|0)+
    '<br>Binary: '+u.toString(2).padStart(Math.max(8,Math.ceil(u.toString(2).length/8)*8),'0');
}
function calcFromHex(){
  const inp=document.getElementById('calc-hex');
  const out=document.getElementById('calc-dec');
  const info=document.getElementById('calc-info');
  const v=inp.value.trim().replace(/^0x/i,''); if(!v){out.value='';info.textContent='';return;}
  const n=parseInt(v,16);
  if(isNaN(n)){out.value='???';info.textContent='Not a valid hex number';return;}
  out.value=String(n>>>0);
  const u=n>>>0;
  info.innerHTML=
    'u8: '+(u&0xFF)+' &nbsp; u16: '+(u&0xFFFF)+' &nbsp; u32: '+u+
    '<br>Signed i8: '+((u&0xFF)>127?(u&0xFF)-256:(u&0xFF))+
    ' &nbsp; i16: '+((u&0xFFFF)>32767?(u&0xFFFF)-65536:(u&0xFFFF))+
    ' &nbsp; i32: '+(n|0)+
    '<br>Binary: '+u.toString(2).padStart(Math.max(8,Math.ceil(u.toString(2).length/8)*8),'0');
}
(function buildCalcRef(){
  const tb=document.getElementById('calc-ref'); if(!tb)return;
  const vals=[0,1,2,4,8,16,32,64,128,255,256,512,1024,2048,4096,65535,100,150,200,250,500,1000];
  vals.sort((a,b)=>a-b);
  let html='';
  for(let i=0;i<vals.length;i+=3){
    html+='<tr>';
    for(let c=0;c<3;c++){
      const v=vals[i+c];
      if(v!==undefined) html+='<td style="padding:2px 12px">'+v+'</td><td style="padding:2px 12px">0x'+v.toString(16).toUpperCase()+'</td>';
      else html+='<td></td><td></td>';
    }
    html+='</tr>';
  }
  tb.innerHTML=html;
})();

// ══════════════════════════════════════════════════════════════════════════════
// EVENT.BIN LOADER — manage event quest files for F1/F2/FU
// ══════════════════════════════════════════════════════════════════════════════

const EVT_SLOT = 0x6800;
const EVT_MAX = 50;
var eventSlots = [];
var eventFileName = '';

function eventReadQuestName(d, off) {
  if (off + 0x60 > d.length) return '[Empty]';
  const firstU32 = ru32(d, off);
  if (firstU32 === 0) return '[Empty]';
  try {
    const isMHP2 = d[off]===0x4D && d[off+1]===0x48 && d[off+2]===0x50 && d[off+3]===0x32;
    let tcOff, commPtr, namePtr;
    if (isMHP2) {
      const qiOff = ru32(d, off + 4);
      tcOff = ru32(d, off + qiOff + 0x14);
    } else {
      const qi = ru32(d, off);
      tcOff = ru32(d, off + qi + 24);
    }
    commPtr = ru32(d, off + tcOff);
    namePtr = ru32(d, off + commPtr);
    if (namePtr === 0 || namePtr >= EVT_SLOT) return '[No Name]';
    let e = off + namePtr;
    while (e < off + EVT_SLOT && d[e]) e++;
    const sl = d.slice(off + namePtr, e);
    try { return new TextDecoder('utf-8', {fatal:true}).decode(sl); }
    catch(_) { return rstr(d, off + namePtr); }
  } catch(ex) { return '[Parse Error]'; }
}

function eventReadQuestId(d, off) {
  if (off + 0x5C > d.length) return 0;
  return ru16(d, off + 0x5A);
}

function eventLoadFile(file) {
  if (!file) return;
  eventFileName = file.name;
  const reader = new FileReader();
  reader.onload = function(e) {
    const d = new Uint8Array(e.target.result);
    if (d.length % EVT_SLOT !== 0) {
      alert('Invalid EVENT.BIN: file size (' + d.length + ') is not a multiple of quest slot size (0x' + EVT_SLOT.toString(16) + ')');
      return;
    }
    const count = d.length / EVT_SLOT;
    eventSlots = [];
    for (let i = 0; i < count; i++) {
      const off = i * EVT_SLOT;
      const slotData = d.slice(off, off + EVT_SLOT);
      const isEmpty = slotData.every(b => b === 0);
      eventSlots.push({
        data: slotData,
        empty: isEmpty,
        name: isEmpty ? '[Empty]' : eventReadQuestName(d, off),
        id: isEmpty ? 0 : eventReadQuestId(d, off)
      });
    }
    eventRenderList();
  };
  reader.readAsArrayBuffer(file);
}

function eventRenderList() {
  const list = document.getElementById('event-quest-list');
  const info = document.getElementById('event-info');
  const empty = document.getElementById('event-empty');
  const saveBtn = document.getElementById('event-save-btn');
  const toolbar = document.getElementById('event-toolbar');
  empty.style.display = 'none';
  saveBtn.style.display = '';
  toolbar.style.display = '';
  const used = eventSlots.filter(s => !s.empty).length;
  const firstNonEmpty = eventSlots.find(s => !s.empty);
  const fmt = firstNonEmpty ? eventDetectGame(new Uint8Array(firstNonEmpty.data)) : '?';
  const fmtLabel = {mhf1:'Freedom 1', mhf2:'Freedom 2', mhfu:'Freedom Unite'}[fmt] || fmt;
  info.innerHTML = '<b>' + eventFileName + '</b> — ' + used + ' quests in ' + eventSlots.length + ' slots (max ' + EVT_MAX + ')' +
    ' — Format: <b>' + fmtLabel + '</b> — Slot size: 0x' + EVT_SLOT.toString(16).toUpperCase() + ' (' + EVT_SLOT + ' bytes)';

  let html = '<table id="event-table" style="width:100%;border-collapse:collapse;font-size:13px;font-family:var(--mono)">';
  html += '<thead><tr style="color:var(--muted);border-bottom:1px solid var(--border)"><th style="width:24px"></th><th style="text-align:left;padding:6px 8px;width:30px">#</th><th style="text-align:left;padding:6px 8px;width:60px">ID</th><th style="text-align:left;padding:6px 8px">Quest Name</th><th style="text-align:right;padding:6px 8px;width:50px">Size</th><th style="text-align:right;padding:6px 8px">Actions</th></tr></thead><tbody>';

  eventSlots.forEach((slot, i) => {
    const bg = i % 2 === 0 ? 'transparent' : 'rgba(128,128,128,0.05)';
    html += '<tr draggable="true" data-idx="' + i + '" style="background:' + bg + ';border-bottom:1px solid var(--border)">';
    html += '<td style="padding:6px 2px;text-align:center"><span class="drag-handle" title="Drag to reorder">⠿</span></td>';
    html += '<td style="padding:6px 8px;color:var(--muted)">' + i + '</td>';
    html += '<td style="padding:6px 8px">' + (slot.empty ? '-' : slot.id) + '</td>';
    html += '<td style="padding:6px 8px;' + (slot.empty ? 'color:var(--muted);font-style:italic' : '') + '">' + escH(slot.name) + '</td>';
    const realSize = slot.empty ? 0 : eventGetRealSize(slot.data);
    html += '<td style="padding:6px 8px;text-align:right;color:var(--muted)">' + (slot.empty ? '-' : '0x' + realSize.toString(16).toUpperCase()) + '</td>';
    html += '<td style="padding:6px 8px;text-align:right;white-space:nowrap">';
    if (!slot.empty) {
      html += '<button class="sm-btn" onclick="eventEditQuest(' + i + ')" title="Load into editor">Edit</button> ';
      html += '<button class="sm-btn" onclick="eventExtractQuest(' + i + ')" title="Download as .mib">Extract</button> ';
      html += '<button class="sm-btn" onclick="eventReplaceQuest(' + i + ')" title="Replace with file">Replace</button> ';
      html += '<button class="sm-btn" onclick="eventDeleteQuest(' + i + ')" title="Remove quest" style="color:var(--danger,#e55)">Delete</button> ';
    }
    html += '<button class="sm-btn" onclick="eventInsertQuest(' + i + ')" title="Insert quest before this slot">Insert</button>';
    html += '</td></tr>';
  });
  html += '</tbody></table>';
  list.innerHTML = html;
  eventInitDragReorder();
}

function eventInitDragReorder() {
  const tbody = document.querySelector('#event-table tbody');
  if (!tbody) return;
  let dragIdx = -1;
  tbody.addEventListener('dragstart', e => {
    const row = e.target.closest('tr[data-idx]');
    if (!row) { e.preventDefault(); return; }
    dragIdx = parseInt(row.dataset.idx);
    e.dataTransfer.effectAllowed = 'move';
    row.style.opacity = '0.4';
  });
  tbody.addEventListener('dragend', e => {
    const row = e.target.closest('tr[data-idx]');
    if (row) row.style.opacity = '';
    tbody.querySelectorAll('tr').forEach(r => r.classList.remove('drag-over-row'));
  });
  tbody.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const row = e.target.closest('tr[data-idx]');
    tbody.querySelectorAll('tr').forEach(r => r.classList.remove('drag-over-row'));
    if (row) row.classList.add('drag-over-row');
  });
  tbody.addEventListener('drop', e => {
    e.preventDefault();
    const row = e.target.closest('tr[data-idx]');
    if (!row || dragIdx < 0) return;
    const dropIdx = parseInt(row.dataset.idx);
    if (dropIdx === dragIdx) return;
    const [moved] = eventSlots.splice(dragIdx, 1);
    eventSlots.splice(dropIdx, 0, moved);
    eventRenderList();
  });
}

function eventGetRealSize(data) {
  let last = data.length;
  while (last > 0 && data[last - 1] === 0) last--;
  return last;
}

function eventDetectGame(d) {
  const s = (o) => String.fromCharCode(d[o],d[o+1],d[o+2],d[o+3]);
  if (d.length >= 4 && s(0) === 'MHP2') return 'mhf2';
  if (d.length >= 8 && s(4) === '2NDG') return 'mhfu';
  return 'mhf1';
}

function eventEditQuest(idx) {
  const slot = eventSlots[idx];
  if (!slot || slot.empty) return;
  const realSize = eventGetRealSize(slot.data);
  const aligned = (realSize + 3) & ~3;
  const d = new Uint8Array(slot.data.slice(0, aligned));
  const game = eventDetectGame(d);
  if (game !== GAME_MODE) {
    const savedSlots = eventSlots.slice();
    const savedName = eventFileName;
    const btn = document.querySelector('.game-btn[data-game="' + game + '"]');
    setGame(game, btn);
    eventSlots = savedSlots;
    eventFileName = savedName;
  }
  loadFromData(d, 'event_slot_' + idx + '.mib');
}

function eventExtractQuest(idx) {
  const slot = eventSlots[idx];
  if (!slot || slot.empty) return;
  const realSize = eventGetRealSize(slot.data);
  const trimmed = slot.data.slice(0, realSize);
  const blob = new Blob([trimmed], {type:'application/octet-stream'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (slot.id ? 'm' + slot.id : 'quest_slot_' + idx) + '.mib';
  a.click();
  URL.revokeObjectURL(a.href);
}

function eventExtractAll() {
  eventSlots.forEach((slot, i) => {
    if (!slot.empty) eventExtractQuest(i);
  });
}

function eventReplaceQuest(idx) {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.mib,.bin';
  inp.onchange = function() {
    if (!inp.files[0]) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const raw = new Uint8Array(e.target.result);
      const padded = new Uint8Array(EVT_SLOT);
      padded.set(raw.slice(0, Math.min(raw.length, EVT_SLOT)));
      eventSlots[idx] = {
        data: padded,
        empty: false,
        name: eventReadQuestName(padded, 0),
        id: eventReadQuestId(padded, 0)
      };
      eventRenderList();
    };
    reader.readAsArrayBuffer(inp.files[0]);
  };
  inp.click();
}

function eventDeleteQuest(idx) {
  if (!confirm('Delete quest "' + eventSlots[idx].name + '" from slot ' + idx + '?')) return;
  eventSlots.splice(idx, 1);
  eventRenderList();
}

function eventInsertQuest(idx) {
  if (eventSlots.length >= EVT_MAX) { alert('Maximum ' + EVT_MAX + ' quest slots reached.'); return; }
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.mib,.bin';
  inp.onchange = function() {
    if (!inp.files[0]) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const raw = new Uint8Array(e.target.result);
      const padded = new Uint8Array(EVT_SLOT);
      padded.set(raw.slice(0, Math.min(raw.length, EVT_SLOT)));
      const slot = {
        data: padded,
        empty: false,
        name: eventReadQuestName(padded, 0),
        id: eventReadQuestId(padded, 0)
      };
      eventSlots.splice(idx, 0, slot);
      eventRenderList();
    };
    reader.readAsArrayBuffer(inp.files[0]);
  };
  inp.click();
}

function eventAddQuest() {
  if (eventSlots.length >= EVT_MAX) { alert('Maximum ' + EVT_MAX + ' quest slots reached.'); return; }
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.mib,.bin';
  inp.multiple = true;
  inp.onchange = function() {
    if (!inp.files.length) return;
    let loaded = 0;
    const toAdd = [];
    Array.from(inp.files).forEach((file, fi) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const raw = new Uint8Array(e.target.result);
        const padded = new Uint8Array(EVT_SLOT);
        padded.set(raw.slice(0, Math.min(raw.length, EVT_SLOT)));
        toAdd[fi] = {
          data: padded,
          empty: false,
          name: eventReadQuestName(padded, 0),
          id: eventReadQuestId(padded, 0)
        };
        loaded++;
        if (loaded === inp.files.length) {
          toAdd.forEach(s => {
            if (eventSlots.length < EVT_MAX) eventSlots.push(s);
          });
          eventRenderList();
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };
  inp.click();
}

function eventSave() {
  if (!eventSlots.length) return;
  const totalSize = eventSlots.length * EVT_SLOT;
  const out = new Uint8Array(totalSize);
  eventSlots.forEach((slot, i) => {
    out.set(slot.data, i * EVT_SLOT);
  });
  const blob = new Blob([out], {type:'application/octet-stream'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = eventFileName || 'EVENT.BIN';
  a.click();
  URL.revokeObjectURL(a.href);
}

function escH(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ══════════════════════════════════════════════════════════════════════════════
// SIZE TABLE — renders per-game monster size reference + live quest warnings
// ══════════════════════════════════════════════════════════════════════════════

function _sizeGameKey(){ return GAME_MODE === 'mhfu' ? 'mhfu' : GAME_MODE === 'mhf1' ? 'mhf1' : 'mhf2'; }
function _sizeRows(gk){ return (typeof SIZE_DATA !== 'undefined' && SIZE_DATA[gk]) ? SIZE_DATA[gk] : []; }

function renderSizeTable(){
  const el = document.getElementById('size-table-content');
  if(!el) return;
  const gk = _sizeGameKey();
  const rows = _sizeRows(gk);
  if(!rows.length){ el.innerHTML='<div style="color:var(--muted);padding:20px">No size data for this game.</div>'; return; }
  const hasMin = gk !== 'mhf1';
  let html = '<table class="size-tbl"><thead><tr>';
  html += '<th>Monster</th><th>Base Size</th>';
  if(hasMin) html += '<th>Min Crown</th>';
  html += '<th>King Crown</th><th class="sz-small">Smallest Possible</th><th>Quest (smallest)</th>';
  html += '<th class="sz-big">Biggest Possible</th><th>Quest (biggest)</th><th>Status</th>';
  html += '</tr></thead><tbody>';
  for(const r of rows){
    const baseTxt = r.baseCm ? (r.baseCm.toFixed(1)+' cm') : '?';
    const minCTxt = (hasMin && r.minCrownPct) ? ((r.minCrownPct*100).toFixed(0)+'% – '+(r.minCrownCm||'?')+' cm') : '—';
    const kingTxt = r.kingCrownPct ? ((r.kingCrownPct*100).toFixed(0)+'% – '+(r.kingCrownCm||'?')+' cm') : '—';
    const smallTxt = r.baseCm ? (r.smallestPct+'% – '+r.smallestCm+' cm') : (r.smallestPct+'%');
    const bigTxt = r.baseCm ? (r.biggestPct+'% – '+r.biggestCm+' cm') : (r.biggestPct+'%');
    html += `<tr data-size-mon="${r.id}"><td class="sz-name">${escH(r.name)}</td><td>${baseTxt}</td>`;
    if(hasMin) html += `<td>${minCTxt}</td>`;
    html += `<td>${kingTxt}</td><td class="sz-small">${smallTxt}</td><td>${escH(r.smallestQuest||'')}</td>`;
    html += `<td class="sz-big">${bigTxt}</td><td>${escH(r.biggestQuest||'')}</td><td class="sz-status"></td></tr>`;
  }
  html += '</tbody></table>';
  el.innerHTML = html;
  checkSizeLimits();
}

function checkSizeLimits(){
  const gk = _sizeGameKey();
  const sizeRows = _sizeRows(gk);
  const tbl = document.querySelector('#tab-sizetable .size-tbl');

  if(tbl){
    tbl.querySelectorAll('tr[data-size-mon]').forEach(tr => {
      tr.classList.remove('size-warn');
      const statusTd = tr.querySelector('.sz-status');
      if(statusTd){ statusTd.textContent = ''; statusTd.innerHTML = ''; }
    });
  }

  if(!sizeRows.length){ _sizeSetWarn(false); return; }
  const sizeMap = {}; for(const r of sizeRows) sizeMap[r.id] = r;

  let bossSize, sizeTable, monsterIds = [];
  const bsEl = document.getElementById(gk==='mhf1'?'f1-bosssize':gk==='mhf2'?'f-bshape':'fu-monsize');
  const stEl = document.getElementById(gk==='mhf1'?'f1-sizemulti':gk==='mhf2'?'f-bsize':'fu-bsize');
  bossSize = parseInt(bsEl?.value) || 0;
  sizeTable = parseInt(stEl?.value) || 0;
  if(!bossSize){ _sizeSetWarn(false); return; }

  const bossSelectors = gk==='mhf1' ? '#f1-bossdetail-tbody tr' : gk==='mhf2' ? '#tb-bossdetail tr' : '#fu-largemon-body tr, #fu-lg-tbody tr';
  document.querySelectorAll(bossSelectors).forEach(tr => {
    const sel = tr.querySelector('.monster-pick select');
    if(sel && sel.value) monsterIds.push(parseInt(sel.value)||0);
  });

  const ranges = {0:[0,0],1:[0,5],2:[0,15],3:[-5,14],4:[-15,25]};
  const rng = ranges[sizeTable] || [0,0];
  const effMin = bossSize * (100 + rng[0]) / 100;
  const effMax = bossSize * (100 + rng[1]) / 100;

  const safe = typeof isSafeMode === 'function' && isSafeMode();
  let anyWarn = false;
  const activeIds = new Set(monsterIds.filter(id => id > 0));
  for(const mid of activeIds){
    const ref = sizeMap[mid];
    if(!ref) continue;
    const warnings = [];

    if(safe){
      if(ref.kingCrownPct){
        const kingThreshold = ref.kingCrownPct * 100;
        if(effMax >= kingThreshold){
          warnings.push('SAFE: King crown possible (max '+effMax.toFixed(0)+'% >= '+kingThreshold.toFixed(0)+'%) — change size!');
        }
      }
      if(gk !== 'mhf1' && ref.minCrownPct){
        const miniThreshold = ref.minCrownPct * 100;
        if(effMin <= miniThreshold){
          warnings.push('SAFE: Mini crown possible (min '+effMin.toFixed(0)+'% <= '+miniThreshold.toFixed(0)+'%) — change size!');
        }
      }
      if(effMin < ref.smallestPct){
        warnings.push('SAFE: Below smallest possible ('+effMin.toFixed(0)+'% < '+ref.smallestPct+'%) — change size!');
      }
    } else {
      if(effMin < ref.smallestPct){
        const diff = Math.round(ref.smallestPct - effMin);
        warnings.push(`Min exceeded by -${diff}%`);
      }
      if(effMax > ref.biggestPct){
        const diff = Math.round(effMax - ref.biggestPct);
        warnings.push(`Max exceeded by +${diff}%`);
      }
    }

    if(warnings.length){
      if(tbl){
        const tr = tbl.querySelector(`tr[data-size-mon="${mid}"]`);
        if(tr){
          tr.classList.add('size-warn');
          const statusTd = tr.querySelector('.sz-status');
          if(statusTd){ statusTd.innerHTML = warnings.map(w=>'<span class="sz-exceed">⚠ '+escH(w)+'</span>').join('<br>'); }
        }
      }
      anyWarn = true;
    }
  }
  _sizeSetWarn(anyWarn);
}

function _sizeSetWarn(on){
  document.querySelectorAll('.nav-item[data-tab="sizetable"]').forEach(n => {
    n.classList.toggle('size-warning', on);
  });
  const badge = document.getElementById('size-warn-badge');
  if(badge) badge.style.display = on ? 'inline-block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  // Monitor boss table changes for live warnings
  const sizeObs = new MutationObserver(() => checkSizeLimits());
  const obsTargets = ['f1-bossdetail-tbody','tb-bossdetail','fu-largemon-body','fu-lg-tbody'];
  obsTargets.forEach(id => { const el = document.getElementById(id); if(el) sizeObs.observe(el, {childList:true, subtree:true, attributes:true}); });

  ['f1-bosssize','f1-sizemulti','f-bshape','f-bsize','fu-monsize','fu-bsize'].forEach(id => {
    const el = document.getElementById(id);
    if(el){
      el.addEventListener('input', () => checkSizeLimits());
      el.addEventListener('change', () => checkSizeLimits());
    }
  });
});


// ══════════════════════════════════════════════════════════════════════════════
// TOOL MODE — Safe / Advanced
// ══════════════════════════════════════════════════════════════════════════════

var TOOL_MODE = sessionStorage.getItem('toolMode') || 'safe';

const SAFE_SUPPLY = {
  mhf1: [
    {item:552,qty:1},{item:552,qty:1},{item:552,qty:1},{item:552,qty:1},
    {item:553,qty:3},{item:553,qty:3},{item:553,qty:3},{item:553,qty:3},
    {item:556,qty:2},{item:556,qty:2},{item:556,qty:2},{item:556,qty:2},
    {item:554,qty:2},{item:554,qty:2},{item:554,qty:2},{item:554,qty:2}
  ],
  mhf2: [
    {item:641,qty:1},{item:641,qty:1},{item:641,qty:1},{item:641,qty:1},
    {item:642,qty:3},{item:642,qty:3},{item:642,qty:3},{item:642,qty:3},
    {item:645,qty:2},{item:645,qty:2},{item:645,qty:2},{item:645,qty:2},
    {item:643,qty:2},{item:643,qty:2},{item:643,qty:2},{item:643,qty:2}
  ],
  mhfu: [
    {item:641,qty:1},{item:641,qty:1},{item:641,qty:1},{item:641,qty:1},
    {item:642,qty:3},{item:642,qty:3},{item:642,qty:3},{item:642,qty:3},
    {item:645,qty:2},{item:645,qty:2},{item:645,qty:2},{item:645,qty:2},
    {item:643,qty:2},{item:643,qty:2},{item:643,qty:2},{item:643,qty:2}
  ]
};

const SAFE_REWARD_ITEM = { mhf1: 159, mhf2: 193, mhfu: 193 };
const SAFE_JOIN = { mhf1: 4, mhf2: 5, mhfu: 8 };
const SAFE_REWARD_Z = 300;
const SAFE_PENALTY_Z = 100;
const SAFE_HRP_SUCC = 30;
const SAFE_HRP_FAIL = 10;

function isSafeMode(){ return TOOL_MODE === 'safe'; }

function applyToolMode(){
  sessionStorage.setItem('toolMode', TOOL_MODE);
  const safe = isSafeMode();

  // Update all 3 toolmode nav buttons
  ['f2-toolmode-btn','fu-toolmode-btn','f1-toolmode-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if(btn) btn.textContent = safe ? '\u{1F6E1}️ Safe Mode' : '⚠️ Advanced Mode';
  });

  // Update tab panel content
  const statusEl = document.getElementById('toolmode-status');
  const descEl = document.getElementById('toolmode-desc');
  const toggleBtn = document.getElementById('toolmode-toggle-btn');
  if(statusEl) statusEl.textContent = safe ? '\u{1F6E1}️ Safe Mode Active' : '⚠️ Advanced Mode Active';
  if(descEl) descEl.textContent = safe
    ? 'Supply, rewards, gathering, economy, join conditions and monster sizes are restricted to prevent cheating. Switch to Advanced Mode to unlock all fields.'
    : 'All fields are unlocked. You have full control over every quest parameter. Be careful when playing online.';
  if(toggleBtn){
    toggleBtn.textContent = safe ? 'Switch to Advanced Mode' : 'Switch to Safe Mode';
    toggleBtn.style.background = safe ? '' : 'var(--danger)';
    toggleBtn.style.color = safe ? '' : '#fff';
  }

  // Hide/show supply, rewards, gathering nav items
  const hiddenTabs = [
    'supply','rewards','gather',
    'mhfu-tab-supply','mhfu-tab-rewards','mhfu-tab-gather',
    'mhf1-tab-supply','mhf1-tab-rewards'
  ];
  document.querySelectorAll('.nav-item').forEach(n => {
    const dt = n.dataset.tab || '';
    if(hiddenTabs.includes(dt)){
      n.dataset.safeHidden = safe ? '1' : '';
    }
  });
  refreshTabVisibility();

  // Lock/unlock economy and join condition fields
  const lockedFields = [
    'f-fee','f-reward','f-penalty','f-gp',
    'f-speccond',
    'fu-fee','fu-reward','fu-penalty','fu-hrpsucc','fu-hrpfail',
    'fu-speccond',
    'f1-fee','f1-reward','f1-penalty','f1-hrp',
    'f1-speccond'
  ];
  lockedFields.forEach(id => {
    const el = document.getElementById(id);
    if(el){
      el.disabled = safe;
      el.style.opacity = safe ? '0.5' : '';
    }
  });

  if(safe) applySafeDefaults();
}

function applySafeDefaults(){
  const gk = GAME_MODE || 'mhf2';

  // Join conditions
  const joinEl = document.getElementById(gk==='mhf1'?'f1-speccond':gk==='mhfu'?'fu-speccond':'f-speccond');
  if(joinEl) joinEl.value = SAFE_JOIN[gk];

  // Guild points (F2 only)
  if(gk === 'mhf2'){
    const gpEl = document.getElementById('f-gp');
    if(gpEl) gpEl.value = 30;
  }

  // Economy: reward 300z, penalty 100z
  const feeEl = document.getElementById(gk==='mhf1'?'f1-fee':gk==='mhfu'?'fu-fee':'f-fee');
  const rewEl = document.getElementById(gk==='mhf1'?'f1-reward':gk==='mhfu'?'fu-reward':'f-reward');
  const penEl = document.getElementById(gk==='mhf1'?'f1-penalty':gk==='mhfu'?'fu-penalty':'f-penalty');
  if(rewEl) rewEl.value = SAFE_REWARD_Z;
  if(penEl) penEl.value = SAFE_PENALTY_Z;

  // HRP
  if(gk==='mhf1'){
    const hrpEl = document.getElementById('f1-hrp');
    if(hrpEl) hrpEl.value = SAFE_HRP_SUCC;
  } else if(gk==='mhfu'){
    const hsEl = document.getElementById('fu-hrpsucc');
    const hfEl = document.getElementById('fu-hrpfail');
    if(hsEl) hsEl.value = SAFE_HRP_SUCC;
    if(hfEl) hfEl.value = SAFE_HRP_FAIL;
  }
}

function applySafeSupply(){
  if(!isSafeMode()) return;
  const gk = GAME_MODE || 'mhf2';
  const items = SAFE_SUPPLY[gk] || SAFE_SUPPLY.mhf2;

  if(gk === 'mhf1' && typeof f1Model !== 'undefined' && f1Model){
    f1Model.supply = items.map(s => ({item:s.item, qty:s.qty}));
    if(typeof renderF1Supply === 'function') renderF1Supply();
  } else if(gk === 'mhfu' && typeof fuModel !== 'undefined' && fuModel){
    fuModel.supply = items.map(s => ({item:s.item, qty:s.qty, amt:s.qty}));
    const tb = document.getElementById('fu-supply-tbody');
    if(tb && typeof fuSupplyRow === 'function'){
      tb.innerHTML = '';
      fuModel.supply.forEach((s, i) => tb.appendChild(fuSupplyRow(i, s)));
    }
  } else if(gk === 'mhf2'){
    const tb = document.getElementById('tb-supply');
    if(tb && typeof appendSupplyRow === 'function'){
      tb.innerHTML = '';
      items.forEach((s, i) => appendSupplyRow(tb, i, s.item, s.qty));
    }
  }
}

function applySafeRewards(){
  if(!isSafeMode()) return;
  const gk = GAME_MODE || 'mhf2';
  const stoneId = SAFE_REWARD_ITEM[gk];
  const safeBlocks = [{cond:0, rewards:[{prob:100, item_id:stoneId, qty:1}]}];

  if(gk === 'mhf1' && typeof f1Model !== 'undefined' && f1Model){
    f1Model.rewardBlocks = safeBlocks;
    if(typeof renderF1Rewards === 'function') renderF1Rewards();
  } else if(gk === 'mhfu' && typeof fuModel !== 'undefined' && fuModel){
    fuModel.rewardBlocks = safeBlocks;
    if(typeof fuRenderRewards === 'function') fuRenderRewards();
  } else if(gk === 'mhf2'){
    if(typeof renderRewards === 'function') renderRewards(safeBlocks);
  }
}

function applySafeGathering(){
  if(!isSafeMode()) return;
  const gk = GAME_MODE || 'mhf2';
  if(gk === 'mhf1') return;

  if(gk === 'mhf2' && typeof gatherData !== 'undefined' && gatherData){
    gatherData.areas.forEach(area => { area.points = []; });
    gatherData.pointDataMaterials = [];
    gatherData.pointDataPtrs = [];
    if(typeof renderGathering === 'function') renderGathering();
  } else if(gk === 'mhfu' && typeof fuModel !== 'undefined' && fuModel){
    if(fuModel.gather){
      fuModel.gather.tables.forEach(t => { t.nodes = []; });
      fuModel.gather.itemTables = [];
      if(typeof fuRenderGather === 'function') fuRenderGather();
    }
  }
}

function checkSafeModeSizes(){
  if(!isSafeMode()) return true;
  const gk = _sizeGameKey();
  const sizeRows = _sizeRows(gk);
  if(!sizeRows.length) return true;

  const sizeMap = {};
  for(const r of sizeRows) sizeMap[r.id] = r;

  const bsEl = document.getElementById(gk==='mhf1'?'f1-bosssize':gk==='mhf2'?'f-bshape':'fu-monsize');
  const stEl = document.getElementById(gk==='mhf1'?'f1-sizemulti':gk==='mhf2'?'f-bsize':'fu-bsize');
  const bossSize = parseInt(bsEl?.value) || 0;
  const sizeTable = parseInt(stEl?.value) || 0;
  if(!bossSize) return true;

  const ranges = {0:[0,0],1:[0,5],2:[0,15],3:[-5,14],4:[-15,25]};
  const rng = ranges[sizeTable] || [0,0];
  const effMin = bossSize * (100 + rng[0]) / 100;
  const effMax = bossSize * (100 + rng[1]) / 100;

  const bossSelectors = gk==='mhf1' ? '#f1-bossdetail-tbody tr' : gk==='mhf2' ? '#tb-bossdetail tr' : '#fu-largemon-body tr, #fu-lg-tbody tr';
  const monsterIds = [];
  document.querySelectorAll(bossSelectors).forEach(tr => {
    const sel = tr.querySelector('.monster-pick select');
    if(sel && sel.value) monsterIds.push(parseInt(sel.value)||0);
  });

  const violations = [];
  const activeIds = new Set(monsterIds.filter(id => id > 0));
  for(const mid of activeIds){
    const ref = sizeMap[mid];
    if(!ref) continue;

    // King crown check
    if(ref.kingCrownPct){
      const kingThreshold = ref.kingCrownPct * 100;
      if(effMax >= kingThreshold){
        violations.push({name:ref.name, issue:'king crown', threshold:kingThreshold.toFixed(0)+'%', current:effMax.toFixed(0)+'%'});
      }
    }
    // Mini crown check (F2/FU only)
    if(gk !== 'mhf1' && ref.minCrownPct){
      const miniThreshold = ref.minCrownPct * 100;
      if(effMin <= miniThreshold){
        violations.push({name:ref.name, issue:'mini crown', threshold:miniThreshold.toFixed(0)+'%', current:effMin.toFixed(0)+'%'});
      }
    }
    // Smallest possible check (all games, stricter for F1)
    if(effMin < ref.smallestPct){
      violations.push({name:ref.name, issue:'below smallest possible', threshold:ref.smallestPct+'%', current:effMin.toFixed(0)+'%'});
    }
  }
  return violations;
}

function safeModeExportCheck(){
  if(!isSafeMode()) return true;
  const violations = checkSafeModeSizes();
  if(violations === true || !violations.length) return true;

  let msg = 'Safe Mode size violations detected:\n\n';
  violations.forEach(v => {
    msg += '• ' + v.name + ': ' + v.issue + ' (threshold: ' + v.threshold + ', quest: ' + v.current + ')\n';
  });
  msg += '\nThe monster size will be set to 100% with fixed size table (0) to prevent crown-sized monsters.\n\nClick OK to export with corrected sizes, or Cancel to go back and fix manually.';

  if(confirm(msg)){
    const gk = _sizeGameKey();
    const bsEl = document.getElementById(gk==='mhf1'?'f1-bosssize':gk==='mhf2'?'f-bshape':'fu-monsize');
    const stEl = document.getElementById(gk==='mhf1'?'f1-sizemulti':gk==='mhf2'?'f-bsize':'fu-bsize');
    if(bsEl) bsEl.value = 100;
    if(stEl) stEl.value = 0;
    return true;
  }
  return false;
}

function refreshTabVisibility(){
  const mode = GAME_MODE || 'mhf2';
  document.querySelectorAll('.nav-item').forEach(n => {
    const isfu = n.classList.contains('mhfu-nav');
    const isf1 = n.classList.contains('mhf1-nav');
    const isPlain = !isfu && !isf1;

    let visible;
    if(mode === 'mhfu')      visible = isfu;
    else if(mode === 'mhf1') visible = isf1;
    else                      visible = isPlain;

    // Safe mode hides supply/rewards/gather
    if(n.dataset.safeHidden === '1') visible = false;

    n.style.display = visible ? '' : 'none';
  });
}

function toggleToolMode(){
  if(isSafeMode()){
    // Switching to Advanced — show warning modal
    const modal = document.getElementById('toolmode-modal');
    if(modal) modal.style.display = 'flex';
  } else {
    // Switching back to Safe
    TOOL_MODE = 'safe';
    applyToolMode();
    if(D) { applySafeSupply(); applySafeRewards(); applySafeGathering(); applySafeDefaults(); }
  }
}

function closeToolModeModal(){
  const modal = document.getElementById('toolmode-modal');
  if(modal) modal.style.display = 'none';
}

function confirmAdvancedMode(){
  closeToolModeModal();
  TOOL_MODE = 'advanced';
  applyToolMode();
}

// Hook into quest load — override supply/rewards/gathering/economy after parse
const _origSetStatus = typeof setStatus === 'function' ? setStatus : null;
function onQuestLoaded(){
  if(!isSafeMode()) return;
  setTimeout(() => {
    applySafeSupply();
    applySafeRewards();
    applySafeGathering();
    applySafeDefaults();
  }, 50);
}

// Patch doSave to check safe mode sizes before export
const _origDoSave = typeof doSave === 'function' ? doSave : null;

document.addEventListener('DOMContentLoaded', () => {
  applyToolMode();

  // Intercept the toolmode nav click — if already in Advanced, clicking goes back to Safe
  document.querySelectorAll('.nav-item[data-tab="toolmode"]').forEach(n => {
    n.addEventListener('click', () => {
      // If in advanced mode and clicking the tab, switch to safe
      if(!isSafeMode()){
        TOOL_MODE = 'safe';
        applyToolMode();
        if(D) { applySafeSupply(); applySafeRewards(); applySafeGathering(); applySafeDefaults(); }
      }
    });
  });
});
