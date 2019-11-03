---
title: "Buzzvil Design Team toolbox in 2019"
date: 2019-01-15T11:07:21+09:00
draft: false
featured_image: "/images/2019_toolbox.jpeg"
---

Hi, I’m Max and I lead a team of designers at Buzzvil. When we’ve decided last year to drastically change our design toolbox, I was pleased to find plenty of insights from other teams around the world. This post talks about our decisions and related needs!

To give a quick background, we are a team of 5 designers located in Seoul and Taipei. The team counts 3 Product designers including myself and 2 visual - Brand designers. We’ve consolidated a pretty efficient design system fitting complex needs last year and are supporting a dozen of Apps generated from it since then. We integrate partner’s brand and custom layers based on their various needs on top of atom based UI components. We then generate these Apps through a pretty comprehensive and flexible SDK including Design style guides CI. To make this all thing work we need a clear DesignOps strategy and our toolbox is part of it.

## **Our main Tool 🥁**

![](https://cdn-images-1.medium.com/max/2000/1*nUZs178q_SxL7NbW7mE10A.png)

## Bye Sketch, Hello Figma!

This is the major change in our organization. We’ve been very happy since.

### Not an easy choice

Sketch is great, the team loves its robustness and its simplicity at handling complex, nested components. We still think that Sketch is better than Figma in many ways, it handles constraints with more class, affecting a layout based on an override text length being one of the most noticeable advantage. Sketch also has a massive community and hundred of amazing plugins providing features that Figma doesn’t have.

### Why Figma

Figma on the other hand is Web-based and doesn’t really allow any plugin to interact with the software itself. Extensions are mostly focused on the after (exporting mostly). No cool *renaming* plugin to help you keeping things tidy within your files. But it still has many strong advantages that led us to our decision to use it.

### All-In-One: Design, collaborate, share, comment, prototype, dev hand-off 😎

Figma being online means that we don’t have local files anymore. Figma handles version control and it does it in a pretty neat fashion over the same file you are working on, only based on given permissions (Editor, viewer, public link, organization, etc.). We like the fact that all your files can be turned as a library and that this library can be shared to anyone within your organization or with specific people. Figma really acts like Google Doc does, you can share, collaborate live (we’ve tried up to 14 people with no lag or bug, just for fun), comment, view, prototype, all this in real time.

The key factor was for us to be able to share nearly 100% of our design assets with everyone within our company or any of our partners. Figma also provides a very neat Design hands-off feature that does pretty much what Zeplin does but in a more interactive and flawless way.

### Best fit to host our Design system for people to participate

To conclude, Figma is great to build sharable design systems. It **provokes collaboration and feedbacks** as people can easily visualize what the team is doing and it even triggers enough curiosity for some of our **PM or marketers to play with our UI blocks** in order to communicate some very early concepts on their own.

With Figma in, we got rid of Sketch, Zeplin and Abstract and we feel much lighter this way. 😃

**The other options we’ve considered:**

* InVision Studio - Too focused on prototyping, we found that for our needs this wasn’t the right tool, not as powerful as Figma in many other ways, plus a bit buggy and not as stable as other players.

* Framer X - too recent, too expensive for what it currently provides (team plan). We are still testing it though, hoping for more features to come.

* Adobe XD - always keeping an eye on it but so far it’s still pretty far from the other players at handling systems.

## Extra softwares

![](https://cdn-images-1.medium.com/max/2000/1*t87yYllw6flK6dcrox0vhg.png)

## Principle stays!

Just because it’s too easy and too good to prototype smooth, high-ended prototypes.

Figma just began last year adding prototyping features and to be honest it is very laggy and limited but we still prepare all of our components to be ready for prototyping as it’s always good to have for early check.

Principle is there to refine animations and transitions. We also use this tool company wise to get a WOW effect from our presentations. I just really hope that other prototyping and motion tools would learn from it. This is how good I think this tool is.

Down-side: No online export, only available on Mac (Desktop App or any iPhone with as a consolation a very neat video/GIF export module).

**The other prototyping options we’ve considered:**

* Framer / Framer X - Too time-consuming / Too recent and limited without bringing your own set of React components and interactions.

* Origami - Too time consuming and not as fluid as other players.

* Protopie — Interesting solution, tho not yet fully tested, getting a hand on the new 3.1 version is on our agenda. 👀

![](https://cdn-images-1.medium.com/max/2000/1*SOZCkFyP1-RGRIhOzr3WvA.png)

## Adobe stays too because well, no choice.

Brand and Marketing assets still highly depends on Adobe Suite due to Print assets and Printing company’s standards. To be honest it’s also handy to have AfterEffects, Premiere and lightroom for punctual work.

We also considered Affinity products but so far it just makes more sense to go with Adobe Suite for its coverage.

**The entire list of things we are also using for further needs:**

* Git & Storybook, part of a CI study we run in order to better synchronize Design & Dev;

* Dropbox Team to backup everything we do;

* Slack as our company wide communication tool;

* Jira / Confluence to manage and document our work;

* Paper rolls & the good old white board for endless scenarios and brainstormings; 👌

## Keeping an eye on our options and being reactive

SketchApp recently raised 20M$ and has big plans for this year. We always keep an eye on various options and if we feel it’s time to switch, we switch (all things considered including the time to migrate our system). Right now Figma is best fit for the company’s needs, tomorrow might just be different. Design assets getting more and more universal gives us more and more leverage in order to migrate to another tool without too much sweat. 😅