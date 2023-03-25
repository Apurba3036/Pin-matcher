//  check the pin num length
function getpin() {
    const pin = generatepin();
    const pinstr = pin + "";
    if (pinstr.length === 4) {
        return pin;
    } else {
        // console.log('pin is not 4 digit',pin)
        return getpin();
    }
}

// function to generate pin num

function generatepin() {
    const random = Math.round(Math.random() * 10000);

    return random;
}

document.getElementById("generatepin").addEventListener("click", function () {
    const pin = getpin();
    //   console.log(pin);

    //display pin

    const displaypinfield = document.getElementById("display-pin");
    displaypinfield.value = pin;
});

document
    .getElementById("calculator-body")
    .addEventListener("click", function (event) {
        const num = event.target.innerText;
        const typednumfield = document.getElementById("typed-num");
        const pretypednum = typednumfield.value;

        if (isNaN(num)) {
            if (num === "C") {
                typednumfield.value = "";
            } else if (num === "<") {
                const digits = pretypednum.split("");
                digits.pop();
                const finalnum = digits.join("");
                typednumfield.value = finalnum;
            }
        } else {
            const newtypednum = pretypednum + num;
            typednumfield.value = newtypednum;
        }
    });

document.getElementById("verify-pin").addEventListener("click", function () {
    const displaypinfield = document.getElementById("display-pin");
    const currentpin = displaypinfield.value;
    const typednumfield = document.getElementById("typed-num");
    const currenttypednum = typednumfield.value;

    if (currenttypednum === currentpin) {
        // alert('Correct pin',currenttypednum);
        let tryCount = Number(document.getElementById("try").innerText);
        if (tryCount > 0) {
            const pinsuccess = document.getElementById("pin-success");
            alert(pinsuccess.innerText);
            typednumfield.value = "";
            document.getElementById("try").innerText = 3;
        } else {
            alert("Account Locked");
        }
    } else {
        let trynumstr = document.getElementById("try").innerText;
        let trynum = parseInt(trynumstr);
        if (trynum === 0) {
            alert("Account Locked");
        } else {
            const pinFailed = document.getElementById("pin-failed");
            alert(pinFailed.innerText);
            let newtrynum = trynum - 1;
            document.getElementById("try").innerText = newtrynum;
        }
    }
});

// function trynum(){

// for(i=0; i<3;i++){

// const trynumstr=document.getElementById('try').innerText;
// const trynum=parseInt(trynumstr);
// const newtrynum= trynum-1;
// trynumstr.innerHTML=newtrynum;

// }

// }
