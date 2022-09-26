---
title: 'I added unit testing with Jest and React Testing Library'
date: '2022-09-26'
displayDate: 'September 26, 2022'
preview: "Utilizing React Testing Library's guiding principles, I reformatted several aspects of my code that yielded a friendlier developer experience, as well as a more scalable solution"
---

After implementing unit testing into this app with Jest and React Testing Library, I have experienced first-hand the strengths of using a test-driven development (TDD) approach to creating a project.

If you're not familiar with TDD, it is simply an approach to development where software requirements are converted to test cases before the actual development of the software is done. On the contrary, you can develop an app first, and then write tests later. In my case, I have technically done the latter because I have written these unit tests after the development of the app in its current state. However, doing so has enlightened me in regards to the strengths of TDD.

Through implementing unit tests, I have gone back to reformat several sections of code which could have been prevented had I started by defining and writing out unit tests before starting the development. In my case, because this app is relatively simple, the reformating was largely centered around breaking down aspects of the app into smaller components. But why was this necessary?

If you take a look at [Testing Library's Guiding Principles](https://testing-library.com/docs/guiding-principles/), you'll see that this testing library is intended to be used around "writing tests that closely resemble how your web pages are used." It encourages writing simple tests that replicate how the user would interact with a particular component. In doing so, you write a Jest environment that simply renders the component being tested, and then performs the test cases. There is no need to account for anything more unless it undoubtedly pertains to this component being tested and is completely necessary.

So in my situation, I created a contact form that lives on my home page. Without thinking much about it (since this isn't a crazy complex app), I just wrote the contact form into that home page component, which in this case is a Next page. If I wanted to write unit tests for this contact form, I would have had to force Jest to render the entire home page, as well as any dependencies. This would have involved setting up the necessary mocks just so that when Jest rendered the page in its test environment, it wouldn't crash due to some unknown dependency. So the solution here was to break that contact form down into its own component (which honestly should've been done in the first place) so that it is the only component being rendered into the test environment.

This doesn't seem like a huge issue, and it definitely isn't in my case, but translate this kind of problem to an enterprise app and now we've got much bigger issues that will result in a lot of wasted time that could've been prevented. So it's certainly a lesson learned in my situation, and it's exactly why I'm trying to implement best practices (at least to the best of my ability) in this app as I have enough use cases here to practice implementing them, but they are easily-digestable in scope for one individual to handle alone. Moving forward, I plan to define and write out tests for any new feature I decide to add to this app before I start developing it as I know it will be a good challenge for me to adopt better developing habits.
