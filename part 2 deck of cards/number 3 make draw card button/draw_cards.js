class Deck {
    constructor() {
        this.url = "http://deckofcardsapi.com/api/deck/";
    };

    async generateDeck() {
        let res = await axios.get(`${this.url}new/shuffle/?deck_count=1`);
        this.deck_id = res.data.deck_id;
    };
    
    generateCard(res) {
        $(".card-pile").append(
            `<img src=${res.data.cards[0].image} alt="card">`
        );
    };

    async drawCard() {
        let res = await axios.get(`${this.url}${this.deck_id}/draw/?count=1`);
        
        if (res.data.remaining == 0){
            $(".new-card").empty();
            this.generateCard(res);
        }
        else {
            this.generateCard(res);
        }
    };
};

let deck = new Deck;
deck.generateDeck();

$(".new-card").on("click", "button", function(){
    deck.drawCard();
});