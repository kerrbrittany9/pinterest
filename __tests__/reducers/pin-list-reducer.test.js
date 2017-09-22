import pinList from './../../src/reducers/pin-list-reducer';
import c from './../../src/constants';


describe("Pin list reducer", () => {
  let action;
  const pinInfo = {
    title: 'all my thoughts',
    content: 'wow! darn! jeez!',
    id: 0,
    repin: 0
  };

  const pinInfo2 = {
    title: 'i like popcorn',
    content: 'ate kettle corn and watched the UN address',
    id: 1,
    repin: 0
  };

  test('should add pin to array', () => {
    const { title, content, id, repin } = pinInfo;
    action = {
      type: c.ADD_PIN,
      title: title,
      content: content,
      id: id,
      repin: repin
    };
    const futureState = [ pinInfo ];
    expect(pinList([], action)).toEqual([ pinInfo ]);
  });

  test('should delete post', () => {
    const { pinInfo, pinInfo2 } = currentPins;
    action = {
    type: c.DELETE_PIN,
    id: 1
  };
  const futureState = [ pinInfo];
  expect(pinList([pinInfo2], action)).toEqual([ pinInfo])
  })
});
