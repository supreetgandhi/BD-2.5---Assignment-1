const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

function sortByRatings(product1, product2) {
  return product2.rating - product1.rating;
}

function sortByPriceInDescendingOrder(product1, product2) {
  return product2.price - product1.price;
}

function sortByPriceInAscendingOrder(product1, product2) {
  return product1.price - product2.price;
}

function filterByRam(product, ram) {
  return parseFloat(product.ram) === ram;
}

function filterByRom(product, rom) {
  return parseFloat(product.rom) === rom;
}

function filterByBrand(product, brand) {
  return product.brand.toLowerCase() === brand.toLowerCase();
}

function filterByOs(product, os) {
  return product.os.toLowerCase() === os.toLowerCase();
}

function filterByPrice(product, price) {
  return parseFloat(product.price) === price;
}

app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.sort(sortByRatings);
  res.json({
    product: sortedProducts,
  });
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.sort(sortByPriceInDescendingOrder);
  res.json({
    product: sortedProducts,
  });
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.sort(sortByPriceInAscendingOrder);
  res.json({
    product: sortedProducts,
  });
});

app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let filteredProducts = products.filter((product) =>
    filterByRam(product, ram)
  );
  res.json({
    product: filteredProducts,
  });
});

app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let filteredProducts = products.filter((product) =>
    filterByRom(product, rom)
  );
  res.json({
    product: filteredProducts,
  });
});

app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let filteredProducts = products.filter((product) =>
    filterByBrand(product, brand)
  );
  res.json({
    product: filteredProducts,
  });
});

app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let filteredProducts = products.filter((product) => filterByOs(product, os));
  res.json({
    product: filteredProducts,
  });
});

app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let filteredProducts = products.filter((product) =>
    filterByPrice(product, price)
  );
  res.json({
    product: filteredProducts,
  });
});

app.get('/products', (req, res) => {
  res.json({
    product: products,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
