const searchInput = document.querySelector(".search-input");
const htmlAnswers = document.querySelector(".html-answers");

searchInput.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        htmlAnswers.innerText += `${searchInput.value.replace(/[^a-z, A-Z]/g, "")}`.toLocaleLowerCase() + "\n";
        searchInput.value = "";
    }
});