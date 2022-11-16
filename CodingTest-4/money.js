//도전과제 : 거스름돈 계산하기
// 화폐 단위 : 오만원권, 일만원권, 오천원권, 일천원권, 오백원동전, 일백원동전, 오십원동전, 일십원동전

// 의사코드 : 사람의 말로 순서(프로그램)를 작성하시오.
// 사용언어 : javascript, typescript, python

// 함수 이름 : change_money
// 전개 1. 공미남은 기분좋게 KDT마트에 들렀습니다. 이것저것 먹고싶은 것을 골라담고 계산대 앞에 섰습니다.
// 전개 2. 살찔까봐 조금만 골랐는데, 34830원이 나왔습니다. 
// 전개 3. 공미남은 가지고 있는돈이 비상금 10만원권 수표밖에 없어 허락을 받은 후 지불하기로 하였습니다. 
// 전개 4. KDT캐셔는 총 65200원을 거스름돈으로 주어야 합니다. 
// 전개 5. 하지만, 불행히도 일천원권과 오천원권은 모두 소진된 상태입니다.

// 출력 : key값은 화폐단위에 맞게 변경
// {
// 오만원권 : n개
// 일만원권 : n개
// 오백원동전 : n개
// 일백원동전 : n개
// 오십원동전 : n개
// 일십원동전 : n개
// }

// 문제 
// 조건 1. 가용한 최대 화폐단위를 최대한 활용해서 거슬러주어야 합니다.
// 조건 2: 오천원권 일천원권이 모두 소진 되었으므로, 대체방안을 마련해야 합니다.
// 조건 3: 다음 손님도 주문을 기다리고 있기 때문에, 다음 거슬러주어야 할 기능도 존재 해야 합니다.
// 조건 5: 다른 단위화폐가 소진된 상태인 경우도 대비할 수 있어야 합니다.

//캐셔가 가지고이는 화폐 상태
let exchange =[
  {fiftythousand : true, value : 50000},
  {tenthousand : true, value : 10000},
  {fivethousand : false, value : 5000},
  {onethousand : false, value : 1000},
  {fivehundred : true, value : 500},
  {onehundred : true, value : 100},
  {fifty : true, value : 50},
  {ten : true, value : 10},
]    

// console.log(exchange.length)

const change_money=(totalMoney,haveMoney)=>{

//손님과의 거래 
let leftMoney = haveMoney - totalMoney
  console.log(`거스름 돈은 ${leftMoney}원 입니다.`)

  // 각각의 화폐 단위가 남은 돈 보다 값이 높을때 까지 빼고, 대입된 화폐단위를 카운트한다
  let fiftythousand = 0
  while(exchange[0].fiftythousand && leftMoney >= exchange[0].value){
    fiftythousand ++
    leftMoney= leftMoney - exchange[0].value
  }
  // console.log(fiftythousand)
  // console.log(leftMoney)
  
  let tenthousand = 0 
  while(exchange[1].tenthousand && leftMoney >= exchange[1].value){
    tenthousand++
    leftMoney = leftMoney - exchange[1].value
  }
  // console.log(tenthousand)
  // console.log(leftMoney)

  let fivethousand =0
  while(exchange[2].fivethousand && leftMoney >= exchange[2].value){
    fivethousand++
    leftMoney = leftMoney - exchange[2].value
  }  
  // console.log(fivethousand)
  // console.log(leftMoney)

  let onethousand=0
  while(exchange[3].onethousand && leftMoney >= exchange[3].value){
    onethousand++
    leftMoney = leftMoney - exchange[3].value
  }  
  // console.log(onethousand)
  // console.log(leftMoney)

  let fivehundred=0
  while(exchange[4].fivehundred && leftMoney >= exchange[4].value){
    fivehundred++
    leftMoney = leftMoney - exchange[4].value
  }  
  // console.log(fivehundred)
  // console.log(leftMoney)

  let onehundred = 0
  while(exchange[5].onehundred && leftMoney >= exchange[5].value){
    onehundred++
    leftMoney = leftMoney - exchange[5].value
  }  
  // console.log(onehundred)
  // console.log(leftMoney)

  let fifty = 0
  while(exchange[6].fifty && leftMoney >= exchange[6].value){
    fifty++
    leftMoney = leftMoney - exchange[6].value
  }  
  // console.log(fifty)
  // console.log(leftMoney)

  let ten = 0
  while(exchange[7].ten && leftMoney >= exchange[7].value){
    ten++
    leftMoney = leftMoney - exchange[7].value
  }  
  // console.log(ten)
  // console.log(leftMoney)

  console.log(`손님에게 주어야 할 화폐는 5만원권 ${fiftythousand}개, 1만원권 ${tenthousand}개, 5천원권 ${fivethousand}개, 천원권 ${onethousand}개, 오백원권 ${fivehundred}개, 백원권 ${onehundred}, 오십원권 ${fifty}개, 십원권 ${ten}개 입니다.`)
}
change_money(34830,100000)

// 이걸 이제 for문을 사용하여 반복문을 돌리려고 합니다. 그러려면 매개변수의 이름을 통일화 하여 반복문을 돌려야 한다는 것을 알게 되었고, 추후에 수정 예정!