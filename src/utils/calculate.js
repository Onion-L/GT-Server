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

module.exports = updatePlayerStats;
