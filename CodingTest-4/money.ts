let exchange1:any =[
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

const change_money1=(totalMoney:number,haveMoney:number)=>{

//손님과의 거래 
let leftMoney = haveMoney - totalMoney
  console.log(`거스름 돈은 ${leftMoney}원 입니다.`)

  // 각각의 화폐 단위가 남은 돈 보다 값이 높을때 까지 빼고, 대입된 화폐단위를 카운트한다
  let fiftythousand = 0
  while(exchange1[0].fiftythousand && leftMoney >= exchange1[0].value){
    fiftythousand ++
    leftMoney= leftMoney - exchange1[0].value
  }
  // console.log(fiftythousand)
  // console.log(leftMoney)
  
  let tenthousand = 0 
  while(exchange1[1].tenthousand && leftMoney >= exchange1[1].value){
    tenthousand++
    leftMoney = leftMoney - exchange1[1].value
  }
  // console.log(tenthousand)
  // console.log(leftMoney)

  let fivethousand =0
  while(exchange1[2].fivethousand && leftMoney >= exchange1[2].value){
    fivethousand++
    leftMoney = leftMoney - exchange1[2].value
  }  
  // console.log(fivethousand)
  // console.log(leftMoney)

  let onethousand=0
  while(exchange1[3].onethousand && leftMoney >= exchange1[3].value){
    onethousand++
    leftMoney = leftMoney - exchange1[3].value
  }  
  // console.log(onethousand)
  // console.log(leftMoney)

  let fivehundred=0
  while(exchange1[4].fivehundred && leftMoney >= exchange1[4].value){
    fivehundred++
    leftMoney = leftMoney - exchange1[4].value
  }  
  // console.log(fivehundred)
  // console.log(leftMoney)

  let onehundred = 0
  while(exchange1[5].onehundred && leftMoney >= exchange1[5].value){
    onehundred++
    leftMoney = leftMoney - exchange1[5].value
  }  
  // console.log(onehundred)
  // console.log(leftMoney)

  let fifty = 0
  while(exchange1[6].fifty && leftMoney >= exchange1[6].value){
    fifty++
    leftMoney = leftMoney - exchange1[6].value
  }  
  // console.log(fifty)
  // console.log(leftMoney)

  let ten = 0
  while(exchange1[7].ten && leftMoney >= exchange1[7].value){
    ten++
    leftMoney = leftMoney - exchange1[7].value
  }  
  // console.log(ten)
  // console.log(leftMoney)

  console.log(`손님에게 주어야 할 화폐는 5만원권 ${fiftythousand}개, 1만원권 ${tenthousand}개, 5천원권 ${fivethousand}개, 천원권 ${onethousand}개, 오백원권 ${fivehundred}개, 백원권 ${onehundred}, 오십원권 ${fifty}개, 십원권 ${ten}개 입니다.`)
}
change_money1(34830,100000)


// 이걸 이제 for문을 사용하여 반복문을 돌리려고 합니다. 그러려면 매개변수의 이름을 통일화 하여 반복문을 돌려야 한다는 것을 알게 되었고, 추후에 수정 예정!