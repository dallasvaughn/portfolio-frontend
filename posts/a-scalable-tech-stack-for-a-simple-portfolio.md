---
title: 'A scalable tech stack for a simple portfolio'
date: '2022-09-13'
displayDate: 'September 13, 2022'
preview: 'I want to provide a brief overview of the technologies I used to create this portfolio website and why I picked them. My primary concern when making these decisions was scalability.'
---

I want to provide a brief overview of the technologies I used to create this portfolio website and why I picked them. My primary concern when making these decisions was scalability; even now, I am not 100% sure what I may or may not end up adding or removing from my website, so I wanted to make sure that which ever route I take, I will not cause too much trouble for myself. An added bonus as well is I was able to get more experience with technologies I wasn't too familiar with, and brand new ones I have never used before. So without further ado, here is the stack:

## Next.js

This is a Next.js app; if you are unfamiliar with that name, it is a React framework that allows for some very useful features that are built-in to the framework, such as page routing and image optimization. One of the shining features of Next, however, is its ability for static generation. This allows Next to prerender the HTML at build time rather than requiring the client-side JavaScript to do so. This can result in some performance enhancements, especially on sites that aren't often updating data. For example, if I have blog posts in a database and I only write one blog post a month, then Next can simply get this data at build time and reuse that HTML. This way, the client does not need to fetch this data every time the user visits the site. With a normal site just using simple JavaScript and the same API request to fetch these blog posts, that request and data loading would have to run every time.

While this isn't an issue currently, I wanted to leave the option open to me to transition my blog posts to an external source, in which case I'd really like Next.js to prerender that data for me. And if any other data fetching gets added to this website, I'll always have this option.

## TypeScript

This is the first app I've properly utilized TypeScript on where I wasn't following some sort of tutorial. I've always heard about the benefits of TypeScript and how so many developers loved using it for their projects, but I had never gotten around to learning it and using it myself. I decided that this would be the project to do so. This portfolio website is a complete overhaul of my older one that, to me, felt very bare bones and unintriguing, so I wanted to go further with this one and expand my skillset while do so, even if it meant going a little overkill.

Is TypeScript necessary for this site? No, this is a pretty simple website through and through, but it was an excellent choice to implement TypeScript and get used to how it works as somebody pretty new to the technology. I added type interfaces for my component-level props, and it felt great seeing the feedback I was getting from VS Code when I wasn't passing the appropriate prop names or the expected data type for a particular prop. It's clear now how much time and debugging effort TypeScript can **_prevent_** when utilized properly.

## Tailwind CSS

Another technology that I saw developers loved, but had no experience with myself. Welp, **time to learn it!**

This is definitely something that takes time to get used to. If you've used Bootstrap before, the general premise is pretty simple and it's not so much about learning the technology, but rather just learning how their class names work and what they do. Lots of referring to documentation when you start out, and over time, you find yourself reusing a lot of class names to the point where you just know what you need to put and where. And if for whatever reason you don't know what you need to use, the documentation is excellent and very easy to navigate to find your solution.

The most time I spent here was figuring out how to work with the `tailwind.config.js` file. In my case, there was some animation styling that I wanted to incorporate that is not readily available from Tailwind. But again, excellent documentation meant that this wasn't so painful, so thank you to the team at Tailwind CSS for providing clear and helpful documentation.

---

And that's it for the overall tech stack. Of course, some smaller packages are being used for sub-processes that I'll briefly highlight as well:

- SendGrid is being used to handle my contact form. This required more config on the SendGrid side than my own code, but once it was said and done, I simply had to compile the necessary data and send the API request off and voila, my contact form is functional
- Remark and gray-matter are NPM packages being used to help automate my blog updating process. I write new blog posts as simple markdown files. Remark converts the markdown to HTML that gets rendered, and gray-matter parses the metadata, which all gets compiled together and returned in a function.

Overall, I had fun developing this portfolio, and it felt great being able to learn new technologies and get more experience with ones which I felt were lacking when it came to my overall skillset. Feel free to reach out if you'd like to share anything with me, or if you have any questions about anything I've mentioned; I'd be happy to go into further detail about anything if it helps!
