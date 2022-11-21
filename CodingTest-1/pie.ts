interface typestyle {
  radius : any;
  height : number;
}


const cone_volume1=(radius:typestyle,height:typestyle)=>{
  if(1<radius && radius<100 && 1<height && height < 100){
    return (parseInt(3.14159*radius*height/3))
  }else {
    console.log("숫자확인해라")
  }

  return 
}
console.log(cone_volume1(3**2,10));
// JS와는 다르게 1~100사이를 어떻게 지정해줘야할지 모르겠음! 
//TS는 함수 마지막에 return값을 입력해줘야하는데 if문 리턴값을 출력하고 싶은데 어떻게 해야할 지 모르겠음!