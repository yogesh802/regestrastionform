function submit(){
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var fullname=fname.value+" "+lname.value
var Email=document.getElementById('Email')
var Address=document.getElementById('Address')
var Phonenumber=document.getElementById('Phonenumber')
var Password=document.getElementById('Password')
console.log.table(fullname) 
console.log.table(fname.value) 
console.log.table(lname.value) 
console.log.table(Email.value)
console.log.table(Phonenumber.value)
console.log.table(Address.value)
console.log.table(Password.value)
}
