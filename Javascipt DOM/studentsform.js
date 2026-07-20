function deff(event){
   event.preventDefault()
   document.getElementById("myform").reset() 
}
    var table22=document.getElementById("table2")
     
     
    
     function def(){
       var namee=document.getElementById("sname").value
       var agee=document.getElementById("sage").value
       var gendercheck=document.querySelector('input[name="Gender"]:checked')
      
       var genderr = gendercheck ? gendercheck.value :""

       var semaill=document.getElementById("semail").value
       var select=document.getElementById("sselect").value
      if
         (namee.trim()==""||agee.trim()==""|| genderr.trim()==""|| semaill.trim()=="" || select.trim()=="")

        alert("Please Enter Valid Details ")
      
     
     
     else{
      table22.style.display="table"
     var newone = `<tr>
    <td>${namee}</td>
    <td>${agee}</td>
    <td>${genderr}</td>
    <td>${select}</td>
    <td>${semaill}</td>
    <td><button style="background-color: red;" onclick="delet(this)" >Delete</button></td>
</tr>`

table22.innerHTML+=newone 
     }
    }
       function delet(buttonclicked){
        var row = buttonclicked.parentElement.parentElement;
        row.remove()
     }
     
   
