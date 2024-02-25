const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});
nameInput.classList.add("input-style")

// nameInput.style.border = '1px solid #808080';
// nameInput.style.borderRadius = '4px';
// nameInput.style.width = '360px';
// nameInput.style.height = '40px';
