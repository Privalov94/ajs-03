import healthIndicator from '../app';

test('should show a health indicator', () => {
  const input = {
    name: 'Маг',
    health: 90,
  };
  const expected = 'healthy';

  const received = healthIndicator(input);

  expect(received).toEqual(expected);
});

test('should show a health indicator', () => {
  const input = {
    name: 'Маг',
    health: 10,
  };
  const expected = 'critical';

  const received = healthIndicator(input);

  expect(received).toEqual(expected);
});
