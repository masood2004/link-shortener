const btn = document.getElementById("btn");
const shortUrlLink = document.getElementById("shortUrlLink");
const results = document.getElementById("results");

async function shortUrl(){
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);

    if (response.ok) {
        const data  = await response.text();
        console.log(data);
        shortUrlLink.setAttribute("href", data);
        shortUrlLink.innerHTML = data;
        results.style.display = "block";
    }
    else {
        results.innerHTML = "Error Shortening!";
        results.style.display = "block";
    }
};

btn.addEventListener("click", () => {
    shortUrl();
})