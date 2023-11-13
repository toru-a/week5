
//D112:工場の生産力

reader.on('close', () => {
  console.log(lines[0]*lines[1]);
});


//D190:センチをミリに

reader.on('close', () => {
  const mm = 10
  console.log(lines[0] * mm);
});


//D123:自動でチャージ

reader.on('close', () => {
    const charge = 10000
    let left = parseInt(lines)
    if(left < charge){
        console.log( left + charge );
    }else{
  console.log(lines[0]);


//C084:【キャンペーン問題】枠で囲む

reader.on('close', () => {
 let len = lines[0].length
 let TBlen = len+2
 let symbol = "+"
 console.log(symbol.repeat(TBlen));
 console.log(symbol+lines[0]+symbol);
 console.log(symbol.repeat(TBlen));
});



//FIZZBAZZ問題

let index = 0;
let number = 1;

while( number <= 100 ){
 
 let ListB = ["FIZZBAZZ","BAZZ","FIZZ",number];
 let ListA = ["15","5","3",number];
 const ALen= ListA.length;

 while( index < ALen ){
 
  if( number % ListA[index] == 0 ){
     console.log(ListB[index]);
     index = ALen;
    }else{
     index++;
    };    
  };
   index = 0;
   number++;

};
 
