//Allow user to select a filter
//Allow user to remove any filters they previously clicked
//See effects of filter on page

window.onload = function () {

    let filterbuttonmobile = document.getElementsByClassName('categories-container-filter-button')[0],
        // filtercategoriesmobile = document.getElementsByClassName('filter-selected-mobile')[0],

        closefiltercategories_one = document.getElementsByClassName('x-mark')[0],
        closefiltercategories_two = document.getElementsByClassName('x-mark')[1],
        filtertitles = document.getElementsByClassName('categories-mobile-filter', 'titles')[0],
        goback = document.getElementsByClassName('back-arrow')[0],
        allfilteroptions = document.getElementsByClassName('categories-mobile-filter-group')[0]


    sortbybutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'sort-by')[0],
        sortbycategories = document.getElementsByClassName('categories-mobile-filter-group', 'sort-by')[1],

        categorybutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'category')[2]
    category_categories = document.getElementsByClassName('categories-mobile-filter-group', 'category')[2]

    fitbutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'fit')[3]
    fitcategories = document.getElementsByClassName('categories-mobile-filter-group', 'fit')[3]

    brandbutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'brand')[4]
    brandcategories = document.getElementsByClassName('categories-mobile-filter-group', 'brand')[4]

    pricerangebutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'price-range')[5]
    pricerangecategories = document.getElementsByClassName('categories-mobile-filter-group', 'price-range')[5]

    colorbutton = document.getElementsByClassName('categories-mobile-titles', 'option', 'color')[6]
    colorcategories = document.getElementsByClassName('categories-mobile-filter-group', 'color')[6]

    backtomainpage = document.getElementsByClassName('filter-button-go-to-results')[0]

    body = document.getElementsByClassName('body-content')[0]
    console.log(colorcategories)


    filterclosed = false;

    // Showfiltermenu
    function showfilter() {
        filterbuttonmobile.addEventListener('click', function () {
            filtertitles.classList.add('categories-mobile-filter', 'titles-visible')
            document.body.style.overflowY = "hidden";
            console.log('test')
        })
    }
    showfilter()


    // Close filter menus
    closefiltercategories_one.addEventListener('click', function () {
        filtertitles.classList.remove('titles-visible')
        document.body.style.overflowY = "visible";
        console.log('filter')
    })

    closefiltercategories_two.addEventListener('click', function () {
        allfilteroptions.classList.remove('categories-mobile-filter-group-visible')
        document.body.style.overflowY = "visible";
    })

   var shown = false;

    // Various filter sections

    sortbybutton.addEventListener('click', function () {
     //   if (shown ===false){
        console.log('testy')
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        sortbycategories.classList.add('sort-by-visible')
        filtertitles.classList.remove('titles-visible')
     //   } shown = true;
    })

    categorybutton.addEventListener('click', function () {
      //  if (shown ===true){
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        category_categories.classList.add('category-visible')
        filtertitles.classList.remove('titles-visible')
       // } shown = false;
    })

    fitbutton.addEventListener('click', function () {
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        fitcategories.classList.add('fit-visible')
        filtertitles.classList.remove('titles-visible')
    })

    brandbutton.addEventListener('click', function () {
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        brandcategories.classList.add('brand-visible')
        filtertitles.classList.remove('titles-visible')
    })

    pricerangebutton.addEventListener('click', function () {
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        pricerangecategories.classList.add('price-range-visible')
        filtertitles.classList.remove('titles-visible')
    })

    colorbutton.addEventListener('click', function () {
        allfilteroptions.classList.add('categories-mobile-filter-group-visible')
        colorcategories.classList.add('color-visible')
        filtertitles.classList.remove('titles-visible')
    })


    //Go back to main filter screen

    goback.addEventListener('click', function () {
        allfilteroptions.classList.remove('categories-mobile-filter-group-visible')
        filtertitles.classList.add('titles-visible')
    })



    clearselections = document.getElementsByClassName('clear-mobile-product-filters')[0]
    categoryitemselected = document.querySelectorAll('.selected')


    //Show which filter category is clicked

    document.querySelectorAll(".selected").forEach(categoryitemselected =>
        categoryitemselected.addEventListener("click", () => {
            categoryitemselected.classList.toggle("visible");
            clearselections.classList.add('clear-mobile-product-filters-clicked')
        })
    )

    //Show which filter category is clicked (colors filter)

    colorselected = document.querySelectorAll('.color-filter')
    document.querySelectorAll('.color-filter').forEach(colorselected =>
        colorselected.addEventListener('click', () => {
            colorselected.classList.toggle('color-filter-clicked');
            clearselections.classList.add('clear-mobile-product-filters-clicked')
        })
    )


    //Clear what user has selected and hide clear button if none are selected

    document.querySelectorAll('.clear-mobile-product-filters').forEach(clearselections =>
        clearselections.addEventListener('click', () => {
            clearselections.classList.remove('clear-mobile-product-filters-clicked');
            categoryitemselected.forEach(x => x.classList.remove("visible"),
                colorselected.forEach(x => x.classList.remove('color-filter-clicked'))
            )
        })
    )

    backtomainpage = document.getElementsByClassName('filter-button-go-to-results')[0];

 


//Go back to main filter page and log what user clicked
backtomainpage.addEventListener('click', function () {
    allfilteroptions.classList.remove('categories-mobile-filter-group-visible');
   // showresults();
})


//showresults();

     //To do: 
    // Create Product Filters
    // Remove all filter options and return to main filter page
    // Show what user has selected on main page
}