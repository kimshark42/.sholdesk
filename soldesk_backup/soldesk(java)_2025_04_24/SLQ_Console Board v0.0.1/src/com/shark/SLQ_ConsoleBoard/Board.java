package com.shark.SLQ_ConsoleBoard;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Board {
	Connection con = null;
	Statement st = null;

	void run() {
		dblnit();
		dbExecuteUpdate(
				"insert into board (b_title,b_id,b_datetime,b_text,b_hit) values ('콘솔 프로그램에서 쓴 글 입니다','shark',now(),'콘솔 프로그램에서 작성한 글입니따이. 전혀.....따이뾰이하지 않소....',0)");
	}

	private void dblnit() {
		try {
			// (1/n) 디비 접속 정보 넣어서 접속하기.
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_cat", "root", "root");
			// (2/n) Statement 객체 얻어오기.
			st = con.createStatement(); // Statement는 정적 SQL문을 실행하고 그 결과를 반환받기 위한 객체이다.
										// Statement 하나당 한개의 ResultSet 객체만을
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void dbExecuteUpdate(String query) {
		try {
			// (3/n) Statement 객체의 excuteUpdate 함수에 SQL문을 실어서 DB에서 실행되게 하기
			int resultConunt = st.executeUpdate(query); // 이걸 하는 순간 DB에 있는 SQL(세로 라인, 쿼리<query>)가 날아감. (DB에도 반영됨)
			System.out.println("처리된 행 수: " + resultConunt); // 날아간 query를 로그로 찍어줌
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**************************************************************************
	쉬운 버젼에서 바뀐것
	private void dbExecuteUpdate(){
	   try{
	      // (3/n) Statement 객체의 excuteUpdate 함수에 SQL문을 실어서 DB에서 실행되게 하기
	      int resultConunt = st.executeUpdate(query); // 이걸 하는 순간 DB에 있는 SQL(세로 라인, 쿼리<query>)가 날아감. (DB에도 반영됨)
	      int resultConubt = st.executeUpdate("insert into board (b_title,b_id,b_datetime,b_text,b_hit) values ('콘솔 프로그램에서 쓴 글 입니다','shark',now(),'콘솔 프로그램에서 작성한 글입니따이. 전혀.....따이뾰이하지 않소....',0)");
	      System.out.println("처리된 행 수: " + resultConunt); // 날아간 query를 로그로 찍어줌
	      } catch (Exception e) {
	          e.printStackTrace();
	      }
	***************************************************************************/
}