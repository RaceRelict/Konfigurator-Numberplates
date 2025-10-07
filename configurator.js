function showBrand(brand) {
  const configurator = document.getElementById('configurator');
  configurator.innerHTML = `<h2>${brand.toUpperCase()} Konfigurator</h2>
    <p>Hier kannst du dein Logo auf die Mini Plate platzieren.</p>`;
}
