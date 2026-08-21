![markdown](./img/markdown.png)
## What To Put in Your Documentation?

Writing good documentation starts with what you are solving. You have to include why this is important and why should the user care. Writing documentation helps the writers really learn the material that they are covering as well as helping others learn about the topic. Writing documentation is essential for explaining concepts and techinical solutions. This makes missing crucial points have a disasterest effect on your learning. People without the skill of writing documentation will not be able to translate technical concepts into normal english, for they will have difficulty with finding jobs and opprotunities.

Staring out with software documentation it is important to include 6 important details that is outlined in the article [The Art of Writing Good Documentation](https://medium.com/analysts-corner/the-art-of-writing-good-documentation-6e4ce4cd3126). These 6 details are
- context of the problem being solved
- broad idea of the changes you are making
- decisions that were made
- consequences of actions
- the history of the software
- (most important) **Things that will hurt you if you forget them.** 

Once you illustrate and convey these ideas you will have documentation that you can use as a reference. There is not a specific order to this but this is an outline of how you could start writing your own documentation.

## How To Manipulate the Text

On the technical side, documentation is mostly written in markdown which is an easy file type that can manipulate how text is presented. Additionally you can write markdown documentation in an editor like Visual Studio Code, notepad, or really any text editor that takes markdown. A great part about markdown is that when you use an app to help write notes and documentation, and everything stays local on your computer and not in a random cloud datacenter. For now, I use Zettr as my markdown editor because it makes every thing every easy to create with tabs and whatnot. Also, I like to use images as a thumbnail for my documentation and to do that I drag and drop the image onto the document that I am writing in. It will add the image in and I just put all of those images into a folder called "img". Each subfolder gets an "img" folder to house there own images.

***Very Important that you press Ctrl + S to save all your work so that you don't lose it!!!***

Markdown has many annotation or syntax types that manipulate the text. This is being provided by, [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/). To display the syntax without the markdown displaying the final result, you have to add a backslash beforehand. **Do not use a backslash unless you want to see every symbol you write.** Some common markdown syntax to get you started are:

- Imbed quotes use \[Anchor Text](URL)
- Italic \*italic*.
- Bold \*\*bold\*\*.
- Bold & Italic \*\*\*both\*\*\*. 
- Lists are \- item 
- Headers \#Title 
- Heading \# heading  (h1) /## is h2 and so on
- Blockquotes is \> blockquote
- Code blocks \`code\`  `code`

There is also many more like email footers, blockquote imbeds and other cool headings you can do markdown but these are easy to get started. You can see more in the linked article.

## How To make Your Documentation Compatible with Docusaurus?

Docusaurus is a great way to start having a documentation website in minutes. This tool provides all the code so that you can get busy writing your own text without the hassle of creating your own site. Docusaurus has "front matter" which is the [[MetaData]] for your document. People can write tags, custom slugs, Id's and so on. 
```
---
tags:
  - Releases
  - docusaurus
---
```
While this is great to have, you don't actually need it to work with Docusaurus. This is an addition for people that want to have more customizations. Any .md file will work with Docusaurus. So to answer the title question, there is nothing specfic that you need to do to make your markdown files compatible with docusaurus. 