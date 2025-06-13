# Javascript

## Defer

- Add `defer` to `<script>` run only after the page loads. This is useful when the script needs an element and does something like `document.getElementById("myId")'

```html
<script src="imageGallery.js" defer></script>
```

## Functions

- After defining a function, activate by calling it by its name and adding parentheses

```javascript
function myFunction() {
    console.log("Functions must be activated!");
}

myFunction(); //ACTIVATES THE FUNCTION
```

## Navbar - single source of truth

1. Create `navbar.js`
2. Copy the navbar html code to `navbar.js`
3. In `navbar.js`, convert the html to Javascript
   - Put backticks around the html to convert it to a string
   - Save the string in a variable like `navbar`
4. Put an id on the `<header id="header">`
5. In `navbar.js` select the header
6. Insert the navbar into the header `header.innerHTML=navbar`
7. In the html file, add `<script>` to the `<head>`
8. Defer the script until all the elements have rendered

```html
<script src="navbar.js" defer></script>
```
