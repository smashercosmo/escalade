Module has been changed completely from prev versions.

In order to tackle using multiple components on one page we have moved most of the config into a init function that you will call in your `componentDidMount()`. This does also return a promise

Here is a reference guide for power review [here](http://help.powerreviews.com/Content/Platform/JavaScript%20Reference%20Guide.htm). If you want to add any of the aditional config just pass through an object to the config prop with the key being the prop and value being whatever you want to pass through (example below).

For feedless product look [here](http://help.powerreviews.com/Content/Product%20Catalog/Feedless.htm).

You can use all of these components `ReviewDisplay`, `ReviewList`, `ReviewSnapshot`, `ReviewSnippet`, `WriteReview`.

`ReviewDisplay`: is a combination of `ReviewList` and `ReviewSnapshot`.

I recommend testing all of the Review components to figure out which one you want. If you want to edit the style Power Review recommends using a style sheet (like below in config) and targetting the classes. Here is a very nice ui to help you target the classes you want without having to inspect if you prefer to do it this way [here](http://ui.powerreviews.com/navigator/snapshot.html).

```jsx
import {
 PowerReviewConfig,
 ReviewDisplay,
 ReviewSnippet
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
		ReviewSnippet: `pr-reviewSnippet`,
		ReviewDisplay: `pr-reviewDisplay`,
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
    <ReviewDisplay />
   </div>
   <div>
    <ReviewSnippet />
   </div>
  </div>
 )
}
```
