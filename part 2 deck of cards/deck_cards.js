class DeckCard {
    
    constructor(){
        this.url = "http://deckofcardsapi.com/api/deck/";
    }

    async newShuffledDeck() {
        let newDeck = await axios.get(`${this.url}new/shuffle/?deck_count=1`);
        let card = await axios.get(`${this.url}${newDeck.data.deck_id}/draw/?count=1`);
        
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit.toLowerCase()}`);
    }

    async drawCards() {
        let newDeck = await axios.get(`${this.url}new/shuffle/?deck_count=1`);

        let cards = await Promise.all([
            axios.get(`${this.url}${newDeck.data.deck_id}/draw/?count=1`),
            axios.get(`${this.url}${newDeck.data.deck_id}/draw/?count=1`)
        ]);

        console.log(`${cards[0].data.cards[0].value} of ${cards[0].data.cards[0].suit.toLowerCase()}`)
        console.log(`${cards[1].data.cards[0].value} of ${cards[1].data.cards[0].suit.toLowerCase()}`)
    }
};

let deckcard = new DeckCard;
deckcard.newShuffledDeck();
deckcard.drawCards();

// Could I make the deck_id from the requested deck from the first method so I could request with the same deck_id in the second method?
// It didn't allow me to set this.deck_id inside newShuffleDeck.
// could just fix by getting new deck ouside of class and making deck_id a global variable but was wondering if there was a way.