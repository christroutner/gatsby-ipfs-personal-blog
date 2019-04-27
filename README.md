# gatsby-ipfs-boilerplate

Gatsby.js V2 starter based on the Forty site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

This is a Gatsby starter site. It is originally forked from
the [Fourty starter by HTML5 UP](https://github.com/codebushi/gatsby-starter-forty)
starter site. The [gatsby-ipfs-plugin](https://github.com/moxystudio/gatsby-plugin-ipfs)
has been added to allow the site to be uploaded and served by the [IPFS](https://ipfs.io)
network.

## Preview

https://gatsby-forty.surge.sh

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br/>
`gatsby new gatsby-ipfs-boilerplate https://github.com/christroutner/gatsby-ipfs-boilerplate`

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```
