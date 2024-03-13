document.querySelector('#submit').addEventListener('click', () => {
    let date = new Date();
    console.log(date.getFullYear())
    let d1 = parseInt(document.querySelector('#date').value);
    let m1 = parseInt(document.querySelector('#month').value);
    let y1 = parseInt(document.querySelector('#year').value);

    if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12 || y1 >= date.getFullYear()) {

        document.getElementById('birthDate').style.display = "none"
        document.getElementById("currentAge").style.color = "red";
        document.getElementById('currentAge').style.margin = "20px 0"
        document.getElementById("currentAge").innerHTML = "Please Enter Valid Date ";
        
    } else {
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();
        
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;
        document.getElementById('birthDate').innerHTML = `Your Birth Date is ${d1} / ${m1} / ${y1}`
        document.getElementById('birthDate').style.display = "block"
        document.getElementById('currentAge').style.margin = "0px"
        document.getElementById("currentAge").style.color = "blue";
        document.getElementById("currentAge").innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;

    }
});