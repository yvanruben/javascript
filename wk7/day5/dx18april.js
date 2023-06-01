const quoteArray=[
 
    {id: 0,
    author:"Robbin Sharma",
    quote:"Give out what you most want to come back",
    like:""},

    {id:1,
    author:"Neil Armstrong",
    quote:"That's one small step for a man, a giant leap for mankind. out what you most want to come back",
    like:""},

    {id:2,
    author:"Bible ",
    quote:"The truth will set you free.",
    like:""}

    ]

// show quote 

const btn=document.querySelector("#btn-quote");

btn.addEventListener("click",ramdomQuote);

function  ramdomQuote(){
    alert("quote");
    console.log(quoteArray.id)
}



    




 

 