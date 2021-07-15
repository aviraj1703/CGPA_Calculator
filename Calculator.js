const Calculate = () =>{
    let _1_sp = document.getElementById('1_sp').value;
    let _2_sp = document.getElementById('2_sp').value;
    let _3_sp = document.getElementById('3_sp').value;
    let _4_sp = document.getElementById('4_sp').value;
    let _5_sp = document.getElementById('5_sp').value;
    let _6_sp = document.getElementById('6_sp').value;
    let _7_sp = document.getElementById('7_sp').value;
    let _8_sp = document.getElementById('8_sp').value;
    let _9_sp = document.getElementById('9_sp').value;
    let _10_sp = document.getElementById('10_sp').value;

    let _1_sc = document.getElementById('1_sc').value;
    let _2_sc = document.getElementById('2_sc').value;
    let _3_sc = document.getElementById('3_sc').value;
    let _4_sc = document.getElementById('4_sc').value;
    let _5_sc = document.getElementById('5_sc').value;
    let _6_sc = document.getElementById('6_sc').value;
    let _7_sc = document.getElementById('7_sc').value;
    let _8_sc = document.getElementById('8_sc').value;
    let _9_sc = document.getElementById('9_sc').value;
    let _10_sc = document.getElementById('10_sc').value;

    let Numerator = (_1_sp*_1_sc) + (_2_sp*_2_sc) + (_3_sp*_3_sc) + (_4_sp*_4_sc) + (_5_sp*_5_sc) + (_6_sp*_6_sc) + (_7_sp*_7_sc) + (_8_sp*_8_sc) + (_9_sp*_9_sc) + (_10_sp*_10_sc);
    let Denominator = parseInt(_1_sc) + parseInt(_2_sc) + parseInt(_3_sc) + parseInt(_4_sc) + parseInt(_5_sc) + parseInt(_6_sc) + parseInt(_7_sc) + parseInt(_8_sc) + parseInt(_9_sc) + parseInt(_10_sc);
    let SGPA = Numerator/Denominator;

    document.getElementById('Show_Data').innerHTML=`Your SGPA is ${SGPA.toFixed(2)} .`
}