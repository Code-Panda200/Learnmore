let products = {
    data: [
      {
        productName: "Adobe Photoshop Course",
        category: "Skills",
        price: "",
        image: "IMG/Adobe Photoshop.png",                
      },
      {
        productName: "React JS Course",
        category: "Skills",
        price: "",
        image: "IMG/React JS.png",
      },
      {
        productName: "Get The Formula",
        category: "Quiz",
        price: "",
        image: "IMG/Math-1.png",
      },
      {
        productName: "Know about Banglasdesh",
        category: "History",
        price: "",
        image: "IMG/Bangladesh Search.png",
      },
      {
        productName: "Bangubandhu Sheikh Mujibur Rahman",
        category: "Biography",
        price: "",
        image: "IMG/Bangubandhu.png",
      },
      {
        productName: "Rabindranath Tagore",
        category: "Biography",
        price: "",
        image: "IMG/Rabindranath.png",
      },
      {
        productName: "Know about Turkey",
        category: "History",
        price: "",
        image: "IMG/Turkey Search.png",
      },
      {
        productName: "Know about Australia",
        category: "History",
        price: "",
        image: "IMG/Australia Search.png",
      },
      {
        productName: "History of Ahsan Manjil",
        category: "History",
        price: "",
        image: "IMG/Ahsan Manjil.png",
      },
      {
        productName: "A.K Fazlul Hauque",
        category: "Biography",
        price: "",
        image: "IMG/A.K Fazlul Hauque.png",
      },
      {
        productName: "Begum Rokeya",
        category: "Biography",
        price: "",
        image: "IMG/Begum rokeya.png",
      },
      {
        productName: "Know About Thailand",
        category: "History",
        price: "",
        image: "IMG/Thailand search.png",
      },
      {
        productName: "Know about Japan",
        category: "Country",
        price: "",
        image: "IMG/Japan search.png",
      },
      {
        productName: "Find The Bug",
        category: "Events",
        price: "",
        image: "IMG/Coumputer-1.png",
      },
      {
        productName: "Know About Canada",
        category: "History",
        price: "",
        image: "IMG/Canada.jpg",
      },
      {
        productName: "Copy It",
        category: "Events",
        price: "",
        image: "IMG/Coumputer-3.png",
      },
      {
        productName: "CSS 3",
        category: "Skills",
        price: "",
        image: "IMG/CSS 3.png",
      },
      {
        productName: "Mao Asada",
        category: "Biography",
        price: "",
        image: "IMG/Mao Asada S.png",
      },
      {
        productName: "Kazi Nazrul Islam",
        category: "Biography",
        price: "",
        image: "IMG/Kazi nazrul Islam.png",
      },
      {
        productName: "Know About Sydney",
        category: "History",
        price: "",
        image: "IMG/Sydney Search.png",
      },
      {
        productName: "Ginza",
        category: "History",
        price: "",
        image: "IMG/Ginza S.png",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
// TOP BUTTON  
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#38B6FF ${scrollValue}%, #d6d6d6 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// TOP BUTTON 

  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

