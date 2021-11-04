const dbConnection = require('../db-connection');

describe('db connection unit tests', () => {

  test('db connection must be defined', () => {
    const result = dbConnection.getDb;
  
    expect(result).toBeDefined();
  });

  test('broken unit test', () => {
    const result = 5;
  
    expect(result).toBeNull();
  });
});

