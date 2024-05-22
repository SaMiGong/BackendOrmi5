const Top = document.querySelector("#header").offsetHeight;

rollUp = () => {
    window.scrollTo({ top: Top, behavior: 'smooth'})
}
