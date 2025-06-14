  const navbar =`<nav>
     <a href="brand-name-generator.html">Band Name Generator</a>
     <a href="Image-Gallery.html">Image Gallery</a>
     <a href="grid-layout.html">Grid</a>
  </nav>`;

// GET THE HEADER ELEMENT
const header = document.getElementById("header");
header.innerHTML = navbar;

// INSERT THE NAVBAR INTO THE HEADER
header. innerHTML = header. innerHTML + navbar;