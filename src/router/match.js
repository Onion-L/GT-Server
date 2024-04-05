const matches = [
  {
    id: 18528504,
    name: {
      home: "Manchester United",
      away: "Chelsea",
    },
    date: "2023-08-14",
    result: "win",
    stats: {
      goals: 2,
      possession: 54,
      shots_on_target: 5,
      shots_off_target: 9,
      corners: 0,
      fouls: 6,
      yellow_cards: 5,
      red_cards: 0,
      offsides: 0,
      passes: 461,
      pass_accuracy: 82,
    },
  },
  {
    id: 18528531,
    name: {
      home: "Manchester United",
      away: "Brentford",
    },
    date: "2023-08-19",
    result: "win",
    stats: {
      goals: 1,
      possession: 58,
      shots_on_target: 1,
      shots_off_target: 10,
      corners: 8,
      fouls: 20,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 0,
      passes: 427,
      pass_accuracy: 81,
    },
  },
  {
    id: 18528505,
    name: {
      home: "Manchester United",
      away: "Manchester City",
    },
    date: "2023-08-26",
    result: "lose",
    stats: {
      goals: 2,
      possession: 46,
      shots_on_target: 3,
      shots_off_target: 2,
      corners: 6,
      fouls: 15,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 3,
      passes: 451,
      pass_accuracy: 80,
    },
  },
  {
    id: 18528512,
    name: {
      home: "Crystal Palace",
      away: "Manchester United",
    },
    date: "2023-09-03",
    result: "lose",
    stats: {
      goals: 0,
      possession: 56,
      shots_on_target: 3,
      shots_off_target: 4,
      corners: 0,
      fouls: 8,
      yellow_cards: 4,
      red_cards: 1,
      offsides: 3,
      passes: 577,
      pass_accuracy: 80,
    },
  },
  {
    id: 18528504,
    name: {
      home: "Tottenham",
      away: "Manchester United",
    },
    date: "2023-09-16",
    result: "lose",
    stats: {
      goals: 1,
      possession: 46,
      shots_on_target: 9,
      shots_off_target: 4,
      corners: 5,
      fouls: 12,
      yellow_cards: 3,
      red_cards: 0,
      offsides: 0,
      passes: 497,
      pass_accuracy: 75,
    },
  },
  {
    id: 18528510,
    name: {
      home: "Manchester United",
      away: "Wolverhampton Wanderers",
    },
    date: "2023-09-23",
    result: "win",
    stats: {
      goals: 2,
      possession: 48,
      shots_on_target: 4,
      shots_off_target: 4,
      corners: 8,
      fouls: 16,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 4,
      passes: 593,
      pass_accuracy: 82,
    },
  },
  {
    id: 18528523,
    name: {
      home: "Manchester United",
      away: "Brighton",
    },
    date: "2023-09-30",
    result: "win",
    stats: {
      goals: 2,
      possession: 52,
      shots_on_target: 6,
      shots_off_target: 2,
      corners: 0,
      fouls: 13,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 1,
      passes: 451,
      pass_accuracy: 78,
    },
  },
  {
    id: 18528525,
    name: {
      home: "Manchester United",
      away: "Luton",
    },
    date: "2023-10-05",
    result: "win",
    stats: {
      goals: 3,
      possession: 54,
      shots_on_target: 5,
      shots_off_target: 7,
      corners: 9,
      fouls: 10,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 2,
      passes: 419,
      pass_accuracy: 82,
    },
  },
  {
    id: 18528534,
    name: {
      home: "Burnley",
      away: "Manchester United",
    },
    date: "2023-10-11",
    result: "win",
    stats: {
      goals: 2,
      possession: 44,
      shots_on_target: 6,
      shots_off_target: 7,
      corners: 3,
      fouls: 11,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 1,
      passes: 503,
      pass_accuracy: 89,
    },
  },
  {
    id: 18528512,
    name: {
      home: "Sheffield United",
      away: "Manchester United",
    },
    date: "2023-10-17",
    result: "win",
    stats: {
      goals: 3,
      possession: 45,
      shots_on_target: 10,
      shots_off_target: 3,
      corners: 5,
      fouls: 10,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 1,
      passes: 588,
      pass_accuracy: 78,
    },
  },
  {
    id: 18528525,
    name: {
      home: "Newcastle United",
      away: "Manchester United",
    },
    date: "2023-10-22",
    result: "win",
    stats: {
      goals: 2,
      possession: 48,
      shots_on_target: 9,
      shots_off_target: 3,
      corners: 3,
      fouls: 12,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 0,
      passes: 555,
      pass_accuracy: 80,
    },
  },
  {
    id: 18528512,
    name: {
      home: "Manchester United",
      away: "Fulham",
    },
    date: "2023-10-28",
    result: "win",
    stats: {
      goals: 4,
      possession: 43,
      shots_on_target: 10,
      shots_off_target: 4,
      corners: 1,
      fouls: 15,
      yellow_cards: 3,
      red_cards: 0,
      offsides: 4,
      passes: 504,
      pass_accuracy: 77,
    },
  },
  {
    id: 18528514,
    name: {
      home: "Manchester United",
      away: "Everton",
    },
    date: "2023-11-04",
    result: "draw",
    stats: {
      goals: 1,
      possession: 40,
      shots_on_target: 6,
      shots_off_target: 8,
      corners: 8,
      fouls: 5,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 4,
      passes: 564,
      pass_accuracy: 80,
    },
  },
  {
    id: 18528527,
    name: {
      home: "Manchester United",
      away: "Bournemouth",
    },
    date: "2023-11-10",
    result: "lose",
    stats: {
      goals: 0,
      possession: 51,
      shots_on_target: 2,
      shots_off_target: 8,
      corners: 2,
      fouls: 11,
      yellow_cards: 2,
      red_cards: 1,
      offsides: 0,
      passes: 419,
      pass_accuracy: 75,
    },
  },
  {
    id: 18528549,
    name: {
      home: "Liverpool",
      away: "Manchester United",
    },
    date: "2023-11-17",
    result: "draw",
    stats: {
      goals: 0,
      possession: 38,
      shots_on_target: 1,
      shots_off_target: 2,
      corners: 2,
      fouls: 10,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 0,
      passes: 371,
      pass_accuracy: 74,
    },
  },
  {
    id: 18528529,
    name: {
      home: "West Ham United",
      away: "Manchester United",
    },
    date: "2023-11-23",
    result: "lose",
    stats: {
      goals: 0,
      possession: 51,
      shots_on_target: 3,
      shots_off_target: 5,
      corners: 2,
      fouls: 13,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 2,
      passes: 328,
      pass_accuracy: 88,
    },
  },
  {
    id: 18528506,
    name: {
      home: "Manchester United",
      away: "Aston Villa",
    },
    date: "2023-11-29",
    result: "draw",
    stats: {
      goals: 2,
      possession: 56,
      shots_on_target: 6,
      shots_off_target: 4,
      corners: 3,
      fouls: 12,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 4,
      passes: 337,
      pass_accuracy: 81,
    },
  },
  {
    id: 18528547,
    name: {
      home: "Manchester United",
      away: "Nottingham Forest",
    },
    date: "2023-12-07",
    result: "win",
    stats: {
      goals: 3,
      possession: 60,
      shots_on_target: 6,
      shots_off_target: 10,
      corners: 9,
      fouls: 8,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 1,
      passes: 376,
      pass_accuracy: 84,
    },
  },
  {
    id: 18528504,
    name: {
      home: "Manchester United",
      away: "Tottenham",
    },
    date: "2023-12-13",
    result: "win",
    stats: {
      goals: 2,
      possession: 53,
      shots_on_target: 4,
      shots_off_target: 3,
      corners: 4,
      fouls: 11,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 0,
      passes: 449,
      pass_accuracy: 85,
    },
  },
  {
    id: 18528515,
    name: {
      home: "Wolverhampton Wanderers",
      away: "Manchester United",
    },
    date: "2023-12-21",
    result: "win",
    stats: {
      goals: 1,
      possession: 56,
      shots_on_target: 4,
      shots_off_target: 3,
      corners: 3,
      fouls: 10,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 2,
      passes: 496,
      pass_accuracy: 89,
    },
  },
  {
    id: 18528532,
    name: {
      home: "Manchester United",
      away: "West Ham United",
    },
    date: "2023-12-26",
    result: "win",
    stats: {
      goals: 2,
      possession: 54,
      shots_on_target: 2,
      shots_off_target: 2,
      corners: 4,
      fouls: 9,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 0,
      passes: 478,
      pass_accuracy: 80,
    },
  },
  {
    id: 18528504,
    name: {
      home: "Aston Villa",
      away: "Manchester United",
    },
    date: "2023-12-31",
    result: "win",
    stats: {
      goals: 2,
      possession: 48,
      shots_on_target: 5,
      shots_off_target: 7,
      corners: 5,
      fouls: 12,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 2,
      passes: 471,
      pass_accuracy: 81,
    },
  },
  {
    id: 18528526,
    name: {
      home: "Luton",
      away: "Manchester United",
    },
    date: "2024-01-26",
    result: "win",
    stats: {
      goals: 3,
      possession: 55,
      shots_on_target: 4,
      shots_off_target: 8,
      corners: 6,
      fouls: 11,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 2,
      passes: 301,
      pass_accuracy: 84,
    },
  },
  {
    id: 18528519,
    name: {
      home: "Fulham",
      away: "Manchester United",
    },
    date: "2024-02-04",
    result: "lose",
    stats: {
      goals: 1,
      possession: 54,
      shots_on_target: 8,
      shots_off_target: 6,
      corners: 8,
      fouls: 15,
      yellow_cards: 3,
      red_cards: 1,
      offsides: 4,
      passes: 518,
      pass_accuracy: 79,
    },
  },
  {
    id: 18528535,
    name: {
      home: "Nottingham Forest",
      away: "Manchester United",
    },
    date: "2024-02-11",
    result: "win",
    stats: {
      goals: 1,
      possession: 54,
      shots_on_target: 3,
      shots_off_target: 8,
      corners: 4,
      fouls: 14,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 3,
      passes: 547,
      pass_accuracy: 81,
    },
  },
  {
    id: 18528547,
    name: {
      home: "Manchester City",
      away: "Manchester United",
    },
    date: "2024-02-17",
    result: "lose",
    stats: {
      goals: 1,
      possession: 50,
      shots_on_target: 3,
      shots_off_target: 7,
      corners: 2,
      fouls: 15,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 3,
      passes: 438,
      pass_accuracy: 78,
    },
  },
  {
    id: 18528539,
    name: {
      home: "Everton",
      away: "Manchester United",
    },
    date: "2024-02-28",
    result: "win",
    stats: {
      goals: 2,
      possession: 48,
      shots_on_target: 8,
      shots_off_target: 6,
      corners: 6,
      fouls: 9,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 1,
      passes: 453,
      pass_accuracy: 85,
    },
  },
  {
    id: 18528542,
    name: {
      home: "Brentford",
      away: "Manchester United",
    },
    date: "2024-03-03",
    result: "lose",
    stats: {
      goals: 1,
      possession: 47,
      shots_on_target: 2,
      shots_off_target: 6,
      corners: 5,
      fouls: 9,
      yellow_cards: 1,
      red_cards: 0,
      offsides: 2,
      passes: 393,
      pass_accuracy: 83,
    },
  },
  {
    id: 18528547,
    name: {
      home: "Chelsea",
      away: "Manchester United",
    },
    date: "2024-03-09",
    result: "win",
    stats: {
      goals: 1,
      possession: 48,
      shots_on_target: 5,
      shots_off_target: 7,
      corners: 5,
      fouls: 15,
      yellow_cards: 3,
      red_cards: 0,
      offsides: 4,
      passes: 437,
      pass_accuracy: 85,
    },
  },
  {
    id: 18528507,
    name: {
      home: "Manchester United",
      away: "Liverpool",
    },
    date: "2024-03-17",
    result: "win",
    stats: {
      goals: 4,
      possession: 45,
      shots_on_target: 8,
      shots_off_target: 5,
      corners: 6,
      fouls: 5,
      yellow_cards: 3,
      red_cards: 0,
      offsides: 2,
      passes: 354,
      pass_accuracy: 84,
    },
  },
  {
    id: 18528517,
    name: {
      home: "Manchester United",
      away: "Arsenal",
    },
    date: "2024-03-23",
    result: "lose",
    stats: {
      goals: 1,
      possession: 45,
      shots_on_target: 3,
      shots_off_target: 7,
      corners: 2,
      fouls: 16,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 2,
      passes: 412,
      pass_accuracy: 74,
    },
  },
  {
    id: 18528516,
    name: {
      home: "Bournemouth",
      away: "Manchester United",
    },
    date: "2024-03-30",
    result: "win",
    stats: {
      goals: 2,
      possession: 55,
      shots_on_target: 10,
      shots_off_target: 8,
      corners: 6,
      fouls: 9,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 0,
      passes: 519,
      pass_accuracy: 82,
    },
  },
  {
    id: 18528508,
    name: {
      home: "Manchester United",
      away: "Newcastle United",
    },
    date: "2024-04-04",
    result: "lose",
    stats: {
      goals: 0,
      possession: 50,
      shots_on_target: 4,
      shots_off_target: 9,
      corners: 5,
      fouls: 12,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 3,
      passes: 413,
      pass_accuracy: 78,
    },
  },
  {
    id: 18528543,
    name: {
      home: "Manchester United",
      away: "Sheffield United",
    },
    date: "2024-04-07",
    result: "win",
    stats: {
      goals: 3,
      possession: 49,
      shots_on_target: 9,
      shots_off_target: 3,
      corners: 6,
      fouls: 11,
      yellow_cards: 3,
      red_cards: 0,
      offsides: 2,
      passes: 466,
      pass_accuracy: 87,
    },
  },
  {
    id: 18528536,
    name: {
      home: "Manchester United",
      away: "Burnley",
    },
    date: "2024-04-16",
    result: "win",
    stats: {
      goals: 3,
      possession: 51,
      shots_on_target: 4,
      shots_off_target: 4,
      corners: 5,
      fouls: 9,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 0,
      passes: 551,
      pass_accuracy: 81,
    },
  },
  {
    id: 18528501,
    name: {
      home: "Manchester United",
      away: "Crystal Palace",
    },
    date: "2024-04-27",
    result: "win",
    stats: {
      goals: 1,
      possession: 55,
      shots_on_target: 8,
      shots_off_target: 3,
      corners: 2,
      fouls: 13,
      yellow_cards: 2,
      red_cards: 0,
      offsides: 3,
      passes: 543,
      pass_accuracy: 87,
    },
  },
  {
    id: 18528517,
    name: {
      home: "Arsenal",
      away: "Manchester United",
    },
    date: "2024-05-11",
    result: "lose",
    stats: {
      goals: 2,
      possession: 48,
      shots_on_target: 3,
      shots_off_target: 7,
      corners: 2,
      fouls: 14,
      yellow_cards: 4,
      red_cards: 0,
      offsides: 2,
      passes: 465,
      pass_accuracy: 78,
    },
  },
  {
    id: 18528526,
    name: {
      home: "Brighton",
      away: "Manchester United",
    },
    date: "2024-05-20",
    result: "win",
    stats: {
      goals: 3,
      possession: 44,
      shots_on_target: 8,
      shots_off_target: 4,
      corners: 6,
      fouls: 12,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 3,
      passes: 492,
      pass_accuracy: 82,
    },
  },
];

module.exports = matches;