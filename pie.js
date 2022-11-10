const cone_volume=(radius,height)=>{
  if(1<=radius<=100 && 1<=height<=100){
    return (parseInt(3.14159*radius*height/3))
  }else {
    console.log("숫자확인해라")
  }
}
console.log(cone_volume(3**2,-10));
//조건문으로 1~100사이를 지정해줬는데 console.log에 음수값을 입력해도 else의 console.log가 안찍히고 그냥 음수가 출력되는 문제
