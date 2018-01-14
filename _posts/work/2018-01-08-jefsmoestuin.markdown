---
layout: post
category: work
title:  "Jef's Moestuin"
date:   2018-01-08 00:00:00 +0200
coverimage: /assets/images/previews/jef.jpg
headerimage: /assets/images/headers/jef-header.jpg
summary: An installation for the JEF's medialab in Antwerp.
tag: Installation
team:
  - 'Ruuben Lambrechts'
  - 'Wouter Landuydt'
online: https://github.com/wouterlanduydt/JefsMoestuin/releases
videourl: https://player.vimeo.com/video/250854488
client: JEF - School
---

<span class="post-content-text-subtitle" >Brief</span><br/>
Every year, *JEF festival* hosts a medialab in Antwerp. We had the opportunity to create an *interactive installation* for it.

The theme this year was *cooking*, and our installations should reflect that. We also had to be sure it was kids-proof and accessible for all ages.

<span class="post-content-text-subtitle" >Concept</span><br/>
We started brainstorming about movies that had something to do with food, technologies we could use, games,... and came up with 2 main concepts.

The first was a game where kids could make and mix their own cocktail (non-alcoholic of course). We would use an Arduino and some sensors.

Our second idea was a *"festival garden"*, everyone that visits the festival can plant a seed of their choice by holding it up in the air. *At that location on a projection, a vegetable will start to grow*. We loved the idea that *everyone could easily participate* and make something unique together so we went with this concept.

To track where a seed was hold up we did some *research* on what would be the most reliable tracking method. First we wanted to make little "light-bulb seeds" and track these colors with a Kinect, but unfortunately the colors were too identical. We also experimented with infrared tracking, but in the end we went with *fiducial tracking*. They have one major advantage: no power (and thus the kids can't easily break them). Using a simple webcam we were able to locate where the seed was hold up.

This project we came out of our comfort-zone by not using javascript but *openFrameworks* (c++). It was time consuming to learn some basic openFrameworks principles we already were comfortable with in javascript. But after being very sceptical about this project in the beginning, we are satisfied that it came to a good end.
