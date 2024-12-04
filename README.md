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
I gained a deeper understanding of how industrialization transformed American society during the 19th century, particularly through the lens of New England's textile mills. The research helped me appreciate the economic and social impacts of the factory system and the significant role played by the Lowell Mill Girls.  

In terms of web development, I learned how to structure a multi-page website using HTML, CSS, and JavaScript. I experimented with different layout designs, refined my CSS skills, and enhanced my ability to create interactive elements with JavaScript. This project has been both a technical and educational journey, combining my interests in coding and history into a single creative output.
