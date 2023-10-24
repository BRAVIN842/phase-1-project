document.addEventListener("DOMContentLoaded",()=>{
    const amiiboContainer = document.getElementById("amiibo-container");
    const searchInput = document.getElementById("search-input");
    const filterSelect = document.getElementById("filter-select");

    //Fetch data from API
    fetch("http://localhost:3000/amiibo")
})