function profile() {
    let user = {
        firstName: "",
        fathersName: "",
        lastName: "", 
        dob: undefined,
        sex: "мужской",
        retired: ""
    };
    let countedWords = 0;
    do {
        user.firstName = prompt("Введите ваше Имя", "Петр");
        countedWords = countWords(user.firstName);
        switch(true){
            case countedWords === null: 
                alert("Вы отменили анкету");
                return;
            case countedWords > 1: 
                alert("Ваше имя больше одного слова. Пожалуйста, исправьте ошибку.");
                break;
            case countedWords < 1: 
                alert("Ваше имя меньше одного слова. Пожалуйста, исправьте ошибку.");
                break;
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.fathersName = prompt("Введите ваше Отчество", "Петрович");
        countedWords = countWords(user.fathersName);
        switch(true){
            case countedWords === null: 
                alert("Вы отменили анкету");
                return;
            case countedWords > 1: 
                alert("Ваше Отчество больше одного слова. Пожалуйста, исправьте ошибку.");
                break;
            case countedWords < 1: 
                alert("Ваше Отчество меньше одного слова. Пожалуйста, исправьте ошибку.");
                break;
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.lastName = prompt("Введите вашу Фамилию", "Петрович");
        countedWords = countWords(user.lastName);
        switch(true){
            case countedWords === null: 
                alert("Вы отменили анкету");
                return;
            case countedWords > 1: 
                alert("Ваша Фамилия больше одного слова. Пожалуйста, исправьте ошибку.");
                break;
            case countedWords < 1: 
                alert("Ваша Фамилия  меньше одного слова. Пожалуйста, исправьте ошибку.");
                break;
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.dob = prompt("Возраст", "Ваш возраст");
        switch (user.dob) {
            case null:
                alert("Вы отменили анкету");
                return;
        }
        user.dob = parseInt(user.dob, 10);
        isNaN(user.dob)
            ? alert("Введите ваш возраст в числовом формате")
            : undefined;
    } while (isNaN(user.dob))
    user.sex = confirm("Ваш пол? \n Если ваш пол мужской, нажмите OK. \n Если ваш пол женский, нажмите Cancel.")
        ? "мужской"
        : "женский";
    user.retired = ((user.sex == "мужской" && user.dob >= 65) || (user.sex == "женский" && user.dob >= 55))
        ? "да"
        : "нет";
    alert(
        `
        Ваше ФИО: ${user.firstName} ${user.fathersName} ${user.lastName}
        Ваш возраст в годах: ${user.dob}
        Ваш возраст в днях: ${user.dob * 365}
        Через 5 лет вам будет: ${user.dob + 5}
        Ваш пол: ${user.sex}
        Вы на пенсии: ${user.retired}
        `
    );
    
    function countWords(str) {
        return str === null 
            ? null
            : str
                .replace(/(^\s*)|(\s*$)/gi, "")
                .replace(/[ ]{2,}/gi, " ")
                .split(' ')
                .length;
    }
}