var express = require('express');

var app = express();

app.get('/big5TestQuestions', function(req, res) {
    res.send({
    "test": [
        {
            "category" :   "Extroversion",
            "questions":
            [
                {
                    "question" :  "You are talkative.",
                    "reverse": false
                },
                {
                    "question" :  "You are reserved.",
                    "reverse": true
                },
                {
                    "question" :  "You are full of energy.",
                    "reverse": false
                },
                {
                    "question" :  "You generate a lot of enthusiasm.",
                    "reverse": false
                },
                {
                    "question" :  "You tend to be quiet.",
                    "reverse": true
                },
                {
                    "question" :  "You have an assertive personality.",
                    "reverse": false
                },
                {
                    "question" :  "You are sometimes shy, inhibited.",
                    "reverse": true
                },
                {
                    "question" :  "You are outgoing, sociable.",
                    "reverse": false
                }
            ]
            
            
        },
        {
            "category" :   "Agreeableness",
            "questions":
            [
                {
                    "question" :  "You tend to find fault with others.",
                    "reverse": true
                },
                {
                    "question" :  "You are helpful and unselfish with others.",
                    "reverse": false
                },
                {
                    "question" :  "You start quarrels with others.",
                    "reverse": true
                },
                {
                    "question" :  "You have a forgiving nature.",
                    "reverse": false
                },
                {
                    "question" :  "You are generally trusting.",
                    "reverse": false
                },
                {
                    "question" :  "You can be cold and aloof.",
                    "reverse": true
                },
                {
                    "question" :  "You are considerate and kind to almost everyone.",
                    "reverse": false
                },
                {
                    "question" :  "You are sometimes rude to others.",
                    "reverse": true
                },
                {
                    "question" :  "You like to cooperate with others.",
                    "reverse": false
                }
            ]
        },
        {
            "category" :   "Conscientiousness",
            "questions":
            [
                {
                    "question" :  "You do a thorough job.",
                    "reverse": false
                },
                {
                    "question" :  "You can be somewhat careless.",
                    "reverse": true
                },
                {
                    "question" :  "You are a reliable worker.",
                    "reverse": false
                },
                {
                    "question" :  "You tend to be disorganized.",
                    "reverse": true
                },
                {
                    "question" :  "You tend to be lazy.",
                    "reverse": true
                },
                {
                    "question" :  "You persevere until the task is finished.",
                    "reverse": false
                },
                {
                    "question" :  "You do things efficiently.",
                    "reverse": false
                },
                {
                    "question" :  "You make plans and follows through with them.",
                    "reverse": false
                },
                {
                    "question" :  "You are easily distracted.",
                    "reverse": true
                }
            ]
        },    
        {
            "category" :   "Neuroticism",
            "questions":
            [
                {
                    "question" :  "You are depressed, blue.",
                    "reverse": false
                },
                {
                    "question" :  "You are relaxed, handles stress well.",
                    "reverse": true
                },
                {
                    "question" :  "You can be tense.",
                    "reverse": false
                },
                {
                    "question" :  "You worry a lot.",
                    "reverse": false
                },
                {
                    "question" :  "You are emotionally stable, not easily upset.",
                    "reverse": true
                },
                {
                    "question" :  "You can be moody.",
                    "reverse": false
                },
                {
                    "question" :  "You remain calm in tense situations.",
                    "reverse": true
                },
                {
                    "question" :  "You get nervous easily.",
                    "reverse": false
                }
            ]
        },   
        {
            "category" :   "Openness",
            "questions":
            [
                {
                    "question" :  "You are original, come up with new ideas.",
                    "reverse": false
                },
                {
                    "question" :  "You are curious about many different things.",
                    "reverse": false
                },
                {
                    "question" :  "You are ingenious, a deep thinker.",
                    "reverse": false
                },
                {
                    "question" :  "You have an active imagination.",
                    "reverse": false
                },
                {
                    "question" :  "You are inventive.",
                    "reverse": false
                },
                {
                    "question" :  "You value artistic, aesthetic experiences.",
                    "reverse": false
                },
                {
                    "question" :  "You prefer work that is routine.",
                    "reverse": true
                },
                {
                    "question" :  "You like to reflect, play with ideas.",
                    "reverse": false
                },
                {
                    "question" :  "You have few artistic interests.",
                    "reverse": true
                },
                {
                    "question" :  "You are sophisticated in art, music, or literature.",
                    "reverse": false
                }
                
            ]
        } 
            
    ]

});
});



app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');