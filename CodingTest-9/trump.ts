const shape_arrayTS = ["spade", "heart", "diamond", "club", "joker"];

//야매방법으로 대괄호 안에 객체를 담아주었습니다.
const trumpValueTS = [{"A":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13}]
const jokerValueTS = [{"RED":1,"BLACK":2}]

const trump_deckTS=(shapeArray)=>{  
  let trump = {}
  // 반복문을 사용하여 shape_arry의 값을 Key값으로 집어넣음
  for(let i = 0 ; i <shapeArray.length ; i++){
    let key = shapeArray[i]    
    // 빈객체 안에 키값으로 위에 실행한 key를 넣어준 후 value값으로 trumpvalue값을 넣어주었음
    for( let j = 0 ; j < trumpValue.length;j++){ 
      // joker는 값이 다르기 때문에 if문으로 키값이 joker일때는 jokerValue값을 넣어주었음
      if(key==="joker"){
        trump[key] = jokerValue[j]
      }else{
        trump[key] = trumpValue[j]        
      }
    }
  }    
  return trump
}
console.log(trump_deck(shape_arrayTS))
trump_deck(shape_arrayTS)

// 전체적으로 날로먹는 코드인 것 같아서 추후 수정 예정