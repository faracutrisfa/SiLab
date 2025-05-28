const modulTab = document.getElementById("modulTab");
const tugasTab = document.getElementById("tugasTab");
const modulContent = document.getElementById("modulContent");
const tugasContent = document.getElementById("tugasContent");

modulTab.addEventListener("click", function () {
  modulTab.classList.add("text-[#5580D6]", "border-[#5580D6]");
  modulTab.classList.remove("text-gray-500", "border-gray-200");

  tugasTab.classList.add("text-gray-500", "border-gray-200");
  tugasTab.classList.remove("text-[#5580D6]", "border-[#5580D6]");

  modulContent.classList.remove("hidden");
  tugasContent.classList.add("hidden");
});

tugasTab.addEventListener("click", function () {
  tugasTab.classList.add("text-[#5580D6]", "border-[#5580D6]");
  tugasTab.classList.remove("text-gray-500", "border-gray-200");

  modulTab.classList.add("text-gray-500", "border-gray-200");
  modulTab.classList.remove("text-[#5580D6]", "border-[#5580D6]");

  tugasContent.classList.remove("hidden");
  modulContent.classList.add("hidden");
});

function openModal() {
  document.getElementById('joinModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('joinModal').classList.add('hidden');
}

window.onclick = function (event) {
  const modal = document.getElementById('joinModal');
  if (event.target == modal) {
    modal.classList.add('hidden');
  }
}