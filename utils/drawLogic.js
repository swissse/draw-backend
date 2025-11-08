// Перемешивание участников
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Группировка по весовой категории
function groupByWeight(participants) {
  const groups = {};
  for (const p of participants) {
    if (!groups[p.weightCategory]) groups[p.weightCategory] = [];
    groups[p.weightCategory].push(p);
  }
  return groups;
}

// Формирование жеребьёвки
export function createDraw(participants) {
  const groups = groupByWeight(participants);
  const draw = {};

  for (const [category, group] of Object.entries(groups)) {
    const shuffled = shuffle(group);
    draw[category] = [];

    for (let i = 0; i < shuffled.length; i += 2) {
      const pair = shuffled.slice(i, i + 2);
      draw[category].push(pair);
    }
  }

  return draw;
}
