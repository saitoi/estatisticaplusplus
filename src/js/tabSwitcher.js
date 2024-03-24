document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.individual-tab');
    var contentDivs = document.querySelectorAll('.sidebar-content');

    function switchTab(tabId) {
        contentDivs.forEach(div => {
            div.style.display = div.id === tabId ? 'block' : 'none';
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove "active" class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add "active" class to the clicked tab
            tab.classList.add('active');

            var contentId = 'content-' + tab.id.split('-')[1];
            switchTab(contentId);
        });
    });
});
