const qBank =[
    {
        question:
        "Who was the son of Bhima and Hidimba ?",
        answers: ["Barbarik", "Ghatotkacha", "Abhimanyu", "Jarasandha"],
        correct: "Ghatotkacha",
        questionId: "000001"
    },
    {
        question:
        "Who seized Draupadi by her hair and dragged her into the court?",
        answers: ["Duryodhan", "Drushtadyumna", "Duhshasana", "Vidura"],
        correct: "Duhshasana",
        questionId: "000002"
    },
    {
        question:
        "Great hero from Mahabharata who lived a life such a way that today he is another name for generosity and loyalty today. What is his name?",
        answers: ["Nakul", "Bhishma", "Arjun", "Karna"],
        correct: "Karna",
        questionId: "000003"
    },
    {
        question:
        "Kunti's Son Karna also known with this name ",
        answers: ["Kaurav", "Radhey", "Kauntey"],
        correct: "Radhey",
        questionId: "000004"
    },
    {
        question:
        "Who was Bhishma's mother?",
        answers: ["Ganga", "Saraswati", "Satyawati", "Laxmi" ],
        correct: "Ganga",
        questionId: "000005"
    },
    {
        question:
        "How many times did King Pandu was married?",
        answers: ["Twice", "Thrice", "Once", "None of these" ],
        correct: "Twice",
        questionId: "000006"
    },
    {
        question:
        "What was relation between King Pandu and Madri ?",
        answers: ["Brother-sister", "Father-Daughter", "Husband-Wife", "None of these" ],
        correct: "Husband-Wife",
        questionId: "000007"
    },
    {
        question:
        "Who was Dhritarashtra's wife?",
        answers: ["Madri", "Gandhari", "Uttara", "Kunti" ],
        correct: "Gandhari",
        questionId: "000008"
    },
    {
        question:
        "What was the name of Kingdom developed by Pandavas?",
        answers: ["Hastinapur", "Indraprastha", "Dwarika", "Avanti" ],
        correct: "Indraprastha",
        questionId: "000009"
    },
    {
        question:
        "Name the rishi who cursed Pandu.",
        answers: ["Rishi Durvasa", "Rishi Kindam", "Rishi Vyasa", "Rishi Valmiki" ],
        correct: "Rishi Kindam",
        questionId: "000010"
    },
    {
        question:
        "Mahabharata is known by another name, which of the following is that name?",
        answers: ["Aranya Sanhar", "Krishnavatar", "Kuru Samhita", "Shat Sahasra Samhita" ],
        correct: "Shat Sahasra Samhita",
        questionId: "000011"
    },
    {
        question:
        "Running Commentary of Mahabharata War was given to Dhritrashtra by ________.",
        answers: ["Shakuni", "Ajay", "Sanjay", "Vidur" ],
        correct: "Sanjay",
        questionId: "000012"
    },
    {
        question:
        "Lord Krishna was King of __________ Kingdom .",
        answers: ["Vrindavan", "Avanti", "Mathura", "Panchal" ],
        correct: "Mathura",
        questionId: "000013"
    },
    {
        question:
        "Who was the father of Bhishma Pitamah?",
        answers: ["Shwetambar", "Bharat", "Shantanu", "Janak" ],
        correct: "Shantanu",
        questionId: "000014"
    },
    {
        question:
        "Who was the First Commander in Chief of the Kaurava Army?",
        answers: ["Karna", "Bheeshma", "Drona", "Ashvathama" ],
        correct: "Bheeshma",
        questionId: "000015"
    },
    {
        question:
        "Who was the last Commander in Chief of the Kaurava Army ?",
        answers: ["Bheeshma", "Drona", "Ashvathama", "karna" ],
        correct: "Ashvathama",
        questionId: "000016"
    },
    {
        question:
        "In Kurukshetra war, Each elephant can carry ____ warriors with along with their weapons ?",
        answers: ["9", "8", "10", "7" ],
        correct: "7",
        questionId: "000017"
    },
    {
        question:
        "Who was Beeshmaka ?",
        answers: ["Krishna's father-in-law", "Jayadratha's father-in-law", "Arjuna's father-in-law", "Duryodhana's dather-in-law" ],
        correct: "Krishna's father-in-law",
        questionId: "000018"
    },
    {
        question:
        "Among Pandava who was able to see the future and knew the outcome of Kurukshetra war?",
        answers: ["Yudhishtara", "Nakul", "Sahdev", "Pandu" ],
        correct: "Sahdev",
        questionId: "000019"
    },
    {
        question:
        "Which God gave Arjuna the bow 'Gandiv' as well as two quivers which would provide an inexhaustible number of arrows",
        answers: ["Shiv", "Agni Dev", "Varuna", "Indra" ],
        correct: "Varuna",
        questionId: "000020"
    },
    {
        question:
        " Which Rakshasa did Bheema kill in Ekachakra?",
        answers: ["Vanasura", "Vrajasura", "Banasura", "Bakasura" ],
        correct: "Bakasura",
        questionId: "000021"
    },
    {
        question:
        "Virata was one of the Maharathis in the Pandava army: who was the other?",
        answers: ["Drupada", "Drishtadyuma", "Drishtaketu the King of Chedi", "Shikhandi" ],
        correct: "Drupada",
        questionId: "000022"
    },
    {
        question:
        "What was the name of Drona's father?",
        answers: ["Parashuram", "Bhardhwaja", "Kahshyap", "None" ],
        correct: "Bhardhwaja",
        questionId: "000023"
    },
]

export default (n=5) =>
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0,n));