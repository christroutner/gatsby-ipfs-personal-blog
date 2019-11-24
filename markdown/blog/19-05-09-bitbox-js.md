---
date: '2019-05-09'
title: 'TypeScript'
root: '/blog'
path: '/blog/bitbox-js'
---

[BITBOX SDK](https://github.com/Bitcoin-com/bitbox-sdk) is getting converted
to TypeScript. TypeScript has become hugely popular on GitHub and among the
JavaScript developer community in a very short time. Based on new GitHub repos,
a bit less than 50% of the projects are now written in TypeScript.

I've been programming in TypeScript for a while now, and I can see the attraction,
particularly for developers coming from the C# ecosystem. Many, many companies
(read Microsoft) have been undergoing a massive sea change in the last few years,
with C# developers retooling into JavaScript en-mass.

C# is a strongly-typed language, and moving from that ecosystem into a weakly-typed
language makes most developers skin crawl. The main 'benefits' that people point
to when talking about TypeScript is the typing it provides, and the interface
declarations that explicitly declare how an object is constructed. It is claimed
that these advantages make it easier for developers to collaborate on large
projects.

That all may be true. But for me, the advantages of TypeScript do not outweigh
the disadvantages. Here are the costs associated with TypeScript, as I see them:

- It requires a small investment in time to learn the differences between
TypeScript and JavaScript, and how to use the new syntax.
- It requires significant amount of setup for each new project, creating a
typings files and adding interface declarations for each object. It takes much longer
to get proficient at this kind of setup than simply learning how TypeScript 'works'.
- A 'simple fix' to a JavaScript project is often stymied by wrestling with the
TypeScript compiler, trying to find the proper syntax and typing. What should take
10 minutes, frequently takes me an hour of Googling to figure out how to override
some Interface defined in some deep dependency.
- TypeScript is a compiled language, like Babel. Every time a developer hits
`npm run` or `npm test`, there is a delay while the computer compiles the code
before running the command. This time lag can be quite significant when quickly
iterating through code, like when writing unit tests.
- While cross-compiling JavaScript for front end applications makes a lot of sense,
I've never heard a convincing argument as to why it's a good idea for back end,
server-side applications.
- Developers proficient at TypeScript can read and use JavaScript, but the reverse
is not true. JavaScript developers unfamiliar with TypeScript can not read or use
code snippets written in TypeScript, without taking the time to learn about
TypeScript.

That last point is what really gets me. All the code I write, I publish as open
source. And when I write that code, I write it for the novice version of me
10 years ago. JavaScript has come so far, and I imagine it must be much more
intimidating now then it was back then. TypeScript is just another hurdle
for a novice developer to overcome. I want to
reduce friction and help developers enter the cryptocurrency and open source
spaces. That's one reason why I focus on simplicity of syntax, good comments, and
minimum dependencies.

These are my opinions and experiences with TypeScript. I'm sure there is whole
army of developers who would be happy to debate these points with me. That's fine.
Use what you want, I'll do the same.

The result is that I use TypeScript because I *have to*. I use it because someone
is *paying me* to use it. When creating my own apps, I avoid it for the same
reasons I avoid Babel. The downsides of using compiled languages is often not
directly experienced, but only experienced inderectly, in the form of
poorer developer
experience, complexity, and issues with reliability and scaling. These are
hard-won lessons of experience that are difficult to communicate to developers
busy chasing the new, hottest technology.

Since BITBOX SDK is about to get a makeover into TypeScript, I thought this would
be a great time to fork the project for those developers like me, who prefer
their back-end libraries to be simple, pure JavaScript with a minimum amount of
dependencies.

So I created this: [BITBOX JS](https://github.com/christroutner/bitbox-js) library.
I've also released it as [an npm library](https://www.npmjs.com/package/@chris.troutner/bitbox-js).

Major features of this fork:
- Pure, standard, uncompiled JavaScript
- [Semantic Release](https://github.com/semantic-release/semantic-release) for
continuous delivery using semantic versioning.
- [Greenkeeper](https://greenkeeper.io/) automatic dependency management for
automatically maintaining the latest, most secure dependencies.
- [IPFS uploads](https://ipfs.io) of all files and dependencies, to backup
dependencies in case they are ever inaccessible from GitHub or npm.

Since npm and GitHub occasionally fall over or people occasionally rage-quit
the platforms and take their code with them, I am additionally publishing the code
to IPFS. Here is the code behind the initial release (v7.0.0) of my fork:

- v7.0.0 - refactored to pure JavaScript:
  - without node_modules folder: QmNjFsiTZRMAUa9rZpXqZqivv9JLaNicwLSPHjyLB7PVDk (1 MB)
  - with node_modules folder: Qma9ScApwBtuL7dpdSk7jpBFTxbqRdiR921WjyP75SU7bT (100 MB)
