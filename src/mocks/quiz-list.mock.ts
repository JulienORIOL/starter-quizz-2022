import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

// export const QUESTION_ACTOR: Question = {
//     label: 'Jean Gabin a joué dans...',
//     answers: [
//         {
//             value: 'Les tuches II',
//             isCorrect: false,
//         },
//         {
//             value: 'La grande illusion',
//             isCorrect: true,
//         }
//     ]
// };

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs Francais', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [],
    },
    {
        name: 'Les Sports',
        questions: [],
    }
];
