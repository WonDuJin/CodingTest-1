exchange =[
    {'fiftythousand' : True, 'value' : 50000},
    {'tenthousand' : True, 'value' : 10000},
    {'fivethousand' : False, 'value' : 5000},
    {'onethousand' : False, 'value' : 1000},
    {'fivehundred' : True, 'value' : 500},
    {'onehundred' : True, 'value' : 100},
    {'fifty' : True, 'value' : 50},
    {'ten' : True, 'value' : 10},
  ]

  


# print(exchange.length)

def change_money(totalMoney,haveMoney):

# 손님과의 거래 
  leftMoney = haveMoney - totalMoney
  print(f"거스름 돈은 {leftMoney}원 입니다.")

  # 각각의 화폐 단위가 남은 돈 보다 값이 높을때 까지 빼고, 대입된 화폐단위를 카운트한다
  fiftythousand = 0
  while exchange[0]['fiftythousand'] and leftMoney >= exchange[0]['value']:
    fiftythousand = fiftythousand + 1
    leftMoney= leftMoney - exchange[0]['value']
  
  # print(fiftythousand)
  # print(leftMoney)
  
  tenthousand = 0 
  while exchange[1]['tenthousand'] and leftMoney >= exchange[1]['value'] :
    tenthousand = tenthousand + 1
    leftMoney = leftMoney - exchange[1]['value']
  
  # print(tenthousand)
  # print(leftMoney)

  fivethousand =0
  while exchange[2]['fivethousand'] and leftMoney >= exchange[2]['value'] :
    fivethousand = fiftythousand + 1
    leftMoney = leftMoney - exchange[2]['value']

  # print(fivethousand)
  # print(leftMoney)

  onethousand=0
  while exchange[3]['onethousand'] and leftMoney >= exchange[3]['value'] :
    onethousand = onethousand + 1
    leftMoney = leftMoney - exchange[3]['value']
  
  # print(onethousand)
  # print(leftMoney)

  fivehundred=0
  while exchange[4]['fivehundred'] and leftMoney >= exchange[4]['value'] :
    fivehundred = fivehundred + 1
    leftMoney = leftMoney - exchange[4]['value']
  
  # print(fivehundred)
  # print(leftMoney)

  onehundred = 0
  while exchange[5]['onehundred'] and leftMoney >= exchange[5]['value'] :
    onehundred = onehundred + 1
    leftMoney = leftMoney - exchange[5]['value']
  
  # print(onehundred)
  # print(leftMoney)

  fifty = 0
  while exchange[6]['fifty'] and leftMoney >= exchange[6]['value'] :
    fifty = fifty + 1
    leftMoney = leftMoney - exchange[6]['value']
  
  # print(fifty)
  # print(leftMoney)

  ten = 0
  while exchange[7]['ten'] and leftMoney >= exchange[7]['value'] :
    ten = ten + 1
    leftMoney = leftMoney - exchange[7]['value']
  
  # print(ten)
  # print(leftMoney)

  print(f"손님에게 주어야 할 화폐는 5만원권 {fiftythousand}개, 1만원권 {tenthousand}개, 5천원권 {fivethousand}개, 천원권 {onethousand}개, 오백원권 {fivehundred}개, 백원권 {onehundred}, 오십원권 {fifty}개, 십원권 {ten}개 입니다.")

change_money(34830,100000)

# 이걸 이제 for in을 사용하여 반복문을 돌리려고 합니다. 그러려면 매개변수의 이름을 통일화 하여 반복문을 돌려야 한다는 것을 알게 되었고, 추후에 수정 예정!