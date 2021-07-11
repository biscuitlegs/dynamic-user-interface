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
