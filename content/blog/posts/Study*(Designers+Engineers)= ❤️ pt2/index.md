---
title: "Study*(Designers+Engineers)= ❤️ pt.2"
date: 2019-12-09T11:07:21+09:00
draft: false
featured_image: "/blog/posts/studydesigners+engineers-%EF%B8%8F-pt2/design_x_dev_study_at_buzzvil_pt2.jpeg"
credential: ""
credentiallink: ""
---

We’ve shared a [first story](/blog/posts/studydesigners+engineers-%EF%B8%8F-pt1/) about how we started a study between engineers and designers. The outcome was a lot of fun and a CI pipeline from Figma to Android environment called Phantom Box. This story is about the second act of our study.

This time we’ve decided to pinpoint a problem within our company and try fixing it. It needed to be a small scale project just for us to be incubating the whole development process altogether.

Our company [buzzvil](https://www.buzzvil.com) allows us to order as many books as we’d like and the system to do so is using a Google Spreadsheet. While it works ok to order a book we found interesting to also share what people already ordered, read and liked. This is how Billy project was born.

![](https://cdn-images-1.medium.com/max/2400/0*GDHJGwJQ4rmS7uVu)

## Billy

For this project we’ve had a lot more interested people that joined us. A team of about 10 members covering Design, Client, Front-end and Server started working on this Billy book library service.

Again, learning from our first project, we’ve decided to involve everyone from exploration to deliverable phase of the Design thinking process. The project ran for about 6 months, meeting once a week for lunch for about an hour and half. We will be focusing on the experience itself rather than the outcome.

## The engineer’s point of view — Summer

*Summer ([Seohyun Kwak](https://medium.com/@flyhigh320)) is a Client engineer at buzzvil.*

For this project the number of developers increased and there was much more we could do. We all want to learn new skills, new techniques but active projects usually let us no margins to be experimenting. Billy was a good occasion in that regard. Moreover, when we started Billy, Buzzvil was introducing **micro-services** and it seemed like a good project to experiment on that matter. It’s been a lot of fun for developers to try new technologies. We took the time to learn and then applied these new knowledges. It felt great to freely take the time and explore with no time pressure. Billy project was a study about learning to collaborate with designers, but it was also an opportunity to learn new skills as a developer. So it was funnier and motivating.

As we started Billy in the study we communicated a lot with designers in order to plan it altogether. Since I was involved in the planning stage, I could clearly understand what will compose Billy (micro-services) and what product we’re going to make. It also clarified the context and how we should organize Billy’s structure. When working with product managers and designers, engineers often have to develop things that have already been settled. In this study, we all participated in the planning so we talked a lot about what design requires and what needs to be done on the server side or front end side. It was a great experience.

After planning, we divided the services into book, rental, rating, user, auth service, and frontend. And all the developers designed the api together. It was my first ‘api first approach’, and I thought I should do this more often. Of course, there have been changes from time to time during development, but after sharing the big picture first, the goals felt more tangible. Defining a scope made it very easy to divide things up. We all developed one micro service for each person. As it was a first it took some time to merge these divided APIs within the front end, but we were able to get started quickly.

We introduced React, Typescript, and Storybook for frontend development. Eventually, applying typescript to real products caused a bit of pain, but it was good to introduce react and storybook from the beginning. In particular, with storybook engineer has to start to develop with the smallest components and gradually assemble smaller components to the final view, which is an easy process for multiple developers to work on at the same time. It was also nice to get feedback from designers easily because we could discuss with them component by component before doing the final work.

During the study we talked a lot. It wasn’t chit chat but conversations to get things going. It was motivating process in which the engineer makes a voice and actively participates in the product. I also enjoyed watching the design team developing the design, not just making our product beautiful, but becoming more and more easy to use.

## The designer’s point of view

NOTHING IS SIMPLE! If there is one thing we’ve learnt during this project, it’s that there is nothing simple or easy. What you think can only take a few minutes will take hours and what you think can take a few hours might take days..

What we’ve learnt working closely with frontend engineers is that their system is usually the opposite as our Design approach teaches us. They start building the smallest components to finally compose bigger layouts. Design usually works with an inverted refinement process where getting the big picture helps at first, then refining the components to finally get to macro-level. This difference of process is fine but it sets some time constraints: ideally, the design work should be completely wrapped up, giving the developers both the overall picture and a detailed hands-off on each components that composes it. This also shows even more the benefits of having a solid design system.

## Conclusion and reception

We are currently discussing with our HR and Management team to properly integrate Billy in the book rental process. We need to prepare a clear documentation for further updates and are also considering releasing this service to the public, with a little more effort to make it less specific. We introduced an MVP during DemoDay and the receptions was very positive.

## Takeaways

Nowadays the team is thinking of moving on to eventually start another study.

During our last demo day at buzzvil we introduced our 2 projects and their related takeaways, it received a pretty warm welcome from the rest of our company.

Aside the fun time, we’ve learnt a few things that, left alone, are already worth the experience.

1. **Involving the entire mission team from the beginning is important as it makes everyone invested in the project**. The research and definition phase are keys for the team to become aware of the context and to what needs to be solved. If the whole team identifies the problems as a group the feeling of involvement is real. The research phase on the other hand gives background to the whole team in order to identify the keys for solving these problems later in the process.

2. Design and Dev have too much interaction and things in common to be setting conventions independently. If you actually want long lasting and effective conventions, creating a short Task Force (or short-ended team) including both engineers and designers is necessary. It is honestly not requiring this much of time to adjust if you already have solid conventions on both sides.

3. Designers don’t have to be engineers and reciprocally, but **having a great understanding on each side is mandatory**. For this there are many ways to get there but we found **direct communication and co-work** one of the best approach so far.

4. There are a lot of insights for both fields to be learning from such study. Recent design approaches such as Atomic design systems are highly inspired from how things work in object oriented coding structure. Similarly Design thinking process is a pretty healthy method for engineers to follow as well when working on architecture designs.
