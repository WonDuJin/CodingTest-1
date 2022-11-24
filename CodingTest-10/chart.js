/*
전개 1. KDT 증권시장에서 투자자들을 위해 종합주가지수에 대한 수치를 그래프로 가독성 더욱 좋게 정보를 제공하려고 합니다.
전개 2. 하루 마다 종합지수가 어떻게 변화폭을 가져왔는지 상승형태의  막대그래프로 보여주는 것으로 결론을 지었습니다.
전개 3. 하지만 주가의 변화량의 전체 주가의 값에 비해 미미해, 어떻게 하면 더 효과적으로 보일  수 있을지 그래프 연출이 필요합니다.

조건 1: 종합주가지수인 kdt_invest의 순서 기준은 하루씩 종합하여 산출한 값입니다.
조건 2: 가로축(X axis)은 시간이 지남에 따라 늘어납니다. 즉 배열의 0번째는 맨 왼쪽에 위치합니다.
조건 3: 세로축(Y axis)은 종합주가지수가 높을수록 맨 아래에서부터 위로 늘어납니다. 즉 지수 0 이라면 맨 아래에 위치합니다.
조건 4: 브라우저에서 보여야 하므로 DOM API를 활용해야 합니다.
조건 5: 하루 당 막대그래프의 가로폭(width)값은 100px씩 차지합니다. 

추가도전 : 상승하는 막대그래프 모션, 클릭했을 때 색이 바뀌는 등 다양한 인터렉션

추가도전 : 하루당 지수 값의 차이가 총량에 비해 미미하므로 극적으로 보이는 '연출'
*/

//root style 설정
const root = document.getElementById("root");
root.style.width = "100vw";
root.style.height = "100vh";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";

const kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995]

//bar 만드는 함수
//반복문을 사용하여 kdt_invest의 length값 만큼 bar 생성
const makeBar=(tagname,style)=>{
  for (let i = 0; i < kdt_invest.length; i++){
    let bar = document.createElement(tagname);
    for (let key in style){
    bar.style[key] = style[key];
  }
  root.append(bar);
}
}
makeBar("div",{width:"100px",height:"300px",backgroundColor:"#808080",margin:"10px"});