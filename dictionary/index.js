const inputbox = document.getElementById('input')
const infoText = document.getElementById('info-text')
const meaningContainer = document.getElementById('meaning-container')
const title = document.getElementById('title')
const meaning = document.getElementById('meaning')
const audio = document.getElementById('audio')

async function fetchAPI(word){
        try {
        infoText.style.display = 'block'
        meaningContainer.style.display = 'none'
        infoText.innerText = `Searching the meaning of "${word}"`

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {
            meaningContainer.style.display = 'block';
            infoText.style.display = 'none';
            title.innerText = word;
            meaning.innerText = 'N/A';
            audio.style.display = 'none';
        } else {
            infoText.style.display = 'none'
            meaningContainer.style.display = 'block'
            audio.style.display = 'inline-flex'
            title.innerText = result[0].word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            
            
            const phonetics = result[0].phonetics;
            firstAudio = phonetics[0]?.audio || ''
            secondAudio2 = phonetics[1]?.audio || ''
            thridAudio = phonetics[2]?.audio || ''

            
            audio.style.display = 'inline-flex';
            audio.src = firstAudio !== '' ? firstAudio : secondAudio2 !== '' ? secondAudio2 : thridAudio;

            if(!audio.src){
                audio.style.display = 'none';
            }
        } 
    } catch (error) {
        console.log(error);
        infoText.innerText = 'an error occured, try again later'
    }
}

inputbox.addEventListener('keyup', (e) => {
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value)
    }
})