/******************************************************************
 로또 실행기 v0.6.4

 [기존기능]
 -컴퓨터가 1 ~ 45의 숫자중 하나를 랜덤하게 7번 뽑습니다
 -정해진 숫자 7개와 컴퓨터가 뽑은 랜덤한 숫자 7개중
 몇개가 맞았는지 비교 후 출력해줍니다
 -더 이상 번호가 중복으로 뽑히지 않습니다
 -내 번호들을 기존 일반 변수에서 배열로 변경합니다
 -컴퓨터의 번호들을 기존 일반 변수에서 배열로 변경합니다
 -기존 컴퓨터의 6개 숫자랑 내꺼랑 비교해서 몇개가 일치하는지 세는 작업을
 반복문으로 처리했습니다

v0.6.4 Update
-맞은 갯수에 맞춰 등수를 출력하게끔 되었습니다
 0~2개일치 -> 꽝
 3개 일치 -> 5등
 4개 일치 -> 4등
 5개 일치 -> 3등
 6개 일치 -> 6등
 5개 + 보너스 번호 일치 -> 2등

 *****************************************************************/

// 내 번호 (일반변수 -> 배열열)

var x = [1,2,3,4,5,6]

x[0] = 1;
x[1] = 2;
x[2] = 3;
x[3] = 4;
x[4] = 5;
x[5] = 6;
dw(x);
br();

var Bones = 47;
dw(Bones);
br();

hr();

// 컴퓨터가 뽑는 랜덤한 번호 (일반변수 -> 배열열)

var r = [0,0,0,0,0,0]

var rBones = r


// 1번

r[0] = Math.floor(Math.random()*45)+1;
dw(r[0]);
br();

// 앞번호와 중복이 나오면 다시 뽑게 하는 코드
// 2번

while(true){
    r[1] = Math.floor(Math.random()*45)+1;
    if(r[0] != r[1]){
        dw(r[1]);
        br();
        break;
    }
}

// 3번

while(true){
    r[2] = Math.floor(Math.random()*45)+1;
    if(r[2] != r[0] && r[2] != r[1]){
        dw(r[2]);
        br();
        break;
    }
}

// 4번

while(true){
    r[3] = Math.floor(Math.random()*45)+1;
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        dw(r[3]);
        br();
        break;
    }
}

// 5번

while(true){
    r[4] = Math.floor(Math.random()*45)+1;
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        dw(r[4]);
        br();
        break;
    }
}

// 6번

while(true){
    r[5] = Math.floor(Math.random()*45)+1;
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
        dw(r[5]);
        br();
        break;
    }
}

// Bones

while(true){
    r = Math.floor(Math.random()*45)+1;
    if(r != r[0] && r != r[1] && r != r[2] && r != r[3] && r != r[4] && r != r[5]){
        dw(r[6]);
        br();
        break;
    }
}

// 컴퓨터가 뽑은 숫자 6개랑 내꺼랑 비교해서 몇개가 맞는지 세어 출력

var win = 0; //내가 맞춘 갯수

for(var i=0;i<=5;i=i+1){
    for(var j=0;j<=5;j=j+1){
        if(x[i] == r[j]){
            win = win + 1;
        }
    }
}

var winwin = win + 0;

// Bones

if(Bones == r){
    winwin = win + 1;
}


var str = "";
switch(win){
    case 0:
    case 1:
    case 2:
        str = "꽝!!! 다음기회에";
        break;
    case 3:
        str = "5등에 당첨되셨습니다.";
        break;
    case 4:
        str = "4등에 당첨되셨습니다.";
        break;
    case 5:
        str = "3등에 당첨되셨습니다.";
        break;
    case 6:
        str = "1등에 당첨되셨습니다.";
        break;        
}

dw(str);
dw("보너스번호는"+winwin+"개 맞추셨습니다");
br();
