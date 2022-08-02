//I wanted to make a drop down menu. this is the first thing that i'm going to do in jquery. 
//here is my reference, it was a great tool in making this happen
//https://www.youtube.com/watch?v=kxfXH0dxU70

$(() => {
    $('#links').hover(
        () => {
            $('ul.sub').slideDown(500)
        },
        () => {
            $('ul.sub').slideUp(300)
        }
    )

    const revealImage = () => {
        let $imageDiv = $('<div>').appendTo('body').addClass('imgDiv')
    let $image = $('<img>').attr('src', 'https://cdn.dribbble.com/users/2934379/screenshots/6122970/snowboard.2019-03-04_22_45_58.gif').appendTo($imageDiv).addClass('snowboard-Gif').animate({
        marginLeft: '75%'
    }, 20000)
    }
   $('#letsSnowboard').on('click', revealImage)
   
    // const revealPics = () => {
    //     let $pic1 = $('<img>').attr('src', 'https://i.imgur.com/urwQhJ7.png')
    //     $('.family-pictures').append($pic1)
    // }
    // revealPics
})