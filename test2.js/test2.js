const product = [
  {
    image: "images/lenova.webp",
    id: 1,
    name: "Lenova ThinkPad E16",
    Processor:
      "13th Generation Intel® Core™ i3-1315U Processor (E-cores up to 3.30 GHz P-cores up to 4.50 GHz)",
    Operating_System: "Windows 11 Home Single Language 64",
    Memory: "8 GB DDR4-3200MHz (Soldered)",
    Storage: "512 GB SSD M.2 2242 PCIe Gen4 TLC Opal",
    Display:
      "40.64cms (16) WUXGA (1920 x 1200), IPS, Anti-Glare, Non-Touch, 45% NTSC, 300 nits, 60Hz",
    Color: " Black",
    price: 50.491,
    inStock: true,
  },

  {
    image: "images/dell.avif",
    id: 2,
    name: "Dell Inspiron 15 Laptop",
    Processor:
      "13th Generation Intel® Core™ i3-1305U (10 MB cache, 5 cores, 6 threads, up to 4.50 GHz)",
    Operating_System: "Windows 11 Home Single Language, English",
    Color: "Arctic Grey",
    price: 54.091,
    inStock: true,
  },

  {
    image: "images/lenova16.avif",
    id: 3,
    name: "Lenova ThinkBook 16 40.64cms - AMD Ryzen 5",
    Processor: "AMD Ryzen™ 5 7530U Processor (2.00 GHz up to 4.50 GHz)",
    Operating_System: "Windows 11 Home Single Language 64",
    Color: "Arctic Grey",
    price: 44.491,
    inStock: false,
  },

  {
    image: "images/lenovaV15.avif",
    id: 4,
    name: "Lenova V15 39.62cms - 12th Gen Intel i3",
    Processor:
      "12th Generation Intel® Core™ i3-1215U Processor (E-cores up to 3.30 GHz P-cores up to 4.40 GHz)",
    Operating_System: "No Operating System",
    Color: "Iron Grey",
    price: 33.991,
    inStock: true,
  },

  {
    image: "images/lenovaIdea1.jpg",
    id: 5,
    name: "Lenovo IdeaPad 1 Intel Core Celeron N4020 15",
    Processor:
      "Intel CeleronN4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 2 Threads | 4MB Cache",
    Operating_System: " Windows 11 Home ",
    Color: "Cloud Grey",
    price: 26.878,
    inStock: false,
  },

  {
    image: "images/Asus.webp",
    id: 6,
    name: "Asus EK410KA E-Book Laptop",
    Processor: "Intel Celeron N4500 Processor 1.1 GHz",
    Operating_System: "Pre-loaded Windows 11 Home with lifetime validity",
    Color: "Dark Grey",
    price: 23.499,
    inStock: true,
  },
  {
    image: "images/hp.avif",
    id: 7,
    name: "HP Laptop",
    Processor: "12th Generation Intel® Core™ i5 processor",
    Operating_System: "Windows 11 Home Single Language",
    Color: "Natural Silver",
    price: 51.846,
    inStock: false,
  },

  {
    image: "images/Asusi3.webp",
    id: 8,
    name: "ASUS X",
    Processor: "Intel Core i3 6th Generation",
    Operating_System: "Windows 10 Home",
    Color: "Black",
    price: 19.999,
    inStock: false,
  },

  {
    image: "images/delli.webp",
    id: 9,
    name: "DELL Inspiron 3520",
    Processor: "	12th Gen Intel Core i5-1235U",
    Operating_System: "Windows 11",
    Color: "Grey",
    price: 55.999,
    inStock: true,
  },
];

function myFun(display) {
  const productList = document.getElementById("div1");
  productList.innerHTML = "";

  display.map((value) => {
    productList.innerHTML += `

            <div id="div2">
                <img src=${value.image}>
                <p><b>Name</b>: <b><u>${value.name}</u></b><p>
                <p><b>Processor</b>: ${value.Processor}<p>
                <p><b>Operating System</b>: ${value.Operating_System}<p>
                <p><b>Color</b>: ${value.Color}<p>
                <p><b>Price</b>: ₹${value.price}<p>
                    
                ${
                  value.inStock
                    ? "  <button>Buy Now  </button>"
                    : " <h4>Out of Stock<h4>"
                }
            </div> 
            
        `;
  });
}

function filterProducts(para) {
  if (para === "instock") {
    myFun(product.filter((value) => value.inStock));
  } else if (para === "outofstock") {
    myFun(product.filter((value) => !value.inStock));
  } else {
    myFun(product);
  }
}

function search(query) {
  const searchInput = product.filter((value) =>
    value.name.toLowerCase().includes(query.toLowerCase())
  );
  myFun(searchInput);
}
myFun(product);
