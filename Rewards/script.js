
let btn = document.getElementById("btn");
async function linkCreator(json_data){
    let data_array = json_data["data"];
    
    let input = document.getElementById("count");
    if(input.value == "" || input.value <= 0) {
        input.value = 15;
    }
    let timer = document.getElementById("time");
    if(timer.value="" || timer.value <= 0) {
        timer.value = 10;
    }
    // bing search url
    let url_modified,url = "https://www.bing.com/search?q=";
    for(let i=0;i<input.value;i++){
        let random_index = Math.floor(Math.random()*data_array.length);
        // add the random word to the url
        url_modified = url + data_array[random_index];
        // load the url in index1.html 

        window.open(url_modified, '_blank');
        // wait for 1 second 
        await new Promise(resolve => setTimeout(resolve, timer.value*1000));
    }
}
btn.addEventListener("click", function() {
    let url = "data.json";
    fetch(url)
        .then(response => response.json())
        .then(json_data => linkCreator(json_data))
        .catch(err => console.log(err));
});


// AJAX Request 

// let req = new XMLHttpRequest();
// req.open("GET", "https://www.randomlists.com/data/words.json", true);
// req.onload = function() {
//     if(req.status == 200) {
//         console.log(req.responseText);
//     }
//     else {
//         console.log("Error: " + req.status);
//     }
// }
// req.send();
