// //question 1

function InstagramPost(HandleOfAuthor, content, ImageLink, NumOfViews, NumOfLikes) {
  this.HandleOfAuthor = HandleOfAuthor;
  this.content = content;
  this.ImageLink = ImageLink;
  this.NumOfViews = NumOfViews;
  this.NumOfLikes = NumOfLikes;
}

//question 2//
let HandleOfAuthor = new InstagramPost('Faustina ichioma');
let ImageLink = new InstagramPost('https://instagram.fabv2-1.fna.fbcdn.net/v/t51.2885-19/326408641_193955766627116_3971489151109494484_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fabv2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=wFPmWrCp4qAAX_emh7M&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDCBbbDYkny-3BqeqZWIOhKjtcKg3cYxIgl_X_ldmLfaA&oe=64016447&_nc_sid=1527a3')
//question3a//
function CreatePerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
  }
   
  const musa = CreatePerson("Musa", 19, "Lagos",);
  console.log(musa);
  //question3b//
 function JambScores(eng, govt, lit,crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
  }

  const MusaJambScore = JambScores(70, 85, 82, 94);
  console.log(MusaJambScore);


  musa.Scores = MusaJambScore
  console.log(musa)
  //question 4//
  //Ways of cloning an object//
  
//1. Object-assign metthod
//eg-
const Person1 ={
    name: "Faustina",
    age: 24,
    location: "Ibadan",
};
const Person2 = Object.assign({}, Person1);
Person2.name = "Eniola";
Person2.age = 16;
Person2.location = "lagos";

console.log(Person1);
console.log(Person2);

//2. Spread-syntax method
//eg-
const Person3 = { ...Person1 };
Person3.name = "Oluwasemilore";
Person3.location = "Abuja";

console.log(Person1);
console.log(Person3);

//2. JDON-parse method
//eg-
const Person4 = JSON.parse(JSON.stringify(Person1));
Person4.name = "Joyce";
Person4.age = 27;

console.log(Person1);
console.log(Person4);



//question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (const value in presidentialCandidates) {
   console.log(presidentialCandidates[value] + 'is the presidential candidate of ' + value)   
   
  }
 