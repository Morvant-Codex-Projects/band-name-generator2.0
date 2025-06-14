# Tailwind Installation Explained

## Installation

1. Paste the CDN `<script>` tag from the Tailwind website into the `<head>` of the .html file.
`https://tailwindcss.com/docs/installation/play-cdn`

```html
| <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

2. Add @import "tailwindcss" to a .css file (example: style.css)

3. Add the .css file to the .html file with the `<link>` tag.

```html
<link href="style.css" rel="stylesheet" />
```

4. Install the VS Code extension: Tailwind CSS IntelliSense

### Grid

1. `class="grid"` activates the grid system
2. `class="grid grid-cols-2"` tells the grid system to set up 2 columns for mobile first
3. `class="grid sm:grid-cols-3` tells the grid system to set up 3 columns for small+ devices

### Sizing grid items

- Specify row sizes `grid-rows-5 grid-rows-[repeat(5,100px)]`
- Specify how many rows an item spreads `row-span-2`
- Specify how many columns an item spreads `col-span-2`
  
### Utility classes

. Font size `text-1g text-x1 text-2x1` [https://tailwindcss.com/docs/font-size]

. Breakpoints `sm: md: 1g:` [https://tailwindcss.com/docs/responsive-design]

. Gaps `gap-3 gap-x-3 gap-y-3` [https://tailwindcss.com/docs/gap]

### Animation

- Put animations on the parent element if you want a group of
element to animate together
- Change color on hover `hover: bg-sky-700` https://tailwindcss.com/docs/hover-focus-and-other-states
- Change size on hover `hover : scale-105 transition duration-500`
https://tailwindcss.com/docs/scale
- Change color when an element is clicked `active:bg-sky-300 active:font-bold`

### Dark mode and light mode

Include the color for light mode first, then add the color for dark
mode beside

- To change the mode, go to the
Menu -> Settings -> Appearance ->
Light or Dark
- Change background color based on the mode `bg-gray-50
dark:bg-gray-700`
- Change text color based on the mode `text-gray-700
dark: text-gray-50`
