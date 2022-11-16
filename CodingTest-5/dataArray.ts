//조건 1. sort 매서드 사용 X
//조건 2. 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작가능하게 만들기
const inputData1 = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];

//내가 시도한 인터페이스 방법이었으나 이 방법이 아닌 것 같음
interface interfaceTest {
  one : number,
  two : number,
  three : number,
  four : number,
  five : number,
}


//상희에게 물어봐서 사용법을 알게 되었으나 아직 더 공부가 필요하므로 주석처리하였음(내가한게아니므로)
// interface sortArrays {
//   (arr:number[]):object
// }

//스왑을 시키기 위한 함수
const sortArray1:sortArrays=(arr)=>{

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
  
  let min:number[] = []
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

  //map?을 사용해야하나..?
  //위 객체를 리터럴 형식이 아닌 다른 방법이 필요 할 것 같음.

  console.log()
  return {}
}
//조건 3 배열을 인자로 주기
sortArray1(inputData1)