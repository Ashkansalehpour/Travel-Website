// Create Accordion for FAQ section
const accordion = document.querySelectorAll('.contentBx');
// When we click on .contentBx function call and work with our click

accordion.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})