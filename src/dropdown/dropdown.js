import './dropdown.css';

function activateDropdown() {
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  dropdownContainers.forEach((container) => {
    const dropdownList = container.querySelector('.dropdown-list');
    const dropdownButton = container.querySelector('.dropdown-button');

    dropdownButton.addEventListener('click', () => {
      dropdownList.classList.toggle('extended');
      dropdownList.classList.toggle('visible');
    });
  });
}

export default activateDropdown;
