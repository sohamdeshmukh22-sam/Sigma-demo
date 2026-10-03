let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
    let res= await fetch(url);
    let data= await res.json();
    console.log(data);
    }catch(error){
        console.log(error);
    }
}




console.log("hello world");































// fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data3)=>{
//     console.log(data3.fact);
// })
// .catch((error)=>{
//     console.log(error);
// })