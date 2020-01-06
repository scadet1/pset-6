let list=[];

function remove()
    {
    let btnindex=this.id.replace("btn","");
    list.splice(btnindex,1);
    showlist(list);


    }

    function priority()
    {
    let btnindex=this.id.replace("pri","")
    let current=list[btnindex];
    list.splice(btnindex,1);
    if (btnindex==0)
    {
     list.push(current);
    }
    else
    {
      list.unshift(current);
    }

    showlist(list);


    }

    function striketext()
    {

       let li=document.getElementsByTagName("LI");
      let btnindex=this.id.replace("chk","")
      if (li[btnindex].style.textDecoration == "line-through")
     {
        li[btnindex].style.textDecoration = "none";
     }
     else
        {
          li[btnindex].style.textDecoration = "line-through";
         }

    }

function add()
{
 var inputValue = document.getElementById("myInput").value;
 if (inputValue.length== 0 || inputValue==null) {
    alert("You must write something!");
    return false;
  } else {
    list.push(inputValue);
  }
  document.getElementById("myInput").value = "";
  showlist(list);
  }


function showlist(todolist)
   {
     eventList = "";
     for (var i = 0; i<todolist.length; i++)
     {
       eventList += "<li>" + todolist[i] + "</li>";
     }
     document.getElementById("mytodolist").innerHTML = eventList;
     let li=document.getElementsByTagName("LI");
     for (var i = 0; i < li.length; i++)
     {
       var btnremove = document.createElement("button");
       btnremove.innerHTML = "\u00D7";
       btnremove.id='btn'+i;
       li[i].appendChild(btnremove);
       document.getElementById('btn'+i).onclick=remove;

       var btnchk = document.createElement("button");
       btnchk.innerHTML = "&#10004";
       btnchk.id='chk'+i;
       li[i].appendChild(btnchk);
       document.getElementById('chk'+i).onclick=striketext;

      var btnpri = document.createElement("button");
       btnpri.innerHTML = "&#10071";
       btnpri.id='pri'+i;
       li[i].appendChild(btnpri);
       document.getElementById('pri'+i).onclick=priority;

     }
    }
