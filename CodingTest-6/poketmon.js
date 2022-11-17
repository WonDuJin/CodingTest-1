// 전개 1. 평소에 포켓몬스터를 좋아하는 공미남은 11월 18일 포켓몬스터 스칼렛 바이올렛이 출시된다는 소식을 알게 되었습니다.
// 전개 2. 이번에 정식발매되는 포켓몬스터 게임 가격은 64,800원입니다.
// 전개 3. 하지만 공미남의 고정지출예산을 확인해보니 포켓몬스터 게임을 사버리면 고정지출에서 얼만큼을 절약해야 하는 위기에 놓였습니다. 
// 전개 4. 공미남의 고정지출예산은 총 100,000원(십만원)입니다.
// 전개 5. 고정지출 항목에서 어떤 것을 몇번 절약해야 게임을 구매할 수 있을까요?

// 고정지출 중요도 : 
// 1. 출퇴근 비용 : 30분 더 일찍 일어나면 지출을 안할 수 있음
// 2. 커피 : 강의할 때 말이 안나오므로, 어떤 형태로든 꼭 마셔야함. 원장님 카드를 써서 훔쳐먹으면 지출을 안할 수 있음
// 3. 고양이간식 : 가족의 건강을 챙기기 위함이므로 지출을 줄일 수 없음

// 문제 
// 조건 1: 고정 지출 항목, 내역 정보의 자료구조 및 데이터타입, 값은 외부에서 전달받은 "형식"이므로 변형 할 수 없습니다.
// 조건 2: 중요도 부분에서 3번 항목인 "고양이간식"은 완결한 고정지출 이므로 절약할 수 없습니다.
// 조건 3: 함수의 인자(입력) 데이터타입은 객체입니다.
// 조건 3: 리턴(출력)은 하나의 문장, 문자열(string)로 항목별 절약횟수가 도출되어야 합니다.
// 조건 4: 고정지출의 종류와 갯수, 총 예산과 목표가격(게임)이 변할수도 있습니다.
// 조건 6: 일찍 일어나면 30분당 1만큼 피로도가 증가합니다. 원장님 카드를 1회 훔쳐 사용하면 미움지수가 1만큼 증가합니다.

// 목표 : 공미남이 최대한 행복하게 절약하며 게임을 사는 방법은 어떤 방식이 되어야 좋을까요? 
// 예시(자유롭게 작성) : "oo님은 A를 a회 일찍 일어나면 Z만큼 피곤해지고, B를 b회 훔쳐먹으면 Y만큼 미움받지만 C게임을 살수있게 됩니다!"

const fixlist = {  
    "출퇴근비용" :{
      "카카오톡자전거" : "1500원",
      "택시" : "3500원",
    },
    "커피" : {
      "엔시나" : "4500원",
      "카누" : "200원",
    },
    "고양이 간식" : {
      "닭고기" : "400원",
      "락토프리우유" : "800원",
    }
  }
  const fixcount = {    
    "출퇴근비용" :{
      "카카오톡자전거" : "19회",
      "택시" : "3회",
    },
    "커피" : {
      "엔시나" : "19잔",
      "카누" : "15잔",
    },
    "고양이 간식" : {
      "닭고기" : "30개",
      "락토프리우유" : "2개",
    }  
  }

//fixlist에 담긴 Key값(출퇴근 비용, 커피, 고양이간식)들을 배열에 담아서 출력
let list = []
  for (key in fixlist){
    list = list + key + ","
  }
  const keyType = list.split(",");
  keyType.pop()
console.log(keyType)


//fixList 의 Value값(엔시나,카누,닭고기,락토프리우유 등)들을 배열에 담아서 출력
let keyValue = []
  for(let i = 0 ; i < keyType.length ; i++){
    let childValue = keyType[i]
    toString(childValue)
    keyValue[i] = fixlist[childValue]
  }
  console.log(keyValue)

//fixcount에 담긴 Key값(출퇴근 비용, 커피, 고양이간식)들을 배열에 담아서 출력
// let countlist = []
//   for (key in fixcount){
//     countlist = countlist + key + ","
//   }
//   const fixcountType = countlist.split(",");
//   fixcountType.pop()
// console.log(fixcountType)

// 위에 키값이랑 일치하므로 삭제


//fixcount 의 Value값(엔시나,카누,닭고기,락토프리우유 등)들을 배열에 담아서 출력
let countkeyValue = []
  for(let i = 0 ; i < keyType.length; i++){
    let childValue = keyType[i]
    toString(childValue)
    countkeyValue[i] = fixcount[childValue]
  }
  console.log(countkeyValue)


// const commingsoon=(total,game)=>{

//   let catfixmoney = (fixlist.cat.chicken *fixcount.cat.chicken) + (fixlist.cat.milk * fixcount.cat.milk)

//   let leftmoney = total - catfixmoney

//   let buygameLeftMoney = leftmoney - game


//   console.log (`고양이의 고정지출가격 : ${catfixmoney}원`)

//   console.log(`고양이 지출항목을 제외한 남은 금액 ${leftmoney}`)

//   console.log(`남은금액에서 게임을 사면 남는 금액 ${buygameLeftMoney}`)

//   for(let i = 0; i<fixcount.inout;i++){
//     if(buygameLeftMoney){}
//   }
// }

// let changeFixlist = changefixlisttype(fixlist)

// console.log(fixlist)


// commingsoon(100000,64800)

// total = 100,000
// game = 64,800

//지출항목 총 비용 = 28,500(자전거) + 10,500(택시) + 27,000(커피 - 엔시나) + 3,000(커피 - 카누) = 69,000원
//고정지출 고양이 관련 = 13,600
//남은 예산 total - cat = 86,400
//게임 가격 64,800 + 지출비용 69,000 = 133,800

// 고정으로 나가는 돈 = 64,800 + 13,600 = 78,400

// 100,000 - 78,400 = 21,600

// 총 지출 비용 - 남은 예산 = 47,400



