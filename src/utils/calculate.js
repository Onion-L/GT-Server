const updatePlayerStats = (originalData, updateData) => {
  for (const [key, value] of Object.entries(updateData)) {
    if (key !== "name") {
      if (originalData.stats.hasOwnProperty(key)) {
        originalData.stats[key] += value;
      }
    }
  }
  return originalData;
};

const calculateAverage = (total, count, round = false) => {
  const average = total / count;
  return round ? Math.round(average) : average;
};
module.exports = { updatePlayerStats, calculateAverage };
