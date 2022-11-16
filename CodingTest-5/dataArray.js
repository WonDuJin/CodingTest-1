//1. 원소값을 순서대로 정렬
//2. 정렬용 메서는 사용 X
//3. 순서를 바꾸는 실행이 일어날 때 step 값이 1씩 증가되는 로직을 사용하여  총 몇번 일어나는지 구하기
//4. 리턴은 인터페이스문법을 쓰기 위해 객체타입으로 출력


//조건 1. sort 매서드 사용 X
//조건 2. 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작가능하게 만들기
const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];

//스왑을 시키기 위한 함수
const sortArray=(arr)=>{

  //arr의 값을 변수에 저장하고, 서로의 값을 스왑하는 함수
const swap = (a) =>{
  let one = arr[a];
  let two = arr[a+1]; 
  
  
  arr[a+1] = one
  arr[a] = two
  
  return  arr

}

  //step 값 초기화, 배열로 출력하기 위해 min 에 빈배열 선언
  let step = 0
  let min = []

  //반복문 1개면 index 0번쨰와 1번쨰의 값을 비교
  //반복문은 한 번만 사용하면 비교하고 바로 종료되기 때문에 반복문을 한 번 더 사용했음
  for(let i = 0; i < arr.length; i++){    
    step ++
    for (let j = 0; j<arr.length; j ++){
      if(arr[j] > arr[j+1]){
        min = swap(j)
      }
    } 
  }
  console.log(min)

  //조건 6. step의 실행 횟수 출력
  console.log(step)

  //조건 4. 리턴타입은 객체 
  //조건 5. 데이터를 객체로 출력하기 위하여 작성
  const objectData ={
    "one" : min[0],
    "two" : min[1],
    "three" : min[2],
    "four" : min[3],
    "five" : min[4],
  }

  //map?을 사용해야하나..?
  //위 객체를 리터럴 형식이 아닌 다른 방법이 필요 할 것 같음.

  console.log(objectData)
}
//조건 3 배열을 인자로 주기
sortArray(inputData)



