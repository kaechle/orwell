import { marked } from "marked"

const data = require("./data.json")

export default () => ({
  data: require("./data.json"),
  body: `# Welcome to Markdown
  //
  //   Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
  //
  //   ## How to use this?
  //
  //   1. Write markdown in the markdown editor window
  //   2. See the rendered markdown in the preview window
  //
  //   ### Features
  //
  //   - Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
  //   - Name and save the document to access again later
  //   - Choose between Light or Dark mode depending on your preference
  //
  //   > This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).
  //
  //   #### Headings
  //
  //   To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.
  //
  //   ##### Lists
  //
  //   You can see examples of ordered and unordered lists above.
  //
  //   ###### Code Blocks
  //
  //   This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:
  //
  //   \`\`\`
  //   <main>
  //     <h1>This is a larger code block</h1>
  //   </main>
  //   \`\`\``,
  markdown: "",
  settings: marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  }),
  convert: marked.parse()
})