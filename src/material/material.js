import './material.css';

function activateMaterial() {
  const materialExpand = document.querySelector('.material-expand');
  const materialList = document.querySelector('.material-list');

  materialExpand.addEventListener('click', () => {
    materialList.classList.toggle('expanded');
    materialList.classList.toggle('collapsed');
  });
}

export default activateMaterial;
