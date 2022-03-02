



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    let id = 0
    while (currentIndex != 0) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
export const pairGenerator =(row,col)=>{
    var NUM_OF_SQUARES = row * col;
  
    var RANDOM_NUMBERS = [];

    while(RANDOM_NUMBERS.length <= (NUM_OF_SQUARES/2) -1 ){
        var r = Math.floor(Math.random() * 100) + 1;
        if(RANDOM_NUMBERS.indexOf(r) === -1) RANDOM_NUMBERS.push(r);
    }

   
    data = shuffle(RANDOM_NUMBERS.concat(RANDOM_NUMBERS));

    CARD_PAIRS_VALUE = data.map((el,i)=>({id:i+1,value:el,flipped:false}));

    return CARD_PAIRS_VALUE;
  }
  
