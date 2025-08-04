function submit(){
    var name=document.getElementById("name");
    console.log(name.value);

    var fathername=document.getElementById("fathername");
    console.log(fathername.value);

    var mothername=document.getElementById("mothername");
    console.log(mothername.value);

    var age=document.getElementById("age");
    console.log(age.value);

    var dob=document.getElementById("dob");
    console.log(dob.value);

    var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }

    console.log("Selected gender :", selectedgender);
    document.getElementById('selectedValue')?.remove();


    var address=document.getElementById("address");
    console.log(address.value);

    var email=document.getElementById("email");
    console.log(email.value);

    var phno=document.getElementById("phno");
    console.log(phno.value);

    var course=document.getElementById("course");
    console.log(course.value); 

     var bloodgroup=document.getElementById("bloodgroup");
    console.log(bloodgroup.value);
}