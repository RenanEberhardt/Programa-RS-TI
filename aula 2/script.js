$(document).ready(function(){
    $("#bt1").on("click", function(event){
        $.getJSON("./data.json", function(data){
            $("#resultado1").append(data.name + ", ");
            $("#resultado1").append(data.age + " anos ");
            
            for(var i in data.cars){
                $("#resultado1").append(data.cars[i]);
            }
            $("#resultado1").append("<br>");
        });
    });
    $("#bt2").on("click", function(event){
        $.getJSON("./data2.json", function(data){
            $("#resultado2").append(data.name + " " + data.age + " anos:" "<br>");
            
            
            for(var i in data.friends){
                let friendName = data.friends[i].firstName + " " + data.friends[i].lastName;
                $("#resultado2").append("Amigo " + (parseInt(i)+1) + ": " + friendName + "<br>");
            }
            $("#resultado2").append("Total de amigos de " + data.name + ": " + data.friends.length);
        });
    });

    
    
    $("#limpar").on("click", function(event){
        $("div[id^=resultado]").empty();
    });
    
    $("#limpar2").on("click", function(event){
        $("div[id^=resultado2]").empty();
    });
    
});