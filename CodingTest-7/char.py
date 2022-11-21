import re
def text_listup():
  fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "
  
  #영어, 숫자, 한글 포함한 정규식
  engreg = re.compile("[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/")

  #특수문자  + 공백 제외한 정규식
  spacialreg = re.compile("[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi")

  #특수문자 제거 + 대문자 소문자로 변경 

  # ※에러발생※  정규식을 적용하는 법에 대한 학습이 더 필요할 것 같습니다.
  exceptSpacial = spacialreg.search(fromInput)
  print(exceptSpacial)
  
  # 위에 제거된 것에서 영어 + 숫자 
  result = engreg.match(exceptSpacial)
  print.log(result)

  #빈 객체를 생성 후 빈 객체 안에 반복문 + 조건문을 사용
  #음절의 값이 존재 한다면 count+1 을 해주고 존재하지 않으면 해당 음정을 키값으로 생성하고 count+1을 해준다.
  Alphabet = {}
  for i in range(len(exceptSpacial)):
    if(Alphabet[exceptSpacial[i]]>=1):
      Alphabet[exceptSpacial[i]] += 1
    else:
      Alphabet[exceptSpacial[i]] = 1
    
      print(Alphabet)

text_listup()