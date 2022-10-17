describe('Exercise', () => {

  function sayGoodbye(name?: string): string {
    if (!name) {
      return 'No Name!';
    }
    return 'Goodbye ' + name + '!';
  }
nt
  beforeEach( () => {
    console.log('I LOVE MY LLAMAS!');
  });

  describe('METHOD: sayGoodbye', () => {
    let actualValue = sayGoodbye('Bonnie');
    let expectedValue = 'Goodbye Bonnie!';

    it('should say Goodbye Bonnie!', () => {
        expect(actualValue).toEqual(expectedValue);
    });

    describe('should handle a call with no input!', () => {
      actualValue = sayGoodbye();
      expectedValue = 'No Name!';

      beforeEach( () => {
        console.log('I LOVE MY LLAMAS!');
      });

      it('should say no name ', () => {
        expect(actualValue).toEqual(expectedValue);
      });
    });
  });

});
