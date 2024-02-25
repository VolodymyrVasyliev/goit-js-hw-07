const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Categories: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

