const links = document.querySelectorAll('nav a');
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.links')

links.forEach(link =>{
    if(link.href === window.location.href){
        link.classList.add('active');
    }
});

toggleButton.addEventListener('click',() =>{
    navLinks.classList.toggle('active');
    
});