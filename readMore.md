# Responsive Positioned Elements Jquery Plugin

This is a simple plugin that makes the absolutely positioned elements inside it's positioned parent. It can be helpful when making a set of positioned elements responsive.

## How to use ?

All you have to do is call the plugin on the parent element of the absolutely positioned elements. The parent element must be relatively positioned. You can pass a max-width and a max-height parameter in the plugin. Else the default width and height of the parent element given in the css will be used.

```
$('parent element selector').resize_positioned({
				maxWidth:1300,
	    		maxHeight: 550
		});

```

### To do tasks for the next release

Right now the child elements should be placed using percentage value. In the next release users will be able to use pixel values.