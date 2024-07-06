document.getElementById('toggle-button').addEventListener('click', function() {
    var contentContainer = document.getElementById('content-container');
    var svgWrapper = document.getElementById('svg-wrapper').querySelector('svg');
    if (contentContainer.style.height === '110px') {
        contentContainer.style.height = contentContainer.scrollHeight + 'px';
        this.querySelector('span').textContent = 'Show less';
        svgWrapper.classList.add('rotate');
    } else {
        contentContainer.style.height = '110px';
        this.querySelector('span').textContent = 'Show more';
        svgWrapper.classList.remove('rotate');
    }
});
