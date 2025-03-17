        // for Shirt #1
        function updateTotal1() {
            let total = 0;
            const inputs = document.querySelectorAll('.SizeInput');
            inputs.forEach(input => {
                total += parseInt(input.value) || 0;
            });
            document.getElementById('totalQuantity1').innerText = total;
            updateTotalPrice1(total);
        }

        function updateTotalPrice1(totalQuantity1) {
            const shirtPrice1 = parseFloat(document.getElementById('ShirtPrice1').innerText.replace('$', ''));
            const totalPrice1 = totalQuantity1 * shirtPrice1;
            document.getElementById('totalPrice1').innerText = `$${totalPrice1.toFixed(2)}`;
        }

        // for Shirt #2
        function updateTotal2() {
            let total = 0;
            const inputs = document.querySelectorAll('.SizeInput2');
            inputs.forEach(input => {
                total += parseInt(input.value) || 0;
            });
            document.getElementById('totalQuantity2').innerText = total;
            updateTotalPrice2(total);
        }

        function updateTotalPrice2(totalQuantity2) {
            const shirtPrice2 = parseFloat(document.getElementById('ShirtPrice2').innerText.replace('$', ''));
            const totalPrice2 = totalQuantity2 * shirtPrice2;
            document.getElementById('totalPrice2').innerText = `$${totalPrice2.toFixed(2)}`;
        }

        document.addEventListener('DOMContentLoaded', () => {
        // Set data for shirt #1    
            const shirtPrice1 = 35;
                document.getElementById('ShirtPrice1').innerText = `$${shirtPrice1}`;
            const shirtDescription1 = "Independent Trading Co. Midweight Hooded Sweatshirt";
                document.getElementById('ShirtDescription1').innerText = shirtDescription1;
            const ShirtColor1 = "Bone";
                document.getElementById('ShirtColor1').innerText = ShirtColor1;
           
        // Set data shirt #2
            const shirtPrice2 = 18;
                document.getElementById('ShirtPrice2').innerText = `$${shirtPrice2}`;
            const shirtDescription2 = "Tultex CVC Blend Short Sleeve T-Shirt";
                document.getElementById('ShirtDescription2').innerText = shirtDescription2;
            const ShirtColor2 = "Terracotta";
                document.getElementById('ShirtColor2').innerText = ShirtColor2;
         });

        // Update total quantity
        function updateTotalQuantity() {
            const totalQuantity1 = parseFloat(document.getElementById('totalQuantity1').innerText);
            const totalQuantity2 = parseFloat(document.getElementById('totalQuantity2').innerText);
            const TotalQuantity = totalQuantity1 + totalQuantity2;
            document.getElementById('TotalQuantity').innerText = TotalQuantity;
        }

        function updateTotalQuantitySkinny() {
            const totalQuantity1 = parseFloat(document.getElementById('totalQuantity1').innerText);
            const totalQuantity2 = parseFloat(document.getElementById('totalQuantity2').innerText);
            const TotalQuantitySkinny = totalQuantity1 + totalQuantity2;
            document.getElementById('TotalQuantitySkinny').innerText = TotalQuantitySkinny;
        }

         // Generate Subtotal
         function updateSubTotal() {
            const totalPrice1 = parseFloat(document.getElementById('totalPrice1').innerText.replace('$', ''));
            const totalPrice2 = parseFloat(document.getElementById('totalPrice2').innerText.replace('$', ''));
            const SubTotal = totalPrice1 + totalPrice2;
            document.getElementById('SubTotal').innerText = `$${SubTotal.toFixed(2)}`;
        }

        function updateSubTotalSkinny() {
            const totalPrice1 = parseFloat(document.getElementById('totalPrice1').innerText.replace('$', ''));
            const totalPrice2 = parseFloat(document.getElementById('totalPrice2').innerText.replace('$', ''));
            const SubTotalSkinny = totalPrice1 + totalPrice2;
            document.getElementById('SubTotalSkinny').innerText = `$${SubTotalSkinny.toFixed(2)}`;
        }

        // Generate Sales Tax
        function updateSalesTax() {
            const SubTotal = parseFloat(document.getElementById('SubTotal').innerText.replace('$', ''));
            const salesTax = SubTotal * 0.07;
            document.getElementById('SalesTax').innerText = `$${salesTax.toFixed(2)}`;
        }

        function updateSalesTaxSkinny() {
            const SubTotal = parseFloat(document.getElementById('SubTotal').innerText.replace('$', ''));
            const salesTax = SubTotal * 0.07;
            document.getElementById('SalesTaxSkinny').innerText = `$${salesTax.toFixed(2)}`;
        }

        // Generate Grand Total 
        function updateGrandTotal() {
            const SubTotal = parseFloat(document.getElementById('SubTotal').innerText.replace('$', ''));
            const salesTax = parseFloat(document.getElementById('SalesTax').innerText.replace('$', ''));
            const GrandTotal = SubTotal + salesTax;
            document.getElementById('GrandTotal').innerText = `$${GrandTotal.toFixed(2)}`;
        }

        function updateGrandTotalSkinny() {
            const SubTotal = parseFloat(document.getElementById('SubTotal').innerText.replace('$', ''));
            const salesTax = parseFloat(document.getElementById('SalesTax').innerText.replace('$', ''));
            const GrandTotalSkinny = SubTotal + salesTax;
            document.getElementById('GrandTotalSkinny').innerText = `$${GrandTotalSkinny.toFixed(2)}`;
        }
   

        // Event Listeners
            document.addEventListener('input', updateTotal1);
            document.addEventListener('input', updateTotal2);
            document.addEventListener('input', updateSubTotal);
            document.addEventListener('input', updateTotalQuantity);
            document.addEventListener('input', updateSalesTax);
            document.addEventListener('input', updateGrandTotal);
            document.addEventListener('input', updateTotalQuantitySkinny);
            document.addEventListener('input', updateSubTotalSkinny);
            document.addEventListener('input', updateSalesTaxSkinny);
            document.addEventListener('input', updateGrandTotalSkinny);