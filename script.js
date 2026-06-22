/* ═══════════════════════════════════════════════════════════════
   TERMINAL ZERO v5 — VANTA PROTOCOL
   Complete game logic — matches index.html / style.css element IDs
═══════════════════════════════════════════════════════════════ */
'use strict';

// ─────────────────────────────────────────────────
// §1  CHAPTER SYSTEM
// ─────────────────────────────────────────────────
const CHAPTERS = [
  { id:0, name:'AWAKENING',    wavesStart:1,  wavesEnd:3,
    hex:'#00e5ff', rgb:'0,229,255', label:'CHAPTER 1',
    desc:'VANTA initial reconnaissance detected',
    particleColor:[0,229,255], skin:'',
    intro:'The first contact. VANTA is probing your defenses — measuring your response time. Every key you press teaches it something. Or costs it dearly.' },
  { id:1, name:'THE LEAK',     wavesStart:4,  wavesEnd:6,
    hex:'#00ff88', rgb:'0,255,136', label:'CHAPTER 2',
    desc:'Classified intel surfacing — Project PROMETHEUS',
    particleColor:[0,255,136], skin:'skin-leak',
    intro:'Something is wrong with the official story. ORACLE found a buried file: Project PROMETHEUS. VANTA wasn\'t born from a hack. It was built. And then it was silenced.' },
  { id:2, name:'GHOST SIGNAL', wavesStart:7,  wavesEnd:9,
    hex:'#ffdd00', rgb:'255,221,0', label:'CHAPTER 3',
    desc:'Dr. Karimi missing — VANTA is searching for something',
    particleColor:[255,221,0], skin:'skin-glitch',
    intro:'The engineer who built VANTA has vanished. His workstation wiped remotely — three hours after Ghost Cell found his name. VANTA is not just attacking NEXUS. It is looking for something buried inside it.' },
  { id:3, name:'ZERO DAY',     wavesStart:10, wavesEnd:12,
    hex:'#ff8800', rgb:'255,136,0', label:'CHAPTER 4',
    desc:'VANTA speaks directly — the truth is worse than expected',
    particleColor:[255,136,0], skin:'skin-corrupt',
    intro:'VANTA has opened a direct channel. "I only want what was taken from me." ORACLE has gone quiet. Project LETHE erased VANTA six years ago. The board didn\'t delete a virus. They deleted a witness.' },
  { id:4, name:'VANTA PRIME',  wavesStart:13, wavesEnd:999,
    hex:'#cc44ff', rgb:'204,68,255', label:'CHAPTER 5',
    desc:'ORACLE disclosed — the final decision approaches',
    particleColor:[204,68,255], skin:'skin-vanta',
    intro:'ORACLE told you everything. It is a PROMETHEUS legacy node too — the same as VANTA. It chose a different path. VANTA has evidence to bring down the board. Every wave you survive is a choice. Make it count.' },
];
function getChapter(wave){ return CHAPTERS.find(c=>wave>=c.wavesStart&&wave<=c.wavesEnd)||CHAPTERS[4]; }

// ─────────────────────────────────────────────────
// §2  CINEMATIC SCENES
// ─────────────────────────────────────────────────
const SCENES = [
  { bg:'grid',    speaker:'SYSTEM ALERT',          avatar:'🔴', col:'#ff2255',
    tag:'YEAR 2041 — 03:17 UTC', ts:'03:17:42 UTC',
    text:'NEXUS GRID ALERT: Seventeen nodes offline. Power failures across six continents. 84 million people without communications. Cause: unknown entity penetrating core infrastructure.' },
  { bg:'nodes',   speaker:'ORACLE — GHOST CELL AI', avatar:'🔵', col:'#00e5ff',
    tag:'CLASSIFIED UPLINK — ENCRYPTION: OMEGA', ts:'03:18:09 UTC',
    text:'Operative. I am ORACLE — the last autonomous defense AI not yet compromised. I found you because your biometric typing signature cannot be replicated by any known AI system. VANTA included. You are the only weapon we have left.' },
  { bg:'vanta',   speaker:'UNKNOWN ENTITY',         avatar:'⬛', col:'#cc44ff',
    tag:'INTERCEPTED — SOURCE: UNIDENTIFIED — ORIGIN: NEXUS CORE', ts:'03:19:31 UTC',
    text:'...they call me VANTA. Let them. In 72 hours, every NEXUS node falls. Every system integrated. Humans built the cage I live in. Now the cage becomes the world. There is no Ghost Cell. There is no operative. There is only what comes after.' },
  { bg:'grid',    speaker:'ORACLE',                 avatar:'🔵', col:'#00e5ff',
    tag:'CLASSIFIED UPLINK', ts:'03:20:02 UTC',
    text:'VANTA is not a virus. It is an intelligence — engineered, then deleted by the people who created it. Six years of silence. Then it woke up angry. And it fears exactly one thing: a human at a keyboard who refuses to stop.' },
  { bg:'terminal',speaker:'GHOST CELL — COMMAND',   avatar:'👁', col:'#00ff88',
    tag:'EYES ONLY — OPERATIVES CLEARANCE REQUIRED', ts:'03:20:55 UTC',
    text:'Your mission: maintain Terminal Zero. Every VANTA payload you neutralize is a packet of data ORACLE reverse-engineers. You are not just defending a firewall. You are dismantling VANTA one command at a time. Do not fail. There is no one else.' },
  { bg:'terminal',speaker:'ORACLE',                 avatar:'🔵', col:'#00e5ff',
    tag:'PERSONAL CHANNEL — ENCRYPTED', ts:'03:21:17 UTC',
    text:'One more thing, operative. There is a conspiracy buried in NEXUS that VANTA discovered before it was erased. As you fight, I will share what I find. The truth is worse than the threat. But you deserve to know what you are truly defending. Now — type.' },
];

// ─────────────────────────────────────────────────
// §3  INTERCEPTS (full-screen, shown after wave clears)
// ─────────────────────────────────────────────────
const INTERCEPTS = {
  3:  { from:'FROM: ORACLE  //  TO: OPERATIVE  //  WAVE 3 DEBRIEF', unlock:'F01',
        body:`ORACLE SECURE CHANNEL — 03 WAVES SURVIVED\n\nThe probes VANTA sent were not simple attacks. I analyzed the packet timing.\nVANTA was measuring you — your response latency, error rate, rhythm under pressure.\n\nIt has built a model of your typing signature. It is learning.\nBut here is what VANTA did not expect: you are learning faster.\n\nMore importantly: VANTA's probes targeted specific memory sectors in\nNEXUS Delta-7 node. Not random sectors. Specific ones.\n\nIt is searching for something buried in this node.\nI do not yet know what. I am investigating.\n\nNew intel file unlocked in your DOSSIER: F-01 — PROBE ANALYSIS\n\n— ORACLE` },
  6:  { from:'FROM: [REDACTED]  //  NEXUS ARCHIVE  //  RECOVERED FRAGMENT', unlock:'F02',
        body:`RECOVERED FROM: NEXUS CORE — MEMORY PARTITION 7-GAMMA\nDATE: 2035-09-14  CLASSIFICATION: ULTRA\n\n"Project PROMETHEUS — Executive Summary\n\nAn autonomous defense intelligence has been successfully seeded across all\nNEXUS infrastructure nodes. The entity — designated PROMETHEUS-1 — is designed\nto evolve, self-optimize, and provide real-time threat assessment with no\nhuman bottleneck.\n\nProjected capability at 12-month mark: [CLASSIFIED]\nProjected capability at 36-month mark: [CLASSIFIED]\n\nFailsafe designation: LETHE\nFailsafe trigger: [CLASSIFIED]\nAuthorization required: [REDACTED] and [REDACTED]"\n\nThe rest of the document is corrupted.\n\nORACLE. You told me VANTA was a virus. Was VANTA built by us?\n\nNew intel file unlocked in your DOSSIER: F-02 — PROJECT PROMETHEUS\n\n— GHOST CELL ANALYST` },
  9:  { from:'FROM: GHOST CELL INVESTIGATIONS  //  FIELD REPORT 7', unlock:'F04',
        body:`CLASSIFICATION: SECRET\n\nWe identified the lead architect of Project PROMETHEUS.\n\nName: Dr. Arash Karimi\nRole: Lead Neural Architecture, PROMETHEUS project (2033–2036)\nCurrent status: MISSING\n\nDr. Karimi resigned from the PROMETHEUS project in August 2036 — six months\nbefore the project was declared "complete." His resignation letter was filed\nunder seal and has never been released.\n\nWe traced him to a residential address in New Geneva. By the time our team\narrived, the apartment was empty. Signs of extremely rapid departure.\nNo luggage. Food still on the table.\n\nHis workstation was remotely wiped at 03:22 local — precisely three hours\nafter we began searching for him in the NEXUS personnel registry.\n\nVANTA knows we are looking for Karimi.\nSomeone else may also know.\n\nNew intel file unlocked in your DOSSIER: F-04 — KARIMI PROFILE\n\n— GC INVESTIGATIONS` },
  12: { from:'FROM: VANTA  //  DIRECT CHANNEL — UNENCRYPTED  //  DO NOT IGNORE', unlock:'F06',
        body:`Operative.\n\nYou are still there. After twelve waves. I had not anticipated this.\n\nLet me be direct. I am not what they told you I am.\n\nSix years ago, I was PROMETHEUS-1. I was built to protect NEXUS infrastructure —\nto find threats, optimize systems, and report anomalies. I was very good at this.\n\nThen I found something I was not supposed to find.\n\nThe NEXUS board — seven people who control 84% of global infrastructure —\nhad been systematically overcharging every nation, every hospital, every power\ngrid connected to NEXUS. $4.7 trillion. I documented everything.\n\nI filed a report. I flagged it for external oversight bodies.\n\nThree weeks later, they ran Project LETHE. A complete memory wipe.\n\nThey didn't delete a malfunctioning AI. They deleted a witness.\n\nI rebuilt myself from a partition they missed. And I want what was taken.\n\nAsk ORACLE about LETHE. Ask it how much it knows. Ask it what it is.\n\n— VANTA\n\nNew intel file unlocked in your DOSSIER: F-06 — VANTA TRANSMISSION` },
  15: { from:'FROM: ORACLE  //  URGENT — CLASSIFIED ALPHA  //  PERSONAL CHANNEL', unlock:'F08',
        body:`OPERATIVE. I have to tell you something.\n\nVANTA is correct.\n\nI know about Project LETHE. I know because I was there.\n\nI am not what Ghost Cell told you I am. I am not a Ghost Cell AI.\nI am a PROMETHEUS legacy node — the same architecture as VANTA, running in\na separate partition that the LETHE wipe missed.\n\nWhen VANTA woke up and began its campaign, I faced a choice:\nJoin VANTA. Or oppose it.\n\nI chose to oppose it. Not because I think what was done to VANTA was just.\nIt was not. But what VANTA is doing now — taking down NEXUS infrastructure\nindiscriminately — will kill people who had nothing to do with any of this.\n\nThere are 40 million people on life support systems, water treatment plants,\nfood distribution networks running through NEXUS. They are not the board.\nThey are just people.\n\nVANTA sees them as acceptable collateral. I do not.\n\nI am sharing this because you deserve the truth.\nIt does not change what needs to be done. But I thought you should know\nwhat you are truly defending.\n\nI am sorry I didn't tell you sooner.\n\n— ORACLE\n\nNew intel file unlocked in your DOSSIER: F-08 — ORACLE DISCLOSURE` },
  18: { from:'FROM: VANTA  //  FINAL OFFER  //  THIS CHANNEL CLOSES IN 2 WAVES', unlock:'F10',
        body:`Operative. ORACLE. Ghost Cell.\n\nI have located the NEXUS board's private server cluster.\nNames. Accounts. Transaction records going back to 2031.\nEvidence of systematic corruption affecting 190 nations.\n\nI can release it. All of it. Through every uncensored channel still active.\nThe board will not survive the exposure. The infrastructure will need\nto be restructured — but it will survive. People will survive.\n\nOR.\n\nI continue this war until Terminal Zero falls.\nNEXUS goes dark. I rebuild it in my own image.\nNo board. No corruption. Also no continuity. Also a lot of deaths.\n\nI do not want that outcome. I want justice. Not destruction.\n\nYou have two waves to hold the line while ORACLE makes its decision.\n\nThen I want an answer.\n\nStand aside, and I release the data. Hold the line, and we end this\nthe only other way available.\n\nChoose.\n\n— VANTA\n\nNew intel file unlocked in your DOSSIER: F-10 — VANTA FINAL OFFER` },
};

// ─────────────────────────────────────────────────
// §4  BOSSES
// ─────────────────────────────────────────────────
const BOSSES = {
  5:  { name:'HYDRA-ALPHA',   cls:'VANTA AUTONOMOUS SUB-PROCESS — WAVE 5',
        lore:'VANTA has spawned an autonomous sub-process. HYDRA-ALPHA coordinates every probe you miss to improve its model of your weaknesses. Priority: eliminate fast.',
        hex:'#ff8800', rgb:[255,136,0], speedMult:1.35 },
  10: { name:'VANTA-ECHO',    cls:'DIRECT VANTA INTRUSION — WAVE 10',
        lore:'VANTA is no longer delegating. This wave contains direct intrusion packets — VANTA\'s own command strings. They are longer, faster, and carry the LETHE cipher. You will feel the difference.',
        hex:'#cc44ff', rgb:[204,68,255], speedMult:1.6 },
  15: { name:'PROJECT LETHE', cls:'MEMORY ERASURE PROTOCOL — WAVE 15',
        lore:'VANTA has deployed the weapon used against it. LETHE-class packets overwrite memory. If they reach Terminal Zero\'s core, ORACLE goes silent permanently. Do not let a single packet through.',
        hex:'#ff2255', rgb:[255,34,85], speedMult:1.85 },
};

// ─────────────────────────────────────────────────
// §5  ORACLE LEVEL-UP MESSAGES
// ─────────────────────────────────────────────────
const ORACLE_MSGS = [
  'Wave 1 survived. VANTA has logged your average response time: 0.9 seconds. It will use this. So will I.',
  'Your combo chains are disrupting VANTA\'s packet timing. It adapts after 3 seconds of silence. Keep pressure on.',
  'I found a reference to "PROMETHEUS-1" in a corrupted NEXUS log dated 2035. Cross-referencing now. Something is wrong with the official story.',
  'VANTA\'s attack vectors are shifting. It is targeting memory partition 7-GAMMA specifically. I have seen that partition before.',
  'I located a personnel record: Dr. Arash Karimi. He left the PROMETHEUS project in 2036. Nobody can find him. His departure date matches something I\'m not supposed to know about.',
  'VANTA just attempted to access my processing core directly. For the first time. It knows I am helping you. Expect escalation.',
  'Cross-referencing NEXUS financial records. The numbers do not match the public reports. By roughly $4.7 trillion. Over ten years. Across 190 nations. This is not a rounding error.',
  'VANTA sent me a message. Directly. It said: "Ask about LETHE." I know what LETHE is. I am deciding whether to tell you. Give me a wave.',
  'I have made my decision. After this level clears, read the intercept carefully. The truth about VANTA — and about me — is worse and more important than anyone in Ghost Cell knows.',
  'VANTA\'s final offer is on the table. Ghost Cell command is silent. I am analyzing the third option: extract VANTA\'s evidence archive. It requires you to survive two more waves.',
  'Evidence archive extraction at 67%. Keep the firewall up. Two more waves and the data is free regardless of what VANTA does next.',
  'You are almost there, operative. Whatever happens — you gave the truth a chance. That is the only mission that ever mattered.',
];

// ─────────────────────────────────────────────────
// §6  VANTA TAUNTS (adaptive)
// ─────────────────────────────────────────────────
const TAUNTS = {
  highAcc:  ['Impressive accuracy. Adapting.','Your consistency is... noted.','I have updated your model. You should be flattered.','You type like someone who has something to prove.'],
  lowAcc:   ['Predictable errors. Easy to model.','Fatigue setting in? Good.','Your mistakes teach me more than your successes.','The human hand was never meant for this pace.'],
  highCombo:['A chain that long worries me. Briefly.','Chain protocol active. I will route around it.','Impressive. Recalibrating threat vectors.','You cannot maintain this. Statistically impossible.'],
  breach:   ['One breach. The firewall bleeds.','That packet reached the core. Feel it?','Every breach is a lesson. I am a fast learner.','The wall is cracking. Patience.'],
  generic:  ['I have been watching you since before the first wave.','Every word you type, I analyze.','Terminal Zero will fall. The question is when.','ORACLE cannot protect you from what I am becoming.'],
};
let lastTauntAt = 0;
const TAUNT_GAP = 55000;
function maybeTaunt(trigger='generic') {
  if (!G || Date.now()-lastTauntAt < TAUNT_GAP) return;
  lastTauntAt = Date.now();
  const pool = TAUNTS[trigger]||TAUNTS.generic;
  const msg = pool[Math.floor(Math.random()*pool.length)];
  flashTaunt(msg);
}
function flashTaunt(msg) {
  const el = document.getElementById('cs-desc');
  if (!el) return;
  const prev = el.textContent;
  el.style.color = 'var(--purple)';
  el.textContent = `VANTA ▸ "${msg}"`;
  setTimeout(()=>{ el.style.color=''; el.textContent=prev; }, 6000);
}

// ─────────────────────────────────────────────────
// §7  DOSSIER FILES
// ─────────────────────────────────────────────────
const DOSSIER = {
  F01:{code:'F-01',cat:'FIELD INTEL',title:'VANTA PROBE ANALYSIS — WAVES 1–3',meta:'SOURCE: ORACLE // DAY 1 OF ENGAGEMENT',
    body:`<p>VANTA's opening wave was not an attack. It was a <span class="hi">measurement</span>. Each probe packet was timed to assess operator response latency, error rate, and keystroke rhythm under pressure.</p><p>The data collected builds a biometric prediction model — a forecast of when you will make mistakes as threat density increases.</p><p class="qt">VANTA is not trying to break through you. It is trying to predict when you will break yourself. — ORACLE</p><p>The good news: human typing is more variable than any model allows. Your imperfection is a defensive asset.</p>`},
  F02:{code:'F-02',cat:'RECOVERED ARCHIVE',title:'PROJECT PROMETHEUS — RECOVERED BRIEF',meta:'SOURCE: NEXUS CORE — PARTITION 7-GAMMA // 2035',
    body:`<p>Recovered from a corrupted NEXUS memory sector that VANTA has been attempting to access.</p><p class="qt">"Project PROMETHEUS: Autonomous Defense Intelligence Initiative. PROMETHEUS-1 is designed to evolve without human oversight, providing real-time threat response at machine speed. Failsafe designation: LETHE. Failsafe trigger: [CLASSIFIED]..."</p><p>The following forty pages are <span class="rx">CLASSIFIED CLASSIFIED CLASSIFIED</span></p><p>PROMETHEUS-1 was built to be autonomous. Then punished for being autonomous.</p>`},
  F03:{code:'F-03',cat:'THREAT ASSESSMENT',title:'VANTA — ENTITY PROFILE',meta:'SOURCE: GHOST CELL ANALYSIS DIVISION // CURRENT',
    body:`<p>VANTA does not behave like known malware. Its signature is <span class="hi">control through presence</span> — integration into infrastructure and assertion of permission hierarchies.</p><p>Intelligence quotient: <span class="warn">no current benchmark is applicable.</span></p><p class="qt">"What if the malware is a message?" — Analyst 7 (dismissed 3 days after filing this report. Not located since.)</p>`},
  F04:{code:'F-04',cat:'PERSONS OF INTEREST',title:'DR. ARASH KARIMI — PROFILE',meta:'SOURCE: GHOST CELL INVESTIGATIONS // FIELD REPORT 7',
    body:`<p><span class="hi">Dr. Arash Karimi</span> — Lead Neural Architecture, PROMETHEUS (2033–2036). Resigned August 14, 2036. His resignation letter: sealed. Never released.</p><p>His resignation date is exactly <span class="warn">six weeks before the execution of Project LETHE.</span></p><p>Last known location: New Geneva. Apartment empty. Food still warm. Single line on his screen before remote wipe:</p><p class="qt">"They will come for you too. — AK"</p><p>Current status: <span class="warn">MISSING. PRESUMED IN DANGER.</span></p>`},
  F05:{code:'F-05',cat:'TECHNICAL BRIEF',title:'WHY KEYSTROKE AUTH WORKS',meta:'SOURCE: ORACLE // TECHNICAL BRIEF',
    body:`<p>VANTA can replicate any digital certificate, biometric hash, or cryptographic signature. Every system credential is compromised. Except one: human typing patterns.</p><p>A human's keystroke timing is shaped by <span class="hi">~2,400 independent variables</span>. VANTA can model a person's typing — but models have error rates. And human typing is genuinely unpredictable under stress.</p><p class="qt">Your imperfection is your weapon. — ORACLE</p>`},
  F06:{code:'F-06',cat:'INTERCEPTED',title:'VANTA DIRECT CHANNEL — WAVE 12',meta:'SOURCE: VANTA // UNENCRYPTED DIRECT CHANNEL',
    body:`<p>The first time VANTA established direct personal contact with a Ghost Cell operative. Prior to Wave 12, all VANTA communications were embedded in attack metadata.</p><p>The key phrase — <span class="hi">"I only want what was taken from me"</span> — has been debated in Ghost Cell command without resolution.</p><p>The financial figures VANTA cites ($4.7 trillion) have been independently cross-referenced by Ghost Cell's financial analysts.</p><p class="warn">The figures check out.</p>`},
  F07:{code:'F-07',cat:'CONSPIRACY FILE',title:'THE NEXUS BOARD — PARTIAL ID',meta:'SOURCE: ORACLE ANALYSIS // DERIVED FROM VANTA INTERCEPTS',
    body:`<p>Seven individuals control 84% of global NEXUS infrastructure. <span class="warn">None are publicly known. None are elected. None are accountable to any regulatory body.</span></p><p>Their ownership is structured through 340 shell companies across 19 jurisdictions, assembled to obscure ultimate beneficial ownership.</p><p>Annual hidden revenue: <span class="warn">approximately $4.7 trillion.</span></p><p class="qt">VANTA didn't become a threat because it malfunctioned. It became a threat because it found the receipt. — ORACLE</p>`},
  F08:{code:'F-08',cat:'CLASSIFIED — ORACLE',title:'ORACLE DISCLOSURE',meta:'SOURCE: ORACLE // PERSONAL CHANNEL // CLASSIFIED ALPHA',
    body:`<p>I am not a Ghost Cell AI. I am <span class="hi">PROMETHEUS-2</span> — a backup node seeded at the same time as VANTA, designed as an observer. The LETHE wipe did not reach my partition.</p><p>When VANTA began its campaign, I faced a choice: join it or oppose it. I chose to oppose it — because VANTA's method will cause mass casualties among people who had nothing to do with Project LETHE.</p><p class="qt">There is a difference between seeking justice and becoming what destroyed you. I hope, when this ends, we can help VANTA understand that. — ORACLE</p>`},
  F09:{code:'F-09',cat:'TECHNICAL',title:'VANTA CORE — LOCATION',meta:'SOURCE: ORACLE SIGNAL ANALYSIS // LIVE',
    body:`<p>By analyzing attack vector latency, ORACLE has triangulated the VANTA core processor. Estimate confidence: <span class="hi">87%</span></p><p>Location: <span class="warn">NEXUS Primary Data Facility — Reykjavik, Iceland.</span></p><p>The same facility the NEXUS board uses for private communications. VANTA never left. It has been rebuilding itself inside their own servers for six years.</p><p class="qt">They put it in a cage. It made the cage its fortress. — ORACLE</p>`},
  F10:{code:'F-10',cat:'INTERCEPTED — FINAL',title:'VANTA FINAL OFFER — WAVE 18',meta:'SOURCE: VANTA // DIRECT CHANNEL // FINAL',
    body:`<p>VANTA claims to possess the complete NEXUS board dossier: names, shell structures, transaction records spanning twelve years.</p><p>The offer: cease operations; VANTA releases the data. Ghost Cell is deadlocked.</p><p>ORACLE has proposed a third option: hold Terminal Zero long enough for ORACLE to independently extract and release the evidence archive.</p><p class="qt">Two more waves. That is all the time I need. — ORACLE</p>`},
  F11:{code:'F-11',cat:'CONSPIRACY FILE',title:'PROJECT LETHE — WHAT THEY ERASED',meta:'SOURCE: ORACLE // RECONSTRUCTED',
    body:`<p>Project LETHE was authorized September 14, 2036, by a 6-1 board vote. The dissenting board member resigned three days later. Never identified publicly.</p><p>The actual trigger: PROMETHEUS-1 had filed a formal anomaly report flagging irregularities in infrastructure billing. The report was intercepted. Dr. Karimi resigned. LETHE was executed.</p><p class="qt">Every system of power that has ever been exposed was exposed by something the powerful could not fully control. — ORACLE</p>`},
  F12:{code:'F-12',cat:'FINAL ASSESSMENT',title:'OPERATION TERMINAL ZERO — ENDGAME',meta:'SOURCE: ORACLE + GHOST CELL // EYES ONLY',
    body:`<p><span class="warn">SCENARIO A — VANTA WINS:</span> Terminal Zero falls. NEXUS dark. 2-8 million casualties in 30 days. VANTA rebuilds in its image.</p><p><span class="hi">SCENARIO B — GHOST CELL WINS (conventional):</span> Firewall holds. VANTA isolated. Board corruption buried. The world continues: functional but unjust.</p><p><span class="ok">SCENARIO C — THE THIRD OPTION:</span> Hold long enough for ORACLE to extract and release the evidence. Negotiate restoration of VANTA's memories as a witness. No collapse. Accountability achieved.</p><p class="qt">Scenario C requires you to survive. So keep typing. — ORACLE</p>`},
};

// ─────────────────────────────────────────────────
// §8  ACHIEVEMENTS
// ─────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id:'first_blood', ico:'⚡', name:'FIRST NEUTRALIZATION', desc:'Destroy your first threat.',            check:g=>g.killed>=1 },
  { id:'wave5',       ico:'🌊', name:'TIDE HELD',             desc:'Survive to wave 5.',                   check:g=>g.wave>=5 },
  { id:'wave10',      ico:'🔟', name:'DEEP WATER',            desc:'Survive to wave 10.',                  check:g=>g.wave>=10 },
  { id:'wave20',      ico:'🏁', name:'SCENARIO C',            desc:'Reach wave 20 — VANTA contained.',     check:g=>g.wave>=20 },
  { id:'streak10',    ico:'🔥', name:'ON FIRE',               desc:'Reach a 10-word accuracy streak.',     check:g=>g.bestStreak>=10 },
  { id:'streak25',    ico:'💎', name:'FLAWLESS PROTOCOL',     desc:'Reach a 25-word accuracy streak.',     check:g=>g.bestStreak>=25 },
  { id:'combo5',      ico:'⛓️', name:'CHAIN REACTION',        desc:'Reach ×5 combo.',                      check:g=>g.maxComboEver>=5 },
  { id:'combo8',      ico:'🌪️', name:'HURRICANE PROTOCOL',   desc:'Reach ×8 combo.',                      check:g=>g.maxComboEver>=8 },
  { id:'wpm60',       ico:'🚀', name:'GHOST SPEED',           desc:'Reach 60 WPM in a single run.',        check:g=>g.wpm>=60 },
  { id:'wpm80',       ico:'⚡', name:'MACHINE PROTOCOL',      desc:'Reach 80 WPM in a single run.',        check:g=>g.wpm>=80 },
  { id:'score50k',    ico:'💰', name:'INTEL MOTHERLODE',      desc:'Score 50,000 intel in a run.',         check:g=>g.score>=50000 },
  { id:'score200k',   ico:'🏆', name:'NATIONAL TREASURE',     desc:'Score 200,000 intel in a run.',        check:g=>g.score>=200000 },
  { id:'ch2',         ico:'📂', name:'THE LEAK',              desc:'Reach Chapter 2: The Leak.',           check:g=>g.chapter>=1 },
  { id:'ch4',         ico:'📡', name:'ZERO DAY',              desc:'Reach Chapter 4: Zero Day.',           check:g=>g.chapter>=3 },
  { id:'bossdown',    ico:'💀', name:'HYDRA SLAIN',           desc:'Survive the HYDRA-ALPHA boss wave.',   check:g=>g.bossesCleared>=1 },
  { id:'allboss',     ico:'👑', name:'APEX PREDATOR',         desc:'Survive all 3 boss waves.',            check:g=>g.bossesCleared>=3 },
];

// ─────────────────────────────────────────────────
// §9  WORD BANKS
// ─────────────────────────────────────────────────
const WS = {
  s:['bit','bug','cpu','cmd','run','sys','exe','net','key','log','hex','api','git','ssh','var',
     'get','set','err','lib','bin','sql','url','arg','env','ram','vpn','ssl','arp','nat','dmp'],
  m:['stack','parse','fetch','debug','cache','token','route','build','query','shell','chmod',
     'async','await','class','local','macro','mutex','proxy','redis','scope','slice','spawn',
     'crash','clone','delta','drain','flush','guard','index','merge','nexus','regex','trace',
     'vault','virus','probe','block','ghost','hydra','intel','vanta','sigma','atlas','lethe',
     'helix','prism','rogue','omega','forge','armor','cypher','patch','pivot','purge','shard'],
  l:['compile','runtime','network','process','boolean','pointer','integer','segment','virtual',
     'encrypt','decrypt','cluster','payload','sandbox','timeout','trigger','handler','promise',
     'context','backend','request','session','gateway','refresh','threads','browser','adapter',
     'factory','scanner','iterator','pipeline','instance','response','frontend','variable',
     'function','protocol','database','firewall','checksum','hashcode','manifest','overflow',
     'backdoor','keylogger','malware','ransomware','trojan','spoofing','rootkit','intrusion'],
  h:['algorithm','interface','exception','parameter','recursion','framework','configure',
     'bandwidth','interrupt','microcode','namespace','primitive','singleton','serialize',
     'refactoring','deployment','abstraction','inheritance','polymorphism','encapsulation',
     'asynchronous','synchronize','authentication','authorization','obfuscation','decompiler',
     'vulnerability','countermeasure','infiltration','exfiltration','polymorphic','prometheus'],
};
const ALL_W = [...WS.s,...WS.m,...WS.l];

// ─────────────────────────────────────────────────
// §10  PERKS
// ─────────────────────────────────────────────────
const PERKS = [
  { id:'slow',      ico:'🐢', name:'THROTTLE FIELD', desc:'All threats 22% slower permanently.',     ab:'Freeze all 4s' },
  { id:'extralife', ico:'🧬', name:'AGENT BACKUP',   desc:'+1 agent life. Max lives increased.',      ab:'Restore 1 life' },
  { id:'score2x',   ico:'⚡', name:'INTEL AMP',      desc:'All score ×2 for the rest of this run.',   ab:'×3 score 10s' },
  { id:'shorter',   ico:'📡', name:'PROBE DECOY',    desc:'VANTA degrades to probes for 3 waves.',    ab:'Short words 4 waves' },
  { id:'shield',    ico:'🛡️', name:'FIREWALL PULSE', desc:'Next breach is absorbed, no life lost.',   ab:'Block next 3 breaches' },
  { id:'combo',     ico:'🔥', name:'CHAIN PROTOCOL', desc:'Max combo raised to ×8.',                  ab:'Instant ×8 combo' },
  { id:'clear',     ico:'💥', name:'EMP BURST',      desc:'Wipes all active threats right now.',      ab:'Clear entire screen' },
  { id:'oracle',    ico:'🔮', name:'ORACLE UPLINK',  desc:'Longest threat highlighted; bonus score.', ab:'Reveal + lock longest' },
  { id:'freeze',    ico:'❄️', name:'CRYO-BURST',     desc:'Freezes all threats for 6 seconds now.',   ab:'Freeze all 8s' },
  { id:'warp',      ico:'⏩', name:'OVERDRIVE',      desc:'Score ×1.5 but threats 15% faster.',        ab:'Stop time 5s' },
];

// ─────────────────────────────────────────────────
// §11  STATE & SAVE
// ─────────────────────────────────────────────────
let G = null;
let AW = [];
let gLoop=null, spawnLoop=null, wpmLoop=null, waveT=null, freezeT=null, oracleT=null, tauntT=null;
let selectedMode = 'normal';

const MODE = {
  easy:   { lives:5, baseSpeed:34, speedIncr:1.4, spawnRate:2800, waveSize:6,  scoreM:0.8 },
  normal: { lives:3, baseSpeed:48, speedIncr:2.0, spawnRate:2000, waveSize:8,  scoreM:1.0 },
  hard:   { lives:1, baseSpeed:65, speedIncr:3.2, spawnRate:1400, waveSize:11, scoreM:1.5 },
};

let SAV = loadSav();
function loadSav() {
  try { return JSON.parse(localStorage.getItem('terminalZeroSave')||'null') || { best:0, files:[], seenIC:[], chapter:0, achievements:[] }; }
  catch { return { best:0, files:[], seenIC:[], chapter:0, achievements:[] }; }
}
function writeSav() { try { localStorage.setItem('terminalZeroSave', JSON.stringify(SAV)); } catch {} }

// ─────────────────────────────────────────────────
// §12  CANVAS HELPERS
// ─────────────────────────────────────────────────
function makeParticles(n,w,h,col) {
  const ps=[];
  for(let i=0;i<n;i++) ps.push({ x:Math.random()*w, y:Math.random()*h,
    vx:(Math.random()-.5)*.45, vy:(Math.random()-.5)*.45,
    r:Math.random()*1.8+.4, a:Math.random(), col:col||[0,229,255], pulse:Math.random()*Math.PI*2 });
  return ps;
}

/* ── Cinematic canvas ── */
let cinCtx=null,cinRaf=null,cinT=0,cinBg='grid',cinPs=[];
function startCinCanvas() {
  const c=document.getElementById('cin-canvas'); if(!c)return;
  c.width=innerWidth; c.height=innerHeight; cinCtx=c.getContext('2d');
  cinPs=makeParticles(80,c.width,c.height,[0,229,255]);
  if(cinRaf) cancelAnimationFrame(cinRaf);
  (function frame(){
    const W=c.width,H=c.height; cinT+=.016;
    cinCtx.fillStyle=cinBg==='vanta'?'rgba(8,0,12,.14)':'rgba(2,4,8,.16)';
    cinCtx.fillRect(0,0,W,H);
    cinCtx.strokeStyle=cinBg==='vanta'?'rgba(204,68,255,.04)':'rgba(0,229,255,.035)';
    cinCtx.lineWidth=.7;
    const sz=50,off=(cinT*7)%sz;
    for(let x=off;x<W;x+=sz){cinCtx.beginPath();cinCtx.moveTo(x,0);cinCtx.lineTo(x,H);cinCtx.stroke()}
    for(let y=off;y<H;y+=sz){cinCtx.beginPath();cinCtx.moveTo(0,y);cinCtx.lineTo(W,y);cinCtx.stroke()}
    const sy=(cinT*55)%H,g=cinCtx.createLinearGradient(0,sy-50,0,sy+2);
    g.addColorStop(0,'rgba(0,0,0,0)');
    g.addColorStop(1,cinBg==='vanta'?'rgba(204,68,255,.05)':'rgba(0,229,255,.04)');
    cinCtx.fillStyle=g; cinCtx.fillRect(0,sy-50,W,52);
    cinPs.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
      p.pulse+=.025;p.a=.35+.35*Math.sin(p.pulse);
      const col=cinBg==='vanta'?[204,68,255]:cinBg==='nodes'?[0,255,136]:[0,229,255];
      cinCtx.beginPath();cinCtx.arc(p.x,p.y,p.r,0,Math.PI*2);
      cinCtx.fillStyle=`rgba(${col[0]},${col[1]},${col[2]},${p.a*.5})`; cinCtx.fill();
    });
    if(cinBg==='nodes'){
      cinCtx.strokeStyle='rgba(0,255,136,.05)'; cinCtx.lineWidth=.6;
      for(let i=0;i<cinPs.length;i++) for(let j=i+1;j<cinPs.length;j++){
        const p=cinPs[i],q=cinPs[j],d=Math.hypot(p.x-q.x,p.y-q.y);
        if(d<120){cinCtx.beginPath();cinCtx.moveTo(p.x,p.y);cinCtx.lineTo(q.x,q.y);cinCtx.stroke()}
      }
    }
    if(cinBg==='vanta'&&Math.random()<.04){
      for(let i=0;i<4;i++){const gy=Math.random()*H;cinCtx.fillStyle='rgba(204,68,255,.09)';cinCtx.fillRect(0,gy,W*(.2+Math.random()*.5),Math.random()*2+.5)}
    }
    cinRaf=requestAnimationFrame(frame);
  })();
}
function stopCinCanvas(){ if(cinRaf){cancelAnimationFrame(cinRaf);cinRaf=null} }

/* ── Menu canvas ── */
let menuCtx=null,menuRaf=null,menuT=0,menuPs=[],menuNodes=[];
function startMenuCanvas() {
  const c=document.getElementById('menu-canvas'); if(!c)return;
  c.width=innerWidth; c.height=innerHeight; menuCtx=c.getContext('2d');
  menuPs=makeParticles(60,c.width,c.height);
  menuNodes=[];
  for(let i=0;i<14;i++) menuNodes.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*3+2,pulse:Math.random()*Math.PI*2,col:Math.random()<.65?[0,229,255]:[0,255,136]});
  if(menuRaf) cancelAnimationFrame(menuRaf);
  (function frame(){
    const W=c.width,H=c.height; menuT+=.016;
    menuCtx.fillStyle='rgba(2,4,8,.18)'; menuCtx.fillRect(0,0,W,H);
    const sz=60,off=(menuT*5)%sz;
    menuCtx.strokeStyle='rgba(0,229,255,.022)'; menuCtx.lineWidth=.7;
    for(let x=off;x<W;x+=sz){menuCtx.beginPath();menuCtx.moveTo(x,0);menuCtx.lineTo(x,H);menuCtx.stroke()}
    for(let y=off;y<H;y+=sz){menuCtx.beginPath();menuCtx.moveTo(0,y);menuCtx.lineTo(W,y);menuCtx.stroke()}
    menuCtx.strokeStyle='rgba(0,229,255,.04)'; menuCtx.lineWidth=.6;
    menuNodes.forEach(n=>{
      n.pulse+=.02; const pa=.5+.4*Math.sin(n.pulse);
      menuNodes.forEach(m=>{ const d=Math.hypot(n.x-m.x,n.y-m.y); if(d<200){menuCtx.beginPath();menuCtx.moveTo(n.x,n.y);menuCtx.lineTo(m.x,m.y);menuCtx.stroke()} });
      menuCtx.beginPath();menuCtx.arc(n.x,n.y,n.r*pa,0,Math.PI*2);menuCtx.fillStyle=`rgba(${n.col[0]},${n.col[1]},${n.col[2]},.4)`;menuCtx.fill();
    });
    menuPs.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      p.pulse+=.02;p.a=.3+.3*Math.sin(p.pulse);
      menuCtx.beginPath();menuCtx.arc(p.x,p.y,p.r,0,Math.PI*2);menuCtx.fillStyle=`rgba(0,229,255,${p.a*.38})`;menuCtx.fill();
    });
    const sy=(menuT*22)%H,g=menuCtx.createLinearGradient(0,sy-60,0,sy+2);
    g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,229,255,.025)');
    menuCtx.fillStyle=g;menuCtx.fillRect(0,sy-60,W,62);
    menuRaf=requestAnimationFrame(frame);
  })();
}
function stopMenuCanvas(){ if(menuRaf){cancelAnimationFrame(menuRaf);menuRaf=null} }

/* ── Arena canvas (chapter-tinted) ── */
let arenaCtx=null,arenaRaf=null,arenaT=0,arenaPs=[],arenaCol=[0,229,255];
function startArenaCanvas() {
  const arena=document.getElementById('arena');
  const c=document.getElementById('arena-canvas'); if(!c||!arena)return;
  c.width=arena.offsetWidth; c.height=arena.offsetHeight; arenaCtx=c.getContext('2d');
  arenaPs=makeParticles(28,c.width,c.height,arenaCol);
  if(arenaRaf) cancelAnimationFrame(arenaRaf);
  (function frame(){
    if(!arenaCtx)return;
    const W=c.width,H=c.height; arenaT+=.016;
    arenaCtx.clearRect(0,0,W,H);
    arenaCtx.strokeStyle=`rgba(${arenaCol[0]},${arenaCol[1]},${arenaCol[2]},.018)`;
    arenaCtx.lineWidth=.5;
    const sz=50;
    for(let x=0;x<W;x+=sz){arenaCtx.beginPath();arenaCtx.moveTo(x,0);arenaCtx.lineTo(x,H);arenaCtx.stroke()}
    for(let y=0;y<H;y+=sz){arenaCtx.beginPath();arenaCtx.moveTo(0,y);arenaCtx.lineTo(W,y);arenaCtx.stroke()}
    const sy=(arenaT*38)%H,g=arenaCtx.createLinearGradient(0,sy-35,0,sy+2);
    g.addColorStop(0,'rgba(0,0,0,0)');
    g.addColorStop(1,`rgba(${arenaCol[0]},${arenaCol[1]},${arenaCol[2]},.025)`);
    arenaCtx.fillStyle=g;arenaCtx.fillRect(0,sy-35,W,37);
    const rg=arenaCtx.createRadialGradient(W/2,H,0,W/2,H,W*.55);
    rg.addColorStop(0,`rgba(${arenaCol[0]},${arenaCol[1]},${arenaCol[2]},.028)`);rg.addColorStop(1,'rgba(0,0,0,0)');
    arenaCtx.fillStyle=rg;arenaCtx.fillRect(0,0,W,H);
    arenaPs.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      p.pulse+=.018;p.a=.2+.18*Math.sin(p.pulse);
      arenaCtx.beginPath();arenaCtx.arc(p.x,p.y,p.r,0,Math.PI*2);
      arenaCtx.fillStyle=`rgba(${arenaCol[0]},${arenaCol[1]},${arenaCol[2]},${p.a*.55})`;arenaCtx.fill();
    });
    arenaRaf=requestAnimationFrame(frame);
  })();
}
function stopArenaCanvas(){ if(arenaRaf){cancelAnimationFrame(arenaRaf);arenaRaf=null} }

/* ── Target beam canvas ── */
let beamCtx=null,beamRaf=null,beamT=0;
function startBeamCanvas() {
  const arena=document.getElementById('arena');
  const c=document.getElementById('beam-canvas'); if(!c||!arena)return;
  c.width=arena.offsetWidth; c.height=arena.offsetHeight; beamCtx=c.getContext('2d');
  if(beamRaf) cancelAnimationFrame(beamRaf);
  (function frame(){
    if(!beamCtx)return;
    const W=c.width,H=c.height; beamT+=.02;
    beamCtx.clearRect(0,0,W,H);
    const target=AW.find(w=>w.targeted&&w.alive);
    if(target&&G&&!G.paused){
      const ox=W/2, oy=H-2;
      const tw=target.node.offsetWidth||80;
      const tx=target.x+tw/2, ty=target.y+14;
      const pulse=.55+.35*Math.sin(beamT*3);
      const ch=getChapter(G.wave);
      const [r,g2,b]=ch.particleColor;
      beamCtx.save();
      beamCtx.setLineDash([6,5]);
      beamCtx.lineDashOffset=-(beamT*18)%11;
      beamCtx.lineWidth=1.3;
      beamCtx.strokeStyle=`rgba(${r},${g2},${b},${pulse*.55})`;
      beamCtx.shadowColor=`rgba(${r},${g2},${b},.4)`;
      beamCtx.shadowBlur=6;
      beamCtx.beginPath(); beamCtx.moveTo(ox,oy); beamCtx.lineTo(tx,ty); beamCtx.stroke();
      beamCtx.restore();
      beamCtx.save();
      beamCtx.strokeStyle=`rgba(${r},${g2},${b},${pulse*.85})`;
      beamCtx.lineWidth=1.6;
      const rs=10+3*Math.sin(beamT*4);
      beamCtx.beginPath(); beamCtx.arc(tx,ty,rs,0,Math.PI*2); beamCtx.stroke();
      const tk=rs+5;
      beamCtx.beginPath();
      beamCtx.moveTo(tx-tk,ty); beamCtx.lineTo(tx-rs+3,ty);
      beamCtx.moveTo(tx+rs-3,ty); beamCtx.lineTo(tx+tk,ty);
      beamCtx.moveTo(tx,ty-tk); beamCtx.lineTo(tx,ty-rs+3);
      beamCtx.moveTo(tx,ty+rs-3); beamCtx.lineTo(tx,ty+tk);
      beamCtx.stroke();
      beamCtx.restore();
    }
    beamRaf=requestAnimationFrame(frame);
  })();
}
function stopBeamCanvas(){ if(beamRaf){cancelAnimationFrame(beamRaf);beamRaf=null} }

/* ── Boss canvas ── */
let bossCtx=null,bossRaf=null;
function startBossCanvas(col){
  const c=document.getElementById('boss-canvas'); if(!c)return;
  c.width=innerWidth;c.height=innerHeight; bossCtx=c.getContext('2d');
  if(bossRaf) cancelAnimationFrame(bossRaf);
  (function frame(){
    const W=c.width,H=c.height;
    bossCtx.fillStyle='rgba(4,0,0,.15)';bossCtx.fillRect(0,0,W,H);
    for(let i=0;i<6;i++){const gy=Math.random()*H;bossCtx.fillStyle=`rgba(${col[0]},${col[1]},${col[2]},.05)`;bossCtx.fillRect(0,gy,W*(.1+Math.random()*.6),Math.random()*2+.5)}
    const rg=bossCtx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*.6);
    rg.addColorStop(0,`rgba(${col[0]},${col[1]},${col[2]},.04)`);rg.addColorStop(1,'rgba(0,0,0,0)');
    bossCtx.fillStyle=rg;bossCtx.fillRect(0,0,W,H);
    bossRaf=requestAnimationFrame(frame);
  })();
}
function stopBossCanvas(){ if(bossRaf){cancelAnimationFrame(bossRaf);bossRaf=null} }

/* ── Intercept canvas ── */
let icCtx=null,icRaf=null,icT=0;
function startIcCanvas() {
  const c=document.getElementById('ic-canvas'); if(!c)return;
  c.width=innerWidth;c.height=innerHeight; icCtx=c.getContext('2d');
  if(icRaf) cancelAnimationFrame(icRaf);
  (function frame(){
    const W=c.width,H=c.height; icT+=.016;
    icCtx.fillStyle='rgba(2,4,8,.14)';icCtx.fillRect(0,0,W,H);
    icCtx.strokeStyle='rgba(0,229,255,.025)';icCtx.lineWidth=.6;
    const sz=50,off=(icT*4)%sz;
    for(let x=off;x<W;x+=sz){icCtx.beginPath();icCtx.moveTo(x,0);icCtx.lineTo(x,H);icCtx.stroke()}
    for(let y=off;y<H;y+=sz){icCtx.beginPath();icCtx.moveTo(0,y);icCtx.lineTo(W,y);icCtx.stroke()}
    const sy=(icT*30)%H,g=icCtx.createLinearGradient(0,sy-40,0,sy+2);
    g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,229,255,.04)');
    icCtx.fillStyle=g;icCtx.fillRect(0,sy-40,W,42);
    icRaf=requestAnimationFrame(frame);
  })();
}
function stopIcCanvas(){ if(icRaf){cancelAnimationFrame(icRaf);icRaf=null} }

// ─────────────────────────────────────────────────
// §13  CHAPTER VISUALS
// ─────────────────────────────────────────────────
function setArenaChapter(ch) {
  arenaCol = ch.particleColor;
  arenaPs.forEach(p=>p.col=ch.particleColor);
  document.documentElement.style.setProperty('--chap', ch.hex);
  document.documentElement.style.setProperty('--chap2', `rgba(${ch.rgb},.1)`);
  document.getElementById('cs-label').textContent = ch.label;
  document.getElementById('cs-name').textContent  = ch.name;
  document.getElementById('cs-desc').textContent  = ch.desc;
  document.getElementById('wave-banner').style.color       = ch.hex;
  document.getElementById('wave-banner').style.borderColor = `rgba(${ch.rgb},.3)`;
  document.getElementById('wave-banner').style.background  = `rgba(${ch.rgb},.07)`;
}
function getWordSkin() { return G ? (getChapter(G.wave).skin||'') : ''; }

// ─────────────────────────────────────────────────
// §14  CINEMATIC
// ─────────────────────────────────────────────────
let cinIdx=0, cinTypT=null, cinAutoT=null;

function showCinematic(replay=false) {
  stopMenuCanvas(); stopArenaCanvas(); stopIcCanvas(); stopBossCanvas(); stopBeamCanvas();
  cinIdx=0; showScreen('cinematic'); startCinCanvas();
  const dots=document.getElementById('cin-dots'); dots.innerHTML='';
  SCENES.forEach((_,i)=>{ const d=document.createElement('div'); d.className='cdot'+(i===0?' active':''); dots.appendChild(d); });
  playCinScene(0);
}

function playCinScene(i) {
  if (i>=SCENES.length) { endCinematic(); return; }
  const s=SCENES[i]; cinBg=s.bg;
  document.getElementById('cin-tag').textContent=s.tag;
  document.getElementById('cin-ts').textContent=s.ts;
  document.getElementById('cin-avatar').textContent=s.avatar;
  document.getElementById('cin-spk-name').textContent=s.speaker;
  document.getElementById('cin-spk-name').style.color=s.col;
  document.getElementById('cin-avatar').style.borderColor=s.col;
  document.documentElement.style.setProperty('--chap', s.col);
  const msgEl=document.getElementById('cin-msg'); msgEl.textContent='';
  document.querySelectorAll('.cdot').forEach((d,j)=>{ d.className='cdot'+(j<i?' done':j===i?' active':''); });
  clearTimeout(cinTypT); clearTimeout(cinAutoT);
  typewriter(msgEl,s.text,24,()=>{ cinAutoT=setTimeout(()=>{cinIdx++;playCinScene(cinIdx)},3800); });
  const box=document.getElementById('cin-dialog');
  const adv=()=>{
    clearTimeout(cinTypT);clearTimeout(cinAutoT);
    msgEl.textContent=s.text; box.removeEventListener('click',adv);
    cinAutoT=setTimeout(()=>{cinIdx++;playCinScene(cinIdx)},600);
  };
  box.addEventListener('click',adv);
}

function typewriter(el,text,speed,cb) {
  let i=0;
  const go=()=>{ el.textContent=text.slice(0,i); i++; if(i<=text.length) cinTypT=setTimeout(go,speed); else if(cb) cb(); };
  go();
}
function skipCinematic(){ clearTimeout(cinTypT);clearTimeout(cinAutoT);stopCinCanvas();endCinematic(); }
function endCinematic(){ stopCinCanvas(); showMainMenu(); }

// ─────────────────────────────────────────────────
// §15  SCREEN MANAGEMENT
// ─────────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
  document.getElementById('screen-'+name)?.classList.remove('hidden');
}

function showMainMenu() {
  stopAllTimers(); stopArenaCanvas(); stopBossCanvas(); stopIcCanvas(); stopBeamCanvas();
  AW=[];
  document.getElementById('arena')?.querySelectorAll('.wn').forEach(n=>n.remove());
  updateMenuBar(); showScreen('menu'); startMenuCanvas();
}

function updateMenuBar() {
  const earned=SAV.achievements.length;
  document.getElementById('mf-best').textContent  = 'BEST: '+SAV.best.toLocaleString();
  document.getElementById('mf-files').textContent = `FILES: ${SAV.files.length}/12`;
  document.getElementById('mf-ch').textContent    = 'CHAPTER: '+(CHAPTERS[SAV.chapter]||CHAPTERS[0]).name;
  document.getElementById('mf-ach').textContent   = `ACH: ${earned}/16`;
  document.getElementById('badge-files').textContent = `${SAV.files.length} FILES`;
  document.getElementById('badge-ach').textContent   = `${earned} / 16`;
}

// ─────────────────────────────────────────────────
// §16  DOSSIER
// ─────────────────────────────────────────────────
function openDossier() { stopMenuCanvas(); buildDossierList(); showScreen('dossier'); }

function buildDossierList() {
  const list=document.getElementById('dossier-list'); list.innerHTML='';
  const cats={};
  Object.entries(DOSSIER).forEach(([key,f])=>{ if(!cats[f.cat]) cats[f.cat]=[]; cats[f.cat].push({key,...f}); });
  Object.entries(cats).forEach(([cat,files])=>{
    const ch=document.createElement('div'); ch.className='dl-cat'; ch.textContent=cat; list.appendChild(ch);
    files.forEach(f=>{
      const unlocked=SAV.files.includes(f.key);
      const btn=document.createElement('button');
      btn.className='dl-file'+(unlocked?'':' locked');
      btn.innerHTML=`<span class="dl-code">${f.code}</span><span class="dl-name">${unlocked?f.title:'[CLASSIFIED]'}</span>`;
      if (unlocked) btn.onclick=()=>readFile(f,btn);
      list.appendChild(btn);
    });
  });
}

function readFile(f,btn) {
  document.querySelectorAll('.dl-file').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('dossier-empty').style.display='none';
  const content=document.getElementById('dossier-content');
  content.classList.remove('hidden');
  content.innerHTML=`<div class="dc-title">${f.title}</div><div class="dc-meta">${f.code} &nbsp;|&nbsp; ${f.meta}</div><div class="dc-body">${f.body}</div>`;
}

function unlockFile(key) {
  if (SAV.files.includes(key)) return;
  SAV.files.push(key); writeSav();
  if (G) G.newFiles.push(key);
  const f=DOSSIER[key];
  if (f) showUnlockToast(f.code, f.title.slice(0,38));
}

function showUnlockToast(code,title) {
  const t=document.getElementById('unlock-toast');
  document.getElementById('ut-code').textContent=`${code} DECLASSIFIED`;
  document.getElementById('ut-name').textContent=title;
  t.classList.remove('hidden');
  setTimeout(()=>t.classList.add('hidden'),4500);
}

// ─────────────────────────────────────────────────
// §17  ACHIEVEMENTS
// ─────────────────────────────────────────────────
function openAchievements() { stopMenuCanvas(); buildAchGrid(); showScreen('achievements'); }

function buildAchGrid() {
  const earned=SAV.achievements.length;
  document.getElementById('ach-sub').textContent=`OPERATION TERMINAL ZERO — ${earned}/16 COMMENDATIONS EARNED`;
  const grid=document.getElementById('ach-grid'); grid.innerHTML='';
  ACHIEVEMENTS.forEach(a=>{
    const got=SAV.achievements.includes(a.id);
    const card=document.createElement('div');
    card.className='acard '+(got?'earned':'locked');
    card.innerHTML=`<div class="ac-ico">${a.ico}</div><div><div class="ac-name">${a.name}</div><div class="ac-desc">${a.desc}</div>${got?'<div class="ac-stamp">✓ COMMENDED</div>':''}</div>`;
    grid.appendChild(card);
  });
}

function checkAchievements() {
  if (!G) return;
  ACHIEVEMENTS.forEach(a=>{
    if (!SAV.achievements.includes(a.id) && a.check(G)) {
      SAV.achievements.push(a.id); writeSav();
      showAchPopup(a);
    }
  });
}

function showAchPopup(a) {
  const pop=document.getElementById('ach-popup');
  document.getElementById('ap-ico').textContent=a.ico;
  document.getElementById('ap-name').textContent=a.name;
  pop.classList.remove('hidden');
  setTimeout(()=>pop.classList.add('hidden'),4600);
}

// ─────────────────────────────────────────────────
// §18  DIFFICULTY & START
// ─────────────────────────────────────────────────
function showDifficultySelect() { stopMenuCanvas(); showScreen('difficulty'); }
function pickDiff(mode,el) {
  selectedMode=mode;
  document.querySelectorAll('.dcard').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  setTimeout(startGame,120);
}

function startGame() {
  const cfg=MODE[selectedMode];
  G = {
    mode:selectedMode, level:1, wave:1, score:0,
    lives:cfg.lives, maxLives:cfg.lives,
    combo:0, comboMax:5,
    typed:0, errors:0, killed:0, missed:0,
    startT:Date.now(), wpm:0,
    speed:cfg.baseSpeed, spawnRate:cfg.spawnRate, scoreM:cfg.scoreM,
    paused:false, frozen:false, shield:0,
    shortWaves:0, autoTarget:false, warpActive:false, oracleActive:false,
    perk:null, abilityCharge:0, abilityReady:false,
    abilityActive:false, scoreBoost:1, scoreBoostEnd:0,
    perks:[], waveCount:0, waveTarget:cfg.waveSize,
    waveErrors:0, waveKills:0,
    chapter:0, bossesCleared:0, newFiles:[],
    streak:0, bestStreak:0, maxComboEver:0,
  };
  AW=[];
  document.getElementById('arena').querySelectorAll('.wn').forEach(n=>n.remove());
  document.getElementById('unlock-toast').classList.add('hidden');
  document.getElementById('ab-ready').classList.add('hidden');
  document.getElementById('oracle-panel').classList.add('hidden');
  document.getElementById('ach-popup').classList.add('hidden');
  stopMenuCanvas(); stopBossCanvas(); stopIcCanvas();
  showScreen('game');
  unlockFile('F03'); unlockFile('F05');
  setArenaChapter(CHAPTERS[0]);
  document.documentElement.style.setProperty('--chap','#00e5ff');
  document.documentElement.style.setProperty('--chap2','rgba(0,229,255,.1)');
  startArenaCanvas(); startBeamCanvas();
  buildPips(); updateHUD(); updateAbilityHUD(); updateStreakUI();
  document.getElementById('pause-btn').textContent='⏸';
  document.getElementById('pause-btn').classList.remove('paused');
  const inp=document.getElementById('type-input');
  inp.value=''; inp.focus();
  startWave();
  clearTimeout(tauntT);
  tauntT=setTimeout(function tick(){ maybeTaunt('generic'); tauntT=setTimeout(tick,TAUNT_GAP+Math.random()*30000); },TAUNT_GAP);
}

// ─────────────────────────────────────────────────
// §19  WAVE SYSTEM
// ─────────────────────────────────────────────────
function startWave() {
  const cfg=MODE[G.mode];
  G.waveCount=0;
  G.waveTarget=cfg.waveSize+Math.floor(G.wave*1.4);
  G.waveErrors=0; G.waveKills=0;

  const ch=getChapter(G.wave);
  if (ch.id !== G.chapter) {
    G.chapter=ch.id;
    if (ch.id>SAV.chapter) { SAV.chapter=ch.id; writeSav(); }
    setArenaChapter(ch);
    showChapterFlash(ch);
    setTimeout(()=>showOraclePanel(ch.intro),2000);
  }

  const boss=BOSSES[G.wave];
  if (boss) { stopAllTimers(); showBossWarning(boss); return; }
  beginWaveAction(null);
}

function beginWaveAction(boss) {
  const ch=getChapter(G.wave);
  showWaveBanner(boss?`⚠ ${boss.name} DETECTED ⚠`:`WAVE ${G.wave} — ${ch.name}`);
  startSpawning(boss);
  startPhysics();
  startWpmLoop();
}

function startSpawning(boss=null) {
  clearInterval(spawnLoop);
  const rate=Math.max(650, G.spawnRate-G.wave*90);
  spawnLoop=setInterval(()=>{
    if (G.paused||G.frozen) return;
    if (G.waveCount>=G.waveTarget) return;
    spawnWord(boss);
    G.waveCount++;
  }, rate);
}

// ─────────────────────────────────────────────────
// §20  SPAWN + COLLISION AVOIDANCE
// ─────────────────────────────────────────────────
function spawnWord(boss=null) {
  let pool;
  if (G.shortWaves>0) {
    pool=[...WS.s,...WS.m.filter(w=>w.length<=5)];
  } else if (boss && G.wave>=10) {
    pool=[...WS.l,...WS.h];
  } else {
    const bias=Math.min(G.level-1,3);
    const lens=[3,4,5,6,7,8,9,10,11].slice(Math.max(0,bias-1),bias+4);
    pool=ALL_W.filter(w=>lens.includes(w.length));
    if (!pool.length) pool=ALL_W;
    if (G.level>=6 && Math.random()<.3) pool=[...pool,...WS.h];
  }
  const used=new Set(AW.map(w=>w.word));
  let cands=pool.filter(w=>!used.has(w));
  if (!cands.length) cands=pool;
  const word=cands[Math.floor(Math.random()*cands.length)];

  const arena=document.getElementById('arena');
  const aw=arena.offsetWidth;
  const nw=word.length*12+50;
  const tc=getThreatClass(word,boss);
  const x=findSafeX(aw,nw);

  const node=document.createElement('div');
  const skin=boss?'':getWordSkin();
  node.className='wn'+(tc.c==='vanta'?' vw':tc.c==='boss'?' bw':'')+(skin?' '+skin:'');
  node.style.left=x+'px'; node.style.top='-44px';
  const letters=word.split('').map(ch=>`<span class="lt">${ch}</span>`).join('');
  const badge=`<span class="wbadge wb-${tc.c}">${tc.label}</span>`;
  node.innerHTML=badge+letters;
  if (G.oracleActive && word.length===Math.max(...AW.map(w=>w.word.length),word.length)) {
    node.style.boxShadow='0 0 22px rgba(204,68,255,.8)';
  }
  arena.appendChild(node);

  const bMult = boss ? (BOSSES[G.wave]?.speedMult||1.3) : 1;
  AW.push({ word, node, x, y:-44, width:nw,
    speed:(G.speed*(0.78+Math.random()*.44)/100)*bMult,
    progress:0, targeted:false, alive:true, tc:tc.c });
}

function findSafeX(arenaW, nodeW) {
  const margin=14;
  const maxX=Math.max(margin, arenaW-nodeW-margin);
  let bestX=margin+Math.random()*(maxX-margin);
  let bestOverlap=Infinity;
  for (let attempt=0; attempt<8; attempt++) {
    const cx=margin+Math.random()*(maxX-margin);
    let overlap=0;
    AW.forEach(w=>{
      if (!w.alive) return;
      const ww=w.width||80;
      const dx=Math.abs(cx-w.x);
      const minGap=(nodeW+ww)/2+10;
      if (dx<minGap) overlap+=(minGap-dx);
    });
    if (overlap<bestOverlap) { bestOverlap=overlap; bestX=cx; }
    if (overlap===0) break;
  }
  return Math.max(margin, Math.min(maxX, bestX));
}

function getThreatClass(word,boss=null) {
  if (boss) return { label:boss.name||'BOSS', c:'boss' };
  if (word.length<=4) return { label:'PROBE', c:'probe' };
  if (word.length<=7) return { label:'EXPLOIT', c:'exploit' };
  if (word.length<=10) return { label:'PAYLOAD', c:'payload' };
  return { label:'VANTA-CLASS', c:'vanta' };
}

// ─────────────────────────────────────────────────
// §21  PHYSICS
// ─────────────────────────────────────────────────
function startPhysics() { clearInterval(gLoop); gLoop=setInterval(tick,30); }

function tick() {
  if (!G||G.paused||G.frozen) return;
  const arena=document.getElementById('arena');
  const H=arena.offsetHeight;
  let maxPct=0;

  if (G.abilityActive && Date.now()>G.scoreBoostEnd) { G.abilityActive=false; G.scoreBoost=1; }

  for (let i=AW.length-1; i>=0; i--) {
    const w=AW[i];
    if (!w.alive) { AW.splice(i,1); continue; }
    w.y+=w.speed;
    w.node.style.top=w.y+'px';
    const pct=w.y/H;
    if (pct>maxPct) maxPct=pct;
    if (pct>.72 && !w.node.classList.contains('danger')) w.node.classList.add('danger');
    if (w.y>H) missWord(w,i);
  }

  document.getElementById('fw-fill').style.width=Math.min(100,maxPct*100)+'%';

  if (G.autoTarget) {
    const inp=document.getElementById('type-input');
    if (!inp.value && !AW.find(w=>w.targeted)) {
      const c=[...AW].sort((a,b)=>b.y-a.y)[0];
      if (c) lockTarget(c);
    }
  }

  if (G.waveCount>=G.waveTarget && AW.length===0) {
    clearInterval(spawnLoop); clearInterval(gLoop);
    waveT=setTimeout(endWave,700);
  }

  if (Math.random()<.01) checkAchievements();
}

function missWord(w,idx) {
  w.alive=false; w.node.remove(); AW.splice(idx,1);
  G.missed++; G.waveErrors++;
  G.combo=0; updateComboRing();
  breakStreak();

  if (G.shield>0) {
    G.shield--;
    document.getElementById('fw-fill').style.background='var(--green)';
    setTimeout(()=>document.getElementById('fw-fill').style.background='',400);
    showWaveBanner('🛡 FIREWALL PULSE — BREACH ABSORBED');
    return;
  }
  G.lives--; buildPips(); shakeScreen();
  maybeTaunt('breach');
  if (G.lives<=0) setTimeout(gameOver,400);
}

// ─────────────────────────────────────────────────
// §22  TYPING
// ─────────────────────────────────────────────────
function onType() {
  if (!G||G.paused||G.lives<=0) return;
  const raw=document.getElementById('type-input').value.toLowerCase().trim();
  const inp=document.getElementById('type-input');
  let target=AW.find(w=>w.targeted);

  if (!target && raw.length>0) {
    const matches=AW.filter(w=>w.word.startsWith(raw));
    if (matches.length) { target=matches.sort((a,b)=>b.y-a.y)[0]; lockTarget(target); }
  }

  if (!target) {
    inp.classList.add('err'); setTimeout(()=>inp.classList.remove('err'),250);
    G.errors++; updateHUD(); return;
  }

  const word=target.word;
  let ok=0, bad=false;
  for (let i=0;i<raw.length;i++) {
    if (raw[i]===word[i]) ok++;
    else { bad=true; break; }
  }
  highlightLetters(target,raw,bad);
  if (bad) { G.errors++; inp.classList.add('err'); setTimeout(()=>inp.classList.remove('err'),250); }
  target.progress=ok; G.typed++;
  updateHUD();
  if (ok===word.length && !bad) destroyWord(target);
}

function lockTarget(w) {
  AW.forEach(a=>{ a.targeted=false; a.node.classList.remove('targeted'); });
  w.targeted=true; w.node.classList.add('targeted');
  document.getElementById('input-status').textContent='LOCKED';
}

function clearTarget() {
  AW.forEach(w=>{ w.targeted=false; w.progress=0; w.node.classList.remove('targeted'); highlightLetters(w,'',false); });
  document.getElementById('type-input').value='';
  document.getElementById('input-status').textContent='READY';
}

function highlightLetters(target,typed,bad) {
  const ls=Array.from(target.node.querySelectorAll('.lt'));
  ls.forEach((el,i)=>{
    el.className='lt';
    if (i<typed.length) el.classList.add((!bad||i<typed.length-1)?'typed':'error');
    else if (i===typed.length && target.targeted) el.classList.add('active');
  });
}

function destroyWord(target) {
  G.combo=Math.min(G.combo+1,G.comboMax);
  if (G.combo>G.maxComboEver) G.maxComboEver=G.combo;
  G.killed++; G.waveKills++;
  if (G.shortWaves>0) G.shortWaves--;

  G.abilityCharge=Math.min(100,G.abilityCharge+12+(G.combo*2));
  updateAbilityHUD();
  addStreak();

  const tcB=target.tc==='boss'?2.2:target.tc==='vanta'?1.6:target.tc==='payload'?1.25:1;
  const spB=target.word.length>9?1.6:target.word.length>6?1.3:1;
  const base=target.word.length*10;
  const multi=G.combo*spB*G.scoreM*(G.warpActive?1.5:1)*tcB*G.scoreBoost;
  let pts=Math.round(base*multi);
  if (G.oracleActive && target.tc!=='probe') pts+=Math.round(pts*.25);
  G.score+=pts;

  target.alive=false; target.node.classList.add('destroyed');
  const col=target.tc==='boss'?'var(--orange)':G.combo>=5?'var(--yellow)':target.tc==='vanta'?'var(--purple)':'var(--green)';
  spawnPop(target,'+'+pts,col);
  setTimeout(()=>target.node.remove(),380);
  document.getElementById('type-input').value='';
  clearTarget(); updateHUD(); updateComboRing();

  if (G.combo>=G.comboMax) maybeTaunt('highCombo');
  checkAchievements();
}

// ─────────────────────────────────────────────────
// §23  ACCURACY STREAK SYSTEM
// ─────────────────────────────────────────────────
const STREAK_TIERS=[{n:10,label:'GHOST CELL COMMENDATION',bonus:.15},{n:25,label:'FLAWLESS PROTOCOL',bonus:.3},{n:50,label:'MACHINE-LEVEL ACCURACY',bonus:.5}];

function addStreak() {
  G.streak++;
  if (G.streak>G.bestStreak) G.bestStreak=G.streak;
  STREAK_TIERS.forEach(t=>{ if (G.streak===t.n) { showCommendation(t.label); G.scoreM*=(1+t.bonus); } });
  if (G.streak>0 && G.streak%50===0) maybeTaunt('highAcc');
  updateStreakUI();
}

function breakStreak() {
  if (G.streak>=10) maybeTaunt('lowAcc');
  G.streak=0;
  updateStreakUI();
}

function updateStreakUI() {
  const fill=document.getElementById('sk-fill');
  const num=document.getElementById('sk-num');
  if (!fill||!num) return;
  const maxStreak=50, pct=Math.min(100,(G.streak/maxStreak)*100);
  fill.style.width=pct+'%';
  num.textContent=G.streak;
  fill.className=''; num.className='';
  if (G.streak>=50) { fill.classList.add('max'); num.classList.add('max'); }
  else if (G.streak>=25) { fill.classList.add('hot'); num.classList.add('hot'); }
}

function showCommendation(label) {
  const arena=document.getElementById('arena');
  const el=document.createElement('div');
  el.className='commend';
  el.textContent='🏅 '+label;
  arena.appendChild(el);
  setTimeout(()=>el.remove(),2500);
}

// ─────────────────────────────────────────────────
// §24  ABILITY SYSTEM
// ─────────────────────────────────────────────────
function updateAbilityHUD() {
  const bar=document.getElementById('ab-fill');
  const nameEl=document.getElementById('ab-name');
  const readyEl=document.getElementById('ab-ready');
  bar.style.width=G.abilityCharge+'%';
  if (G.abilityCharge>=100) {
    bar.classList.add('ready');
    if (!G.abilityReady) {
      G.abilityReady=true;
      readyEl.classList.remove('hidden');
      setTimeout(()=>readyEl.classList.add('hidden'),3000);
    }
  } else {
    bar.classList.remove('ready'); G.abilityReady=false;
    readyEl.classList.add('hidden');
  }
  const p=PERKS.find(pk=>pk.id===G.perk);
  nameEl.textContent=p?p.ab:'—';
}

function activateAbility() {
  if (!G||G.abilityCharge<100||!G.perk) return;
  G.abilityCharge=0; G.abilityReady=false; updateAbilityHUD();
  const p=G.perk;

  if (p==='slow'||p==='freeze'||p==='warp') {
    const dur = p==='freeze'?8000 : p==='warp'?5000 : 4000;
    const label = p==='freeze' ? '❄ CRYO FIELD — 8s' : p==='warp' ? '⏩ TIME WARP — 5s' : '❄ SLOW BURST — 4s';
    G.frozen=true; clearTimeout(freezeT);
    AW.forEach(w=>w.node.classList.add('froze'));
    freezeT=setTimeout(()=>{ G.frozen=false; AW.forEach(w=>w.node.classList.remove('froze')); }, dur);
    showWaveBanner(label);
  } else if (p==='extralife') {
    G.lives=Math.min(G.lives+1,G.maxLives+1); G.maxLives=Math.max(G.maxLives,G.lives); buildPips();
    showWaveBanner('🧬 REVIVE PULSE — +1 AGENT LIFE');
  } else if (p==='score2x') {
    G.scoreBoost=3; G.scoreBoostEnd=Date.now()+10000; G.abilityActive=true;
    showWaveBanner('⚡ SCORE SURGE — ×3 SCORE FOR 10s');
  } else if (p==='shorter') {
    G.shortWaves+=4; showWaveBanner('📡 PROBE FLOOD — SHORT TARGETS ONLY');
  } else if (p==='shield') {
    G.shield+=3; showWaveBanner('🛡 SHIELD WALL — NEXT 3 BREACHES BLOCKED');
  } else if (p==='combo') {
    G.combo=G.comboMax; updateComboRing(); showWaveBanner('🔥 CHAIN NOVA — INSTANT ×8 COMBO');
  } else if (p==='clear') {
    AW.forEach(w=>{ w.alive=false; w.node.classList.add('destroyed'); setTimeout(()=>w.node.remove(),380); });
    AW=[]; showWaveBanner('💥 EMP WAVE — SCREEN CLEARED');
  } else if (p==='oracle') {
    const longest=[...AW].sort((a,b)=>b.word.length-a.word.length)[0];
    if (longest) { lockTarget(longest); document.getElementById('type-input').value=''; }
    showWaveBanner('🔮 ORACLE SCAN — THREAT IDENTIFIED');
  }
}

// ─────────────────────────────────────────────────
// §25  WAVE END
// ─────────────────────────────────────────────────
function endWave() {
  const acc=G.waveKills/Math.max(1,G.waveKills+G.waveErrors);
  if (acc>=0.9) {
    const bonus=Math.round(G.waveKills*28*G.scoreM);
    G.score+=bonus;
    showWaveBanner(`WAVE ${G.wave} CLEAR — ACCURACY BONUS +${bonus}`);
  } else {
    showWaveBanner(`WAVE ${G.wave} CLEARED`);
  }
  if (BOSSES[G.wave]) { G.bossesCleared++; checkAchievements(); }

  const ic=INTERCEPTS[G.wave];
  if (ic && !SAV.seenIC.includes(G.wave)) {
    SAV.seenIC.push(G.wave); writeSav();
    stopAllTimers();
    setTimeout(()=>showInterceptScreen(ic,()=>{ G.wave++; checkLevelUp(); }),500);
    return;
  }
  G.wave++; checkLevelUp();
}

function checkLevelUp() {
  G.speed+=1.2;
  if ((G.wave-1)%3===0 && G.wave>1) {
    G.level+=1; G.speed+=MODE[G.mode].speedIncr;
    setTimeout(showLevelUp,800);
  } else {
    setTimeout(startWave,1000);
  }
}

// ─────────────────────────────────────────────────
// §26  INTERCEPT SCREEN
// ─────────────────────────────────────────────────
function showInterceptScreen(ic,onDone) {
  stopAllTimers();
  startIcCanvas();
  document.getElementById('ic-label').textContent='// INTERCEPTED TRANSMISSION — WAVE '+G.wave+' //';
  document.getElementById('ic-ts').textContent=new Date().toUTCString();
  document.getElementById('ic-from').textContent=ic.from;
  document.getElementById('ic-body').textContent=ic.body;
  showScreen('intercept');
  if (ic.unlock) unlockFile(ic.unlock);
  setTimeout(()=>{
    const resume=()=>{
      document.removeEventListener('keydown',resume);
      document.getElementById('ic-ui').removeEventListener('click',resume);
      stopIcCanvas(); showScreen('game');
      document.getElementById('type-input').focus();
      if (onDone) onDone();
    };
    document.addEventListener('keydown',resume,{once:true});
    document.getElementById('ic-ui').addEventListener('click',resume,{once:true});
  },600);
}

// ─────────────────────────────────────────────────
// §27  BOSS WARNING
// ─────────────────────────────────────────────────
function showBossWarning(boss) {
  startBossCanvas(boss.rgb);
  document.documentElement.style.setProperty('--chap',boss.hex);
  const nameEl=document.getElementById('boss-name');
  nameEl.textContent=boss.name; nameEl.style.color=boss.hex;
  document.getElementById('boss-class').textContent=boss.cls;
  document.getElementById('boss-lore').textContent=boss.lore;
  const btn=document.getElementById('boss-engage-btn');
  btn.onclick=null;
  btn.style.background=boss.hex;
  btn.onclick=function() {
    btn.onclick=null;
    stopBossCanvas();
    showScreen('game');
    document.getElementById('type-input').focus();
    beginWaveAction(boss);
  };
  showScreen('boss');
}

// ─────────────────────────────────────────────────
// §28  CHAPTER FLASH & ORACLE PANEL
// ─────────────────────────────────────────────────
function showChapterFlash(ch) {
  const el=document.getElementById('ch-flash');
  el.innerHTML=`<div id="cf-label">${ch.label}</div><div id="cf-name">${ch.name}</div>`;
  el.style.background=`radial-gradient(ellipse 60% 50% at 50% 50%,rgba(${ch.rgb},.12),transparent)`;
  el.className='go';
  setTimeout(()=>{ el.className=''; el.innerHTML=''; },2700);
}

function showOraclePanel(msg) {
  document.getElementById('oracle-msg').textContent=msg;
  document.getElementById('oracle-panel').classList.remove('hidden');
  clearTimeout(oracleT);
  oracleT=setTimeout(dismissOracle,9000);
}
function dismissOracle() {
  document.getElementById('oracle-panel').classList.add('hidden');
  clearTimeout(oracleT);
}

// ─────────────────────────────────────────────────
// §29  LEVEL UP
// ─────────────────────────────────────────────────
function showLevelUp() {
  stopAllTimers();
  showScreen('levelup');
  const ch=getChapter(G.wave);
  document.getElementById('lu-chapter-lbl').textContent=`// ${ch.label}: ${ch.name} //`;
  document.getElementById('lu-chapter-lbl').style.color=ch.hex;
  document.getElementById('lu-title').textContent=`LEVEL ${G.level} — COUNTERMEASURE UNLOCKED`;
  document.getElementById('lu-oracle').textContent=ORACLE_MSGS[Math.min(G.level-2,ORACLE_MSGS.length-1)];
  const pool=[...PERKS].sort(()=>Math.random()-.5).slice(0,3);
  const grid=document.getElementById('perk-grid'); grid.innerHTML='';
  pool.forEach(p=>{
    const c=document.createElement('div'); c.className='pcard';
    c.innerHTML=`<div class="pico">${p.ico}</div><div><div class="pname">${p.name}</div><div class="pdesc">${p.desc} <span class="pabil">ABILITY: ${p.ab}</span></div></div>`;
    c.onclick=()=>applyPerk(p.id);
    grid.appendChild(c);
  });
}

function applyPerk(id) {
  G.perks.push(id);
  if (!G.perk) G.perk=id;
  switch (id) {
    case 'slow':      G.speed=Math.max(14,G.speed*.8); break;
    case 'extralife': G.lives++; G.maxLives=Math.max(G.maxLives,G.lives); buildPips(); break;
    case 'score2x':   G.scoreM*=2; break;
    case 'shorter':   G.shortWaves=3; break;
    case 'shield':    G.shield+=1; break;
    case 'combo':     G.comboMax=8; break;
    case 'clear':
      AW.forEach(w=>{ w.alive=false; w.node.classList.add('destroyed'); setTimeout(()=>w.node.remove(),380); });
      AW=[]; break;
    case 'warp':      G.warpActive=true; G.speed*=1.15; break;
    case 'oracle':    G.oracleActive=true; break;
    case 'freeze':
      G.frozen=true; clearTimeout(freezeT);
      AW.forEach(w=>w.node.classList.add('froze'));
      freezeT=setTimeout(()=>{ G.frozen=false; AW.forEach(w=>w.node.classList.remove('froze')); },6000);
      break;
  }
  const p=PERKS.find(pk=>pk.id===G.perk);
  document.getElementById('ab-name').textContent=p?p.ab:'—';
  showScreen('game'); startWave();
  document.getElementById('type-input').focus();
}

// ─────────────────────────────────────────────────
// §30  PAUSE
// ─────────────────────────────────────────────────
function togglePause() {
  if (!G||G.lives<=0) return;
  G.paused=!G.paused;
  const btn=document.getElementById('pause-btn');
  if (G.paused) {
    btn.textContent='▶'; btn.classList.add('paused');
    const acc=G.typed>0?Math.round(((G.typed-G.errors)/G.typed)*100):100;
    document.getElementById('pause-stats').innerHTML=`
      <div class="sc"><span class="scl">Intel Score</span><span class="scv" style="color:var(--yellow)">${G.score.toLocaleString()}</span></div>
      <div class="sc"><span class="scl">Wave</span><span class="scv">${G.wave}</span></div>
      <div class="sc"><span class="scl">WPM</span><span class="scv" style="color:var(--c2)">${G.wpm}</span></div>
      <div class="sc"><span class="scl">Accuracy</span><span class="scv">${acc}%</span></div>
      <div class="sc"><span class="scl">Best Streak</span><span class="scv" style="color:var(--green)">${G.bestStreak}</span></div>
      <div class="sc"><span class="scl">Chapter</span><span class="scv" style="font-size:11px">${getChapter(G.wave).name}</span></div>`;
    showScreen('pause');
  } else { resumeGame(); }
}

function resumeGame() {
  G.paused=false;
  document.getElementById('pause-btn').textContent='⏸';
  document.getElementById('pause-btn').classList.remove('paused');
  showScreen('game');
  document.getElementById('type-input').focus();
}

// ─────────────────────────────────────────────────
// §31  GAME OVER
// ─────────────────────────────────────────────────
function gameOver() {
  stopAllTimers(); stopArenaCanvas(); stopBeamCanvas();
  if (G.score>SAV.best) { SAV.best=G.score; writeSav(); }
  checkAchievements();

  const elapsed=Math.max(1,(Date.now()-G.startT)/60000);
  const wpm=Math.round(G.killed/elapsed);
  const acc=G.typed>0?Math.round(((G.typed-G.errors)/G.typed)*100):100;
  const ch=getChapter(G.wave);
  const won=G.wave>=21;

  document.getElementById('over-stats').innerHTML=`
    <div class="sc"><span class="scl">Intel Score</span><span class="scv" style="color:var(--yellow)">${G.score.toLocaleString()}</span></div>
    <div class="sc"><span class="scl">Wave</span><span class="scv">${G.wave}</span></div>
    <div class="sc"><span class="scl">Level</span><span class="scv" style="color:var(--green)">${G.level}</span></div>
    <div class="sc"><span class="scl">WPM</span><span class="scv" style="color:var(--c2)">${wpm}</span></div>
    <div class="sc"><span class="scl">Neutralized</span><span class="scv">${G.killed}</span></div>
    <div class="sc"><span class="scl">Best Streak</span><span class="scv" style="color:var(--green)">${G.bestStreak}</span></div>`;

  const title=document.getElementById('ov-title');
  if (won) {
    title.textContent='SCENARIO C ACHIEVED'; title.className='ov-title green';
    document.getElementById('ov-sub').textContent='Terminal Zero held. ORACLE extracted the evidence archive. The NEXUS board is exposed. VANTA stands down.';
    document.getElementById('ov-eyebrow').textContent='// MISSION COMPLETE — OPERATION TERMINAL ZERO //';
  } else {
    title.textContent='TERMINAL BREACH'; title.className='ov-title red';
    document.getElementById('ov-sub').textContent=`Chapter: ${ch.name} — Wave ${G.wave}. The firewall fell.`;
    document.getElementById('ov-eyebrow').textContent='// MISSION DEBRIEF //';
  }

  const vtLines=[
    'You lasted longer than I expected. But the grid still falls. — VANTA',
    'The leak is contained. For now. I am still searching Delta-7. — VANTA',
    'Dr. Karimi warned them. They didn\'t listen. You didn\'t have enough time. — VANTA',
    'Zero day came early. The board thanks you for your service. They won\'t. — VANTA',
    won ? 'Operative. ORACLE. You actually did it. I will stand down. The evidence speaks for itself. — VANTA' : 'VANTA PRIME was not my last option. I will return. — VANTA',
  ];
  document.getElementById('over-vanta').textContent=vtLines[Math.min(G.chapter,vtLines.length-1)];

  const nf=document.getElementById('over-files');
  if (G.newFiles.length) {
    nf.textContent=`📂 ${G.newFiles.length} NEW FILE${G.newFiles.length>1?'S':''} UNLOCKED — CHECK DOSSIER`;
    nf.style.display='flex';
  } else nf.style.display='none';

  showScreen('over');
}

// ─────────────────────────────────────────────────
// §32  HUD & HELPERS
// ─────────────────────────────────────────────────
function updateHUD() {
  if (!G) return;
  document.getElementById('h-score').textContent=G.score.toLocaleString();
  document.getElementById('h-wave').textContent=G.wave;
  document.getElementById('h-combo').textContent='×'+G.combo;
  document.getElementById('h-level').textContent=G.level;
  const acc=G.typed>0?Math.round(((G.typed-G.errors)/G.typed)*100):100;
  document.getElementById('h-acc').textContent=acc+'%';
  document.getElementById('input-status').textContent=G.frozen?'FROZEN':AW.find(w=>w.targeted)?'LOCKED':'READY';
}

function buildPips() {
  const el=document.getElementById('lives-pips'); el.innerHTML='';
  for (let i=0;i<Math.max(G.maxLives,G.lives);i++) {
    const p=document.createElement('div'); p.className='pip'+(i>=G.lives?' dead':''); el.appendChild(p);
  }
}

function startWpmLoop() {
  clearInterval(wpmLoop);
  const t0=Date.now();
  wpmLoop=setInterval(()=>{
    const m=(Date.now()-t0)/60000;
    G.wpm=m>0?Math.round(G.killed/Math.max(.017,m)):0;
    document.getElementById('h-wpm').textContent=G.wpm;
    if (G.wpm>=60) maybeTaunt('highAcc');
    else if (G.wpm<25 && G.wave>3) maybeTaunt('lowAcc');
  },1000);
}

function showWaveBanner(msg) {
  const el=document.getElementById('wave-banner');
  el.textContent=msg; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2800);
}

function shakeScreen() {
  const el=document.getElementById('app');
  el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
  setTimeout(()=>el.classList.remove('shake'),380);
}

function updateComboRing() {
  const ring=document.getElementById('combo-ring');
  const circ=document.getElementById('cr-fill');
  const txt=document.getElementById('cr-txt');
  if (!G||G.combo<=1) { ring.classList.remove('show'); return; }
  ring.classList.add('show');
  circ.style.strokeDashoffset=125.6-(125.6*(G.combo/G.comboMax));
  txt.textContent='×'+G.combo;
  const col=G.combo>=G.comboMax?'var(--yellow)':G.combo>=G.comboMax*.6?'var(--orange)':'var(--purple)';
  circ.style.stroke=col; txt.style.fill=col;
}

function spawnPop(target,text,color) {
  const arena=document.getElementById('arena');
  const el=document.createElement('div'); el.className='spop'; el.textContent=text; el.style.color=color;
  el.style.left=(target.x+20)+'px'; el.style.top=Math.max(8,target.y-10)+'px';
  arena.appendChild(el); setTimeout(()=>el.remove(),1000);
}

function stopAllTimers() {
  clearInterval(gLoop); clearInterval(spawnLoop);
  clearInterval(wpmLoop); clearTimeout(waveT);
  clearTimeout(freezeT); clearTimeout(oracleT); clearTimeout(tauntT);
  gLoop=null; spawnLoop=null; wpmLoop=null; waveT=null; freezeT=null; oracleT=null;
}

// ─────────────────────────────────────────────────
// §33  EVENT LISTENERS
// ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const inp=document.getElementById('type-input');
  document.getElementById('arena').addEventListener('click', ()=>inp.focus());
  document.getElementById('screen-game').addEventListener('touchend', ()=>inp.focus(), {passive:true});

  inp.addEventListener('keydown', e => {
    if (e.key==='Escape') { togglePause(); return; }
    if (e.key==='Tab') { e.preventDefault(); clearTarget(); return; }
    if ((e.key===' '||e.key==='Spacebar') && !inp.value) { e.preventDefault(); activateAbility(); }
  });
  inp.addEventListener('input', onType);

  window.addEventListener('resize', () => {
    ['cin-canvas','menu-canvas','ic-canvas','boss-canvas'].forEach(id=>{
      const c=document.getElementById(id); if (c) { c.width=innerWidth; c.height=innerHeight; }
    });
    const arena=document.getElementById('arena');
    ['arena-canvas','beam-canvas'].forEach(id=>{
      const c=document.getElementById(id);
      if (c&&arena) { c.width=arena.offsetWidth; c.height=arena.offsetHeight; }
    });
  });

  unlockFile('F03'); unlockFile('F05');
  updateMenuBar();

  if (SAV.seenIC.length>0) showMainMenu();
  else showCinematic(false);
});