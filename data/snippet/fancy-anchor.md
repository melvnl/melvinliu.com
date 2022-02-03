---
title: Fancy Anchor
slug: fancy-anchor
description: You probably need to refactor that deep nested conditional if-else statement.
---

# Fancy Anchor

### Description

My favorite link animation when hovered

### Example

![Fancy Anchor](/static/images/snippet/fancy-anchor.gif)

### Code

```javascript

/* fancy hover effect for anchor tags */
.fancy-anchor {
  text-decoration: none;
  position: relative;
  color: rgba(225, 98, 89, 1);
  transition: 0.25s;
  box-shadow: inset 0 0em transparent, inset 0 -0.1em rgba(225, 98, 89, 1);
}

.fancy-anchor:hover,
.fancy-anchor:focus {
  color: rgba(107, 31, 25, 1);

  box-shadow: inset 0 0em transparent, inset 0 -1.1em rgba(178, 93, 87, 0.25);
}

```
