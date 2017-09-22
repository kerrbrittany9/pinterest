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
});
