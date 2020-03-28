---
title: "Tools to build a design system in 2020"
date: 2020-02-06T11:07:21+09:00
draft: false
featured_image: "/blog/posts/tools_to_build_a_design_system_in_2020/buzzvil_design_system.jpeg"
credential: ""
credentiallink: ""
---

A snap taken during our last sprint prior to publish our system online

This is a healthy, yearly routine I genuinely recommend to follow regardless of the size of your team: gauging your current toolbox against what’s new in the busy design tool industry. We are a team of 6 designers (3 visual & 3 product designers). We conducted our research and tests with a focus on design systems. You’ll find tons of other articles about this, we’ve read them all (or close) and now posting our share to the chain :).

To adjust our toolbox we followed these steps:

* We looked back at our past year achievements and at how we used our different tools. Identifying what was great and what wasn’t;

* We included our 2020 dream objectives in the thinking loop to highlight what will change this year in order to adjust our toolbox accordingly;

* We read about, tested, discussed and tested again every tools we could.

## Code-driven strategy

The gap between design tools and code integration is narrowing and 2020 is a great time to deep dive in.

Before to start talking about tools and systems, please note that we followed an atomic organization, separating our design assets into styles, compositions and strings. In an atomic system, styles are translated into design tokens, directly from [Figma](http://figma.com), our compositions are documented over our [public design system](http://design.buzzvil.com). Finally our strings are hosted on Google Spreadsheets, looking for options in order to grab them directly from [Crowdin](https://crowdin.com/).

Let’s start with our design system documentation tool!

### [Zeroheight](http://zeroheight.com)

![from zeroheight via [workatastartup.com](https://www.workatastartup.com/directory/12848)](https://cdn-images-1.medium.com/max/2400/0*NEQWVB1wHVbwCoqt)*from zeroheight via [workatastartup.com](https://www.workatastartup.com/directory/12848)*

Late last year we started using this tool to automate our design system documentation. Zeroheight allows us to connect and document our Figma styles and components into a simple and neat website ([here is ours](http://design.buzzvil.com)). It converts our colors, fonts and hopefully more style properties into a set of tokens for our developers to connect with. It’s a recent tool, permanently improving and we are hoping to see greater token management as well as a more powerful CMS to document our system in the near future.

### [Storybook](https://storybook.js.org/)

![From Storybookjs via [Github](https://github.com/storybookjs/storybook)](https://cdn-images-1.medium.com/max/2000/0*z-KmE_RcwcHFazL9.png)*From Storybookjs via [Github](https://github.com/storybookjs/storybook)*

Maintaining a storybook to document our Web-based components is one of our main objective this year. It will mostly affects our management platform and will be associated with Zeroheight as it interfaces with storybook. Our management platform is extremely complex and it is key for the team to clearly define patterns and tokens in order to ease the integration and give a consistent experience. Storybook is a solid option with an active community, tons of Add-ons and a large framework support (React, ReactNative, Vue, Mithril, Svelte…). All that under MIT license!

## Giving your team space to grow

When your company is growing, the volume of products, stakeholders is expanding exponentially. Your design team’s headcount potentially grows as well and your design coverage starts to become out-of-hands. This is usually the time to invest in a scalable tool. We chose to go with Figma Organization plan as we were already using their Team solution last year. Here are a few feedback… and warnings.

### Migrating to Figma Organization Plan.. with a bit of frustration

![From [figma.com](http://figma.com)](https://cdn-images-1.medium.com/max/4000/0*s9xK3p048_lxCdbO.png)*From [figma.com](http://figma.com)*

So we moved from a Team plan to Organization one. It gives complete control over your assets and how you organize them. The SSO, the shared libraries, the statistics are all very **powerful upgrades for designers.. but unfortunately for designers only.**

We’ve been **pretty disappointed in the way Figma deals with non-designers** (we even considered rolling back to team plan).

Design shows its full potential when shared with the entire organization. If anyone from Product to Business can access your design assets and libraries and can eventually start playing Lego with it, you just opened the door to build a true company wide design culture. It was great with the team plan as everyone could create and **share files based on design libraries**. But in Organization plan, only designers can share stuffs, all other user being *restricted*. And that’s bad for many good reasons.

Organization is great for companies who can afford to pay for very large volume of editors. For a startup who is doing great but who can’t afford to spend $20K a year for a tool, it is very frustrating. We are looking for alternatives or hoping for Figma to be less rigid in the near future. 🤞

### Why did we keep Figma over Sketch, Adobe XD or Framer X?

Figma truly opened Design to our entire company as everyone could access, view, duplicate and share anything. While you might feel uncomfortable switching to Organization, Figma remains a great option as all resources are online and available for anyone to see. Figma packages a bunch of tools at once, it provides one of the best version control there is, it handoffs design specs pretty well too and it interfaces with many plugins and add-ons (such as zeroheight). We also appreciate the fact that we don’t have any local files, instead a great and scalable way to share our assets over a complex organization. Not mentioning that Figma design and prototyping tools are some of the best in the market and to my opinion by far the best fit to build and maintain a design system.

It’s also good to note that [Framer X for Web](https://www.framer.com/web/) is coming as well as an [advanced Design handoff](https://blog.sketchapp.com/whats-next-for-sketch-in-2020-fbac2317e7b4) module for Sketch.

### Our favorite Figma plugins:

* [Google Sheets Sync](https://www.figma.com/c/plugin/735770583268406934/Google-Sheets-Sync) (heavy use)

* [Autoflow](https://www.figma.com/c/plugin/733902567457592893/Autoflow) / [Arrow Auto](https://www.figma.com/c/plugin/751007211632768205/Arrow-Auto)

* [Rename it](https://www.figma.com/c/plugin/731271836271143349/Rename-It)

* [Similayer](https://www.figma.com/c/plugin/735733267883397781/Similayer)

* [HTML To Figma](https://www.figma.com/c/plugin/747985167520967365/HTML-To-Figma)

* [To Path](https://www.figma.com/c/plugin/751576264585242935/To-Path)

* [Figmoji](https://www.figma.com/c/plugin/736612173445813953/Figmoji)

Figma API also allows to directly connect design and dev environments with your own CI pipeline. I will publish another dedicated story about it later this year. 😄

## Less is More

### Principle out (for now)

We’ve been very fond of the prototyping tool simplicity. But the lack of update and limitations in terms of logic or export made us move to Figma for pretty much everything simple. Figma is great option because we can integrate prototyping into our system components, giving behavior properties to our objects. We are still looking for a better, high-end, code friendly prototyping tool. In the meantime we will enjoy Principle’s lifetime license.. without the most recent updates.

## We are keeping an eye on

* [Protopie](https://www.protopie.io/) for advanced prototypes

* Frameworks such as [Svelte](https://svelte.dev/) or [stencil](https://stenciljs.com/) to follow a code-driven strategy

* [Maze](https://maze.design/) to run user tests at the speed of light (it recently interfaces with Figma prototypes 🙆‍♂)

## What to expect in 2020

This year we are expecting to see more opportunities to connect systems and client based components (Android and iOS). Documentations and handoffs are getting close but the way to truly connect Apps and Design assets isn’t there yet. We are also expecting to better connect strings and Design either by using expected official solutions such as [Crowdin’s Figma](https://portal.productboard.com/qzmwn63we6angchg59zdisxw/c/63-figma-plugin) plugin or using Figma’s API.

That’s it! Hope this is helpful to some of you. Always happy to hear a different opinion or any other suggestions in the comments! 😁
