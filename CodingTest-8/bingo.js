// 1. 총 n개의 배열 = length값이 n개
// 2. n개의 length값이 모두 1이 되면 빙고!
// 3. 0과 1외에는 다른 값이 들어올 수 없다.
// 4. 득점을 할 시 해당 빙고의 length값을 제거
// 5. 어떤 방식으로 작동되는 지 알 수 없음
// 6. 모든 값이 없어졌을 때 승리! 띄우기

const lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


//splice를 사용해야될 것 같음
// lineFou1.splice(5,1,1)

const bingo =(array1,array2,array3,array4,array5)=>{
  
  //랜덤으로 숫자를 구하는 함수 => splice에서 사용할 예정
  const randomNumber =(length)=>{
    number =  Math.floor(Math.random()*length);    
    return number
  } 
  // console.log(randomNumber(10))

  // splice로 배열의 값을 수정
  const changeNumber=(array)=>{
    array.splice(randomNumber(array.length),1,1)
    console.log(array)
  }

  // splice로 배열의 값 삭제
  const delNumber =(array,index)=>{
    array.splice(index,1)
    console.log(array)
  }

  // 값을 수정하는 함수에 매개변수로 배열들을 집어넣고 함수로 묶어주었음
  const allchangeFun =() =>{
    changeNumber(array1)
    changeNumber(array2)
    changeNumber(array3)
    changeNumber(array4)
    changeNumber(array5)
  }  

  // 값을 삭제하는 함수에 배열들을 집어넣고 함수로 묶어주멌음
  const del=()=>{
    delNumber(array1)
    delNumber(array2)
    delNumber(array3)
    delNumber(array4)
    delNumber(array5)
  }
  
  //Settimeout으로 함수를 실행하려고했으나 실패함 ㅠ
  let test = setTimeout(async()=>{
    //인덱스 0번째 값이 모두 1이면 빅토리 (배열이 전부 삭제되고 index 0번째 값만 남는 것을 이용하려고했으나 0번째가 빙고로 나와버리면 승리가 뜨는 현상이 있음. 수정 필요!)
    if(array1[0]===1 && array2[0]===1 && array3[0]===1 && array4[0]===1 && array5[0]===1){
      console.log("승리!")
    }
    else{
      //if문에 조건이 아니라면 반복문을 돌려 배열의 값을 0->1로 바꾸어주는 반복문 실행 모두 모든 배열의 동일한 인덱스 값의 원소가 1이 되었을때 해당 인덱스 삭제후 빙고! 출력
      for(let i=0; i < array1.length;i++){
      delay+=1000      

      if(array1[i]===1 && array2[i]===1 && array3[i]===1 && array4[i]===1 && array5[i]===1){        
        del()
        console.log("빙고!")      
      }
    }
    allchangeFun()
  }
},1000)
}
bingo(lineOne1,lineTwo1,lineThr1,lineFou1,linefiv1)


// lineFou1.forEach(function(number){
//   if(number === 0){
//     lineFou1.splice(randomNumber,1,1)
//     console.log(lineFou1)
//   }else{
//     console.log(lineFou1)
//   }
// })


