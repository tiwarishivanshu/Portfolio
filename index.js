(function(){
    var name=document.getElementById("root");
var myName=["Hello I'm","Shivanshu Tiwari","I'm a Technical enthusiast", "I'm a blogger", "And a FreeLancer"];
    var counter=0;
    if(counter<myName.length)
    {
        setInterval(function()
        {
            name.innerHTML=myName[counter];
            counter++;
            if(counter==myName.length)
            {
                counter=0;
            }
        },2000);
    }
}
)();