// 전개 1. 매일같이 사용하던 더미텍스트인 로렘입숨을 뜯어보고 싶어졌습니다.
// 전개 2. 의미가 없는 문장의 나열이라고는 하지만, 그래도 알파벳을 사용하고 있기 때문에 주어진 문장 중에 가장 많이 사용한 알파벳이 있을 것이라는 호기심이 생겼습니다.
// 전개 3. 하나하나 사람이 셀 수는 없는 노릇이기에 컴퓨터에게 맡기기로 합니다.
// 전개 4. 주어진 더미텍스트의 알파벳은 총 무엇을 몇개 사용되어 만들어진 문장일까요?



// 조건 1: 주어진 데이터에 사용된 알파벳은 무엇이 몇개를 사용했는지 객체(object, dictionary) 타입으로 출력되도록 해야합니다.
// 조건 2: 해당 알고리즘은 다른 나라의 언어(한글, 일본어와 같은)이어도 동작해야 합니다.
// 조건 3: 조건 1이 출력되었다면, 가장 많이 작성된 음절(알파벳)만큼, 가장 적게 작성된 음절(알파벳)도 가장 많이 작성된 음절과 차이난 만큼 생성되어, 문장 사이사이에 무작위로 배치되어야 합니다. 
// 예) 많이쓴 음절 10개, 적게쓴 음절 2개 -> 적게쓴 음절8개 무작위로 문자열 사이사이 추가
// 조건 3: 조건3이 해결되었다면,  띄어쓰기는 5개의 음절이 뭉쳐져 마치 하나의 단어처럼 보이도록 조정합니다. 예) Itisa longe stabl ished
// 조건 4: 부모함수(root)는 text_listup() 하나이어야만 합니다. (자식함수는 자유롭게 진행)

const text_listup=()=>{
  const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

  let count = 0;
  // let splitResult  = fromInput.split(""); 
  
  //영어, 숫자, 한글 포함한 정규식
  let engreg = /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
  

  //특수문자  + 공백 제외한 정규식
  let spacialreg =  /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi;

  // 특수문자 제거 + 대문자 소문자로 변경 
  let exceptSpacial = fromInput.replace(spacialreg,"").toLowerCase()
  // console.log(exceptSpacial)
  
  //위에 제거된 것에서 영어 + 숫자 
  let result = exceptSpacial.match(engreg);
  // console.log(result)

  //빈 객체를 생성 후 빈 객체 안에 반복문 + 조건문을 사용
  //음절의 값이 존재 한다면 count+1 을 해주고 존재하지 않으면 해당 음정을 키값으로 생성하고 count+1을 해준다.
  const Alphabet = {}
  for (let i = 0; i <exceptSpacial.length; i++){
    if(Alphabet[exceptSpacial[i]]>=1){
      Alphabet[exceptSpacial[i]] += 1
    }else{
      Alphabet[exceptSpacial[i]] = 1
      console.log(Alphabet)
    }
  }
}

text_listup()

// 조건 3부터 풀이 못했음... 추후 풀이 예정입니다.