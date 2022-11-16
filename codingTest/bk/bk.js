// 팀이름, 경기날짜, 선수이름, 총 점수, 3점슛 점수 성곡횟수, 자유투 얻은 횟수를 매개변수로 지정
const score_analysis=(teamName,playDate,playerName,totalScore,threePoint,freedrawChance)=>{ 
  
  console.log(`농구팀 ${teamName}팀은 ${playDate}에 경기를 치루어 총 ${totalScore}점의 점수로 승리하였습니다.`)
  console.log(`이날 중거리 슈터였던 선수 ${playerName}은 총 3점슛을 무려 ${threePoint}개나 쏘아 올렸습니다.`)  
  
  //총 점수가 84점일때 공미남이 넣은 '3점슛성공 횟수 * 3'을 하여 3점슛의 총 점수를 구한 후, 총점수 - 3점슛 점수를 계산하여 남은 점수
  let exceptThree =  totalScore - (threePoint * 3)
  // console.log(exceptThree)

  // 남은 점수에서 2점슛과 자유튜의 비율이 50% 이므로 /2 를하여 2점슛의 점수를 구함
  let twopoint  = exceptThree / 2
  // console.log (twopoint)

  //2점슛 점수에서 2를 나누어 2점슛의 횟수를 구함
  let twopointChance = twopoint / 2
  console.log(`${teamName}팀이 이날 성공한 2점슛은 총 ${twopointChance}회 입니다.`)

  //2점슛과 마찬가지로 남은 점수의 50%가 자유투 점수
  let freedrawPoint = exceptThree / 2

  //자유투 던진 횟수를 입력하고, 그 중에서 성공한 자유투 점수를 출력
  console.log(`그리고 상대팀으로부터 자유투를 ${freedrawChance}개획득하여, 총 ${freedrawPoint}개의 자유투를 성공하였습니다.`)

  //자유투는 한 번 던졌을 때 2번의 기회가 있으므로 *2 해주고, 자유투 점수 / 저유투 던진 횟수 * 100을하여 자유투 성공률을 구함.
  console.log(`이날 ${teamName}팀의 자유투 성공률은 ` + Math.floor((freedrawPoint/(freedrawChance*2)) * 100)+`% 입니다.`)
}
score_analysis("KDT","11월11일","공미남",84,16,13)
