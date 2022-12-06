/**
 * Todo : 그린컴퓨터 아트 학원 훈련생명단 만들기
 * 
 * ? 학사 행정팀에서 학사 운영을 진행하려면, 훈련생 한명에 대한 다음과 같은 정보가 필요하다.
 * * 임의의 학생
 * * 1. 이름 : 공욱재 // 문자열
 * * 2. 생년월일 : 19930920 // 년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여뎗자리로 구성된 문자열이어야 한다.
 * * 3. NCS직종 :{
 * *       번호 : 1 // 문자열
 * *      이름 : 정보기술개방 // 문자열
 * *        }
 * * 4. 훈련강의실 : 305호 // 문자열이어야 하며, 상황에 따라 다른 호수로 배정 될 수 있다.
 * * 5. 연락처 : 010-9139-0957 // 문자열이어야 하며, 전화번호 규격에 맞게 "-" 하이픈이 들어가야 한다.
 * * 6. 이메일 : kongukjae@gmail.com // 문자열어이야 하며, @ atsign(골뱅이)표시와 도메인 규격인 .(닷)이 들어가야한다.
 * * 7. 훈련강의명 : K-ONG minam Training // 문자열
 * * 8. 훈련시작일 : 2022-07-19 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연,월,일에 맞게 "-" 하이픈이 들어가야한다.
 * * 9. 훈련종료일 : 2023-01-05 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연,월,일에 맞게 "-" 하이픈이 들어가야한다.
 * * 10. 훈련생번호 : 305-01 // "-" 하이픈 기준 좌측 (앞) 부분은 4번 훈련강의실 항목이어야 하며, 훈현생 번호는 누산(카운트)된 형태여야 한다.
**/

class Green {
  constructor(name,birth,ncsnumber,ncsname,room,phone,email,classname,start,end,number){
    this.name = name,
    this.birth = birth,
    this.type = {
      ncsnumber : ncsnumber,
      ncsName : ncsname,
    },
    this.classRoom = room,
    this.phone = phone,
    this.email = email,
    this.className = classname,
    this.classStart = start,
    this.classEnd = end,
    this.classNumber = number
  }  
  set birth(value){
    if (typeof value === "string"){
      this._birth = value;
    }else{
      console.log("문자열로입력해라")
    }
  }  
  //length 2번째 6번째 이후에 - 추가 , 
  set phone(value){
    let num = value.toString()
    console.log(num)
    if(num.length === 11){
    this._phone = num.substring(0,3) + "-" + num.substring(3,7) + "-" + num.substring(7,11)
    }
  }
  set classStart(value){
    let num = value.toString()
    console.log(num)
    if(num.length === 6){
      this._classStart = "20" + num.substring(0,2)+"-"+num.substring(2,4) +"-"+num.substring(4,6)
    }
  }
}

//하이픈 추가 , 220719(2022-01-05)로 출력하게 하기
const greenComputer = new Green("원두진","19890814" ,"1","자바스크립트","305호","01051785545","dddd@naver.com","생성자함수만들어보기",220719,"2022-01-05","305-01")
console.log(greenComputer)

