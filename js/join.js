function abc() {
    if (!IdPwCheck()) { //아이디 비밀번호 검사
        return false;
    } else if (!EmailCheck()) { //이메일 검사
        return false;
    } else { //유효성 검사 완료시 회원가입 진행
        alert("회원가입이 완료되었습니다.");
        return true;
    }
}

function IdPwCheck() {
    var objId = document.getElementById("member_id"); //아이디 id
    var objPw = document.getElementById("passwd"); //비밀번호 id
    var objPwCheck = document.getElementById("user_passwd_confirm"); //비밀번호확인id
    var regExp1 = /^[\w]{4,12}$/; //아이디와 비밀번호에 사용할 정규표현식
    if (objId.value == "") { //ID가 공백일 경우 false 반환
        alert("ID를 입력해 주세요");
        return false;
    } else if (!regExp1.test(objId.value)) { //아이디의 값을 검사해 true or false 반환
        alert("ID를 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
        objId.value == "";
        return false;
    } else if (objPw.value != objPwCheck.value) { //비밀번호 확인이 다를 경우 false 반환
        alert("비밀번호와 비밀번호 확인을 다시 입력해주세요.");
        return false;
    } else if (objPw.value == objId.value) { //아이디 비밀번호가 같을 경우 false 반환
        alert("아이디와 비밀번호를 다르게 만들어주세요.");
        return false;

    } else if (!regExp1.test(objPw.value)) { //비밀번호 정규표현식 검사
        alert("PW를 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
        return false;
    } else {
        return true;

    }
} //Id/Pw 검사 end

function EmailCheck() { //이메일 확인 함수
    var objEmail = document.getElementById("email1"); //email1 text 할당
    var bb = /^[\w]+@[\w]+.[\.\w]{2,5}$/; //이메일 규칙 정규표현식 /^:문자열 시작 표현 \w:영문 대소문자, 숫자 +:1회 이상 {2,5}:2번 이상 5번 이하 $/:문자열 마지막 표현 
    if (!bb.test(objEmail.value)) { //이메일 값을 정규표현식과 비교하여 true or false 반환
        alert("이메일을 다시 입력해주세요.");
        return false;
    } else { //검사 통과시 true 반환
        return true;
    }
} //이메일 검사 end