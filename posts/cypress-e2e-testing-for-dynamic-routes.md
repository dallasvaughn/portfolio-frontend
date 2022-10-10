---
title: 'Cypress E2E testing for dynamic routes'
date: '2022-10-10'
displayDate: 'October 10, 2022'
preview: 'Cypress has easy-to-follow documentation and provides a seamless experience for setting your app up for E2E testing.'
---

Implementing Cypress' end-to-end (E2E) testing suite was smooth, and the end product provides such a useful tool for testing my app as a whole. Because this app does not rely on any backend at the time of writing this, I do not have as much configuration setup to do, but Cypress' documentation is well-written and clear to follow so that most setup should be seamless.

The main thing I wanted to set up testing for with Cypress was navigation. Because I am utilizing dynamic routing with Next.js and dynamically assigning URL slugs, there is room for programmatic error and I would like to ensure that specific navigational components direct users to the intended paths. Cypress has made this very simple since it runs with the selected browser and renders the URL you instruct it to visit. After writing my test cases, I can watch Cypress run through the cases, and in the case of my navigational tests, I can watch it "click" on components and navigate to specific pages.

Just as routing is done programmatically, I wanted to write an E2E test that programmatically ensures (no hard-coding values) that when a user clicks on a blog post, that the app directs them to the appopriate page, as indicated by the appropriate URL slug. In this example, I will show a test case where Cypress looks for the first blog post in the list, clicks on that post, and tests to make sure that it went to the appropriate URL. As always, it starts by opening the test case with `it()`.

```
it('Test case...', () => {
  ...
})
```

First, I have Cypress identify the blog post titles, which are indicated by `h2` elements. In doing so, it will find all of them, so I chain on `first()` to only act on the first element in the list, which is the first blog post.

```
cy.get('h2').first()
```

Now that we have the first element, we need to access only the text value of it because we'll need to use that to tell Cypress what slug value to expect. To do this, we call `invoke('text')` to access only the text value of the `h2` element. Now our function chain looks like this:

```
cy.get('h2').first().invoke('text')
```

This is the trickier part that required me to do some research in order to accomplish. These Cypress functions that we've called so far return Promises. So in order to use this string of text and do what we need with it, we need to resolve the Promise with `.then()`. As part of this resolution, we'll need to determine the slug value and somehow have Cypress remember this value, like a variable. To accomplish this, we tell Cypress to store this value as an alias. Whatever value is being stored is first wrapped with `wrap()` and then aliased with `as()`. This alias can then later be accesed by whatever name you gave it by adding an `@` before the name. Here is how the promise resolution looks in code:

```
.then((title) => {
  const slug = title.toLowerCase().replaceAll(' ', '-');
  cy.wrap(slug).as('slug');
});
```

In the above code, the slug is determined by taking the title of the post, changing it all to lowercase letters, and then replacing every space between words with a hyphen. This is how I've structured my app to work and it relies on these naming conventions.

Now we can test that it works. First, I'll have Cypress click on the first blog post element.

```
cy.get('h2').first().click();
```

When this runs, Cypress will now be on the page of the specific blog post clicked on. Now it's time to test and make sure that the slug of this new page is what Cypress expects it to be based on the logic we setup earlier. As I mentioned, we can access a Cypress alias by referencing it with an `@` in front of the name. Additionally, we need to remember that these functions return Promises, so we'll need to resolve the promise. What we're checking is that in the URL of the current page, it contains the slug we determined earlier programmatically. Here is what that code looks like:

```
cy.get('@slug').then((slug) => {
  cy.url().should('include', slug);
});
```

And that's the test! Here is what the entire solution looks like:

```
it('Test case...', () => {
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
})
```

I like this test case because it's a programmatic solution and works for any blog post and URL combination that gets clicked on. Every time a blog post gets added, this particular test case will run to ensure it works as expected because the newest blog post will always be the first on the list. So if I add a blog post to my collection and mess up its routing, causing it to point to a completely different post or a post that simply doesn't exist, then this test will fail. It's better than a hard-coded solution because this one is reusable and does not have to test the exact same scenario every time.

I'm very happy I've begun delving into the world of E2E testing with Cypress and I'm looking forward to experimenting with its more advanced features when the opportunities arise.
