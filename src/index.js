function displayPoem(response) {
    console.log("poem generated")
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();
let instructionsInput= document.querySelector("#user-instructions")
    let apiKey = "10b545o25teaa28dd38fd076fc778f2c";
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Please follow the users instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI in bold inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a French poem about the French poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt:${prompt}`);
    console.log(`Prompt:${context}`);


    axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);