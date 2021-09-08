let url = "http://deckofcardsapi.com/api/deck/";
let deck_id

async function generateDeck() {
    res = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    deck_id = res.data.deck_id;
};

class Deck {
    
    generateCard(res) {
        $(".card-pile").append(
            `<img src=${res.data.cards[0].image} alt="card">`
        );
    };

    async drawCard() {
        let res = await axios.get(`${url}${deck_id}/draw/?count=1`);
        
        if (res.data.remaining == 0){
            $(".new-card").empty();
            this.generateCard(res);
        }
        else {
            this.generateCard(res);
        }
    };
};

generateDeck();
let deck = new Deck;


$(".new-card").on("click", "button", function(){
    deck.drawCard();
});