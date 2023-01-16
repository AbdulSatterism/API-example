const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data 
    searchField.value = '';
    if (searchText == '') {
        alert('please search your food')
    }
    else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayMealsResult(data.meals))
    }
}

const displayMealsResult = meals => {
    const searchResult = document.getElementById('search-result');
    if (meals.length == -1) {
        alert('sorry not found your food!!! try another food')
    }
    // clear ager content
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 50)
            }</p>
        </div>
    </div>  `;
        searchResult.appendChild(div)
    })
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetail(data.meals[0]);
    }
    catch (error) {
        console.log(error)
    }
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (meal) => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ''
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)
        }</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div)
}
