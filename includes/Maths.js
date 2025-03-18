document.addEventListener('DOMContentLoaded', () => {
    // Product data
    const products = [
        {
            id: 1,
            price: 35,
            description: "Independent Trading Co. Midweight Hooded Sweatshirt",
            color: "Bone",
            sizeInputClass: '.SizeInput'
        },
        {
            id: 2,
            price: 18,
            description: "Tultex CVC Blend Short Sleeve T-Shirt",
            color: "Terracotta",
            sizeInputClass: '.SizeInput2'
        }
    ];
    
    // Initialize product data
    products.forEach(product => {
        const id = product.id;
        document.getElementById(`ShirtPrice${id}`).innerText = `$${product.price}`;
        document.getElementById(`ShirtDescription${id}`).innerText = product.description;
        document.getElementById(`ShirtColor${id}`).innerText = product.color;
    });
    
    // Setup event listeners for all inputs
    document.addEventListener('input', updateAllTotals);
    
    // Initialize all totals
    updateAllTotals();
});

// Update all totals at once
function updateAllTotals() {
    // Calculate individual shirt totals
    const totals = {
        quantities: [0, 0],
        prices: [0, 0]
    };
    
    // Calculate for shirt 1
    totals.quantities[0] = calculateQuantity('.SizeInput');
    totals.prices[0] = calculatePrice(totals.quantities[0], 'ShirtPrice1');
    
    // Calculate for shirt 2
    totals.quantities[1] = calculateQuantity('.SizeInput2');
    totals.prices[1] = calculatePrice(totals.quantities[1], 'ShirtPrice2');
    
    // Update UI with individual shirt totals
    updateUI(1, totals.quantities[0], totals.prices[0]);
    updateUI(2, totals.quantities[1], totals.prices[1]);
    
    // Calculate and update combined totals
    const totalQuantity = totals.quantities[0] + totals.quantities[1];
    const subTotal = totals.prices[0] + totals.prices[1];
    const salesTax = subTotal * 0.07;
    const grandTotal = subTotal + salesTax;
    
    // Update main totals
    updateCombinedTotals('TotalQuantity', 'SubTotal', 'SalesTax', 'GrandTotal', 
                         totalQuantity, subTotal, salesTax, grandTotal);
    
    // Update skinny totals (same values, different elements)
    updateCombinedTotals('TotalQuantitySkinny', 'SubTotalSkinny', 'SalesTaxSkinny', 'GrandTotalSkinny', 
                         totalQuantity, subTotal, salesTax, grandTotal);
}

// Calculate total quantity for a given selector
function calculateQuantity(selector) {
    let total = 0;
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        total += parseInt(input.value) || 0;
    });
    return total;
}

// Calculate price based on quantity and price element
function calculatePrice(quantity, priceElementId) {
    const price = parseFloat(document.getElementById(priceElementId).innerText.replace('$', ''));
    return quantity * price;
}

// Update UI for a single shirt
function updateUI(shirtId, quantity, totalPrice) {
    document.getElementById(`totalQuantity${shirtId}`).innerText = quantity;
    document.getElementById(`totalPrice${shirtId}`).innerText = `$${totalPrice.toFixed(2)}`;
}

// Update combined totals in UI
function updateCombinedTotals(quantityId, subTotalId, taxId, grandTotalId, quantity, subTotal, tax, grandTotal) {
    document.getElementById(quantityId).innerText = quantity;
    document.getElementById(subTotalId).innerText = `$${subTotal.toFixed(2)}`;
    document.getElementById(taxId).innerText = `$${tax.toFixed(2)}`;
    document.getElementById(grandTotalId).innerText = `$${grandTotal.toFixed(2)}`;
}