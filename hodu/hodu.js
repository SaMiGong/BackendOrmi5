const Top = document.querySelector("#header").offsetHeight;

rollUp = () => {
    window.scrollTo({ top: Top, behavior: 'smooth'})
}

const imgMore = document.getElementById('more_img');
const showMore = document.getElementById('show_more');
const imgAddNum = 6;

showMore.addEventListener('click', () => {
    if (imgMore.style.display === 'none') {
        imgMore.style.display = 'block';
        showMore.textContent = 'Show Less';

        // Picsum Photos 에서 이미지 가져오기
        for (let i = 0; i < imgAddNum; i++) {
            const response = await fatch(`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300`);
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            const img = document.createElement('img');
            img.src = imageUrl;
            imgMore.appendChild(img);
        }
    } else {
        imgMore.style.display = 'none';
        showMore.textContent = 'Show More';

        // 이미지들 제거
        imgMore.innerHTML = '';
    }
});