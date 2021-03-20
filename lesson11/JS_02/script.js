const countries = new CountriesStorage();

function askCountry(){
  const countryName = prompt("Введите название страны", "Великобритания");
  const countryCapital = prompt("Введите название столицы", "Лондон");
  countries.addCountry(countryName, countryCapital);
}

function showCountries(){
  countries.readCountries();
}

function showCountryInfo(){
  const countryName = prompt("Про какую страны вы бы хотели узнать?", "Великобритания");
  countries.readCountry(countryName);
}

function deleteCountry(){
  const countryName = prompt("Введите название страны, которую вы хотите удалить", "Великобритания");
  countries.deleteCountry(countryName);
}



