# Web UI styles

Bootstrap 5 handles page layout and standard controls. This small theme adds the project's colors, typography, and button treatments.

## Shared tokens

Edit [`design/tokens.json`](../../design/tokens.json), then regenerate the CSS variables:

```sh
node design/build-tokens.mjs
```

The generator writes `docs/ui/tokens.css`. It contains colors, type sizes, spacing, radii, and layout width.

## Add these to a page

Load Bootstrap, Bootstrap Icons, the preferred fonts, and then the local token and theme files:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="ui/tokens.css" rel="stylesheet">
<link href="ui/theme.css" rel="stylesheet">
```

Use Bootstrap's grid, spacing, buttons, cards, and form controls. Local helpers include `btn-night`, `btn-night-outline`, `night-eyebrow`, `night-display`, and `night-type-*`.

### Icons

Use [Bootstrap Icons](https://icons.getbootstrap.com/) with its class names:

```html
<i class="bi bi-download" aria-hidden="true"></i>
<i class="bi bi-moon-stars" aria-hidden="true"></i>
<i class="bi bi-people" aria-hidden="true"></i>
```

Icons inherit text color. Use Bootstrap font-size helpers such as `fs-4`, and add `aria-hidden="true"` when the adjacent text already names the action. 

For Bootstrap interactions such as collapse, dropdowns, modals, or accordions, include the bundle before `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```
