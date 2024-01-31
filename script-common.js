document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('code[class*="hljs-"]').forEach((codeElement) => {
        const classes = codeElement.className.split(' ');

        const classRegex = /hljs-.*/;

        const hljsClasses = classes.filter(className => classRegex.test(className));

        hljsClasses.forEach(hljsClass => {
            const language = hljsClass.replace('hljs-', '');
            hljs.highlightElement(codeElement, { language });
        });
    });
});