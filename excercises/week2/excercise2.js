const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];
console.log("------------------- Names -----------------------");
explorers.forEach((explorer) => console.log(explorer.name));
console.log("------------------- Stack -----------------------");
explorers.forEach((explorer) => console.log(explorer.stack));
console.log("------------------- Stack in list ---------------");
const stacks = explorers.map((explorer) => {
  return explorer.stack;
});
console.log(stacks);
console.log("------------------- Explorers with JS -----------");
const JsExplorer = explorers.filter((explorer) => (explorer.stack.includes("js")));
console.log(JsExplorer);
console.log("------------- First Explorer in CDMX -----------");
const explorer1 = explorers.find( explorer => explorer.city === "CDMX");
console.log(explorer1);
console.log("------------- Excercises completed -----------");
const total = explorers.reduce((exc,explorer) => exc + explorer.exercises_completed,0);
console.log(`Total excercices completed: ${total}`);
console.log("------------- Excercises finished -----------");
const areSomeTrue = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true);
console.log(areSomeTrue);
console.log("------------- Onboarding finished -----------");
const areAllTrue = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log(areAllTrue)