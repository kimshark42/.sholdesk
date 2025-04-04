/*********************************************************
 로또 실행기 v0.2.0
 
 [기존기능]
 -컴퓨터가 45개 숫자중 하나를 랜덤으로 총 7개 뽑습니다

 v0.2.0 update
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개중 몇개가 맞았는지를
 비교할수 있게 되었습니다 (수동)

 ********************************************************/


// 내가 한 게임을 구매했다고 가정

//컴퓨터의 6개 숫자랑 내꺼랑 비교해서 일치하는지수동으로 세기
// ex.3개 일치

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
dw(x4);
br();
var x5 = 5;
dw(x5);
br();
var x6 = 6;
dw(x6);
br();
br();

var xbounes = 42;
dw(xbounes);
br();
hr();

// 랜덤 번호
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