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
  deadline: "2026-09-20T14:00:00"
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
        raised: "250",
        donors: [
          {name: "Nikhil V", amount: 100},
           {name: "Paige", amount: 100},
           {name: "Steve Bigoray", amount: 50}
        ]
      },
       {
        name: "Ginger B",
        org: "PCL",
        raised: "300",
        donors: [
           {name: "Anonymous", amount: 200},
           {name: "Nikhil V", amount: 100},
        ]
      },
      {
        name: "Brian MW",
        org: "PCL",
        raised: "120",
        donors: [
           {name: "Pratthosh Ravi", amount: 100},
           {name: "Hugo Sotelo", amount: 20}
        ]
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
        raised: "600",
        donors: [
           {name: "Stefan Kendel", amount: 400},
           {name: "Joe N", amount: 100},
           {name: "Steve Bigoray", amount: 50},
           {name: "Steven Webber", amount: 50},
           
        ]
      },
      {
        name: "Nikhil V",
        org: "PCL",
        raised: "840",
        donors: [
           {name: "Adam Mastel", amount: 200},
           {name: "Julie Watkins", amount: 110},
           {name: "Brett Trepanier", amount: 100},
           {name: "Steve Bigoray", amount: 50},
           {name: "Dan Cettiga", amount: 50},
           {name: "Marty Zellweger", amount: 50},
           {name: "Stefan Kendel", amount: 50},
           {name: "Emil Ilagan", amount: 50},
           {name: "Hot Dogs", amount: 120},
           {name: "Graeme Deans", amount: 60},
        ]
      },
      {
        name: "Ramone B",
        org: "PCL",
        raised: "1410.1",
        donors: [
           {name: "Joseph and Buddies", amount: 1320.1},
           {name: "Graeme Deans", amount: 40},
           {name: "Steven Webber", amount: 50},

        ]
      },
      {
        name: "Olaf H",
        org: "PCL",
        raised: "100",
        donors: [
           {name: "Julie Watkins", amount: 100}
        ]
      },
{
        name: "Brett T",
        org: "PCL",
        raised: "200",
        donors: [
           {name: "Jan", amount: 100},
           {name: "Graeme Deans", amount: 50},
           {name: "John Dyble", amount: 50},
        ]
      },
       
       {
        name: "Marty Z",
        org: "PCL",
        raised: "100",
        donors: [
           {name: "Thomas S", amount: 100},

        ]
      },
        {
        name: "Graeme D",
        org: "PCL",
        raised: "150",
        donors: [
           {name: "Nikhil V", amount: 50},
           {name: "Dan Cettiga", amount: 50},
           {name: "Anonymous", amount: 50},
        ]
      },
       {
        name: "Blake C",
        org: "PCL",
        raised: "1010",
        donors: [
           {name: "Stuart", amount: 350}
           {name: "Ramu", amount: 210},
           {name: "John K", amount: 100},
           {name: "Marty Zellweger", amount: 100},
           {name: "Stefan Kendel", amount: 100},
           {name: "Western Seaboard Transport", amount: 50},
           {name: "Anonymous", amount: 50},
           {name: "Anonymous", amount: 50}
           
           
           
        ]
      },
       
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
        raised: "1000",
        donors: [
           {name: "Darrin Marshall", amount: 500},
           {name: "Robert Mawe", amount: 200},
           {name: "Marty Zellweger", amount: 100},
           {name: "Chris Buckles", amount: 100},
           {name: "Graeme Deans", amount: 100}
        ]
      },
      {
        name: "Travis S",
        org: "FEI",
        raised: "140",
        donors: [
          {name: "Marty Zellweger", amount: 100},
           {name: "Samantha M", amount: 40}, 
        ]
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
   { name: "Adam",  org: "PCL", time: 1:35.0,   day: "Sept 20" },
   { name: "Derrick",  org: "PCL", time: 1:27.0,   day: "Sept 20" },
   { name: "Jan",  org: "PCL", time: DNF,   day: "Sept 20" },
   { name: "Paige",  org: "PCL", time: DNF,   day: "Sept 20" },
   { name: "Caress",  org: "PCL", time: DNF,   day: "Sept 20" },
  // { name: "Jonothan G", org: "PCL", time: "1:04.9", day: "Sept 19" },
];

/* Number of positions shown on the timing board */
const HOTDOG_BOARD_SIZE = 10;
