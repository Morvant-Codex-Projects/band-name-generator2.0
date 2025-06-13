# Tailwind Installation Explained

## Installation

1. Paste the CDN `<script>` tag from the Tailwind website into the `<head>` of the .html file.
`https://tailwindcss.com/docs/installation/play-cdn`

```html
| <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

1. Add @import "tailwindcss" to a .css file (example: style.css)

2. Add the .css file to the .html file with the `<link>` tag.

```html
<link href="style.css" rel="stylesheet" />
```

1. Install the VS Code extension: Tailwind CSS IntelliSense

### Grid

1. `class="grid"` activates the grid system
2. `class="grid grid-cols-2"` tells the grid system to set up 2 columns for mobile first
3. `class="grid sm:grid-cols-3` tells the grid system to set up 3 columns for small+ devices

### Utility classes

. Font size `text-1g text-x1 text-2x1` [https://tailwindcss.com/docs/font-size]

. Breakpoints `sm: md: 1g:` [https://tailwindcss.com/docs/responsive-design]

. Gaps `gap-3 gap-x-3 gap-y-3` [https://tailwindcss.com/docs/gap]
