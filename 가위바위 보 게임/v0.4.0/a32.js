/*******************************************************************
 가위 바위 보 게임 (v0.4.0)

 [기존 기능]
 -가위바위보 기능
 -유저가 가위바위보 외의 입력시 예외처리의 추가
 -유저가 가위바위보 입력을 입력창에서 받도록 수정

 v0.4.0 update 내용
 -결과 화면을 dw()가 아닌 출력화면용 textarea에 출력하도록 개선
 (가위바위보 게임을 단판이 아닌 무한으로 가능하게끔 수정)
 ******************************************************************/

 // t1.addEventListender('click', btn_listener);

 // 선언
var userRpc = "";
var comRpc ="";

var rpcInputText;
var rpcResultScreen;

var resultString = "";

window.onload = function(){

    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultScreen = document.getElementById("rpc_result_screen");

}

function rpcInputButtonClick(){
    resultString = "";  // 결과 화면 초기화
    rpcResultScreen.value = resultString; // 텍스트 에이리어 (가위바위보 썼던곳) 지움

    // userRpc = prompt("가위, 바위, 보 중에 하나를 입력하세요");
    // 원래는 이걸 썼으나 이젠 윗 코드가 이 코드를 대체
    userRpc = rpcInputText.value;
    if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
        comRpc = Math.floor(Math.random()*3+1);
        if(comRpc == 1){
            comRpc == "가위";
        }
        if(comRpc == 2){
            comRpc == "바위";
        }
        if(comRpc == 3){
            comRpc == "보";
        }

        // dw("유저:"userRpc); 밑 코드가 주석 코드를 대체
        // dw 를 쓰면 화면구성한게 다 날라가기때문에 안씀씀

        resultString = resultString + "Player:"+userRpc;

        //br(); \n 행바꾸는 태그그
        resultString = resultString + "\n";
        
        // dw("컴:"+comRpc);
        resultString = resultString +"AI:"+comRpc;
        
        //br();
        resultString = resultString + "\n";

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
        // dw(winDrawLose);
        resultString = resultString + "결과:" + winDrawLose;
        // 결과 출력
        rpcResultScreen.value = resultString;
    } else {
        alert("장난치지마세요");
    }
}