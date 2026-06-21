/* INIT: runs last, after all modules are defined
   Auto-split module — shares global scope with the other <script> files.
   Load order (set in index.html): shared.js → mhf2.js → mhfu.js → init.js */



setGame('mhf1', document.querySelector('.game-btn[data-game="mhf1"]'));
