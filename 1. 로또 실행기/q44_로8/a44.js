/******************************************************************
 로또 실행기 v0.6.2

 [기존기능]
 -컴퓨터가 1 ~ 45의 숫자중 하나를 랜덤하게 7번 뽑습니다
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개중
 몇개가 맞았는지 비교 후 출력해줍니다
 -더 이상 번호가 중복으로 뽑히지 않습니다
 -내 번호들을 기존 일반 변수에서 배열로 변경합니다

v0.6.2 Update
-컴퓨터의 번호들을 기존 일반 변수에서 배열로 변경합니다

 *****************************************************************/

// 내 번호

var x = [1,2,3,4,5,6,47]

x[0] = 1;
x[1] = 2;
x[2] = 3;
x[3] = 4;
x[4] = 5;
x[5] = 6;
x[6] = 47;
dw(x);
br();
hr();

// 컴퓨터가 뽑는 랜덤한 번호

var r = [1,2,3,4,5,6,7]

r[0] = Math.floor(Math.random()*45)+1;
dw(r[0]);
br();

// 앞번호와 중복이 나오면 다시 뽑게 하는 코드

while(true){
    r[1] = Math.floor(Math.random()*45)+1;
    if(r[0] != r[1]){
        dw(r[1]);
        br();
        break;
    }
}

while(true){
    r[2] = Math.floor(Math.random()*45)+1;
    if(r[2] != r[0] && r[2] != r[1]){
        dw(r[2]);
        br();
        break;
    }
}

while(true){
    r[3] = Math.floor(Math.random()*45)+1;
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        dw(r[3]);
        br();
        break;
    }
}

while(true){
    r[4] = Math.floor(Math.random()*45)+1;
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        dw(r[4]);
        br();
        break;
    }
}

while(true){
    r[5] = Math.floor(Math.random()*45)+1;
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
        dw(r[5]);
        br();
        break;
    }
}

while(true){
    r[6] = Math.floor(Math.random()*45)+1;
    if(r[6] != r[0] && r[6] != r[1] && r[6] != r[2] && r[6] != r[3] && r[6] != r[4] && r[6] != r[5]){
        dw(r[6]);
        br();
        break;
    }
}

// 컴퓨터가 뽑은 숫자 6개랑 내꺼랑 비교해서 몇개가 맞는지 세어 출력

var win = 0;      //내가 맞춘 갯수

// 1번

if(x[0] == r[0]){
    win = win + 1;
}
if(x[0] == r[1]){
    win = win + 1;
}
if(x[0] == r[2]){
    win = win + 1;
}
if(x[0] == r[3]){
    win = win + 1;
}
if(x[0] == r[4]){
    win = win + 1;
}
if(x[0] == r[5]){
    win = win + 1;
}
if(x[0] == r[6]){
    win = win + 1;
}

// 1번

if(x[1] == r[0]){
    win = win + 1;
}
if(x[1] == r[1]){
    win = win + 1;
}
if(x[1] == r[2]){
    win = win + 1;
}
if(x[1] == r[3]){
    win = win + 1;
}
if(x[1] == r[4]){
    win = win + 1;
}
if(x[1] == r[5]){
    win = win + 1;
}
if(x[1] == r[6]){
    win = win + 1;
}

// 3번

if(x[2] == r[0]){
    win = win + 1;
}
if(x[2] == r[1]){
    win = win + 1;
}
if(x[2] == r[2]){
    win = win + 1;
}
if(x[2] == r[3]){
    win = win + 1;
}
if(x[2] == r[4]){
    win = win + 1;
}
if(x[2] == r[5]){
    win = win + 1;
}
if(x[2] == r[6]){
    win = win + 1;
}

// 4번

if(x[3] == r[0]){
    win = win + 1;
}
if(x[3] == r[1]){
    win = win + 1;
}
if(x[3] == r[2]){
    win = win + 1;
}
if(x[3] == r[3]){
    win = win + 1;
}
if(x[3] == r[4]){
    win = win + 1;
}
if(x[3] == r[5]){
    win = win + 1;
}
if(x[3] == r[6]){
    win = win + 1;
}

// 5번

if(x[4] == r[0]){
    win = win + 1;
}
if(x[4] == r[1]){
    win = win + 1;
}
if(x[4] == r[2]){
    win = win + 1;
}
if(x[4] == r[3]){
    win = win + 1;
}
if(x[4] == r[4]){
    win = win + 1;
}
if(x[4] == r[5]){
    win = win + 1;
}
if(x[4] == r[6]){
    win = win + 1;
}

// 6번

if(x[5] == r[0]){
    win = win + 1;
}
if(x[5] == r[1]){
    win = win + 1;
}
if(x[5] == r[2]){
    win = win + 1;
}
if(x[5] == r[3]){
    win = win + 1;
}
if(x[5] == r[4]){
    win = win + 1;
}
if(x[5] == r[5]){
    win = win + 1;
}
if(x[5] == r[6]){
    win = win + 1;
}

// Bounes

if(x[6] == r[0]){
    win = win + 1;
}
if(x[6] == r[1]){
    win = win + 1;
}
if(x[6] == r[2]){
    win = win + 1;
}
if(x[6] == r[3]){
    win = win + 1;
}
if(x[6] == r[4]){
    win = win + 1;
}
if(x[6] == r[5]){
    win = win + 1;
}
if(x[6] == r[6]){
    win = win + 1;
}

dw("7개중"+win+"개 가 맞으셨습니다")