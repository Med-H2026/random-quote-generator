async function generate(){
    const res = await fetch('https://dummyjson.com/quotes/random');
    const data = await res.json();
    console.log(data);
    document.getElementById('quoteText').innerHTML= '"'+ data.quote + '"';
    document.getElementById('quoteAuthor').innerHTML=  data.author;
}