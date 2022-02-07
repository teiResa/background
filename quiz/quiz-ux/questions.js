// Minimum of 10 questions or it crashes the previewer.
 const questions = [
  {
      question: "Which does affordance not mean?",
      optionA: "What tells you how to should use a thing.",
      optionB: "The properties that define possible uses of an object.",
      optionC: "The amount of resources available for the project.",
      optionD: "The handle of a door, for example.",
      correctOption: "optionC"
  },
  {
      question: "Which is a not true of a mind model?",
      optionA: "The U's belief of how UX works.",
      optionB: "Based on past interactions with products.",
      optionC: "U doodles on paper while testing product.",
      optionD: "Fully mental picture of U's expectations.",
      correctOption: "optionC"
  },
  {
      question: "Microinteractions are not...",
      optionA: "Touch-screen gestures to help the Us.",
      optionB: "Encourage Us to interact with the UI.",
      optionC: "Help prevent user errors.",
      optionD: "are the best way to users engaged.",
      correctOption: "optionA"
  },
  {
      question: "Wireframe annotation are good for...",
      optionA: "bridging the place between LoFi and HiFi.",
      optionB: "passing notes to colleagues and partners.",
      optionC: "planning the classes for code monkeys.",
      optionD: "rationale, edge cases, examples, etc.",
      correctOption: "optionC"
  },
  {
      question: "Gestute-based nav ...",
      optionA: "allows for more screen space.",
      optionB: "limits valuable content.",
      optionC: "allows for improved UI design.",
      optionD: "can be inaccessible.",
      correctOption: "optionB"
  },
  {
      question: "What is your drop-off rate?",
      optionA: "However often a user posts.",
      optionB: "How many times a user can upload from a single source.",
      optionC: "How many times a page is loaded/refreshed.",
      optionD: "How quickly users abandon a website due to poor performance.",
      correctOption: "optionD"
    },
    {
      question: "&quot;If you're not embarrassed by your first product release, you released too late&quot;",
      optionA: "Hoffman's Theory",
      optionB: "Jarred Dunn's Theory",
      optionC: "The Berners-Lee Theory",
      optionD: "The Kleinrock Theory",
      correctOption: "optionA"
  },
  {
      question: "What is a beta?",
      optionA: "Something second-rate.",
      optionB: "The second letter of the Phonetic Alphabet.",
      optionC: "The &#x3B2; of the Cyrillic Alphabet.",
      optionD: "EUT or UAT. Real world testing and final touches.",
      correctOption: "optionD"
  },
  {
      question: "FE vs BE. Which is most correct?",
      optionA: "Everything the user interacts with is BE.",
      optionB: "Everything the user interacts with is FE.",
      optionC: "Trick question. They overlap too much to differentiate.",
      optionD: "None/all of the above.",
      correctOption: "optionC"
  },
  {
      question: "Which is most correct?",
      optionA: "Working in a team limits creativity.",
      optionB: "Working in a team is the only way to complete a UX.",
      optionC: "Working in a team allows for more variety.",
      optionD: "None/all of the above.",
      correctOption: "optionC"
  },
  {
      question: "Which is the final step of the design process?",
      optionA: "EUT - End User Testing",
      optionB: "ABT - A-B Testing",
      optionC: "Beta Testing",
      optionD: "UAT - User Acceptance Testing",
      correctOption: "optionC"
  },
  {
      question: "Which are examples of User Research methods?",
      optionA: "Focus Groups, interviews, Personas, and having Us use existing products.",
      optionB: "Market research, others reviews, and having others in the field test the product.",
      optionC: "Focus Groups, emotions, eye-tracking, and having Us use existing products.",
      optionD: "None/all of the above.",
      correctOption: "optionC"
  },
  {
      question: "A visual way of defining how the site/app will work.",
      optionA: "User Journey",
      optionB: "Site Map",
      optionC: "Mind Mapping",
      optionD: "Interactiver prototype",
      correctOption: "optionD"
  },
  {
      question: "U's experience during using session of using the app/site.",
      optionA: "User Journey",
      optionB: "Site Map",
      optionC: "Mind Mapping",
      optionD: "Interactiver prototype",
      correctOption: "optionA"
  },
  {
      question: "The series of actions performed to achieve a goal.",
      optionA: "User Journey",
      optionB: "Site Map",
      optionC: "Mind Mapping",
      optionD: "Interactiver prototype",
      correctOption: "optionA"
  },
  {
      question: "Which are examples of User Research methods?",
      optionA: "User Journey",
      optionB: "Site Map",
      optionC: "Mind Mapping",
      optionD: "Interactiver prototype",
      correctOption: "optionC"
  },
  {
      question: "The most perfectly ideal path is the _____ path(s).",
      optionA: "Happy",
      optionB: "Alternate",
      optionC: "Priority",
      optionD: "User",
      correctOption: "optionA"
  },
  {
      question: "Other possible routes the user may take are the _____ path(s).",
      optionA: "Happy",
      optionB: "Alternate",
      optionC: "Priority",
      optionD: "User",
      correctOption: "optionB"
  },
  {
      question: "The routes the user can take are _____ path(s).",
      optionA: "Happy",
      optionB: "Alternate",
      optionC: "Priority",
      optionD: "User",
      correctOption: "optionB"
  },
  {
      question: "The routes you want the user to take are the _____ path(s).",
      optionA: "Happy",
      optionB: "Alternate",
      optionC: "Priority",
      optionD: "User",
      correctOption: "optionA"
  },
  {
      question: "LoFi or HiFi? Has more functionality.",
      optionA: "LoFi",
      optionB: "HiFi",
      optionC: "neither",
      optionD: "both",
      correctOption: "optionA"
  },
  {
      question: "LoFi or HiFi? Simple, low-tech concepts.",
      optionA: "LoFi",
      optionB: "HiFi",
      optionC: "neither",
      optionD: "both",
      correctOption: "optionA"
  },
  {
      question: "LoFi or HiFi? Hand drawn or digitally mocked up.",
      optionA: "LoFi",
      optionB: "HiFi",
      optionC: "neither",
      optionD: "both",
      correctOption: "optionB"
  },
  {
      question: "LoFi or HiFi? Has more visual aspects.",
      optionA: "LoFi",
      optionB: "HiFi",
      optionC: "neither",
      optionD: "both",
      correctOption: "optionB"
  },
  {
      question: "LoFi or HiFi? The complete and final website.",
      optionA: "LoFi",
      optionB: "HiFi",
      optionC: "neither",
      optionD: "both",
      correctOption: "optionC"
  },

          
      
    


    

]