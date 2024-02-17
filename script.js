function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.content').innerHTML = html;
            // Aplica o realce de sintaxe ao novo conteúdo
            hljs.highlightAll();
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sidebar .link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const contentUrl = this.getAttribute('data-content'); // Obtém o URL do atributo data-content do link
            loadContent(contentUrl); // Carrega o conteúdo
        });
    });
});

document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const toggleSidebarButton = this;

    // Verifica se a tela tem 600px de largura ou menos
    const isPhoneSize = window.matchMedia('(max-width: 800px)').matches;

    if (isPhoneSize) {
        // Comportamento para telas de telefone
        if (sidebar.style.left === '0%' || sidebar.style.left === '') {
            sidebar.style.left = '-100%'; // Esconde completamente a sidebar para telas pequenas
            content.style.width = '80%'; // Expande o conteúdo para a largura total

            document.body.appendChild(toggleSidebarButton);
            toggleSidebarButton.classList.add('outside-sidebar');
            sidebar.classList.add('closed');
        } else {
            sidebar.style.left = '0%'; // Mostra a sidebar
            sidebar.style.width = '50%';
            sidebar.style.transition = 'left 0.3s ease-in-out'; // Add transition property
            content.style.marginLeft = '0'; // Ajusta a margem para telas de telefone
            content.style.marginRight = '0'; // Ajusta a margem para telas de telefone

            sidebar.appendChild(toggleSidebarButton);
            toggleSidebarButton.classList.remove('outside-sidebar');
            sidebar.classList.add('open');
        }
    } else {
        // Comportamento para telas maiores
        if (sidebar.style.left === '0px' || sidebar.style.left === '') {
            sidebar.style.left = '-360px';
            content.style.width = '55%';
            content.style.marginLeft = '22.5%';
            content.style.marginRight = '22.5%';

            document.body.appendChild(toggleSidebarButton);
            toggleSidebarButton.classList.add('outside-sidebar');
            sidebar.classList.add('open');
        } else {
            sidebar.style.left = '0px';
            content.style.marginLeft = '35%';
            content.style.marginRight = '15%';

            sidebar.appendChild(toggleSidebarButton);
            toggleSidebarButton.classList.remove('outside-sidebar');
            sidebar.classList.remove('closed');
        }
    }
});

document.querySelectorAll('.expander-title').forEach(item => {
    item.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Toggle expanded class to trigger transition
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            // content.style.display = 'none';
        } else {
            // Expand the clicked one
            content.classList.add('expanded');

        }
    });
});

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const contentPath = this.getAttribute('data-content');

        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));

        this.classList.add('active');

        fetch(contentPath).then(response => response.text()).then(html => {
            const content = document.querySelector('.content');
            content.innerHTML = html;

            // Scroll to the specific section
            const sectionId = contentPath.split('#')[1];
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView();
            }
        }).catch(err => {
            console.error('Error loading the content', err);
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSidebar = document.querySelector('.toggle-sidebar');

    if (window.matchMedia('(min-width: 800px)').matches) {
        toggleSidebar.addEventListener('mouseover', function() {
            if (this.classList.contains('outside-sidebar')) {
                this.textContent = '>';
            } else {
                this.textContent = '<';
            }
        });

        toggleSidebar.addEventListener('mouseout', function() {
            this.textContent = '☰';
        });
    } else {
        toggleSidebar.addEventListener('click', function() {
            if (this.classList.contains('outside-sidebar')) {
                this.textContent = '>';
            } else {
                this.textContent = '<';
            }
        });
    }
});
