# My UnEssay Project
> [!NOTE]
> This is a College Project assigned by Professor Brinton.

## What is this Project?
My UnEssay Project is compiled of a bunch of JavaScript, CSS, SCSS, and HTML Files to compose a website. This website aims to be a informational blog/encyclopedia page about the *Mill Systems of New England* and include a special note about the *Lowell Mill Girls*. 

## How does this Website work?
An amazing question. This website mainly runs off of pure CSS and a little bit of JS. 
```javascript
$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});
```
That code excerpt is from the only javascript file that this website runs on. The only function of this JS is the navbar, which operates the open and close buttons on the navbar. 

The rest of the site runs on CSS and HTML. Each section is in its own container, meaning that I can change the style of each seperate container. If I wanted to make one section have bigger text, I can select that section and make the `font-size` bigger. 

## Why did I choose a website?
I chose to make a website, one because I thought it'd be easier than writing a 10 page essay lol, but mainly because it's a fun way to learn more about the Mill Systems. I love to code in my freetime, so why not code for a purpose. That's the main reason I chose to do this. 

## How did I make this?
> [!WARNING]
> I am about to get very nerdy.

To start off, I always like to make a layout, meaning I start to code the basic structure and leave placeholders where necessary.
So, for example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>AMH2010 | UnEssay Project</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <nav>
            <ul>
                <li>Page Link</li>
                <li>Page Link</li>
                <li>Page Link</li>
                <li>Page Link</li>
            </ul>
        </nav>
        <section id="one">
            <h1>placeholder</h1>
            <p>
                [PLACEHOLDER]
            </p>
        </section>
        <!-- More things would go past this (more sections, images, etc.) -->
    </body>
</html>               
```
This is usually my base structure and what I'll code first. What I start with and what I end with are usually extremely different because I can't make up my mind for the life of me. If you're familiar with GitHub you can see my past commits and compare versions of code, it is extremely different. *I have actually changed the entire layout during this project because a week in I decided that I didn't like the way it looked anymore.* 

For styles, I don't usually have a basic structure because it usually depends on how I want the website to look, and that varies. **Here's a section of the main stylesheet:**
```css
.Navbar ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

html {
  box-sizing: border-box;
  background-color: #b4b4b4;
}

#saxophone img {
  width: 100%;
  height:5in;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
}

emphcol {
  color: red;
}

main {
  padding:1%;
  margin-left:10%;
  margin-right:10%;
  background-color: #b4b4b4;
  font-size: 1.7rem;
}

a {
  color: rgb(94, 27, 11);
}

*, *:before, *:after {
  box-sizing: inherit;
}
```
Anything before a `{` is the element declaration. CSS has a bunch of different rules and options, so you can pretty much have a website that looks like anything you want it to (if you have the time and patience to deal with it). 

*As an example, `emphcol` you can see that it doesn't have a color, this is because it isn't a real element. But it is what I use to add an emphasis or note. At the top of the main page is the note `For Professor Brinton`; the `emphcol` element is what I use to make it red, selectively only for that small portion of text.*

## What did I learn?
I gained a deeper understanding of how industrialization shaped American society during the 19th century by researching New England's textile mills and factory systems. I learned that the rise of factories like those in Lowell, Massachusetts, marked a significant shift from agrarian lifestyles to industrialized urban centers. This transformation boosted economic growth and brought about profound social changes. Young women, often called the Lowell Mill Girls, left their rural homes to work in the mills, gaining independence and experiencing a new sense of community. However, this came at a cost, meaning long working hours, strict oversight, and often harsh conditions.

I also discovered how the technological advancements of the time, such as the introduction of steam-powered machinery, significantly increased productivity and established New England as a leader in the textile industry. At the same time, the rapid pace of industrialization led to challenges, such as labor disputes, health concerns, and the need for social reforms. Overall, this research highlighted the complexity of industrial progress: how it drove economic development while simultaneously reshaping societal norms and raising important questions about labor rights and worker welfare.

All in all, I learned a lot from this project. One of the things that stood out most to me was the Lowell Mill Girls and the fact that they only got paid *`often between $2 and $4 per week`*. This stood out to me as much as it did because it was only because of their gender and the fact that they were young. I don't want to spend too much time on the Lowell Mill Girls, but they were very interesting. I learned a lot more about <ins>_who they were, why they worked at the mills, what their life was like in the mills, and their contributions to labor activism and literature._</ins> 


I learned about the early years of the textile industry, how it started, how it evolved, and more. 
> The industry began with <ins>Samuel Slater</ins>, a British immigrant often called the "*Father of the American Industrial Revolution.*"

I found it really interesting that just one man started the explosion of the textile industry in the Americas, using his knowledge of British textile machinery to replicate it and bring it to the United States.
