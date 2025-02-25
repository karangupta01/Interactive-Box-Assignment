document.addEventListener('DOMContentLoaded', function() {
const radioButtons = document.querySelectorAll('input[type="radio"]')
const options = document.querySelectorAll('.option')
const sizeColorSelect = document.querySelector('.size-color-select')
const totalPrice = document.querySelector('.total')

 // Function to update selected state
function updateSelectedState(selectedValue) {
   options.forEach(option => {
   const radio = option.querySelector('input[type="radio"]')
   if (radio.value === selectedValue) {
       option.classList.add('selected')
   } else {
       option.classList.remove('selected')
   }
 })
}

// Initialize selected state
const initialSelected = document.querySelector('input[type="radio"]:checked');
if (initialSelected) {
    updateSelectedState(initialSelected.value)
}
// Handle clicking on the entire option box
options.forEach(option => {
    option.addEventListener('click', function(e) {
        const radio = this.querySelector('input[type="radio"]')
        radio.checked = true;
        
        // Trigger the change event
        const event = new Event('change')
        radio.dispatchEvent(event);
    })
})
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        // Update selected state
        updateSelectedState(this.value);
        // Show/hide size-color selection based on units
        if (this.value === '2') {
            sizeColorSelect.style.display = 'grid'
        } else {
            sizeColorSelect.style.display = 'none'
        }
        // Update total price
        const prices = {
            '1': '10.00',
            '2': '18.00',
            '3': '24.00'
        };
        totalPrice.textContent = `Total: $${prices[this.value]} USD`
    })
})
})