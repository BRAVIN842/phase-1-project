document.addEventListener("DOMContentLoaded",()=>{
    const amiiboContainer = document.getElementById("amiibo-container");
    const searchInput = document.getElementById("search-input");
    const filterSelect = document.getElementById("filter-select");

    //Fetch data from API
    fetch("http://localhost:3000/amiibo")
        .then(response => response.json())
        .then(data => {
            //Data for characters
            const amiiboData = data;

            //Function to render comments
            function renderComments(parent , comments) {
                parent.innerHTML = "";
                comments.forEach(commentText => {
                    const comment = document.createElement("p");
                    comment.textContent = commentText;
                    parent.appendChild(comment);
                });
            }
        })
})