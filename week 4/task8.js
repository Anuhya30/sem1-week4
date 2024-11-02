function greetInLanguage(languageCode) {
    let greeting;

    switch (languageCode) {
        case 'en':
            greeting = "Hello!";
            break;
        case 'fr':
            greeting = "Bonjour!";
            break;
        case 'es':
            greeting = "¡Hola!";
            break;
        case 'de':
            greeting = "Hallo!";
            break;
        case 'it':
            greeting = "Ciao!";
            break;
            
        default:
            greeting = "Hello! (Default greeting)";
            break;
    }

    console.log(greeting);
}


greetInLanguage('en'); // Hello!
greetInLanguage('fr'); // Bonjour!
greetInLanguage('es'); // ¡Hola!
greetInLanguage('de'); // Hallo!
greetInLanguage('it'); // Ciao!
greetInLanguage('zh'); // 你好 (Nǐ hǎo)!
greetInLanguage('jp'); // Hello! (Default greeting)
