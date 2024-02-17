
function initializeContentLoading() {
    document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentUrl = this.getAttribute('data-content');
            loadContent(contentUrl);
        });
    });
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.content').innerHTML = html;
            hljs.highlightAll();
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}
