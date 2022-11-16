import math
def game_money(time,leather):
  silver = leather * 2
  print(silver)
  copper = silver * 8
  print(copper)
  gold = math.floor(silver/4)
  leftcopper =  silver%4
  
  totalLeather = time * leather
  print(totalLeather)

  #한시간짜리는 구했는데, 조건문으로 8시간을 작업했을때를 처리하려고 했으나 시간부족으로 실패했습니다!(시간이 더있다면 풀 수 있을 것 같아 추후 수정)
  
  print(f"이날 공미남 플레이어가 한시간 동안 플레이로얻은 gold의 갯수는 {gold}개 입니다.")
  print(f"gold를 제외한 나머지 값어치는 모두 copper로 바꾸어 놓아, 총 {leftcopper}개의 copper를 챙겼습니다.")
  print(f"공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 '{gold}, {copper}'개를 얻었습니다")
  
game_money(4,45)