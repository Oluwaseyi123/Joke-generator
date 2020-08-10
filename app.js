
document.querySelector('.new-quote').addEventListener('click', generateQuote)

function generateQuote(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let output='';
        data.forEach((quote)=>{
            document.querySelector('.up-quotes').style.display='block'
            document.querySelector('.down-quotes').style.display='block'

            output+=`<h3 class="writing">${quote.quote}</h3>
            <p class="character">${quote.character}</p>`
            
        })
        
        document.querySelector('.quotes').innerHTML=output
       
    })
}