/**********************************************************************
 로또 실행기 v0.6.0

 [기존기능]
 -컴퓨터가 1 ~ 45의 숫자중 하나를 랜덤하게 7번 뽑습니다
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개중
 몇개가 맞았는지 비교 후 출력해줍니다
 -컴퓨터가 뽑은 번호중 첫번째 두번쨰 세번째 번호가 중복된 번호로 뽑히지 않습니다

 v0.6.0 Update
 -이제 모든 번호가 중복되어 뽑히지 않습니더

 ***********************************************************************/

 // 내 번호

var x1 = 1;
dw(x1);
br();
var x2 = 2;
dw(x2);
br();
var x3 = 3;
dw(x3);
br();
var x4 = 4;
dw(4);
br();
var x5 = 5;
dw(x5);
br();
var x6 = 6;
dw(x6);
br();
br();

var xbounes = 47;
dw(xbounes);
br();
hr();

// 컴퓨터가 뽑는 랜덤한 번호

var r1 = Math.floor(Math.random()*45)+1;
dw(r1);
br();

// 앞번호와 중복이 나오면 다시 뽑게 하는 코드

while(true){
    r2 = Math.floor(Math.random()*45)+1;
    if(r1 != r2){
        dw(r2);
        br();
        break;
    }
}

while(true){
    r3 = Math.floor(Math.random()*45)+1;
    if(r3 != r1 && r3 != r2){
        dw(r3);
        br();
        break;
    }
}

while(true){
    r4 = Math.floor(Math.random()*45)+1;
    if(r4 != r1 && r4 != r2 && r4 != r3){
        dw(r4);
        br();
        break;
    }
}

while(true){
    r5 = Math.floor(Math.random()*45)+1;
    if(r5 != r1 && r5 != r2 && r5 != r3 && r5 != r4){
        dw(r5);
        br();
        break;
    }
}

while(true){
    r6 = Math.floor(Math.random()*45)+1;
    if(r6 != r1 && r6 != r2 && r6 != r3 && r6 != r4 && r6 != r5){
        dw(r6);
        br();
        br();
        break;
    }
}

while(true){
    rbounes = Math.floor(Math.random()*45)+1;
    if(rbounes != r1 && rbounes != r2 && rbounes != r3 && rbounes != r4 && rbounes != r5 && rbounes != r6){
        dw(rbounes);
        br();
        break;
    }
}

// 컴퓨터가 뽑은 숫자 6개랑 내꺼랑 비교해서 몇개가 맞는지 세어 출력

var win = 0;      //내가 맞춘 갯수

// 1번

if(x1 == r1){
    win = win + 1;
}
if(x1 == r2){
    win = win + 1;
}
if(x1 == r3){
    win = win + 1;
}
if(x1 == r4){
    win = win + 1;
}
if(x1 == r5){
    win = win + 1;
}
if(x1 == r6){
    win = win + 1;
}
if(x1 == rbounes){
    win = win + 1;
}

// 2번

if(x2== r1){
    win = win + 1;
}
if(x2 == r2){
    win = win + 1;
}
if(x2 == r3){
    win = win + 1;
}
if(x2 == r4){
    win = win + 1;
}
if(x2 == r5){
    win = win + 1;
}
if(x2 == r6){
    win = win + 1;
}
if(x2 == rbounes){
    win = win + 1;
}

// 3번

if(x3 == r1){
    win = win + 1;
}
if(x3 == r2){
    win = win + 1;
}
if(x3 == r3){
    win = win + 1;
}
if(x3 == r4){
    win = win + 1;
}
if(x3 == r5){
    win = win + 1;
}
if(x3 == r6){
    win = win + 1;
}
if(x3 == rbounes){
    win = win + 1;
}

// 4번

if(x4 == r1){
    win = win + 1;
}
if(x4 == r2){
    win = win + 1;
}
if(x4 == r3){
    win = win + 1;
}
if(x4 == r4){
    win = win + 1;
}
if(x4 == r5){
    win = win + 1;
}
if(x4 == r6){
    win = win + 1;
}
if(x4 == rbounes){
    win = win + 1;
}

// 5번

if(x5 == r1){
    win = win + 1;
}
if(x5 == r2){
    win = win + 1;
}
if(x5 == r3){
    win = win + 1;
}
if(x5 == r4){
    win = win + 1;
}
if(x5 == r5){
    win = win + 1;
}
if(x5 == r6){
    win = win + 1;
}
if(x5 == rbounes){
    win = win + 1;
}

// 6번

if(x6 == r1){
    win = win + 1;
}
if(x6 == r2){
    win = win + 1;
}
if(x6 == r3){
    win = win + 1;
}
if(x6 == r4){
    win = win + 1;
}
if(x6 == r5){
    win = win + 1;
}
if(x6 == r6){
    win = win + 1;
}
if(x6 == rbounes){
    win = win + 1;
}

// Bounes

if(xbounes == r1){
    win = win + 1;
}
if(xbounes == r2){
    win = win + 1;
}
if(xbounes == r3){
    win = win + 1;
}
if(xbounes == r4){
    win = win + 1;
}
if(xbounes == r5){
    win = win + 1;
}
if(xbounes == r6){
    win = win + 1;
}
if(xbounes == rbounes){
    win = win + 1;
}

dw("7개중"+win+"개 가 맞으셨습니다")