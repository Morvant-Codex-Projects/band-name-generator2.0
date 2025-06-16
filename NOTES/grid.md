# Grid

### Specifying columns

- `grid-template columns` is used to specify the number and size of columns
- `1fr` represents the size of 1 column
- Use a space to separate the columns

```css
grid-template-columns: 1fr 1fr 1fr;
```

- change the size of the columns by changing the number
- `2fr` resents a column that is 2x the size of `1fr`
- `3fr` represents a column that is 3x the size of `1fr`

### customizing item sizes

- `grid-columns` specifies how many columns an item should span (stretch)
- `span` specifies the number of columns:

```css
grid-column: span 2;
```

- `grid-row` specifies how many rows an item should spread over (span)
- `span` specifies the number of columns:

```css
grid-row:span 35;
```