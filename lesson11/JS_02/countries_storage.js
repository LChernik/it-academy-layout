function CountriesStorage(){
    this.storage = new LocalStorage("countries");
    this.addCountry = function(countryName, countryCapital){
        if(!this.storage.getValue(countryName)){
            this.storage.addValue(countryName, {countryCapital});
        } else {
            alert("Страна с таким именем уже есть, попробуйте ввести новую");
        };
    };
    this.readCountry = function(name){
        const country = this.storage.getValue(name);
        if(country){
            alert(`Название страны: ${name}\n Название столицы: ${country.countryCapital}`); 
        } else {
            alert("Записи о такой стране нет")
        }
    };
    this.deleteCountry = function(name){
        if(this.storage.getValue(name) === undefined){
            alert("Записи о такой стране нет");
        } else {
        this.storage.deleteValue(name);
            alert("Страна была удалена");
        }
    };
    this.readCountries = function(){
        if(this.storage.getKeys().length === 0){ 
            alert("Нет записей о странах");
        } else {
            alert(this.storage.getKeys()
                .map(x => ({countryName: x, ...this.storage.getValue(x)}))
                .map(x => `Страна: ${x.countryName}\nСтолица: ${x.countryCapital}`)
                .join("\n\n")
            );
        }
    };
}
