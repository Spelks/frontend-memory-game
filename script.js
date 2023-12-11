const searchInput = document.querySelector(".search-input");
const answerTag = document.querySelector(".answer-tag");
const tagCount = document.querySelector(".tag-count");
const sideBarExpand = document.querySelector(".side-bar-expand");
const sideBarProfile = document.querySelector(".side-bar-profile");
const sideBarProfileItem = document.querySelector(".side-bar-profile-item");
const explorerBar = document.querySelector(".explorer-container");
const memoryTest = document.querySelector(".memory-test");
const indexHTML = document.querySelector(".index-html");
const memoryTestIcon = document.querySelector(".memory-test i.fa");
const fileMenu = document.querySelector(".file-menu");
const fileItem = document.querySelector(".file-item");
const viewMenu = document.querySelector(".view-menu");
const viewItem = document.querySelector(".view-item");
const helpMenu = document.querySelector(".help-menu");
const helpItem = document.querySelector(".help-item");
const currentDate = document.querySelector(".current-date");
const outputContainer = document.querySelector(".output-container");

currentDate.textContent = new Date().getFullYear();

helpItem.addEventListener("click", ()=> {
    htmlTags.forEach(tag => {
        answerTag.innerText += `${"<"}${tag}${">"}` + "\n";
    })  
})

//Event listeners to show clicked dropdown and hide other open ones
fileMenu.addEventListener("click", ()=> {
    fileItem.classList.toggle("show-file-item");
    viewItem.classList.remove("show-file-item");
    helpItem.classList.remove("show-file-item");
})
viewMenu.addEventListener("click", ()=> {
    viewItem.classList.toggle("show-file-item");
    fileItem.classList.remove("show-file-item");
    helpItem.classList.remove("show-file-item");
})
helpMenu.addEventListener("click", ()=> {
    helpItem.classList.toggle("show-file-item");
    fileItem.classList.remove("show-file-item");
    viewItem.classList.remove("show-file-item");
})
sideBarProfile.addEventListener("click", ()=> {
    sideBarProfileItem.classList.toggle("show-file-item");    
})

//close any pop-ups when clicking outside of them
document.addEventListener("click", (event)=> {
    const isDropdownActive = event.target.closest(".file-menu, .view-menu, .help-menu, .side-bar-profile");
    if(!isDropdownActive) {
        fileItem.classList.remove("show-file-item");
        viewItem.classList.remove("show-file-item");
        helpItem.classList.remove("show-file-item");
        sideBarProfileItem.classList.remove("show-file-item");      
    }
})

//refreshes window
fileItem.addEventListener("click", ()=> {
    window.location.reload();
})

//Full screen toggle
viewItem.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
       if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
       } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
       } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
       }
    } else {
       if (document.cancelFullScreen) {
          document.cancelFullScreen();
       } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
       } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
       }
    }
 }

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
    outputContainer.classList.toggle("increase-output-margin");  
})

memoryTest.addEventListener("click", ()=> {
    indexHTML.classList.toggle("hide-code-files");
})

memoryTest.addEventListener("click", ()=> {
    memoryTestIcon.classList.toggle("rotate-icon");
});

tagCount.innerText = arrayNumber;