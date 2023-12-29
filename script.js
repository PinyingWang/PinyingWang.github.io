document.addEventListener('DOMContentLoaded', function() {
  const selectYear = document.getElementById('date-select');
  const moonPhoto = document.getElementById('moon-photo');
  const description = document.getElementById('description');

  // Add years to the dropdown
  for (let year = 1980; year <= 2023; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.text = year;
    selectYear.appendChild(option);
  }

  // Function to update the image and description based on selected year
  selectYear.addEventListener('change', function() {
    const selectedYear = selectYear.value;
    const imageUrl = `moon_images/${selectedYear}_august_1.jpg`;
    const imageHTML = `<img src="${imageUrl}" alt="August 1st Moon ${selectedYear}">`;
    const descriptionText = `Description or poem for August 1st, ${selectedYear}`;

    moonPhoto.innerHTML = imageHTML;
    description.textContent = descriptionText;
  });
});
