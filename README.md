# 계산기 예제
## 마 함해봅시더
CRA로 프로젝트 시작

# 진행 및 문제점
1. 클릭한 숫자를 화면에 나타내는데 해당 숫자들을 배열의 원소로 넣어서 보여주려고 하니까 10단위 이상 숫자에서 문제가 생겼다. 내가 원래 생각하던 대로 했으면 10을 입력했을 때 10이 아니라 [1,0] 이니까. 따라서 난 문자열로 받는게 마.. 굳이 문자열로? 숫자로 해봐야겠당 아 안되겠다. 
2. 문자열로 ㄱ 왜? 숫자열로 받는다고 하면 1클릭 2클릭 햇을때 어떻게 처리해야하는지 가늠이 가질 않는다. 차라리 입력이면 편할텐데. '1' + '1' = '11'이니까 이게 편할 것 같다.
3. 세번 이상의 .. 조졌네;
4. 무친 eval이란 것을 찾았다. eval은 문자로 된 JS코드를 실행하는 것이란다. 끝이 보이는 것 같다.
5. eval은 지양해야하는 코드다. 다시 처음을 돌아왓다. 무친 계산기; 그래도 일단 eval로 해보자.
6. 일단 되긴 한다. 하지만 컴터에 있는 계산기랑 좀 달라서 맘에 들지 않는다. 그리고 eval함수를 써서 꼼수로 한 것 같아 좀 그렇다. 따라서 몇 가지 개선책을 생각해보자면
    1) 리액트 답게 props와 state를 이용해보고
    2) eval이 아닌 알고리즘을 이용하여 연산처리
    3) 디자인 개선 
    이렇게 3가지를 개선하면 괜찮은 계산기가 될 것 같다.  


