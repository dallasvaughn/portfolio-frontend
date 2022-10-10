describe('Home', () => {
  it('Successfully loads the homepage', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Navbar', () => {
  it('Clicking the "Blog" nav item takes the user to the blog page', () => {
    cy.contains('Blog').click();

    cy.url().should('include', '/blog');
  });

  it('Clicking the "About" nav item takes the user to the about page', () => {
    cy.contains('About').click();

    cy.url().should('include', '/about');
  });

  it('Clicking the "Home" nav item takes the user back to the homepage', () => {
    cy.contains('Home').click();

    cy.url().should('equal', 'http://localhost:3000/');
  });
});

export {};
