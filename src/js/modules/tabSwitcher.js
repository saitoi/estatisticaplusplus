document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.individual-tab');
    // Adjust the selector to target specific classes
    var contentDivs = document.querySelectorAll('.content-c, .content-julia, .content-r');

    function switchTab(tabId) {
        contentDivs.forEach(div => {
            // Check if the div's class list contains the target class
            div.style.display = div.classList.contains(tabId) ? 'block' : 'none';
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove "active" class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add "active" class to the clicked tab
            tab.classList.add('active');

            // Construct the class name to match
            var contentClass = 'content-' + tab.id.split('-')[1];
            switchTab(contentClass);
        });
    });
});
