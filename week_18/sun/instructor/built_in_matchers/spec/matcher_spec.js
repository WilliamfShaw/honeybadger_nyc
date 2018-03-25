describe('Built in Matchers', () => {
  describe('toEqual', () => {
    // toEqual: compares the actual to the expected using common sense expectedquality. Handles Objects, Arrays, etc.
    it('passes if subject and expectation are equivalent', () => {
      expect('Hello World!').toEqual('Hello World!');
      expect('Hello World!').not.toEqual('Goodbye!');
      expect([1, 2, 3]).toEqual([1, 2, 3]);
      expect(1).toEqual(1);
      expect({foo: 1}).toEqual({foo: 1});
    });
  });

  describe('toBe', function () {
    // compares the actual to the expected using ===
    it('passes if subject and expectation are the same object', () => {
      var myObj = {prop: 'value'};
      expect(myObj).toBe(myObj);
      expect(true).toBe(true);
      expect(1).toBe(1);
      expect('string value').toBe('string value');
      // Demonstrate the difference between toBe and toEqual
      // not.toBe
      expect({foo: 1}).not.toBe({foo: 1});
      // toEqual
      expect({foo: 1}).toEqual({foo: 1});
    });
  });

  describe('toMatch', () => {
    it('compares the actual to the expected using a regular expression', () => {
      expect('Hello Jasmine').toMatch(/jasmine/i);
      expect('phone: 123-45-67').toMatch(/\d{3}-\d{2}-\d{2}/);
      // Using a variable in a regexp
      var postfix = 'long message';
      expect('This is my long Message').toMatch(new RegExp(`my ${postfix}`, 'i'));
    });
  });

  describe('toBeDefined', () => {
    it('passes if subject is not undefined', () => {
      expect({}).toBeDefined();
      expect(true).toBeDefined();
      expect(null).toBeDefined();
      expect(undefined).not.toBeDefined();
    });
  });

  describe('toBeNull', () => {
    it('passes if subject is null', () => {
      expect(null).toBeNull();
      expect(undefined).not.toBeNull();
      expect({}).not.toBeNull();
    });
  });

  describe('toBeTruthy', () => {
    it('passes if subject is true', () => {
      expect(true).toBeTruthy();
      expect({}).toBeTruthy();
      expect(false).not.toBeTruthy();
    });
  });

  describe('toBeFalsy', () => {
    it('passes if subject is false', () => {
      expect(false).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(true).not.toBeFalsy();
    });
  });

  describe('toContain', () => {
    it('passes the expected item is an element in the actual Array', () => {
      expect([1, 2, 3]).toContain(2);
      expect([1, 2, 3]).not.toContain(4);
      expect('abcdefghijk').toContain('bcde');
    });
  });

  describe('toBeLessThan', () => {
    it('passes if the actual value is less than the expected value', () => {
      expect(2).toBeLessThan(3);
      expect(3).not.toBeLessThan(3);
    });
  });

  describe('toBeGreaterThan', () => {
    it('passes if the actual value is greater than the expected value', () => {
      expect(2).toBeGreaterThan(1);
    });
  });

  describe('toThrow', () => {
    it('passes if function fn throws exception e when executed', () => {
      // The function that throws is not invoked directly by the test
      var object = {
        doSomething: function () {
          throw new Error("Unexpected error!")
        },
      };
      expect(object.doSomething).toThrow(Error("Unexpected error!"));

      // The function that throws is invoked inside a wrapper
      var itThrows = function() {throw new Error("My error");};
      expect(function(){itThrows()}).toThrow("My error");
    });
  });

  describe('toBeCloseTo', () => {
    it('checks that the expected item is equal to the actual item up to a given level of decimal precision ', () => {
      expect(1.223).toBeCloseTo(1.22);
      expect(1.233).not.toBeCloseTo(1.22);
      expect(1.23326).toBeCloseTo(1.23324, 3);
    });
  });
});