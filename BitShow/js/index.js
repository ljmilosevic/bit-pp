$(document).ready(function() {
    previewShows(),
    
    jQuery(document).on('click', 'a', function () {
        var showId1 = $(this).attr('id');
        localStorage.setItem("id", showId1);
        // console.log("ovo je to sto trebam " + showId1);
    });

    // $('a').each(function () {
    //     var id = $(this).attr('id');
    //     console.log(id);
    //     $(`${id}`).click(function() {
    //         localStorage.setItem("id", id);
    //         console.log("ovo je to sto trebam " + id);
    //     });
    // })

    // $('a').each(function () {
    //     var id = $(this).attr('id');
    //     console.log(id);
    //     $(`a`).on("click", function() {
    //         localStorage.setItem("id", id);
    //         console.log("ovo je to sto trebam " + id);
    //     });
    // })
});

function previewShows() {

    $.ajax({
        url: `http://api.tvmaze.com/shows`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i = 0; i < response.length; i++) {

            var linkOfShow = response[i].url;
            var nameOfShow = response[i].name;
            var poster = response[i].image.medium;

            var divId = "div" + i;
            var showId = response[i].id + "show";

            if(i >= 51 ) {
                break;
            } else {
                
                $(`.list-of-movies`).append(`<div class="movie col-sm-3 col-lg-3 col-md-3 col-xl-2 col-xxl-2" id="${divId}"></div>`);
                $(`#${divId}`).append(`<img src="${poster}"></img>`);
                $(`#${divId}`).append(`<a id="${showId}" target="_blank" href="./infoPage.html">${nameOfShow}</a>`); 
                
            } 

           
            
 
        }
        
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}

$("input").on("input", function() {

    $("ul").html('');

    var input = $(`#dropdownMenuLink`).val();

    $.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${input}`,
        method: 'GET'
    }).done(function (response) {

        for(var i = 0; i < 10; i++) {

            var nameOfShow = response[i].show.name;

            $("ul").append(`<li class="dropdown-item">${nameOfShow}</li> <hr>`);
        }
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
 });


function clearList() {

}


