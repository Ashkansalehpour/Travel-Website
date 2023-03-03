// Create Accordion for FAQ section
const accordion = document.getElementsByClassName('contentBx');
// When we click on .contentBx function call and work with our click
for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}