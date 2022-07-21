cards = []
const init = document.querySelector("#btn")
const container1 = document.querySelector("#container1")


btn.addEventListener("click", function(){
    shuffle();
})

async function shuffle (){
    let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    if (response.status === 200){
        let data = await response.json();
        for (i=0; i<=4; i++){
            drawCard(data.deck_id)
        }
    }
    else {
        return reject(console.log("Requisition failed"))
    }
 }


async function drawCard (id){
    let response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
    if (response.status === 200){
        let data = await response.json();
        container1.innerHTML += `<img id=cards src='${data.cards[0].image}'}>`
        console.log(data.cards[0])
        console.log(data.cards[0].code)
    }
    else {
        return reject(console.log("Requisition failed"))
    }
}