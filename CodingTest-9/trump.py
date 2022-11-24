shape_array = ["spade", "heart", "diamond", "club", "joker"];

# 야매방법으로 대괄호 안에 객체를 담아주었습니다.
trumpValue = [{"A":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13}]
jokerValue = [{"RED":1,"BLACK":2}]

def trump_deck(shapeArray):  
  trump = {}
  # 반복문을 사용하여 shape_arry의 값을 Key값으로 집어넣음
  for i in range(len(shapeArray)):
    key = shapeArray[i]    
    # 빈객체 안에 키값으로 위에 실행한 key를 넣어준 후 value값으로 trumpvalue값을 넣어주었음
    for j in range(len(trumpValue)):
      # joker는 값이 다르기 때문에 if문으로 키값이 joker일때는 jokerValue값을 넣어주었음
      if(key=="joker"):
        trump[key] = jokerValue[j]
      else:
        trump[key] = trumpValue[j]
    
  return trump

print(trump_deck(shape_array))
trump_deck(shape_array)