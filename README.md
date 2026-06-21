# MH Freedom Quest Editor

A single-page web editor for **Monster Hunter Freedom 1 (MHF1)**,
**Monster Hunter Freedom 2 (MHF2)**, and **Monster Hunter Freedom Unite (MHFU)**
quest binaries (`.bin`, `.mib`, `.pat`).

## Features

- **Full quest editing** for all 3 games - Quest Info, Text Fields, Targets, Supply Box, Rewards, Boss Spawns, Small Monsters, Gathering, Training/Arena, and Fixed Info tabs
- **Create new quests** from scratch for any game
- **EU multi-language support** - detect and edit all 5 EU languages (English, German, French, Spanish, Italian)
- **EVENT.BIN Loader** - manage event quest files for F1 and F2: preview, edit, extract, replace, delete, insert, and rebuild EVENT.BIN files
- **Hex viewer** with per-section color coding
- **Hex/Decimal calculator** with quick-reference table
- **Multiple export formats** - `.bin`, `.mib`, `.pat`, `.json`
- **Smart dropdowns** with search and custom value entry for items, monsters, and maps

## Files

| File | What's in it |
|------|-------------|
| `index.html` | Page shell: layout, styles, and `<script>` tags. |
| `shared.js` | Core engine: file loading, hex viewer, item/monster pickers, export logic, EU language support, EVENT.BIN loader, UI framework, and shared data tables. |
| `mhf1.js` | **MHF1-specific**: header offsets, parse, populate, save, new-quest builder, item/equipment lists, break parts, gathering. |
| `mhf2.js` | **MHF2-specific**: header offsets, parse, populate, save, new-quest builder, item/equipment lists. |
| `mhfu.js` | **MHFU-specific**: header offsets, parse, serialize, populate, new-quest builder, item/equipment lists, maps, gathering. |
| `init.js` | Bootstrap - selects MHF1 by default. |

## How the split works

All scripts are **classic** (non-module) `<script src>` tags sharing one global
scope. Functions and variables defined in `shared.js` are visible to all game
modules without `import`/`export`. Load order is set in `index.html`:

```html
<script src="shared.js"></script>
<script src="mhf2.js"></script>
<script src="mhfu.js"></script>
<script src="mhf1.js"></script>
<script src="init.js"></script>
```

`shared.js` must come first, the game modules next (order between them doesn't
matter), and `init.js` last.



## EVENT.BIN Loader

The Events Loader tab manages event quest pack files used by custom quest loaders:

- **F1**: `FDXDAT/EVENT.BIN`
- **F2**: `MHF2QST/EVENT.BIN`

Each EVENT.BIN contains quest slots of 0x6800 (26,624) bytes, zero-padded.
The loader auto-detects quest format (F1/F2/FU) and supports:

- **Preview** all quests with names, IDs, and sizes
- **Edit** - load any quest into the full editor (auto-switches game mode)
- **Extract** - download individual quests or all at once as `.mib` files
- **Replace** - swap a quest slot with a different `.mib` file
- **Delete** - remove a quest from the pack
- **Insert** - add a quest after any slot
- **Add** - append quests (supports multi-select)
- **Save** - rebuild and download the modified EVENT.BIN

Maximum 50 quest slots per EVENT.BIN.


## Credits:
- Grender for the f1 and f2 quest templates
- ViciousShadowVic for the quest files
- IncognitoMan for the mhfu quests structure and info
- Silverjolteon for the Event.bin and ID files
- Barry1990 for the f1 quest structure additional info
- snowyvernclaw for testing
- authors of the p2ndG quest editor
- Alexander Lancellott for the legal sizes for monsters