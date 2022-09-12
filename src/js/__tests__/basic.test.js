import informationAboutHeroes from '../basic';

test('information about heroes', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = informationAboutHeroes(heroes);

  expect(result).toEqual();
});
