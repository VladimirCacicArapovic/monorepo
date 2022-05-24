import { getGreeting } from '../support/app.po';

describe('third-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message example', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome third-app');
  });
});
