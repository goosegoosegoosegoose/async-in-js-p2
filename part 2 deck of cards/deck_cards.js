class DeckCard {
    
    constructor(){
        this.url = "http://deckofcardsapi.com/api/deck/";
    };

    async newShuffledDeck() {
        let newDeck = await axios.get(`${this.url}new/shuffle/?deck_count=1`);
        let card = await axios.get(`${this.url}${newDeck.data.deck_id}/draw/?count=1`);

        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit.toLowerCase()}`);

        this.drawCards(newDeck);
    };

    async drawCards(res) {
        let cards = await Promise.all([
            axios.get(`${this.url}${res.data.deck_id}/draw/?count=1`),
            axios.get(`${this.url}${res.data.deck_id}/draw/?count=1`)
        ]);

        console.log(`${cards[0].data.cards[0].value} of ${cards[0].data.cards[0].suit.toLowerCase()}`)
        console.log(`${cards[1].data.cards[0].value} of ${cards[1].data.cards[0].suit.toLowerCase()}`)
    };
};

let deckcard = new DeckCard;
deckcard.newShuffledDeck();
