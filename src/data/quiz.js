const quiz = [
    // Western Europe
    {
      questionText: 'What the capital of Austia?',
      questionImage: 'images/austria.jpg',
      answerOptions: [
        { answerText: 'England', isCorrect: false },
        { answerText: 'Vienna', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Rome', isCorrect: false }
      ]
    },
    {
      questionText: 'What the capital of Belgium?',
      questionImage: 'images/belgium.jpg',
      answerOptions: [
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Moscow', isCorrect: false },
        { answerText: 'Zagreb', isCorrect: false },
        { answerText: 'Brussels', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of United Kingdom?',
      questionImage: 'images/uk.jpg',
      answerOptions: [
        { answerText: 'Los-Angeles', isCorrect: false },
        { answerText: 'York', isCorrect: false },
        { answerText: 'Barcelona', isCorrect: false },
        { answerText: 'London', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Germany?',
      questionImage: 'images/germany.jpg',
      answerOptions: [
        { answerText: 'Berlin', isCorrect: true },
        { answerText: 'Canberra', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Reykjavik', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Ireland?',
      questionImage: 'images/ireland.jpg',
      answerOptions: [
        { answerText: 'Bern', isCorrect: false },
        { answerText: 'Tallinn', isCorrect: false },
        { answerText: 'Florence', isCorrect: false },
        { answerText: 'Dublin', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Liechtenstein?',
      questionImage: 'images/liechtenstein.jpg',
      answerOptions: [
        { answerText: 'Iceland', isCorrect: false },
        { answerText: 'Vaduz', isCorrect: true },
        { answerText: 'New-York', isCorrect: false },
        { answerText: 'St. Petersburg', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Luxemburg?',
      questionImage: 'images/luxemburg.jpg',
      answerOptions: [
        { answerText: 'Luxemburg', isCorrect: true },
        { answerText: 'Moscow', isCorrect: false },
        { answerText: 'Washington', isCorrect: false },
        { answerText: 'Frankfurt', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Monaco?',
      questionImage: 'images/monaco.jpg',
      answerOptions: [
        { answerText: 'Siena', isCorrect: false },
        { answerText: 'Sofia', isCorrect: false },
        { answerText: 'Monaco', isCorrect: true },
        { answerText: 'Kazan', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Netherlands?',
      questionImage: 'images/netherlands.jpg',
      answerOptions: [
        { answerText: 'Toronto', isCorrect: false },
        { answerText: 'Islamabad', isCorrect: false },
        { answerText: 'Tirana', isCorrect: false },
        { answerText: 'Amsterdam', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of France?',
      questionImage: 'images/france.jpg',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'New-York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Ottawa', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Switzerland?',
      questionImage: 'images/france.jpg',
      answerOptions: [
        { answerText: 'Bern', isCorrect: true },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Sarajevo', isCorrect: false },
        { answerText: 'Sydney', isCorrect: false }
      ]
    },

    // Eastern Europe
    {
      questionText: 'What the capital of Belarus?',
      questionImage: 'images/belarus.jpg',
      answerOptions: [
        { answerText: 'Moscow', isCorrect: false },
        { answerText: 'Minsk', isCorrect: true },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Kursk', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Bulgaria?',
      questionImage: 'images/bulgaria.jpg',
      answerOptions: [
        { answerText: 'Venice', isCorrect: false },
        { answerText: 'Sofia', isCorrect: true },
        { answerText: 'Manchester', isCorrect: false },
        { answerText: 'Chicago', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Hungary?',
      questionImage: 'images/hungary.jpg',
      answerOptions: [
        { answerText: 'Bruges', isCorrect: false },
        { answerText: 'Valletta', isCorrect: false },
        { answerText: 'Bucharest', isCorrect: false },
        { answerText: 'Budapest', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Moldova?',
      questionImage: 'images/moldova.jpg',
      answerOptions: [
        { answerText: 'Chisinau', isCorrect: true },
        { answerText: 'Barcelona', isCorrect: false },
        { answerText: 'Minsk', isCorrect: false },
        { answerText: 'Kiev', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Poland?',
      questionImage: 'images/poland.jpg',
      answerOptions: [
        { answerText: 'Lviv', isCorrect: false },
        { answerText: 'Gdansk', isCorrect: false },
        { answerText: 'Warsaw', isCorrect: true },
        { answerText: 'Donetsk', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Russia?',
      questionImage: 'images/russia.jpg',
      answerOptions: [
        { answerText: 'Kiev', isCorrect: false },
        { answerText: 'Washington', isCorrect: false },
        { answerText: 'St. Petersburg', isCorrect: false },
        { answerText: 'Moscow', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Romania?',
      questionImage: 'images/romania.jpg',
      answerOptions: [
        { answerText: 'Tirana', isCorrect: false },
        { answerText: 'Bucharest', isCorrect: true },
        { answerText: 'Ljubljana', isCorrect: false },
        { answerText: 'Budapest', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Slovakia?',
      questionImage: 'images/slovakia.jpg',
      answerOptions: [
        { answerText: 'Bratislava', isCorrect: true },
        { answerText: 'Belgrade', isCorrect: false },
        { answerText: 'Zagreb', isCorrect: false },
        { answerText: 'London', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Czech?',
      questionImage: 'images/czech.jpg',
      answerOptions: [
        { answerText: 'Bern', isCorrect: false },
        { answerText: 'Tallinn', isCorrect: false },
        { answerText: 'Prague', isCorrect: true },
        { answerText: 'Oslo', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Ukraine?',
      questionImage: 'images/ukraine.jpg',
      answerOptions: [
        { answerText: 'Minsk', isCorrect: false },
        { answerText: 'Riga', isCorrect: false },
        { answerText: 'Donetsk', isCorrect: false },
        { answerText: 'Kiev', isCorrect: true }
      ]
    },

    // North Europe
    {
      questionText: 'What the capital of Denmark?',
      questionImage: 'images/denmark.jpg',
      answerOptions: [
        { answerText: 'Copenhagen', isCorrect: true },
        { answerText: 'Reykjavik', isCorrect: false },
        { answerText: 'Stockholm', isCorrect: false },
        { answerText: 'Helsinki', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Iceland?',
      questionImage: 'images/iceland.jpg',
      answerOptions: [
        { answerText: 'Vilnius', isCorrect: false },
        { answerText: 'Oslo', isCorrect: false },
        { answerText: 'Brussels', isCorrect: false },
        { answerText: 'Reykjavik', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Latvia?',
      questionImage: 'images/latvia.jpg',
      answerOptions: [
        { answerText: 'Tallinn', isCorrect: false },
        { answerText: 'Riga', isCorrect: true },
        { answerText: 'Prague', isCorrect: false },
        { answerText: 'Bruges', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Lithuania?',
      questionImage: 'images/lithuania.jpg',
      answerOptions: [
        { answerText: 'Minsk', isCorrect: false },
        { answerText: 'Bucharest', isCorrect: false },
        { answerText: 'Warsaw', isCorrect: false },
        { answerText: 'Vilnius', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Norway?',
      questionImage: 'images/norway.jpg',
      answerOptions: [
        { answerText: 'Oslo', isCorrect: true },
        { answerText: 'Reykjavik', isCorrect: false },
        { answerText: 'Stockholm', isCorrect: false },
        { answerText: 'Copenhagen', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Finland?',
      questionImage: 'images/finland.jpg',
      answerOptions: [
        { answerText: 'Murmansk', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Helsinki', isCorrect: true },
        { answerText: 'Bruges', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Estonia?',
      questionImage: 'images/estonia.jpg',
      answerOptions: [
        { answerText: 'Riga', isCorrect: false },
        { answerText: 'Tallinn', isCorrect: true },
        { answerText: 'Vilnius', isCorrect: false },
        { answerText: 'Minsk', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Sweden?',
      questionImage: 'images/sweden.jpg',
      answerOptions: [
        { answerText: 'Oslo', isCorrect: false },
        { answerText: 'Odense', isCorrect: false },
        { answerText: 'Reykjavik', isCorrect: false },
        { answerText: 'Stockholm', isCorrect: true }
      ]
    },

    // South Europe
    {
      questionText: 'What the capital of Albania?',
      questionImage: 'images/albania.jpg',
      answerOptions: [
        { answerText: 'Tirana', isCorrect: true },
        { answerText: 'Sarajevo', isCorrect: false },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Belgrade', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Andorra?',
      questionImage: 'images/andorra.jpg',
      answerOptions: [
        { answerText: 'San Marino', isCorrect: false },
        { answerText: 'Vatican', isCorrect: false },
        { answerText: 'Andorra la Vella', isCorrect: true },
        { answerText: 'Ljubljana', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Bosnia and Herzegovina?',
      questionImage: 'images/big.jpg',
      answerOptions: [
        { answerText: 'Tirana', isCorrect: false },
        { answerText: 'Sarajevo', isCorrect: true },
        { answerText: 'Skopje', isCorrect: false },
        { answerText: 'Belgrade', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Vatican?',
      questionImage: 'images/vatican.jpg',
      answerOptions: [
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Andorra la Vella', isCorrect: false },
        { answerText: 'Monaco', isCorrect: false },
        { answerText: 'Vatican', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Greece?',
      questionImage: 'images/greece.jpg',
      answerOptions: [
        { answerText: 'Athens', isCorrect: true },
        { answerText: 'Thessaloniki', isCorrect: false },
        { answerText: 'Valletta', isCorrect: false },
        { answerText: 'Cyprus', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Spain?',
      questionImage: 'images/spain.jpg',
      answerOptions: [
        { answerText: 'Sofia', isCorrect: false },
        { answerText: 'Valencia', isCorrect: false },
        { answerText: 'Madrid', isCorrect: true },
        { answerText: 'Barcelona', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Italy?',
      questionImage: 'images/italy.jpg',
      answerOptions: [
        { answerText: 'Vatican', isCorrect: false },
        { answerText: 'Rome', isCorrect: true },
        { answerText: 'Venice', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of North Macedonia?',
      questionImage: 'images/north-macedonia.jpg',
      answerOptions: [
        { answerText: 'Athens', isCorrect: false },
        { answerText: 'Sarajevo', isCorrect: false },
        { answerText: 'Ljubljana', isCorrect: false },
        { answerText: 'Scopje', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Malta?',
      questionImage: 'images/malta.jpg',
      answerOptions: [
        { answerText: 'Valletta', isCorrect: true },
        { answerText: 'Cyprus', isCorrect: false },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Tirana', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Portugal?',
      questionImage: 'images/portugal1.jpg',
      answerOptions: [
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Lisbon', isCorrect: true },
        { answerText: 'Bruges', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of San Marino?',
      questionImage: 'images/san-marino.jpg',
      answerOptions: [
        { answerText: 'San Marino', isCorrect: true },
        { answerText: 'Andorra la Vella', isCorrect: false },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Monaco', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Serbia?',
      questionImage: 'images/serbia.jpg',
      answerOptions: [
        { answerText: 'Sofia', isCorrect: false },
        { answerText: 'Bucharest', isCorrect: false },
        { answerText: 'Belgrade', isCorrect: true },
        { answerText: 'Sarajevo', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Slovenia?',
      questionImage: 'images/slovenia.jpg',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Moscow', isCorrect: false },
        { answerText: 'Tallin', isCorrect: false },
        { answerText: 'Ljubljana', isCorrect: true }
      ]
    },

    {
      questionText: 'What the capital of Croatia?',
      questionImage: 'images/croatia.jpg',
      answerOptions: [
        { answerText: 'Zagreb', isCorrect: true },
        { answerText: 'Bratislava', isCorrect: false },
        { answerText: 'Prague', isCorrect: false },
        { answerText: 'Tirana', isCorrect: false }
      ]
    },

    {
      questionText: 'What the capital of Montenegro?',
      questionImage: 'images/montenegro.jpg',
      answerOptions: [
        { answerText: 'Marrakesh', isCorrect: false },
        { answerText: 'Vilnius', isCorrect: false },
        { answerText: 'Podgorica', isCorrect: true },
        { answerText: 'Athens', isCorrect: false }
      ]
    },
]

export default quiz