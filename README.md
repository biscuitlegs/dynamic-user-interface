# Dynamic User Interface

## About

Contains a dropdown menu, a mobile menu and an image slider.

## Documentation

### Dropdown Menu

#### Description

A menu that displays/hides navigation links when clicked.

#### Use

- Create a container `div` with a class of `dropdown-container`.
- Create a `button` inside the container that will toggle the menu when clicked and give it a class of `dropdown-button`.
- The `button` can optionally have an icon of your choosing on it's far right. Nest the icon inside the button and assign it a class of `dropdown-icon`.
- Create a `ul` element inside the container to hold all of your navigation links. Give it a class of `dropdown-list`.
- Create a `li` element with a nested `a` element for each of your links. Nest them inside of the `ul` element.

### Material Menu

#### Description

A circular button that displays/hides navigation links when clicked.

#### Use

- Create a container `div` with a class of `material-container`.
- Create a `ul` with a class of `material-list` and `collapsed` inside of the container.
- Each item inside this list acts as a naviagtion link. You should format an item as a `li` element with a nested `a` element and an icon of your choice inside of the `a`.
- Create a button with a class of `material-expand`. This is the button that will show/hide your links when clicked. You can nest an icon inside of this button if you wish.

### Image Slider

#### Description

A slider that cycles through images. You can click a button to go to the next or previous image, or click a dot to go straight to a particular image. **You must have exactly 3 images in the slider**.

#### Use

- Create a container `div` with a class of `slider-contaier`.
- Add your three images(`img`) of choice inside the container div. Each image should have the classes `slider-image` and `hidden`. Set the images' `data-img-id` attribute to 1 for the first image, 2 for the second and 3 for the third.
- Create a div with a class of `slider-arrow-buttons`. Create two buttons inside, one with a class of `left` and one with a class of `right`.
- You can place your own icons inside these buttons.
- Create a div with a class of `slider-dot-buttons`.
- Inside create a button with a class of `left`, another with a class of `middle` and another with a class of `right`. The first button should have it's `data-dot-id` attribute set to 1, the second button to 2 and the third button to 3.
