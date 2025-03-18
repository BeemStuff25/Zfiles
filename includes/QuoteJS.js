// document.addEventListener('DOMContentLoaded', function() {
//     const decoSelects = document.querySelectorAll('.decoSelect');
//     const decos = ['*none*', 'Screen Print', 'DTG', 'Embroidery', 'Digital Transfer', 'Appliqué'];

//     decoSelects.forEach(decoSelect => {
//         decos.forEach(deco => {
//             const option = document.createElement('option');
//             option.value = deco.toLowerCase();
//             option.textContent = deco;
//             decoSelect.appendChild(option);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Populate decoSelect elements
    const decoSelects = document.querySelectorAll('.decoSelect');
    const decos = ['Screen Print', 'DTG', 'Embroidery', 'Digital Transfer', 'Appliqué'];

    decoSelects.forEach(decoSelect => {
        decos.forEach(deco => {
            const option = document.createElement('option');
            option.value = deco.toLowerCase();
            option.textContent = deco;
            decoSelect.appendChild(option);
        });
    });

    // Populate productColor element
    const productColor = document.getElementById('productColor');
    const colors = ['from style', 'White', 'Black', 'Ash', 'Athletic Heather', 'Kelly Green', 'Daisy', 'Texas Orange', 'Purple Rush', 'etc...'];

    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        productColor.appendChild(option);
    });
});