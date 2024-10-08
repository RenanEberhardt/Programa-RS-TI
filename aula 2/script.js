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
    $("#limpar").on("click", function(event){
        $("div[id^=resultado]").empty();
    });
});