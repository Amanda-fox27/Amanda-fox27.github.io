 // declare all products
 const products = [
    { name: "Skin-tone Binder", price: 24.99, clothingType: "undergarment", description: "Binders for chest binding", image: "https://d3i6fh83elv35t.cloudfront.net/static/2019/10/Nude-OG-Group-Shot-1024x732.jpg", alt: "Group of people wearing binders in various shades"},
    { name: "Multi Cross Necklace", price: 10.38, clothingType: "accessories", description: "Layered necklace with cross charms", image: "https://blingcharming.com/cdn/shop/products/Hollow-Crosses-Pendant-Necklace-for-Women-Party-Jewelry-Multilayer-Tassel-Chain-Choker-Necklace-Emo-Grunge-Aesthetic_1024x1024.jpg?v=1632590228", alt: "Close up on model of necklace set with cross pendants" },
    { name: "Strawberry Maxi Dress", price: 34.89, clothingType: "fullbody", description: "Long poofy dress with strawberry print", image: "https://static01.nyt.com/images/2020/08/18/fashion/18STRAWBERRYDRESS-2/18STRAWBERRYDRESS-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale", alt: "Woman outdoors wearing strawberry print tulle dress" },
    { name: "Cryptid Sweater", price: 15.59, clothingType: "outerwear", description: "Dark knit with eyeball print", image: "https://m.media-amazon.com/images/I/81fSq95+n3L._AC_SY606_.jpg", alt: "Desaturated green sweater with eyeball design print" },
    { name: "Ribcage Sweater", price: 23.89, clothingType: "outerwear", description: "Distressed knit with ribcage and spine frontal print", image: "https://i.pinimg.com/1200x/b7/3f/bb/b73fbba1e5aba7683c4532acbb92bccf.jpg", alt: "Model wearing green distressed sweater with ribcage and spine black print" },
    { name: "Hawaiian Print Binder", price: 37.59, clothingType: "undergarment", description: "Floral print binder in blue, pink and white", image: "https://gc2b.co/cdn/shop/products/transhalffront_2048x2048.png", alt: "Model wearing trans pride themed chest binder" },
    { name: "Midnight Midi Dress", price: 32.79, clothingType: "fullbody", description: "Black lace gothic dress", image: "https://m.media-amazon.com/images/I/61gzBsexxqL._AC_UY350_.jpg", alt: "Model in black lace gothic dress" },
    { name: "Megadeath Band Tee", price: 24.59, clothingType: "tops", description: "Black t-shirt with licensed band graphic", image: "https://www.merchoid.com/media/mf_webp/jpg/media/catalog/product/cache/899cf85b6a08df74889d73fb89ce7f4a/m/e/megadeth-rust-in-peace-anniversary-black-t-shirt-1.webp", alt: "Black t-shirt for the band Megadeath's album 'Rust in Peace'" },
    { name: "Gyaru Fur Boots", price: 27.79, clothingType: "shoes", description: "Faux fur knee-high boots", image: "https://glitchcupids.com/cdn/shop/files/glitch-cupids-michicat-retro-detachable-fur-pants-01.jpg?v=1701864263", alt: "Lower half of a model wearing fur boots" },
    { name: "Holy Belt", price: 39.59, clothingType: "accessories", description: "Belt with holes in it", image: "https://i5.walmartimages.com/asr/e1779c36-0edf-4988-9c43-45cd548b574e.21ce0cba9ff863c9bffbdccf92011a65.jpeg", alt: "Black belt with metal ring pattern on model wearing jeans" }
 ]


function addProducts(name, source, altText, price, type) {
   
   if (document.getElementById(type).checked || document.getElementById("all").checked) {
         const newSection = document.createElement("section"); // section for individual product

         const productImage = document.createElement("img"); // cover image and it's information
         productImage.src = source;
         productImage.alt = altText;

         const productName = document.createElement("a"); // title of the product
         productName.textContent = name;

         const productPrice = document.createElement("price"); // price of the product (fixing 'price' tag issue is out of scope for this assignment)
         productPrice.textContent = "$" + price + " CAD";

         newSection.appendChild(productImage); // append all product information into its section
         newSection.appendChild(productName);
         newSection.appendChild(productPrice);

         const mainSection = document.getElementById("productPage");
         mainSection.appendChild(newSection); // append individual product into the products section of page
      }
}

function loadProducts() { // called when filtering and on script load
   const clearPage = document.getElementById("productPage");
   clearPage.innerHTML = "";
   products.forEach(function (product) { // loop through each object(product) in 'products' array
   addProducts(product.name, product.image, product.alt, product.price, product.clothingType);
});
}

// filter drop down menu
function useAccordion() {
   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
         this.classList.toggle("active");

         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
            panel.style.display = "none";
         } else {
            panel.style.display = "block";
         }
      });
   }
}

loadProducts();
useAccordion();