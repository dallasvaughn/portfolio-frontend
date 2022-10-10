describe('Blog', () => {
  it('Loads the blog page', () => {
    cy.visit('http://localhost:3000/blog');
  });

  it('Loads the list of blog posts', () => {
    cy.contains('I added unit testing');
    cy.contains('A scalable tech stack');
  });

  it('Clicking on the first post component takes the user to that blog post', () => {
    cy.get('h2')
      .first()
      .invoke('text')
      .then((title) => {
        const slug = title.toLowerCase().replaceAll(' ', '-');
        cy.wrap(slug).as('slug');
      });

    cy.get('h2').first().click();

    cy.get('@slug').then((slug) => {
      cy.url().should('include', slug);
    });
  });

  it('Clicking on the last post component takes the user to that blog post', () => {
    cy.contains('Blog').click();

    cy.get('h2')
      .last()
      .invoke('text')
      .then((title) => {
        const slug = title.toLowerCase().replaceAll(' ', '-');
        cy.wrap(slug).as('slug');
      });

    cy.get('h2').last().click();

    cy.get('@slug').then((slug) => {
      cy.url().should('include', slug);
    });
  });
});

export {};
