- Book 1: Every Story has a beginning - ain't that boring with this one ...

Welcome! I hope you enjoy reading my code-book :love_letter:

- Chapter 1.script: Bootstrap

In the beginning of every `webpacked` project is the entry point: [index.tsx](#Entry-Point "save:")

## Entry Point

In reality we all know there's nothing to say here, generated stuff only ...

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

import './index.sass';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
```

One might want to quote the generator for the `serviceWorker` stuff
If you want your app to work offline and load faster, you can change `unregister()` to `register()` below. Note this comes with some pitfalls. Learn more about service workers: [here](http://bit.ly/CRA-PWA) 

```tsx
serviceWorker.unregister();
```

- Chapter 1.styles: Base CSS Settings

As it stands, from a devs' POI stylesheets might be less intellectually challenging than script.
Not so with this very bootstrap section.

I'm using my own little clone of a ITCSS-framework I dubbed `prudencss`. :smirk_cat: 
Bootstrapping styles means setting all the abstract/generic `vars` and feels quite powerful or so ...

[index.sass](#Enter-Awesome-Stylesheets-with-wannabe-prudent-ITCSS "save:")

## Enter Awesome Stylesheets with wannabe prudent ITCSS

First, we can find the *spec-desired font* `Ropa Sans` in here.
I figured you don't mind if I add two more fonts for a 'stylish' accent.

Then on we go to defining default colors and fonts for use with the imported `css-framework`.
Of course we `tilda-import` the node-module as well here.

```sass
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,400,400i,700,700i|Montserrat|Ropa+Sans:400,400i')
@import '~sass-less-material-colors'

$f-font-family__primary: 'Ropa Sans', sans-serif
$f-font-family__secondary: 'Montserrat', sans-serif
$f-font-family__accent: 'IBM Plex Sans', sans-serif

$f-color__brand-primary: material-color(lime, 50)
$f-color__brand-secondary: material-color(purple, 50)
$f-color__brand-accent: material-color(lime, 200)

$f-color__brand-theme-type: "dark"

$f-color__neutral-primary-bg: material-color(deep-orange, 800)
$f-color__neutral-secondary-bg: material-color(deep-purple, 800) 
$f-color__neutral-accent-bg: material-color(teal, 800) 

@import '~@prudencss/sass'
```

- Chapter 2: Main App Kickoff 

As you might have guessed we got a nice `App.jsx` going on here! :kissing_smiling_eyes:
[App.tsx](#Fast-Lane-Forward-or-No-Routing-Required "save:")

## Fast Lane Forward or No Routing Required

I'll setup a basic demo App with a `FlexContainer-Wrapper`

I thought it nice to `default export` all `components` via `index-files`,
and access 'em in a namespace, so I can easily co-import the required `Props-Definition-type/interface`.

```tsx
import React from 'react';

import FlexContainer from './components';
import Carousel from './components';
import { fetchImgs } from './HTTPService.ts';

const carouselProps: Carousel.IProps = {
  src: fetchImgs,
};

export default class extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <FlexContainer.Component>
                <h3>Carousel Test</h3>
                <Carousel.Component {...carouselProps} />
            </FlexContainer.Component>
        );
    }
}
```

