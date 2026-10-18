/* Fictional sample data for PMO Enterprises. Every name and number is invented for demonstration. */
window.PMO = (function () {
  const COMMITMENTS = [
    { id: 1,  name: "Chapter charter signed",          short: "Charter",        due: "30 Sep" },
    { id: 2,  name: "Bylaws up to date",                short: "Bylaws",         due: "30 Sep" },
    { id: 3,  name: "Strategic plan submitted",         short: "Strategy",       due: "31 Aug" },
    { id: 4,  name: "Officer-elect identified",         short: "Officer-elect",  due: "31 Jan" },
    { id: 5,  name: "Officers trained",                 short: "Officer training", due: "31 Mar" },
    { id: 6,  name: "Regional meeting attended",        short: "Regional mtg",   due: "30 Jun" },
    { id: 7,  name: "Conduct committee in place",       short: "Conduct",        due: "30 Sep" },
    { id: 8,  name: "Chapter manager workshop",         short: "CM workshop",    due: "31 Dec" },
    { id: 9,  name: "Learning calendar published",      short: "Learning cal.",  due: "31 Jul" },
    { id: 10, name: "Peer group moderators trained",    short: "Moderators",     due: "31 Mar" },
    { id: 11, name: "Member peer group training",       short: "Peer training",  due: "31 Mar" },
    { id: 12, name: "Peer group data updated",          short: "Peer data",      due: "Quarterly" },
    { id: 13, name: "Membership roster current",        short: "Roster",         due: "Monthly" },
    { id: 14, name: "Minimum membership met",           short: "Min. members",   due: "30 Jun" }
  ];

  const CHAPTERS = [
    { name: "London",     members: 142, yoy: 9,  health: "Thriving", healthScore: 91, engagement: 82, satisfaction: 88, unmet: [12],                 bylaws: [],
      note: "Strong board. Ask them to mentor Brussels on peer group training; offered to host a joint session in Q3." },
    { name: "Manchester", members: 88,  yoy: 3,  health: "Healthy",  healthScore: 78, engagement: 74, satisfaction: 81, unmet: [5, 11],              bylaws: ["No term limits"],
      note: "Two officers still untrained. Chair committed to the March session. Term limits to go to the AGM." },
    { name: "Edinburgh",  members: 61,  yoy: -2, health: "Watch",    healthScore: 62, engagement: 61, satisfaction: 72, unmet: [2, 10, 11, 13],      bylaws: ["No conduct clause", "Outdated quorum rule"],
      note: "Roster out of date since autumn. Manager is new; pair with Manchester's manager. Follow up on bylaws by 30 Sep." },
    { name: "Dublin",     members: 97,  yoy: 6,  health: "Healthy",  healthScore: 81, engagement: 77, satisfaction: 84, unmet: [10],                 bylaws: [],
      note: "Only gap is moderator training. Three moderators booked for March." },
    { name: "Amsterdam",  members: 120, yoy: 11, health: "Thriving", healthScore: 88, engagement: 85, satisfaction: 90, unmet: [],                   bylaws: [],
      note: "All commitments met. Candidate for the regional spotlight panel." },
    { name: "Brussels",   members: 54,  yoy: -4, health: "At risk",  healthScore: 44, engagement: 48, satisfaction: 63, unmet: [1, 2, 7, 10, 11, 12], bylaws: ["No conduct clause", "No succession clause", "Outdated quorum rule"],
      note: "Priority visit. Board turnover left governance gaps. Agree a 90-day recovery plan with the incoming chair." },
    { name: "Paris",      members: 133, yoy: 7,  health: "Healthy",  healthScore: 79, engagement: 71, satisfaction: 79, unmet: [11, 12],             bylaws: ["No term limits"],
      note: "Large chapter, engagement dipping among newer members. Suggest a buddy programme." },
    { name: "Lisbon",     members: 47,  yoy: 1,  health: "Watch",    healthScore: 58, engagement: 66, satisfaction: 76, unmet: [1, 10, 11],           bylaws: ["No succession clause"],
      note: "Charter awaiting signature from two founding officers. Chase before the regional meeting." },
    { name: "Madrid",     members: 109, yoy: -3, health: "Watch",    healthScore: 60, engagement: 57, satisfaction: 70, unmet: [3, 7, 10, 11],        bylaws: ["No conduct clause"],
      note: "Strategic plan late. Offer a planning session with a regional officer." },
    { name: "Milan",      members: 76,  yoy: 5,  health: "Healthy",  healthScore: 74, engagement: 69, satisfaction: 80, unmet: [8, 12],              bylaws: [],
      note: "Manager missed the workshop due to leave; book the next cohort." },
    { name: "Copenhagen", members: 58,  yoy: 0,  health: "At risk",  healthScore: 49, engagement: 52, satisfaction: 66, unmet: [1, 2, 5, 10, 11],    bylaws: ["No term limits", "No conduct clause"],
      note: "Small, close-knit board stretched thin. Explore merging events with Stockholm." },
    { name: "Stockholm",  members: 69,  yoy: 2,  health: "Healthy",  healthScore: 72, engagement: 75, satisfaction: 83, unmet: [10],                 bylaws: [],
      note: "Good momentum. Moderator training booked." }
  ];

  CHAPTERS.forEach(c => {
    c.met = 14 - c.unmet.length;
    c.concern = Math.round(c.unmet.length * 4 + (100 - c.healthScore) * 0.5 + (100 - c.satisfaction) * 0.3 + (c.engagement < 60 ? 10 : 0) + c.bylaws.length * 3);
  });

  const totals = {
    chapters: CHAPTERS.length,
    members: CHAPTERS.reduce((s, c) => s + c.members, 0),
    engagement: Math.round(CHAPTERS.reduce((s, c) => s + c.engagement, 0) / CHAPTERS.length),
    satisfaction: Math.round(CHAPTERS.reduce((s, c) => s + c.satisfaction, 0) / CHAPTERS.length),
    allMet: CHAPTERS.filter(c => c.met === 14).length,
    avgMet: Math.round(CHAPTERS.reduce((s, c) => s + c.met, 0) / CHAPTERS.length * 10) / 10
  };
  const missCount = COMMITMENTS.map(k => ({ k, n: CHAPTERS.filter(c => c.unmet.includes(k.id)).length })).sort((a, b) => b.n - a.n);

  return { COMMITMENTS, CHAPTERS, totals, missCount, asOf: "30 September 2026" };
})();
