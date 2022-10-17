describe('METHOD: getWelcomingMessage', () => {

  function getWelcomingMessage(userName: string): string {
    return `Hello ${userName}`;
  }

  it('should return hello with Bonnie', () => {
    const actualValue = getWelcomingMessage('Bonnie');
    const expectedValue = 'Hello Bonnie';
    expect( actualValue ).toEqual( expectedValue );
  });

  it('should return hello with Alice', () => {
    const actualValue = getWelcomingMessage('Alice');
    const expectedValue = 'Hello Alice';
    expect( actualValue ).toEqual( expectedValue );
  });

  describe('Antoher sub use case', () => {

    beforeEach(() => {
      console.log('BEFORE');
    });

    it('should fail', () => {
      expect(true).toEqual(true);
    });
  });

});


