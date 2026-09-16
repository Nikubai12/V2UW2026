/* ============================================================
   UNITED WAY SITE SHOWDOWN — DATA FILE
   ------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Update the numbers, save, push to GitHub. Done.
   ============================================================ */

/* ---- EVENT INFO (shown in the header) ---- */
const EVENT_INFO = {
  eventDates: "September 19 & 20",
  siteName: "Fortis Site — United Way Campaign",
  // Set to a date string to show a live countdown. Format: "YYYY-MM-DDTHH:MM:SS"
  deadline: "2026-09-19T11:00:00"
};

/* ---- PIE IN THE FACE THRESHOLDS ---- */
const TIERS = {
  eligible: 100,   // Eligible to be pied
  locked:   500,   // Pied regardless of position
  special: 1000    // SPECIAL PIE
};

/* ============================================================
   EVENT 1 — PIE IN THE FACE
   ------------------------------------------------------------
   Just change "raised" and the "donors" list for each person.
   Donors are auto-sorted highest to lowest — top 3 are shown.
   Leave donors as [] if you don't want to show any yet.
   ============================================================ */
const PIE_CATEGORIES = [
  {
    name: "PCL Craft",
    tagline: "The Boots on the Ground",
    icon: "🔨",
    contestants: [
      {
        name: "Joe N",
        org: "PCL",
        raised: 47,
        donors: [
          // { name: "Jane D", amount: 50 },
        ]
      },
      {
        name: "Brian MW",
        org: "PCL",
        raised: 43,
        donors: []
      }
    ]
  },
  {
    name: "PCL Staff",
    tagline: "The Trailer Crew",
    icon: "📋",
    contestants: [
      {
        name: "Pratthosh R",
        org: "PCL",
        raised: 120,
        donors: []
      },
      {
        name: "Nikhil V",
        org: "PCL",
        raised: 498,
        donors: []
      }
    ]
  },
  {
    name: "FEI",
    tagline: "The Client Strikes Back",
    icon: "⚡",
    contestants: [
      {
        name: "Stuart W",
        org: "FEI",
        raised: 1238,
        donors: []
      },
      {
        name: "Travis S",
        org: "FEI",
        raised: 523,
        donors: []
      }
    ]
  }
];

/* ============================================================
   EVENT 2 — HOT DOG EATING TIME TRIALS
   ------------------------------------------------------------
   Add entries in any order — they're auto-sorted fastest first.
   Time format: seconds as a number (e.g. 42.8 = 42.80 sec)
   or "M:SS.mmm" style string (e.g. "1:12.4").
   ============================================================ */
const HOTDOG_TIMES = [
  // { name: "Michael Y",  org: "PCL", time: 58.2,   day: "Sept 19" },
  // { name: "Jonothan G", org: "PCL", time: "1:04.9", day: "Sept 19" },
];

/* Number of positions shown on the timing board */
const HOTDOG_BOARD_SIZE = 10;
