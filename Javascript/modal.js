// Get the modal element
const modal = document.getElementById("genericModal");
// Get the elements to update within the modal
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

// Function to open the modal and set the text
function openModal(title, text, info, cost) {
  modalTitle.innerText = title; // Update the title
  modalText.innerText = text;   // Update the text
  modalInfo.innerText = info;
  modalCost.innerText = cost;
  modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
