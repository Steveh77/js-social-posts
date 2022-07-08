// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*


// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.


// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.



// # Milestone 1
const arrayPost = [
    {   id : 1 , 
        nomeAutore : "Piero Mangione", 
        fotoAutore : "https://unsplash.it/300/300?image=15",
        data : "03-06-2022",    
        testo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sintvoluptate recusandae architecto. Et nihil ullam aut alias.",
        immaginePost : "https://unsplash.it/600/300?image=174",
        likes : 80,
    },
    {   id : 2 , 
        nomeAutore : "Pinco Pallo", 
        fotoAutore : "https://picsum.photos/200",
        data : "01-04-2022",    
        testo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sintvoluptate recusandae architecto. Et nihil ullam aut alias.",
        immaginePost : "https://unsplash.it/600/300?image=171",
        likes : 40,
    },
    {   id : 3 , 
        nomeAutore : "Mariangiangiangela", 
        fotoAutore : "https://picsum.photos/201",
        data : "02-05-2022",    
        testo : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sintvoluptate recusandae architecto. Et nihil ullam aut alias.",
        immaginePost : "https://unsplash.it/600/300?image=175",
        likes : 9999,
    }

]

console.log(arrayPost)


// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.


const container = document.getElementById('container')
let post = '';

for (let i = 0; i < arrayPost.length; i++) {
    const element = arrayPost[i];
    // console.log(element)
    post += `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${element['fotoAutore']}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${element['nomeAutore']}</div>
          <div class="post-meta__time">${element['data']}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${element['testo']}
    </div>
    <div class="post__image">
      <img src="${element['immaginePost']}" alt="image-post-${element['id']}" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" data-postid="${element['id']}" >
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${element['id']}" class="js-likes-counter">${element['likes']}</b> persone</div>
      </div>
    </div>
  </div>`;

  
}
// console.log(post)
container.innerHTML = post

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

let posts = document.querySelectorAll(".post")
console.log(posts)
for (const item of posts) {
    const likeBtn = item.querySelector('.js-like-button')

    likeBtn.addEventListener("click", function() {
        likeBtn.classList.add("clicked")
        // recupero l'id del post
        const postId = likeBtn.dataset.postid
        // recupero il contatore grazie all'id del post
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        // recupero i likes
        let likes = parseInt(likeCounter.innerText);
        
        likeCounter.innerText = ++likes;

    })
}






