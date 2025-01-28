document.addEventListener("DOMContentLoaded", () => {
    const priceDataElement = document.getElementById("price-data");
  
    async function fetchCropPrices() {
      try {
        const response = await fetch("https://api.example.com/crop-prices");
        if (!response.ok) throw new Error("Failed to fetch crop prices");
  
        const data = await response.json();
        updatePriceTable(data);
      } catch (error) {
        console.error("Error fetching crop prices:", error);
      }
    }
  
    function updatePriceTable(prices) {
      priceDataElement.innerHTML = prices
        .map(price => {
          return `
            <tr>
              <td>${price.crop}</td>
              <td>${price.market}</td>
              <td>${price.minPrice}</td>
              <td>${price.maxPrice}</td>
              <td>${price.modalPrice}</td>
              <td>${price.date}</td>
            </tr>
          `;
        })
        .join("");
    }
  
    fetchCropPrices();
  });
  