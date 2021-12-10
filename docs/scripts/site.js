window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('body').classList.add('loaded');
    afterLoading();
});


function afterLoading(){
    const gallery = document.querySelector('.gallery');
    const modal = document.querySelector('.modal');

    gallery.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName == 'SPAN'){
            const currSpan = event.target;
            const img = event.target.children[0];
            modal.style.display = 'block';
            modal.querySelector('span').appendChild(img);
            modal.querySelector('button').addEventListener('click', event => {
                modal.querySelector('span').removeChild(img);
                currSpan.appendChild(img);
                modal.style.display = 'none';
            });
        
        }
    });
}
