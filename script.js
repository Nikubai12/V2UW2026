/* ============================================================
   THE SITE SHOWDOWN — rendering engine
   You shouldn't need to edit this file. All data lives in data.js
   ============================================================ */

const money = n => "$" + Number(n || 0).toLocaleString("en-CA");
const initials = name => name.split(/\s+/).map(w => w[0]).join("").slice(0,2).toUpperCase();

/* ---------- header ---------- */
document.getElementById("eventDates").textContent = EVENT_INFO.eventDates;
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- countdown ---------- */
(function countdown(){
  const el = document.getElementById("countdown");
  if (!EVENT_INFO.deadline) { el.textContent = "SOON"; return; }
  const target = new Date(EVENT_INFO.deadline).getTime();
  const tick = () => {
    const diff = target - Date.now();
    if (isNaN(target)) { el.textContent = "SOON"; return; }
    if (diff <= 0) { el.textContent = "SHOWTIME!"; return; }
    const d = Math.floor(diff/864e5),
          h = Math.floor(diff%864e5/36e5),
          m = Math.floor(diff%36e5/6e4),
          s = Math.floor(diff%6e4/1000);
    el.textContent = d > 0 ? `${d}d ${h}h ${m}m` : `${h}h ${m}m ${s}s`;
  };
  tick(); setInterval(tick, 1000);
})();

/* ============================================================
   EVENT 1 — PIE IN THE FACE
   ============================================================ */
function buildPie(){
  const host = document.getElementById("pieCategories");
  let grandTotal = 0;

  PIE_CATEGORIES.forEach(cat => {
    // rank contestants within the category
    const ranked = [...cat.contestants].sort((a,b) => Number(b.raised||0) - Number(a.raised||0));
    const top = ranked[0];
    const leadAmt = top ? (top.raised || 0) : 0;
    // leader only counts if they've cleared the eligibility bar
    const tied = ranked.filter(c => (c.raised||0) === leadAmt && leadAmt >= TIERS.eligible);
    const catTotal = cat.contestants.reduce((s,c) => s + Number(c.raised||0), 0);
    grandTotal += catTotal;

    const section = document.createElement("div");
    section.className = "cat";
    section.innerHTML = `
      <div class="cat-head">
        <span class="cat-icon">${cat.icon}</span>
        <div>
          <div class="cat-name">${cat.name}</div>
          <div class="cat-tag">${cat.tagline}</div>
        </div>
        <div class="cat-pot">${money(catTotal)} raised</div>
      </div>
      <div class="duel"></div>`;

    const duel = section.querySelector(".duel");

    cat.contestants.forEach(c => {
      const amt = Number(c.raised) || 0;
      const isLeader  = tied.includes(c);
      const eligible  = amt >= TIERS.eligible;
      const locked    = amt >= TIERS.locked;
      const special   = amt >= TIERS.special;
      const pct       = Math.min(100, amt / TIERS.special * 100);

      /* --- badges --- */
      let badges = "";
      if (special)        badges += `<span class="badge b-spec">🥧✨ Special Pie Unlocked</span>`;
      if (locked)         badges += `<span class="badge b-lock">🔒 Pied Regardless</span>`;
      if (isLeader)       badges += `<span class="badge b-lead">👑 Category Leader</span>`;
      if (eligible && !locked && !isLeader) badges += `<span class="badge b-elig">✅ Eligible</span>`;
      if (!eligible)      badges += `<span class="badge b-safe">😌 Safe — needs ${money(TIERS.eligible - amt)}</span>`;

      /* --- next milestone line --- */
      let next;
      if (special)      next = `Maximum cream achieved. There is nothing left to unlock. 🎬`;
      else if (locked)  next = `<b>${money(TIERS.special - amt)}</b> away from the SPECIAL PIE`;
      else if (eligible)next = `<b>${money(TIERS.locked - amt)}</b> away from being pied regardless of position`;
      else              next = `<b>${money(TIERS.eligible - amt)}</b> away from being eligible`;

      /* --- top 3 donors --- */
      const medals = ["🥇","🥈","🥉"];
      const top3 = [...(c.donors||[])].sort((a,b)=>b.amount-a.amount).slice(0,3);
      const donorHTML = top3.length
        ? top3.map((d,i)=>`
            <div class="donor">
              <span class="d-rank">${medals[i]}</span>
              <span class="d-name">${d.name}</span>
              <span class="d-amt">${money(d.amount)}</span>
            </div>`).join("")
        : `<p class="no-donors">No donations yet — be the first name on this wall. 🎥</p>`;

      const card = document.createElement("article");
      card.className = "card" +
        (special ? " special" : "") +
        (locked ? " locked" : "") +
        (isLeader ? " leader" : "");

      card.innerHTML = `
        <div class="card-top">
          <div class="avatar">${initials(c.name)}</div>
          <div class="who">
            <div class="c-name">${c.name}</div>
            <div class="c-org">${c.org}</div>
          </div>
          <div class="c-amount">${money(amt)}<small>Raised</small></div>
        </div>

        <div class="badges">${badges}</div>

        <div class="gauge-wrap">
          <div class="gauge${amt === 0 ? " empty" : ""}">
            <div class="fill" data-pct="${pct}"></div>
            <div class="mark m1" style="left:${TIERS.eligible/TIERS.special*100}%" data-label="$${TIERS.eligible} ELIGIBLE"></div>
            <div class="mark m2" style="left:${TIERS.locked/TIERS.special*100}%" data-label="$${TIERS.locked} LOCKED"></div>
            <div class="mark m3" style="left:calc(100% - 3px)" data-label="$${TIERS.special} SPECIAL"></div>
          </div>
          <div class="scale"><span>$0</span><span>${money(TIERS.special)}</span></div>
          <p class="next-up">${next}</p>
        </div>

        <div class="donors">
          <h4>Top Backers</h4>
          ${donorHTML}
        </div>`;

      duel.appendChild(card);
    });

    host.appendChild(section);
  });

  return grandTotal;
}

/* ============================================================
   EVENT 2 — HOT DOG TIME TRIALS
   ============================================================ */
function toSeconds(t){
  if (typeof t === "number") return t;
  if (typeof t !== "string") return Infinity;
  const parts = t.split(":").map(Number);
  return parts.length === 2 ? parts[0]*60 + parts[1] : Number(t);
}
function fmtTime(sec){
  if (!isFinite(sec)) return "—";
  const m = Math.floor(sec/60), s = sec % 60;
  return m > 0 ? `${m}:${s.toFixed(2).padStart(5,"0")}` : s.toFixed(2);
}

function buildBoard(){
  const host = document.getElementById("timingBoard");
  const runs = [...HOTDOG_TIMES]
    .map(r => ({...r, secs: toSeconds(r.time)}))
    .filter(r => isFinite(r.secs))
    .sort((a,b) => a.secs - b.secs)
    .slice(0, HOTDOG_BOARD_SIZE);

  let html = `<div class="row head">
      <span>Pos</span><span>Competitor</span><span class="r-org">Team</span>
      <span style="text-align:right">Time</span><span style="text-align:right">Gap</span>
    </div>`;

  if (!runs.length){
    html += `<div class="empty-board">⏱️ No times set yet. The grid is empty — history is waiting.</div>`;
  } else {
    const best = runs[0].secs;
    runs.forEach((r,i) => {
      const p = i + 1;
      const cls = p === 1 ? "r1" : p === 2 ? "r2" : p === 3 ? "r3" : "rz";
      const gap = i === 0 ? "POLE" : "+" + (r.secs - best).toFixed(2);
      html += `<div class="row ${cls}">
          <span class="pos">P${p}</span>
          <span class="r-name">${r.name}${r.day ? ` <span style="color:var(--muted);font-weight:400;font-size:11px">· ${r.day}</span>` : ""}</span>
          <span class="r-org">${r.org || ""}</span>
          <span class="r-time">${fmtTime(r.secs)}</span>
          <span class="r-gap">${gap}</span>
        </div>`;
    });
  }
  host.innerHTML = html;
}

/* ============================================================
   BOOT
   ============================================================ */
const total = buildPie();
buildBoard();
document.getElementById("totalRaised").textContent = money(total);

/* animate gauges when they scroll into view */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.style.width = e.target.dataset.pct + "%";
      io.unobserve(e.target);
    }
  });
}, { threshold: .3 });
document.querySelectorAll(".fill").forEach(f => io.observe(f));

document.getElementById("lastUpdate").textContent =
  new Date().toLocaleTimeString("en-CA",{hour:"numeric",minute:"2-digit"});

/* ---- LIVE MODE: refresh every 60s ---- */
setInterval(function(){
  if (!document.hidden) location.reload();
}, 60000);
