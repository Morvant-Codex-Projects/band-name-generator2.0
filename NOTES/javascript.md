# Javascript

### Defer

- Add `defer` to `<script>` run only after the page loads. This is useful when the script needs an element and does something like `document.getElementById("myId")'

```
<script src="imageGallery.js" defer></script>
```

### Functions

- After defining a function, activate by calling it by its name and adding parentheses

```javascript
function myFunction() {
    console.log("Functions must be activated!");
}

myFunction(); //ACTIVATES THE FUNCTION
```
