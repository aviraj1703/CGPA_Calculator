const Calculate = () =>{
    let _1_sp = document.getElementById('1_sp').value || 0;
    if(_1_sp < 0){
        alert("Please fill valid number for points of 1st subject");
        return;
    }
    let _2_sp = document.getElementById('2_sp').value || 0;
    if(_2_sp < 0){
        alert("Please fill valid number for points of 2nd subject");
        return;
    }
    let _3_sp = document.getElementById('3_sp').value || 0;
    if(_3_sp < 0){
        alert("Please fill valid number for points of 3rd subject");
        return;
    }
    let _4_sp = document.getElementById('4_sp').value || 0;
    if(_4_sp < 0){
        alert("Please fill valid number for points of 4th subject");
        return;
    }
    let _5_sp = document.getElementById('5_sp').value || 0;
    if(_5_sp < 0){
        alert("Please fill valid number for points of 5th subject");
        return;
    }
    let _6_sp = document.getElementById('6_sp').value || 0;
    if(_6_sp < 0){
        alert("Please fill valid number for points of 6th subject");
        return;
    }
    let _7_sp = document.getElementById('7_sp').value || 0;
    if(_7_sp < 0){
        alert("Please fill valid number for points of 7th subject");
        return;
    }
    let _8_sp = document.getElementById('8_sp').value || 0;
    if(_8_sp < 0){
        alert("Please fill valid number for points of 8th subject");
        return;
    }
    let _9_sp = document.getElementById('9_sp').value || 0;
    if(_9_sp < 0){
        alert("Please fill valid number for points of 9th subject");
        return;
    }
    let _10_sp = document.getElementById('10_sp').value || 0;
    if(_10_sp < 0){
        alert("Please fill valid number for points of 10th subject");
        return;
    }


    let _1_sc = document.getElementById('1_sc').value || 0;
    if(_1_sc < 0){
        alert("Please fill valid number for credits of 1st subject");
        return;
    }
    let _2_sc = document.getElementById('2_sc').value || 0;
    if(_2_sc < 0){
        alert("Please fill valid number for credits of 2nd subject");
        return;
    }
    let _3_sc = document.getElementById('3_sc').value || 0;
    if(_3_sc < 0){
        alert("Please fill valid number for credits of 3rd subject");
        return;
    }
    let _4_sc = document.getElementById('4_sc').value || 0;
    if(_4_sc < 0){
        alert("Please fill valid number for credits of 4th subject");
        return;
    }
    let _5_sc = document.getElementById('5_sc').value || 0;
    if(_5_sc < 0){
        alert("Please fill valid number for credits of 5th subject");
        return;
    }
    let _6_sc = document.getElementById('6_sc').value || 0;
    if(_6_sc < 0){
        alert("Please fill valid number for credits of 6th subject");
        return;
    }
    let _7_sc = document.getElementById('7_sc').value || 0;
    if(_7_sc < 0){
        alert("Please fill valid number for credits of 7th subject");
        return;
    }
    let _8_sc = document.getElementById('8_sc').value || 0;
    if(_8_sc < 0){
        alert("Please fill valid number for credits of 8th subject");
        return;
    }
    let _9_sc = document.getElementById('9_sc').value || 0;
    if(_9_sc < 0){
        alert("Please fill valid number for credits of 9th subject");
        return;
    }
    let _10_sc = document.getElementById('10_sc').value || 0;
    if(_10_sc < 0){
        alert("Please fill valid number for credits of 10th subject");
        return;
    }


    let Numerator = (_1_sp*_1_sc) + (_2_sp*_2_sc) + (_3_sp*_3_sc) + (_4_sp*_4_sc) + (_5_sp*_5_sc) + (_6_sp*_6_sc) + (_7_sp*_7_sc) + (_8_sp*_8_sc) + (_9_sp*_9_sc) + (_10_sp*_10_sc);
    let Denominator = parseInt(_1_sc) + parseInt(_2_sc) + parseInt(_3_sc) + parseInt(_4_sc) + parseInt(_5_sc) + parseInt(_6_sc) + parseInt(_7_sc) + parseInt(_8_sc) + parseInt(_9_sc) + parseInt(_10_sc);
    if(Denominator == 0){
        alert("Enter valid credit values.");
        return;
    }
    let SGPA = Numerator/Denominator;


    let _P_Cg = document.getElementById('P_Cg').value || SGPA;
    if(_P_Cg < 0){
        alert("Please enter valid CGPA");
        return;
    }
    let _C_Sem = document.getElementById('C_Sem').value || 1;
    if(_C_Sem <= 0){
        alert("Please enter valid Semester");
        return;
    }
    if(_P_Cg == 0 && _C_Sem != 1){
        _C_Sem = 1;
        alert("For CGPA = 0 current semester is 1");
    }

    let CGPA = (parseFloat(_P_Cg)*(parseInt(_C_Sem) - 1) + parseFloat(SGPA))/parseInt(_C_Sem);

    document.getElementById('Show_Data').innerHTML=`SGPA : ${SGPA.toFixed(2)} <br/> CGPA : ${CGPA.toFixed(2)}`
}