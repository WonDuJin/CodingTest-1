const score_analysis=(total,threeChance,freedrawChance)=>{
  let exceptthree = total - (threeChance*3)
  console.log(exceptthree)

  let twoplusone = exceptthree / 2
  console.log(twoplusone)
  // 3점슛을 제외하고 남은 점수에서 50%니까 2점슛과 자유투는 각각 18점씩 성공


  let twochance = twoplusone / 2
  // 2점슛은 9회 성공! 고로 A = 9회
  console.log(`KDT팀이 이 날 성공한 2점슛은 총 ${twochance}회 입니다.`)

  let freedrawAverage  = freedrawChance / 
  //자유투로 18점을 넣었음.
  //상대팀으로부터 자유투를 B번 획득해, 총 C개의 자유투를 성공하였습니다."




}
score_analysis(84,16)
// console.log("KDT팀이 이 날 성공한 2점슛은 총"+A+"회 입니다.")
