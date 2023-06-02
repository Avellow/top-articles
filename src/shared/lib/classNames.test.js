import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expectedFirst = 'someClass class1 class2';
    const expectedSecond = 'someClass class1 class2 hovered scrollable';

    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expectedFirst);

    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true, animate: false },
      ['class1', 'class2'],
    )).toBe(expectedSecond);

    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true, animate: undefined },
      ['class1', 'class2'],
    )).toBe(expectedSecond);
  });
});
