---
date: 2023-05-25 19:12:00 +0000
slug: oathkeeper
tech: ["App idea", "产品"]
icon: https://s2.loli.net/2023/04/20/EqtvBnmc2RksulV.png
title: "OathKeeper - 记录承诺"
---

## Executive Summary

OathKeeper is a revolutionary mobile app designed to assist users in keeping track of the promises they've made to others. With its seamless integration of AI technology, OathKeeper empowers individuals to efficiently fulfill their commitments and strengthen their relationships. Unlike traditional to-do list apps, OathKeeper places a strong emphasis on collaboration and sharing function, recognizing that promises are never solely individual tasks.

Here's some key features of OathKeeper :

1. Intelligent Promise Capture: OathKeeper leverages AI technology to streamline the promise-logging process. By simply copying and pasting promises into the app, it automatically captures the relevant information from the clipboard. Time, individuals involved, and priority are intelligently extracted, ensuring promises are promptly recorded.
2. Efficient Promise Management: With OathKeeper, users can easily prioritise and screen promises by their status, enabling swift access to recorded commitments. The app's intuitive interface facilitates seamless navigation, allowing users to locate specific promises quickly. Stay organised and effortlessly manage your promise list.
3. Sharing function: OathKeeper recognises that promises often involve multiple people. Users can share their promise achievements to their friends with a beautiful card view.

Target users and why I want to build OathKeeper:

OathKeeper is specifically designed to cater to individuals who frequently make promises to their family, friends, and leaders but struggle to effectively manage them. Whether you often find yourself forgetting commitments or occasionally face the consequences of unfulfilled promises, OathKeeper is a great app which suits you well. Our goal is to help users value their commitments to others and enhance their ability to prioritise and fulfill promises consistently.

## Feature Image

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/1cac5e0b-8811-4e09-ab5d-5459b2396695)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/2ba7255d-ae9d-40d9-81b0-b4425c4d01bc)

## Prototype Report

When users initially launch the app, they are greeted with the home page, which displays a comprehensive list of all the promises they have recorded. Positioned at the top right corner of the page is a Plus icon that enables users to effortlessly add promises with a simple click.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/b234fae3-084b-4715-852b-4a526f5e5a9d)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/6b3c5cd3-6977-4fab-a9a6-adab7108fe8d)

### Complete the promise

The user can click the box on the far right of each promise to indicate that the promise has been fulfilled, and the box will turn blue and be checked.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/dfb1cea4-02f6-4000-923f-2e2e5b900eb5)

### Change the priority

When the user clicks on the second emoji icon, a selection menu pops up, allowing you to select the promise priority you want to set from high, medium, and low. When the selection is complete, the home page displays the specific icon.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/01ca7eb5-3fd0-4672-9078-88f341d9a22b)

### Change the status

status

Users can click on a third icon to change the status of a person, and like priority, a selection window will pop up after clicking on the icon. When the user selects the state, the promise is assigned to a new group and changes the background color to make it easier to distinguish.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/22d257e6-8b51-49b9-968d-970203b77fc6)

### Change the related person

The user can find a button on the far right to toggle the person associated with the promise, and the user can add an optional person by entering the person name.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/57f60071-6884-4b5e-a4d7-a754afa57fdf)

### Calender View

The user can click the calendar icon in the upper left corner to bring up the calendar view, which allows the user to jump through different dates to find previous or future promises.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/d83b25dd-a91b-44cb-bbd6-a930a67af97f)

## Filter

Users can quickly filter Promises by clicking on the top left icon. There are three attributes that can be filtered: priority, status, and person.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/876efce9-1507-4d8a-ab26-f96ea8764140)

## Development Report

The inspiration for developing OathKeeper has been continuously evolving. I initially focused on addressing an everyday problem and aimed to create tools that would assist people in solving this problem. Lately, I have been troubled by my tendency to make promises to my family and friends, only to discover later that I have completely forgotten these commitments or lack the ability to fulfill them. I attempted to use task management software such as Microsoft Todo to record these promises and strive to fulfill them, but unfortunately, I still encountered difficulties in keeping these commitments. The primary reason for this struggle was that I would often mix my personal tasks with those related to others. Consequently, I would prioritize my own needs by default and unintentionally neglect the feelings and expectations of others.

For these reasons, I am motivated to develop an application that primarily focuses on recording and tracking promises. This app will differ from a regular to-do list app in terms of its core purpose, but I still intend to retain some valuable features commonly found in traditional to-do list apps.

The first feature I wish to preserve is the attribute of priority. By assigning a priority to a task, users can effectively determine which promises should take precedence and be completed first. This concept also applies to promises since the nature and significance of commitments can vary. For instance, a promise made to one's family holds higher priority than a commitment to a newly acquainted friend, and a promise made to a trusted friend takes precedence over a commitment to someone with whom one has a strained relationship.

During the design phase, I drew inspiration from the menu options in game design. I envision these options as small windows hovering in the middle of the screen, highlighted by drop shadows to enhance visibility. Diverging from conventional to-do list software, I intend to use three emoji icons and three distinct colors to represent the priority levels of promises.

![Frame 1.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/edd269ba-9641-4f08-bab6-af7b7803e55e)

The second feature I want to retain is the ability to track the status of promises. This feature allows users to quickly identify which promises are currently in progress and which are awaiting action. Similar to the priority attribute, the status feature assists users in effectively managing their recorded promises.

When the status property is toggled, promises will transition into a different group with a distinct background color, distinct from the inbox, enabling users to differentiate between different stages of completion.

![Frame 1 (1).png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/fcca583d-b874-4401-8381-61ba34f248f7)

![Frame 1.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/9f2bcda5-ca27-45f0-bc95-5d87fc455ded)

Since a Promise involves at least two individuals, I have introduced a distinct property in the app known as "person." This feature allows users to associate promises with specific individuals, helping them remember the recipients of their commitments. The Person window retains a similar design to the aforementioned sections, and users have the flexibility to customize this property by uploading the names and avatars of the individuals involved. The person attribute holds significant importance within the app's design as, without a specific recipient or object, a promise would lack meaning and purpose. Consequently, I have separated the "Person" attribute from other properties to emphasize its significance.

![Frame 1.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/802eb0ed-ca67-4021-86d6-b49bbcc8b52a)

![Frame 1 (1).png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/ff5c2c72-5ae0-434b-8258-b40c8d99e3c8)

I've been trying to figure out how to better use AI in software, so I've been talking to friends around me, setting up online surveys, and asking for advice in personal blogs to find out which scenarios people are most likely to commit to. Here's what I've come up with:

- Social Media
- By words
- In mind
- During writing
- During taking part in work

These scenarios cover almost every aspect of social life, so I think it is possible to use AI to better break down social conversations into machine-readable sentences to quickly capture promises. So I started my experiment using ChatGPT's api. At first I gave ChatGPT explicit instructions to help me capture dates, people, and promised things in a sentence, but the results were inconsistent each time. prompt was rewritten with AI playacting, and the result was as follows:

`You will play a secretary to the CEO of a company. Whenever you receive a task, you need to break it down into four parts. The first part is the time of the task(date, week, year), the second part is the name(person's name) that appears in the task, the third part is what the task needs to do, and the fourth part is the urgency of the task(High, Medium, Low). You need to list these four options and reply.`

`Please note:`

`If you can't find the corresponding part in the task, you just need to leave it blank`

`The result of the reply must be: "Time: ,Tack: ,Person: ,Urgency: "`

I tested the stability and generation of the modified prompt, and the results met my current requirements. The following are some screenshots in the Debugging window：

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/6a92845e-848f-4c93-a93d-dce94a91856f)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/1089dfb2-4a54-4711-9546-f5bc7f199803)

With this approach, users can effortlessly create promises by entering text, significantly enhancing their workflow and overall efficiency. At the developer level, integrating AI capabilities enables seamless collaboration between my app and other software, ultimately providing enhanced assistance to individuals striving to fulfill their commitments.

Finally, I have decided to incorporate additional features that enhance the efficiency of finding created promises for users. Through careful analysis, I have identified two methods that can expedite the search process and facilitate a seamless user experience.

The first method involves organizing promises by date, which led me to develop a calendar view. This view elegantly pops up from the bottom of the screen, effectively dividing the screen to present the results. To aid users in distinguishing between past and upcoming months, I have implemented a color change for the respective dates. This visual cue improves clarity and facilitates quicker navigation. Upon selecting a date, a translucent blue rectangle appears above the chosen date, ensuring users can easily identify their selection.

![Frame 1.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/330151ed-db5b-4cd4-8da1-248f9a50f089)

The second method involves filtering promises based on various properties. To accomplish this, I have introduced a filtering feature that enables users to display only the desired properties, expediting the search process for more urgent or ongoing projects. If users are specifically looking for promises related to a particular person, the filtering feature provides an efficient solution.

![Frame 1 (1).png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/842ca4bb-bf0d-4e77-9976-2ed6be8433ee)

## Reflection

During the development of my application, OathKeeper, I have received valuable suggestions on how to enhance its functionality. Taking into account the suggestions provided, I have reflected on the potential improvements that can be made to create a better user experience. Here are my thoughts:

1. How to better use AI technology. Above, I modified prompt to improve the consistency and accuracy of AI, but it didn't reflect the power of AI well. Maybe AI can help users analyze their goals, and divide a large goal into different stages to improve user motivation, because small goals are easier to achieve. I tested the Auto-GPT technology, which can logically break a large goal into achievable smaller goals, which should be my next exploration direction.
2. Intelligent Priority and Reminders: While the existing feature allows users to assign priority levels to promises, I can further enhance the software's intelligence. By analyzing users' historical data and interaction patterns, the software can learn their preferences and automatically assign appropriate priorities to promises. Additionally, incorporating reminder notifications will prevent users from forgetting important commitments, further improving their ability to fulfill promises.
3. Collaborative Promise Management: Recognizing that promises often involve multiple individuals, I should consider incorporating collaborative and sharing features. This would enable users to manage and track promises together with others. By allowing users to share specific promises, assign tasks to team members, and facilitate real-time collaboration and discussions, the software can foster effective teamwork and ensure timely fulfillment of commitments.
4. Data Statistics and Analysis: To assist users in managing their promises more effectively, I can introduce data statistics and analysis functionality. The software can generate reports and charts that display users' promise trends, completion rates, and time distributions. This valuable information will enable users to gain insights into their promise patterns, empowering them to make necessary adjustments and improvements.

# Appendix A – Design Logbook

## Initial Ideas

- The app to help people do decisions and predictions
   - Users can enter a decision or prediction into the APP and enter the date of the decision made and the date that the outcome of the decision will appear
      - The date of the decisions can be record by app automatically
      - The date that the outcome of the decision appear can be input by users
   - Users can also enter evidences that the decision is likely to succeed and risks that the decision is likely to fail
      - Evidence-based predictions can help users better control the judgments they make
      - Writing down the risks of failure can help users better examine the inadequacies and biases of their decisions
   - When the results of the decisions or predictions appear, the user can set the accuracy of his performance, such as 60% or 4/10
      - After more than 10 predictions, users can track all his predictions in one place
      - A series of data diagrams show
         - How the average accuracy of user decisions changes from month to month
         - How many evidences has been proved compare with those non-proved one
- The app to help people record their promise to friends, leaders and people who cares about them
   - The idea behind this app is that I often don't schedule my time when I make promises to my friends
      - As a result, I often can't juggle my own projects with those of my friends
   - The app works much like a todo list or project management software
      - But the user experience is optimised for the promise feature
      - The first thing I need to understand is how promises differ from todo
         - Promises need to have an object
            - Give the user a sense of responsibility
         - Promises are easy to ignore
            - Because the promise is not to the user himself
         - Users need a reason to fulfill their promises
      - The user has a requirement to record the promises and reflaction they made
         - How to make users record their promises easier?
            - Promises has their own feature and structure
               - Someone promise something to someone
            - Ability of AI

> Summer Term - Week 1

Thinking about the way the product works and the people it's facing. I think I should start with some problems I have encountered in my life. One of the problems I have encountered recently is that sometimes I make too many commitments and cannot complete them on time. I wonder if I can use AGI technology to keep track of commitments made at each location more quickly.

Actually such as [https://lightforecast.com/](https://lightforecast.com/) can meet the demand of a small product is my target now.

For example, promising someone on social media, "I'll put together a note this weekend to help you sort through this knowledge," Use the GPT-3.5 api to reframe promises into commitments (organize a note for the relevant point), time (by the end of the week), and context-specific tasks (review the point -- take outline notes -- organize into easy-to-read notes -- add examples and graphics).

> Summer Term - Week 1

Is task dismantling the most important feature that the prototype needs to implement?

Some of the techniques I can think of that need research:

- GPT-3.5 api
- Auto-GPT（Ability to disassemble tasks）
- how to write a prompt that are easy enough to use

> Summer Term - Week 2

Chatting with friends, I gathered some application scenarios:

- Social Media
- By words
- In mind
- During writing
- During taking part in work

The effectiveness and urgency of promises vary in different situations, as does the willingness to fulfill commitments made to lovers, friends, mentors, and bosses.

Commitment targets may be an important measure of commitment priority.

If I temporarily use notion as the temporary background for the prototype, the form collection should be transferred to database. How can I get the AI to fill in the form?

> Summer Term - Week 2

The structure of a promise:

- Time
- Priority
- Person
- Possible steps to achieve promises (AI generation, for reference only)

How do you put these elements together on cards?

Whenever a user completes a promise, it can share the card via social media or just print it out. A promise is a task that connects two people, so users need a sharing feature to share their completed promises with them.

Also, the feature can also show users how many promise they have been completed. It can give them more power to finish the other.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/ce165c9e-3665-4a59-8587-115e64226c18)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/d6a35fab-6d75-4665-86d1-98559c36e8db)

> Summer Term - Week 2

Since I thought of cards last time, can I also add the function of printing cards

- Because I'm a big fan of writing cards and posting them on a big board, it seems to motivate me to work on them and sometimes get me into the problem solving process faster. (Attached is a picture of a desktop Kanban.)

> Summer Term - Week 3

> If we think about a good pair of gloves, it's immediately obvious how we should use them. They're hand-shaped! We put them on our hands. And the specific material tells us more: metal mesh gloves are for preventing physical harm, rubber gloves are for preventing chemical harm, and leather gloves are for looking cool on a motorcycle.

A good tool should be able to articulate how they should be used and, more importantly, how they should not be used.

from [Why chatbots are not the future?](https://wattenberger.com/thoughts/boo-chatbots)

Some takeways on how to make AI into software:

> LLMs make it too easy: we send them text and they send back text. The easy solution is to slap a shallow wrapper on top and call it a day. But pretty soon, we're going to get sick of typing all the time. If you think about it, everything you put in a prompt is a piece of context .

LLMS are not the same as automation in the past, because there is some uncertainty about how to scale the context. Even if the AI were capable of thinking like a human, it would be impossible to predict whether the conversation would stray too far off topic and get completely out of control (which happens a lot in human conversation). Wattenberger writes:

> Automating tasks is going to be amazing for rote, straightforward work that requires no human input. But if those tasks can only be partially automated, the interface is going to be crucial.

AI has the following advantages as an automated tool :

- Ability to complete tasks previously impossible to complete with automated tools (ability to split tasks by yourself, no need to manually set)
- Higher intelligence than ordinary automated tools

AI has the following disadvantages as an automated chemical industry :

- The AI's behaviour becomes uncontrollable as the prompt changes
- AI is less accurate which similar to humans

AI should not be chatbots, but a tool to make more subtle changes for different situations. For example, the software OathKeeper I conceived should apply AI beyond the chat function, rather than capture information through the form of chat. Since the AI's accuracy is low, I may need to place some restrictions on the AI to make the results it produces logical and structured.

> Summer Term - Week 4

Created a mood-board to record some of my visual level inspirations:

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/5e8e6f18-20fe-440b-85a6-5b26b070134f)

> Summer Term - Week 4

The design system was established by figma, which is of great help to the unity of the visual style and components of the software. The elements that need to be unified are as follows:

- Colours used in the app
- Logo design
- Text fonts used in the app
- Icons used in the app

Here is my design system pdf with some pictures, please download the pdt to view more :

[Design System.pdf](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/d7c50d00-c4d7-40cb-b6ca-3d4ecd06dc36)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/9bd18c85-3d6e-49b3-94b8-1963f71ab44c)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/6fa19806-fa48-4d77-b3cc-99a381ad1a82)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/fd34607d-4087-4683-93e2-c66ff8e417e5)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/855f1251-b9ba-452b-8eec-5b936e30193d)

> Summer Term - Week 5

Design the prototype in the figma and made a simple code structure.

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/361ce72e-805f-47d2-addf-8e662d0cef68)

> Summer Term - Week 5

Do some main page view design and introduction

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/b234fae3-084b-4715-852b-4a526f5e5a9d)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/22d257e6-8b51-49b9-968d-970203b77fc6)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/57f60071-6884-4b5e-a4d7-a754afa57fdf)

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/01ca7eb5-3fd0-4672-9078-88f341d9a22b)

The above is my idea before creating an interactive prototype. I added three attributes to the promise:

1. status
2. person
3. priority

Next, the user can filter these attributes to find the Promise more quickly. That way, they can see what they're promising and what they're promising.

> Summer Term - Week 5

I need to write a Prompt so that the AI can correctly recognize the promises entered by the user and divide them into different attributes to enter into the app.

The Prompt I write:

`You will play a secretary to the CEO of a company. Whenever you receive a task, you need to break it down into four parts. The first part is the time of the task(date, week, year), the second part is the name(person's name) that appears in the task, the third part is what the task needs to do, and the fourth part is the urgency of the task(High, Medium, Low). You need to list these four options and reply.`

`Please note:`

`If you can't find the corresponding part in the task, you just need to leave it blank`

`The result of the reply must be: "Time: ,Tack: ,Person: ,Urgency: "`

The reason why I wrote this prompt above is that I need to give the AI an identity to enable him to work more accurately. With this background, the AI can understand the tasks you give him. The next step is to describe exactly what you've given him, and make some comments to help the AI understand what you want the result to be.

Finally, you need to test the output of the AI to make final tweaks, and if the output the AI gives you is not what you want, you need to add some rules to optimise the AI.

Here is an example of input and output given by AI :

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/a844f0ff-80f1-4992-a27c-195fd805d77f)

When the AI breaks the promise into four attributes, we can quickly enter a complete task with attributes into the App.

This way users can make promises quickly in the app without having to fill in every property. Each time a user enters the app, the system automatically captures the user's clipboard. As long as the user agrees to the paste, the AI will automatically run to generate the promise.

> Summer Term - Week 5

![image.png](https://res.craft.do/user/full/bb1f1b65-d420-da35-7488-c798ce4903f4/doc/3170bfa9-5bfa-40e3-9478-8fc858f089eb/14751402-9642-4643-98bc-afe07415428a)

