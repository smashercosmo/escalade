Module has been changed completely from prev versions.

In order to tackle using multiple components on one page we have moved most of the config into a init function that you will call in your `componentDidMount()`. This does also return a promise

Here is a reference guide for power review [here](http://help.powerreviews.com/Content/Platform/JavaScript%20Reference%20Guide.htm). If you want to add any of the aditional config just pass through an object to the config prop with the key being the prop and value being whatever you want to pass through (example below).

For feedless product look [here](http://help.powerreviews.com/Content/Product%20Catalog/Feedless.htm).

As of version 1.1.0 it is recommended to use your own div with a custom id name. This way you can pass whatever id you want and will future proof the module if power-reviews comes out with more components. You will need to use the correct components still however. [Here](http://help.powerreviews.com/Content/Platform/JavaScript%20Reference%20Guide.htm#kanchor60) is a list of the components you can use. Make sure you spell them correctly with case in mind. If not you will get a warning in the console and your component will not render.

Note: This will not break previous builds if you were using the default exported components. If you are using them just make sure to use the correct id name as well.

I recommend testing all of the Review components to figure out which one you want. If you want to edit the style Power Review recommends using a style sheet (like below in config) and targetting the classes. Here is a very nice ui to help you target the classes you want without having to inspect if you prefer to do it this way [here](http://ui.powerreviews.com/navigator/snapshot.html).

```jsx
import {
 PowerReviewConfig,
 } from "react-power-reviews"

// Here is an example from a project

componentDidMount() {
 PowerReviewConfig({
  	apiKey: `Your Api Key`,
	merchantGroupId: `Your merchant Group Id`,
   	merchantId: `Your merchant Id`,
	pageId: id,
	config: { style_sheet: powerReviewStyles },
	components: {
		ReviewSnippet: `myCustomSnippetId`,
		ReviewDisplay: `myCustomDisplayId`,
   	},
	review_wrapper_url: `/write-review?page_id=${id}`,
   	// this is for feedless, reference power-reviews docs
	product: {},
	init: () => {
		// if you want to edit anything do it here, everything will be loaded before this function is called
	},
 })
}

// in your render just call the components

render() {
 return (
  <div>
   <div>
    <div id="myCustomDisplayId" />
   </div>
   <div>
    <div id="myCustomSnippetId" />
   </div>
  </div>
 )
}
```

Gotchas

## Multiple snippets on a page

Example:
You have some related products on your product page and you want to show a snippet to show the star rating of those products. You cannot make a seperate component and just render in a new config.

```jsx
export default RelatedProducts extends Component {
 componentDidMount(){
  // configHere
 }
 render(){
  return (
   <Fragment>
    <div id="snippet-1" />
    <div id="snippet-2" />
   </Fragment>
  )
 }
}
```

This will not work. It will override the prev config and render only what was configured last. Power reviews has a fix for this, but we went ahead and did most of the heavy lifting for you.

This will be using a seperate component called `CategorySnippet`, not the same thing as the `ReviewSnippet` and therefore you will not need to worry about passing in the main product-id unless you are using the `CategorySnippet` for that.

You will need to get a list of all your product's ids that you want to have a snippet on the page.

```js
const ids = [`1`, `2`, `3`]
```

Then you will need to attach this to your config in this exact way.

```jsx
//...
componentDidMount(){
 let config = { ...normalPowerReviewConfig}

 // use this exact key
 config[`categorySnippets`] = {
  // This is the base id of the div that you will use
  id: `customId`,
  snippets: ids
 }

 PowerReviewConfig(config).catch(err => console.log(err))
}
```

Now to render these out you will use the base id you provided and append a `-` with the `id` right after like so:

```jsx
render(){
 return (
  <Fragment>
   <div id="customId-1" />
   <div id="customId-2" />
   <div id="customId-3" />
  </Fragment>
 )
}
```

Each of these will now render that product's snippet. You would want to have a seperate comp or some way of dynamically being able to pass in the id's though. For example:
`<div id={`customId-${id}`} />`

If you do not see your content being rendered then you are most likely rendering the PowerReviewConfig twice and overriding it somewhere.
