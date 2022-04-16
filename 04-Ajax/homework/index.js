$('#boton').click(() => {
    $.get(`http://localhost:5000/amigos`, (data) => {
        data.forEach(amigo => {
            $('#lista').append(`<li>${amigo.name}</li>`)
        });
    })
})
















// let friends = document.querySelector('#boton');


// friends.addEventListener('click', () => {

//     $.ajax({
//         url: `http://localhost:5000/amigos`,
//         type: 'get',
//         success: (data) => {

//             var amigos = [];
//             amigos.push(data.name, data.id);
//             console.log(data);

//         }
//     })



// })