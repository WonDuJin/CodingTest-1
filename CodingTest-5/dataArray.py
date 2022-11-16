inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]

# #스왑을 시키기 위한 함수

#   #arr의 값을 변수에 저장하고, 서로의 값을 스왑하는 함수
#   def swap(a):
#     one = arr[a];
#     two = arr[a+1]; 
    
  
#   arr[a+1] = one
#   arr[a] = two
  
#   return  arr



#   #step 값 초기화, 배열로 출력하기 위해 min 에 빈배열 선언
#   step = 0
#   min = []

#   #반복문 1개면 index 0번쨰와 1번쨰의 값을 비교
#   #반복문은 한 번만 사용하면 비교하고 바로 종료되기 때문에 반복문을 한 번 더 사용했음
#   for(let i = 0; i < arr.length; i++){    
#     step ++
#     for (let j = 0; j<arr.length; j ++){
#       if(arr[j] > arr[j+1]){
#         min = swap(j)
#       }
#     } 
#   }
#   print(min)
#   print(step)

#   #조건 5. 데이터를 객체로 출력하기 위하여 작성

#   #map?

#   print(objectData)

# #조건 3. 
# sortArray1(inputData)


#조건 1. sort 매서드 사용 X
#조건 2. 무작위 배열에도 사용 가능하게 만들기

#조건 3. 인자를 배열로 받기
def sortArray1(arr):
  #증가값을 표시하기 위하여 step 값 초기화
  step = 0

  #반복문에서 사용할 값의 위치를 바꿔주기 위한 함수
  def swap(a):
    one = arr[a]
    two = arr[a+1] 
    
    arr[a+1] = one
    arr[a] = two

    return swap

  print(range(len(arr)))

#반복문을 사용하여 index값을 비교.
#반복문을 한 번만 사용하면 한 번만 비교하고 바로 출력하기 때문에 반복문을 한 번 더 사용해주었다.
  for i in range(len(arr)):    
    for j in range(len(arr)-1):      
      if(arr[j] > arr[j+1]):
        swap(j)
        step = step +1
  
  print(arr)

  
  objectData ={
    "one" : arr[0],
    "two" : arr[1],
    "three" : arr[2],
    "four" : arr[3],
    "five" : arr[4],
  }
  #리터럴 방식이 아닌 다른 방식이 필요해보임

  #조건 5 출력은 객체로 출력하기
  print(objectData)


  #조건 4. 리턴 타입 객체
  return objectData
sortArray1(inputData)