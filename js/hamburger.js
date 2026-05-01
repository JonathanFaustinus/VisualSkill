const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

if(hamburger && links){
    hamburger.addEventListener('click', function (){
        links.classList.toggle('open');
        const isOpen = links.classList.contains('open');
    });

    document.addEventListener('click', function (e){
        if (!hamburger.contains(e.target) && !links.contains(e.target)){
            links.classList.remove('open');
        }
    });
}