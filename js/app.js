document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Quotes data with proper image URLs
  const quotes = [
    {
      id: 1,
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "motivation",
      era: "modern",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Eleanor_Roosevelt_portrait_1933.jpg/220px-Eleanor_Roosevelt_portrait_1933.jpg",
    },
    {
      id: 2,
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
      category: "wisdom",
      era: "modern",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    },
    {
      id: 3,
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "success",
      era: "modern",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/220px-Sir_Winston_Churchill_-_19086236948.jpg",
    },
    {
      id: 4,
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      category: "wisdom",
      era: "contemporary",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg",
    },
    {
      id: 5,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "success",
      era: "contemporary",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP.jpg/220px-Steve_Jobs_Headshot_2010-CROP.jpg",
    },
    {
      id: 6,
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
      category: "life",
      era: "modern",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/220px-Martin_Luther_King%2C_Jr..jpg",
    },
    {
      id: 7,
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      category: "life",
      era: "contemporary",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/220px-John_Lennon_1969_%28cropped%29.jpg",
    },
    {
      id: 8,
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      category: "motivation",
      era: "contemporary",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28edit%29.jpg/220px-Nelson_Mandela-2008_%28edit%29.jpg",
    },
    {
      id: 9,
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      category: "wisdom",
      era: "ancient",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Qingming_Festival_-_Planting_Willow_Trees.jpg/220px-Qingming_Festival_-_Planting_Willow_Trees.jpg",
    },
    {
      id: 10,
      text: "Love all, trust a few, do wrong to none.",
      author: "William Shakespeare",
      category: "love",
      era: "renaissance",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg",
    },
    {
      id: 11,
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
      category: "leadership",
      era: "contemporary",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/John_C._Maxwell_by_Gage_Skidmore.jpg/220px-John_C._Maxwell_by_Gage_Skidmore.jpg",
    },
    {
      id: 12,
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
      category: "motivation",
      era: "modern",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/220px-FDR_1944_Color_Portrait.jpg",
    },
    // Original quotes
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "success",
      era: "contemporary",
      image:
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "inspiration",
      era: "modern",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "life",
      era: "modern",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      category: "wisdom",
      era: "ancient",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];

  // Update category filter options
  updateCategoryFilter(quotes);

  // Display all quotes initially
  displayQuotes(quotes);

  // Filter functionality
  document
    .getElementById("categoryFilter")
    .addEventListener("change", filterQuotes);
  document.getElementById("eraFilter").addEventListener("change", filterQuotes);
  document
    .getElementById("searchInput")
    .addEventListener("input", filterQuotes);

  function updateCategoryFilter(quotes) {
    const categoryFilter = document.getElementById("categoryFilter");
    const categories = [...new Set(quotes.map((quote) => quote.category))];

    // Clear existing options except "All Categories"
    while (categoryFilter.options.length > 1) {
      categoryFilter.remove(1);
    }

    // Add new categories
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categoryFilter.appendChild(option);
    });
  }

  function filterQuotes() {
    const category = document.getElementById("categoryFilter").value;
    const era = document.getElementById("eraFilter").value;
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();

    const filteredQuotes = quotes.filter((quote) => {
      const matchesCategory = category === "all" || quote.category === category;
      const matchesEra = era === "all" || quote.era === era;
      const matchesSearch =
        searchTerm === "" ||
        quote.text.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesEra && matchesSearch;
    });

    displayQuotes(filteredQuotes);
  }

  function displayQuotes(quotesToDisplay) {
    const container = document.getElementById("quotesContainer");
    container.innerHTML = "";

    if (quotesToDisplay.length === 0) {
      container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-medium text-gray-500">No quotes found</h3>
                    <p class="text-gray-400">Try adjusting your filters or search term</p>
                </div>
            `;
      return;
    }

    quotesToDisplay.forEach((quote, index) => {
      const quoteElement = document.createElement("div");
      quoteElement.className =
        "quote-card bg-white rounded-lg shadow-md p-6 fade-in";
      quoteElement.style.animationDelay = `${index * 0.1}s`;

      // Format category for display
      const categoryDisplay =
        quote.category.charAt(0).toUpperCase() + quote.category.slice(1);

      quoteElement.innerHTML = `
                <div class="flex items-start mb-4">
                    <img src="${quote.image}" alt="${
        quote.author
      }" class="author-image rounded-full mr-4 shadow">
                    <div>
                        <h3 class="font-bold text-lg">${quote.author}</h3>
                        <span class="category-badge ${
                          quote.category
                        }">${categoryDisplay}</span>
                    </div>
                </div>
                <p class="quote-text text-gray-700 mb-4 italic">${
                  quote.text
                }</p>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span class="era-badge bg-gray-100 px-2 py-1 rounded">${
                      quote.era.charAt(0).toUpperCase() + quote.era.slice(1)
                    }</span>
                    <button class="like-btn text-gray-400 hover:text-red-500 transition">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            `;

      container.appendChild(quoteElement);
    });

    // Add event listeners to like buttons
    document.querySelectorAll(".like-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const icon = this.querySelector("i");
        if (icon.classList.contains("far")) {
          icon.classList.remove("far");
          icon.classList.add("fas", "text-red-500");
        } else {
          icon.classList.remove("fas", "text-red-500");
          icon.classList.add("far");
        }
      });
    });
  }
});
