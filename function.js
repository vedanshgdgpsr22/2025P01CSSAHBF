// Set Name
let name="Kashvi"
//Set Date Of Birthday in YYYY/MM/DD
let bday= new Date("2010-10-10")
//Setting Page Title
document.getElementById("title").innerHTML = "Happy Birthday! " + name + " Hope You Have A Wonderful Day Ahead"
//Cheking If Today Really His/Hers Birthday
let d= new Date("2025-10-10")
if(bday.getMonth()== d.getMonth()){
    if(bday.getDate()== d.getDate()) {
      window.alert("It is your birthday")
      const age= d.getFullYear()-bday.getFullYear()
      document.getElementById("bcakeage").innerHTML= age+"th"
    }
    else {
       window.alert("Not your birthday")
       window.location.assign("notyourbday.html")
    }
}
else{
    window.alert("Not your Birthday")
    window.location.assign("notyourbday.html")
}
//Happy Birthday Text
document.getElementById("hbn").innerHTML= "Happy Birthday"+"<br>" + name+"!"  


