# 1. 총 n개의 배열 = length값이 n개
# 2. n개의 length값이 모두 1이 되면 빙고!
# 3. 0과 1외에는 다른 값이 들어올 수 없다.
# 4. 득점을 할 시 해당 빙고의 length값을 제거
# 5. 어떤 방식으로 작동되는 지 알 수 없음
# 6. 모든 값이 없어졌을 때 승리! 띄우기

import math
import threading
import random


lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineThr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
lineFou1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
linefiv1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


# splice를 사용해야될 것 같음
# lineFou1.splice(5,1,1)
linefiv1[0] = 1
print(linefiv1)

def bingo(array1,array2,array3,array4,array5):
  
# 랜덤으로 숫자 구하기 (파이썬에선 필요없을지도~?)
  def randomNumber(length):
    number =  random.randint(1,length)
    return number  
  print(randomNumber(10))

# 파이썬에서 splice를 대체할 것을 찾아보아야겠다. 검색해보니 linefiv1[0] = 1 이런 식으로 바꾸면 될 것 같은데
# 조건문을 사용해서 바꿔줘야 할 것 같음
  def changeNumber(array):
    array.splice(randomNumber(array.length),1,1)
    print(array)
  
  def delNumber (array,index):
    array.splice(index,1)
    print(array)  

  def allchangeFun ():
    changeNumber(array1)
    changeNumber(array2)
    changeNumber(array3)
    changeNumber(array4)
    changeNumber(array5)  

  def deleNum():
    delNumber(array1)
    delNumber(array2)
    delNumber(array3)
    delNumber(array4)
    delNumber(array5)

  def timer():
    if array1[0]==1 and array2[0]==1 and array3[0]==1 and array4[0]==1 and array5[0]==1:
      print("승리!")
    
    else:
      for i in range(len(lineOne1)):
        if array1[i]==1 and array2[i]==1 and array3[i]==1 and array4[i]==1 and array5[i]==1:        
          deleNum()
          print("빙고!")       
    
      allchangeFun()

bingo(lineOne1,lineTwo1,lineThr1,lineFou1,linefiv1)

# 학습이 좀 더 필요해서 추후 수정예정


# lineFou1.forEach(function(number){
#   if(number === 0){
#     lineFou1.splice(randomNumber,1,1)
#     console.log(lineFou1)
#   }else{
#     console.log(lineFou1)
#   }
# })
