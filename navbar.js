  const navbar =`<nav>
      <a href="index.html" class="bg-red-600" >Home</a>
      <a href="pokemon.html" class="bg-red-600">Pokemon</a>
      <a href="Image-Gallery.html" class="bg-red-600">Image Gallery</a>
      <a href="flexbox.html"class="bg-red-600" >Flexbox</a>
       <a href="tailwindFlexbox.html" class="bg-red-600">Tailwind</a>
  </nav>`;

// GET THE HEADER ELEMENT
const header = document.getElementById("header");
header.innerHTML = navbar;

// INSERT THE NAVBAR INTO THE HEADER
header. innerHTML = header. innerHTML + navbar;