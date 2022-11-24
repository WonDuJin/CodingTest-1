/*
전개 1. 카드 마술사에게 깜짝 선물할 카드를 만들어 주려고 합니다.
전개 2. 트럼프카드 한 벌을 찍어내는 기계의 로직을 만들려고 찾아보니, 총 다섯개의 모양이 있다는 것을 알게 되었습니다.
전개 3. 하나의 모양마다 총 13개의 카드가 존재합니다. 
예를들어 하트모양의 카드는 1부터 10까지, 11에 해당하는 J, 12에 해당하는 Q, 13에 해당하는 K 까지를 포함합니다. 
전개 4. 조커는 총 두 장을 가지고 있습니다.

{
spade : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
heart : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
diamond : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
club : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
joker : { "RED" : 1, "BLACK" : 2 } 
}

조건 1: 트럼프 카드의 구성과 갯수는 정해져 있는 규칙이므로, 정확한 수량과 항목이 중요합니다. 
조건 2: 위의 함수를 호출 했을 때, 리턴 타입은 위의 보기와 같은 객체타입 이여야 합니다.
조건 3: 리턴되어 만들어진 객체의 키들의 갯수는 다섯개의 모양(shape_array)을 제외하고 13 * 4 + 2 = 54의 길이값을 갖는 다는 것을 조회를 통해 도출되는 방식으로 확인 해야 합니다.
테스트 출력 예시 ) "해당 리턴된 객체의 카드 갯수에 대한 검사결과, 총 54개로 정상적인 구성입니다."
*/

const shape_array = ["spade", "heart", "diamond", "club", "joker"];

//야매방법으로 대괄호 안에 객체를 담아주었습니다.
const trumpValue = [{"A":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13}]
const jokerValue = [{"RED":1,"BLACK":2}]

const trump_deck=(shapeArray)=>{  
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
console.log(trump_deck(shape_array))
trump_deck(shape_array)