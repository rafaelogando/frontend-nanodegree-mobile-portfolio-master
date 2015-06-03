## Website Performance Optimization portfolio project

The challenge was to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).



### Changes on index.html

1. Using local server image files to load them faster.
2. Using a smaller image file for Cam's pizzeria preview.
3. Async Javascript
4. specifing Media for css style sheet.


### Changes on pizza.html

-Getting the "movingPizzas" div outsite the body so parent changes wont afect childs.

-Adding a smaller pizza pic to be used on moving pizzas, wich does't affect visual but improve performance.

-Setting the number of movible pizzas according to screen size, so they wont get too far outside the visible window.

-Reducing the amount of movible pizzas(mover) to only fit inside the visible screen and not below.

-forced synchronous layout on loops was avoided by first reading all movible pizzas phase and them writing all movible pizzas positions.

-Iterates through pizza elements on the page and changes their widths taking as reference defined input case values.  This was a great improvement and forced synchronous layout was removed.


Note: All Files(.html,.css,.js) were not minified to leave them readable for evaluation and because servers mostly minify files automaticly.