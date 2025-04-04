/***********************************************************
 로또 실행기 v0.3.0

 [기존 기능]
 -컴퓨터가 45개 숫자중 하나를 랜덤으로 총 7개 뽑습니다
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개중 몇개가 맞았는지를
 비교할수 있게 되었습니다 (수동)

 v0.3.0 Update
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개를 비교후 몇개가
 맞았는지 출력해줍니다

 ***********************************************************/


// 내가 한 게임을 구매했다 가정

// 컴퓨터의 6개 숫자랑 내꺼랑 비교해서 몇개가 일치하는지 세어 출력하기
// ex) 3개 일치

// 내 번호
var x1 = 1;
dw(x1)
br();
var x2 = 2;
dw(x2)
br();
var x3 = 3;
dw(x3)
br();
var x4 = 4;
dw(x4)
br();
var x5 = 5;
dw(x5)
br();
var x6 = 6;
dw(x6)
br();
br();

var xbounes = 47;
dw(xbounes)
br();
hr();

// 컴퓨터가 뽑는 랜덤한 번호
var r1 = Math.floor(Math.random()*45)+1;
dw(r1);
br();

var r2 = Math.floor(Math.random()*45)+1;
dw(r2);
br();

var r3 = Math.floor(Math.random()*45)+1;
dw(r3);
br();

var r4 = Math.floor(Math.random()*45)+1;
dw(r4);
br();

var r5 = Math.floor(Math.random()*45)+1;
dw(r5);
br();

var r6 = Math.floor(Math.random()*45)+1;
dw(r6);
br();
br();

var rbounes = Math.floor(Math.random()*45)+1;
dw(rbounes);
br();

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는지 세어 출력하기

// 내가 맞춘수
var win = 0;

// 내가 고른 1번이 컴퓨터가 뽑은 7개 중에 일치하는게 있는지 확인
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
if(x2 == r1){
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

dw("win:"+win);