[![NPM](https://img.shields.io/npm/v/svgbook-icons.svg)](https://www.npmjs.com/package/svgbook-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# SVGBook Icons

SVGBook is an open source library with hundred of thousands SVG Icons. And absolutely free premium icons, no sign-up required. You can browse the full sets of icons at [svgbook.com](https://svgbook.com).

Include popular icons in your React projects easily with [svgbook-icons](https://svgbook.com), which utilizes ES6 imports that allows you to include only the icons that your project is using.

# How To Use
A perfect multi style and multi design icons library made for designers & developers.

## Install

```bash
yarn add svgbook-icons
```

or

```bash
npm install --save svgbook-icons
```

## Usage
Import the icons you need into your React project and declare them in your render method:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ArrowUp, Download, Copy } from "svgbook-icons";

const App = () => {
  return (
    <div>
      <Horse />
      <ArrowUp design="outline" color="#0080ff" size="32" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```
### Props
Default values for the most common props are given below:

Prop | Description | Default
---- | ----------- | -------
`color` | Set the icon color | `currentColor`
`size` | Set the width and height of the svg icon | `24`
`strokeWidth` | Set the stroke width of the icon | `2`
`style` | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the element | `{}`

You can also import the whole icon library like this:

```jsx
import * as Icon from 'svgbook-icons';

const MyComponent = () => {
  return <Icon.ArrowUp />
};

export default MyComponent;
```
### Context
You can also use React Context to make applying a default style to all icons. Create an IconContext.Provider at the main parent react component of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons like this:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Icons, IconProvider } from "svgbook-icons";

const App = () => {
  return (
    <IconProvider
      value={{
        design: "outline"
        color: "0080ff",
        size: 32,
      }}
    >
      <div>
        <Icons.ArrowUp />
      </div>
    </IconProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Author 
Asim Rajput ([@asim_pro](https://twitter.com/asim_pro)), Shahzab Asif ([@MeShahzab](https://twitter.com/MeShahzab)), Saad Amir ([@itxMeSaadi](https://twitter.com/itxMeSaadi))
## License

MIT © [svgbook](https://github.com/svgbook)
