export function handleCodeCopyButton() {
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(codeBlock => {
        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-button';
        // copyButton.innerHTML = 'Copy';

        const wrapperdiv = document.createElement('div');
        wrapperdiv.className = 'icon';

        const clipboardIcon = document.createElement('img');
        clipboardIcon.src = '/icons/clipboard-regular.svg';
        clipboardIcon.alt = 'Copy';
        clipboardIcon.style.width = '24px';
        clipboardIcon.style.height = '24px';
        clipboardIcon.style.filter = 'invert(1) brightness(1.2)';
        
        wrapperdiv.appendChild(clipboardIcon);
        copyButton.appendChild(wrapperdiv);
        codeBlock.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            let text = "";
            for (const span of codeBlock.children) {
                for (const child of span.children) {
                    if (child.className === 'ln') {
                        continue;
                    }
                    else {
                        text += child.innerText;
                    }
                }
            }
            navigator.clipboard.writeText(text);
            clipboardIcon.src = '/icons/check-solid.svg';
            // copyButton.innerHTML = 'Copied';
            setTimeout(() => {
                // copyButton.innerHTML = 'Copy';
                clipboardIcon.src = '/icons/clipboard-regular.svg';
            }, 2000);
        });
    });
}