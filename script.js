document.querySelector('.toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const toggleSidebarButton = this;

    // VISIVEL
    if (sidebar.style.left === '0px' || sidebar.style.left === '') {
        sidebar.style.left = '-360px'; // Hide sidebar
        content.style.width = '55%'
        content.style.marginLeft = '22.5%'; // Expand content to full width
        content.style.marginRight = '22.5%'; // Expand content to full width

        document.body.appendChild(toggleSidebarButton);

        toggleSidebarButton.classList.add('outside-sidebar');
    } else {
        sidebar.style.left = '0px'; // Show sidebar
        content.style.marginLeft = '35%'; // Reduce content width to make space for the sidebar
        content.style.marginRight = '15%'; // Reduce content width to make space for the sidebar

        // Move the toggle-sidebar button back inside the sidebar
        sidebar.appendChild(toggleSidebarButton);

        // Remove the class that styles the button differently
        toggleSidebarButton.classList.remove('outside-sidebar');
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

        // Remove active class from all links
        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Load the content
        fetch(contentPath).then(response => response.text()).then(html => {
            document.querySelector('.content').innerHTML = html;
        }).catch(err => {
            console.error('Error loading the content', err);
        });
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
});
