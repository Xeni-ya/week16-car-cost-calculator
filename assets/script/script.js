// 2. Используя JavaScript, добавьте обработчик события изменения (change) для каждого элемента калькулятора:
// Создайте функцию calculatePrice(), которая будет вызываться при изменении любого элемента калькулятора
// В функции calculatePrice(), получите значения выбранных элементов (марка, модель, тип топлива, объем двигателя, состояние автомобиля, количество владельцев, способ оплаты)
// Используя полученные значения, расчетом определите стоимость автомобиля в зависимости от выбранных параметров
// Обновите отображение стоимости на странице

// 3. Улучшите калькулятор, добавив следующие функциональности:
// Динамическое обновление списка моделей автомобилей в зависимости от выбранной марки
// Установка предустановленных значений для некоторых элементов калькулятора
// Обработка ошибок и отображение соответствующих сообщений при некорректном вводе данных
// Анимация или изменение стиля элементов калькулятора при выборе определенных параметров
// Возможность сброса значений и стоимости автомобиля к исходным значениям

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const conditionSelect = document.getElementById('condition');
const ownerSelect = document.getElementById('owner');
const engineVolumeInput = document.getElementById('engineVolume');
const fuelSelect = document.getElementById('fuel');
const paymentSelect = document.getElementById('payment');
const priceResult = document.getElementById('priceResult');
const ownerDiv = document.getElementById('ownerDiv');

function calculatePrice() {
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const fuel = fuelSelect.value;
  const engineVolume = engineVolumeInput.value;
  const condition = conditionSelect.value;
  const owner = ownerSelect.value;
  const payment = paymentSelect.value;

  if (brand === 'Jaguar') {
    price *= 2;
  } else if (brand === 'Mazda') {
    price *= 1.5;
  }

  if (model === 'F-Pace' || model === 'CX-5') {
    price *= 1.2;
  }
  
  if (condition === 'подержанный') {
    price *= ownerPrices[owner];
  }

  if (payment === 'картой') {
    price *= 1.05;
  }
}
brandSelect.addEventListener('change', () => {
    calculatePrice();
});