const stars = document.querySelectorAll('.estrelas > i');
let atual = 1;

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            atual = index1 + 1;
            index1 >= index2 ? star.classList.add('active') : star.classList.remove("active");
        })
    })
});