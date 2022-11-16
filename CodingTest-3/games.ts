const game_money1=(time:number,leather:number):void=>{
  let silver = leather * 2
  console.log(silver)
  let copper = silver * 8
  console.log (copper)
  let gold = Math.floor(silver/4)
  let leftcopper =  silver%4
  
  let totalLeather = time * leather
  console.log(totalLeather)

  //한시간짜리는 구했는데, 조건문으로 8시간을 작업했을때를 처리하려고 했으나 시간 부족으로 실패했습니다!(시간이 더있다면 풀 수 있을 것 같아 추후 수정)
  
  console.log(`이날 공미남 플레이어가 한시간 동안 플레이로얻은 gold의 갯수는 ${gold}개 입니다.`)
  console.log(`gold를 제외한 나머지 값어치는 모두 copper로 바꾸어 놓아, 총 ${leftcopper}개의 copper를 챙겼습니다.`)
  console.log(`공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 "${gold}, ${copper}"개를 얻었습니다`)
}
game_money1(4,45)