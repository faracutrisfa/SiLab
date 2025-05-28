// JavaScript to handle modal open and
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");

// Open modal
openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden"); // Show modal
});

// Close modal
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide modal
});

// JavaScript to handle modal open and close
const openUpdateStatus = document.getElementById("updateStatusButton");
const update = document.getElementById("UpdateStatus");
const closeUpdateButton = document.getElementById("closeUpdate");

// Open modal
openUpdateStatus.addEventListener("click", () => {
  update.classList.remove("hidden"); // Show modal
});

// Close modal
closeUpdateButton.addEventListener("click", () => {
  update.classList.add("hidden"); // Hide modal
});
