const stars = document.querySelectorAll('.estrelas > i');
const btn = document.querySelector('#btn');
const local = localStorage.getItem('estrelas-sportv') || localStorage.setItem('estrelas-sportv', 1)
let atual = 1;

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove("active");
        })
        atual = index1 + 1;
        localStorage.setItem('estrelas-sportv', atual);
    })
});

btn.addEventListener('click', (e) => {
    window.alert(`${atual} estrela(s)`)
})