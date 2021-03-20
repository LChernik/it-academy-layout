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
        if (user.firstName == null) {
            alert("Вы отменили анкету");
            return;
        }
        countedWords = countWords(user.firstName);
        if (countedWords > 1) {
            alert("Ваше имя больше одного слова. Пожалуйста, исправьте ошибку.");
        } else if (countedWords == 0) {
            alert("Ваше имя меньше одного слова. Пожалуйста, исправьте ошибку.")
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.fathersName = prompt("Введите ваше Отчество", "Петрович");
        if (user.fathersName == null) {
            alert("Вы отменили анкету");
            return;
        }
        countedWords = countWords(user.fathersName);
        if (countedWords > 1) {
            alert("Ваше Отчество больше одного слова. Пожалуйста, исправьте ошибку.");
        } else if (countedWords == 0) {
            alert("Ваше Отчество меньше одного слова. Пожалуйста, исправьте ошибку.")
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.lastName = prompt("Введите вашу Фамилию", "Петрович");
        if (user.lastName == null) {
            alert("Вы отменили анкету");
            return;
        }
        countedWords = countWords(user.lastName);
        if (countedWords > 1) {
            alert("Ваша Фамилия больше одного слова. Пожалуйста, исправьте ошибку.");
        } else if (countedWords == 0) {
            alert("Ваша Фамилия меньше одного слова. Пожалуйста, исправьте ошибку.")
        }
    } while (countedWords > 1 || countedWords < 1)
    do {
        user.dob = prompt("Возраст", "Ваш возраст");
        if (user.dob == null) {
            alert("Вы отменили анкету");
            return;
        }
        user.dob = parseInt(user.dob, 10);
        if (isNaN(user.dob)) {
            alert("Введите ваш возраст в числовом формате");
        }
    } while (isNaN(user.dob))
    if (confirm("Ваш пол? \n Если ваш пол мужской, нажмите OK. \n Если ваш пол женский, нажмите Cancel.")) {
        user.sex = "мужской";
    } else {
        user.sex = "женский";
    }
    if ((user.sex == "мужской" && user.dob >= 65) || (user.sex == "женский" && user.dob >= 55)) {
        user.retired = "да";
    } else {
        user.retired = "нет";
    }
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
        return str
            .replace(/(^\s*)|(\s*$)/gi, "")
            .replace(/[ ]{2,}/gi, " ")
            .split(' ')
            .length;
    }
}
