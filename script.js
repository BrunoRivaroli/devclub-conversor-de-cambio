
const convertButton = document.querySelector("button")
const convertedSelect = document.querySelector(".currency-converted")
const convertSelect = document.querySelector(".currency-convert")



async function converter() {
  const valueConvert = document.querySelector(".value-convert").value
  const currencyValueConverted = document.querySelector(".currency-value-converted")
  const currencyValue = document.querySelector(".currency-value-convert")

  const data = await fetch("https://economia.awesomeapi.com.br/last/GBP-BRL,USD-BRL,EUR-BRL").then(response => response.json())

  const valueDolar = data.USDBRL.bid
  const valueEuro = data.EURBRL.bid
  const valueLibra = data.GBPBRL.bid

  currencyValue.innerHTML = new Intl.NumberFormat(
    "pt-BR", { style: "currency", currency: "BRL" }).format(
      valueConvert)

  if (convertedSelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat(
      "en-US", { style: "currency", currency: "USD" }).format(
        valueConvert / valueDolar)
  }

  if (convertedSelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat(
      "de-DE", { style: "currency", currency: "EUR" }).format(
        valueConvert / valueEuro)
  }

  if (convertedSelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat(
      "en-GB", { style: "currency", currency: "GBP" }).format(
        valueConvert / valueLibra)
  }
}

function changeCurrency() {
  const currencyName = document.querySelector(".currency-name")
  const currencyImage = document.querySelector(".currency-img-converted")


  if (convertedSelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/us.svg"
  }
  if (convertedSelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/eu.svg"
  }
  if (convertedSelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/gb.svg"
  }
  converter()
}

convertButton.addEventListener("click", converter)
convertedSelect.addEventListener("change", changeCurrency)

