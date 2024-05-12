function generatePoem(event){
    event.preventDefault();

    new Typewriter('#poem', {
        strings: " Nuit de juin ! Dix-sept ans !  On se laisse griser. La sève est du champagne et vous monte à la tête… On divague; on se sent aux lèvres un baiser Qui palpite là, comme une petite bête….",
        autoStart: true,
        delay:1, 
        cursor: "",
    });

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);