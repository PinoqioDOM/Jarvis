/* const userNum = +prompt('Enter Number Between 1-100:')

if(userNum > 100) {
    swal("Error", "Your Number Is Above 100", "error");
    console.log(`${userNum} Is Above 100`);   
} else if (userNum < 1) {
    swal("Error", "Your Number Is Below 1", "error");   
    console.log(`${userNum} Is Below 1`);   
}

const getPostByid = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch (error => {
            console.log('Error', error);
        });
}

getPostByid(userNum) */

const jokeBtn = document.getElementById('jokebtn')
const setup  = document.getElementById('jokeSetup');
const punchline= document.getElementById('jokePunchline');

jokeBtn.addEventListener('click', () => {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
        }).catch(error => {
            console.log('Error:', error);
        })
})