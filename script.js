const searchInput = document.querySelector(".search-input");
const answerTag = document.querySelector(".answer-tag");
const tagCount = document.querySelector(".tag-count");
const sideBarExpand = document.querySelector(".side-bar-expand");
const explorerBar = document.querySelector(".explorer-container");
const memoryTest = document.querySelector(".memory-test");
const indexHTML = document.querySelector(".index-html");
const memoryTestIcon = document.querySelector(".memory-test i.fa");

const guessedTags = [];

const htmlTags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ];

let arrayNumber = htmlTags.length;
let lineNumber = 1;

searchInput.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        const inputValue = searchInput.value.toLowerCase().replace(/[^a-z1-6]/g, "");
        const index = htmlTags.indexOf(inputValue);
        if(htmlTags.includes(inputValue)) {
            guessedTags.push(inputValue);
            answerTag.innerText += `${lineNumber} ${"<"}${inputValue}${">"}` + "\n";
            htmlTags.splice(index, 1);
            lineNumber++
            arrayNumber--;
            tagCount.innerText--;
        }
        searchInput.value = "";
    }
});

sideBarExpand.addEventListener("click", ()=> {
    explorerBar.classList.toggle("hide-explorer-bar");    
})

memoryTest.addEventListener("click", ()=> {
    indexHTML.classList.toggle("hide-code-files");
})

memoryTest.addEventListener("click", ()=> {
    memoryTestIcon.classList.toggle("rotate-icon");
});

tagCount.innerText = arrayNumber;