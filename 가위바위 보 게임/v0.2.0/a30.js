/*******************************************************************
 * 가위 바위 보 게임 (v0.2.0)
 * 
 * -가위 바위 보 기능
 * -유저 가위 바위 보 입력 시 예외처리 추가
 * ***************************************************************/

// Rock Scissors Paper
var userRpc = "";
while(true){    //while 무한루프예시
    userRpc =prompt("가위, 바위, 보 중에 하나를 입력하십시오");
    if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
        break; //이거 안넣으면 while 무한루프에 빠져버림
    } else {
        alert("장난치지 마세요"); // 유저가 가위, 바위, 보 중 하나를 치지 않았을경우 출력하는 문자
    }

}

var comRpc = Math.floor(Math.random()*3+1); //1 ~3 중 랜덤으로 하나를 뽑는 변수 반드시 외워 놓을것
if(comRpc == 1){
    comRpc = "가위";
}
if(comRpc == 2){
    comRpc = "바위";
}
if(comRpc == 3){
    comRpc = "보";
}

dw("Player:"+userRpc);
br();
dw("AI:"+comRpc);
br();

var winDrawLose = "";
switch(userRpc){
    case "가위":
        switch(comRpc){
            case "가위":
                winDrawLose = "DRAW";
                break;
            case "바위":
                winDrawLose = "패배";
                break;
            case "보":
                winDrawLose = "승리";
                break;
        }
        break;
    case "바위":
        switch(comRpc){
            case "가위":
                winDrawLose = "승리";
                break;
            case "바위":
                winDrawLose = "DRAW";
                break;
            case "보":
                winDrawLose = "패배";
                break;
        }
        break;
    case "보":
        switch(comRpc){
            case "가위":
                winDrawLose = "패배";
                break;
            case "바위":
                winDrawLose = "승리";
                break;
            case "보":
                winDrawLose = "DRAW";
                break;
        }
        break;
}

dw(winDrawLose);