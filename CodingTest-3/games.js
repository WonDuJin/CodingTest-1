// 화폐 단위 : copper , silver, gold 
// 화폐 가치 :
// 8 copper === 1 silver
// 4 silver === 1 gold
// 1 leather === 2 silver

// 사용언어 : javascript, typescript, python

// 함수 이름 : game_money()
// 게임에서 획득 한 전리품 : 가죽 45개

// 전개 1. 게임플레이어 공미남은 주말을 맞아 실컷 게임을 즐기기로 마음 먹었습니다.
// 전개 2. 게임초보라 초보사냥터에서 열심히 초보몬스터를 열심히 사냥했습니다.
// 전개 3. 사냥을 통해 한시간 동안 얻은 전리품은 가죽 45개 였습니다.
// 전개 4. 그날 공미남은 총 8시간의 게임을 숨만쉬고 했습니다.

// 출력
// "이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 00개 입니다."
// "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 00개의 copper를 챙겼습니다."
// "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 "00gold, 00copper"를 얻었습니다"

// 문제 
// 조건 0. 특수한 화폐단위를 적용하여 환산을 수 있는 알고리즘을 작성하시오.
// 조건 1: { gold = true, silver = false, copper = true } 라는 함수 객체 타입의 매개변수가 셋팅되어있다면 gold와 copper에 대한 계산치만 결과같이 나올 수 있도록 기능을 조성하시오
// 조건 2: 1 gold = 32 copper  

const game_money=(time,leather)=>{
  let silver = leather * 2
  console.log(silver)
  let copper = silver * 8
  console.log (copper)
  let gold = Math.floor(silver/4)
  let leftcopper =  silver%4
  
  let totalLeather = time * leather
  console.log(totalLeather)

  //한시간짜리는 구했는데, 조건문으로 8시간을 작업했을때를 처리하려고 했으나 시간부족으로 실패했습니다!(시간이 더있다면 풀 수 있을 것 같아 추후 수정)
  
  console.log(`이날 공미남 플레이어가 한시간 동안 플레이로얻은 gold의 갯수는 ${gold}개 입니다.`)
  console.log(`gold를 제외한 나머지 값어치는 모두 copper로 바꾸어 놓아, 총 ${leftcopper}개의 copper를 챙겼습니다.`)
  console.log(`공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 "${gold}, ${copper}"개를 얻었습니다`)
}
game_money(4,45)