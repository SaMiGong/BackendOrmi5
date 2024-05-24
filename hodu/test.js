window.onload = function() {
    const moreImagesDiv = document.getElementById('more-images');
    const showMoreBtn = document.getElementById('show-more-btn');
    const numAdditionalImages = 5;

    showMoreBtn.addEventListener('click', async function() {
        if (moreImagesDiv.style.display === 'none') {
            moreImagesDiv.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';

            for (let i = 0; i < numAdditionalImages; i++) {
                const randomId = Math.floor(Math.random() * 1000);
                const response = await fetch(`https://picsum.photos/id/${randomId}/500/300`);
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                const img = document.createElement('img');
                img.src = imageUrl;
                moreImagesDiv.appendChild(img);
            }
        } else {
            moreImagesDiv.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
            moreImagesDiv.innerHTML = '';
        }
    });
};