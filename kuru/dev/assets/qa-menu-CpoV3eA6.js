import { W as WEAPON_SLOTS, a as WEAPONS, S as SHIELD_CAP, B as BUFF_TIME } from "./index-CLZ3UvqY.js";
const BUFFS = [
  ["rapid", "RAPID FIRE", "≋", "#efa840"],
  ["power", "OVERCHARGE", "ϟ", "#aa78ee"],
  ["speed", "QUICKSTEP", "»", "#f1ce65"]
];
const DROPS = [
  ["heal", "MEDKIT", "+", "#e8b37e"],
  ["shield", "SHIELD CELL", "◇", "#60bfe3"],
  ["rapid", "RAPID FIRE", "≋", "#efa840"],
  ["power", "OVERCHARGE", "ϟ", "#aa78ee"],
  ["speed", "QUICKSTEP", "»", "#f1ce65"]
];
const SPEEDS = [1, 2, 4, 8];
const TABS = [
  ["gear", "GEAR"],
  ["items", "ITEMS"],
  ["legs", "LEGS"],
  ["health", "HEALTH"]
];
const PICKABLE = Object.keys(WEAPONS).filter((id) => id !== "sidearm");
const CSS = `
.qa-fab{position:absolute;left:20px;bottom:max(23px,env(safe-area-inset-bottom));pointer-events:auto;z-index:4;min-width:44px;height:30px;padding:0 9px;border-radius:15px;background:#2a1d3bd9;color:#ffd6f2;border:1px dashed #ff9fe0;font:600 10px var(--mono);letter-spacing:1.4px;backdrop-filter:blur(6px)}
.qa-fab.god{background:#5b1f45e6}
.qa-fab.god:after{content:' · GOD'}
.qa-sheet{position:absolute;left:0;right:0;bottom:0;z-index:9;display:flex;flex-direction:column;height:min(64%,470px);background:#1b1426f5;border-top:3px solid #ff9fe0;box-shadow:0 -10px 40px #0b0612a0;color:#f3e9f4;font-family:'DM Sans',sans-serif;padding-bottom:env(safe-area-inset-bottom)}
.qa-sheet:before{content:'';position:absolute;left:0;right:0;top:-3px;height:3px;background:repeating-linear-gradient(135deg,#ff9fe0 0 8px,#1b1426 8px 16px)}
.qa-sheet.hidden{display:none}
.qa-head{display:flex;align-items:center;gap:8px;padding:8px 12px 6px;flex-shrink:0}
.qa-tag{background:#ff9fe0;color:#1b1426;font:700 11px var(--mono);letter-spacing:1.5px;padding:3px 7px;border-radius:3px}
.qa-title{font:700 20px/1 var(--display);letter-spacing:1px}
.qa-status{flex:1;min-width:0;font:500 9px var(--mono);letter-spacing:.4px;color:#ffd6f2b0;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qa-close{min-width:64px;min-height:44px;border:1px solid #ff9fe0aa;border-radius:4px;font:600 10px var(--mono);letter-spacing:1.2px;color:#ffd6f2}
.qa-tabs{display:flex;gap:4px;padding:0 10px 6px;flex-shrink:0}
.qa-tabs button{flex:1;min-height:44px;border:1px solid #f3e9f428;border-radius:4px;font:600 10px var(--mono);letter-spacing:1px;color:#f3e9f4b0}
.qa-tabs button[aria-selected=true]{background:#ff9fe0;color:#1b1426;border-color:#ff9fe0}
.qa-body{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:2px 12px 14px;touch-action:pan-y}
.qa-body h3{font:600 9px var(--mono);letter-spacing:1.6px;color:#ff9fe0;margin:12px 0 7px;font-weight:600}
.qa-body h3:first-child{margin-top:4px}
.qa-card{border:1px solid #f3e9f41f;border-radius:5px;padding:8px;margin-bottom:7px;background:#ffffff08}
.qa-line{display:flex;align-items:center;justify-content:space-between;gap:8px;font:500 10px var(--mono);letter-spacing:.6px;margin-bottom:6px}
.qa-line b{font-weight:600;color:#ffe9b8}
.qa-line em{font-style:normal;color:#f3e9f4a0}
.qa-row{display:flex;flex-wrap:wrap;gap:6px}
.qa-btn{flex:1 1 auto;min-width:56px;min-height:44px;padding:5px 8px;border:1px solid #f3e9f43a;border-radius:4px;background:#ffffff0d;font:600 10px var(--mono);letter-spacing:.8px;color:#f3e9f4;text-align:center;line-height:1.25}
.qa-btn:active{background:#ff9fe033}
.qa-btn.on{background:#efc687;color:#23332b;border-color:#efc687}
.qa-btn.warn{border-color:#ff9fe0aa;color:#ffd6f2}
.qa-btn[aria-disabled=true]{opacity:.35}
.qa-btn small{display:block;font:500 8px var(--mono);letter-spacing:.3px;opacity:.75;margin-top:2px}
.qa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.qa-note{font:500 9px/1.5 var(--mono);color:#f3e9f48c;margin:6px 0 0}
.qa-slider{display:flex;align-items:center;gap:8px}
.qa-slider input{flex:1;min-width:0;height:44px;margin:0;accent-color:#efc687;touch-action:pan-y}
.qa-slider .qa-btn{flex:0 0 52px;min-width:52px}
`;
const esc = (text) => String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
function mountQaMenu(app) {
  if (document.getElementById("qa-sheet")) return;
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.append(style);
  const fab = document.createElement("button");
  fab.id = "qa-fab";
  fab.className = "qa-fab";
  fab.textContent = "QA";
  fab.setAttribute("aria-label", "Open QA menu");
  fab.setAttribute("aria-haspopup", "dialog");
  app.hud.append(fab);
  const sheet = document.createElement("section");
  sheet.id = "qa-sheet";
  sheet.className = "qa-sheet hidden";
  sheet.setAttribute("role", "dialog");
  sheet.setAttribute("aria-label", "QA menu");
  sheet.innerHTML = `<header class="qa-head"><span class="qa-tag">QA</span><span class="qa-title">DEV MENU</span><span id="qa-status" class="qa-status" role="status">game paused</span><button id="qa-close" class="qa-close" aria-label="Close QA menu">CLOSE ✕</button></header>
    <nav class="qa-tabs" role="tablist">${TABS.map(([id, label]) => `<button role="tab" data-tab="${id}" aria-selected="false">${label}</button>`).join("")}</nav>
    <div id="qa-body" class="qa-body"></div>`;
  app.shell.append(sheet);
  const body = sheet.querySelector("#qa-body"), status = sheet.querySelector("#qa-status");
  let open = false, wasPaused = false, tab = "gear", god = false;
  const game = () => app.game();
  const say = (text) => {
    status.textContent = text;
  };
  app.onGame((next) => {
    next.qaGodMode = god;
  });
  function openMenu() {
    const g = game();
    if (open || !app.started() || !g || g.mode !== "playing") return;
    open = true;
    wasPaused = app.paused();
    app.setPaused(true);
    sheet.classList.remove("hidden");
    fab.setAttribute("aria-expanded", "true");
    say("game paused");
    render();
    body.scrollTop = 0;
  }
  function closeMenu() {
    if (!open) return;
    open = false;
    sheet.classList.add("hidden");
    fab.setAttribute("aria-expanded", "false");
    const g = game();
    if (!wasPaused && app.started() && g?.mode === "playing") app.setPaused(false);
    app.updateHUD();
  }
  fab.addEventListener("click", openMenu);
  sheet.querySelector("#qa-close").addEventListener("click", closeMenu);
  window.addEventListener(
    "keydown",
    (event) => {
      if (open && event.key === "Escape") {
        event.stopImmediatePropagation();
        closeMenu();
      }
    },
    true
  );
  sheet.querySelector(".qa-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    tab = button.dataset.tab;
    render();
    body.scrollTop = 0;
  });
  const btn = (label, attrs = "", cls = "", sub = "") => `<button class="qa-btn ${cls}" ${attrs}>${label}${sub ? `<small>${sub}</small>` : ""}</button>`;
  const slotCard = (g, index) => {
    const slot = g.weaponSlots[index];
    const carriedElsewhere = (id) => g.weaponSlots.some((other, i) => i !== index && other?.id === id);
    if (index === 0)
      return `<div class="qa-card" data-slot="0"><div class="qa-line"><span>SLOT 1 · <b>${esc(slot?.id === "sidearm" ? WEAPONS.sidearm.name : slot ? WEAPONS[slot.id].name : "EMPTY")}</b></span><em>FIXED · ∞</em></div><div class="qa-row">${btn("SIDEARM · ALWAYS CARRIED", 'aria-disabled="true" disabled', "on")}</div></div>`;
    const ammo = slot ? `${Number.isFinite(slot.ammo) ? slot.ammo : "∞"}/${Number.isFinite(slot.maxAmmo) ? slot.maxAmmo : "∞"}` : "—";
    return `<div class="qa-card" data-slot="${index}"><div class="qa-line"><span>SLOT ${index + 1} · <b data-slot-name>${slot ? esc(WEAPONS[slot.id].name) : "EMPTY"}</b></span><em data-slot-ammo>${ammo}</em></div>
      <div class="qa-row">${btn("EMPTY", `data-act="weapon" data-slot="${index}" data-id=""`, slot ? "" : "on")}${PICKABLE.map((id) => btn(esc(WEAPONS[id].shortName), `data-act="weapon" data-slot="${index}" data-id="${id}" ${carriedElsewhere(id) ? 'aria-disabled="true"' : ""}`, slot?.id === id ? "on" : "")).join("")}${btn("REFILL", `data-act="refill" data-slot="${index}" ${slot ? "" : 'aria-disabled="true"'}`, "warn")}</div></div>`;
  };
  const stepper = (key, value, min, max, unit = "") => `<div class="qa-slider"><button class="qa-btn" data-act="step" data-key="${key}" data-by="-10" aria-label="${key} minus 10">−10</button><input type="range" min="${min}" max="${max}" step="1" value="${Math.round(value)}" data-key="${key}" aria-label="${key}"><button class="qa-btn" data-act="step" data-key="${key}" data-by="10" aria-label="${key} plus 10">+10</button></div>`;
  function render() {
    const g = game();
    for (const button of sheet.querySelectorAll("[data-tab]"))
      button.setAttribute("aria-selected", String(button.dataset.tab === tab));
    fab.classList.toggle("god", god);
    if (!g) {
      body.innerHTML = '<p class="qa-note">No delivery running.</p>';
      return;
    }
    if (tab === "gear") {
      body.innerHTML = `<h3>WEAPON SLOTS</h3>${Array.from({ length: WEAPON_SLOTS }, (_, i) => slotCard(g, i)).join("")}
        <div class="qa-row">${btn("REFILL ALL AMMO", 'data-act="refill-all"', "warn")}</div>
        <h3>GIVE THROUGH THE NORMAL PICKUP</h3>
        <div class="qa-row">${PICKABLE.map((id) => btn(esc(WEAPONS[id].shortName), `data-act="give" data-id="${id}"`)).join("")}</div>
        <p class="qa-note">Lays the weapon at your feet and resumes the game: the countdown ring runs, tap it to take or swap. A carried weapon adds ammo instead.</p>`;
    } else if (tab === "items") {
      body.innerHTML = `<h3>DROP AT THE COURIER’S FEET</h3>
        <div class="qa-grid">${DROPS.map(([type, label, icon]) => btn(`${icon} ${label}`, `data-act="drop" data-type="${type}"`)).join("")}</div>
        <p class="qa-note">Picked up under the real rules when the sheet closes: a medkit waits for a hurt courier, a shield cell for a shield below ${SHIELD_CAP - 2}.</p>
        <h3>BOOSTS · SECONDS LEFT</h3>
        ${BUFFS.map(([type, label, icon]) => {
        const left = g.buffs[type] || 0;
        return `<div class="qa-card"><div class="qa-line"><span>${icon} <b>${label}</b></span><em data-buff-left="${type}">${left > 0 ? left.toFixed(1) + " s" : "OFF"}</em></div><div class="qa-row">${btn(left > 0 ? "TURN OFF" : `ON · ${BUFF_TIME[type]} s`, `data-act="buff-toggle" data-type="${type}"`, left > 0 ? "on" : "")}${btn("−5 s", `data-act="buff-add" data-type="${type}" data-by="-5"`)}${btn("+5 s", `data-act="buff-add" data-type="${type}" data-by="5"`)}</div></div>`;
      }).join("")}
        <h3>SHIELD</h3>
        <div class="qa-card"><div class="qa-line"><span>◇ <b>SHIELD</b></span><em data-shield-left>${Math.round(g.player.shield)} / ${SHIELD_CAP}</em></div><div class="qa-row">${btn("0", 'data-act="shield-set" data-value="0"')}${btn("−5", 'data-act="shield-add" data-by="-5"')}${btn("+5", 'data-act="shield-add" data-by="5"')}${btn(`MAX ${SHIELD_CAP}`, `data-act="shield-set" data-value="${SHIELD_CAP}"`, "warn")}</div></div>`;
    } else if (tab === "legs") {
      body.innerHTML = `<h3>JUMP TO LEG · NOW ${g.leg + 1} OF ${g.totalLegs}</h3>
        <div class="qa-grid">${[1, 2, 3, 4, 5, 6].map((n) => btn(`LEG ${n}`, `data-act="leg" data-leg="${n}"`, g.leg + 1 === n ? "on" : "")).join("")}</div>
        <p class="qa-note">As ?leg=N: full health, shield 15, parcel 85%, the loadout of that leg, a fresh start. LEG 1 restarts the delivery on this route.</p>
        <h3>THIS LEG</h3>
        <div class="qa-row">${btn("BEFORE THE GUARDIAN", 'data-act="gate-guardian"', "", "walk on to call it")}${btn("BEFORE THE REFUGE", 'data-act="gate-refuge"', "", "guardian already beaten")}</div>
        <h3>GAME SPEED</h3>
        <div class="qa-row">${SPEEDS.map((n) => btn(`${n}×`, `data-act="speed" data-n="${n}"`, app.speed === n ? "on" : "")).join("")}</div>`;
    } else {
      body.innerHTML = `<h3>COURIER HEALTH</h3>
        <div class="qa-card"><div class="qa-line"><span><b>HEALTH</b></span><em data-readout="hp">${Math.round(g.player.hp)} / ${g.player.maxHp}</em></div>${stepper("hp", g.player.hp, 0, g.player.maxHp)}</div>
        <h3>PARCEL CONDITION</h3>
        <div class="qa-card"><div class="qa-line"><span><b>PARCEL</b></span><em data-readout="cargo">${Math.round(g.cargo)}%</em></div>${stepper("cargo", g.cargo, 0, 100)}</div>
        <div class="qa-row">${btn(`GOD MODE · ${god ? "ON" : "OFF"}`, 'data-act="god"', god ? "on" : "", "no damage taken")}${btn("FULL HEALTH + PARCEL", 'data-act="restore"', "warn")}</div>
        <p class="qa-note">Health 0 is a fall, with the usual dialog.</p>`;
    }
  }
  function setStat(key, value) {
    const g = game();
    if (!g) return;
    value = Math.max(0, Math.min(key === "hp" ? g.player.maxHp : 100, Math.round(Number(value) || 0)));
    if (key === "hp") g.qaSetHealth(value);
    else g.qaSetCargo(value);
    const readout = body.querySelector(`[data-readout="${key}"]`);
    if (readout) readout.textContent = key === "hp" ? `${value} / ${g.player.maxHp}` : `${value}%`;
    const slider = body.querySelector(`input[data-key="${key}"]`);
    if (slider && Number(slider.value) !== value) slider.value = value;
    say(key === "hp" ? `health ${value}` : `parcel ${value}%`);
    app.updateHUD();
    if (g.mode !== "playing") closeMenu();
  }
  body.addEventListener("input", (event) => {
    const slider = event.target.closest("input[type=range]");
    if (slider) setStat(slider.dataset.key, slider.value);
  });
  body.addEventListener("click", (event) => {
    const el = event.target.closest("[data-act]");
    const g = game();
    if (!el || !g || el.getAttribute("aria-disabled") === "true") return;
    const { act } = el.dataset;
    if (act === "weapon") {
      const slot = Number(el.dataset.slot), id = el.dataset.id || null;
      say(g.qaSetWeapon(slot, id) ? `slot ${slot + 1}: ${id ? WEAPONS[id].name : "cleared"}` : "not allowed");
      render();
    } else if (act === "refill") {
      g.qaRefillAmmo(Number(el.dataset.slot));
      say(`slot ${Number(el.dataset.slot) + 1} refilled`);
      render();
    } else if (act === "refill-all") {
      say(`${g.qaRefillAmmo()} magazines refilled`);
      render();
    } else if (act === "give") {
      if (app.dropWeapon(el.dataset.id)) {
        say(`${WEAPONS[el.dataset.id].name} at your feet`);
        closeMenu();
      }
    } else if (act === "drop") {
      const [, label] = DROPS.find(([type]) => type === el.dataset.type);
      say(g.qaSpawnDrop(el.dataset.type) ? `${label.toLowerCase()} at your feet` : "could not drop");
    } else if (act === "buff-toggle") {
      const type = el.dataset.type;
      g.qaSetBuff(type, g.buffs[type] > 0 ? 0 : BUFF_TIME[type]);
      say(`${type} ${g.buffs[type] > 0 ? "on" : "off"}`);
      render();
      app.updateHUD();
    } else if (act === "buff-add") {
      const type = el.dataset.type;
      g.qaSetBuff(type, Math.max(0, (g.buffs[type] || 0) + Number(el.dataset.by)));
      say(`${type} ${g.buffs[type].toFixed(0)} s`);
      render();
      app.updateHUD();
    } else if (act === "shield-set") {
      g.qaSetShield(Number(el.dataset.value));
      say(`shield ${Math.round(g.player.shield)}`);
      render();
      app.updateHUD();
    } else if (act === "shield-add") {
      g.qaSetShield(g.player.shield + Number(el.dataset.by));
      say(`shield ${Math.round(g.player.shield)}`);
      render();
      app.updateHUD();
    } else if (act === "leg") {
      const n = Number(el.dataset.leg);
      if (app.jumpLeg(n)) {
        say(`leg ${n}`);
        closeMenu();
      } else say("could not jump");
    } else if (act === "gate-guardian") {
      if (g.qaJumpBeforeGuardian()) {
        say("short of the guardian");
        closeMenu();
      } else say("could not jump");
    } else if (act === "gate-refuge") {
      if (g.qaJumpBeforeRefuge()) {
        say("short of the refuge");
        closeMenu();
      } else say("could not jump");
    } else if (act === "speed") {
      app.speed = Number(el.dataset.n);
      say(`speed ${app.speed}×`);
      render();
    } else if (act === "step") {
      setStat(el.dataset.key, (el.dataset.key === "hp" ? g.player.hp : g.cargo) + Number(el.dataset.by));
    } else if (act === "god") {
      god = !god;
      g.qaGodMode = god;
      say(`god mode ${god ? "on" : "off"}`);
      render();
    } else if (act === "restore") {
      g.qaSetHealth(g.player.maxHp);
      g.qaSetCargo(100);
      say("health and parcel full");
      render();
      app.updateHUD();
    }
  });
  window.__kuruQa = {
    get open() {
      return open;
    },
    openMenu,
    closeMenu,
    get god() {
      return god;
    },
    get tab() {
      return tab;
    },
    get speed() {
      return app.speed;
    }
  };
}
export {
  mountQaMenu
};
