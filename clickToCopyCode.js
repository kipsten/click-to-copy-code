
var popupDiv = document.createElement("div");
popupDiv.id = "popupDiv"
$(popupDiv).html("copied");
$(popupDiv).css("position", "absolute");
$(popupDiv).css("background-color", "rgb(30, 30, 30, 0'");
$(popupDiv).css("display", "none");
$(popupDiv).css("left", "100px");
$(popupDiv).css("top", "100px");
$(popupDiv).css("font-size", "16px");
$(popupDiv).css("color", "#333333");
$(popupDiv).css("pointer-events", "none");

$("body").append(popupDiv);

$("code").each( function(){ 
    
    if ($(this).text().indexOf("\n") == -1){
        return;
    }

    var iDiv = document.createElement("div");
    $(iDiv).css("background-color", "#DDDDDD")
    $(iDiv).css("margin-top", "10px");
    iDiv.innerHTML = "<br/><div class='myshit' "
            + "style='height:10px></div>"; 
            
    $(iDiv).hover(function(e){
        $(this).css("cursor","pointer");
    });
    
    $(iDiv).click(function(e){
       
        range = document.createRange()
        range.selectNodeContents($(this).prev().get(0))
        
        selection = window.getSelection ();
        selection.removeAllRanges();
        selection.addRange(range);
        
        document.execCommand('copy');
        
        selection.removeAllRanges();
        
        $(popupDiv).css("left", e.pageX+15);
        $(popupDiv).css("top", e.pageY);
        
        console.log("start")
        
        $(popupDiv).fadeIn(50, function(){
            setTimeout(function(){
               
                $(popupDiv).fadeOut(150);
                console.log("end")
            }, 50);
        })
        
    });
    
    $(this).after(iDiv);
});

