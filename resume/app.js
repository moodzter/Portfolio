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

    // const revealResume = () => {

    // }
})