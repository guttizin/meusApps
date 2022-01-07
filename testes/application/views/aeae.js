//calculate the value of two fractions to another fraction
function calculate(fraction1,fraction2,operator){
	var numerator1=fraction1.split("/")[0];
	var denominator1=fraction1.split("/")[1];
	var numerator2=fraction2.split("/")[0];
	var denominator2=fraction2.split("/")[1];
	if(operator=='+'){
		var numerator=parseInt(numerator1)*parseInt(denominator2)+parseInt(numerator2)*parseInt(denominator1);
		var denominator=parseInt(denominator1)*parseInt(denominator2);
	}else if(operator=='-'){
		var numerator=parseInt(numerator1)*parseInt(denominator2)-parseInt(numerator2)*parseInt(denominator1);
		var denominator=parseInt(denominator1)*parseInt(denominator2);
	}else if(operator=='*'){
		var numerator=parseInt(numerator1)*parseInt(numerator2);
		var denominator=parseInt(denominator1)*parseInt(denominator2);
	}else if(operator=='/'){
		var numerator=parseInt(numerator1)*parseInt(denominator2);
		var denominator=parseInt(numerator2)*parseInt(denominator1);
	}else if(operator=='='){
		var numerator=parseInt(numerator1);
		var denominator=parseInt(denominator1);
	}
	var result=numerator+"/"+denominator;
    result = resolve(result);
	return result;
}

//An object related to a car
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

//create a function that mutiplay a number by 2
function multiplyBy2(number){
    return number*2;
}

//new object for a car
var car = new Car('Honda', 'Accord', '2010', 'blue');

//Create a new car object using {}
var car2 = {
    make: 'Honda',
    model: 'Accord',
    year: '2010',
    color: 'blue'
};

function calculate2(fraction1,fraction2,operator){
    var result;
    switch(operator){
      case '+':
        result = add(fraction1,fraction2);
        break;
      case '-':
        result = subtract(fraction1,fraction2);
        break;
      case '*':
        result = multiply(fraction1,fraction2);
        break;
      case '/':
        result = divide(fraction1,fraction2);
        break;
      default:
        result = 'Error';
        break;
    }
    result = resolve(result);
    return result;
  }

  //function add
    function add(fraction1,fraction2){
        var numerator1=fraction1.split("/")[0];
        var denominator1=fraction1.split("/")[1];
        var numerator2=fraction2.split("/")[0];
        var denominator2=fraction2.split("/")[1];
        var numerator=parseInt(numerator1)*parseInt(denominator2)+parseInt(numerator2)*parseInt(denominator1);
        var denominator=parseInt(denominator1)*parseInt(denominator2);
        var result=numerator+"/"+denominator;
        return result;
    }
//undeclared functions of calculate2
function subtract(fraction1,fraction2){
    var numerator1=fraction1.split("/")[0];
    var denominator1=fraction1.split("/")[1];
    var numerator2=fraction2.split("/")[0];
    var denominator2=fraction2.split("/")[1];
    var numerator=parseInt(numerator1)*parseInt(denominator2)-parseInt(numerator2)*parseInt(denominator1);
    var denominator=parseInt(denominator1)*parseInt(denominator2);
    var result=numerator+"/"+denominator;
    return result;
}
function multiply(fraction1,fraction2){
    var numerator1=fraction1.split("/")[0];
    var denominator1=fraction1.split("/")[1];
    var numerator2=fraction2.split("/")[0];
    var denominator2=fraction2.split("/")[1];
    var numerator=parseInt(numerator1)*parseInt(numerator2);
    var denominator=parseInt(denominator1)*parseInt(denominator2);
    var result=numerator+"/"+denominator;
    return result;
}
function divide(fraction1,fraction2){
    var numerator1=fraction1.split("/")[0];
    var denominator1=fraction1.split("/")[1];
    var numerator2=fraction2.split("/")[0];
    var denominator2=fraction2.split("/")[1];
    var numerator=parseInt(numerator1)*parseInt(denominator2);
    var denominator=parseInt(numerator2)*parseInt(denominator1);
    var result=numerator+"/"+denominator;
    return result;
}
function calculate3(fraction1,fraction2,operator){
	var result = {};
	if(operator == '+'){
		result.numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
		result.denominator = fraction1.denominator * fraction2.denominator;
	}else if(operator == '-'){
		result.numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
		result.denominator = fraction1.denominator * fraction2.denominator;
	}else if(operator == '*'){
		result.numerator = fraction1.numerator * fraction2.numerator;
		result.denominator = fraction1.denominator * fraction2.denominator;
	}else if(operator == '/'){
		result.numerator = fraction1.numerator * fraction2.denominator;
		result.denominator = fraction1.denominator * fraction2.numerator;
	}

    result = resolve(result);
	return result;
}

//Resolve the fraction returning the value of division or the value as other fraction
function resolve(fraction){
	var numerator=fraction.split("/")[0];
	var denominator=fraction.split("/")[1];
	if(numerator==0){
		return "0";
	}
	if(denominator==0){
		return "Error";
	}
	if(numerator%denominator==0){
		return numerator/denominator;
	}else{
		return fraction;
	}
}

//the fraction that generate whole pi number
function pi(){
    var numerator=0;
    var denominator=1;
    for(var i=0;i<=100;i++){
        numerator=numerator+4*(-1)**i;
        denominator=denominator*(2*i+1);
    }
    var result=numerator+"/"+denominator;
    return result;
}