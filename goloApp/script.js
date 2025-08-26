document.addEventListener('DOMContentLoaded', function() {
    const billetes200 = document.getElementById('billetes-200');
    const billetes100 = document.getElementById('billetes-100');
    const billetes50 = document.getElementById('billetes-50');
    const billetes20 = document.getElementById('billetes-20');
    const billetes10 = document.getElementById('billetes-10');
    const monedas5 = document.getElementById('monedas-5');
    const monedas2 = document.getElementById('monedas-2');
    const monedas1 = document.getElementById('monedas-1');
    const monedas050 = document.getElementById('monedas-050');
    const monedas020 = document.getElementById('monedas-020');
    const monedas010 = document.getElementById('monedas-010');
    const productosNoVendidos = document.getElementById('productos-no-vendidos');
    const totalVentas = document.getElementById('total-ventas');
    const calcularButton = document.getElementById('calcular');

    calcularButton.addEventListener('click', function() {
        let total = 0;

        total += parseInt(billetes200.value) * 200;
        total += parseInt(billetes100.value) * 100;
        total += parseInt(billetes50.value) * 50;
        total += parseInt(billetes20.value) * 20;
        total += parseInt(billetes10.value) * 10;
        total += parseInt(monedas5.value) * 5;
        total += parseInt(monedas2.value) * 2;
        total += parseInt(monedas1.value) * 1;
        total += parseFloat(monedas050.value) * 0.50;
        total += parseFloat(monedas020.value) * 0.20;
        total += parseFloat(monedas010.value) * 0.10;

        totalVentas.textContent = total.toFixed(2);

        // Get the selected date
        const salesDate = document.getElementById('sales-date').value;

        // Save the sales data to local storage
        localStorage.setItem(salesDate, total.toFixed(2));
    });
});
