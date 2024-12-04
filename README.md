# My UnEssay Project
> [!NOTE]  
> This is a College Project assigned by Professor Brinton.

## What is this Project?  
My UnEssay Project is composed of several JavaScript, CSS, SCSS, and HTML files that work together to create a website. The website serves as an informational blog or encyclopedia about the Mill Systems of New England, with a special focus on the Lowell Mill Girls.

---

## How does this Website work?  
This website relies mainly on CSS for styling and layout, with minimal JavaScript for functionality.

### JavaScript:  
The JavaScript file is responsible for handling the interactivity of the navigation bar.  
Here's a breakdown of the JavaScript code:

```javascript
$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});
```

- `$('#toggle').click(...)`: This line listens for a click event on an element with the ID `toggle`.
- `.toggleClass('is-active')`: Adds or removes the class `is-active` to toggle the visibility of the navbar.
- `$('#navbarCollapse')`: Selects the navbar element to apply the toggle effect.

---

### HTML Structure:  
I started by building a basic HTML structure to form the skeleton of the website. Here is a simplified version:

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
        </ul>
    </nav>
    <section id="one">
        <h1>Placeholder</h1>
        <p>[PLACEHOLDER]</p>
    </section>
</body>
</html>
```

- `<nav>`: Contains the navigation links for different pages.  
- `<section>`: Holds the main content of the page.  

This structure allows for flexibility in design and easy modifications as I work on different sections.

---

### CSS for Styling:  
I used CSS extensively to style the website and create a consistent layout across all pages. Below is an excerpt from the main stylesheet:

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

main {
  padding: 1%;
  margin-left: 10%;
  margin-right: 10%;
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

- `.Navbar ul`: Removes the default list styling and applies custom padding and margins.  
- `html`: Sets a global background color and defines the box-sizing model.  
- `main`: Styles the main content area with padding, margins, and font size adjustments.  
- `a`: Changes the color of hyperlinks.

---

### Custom Elements:  
I also created custom elements like `emphcol`, which highlights specific text in red to draw attention:

```css
emphcol {
  color: red;
}
```

This element is used for adding emphasis to specific notes or warnings throughout the website.

---

## How did I make this?  
> [!WARNING]  
> Programmer Language Below :D

To build the website, I followed these steps:  

1. **Planning the Layout**:  
   I designed a basic HTML layout to organize the structure of the website.  

2. **Styling with CSS**:  
   I wrote CSS code to define the appearance of each section and ensure the site is visually appealing.  

3. **Adding Interactivity**:  
   I implemented a small JavaScript function to handle the navbar's open and close functionality.  

4. **Testing and Iterating**:  
   Throughout the project, I continuously tested and updated the code to improve the user experience and visual design.

---

## What did I learn?  
From researching New England's textile mills and factory systems, I gained a deeper understanding of how industrialization shaped American society during the 19th century. I learned that the rise of factories like those in Lowell, Massachusetts, marked a significant shift from agrarian lifestyles to industrialized urban centers. This transformation boosted economic growth and brought about profound social changes. Young women, often called the Lowell Mill Girls, left their rural homes to work in the mills, gaining independence and experiencing a new sense of community. However, this came at a cost, meaning long working hours, strict oversight, and often harsh conditions.

I also discovered how the technological advancements of the time, such as the introduction of steam-powered machinery, significantly increased productivity and established New England as a leader in the textile industry. At the same time, the rapid pace of industrialization led to challenges, such as labor disputes, health concerns, and the need for social reforms. Overall, this research highlighted the complexity of industrial progress: how it drove economic development while simultaneously reshaping societal norms and raising important questions about labor rights and worker welfare.
