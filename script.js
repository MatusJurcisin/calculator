$(".calculator").fadeIn(300);

var $display = $(".myDisplay")
var $number1 =""
var $number2 =""
var $operator =""
var $userInput ="0"


$(".myNumber").on("click", function(){
    if($userInput.toString().length >= 10){
        return;
    }
    var $number = $(this).attr("data-number");
    
    if($userInput !== "0"){
        $userInput += $number;
    } else{
        $userInput=$number
    }
    $display.html($userInput);
})

$(".decimal").on("click", function(){
    if($userInput.toString().indexOf(".")=== -1){
        $userInput = $userInput + ".";}
        $display.html($userInput);
    });
    
    $(".clearButton").on("click", function(){
        $userInput = "0";
        $display.html($userInput);
    });

$(".operatorButton").on("click", function(){
    $operator = $(this).html().trim();
    $number1 = $userInput;
    $userInput = "0";
    $display.html($userInput);
})

$(".bigButton").on("click", function (){
    $number2 = $userInput;
    var $result;
    switch ($operator){
        case "+":
            $result = Number($number1) + Number($number2);
            break;
        case "-":
            $result = Number($number1) - Number($number2);
            break;
        case "x":
            $result = Number($number1) * Number($number2);
            break;
        case "÷":
            $result = Number($number1) / Number($number2);
            break;
        default:
            $result = "Error";
            break;
    }

    $number1 = $result;
    $display.html($result);
})
    


