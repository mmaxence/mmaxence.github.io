---
title: "Study*(Designers+Engineers)= ❤️ pt.1"
date: 2019-12-07T11:07:21+09:00
draft: false
featured_image: "/blog/posts/studydesigners+engineers-%EF%B8%8F-pt1/design_x_dev_study_at_buzzvil.jpeg"
credential: "How our study usually looked like 🍕 💻"
credentiallink: "/blog/posts/studydesigners+engineers-%EF%B8%8F-pt1/design_x_dev_study_at_buzzvil.jpeg"
---

About a year ago we started a small study group with engineers and designers to understand each other better. It was an insightful and fun experience. Fun enough to run 2 different projects summarized over 2 different stories. Here is the first one, sharing both designer and engineer points of views.

At [buzzvil](http://www.buzzvil.com) we can freely start a study group, lunch being supported for the occasion. It was enough reason for us 5 to start questioning our workflow, 3 product designers and 2 engineers (client & devOps) on a weekly basis.

**Here was our initial statement:**
##### The study is a collaborative group between Designers and Engineers aiming to learn how to work better together and find keys to ease cooperation..*

Another important fact is that we started this study at the same time our company moved to a [matrix type of organization](https://en.wikipedia.org/wiki/Matrix_management). In short we now have a function team such as Design team, as well as a mission team specific to a project or product, gathering people from different functions. A good time to for us to generate communication and see how we can embrace this new setup.

## So we started.

For the first few sessions, the 5 of us gathered in our auditorium and we introduced our design workflow and the[ design system](https://design.buzzvil.com) that connects the dots behind. Engineers did the same, explaining how they work, how Android Studio works and how GitHub and other tools are being used at buzzvil. After a few minutes going through the first session, we could identify flaws in our respective work processes, things we do at Design level that aren’t being consistent with how things work in dev side and vice-versa. So we started pointing out the pain points and identified problems on our weekly meeting note, part of the Definition phase of the design thinking process.

We then experienced for a bit, created some repositories on GitHub and went through a “simple” demo project **to understand by doing**.

After finishing our exploration phase and defining our problems, we’ve started ideating, targeting a few specific problems and tried to find solutions together. This is the fun part and from a design perspective it highlights something very important:

In the past we’ve tried to involve other fields in our ideation process but results weren’t that satisfying. Because time is limited we were usually focusing our time on solving the problem, meaning that the whole Design thinking — research and definition phases were prepared in advance. **And that was wrong**. Involvement from the start changes everything, identifying problems as a team, researching, exploring testing together changed everything. It wasn’t anymore some kind of weird Design approach where you are asked to stick post-its on a wall, it was about solving the problem you identified earlier as a group.

![*Phantom box is our own Design tokens CI*](https://cdn-images-1.medium.com/max/3200/0*mQ7cboc3FebnD6wS)
##### Phantom box is our own Design tokens CI

## Conventions make a difference

And so we’ve decided to focus on our **shared conventions**. We actually had pretty advanced conventions already, on both design and dev sides but it turned out that these weren’t exactly the same..

Design system gives consistent naming conventions over our product tokens and components, but it doesn’t perfectly follow Android nomenclature. And on the other hand, Clients weren’t all following the same nomenclatures which made things very.. manual.

Design team uses [Figma](http://figma.com) to create, communicate and handoff our Design. Styles are actually fairly clean and can be directly exported into XML. Using Figma API to export all the different styles with the same conventions and fixing the nomenclature could actually be very interesting to us as buzzvil handles dozens of white label apps, carrying each of our partner’s brand assets.

We stopped our ideation at this stage and decided to dive in, developing our solution from this point.

We thought it was interesting to have both points of views and explanations:

## The engineer’s point of view — Liam

*Liam ([Hoseong Hwang](https://medium.com/@hoseonghwang)) is a DevOps engineer at buzzvil*

As a DevOps engineer, I focus on automating repetitive tasks. In the backend development cycle, all changed code lines are automatically tested, built, distributed by CI(Continuous Integration) and CD(Continuous Delivery) pipelines. Most of these CI/CD pipelines are configured to run with the minimum amount of human intervention. While both design & client dev side has its own sets of conventions, hand-off happens beyond the boundaries of two different function teams. This process makes it inefficient for developers to interpret the design output, communicate back with designers about what they don’t fully understand. If an engineer is filling in the gaps themselves, it would become harder to maintain as time goes by. This discrepancy will be reduced if the protocol is first adjusted and handoff work is automated as much as possible.

We can consider Figma output file as a style library when managed with some simple conventions. Figma API well-describes it’s content, and is really easy to parse. GitHub manages their icon library called Octicons using Figma that an automated CI pipeline generates prebuilt assets directly from Figma file([https://github.blog/2018-04-12-driving-changes-from-designs/](https://github.blog/2018-04-12-driving-changes-from-designs/)). So we started to work on creating a pipeline that generates a package containing style guidelines and icon sets that can be imported to our Android project directly from a Figma file. It can also be continuously versioned and published as the original Figma file gets updated.

So we asked our designers to update a Figma file containing the styles with specific conventions so we can easily parse it. We could create a CI pipeline that generates AAR(Android Archive Library) which packages icons and font styles from Figma file. As of this writing, Figma API doesn’t support webhook, so we need to manually trigger the Jenkins pipeline, but still it seems pretty promising.

## The designer’s point of view

Connecting our Design tool to directly export an XML file that fits our environment of development sounds idealistic as it literally saves up time on design hands-off and avoids potential human mistake in the process.

Furthermore, we could identify ways to improve this flow. For example connecting each design change into a git push, waiting for dev side to pull the request to update a specific guide.

Focusing more on the experience itself, we’ve learnt a great deal understanding Android naming conventions in an actual project. Reading about it somewhere and seeing the impact it has on an engineer’s time isn’t comparable.

Finally, it does feel great to know that everything included in that style guide is now out of your concern, moving your focus to something else.

## Conclusion and reception

We moved this project to DevOps and Design team in order to implement it within our workflow. This final step requires communication and documentation in order to let others know how this works. A recent Design survey among people at our company showed that some of our engineers already pointed out the lack of consistent rules on nomenclatures between design and dev, making this project in line with other team’s expectations. We will properly integrate this new process within our team and will think of the best way to share something generic outside our organization.

By the time we published this article, the design team could connect our color and font styles through a set of tokens and [publicly published](https://design.buzzvil.com) online thanks to the amazing [Zeroheight](http://zeroheight.com) platform. Our icon set is being converted into XMLs from Figma, sharing common conventions and updated according to our design.
