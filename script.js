function connect() {
    var searchText = document.getElementById('search').value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data));
    document.getElementById('search').value = ""; 
}

function showData(data){
    var n = document.getElementById('amount').value;
    document.getElementById('amount').value = ""; 
    console.log("data from showData Function", data);
    var oldContent = document.getElementById('container');
    oldContent.textContent= "";
    for (var i=0; i<n; i++){
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="card" style="width:15rem;">
                            <img src="${data.meals[i].strMealThumb}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${data.meals[i].strMeal}</h5>
                            <a href="https://www.themealdb.com/meal/${data.meals[i].idMeal}" class="btn">See Recipe</a>
                            </div>
                            </div>`;
        oldContent.appendChild(newDiv);
    }
}