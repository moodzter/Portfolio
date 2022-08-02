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


const addText1 = () => {
    let description1 = $('<p>').text(`Above you can see website homepage I designed, with the goal of having users able to share and see other people's art. Included is the use of buttons and text boxes for including your name.`)

    $('#p1').append(description1)
    $('#project1Button').prop('disabled', true)

    }

const addText2  = () => {
    let description2 = $('<p>').text(`Above is another home page I designed for a specific historical artist named Fridah Kahlo. Included is a nav bar with different people related to her and pieces of her art and descriptions of them. There are buttons you can use to "like" the art pieces.`)

    $('#p2').append(description2)
    $('#project2Button').prop('disabled', true)

    }

const addText3  = () => {
    let description3 = $('<p>').text(`Here is a business page I designed for the use of buying and selling famous art pieces. This page is designed for buying, and I made use of javascript to have the descriptions pop up after you click them.`)
    
    $('#p3').append(description3)
    $('#project3Button').prop('disabled', true)
    
}
$('#project1Button').on('click', addText1)
$('#project2Button').on('click', addText2)
$('#project3Button').on('click', addText3)
})

