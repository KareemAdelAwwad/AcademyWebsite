/* Back to Top */
const top_btn = document.getElementsByClassName("scroll-to-top")[0];

function B2T(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
document.addEventListener('DOMContentLoaded', (event) => {
    
    
    window.addEventListener("scroll", function(){
        if (window.scrollY > 900){
            top_btn.classList.add('show');
        } else {
            top_btn.classList.remove('show');
        }
    });
});
