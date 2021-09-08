const baseURL = "http://numbersapi.com/";
const favNum = 25;

async function FavNumFact() {
    res = await axios.get(`${baseURL}${favNum}/trivia?json`);
    console.log(res.data.text);
};

async function MultiNumFacts() {
    res = await axios.get(`${baseURL}1,3,4,16/trivia?json`);

    for (i in res.data){
        console.log(res.data[i]);
    };
};

async function FourNumFacts() {
    res = await Promise.all([
        axios.get(`${baseURL}${favNum}/trivia?json`),
        axios.get(`${baseURL}${favNum}/trivia?json`),
        axios.get(`${baseURL}${favNum}/trivia?json`),
        axios.get(`${baseURL}${favNum}/trivia?json`)
    ]);

    for (i in res){
        console.log(res[i].data.text)
    };
};

FavNumFact();
MultiNumFacts();
FourNumFacts();