var animal1;
var animal2;
var comboAnimal;

function Animal(name, type, nOfLegs,
				nOfArms, avWigth, maxSpeed,
				avSpeed, avOld, isInRedBook) {


		this.name = name;
		this.type = type;
		this.nOfLegs = nOfLegs;
		this.nOfArms = nOfArms;
		this.avWigth = avWigth;
		this.maxSpeed = maxSpeed;
		this.avSpeed = avSpeed;
		this.avOld = avOld;
		this.isInRedBook = isInRedBook;
		var power = avWigth * maxSpeed;
		this.power = power;
		var maxAcceleration = maxSpeed * nOfLegs;
		this.maxAccel = maxAcceleration;
};




var addAnimal = function() {
	animal1 = new Animal(document.getElementById('name').value,
		document.getElementById('type').value,
		document.getElementById('nOfLegs').value,
		document.getElementById('nOfArms').value,
		document.getElementById('avWigth').value,
		document.getElementById('maxSpeed').value,
		document.getElementById('avSpeed').value,
		document.getElementById('avOld').value,
		document.getElementById('isInRedBook').checked);
	if(animal1.isInRedBook == true){
		animal1.isInRedBook = 'Так'
	}else{
		animal1.isInRedBook = 'Ні'
	}

	animal2 = new Animal(document.getElementById('name2').value,
		document.getElementById('type2').value,
		document.getElementById('nOfLegs2').value,
		document.getElementById('nOfArms2').value,
		document.getElementById('avWigth2').value,
		document.getElementById('maxSpeed2').value,
		document.getElementById('avSpeed2').value,
		document.getElementById('avOld2').value,
		document.getElementById('isInRedBook2').checked);
	if(animal2.isInRedBook == true){
		animal2.isInRedBook = 'Так'
	}else{
		animal2.isInRedBook = 'Ні'
	}
	$('.inputtt').html('');
	$('.output').css('visibility', 'visible');
		return animal1, animal2;
};



var show = function() {
		AnimalName.innerHTML=animal1.name;
		AnimalType.innerHTML=animal1.type;
		AnimalLegs.innerHTML=animal1.nOfLegs;
		AnimalArms.innerHTML=animal1.nOfArms;
		AnimalWeigth.innerHTML=animal1.avWigth;
		AnimalMaxSpeed.innerHTML=animal1.maxSpeed;
		AnimalAvSpeed.innerHTML=animal1.avSpeed;
		AnimalOld.innerHTML=animal1.avOld;
		AnimalPower.innerHTML=animal1.power;
		AnimalAcc.innerHTML=animal1.maxAccel;
		AnimalRed.innerHTML=animal1.isInRedBook;

		AnimalName2.innerHTML=animal2.name;
		AnimalType2.innerHTML=animal2.type;
		AnimalLegs2.innerHTML=animal2.nOfLegs;
		AnimalArms2.innerHTML=animal2.nOfArms;
		AnimalWeigth2.innerHTML=animal2.avWigth;
		AnimalMaxSpeed2.innerHTML=animal2.maxSpeed;
		AnimalAvSpeed2.innerHTML=animal2.avSpeed;
		AnimalOld2.innerHTML=animal2.avOld;
		AnimalPower2.innerHTML=animal2.power;
		AnimalAcc2.innerHTML=animal2.maxAccel;
		AnimalRed2.innerHTML=animal2.isInRedBook;

};



var buttons = function(){
	$('.powerButton').html('<input class="button" ' +
		'type="submit" ' +
		'value="Сильніша тварина" ' +
		'onclick="returnPower()">');
	$('.combine').html('<input class="button" ' +
		'type="submit" ' +
		'value="Схрестити" ' +
		'onclick="combineAnimal(), showComboAnimal()">');
	$('.same').html('<input class="button" ' +
		'type="submit" ' +
		'value="Чи схожі?" ' +
		'onclick="same()">');
};



var returnPower = function(){
	var power1 = animal1.power * animal1.maxAccel;
	var power2 = animal2.power * animal2.maxAccel;
	if(power1 < power2){
		alert('Сильніша тварина: '
			+ animal2.name +
			', так як його штовхаюча сила: '
			+ power2 +
			' а штвохаюча сила '
			+ animal1.name +
			'а : '
			+ power1);
		if(animal1.avOld <=1){
			alert('Вітаю, ви замочили '+animal1.name+'a');
		}
		animal1.avOld=animal1.avOld/2;
		animal1.avOld = Math.floor(animal1.avOld);
		AnimalOld.innerHTML=animal1.avOld;
		$('td#AnimalOld').css('color', 'red');
	}else {
		alert('Сильніша тварина: '
			+ animal1.name +
			', так як його штовхаюча сила: '
			+ power1 +
			' а штвохаюча сила '
			+ animal2.name +
			' : '
			+ power2);
		if(animal2.avOld <=1){
			alert('Вітаю, ви замочили '+animal2.name+'a');
		}
		animal2.avOld=animal2.avOld/2;
		animal2.avOld = Math.floor(animal2.avOld);
		AnimalOld2.innerHTML=animal2.avOld;
		$('td#AnimalOld2').css('color', 'red');
	}

};

var combineAnimal = function(){
	comboAnimal = new Animal(animal1.name.slice(0,-2) + animal2.name.slice(1),
		animal1.type +'-'+ animal2.type,
		animal1.nOfLegs + animal2.nOfLegs,
		animal1.nOfArms + animal2.nOfArms,
		animal1.avWigth + animal2.avWigth,
		animal1.maxSpeed + animal2.maxSpeed,
		animal1.avSpeed + animal2.avSpeed,
		animal1.avOld + animal2.avOld,
		animal1.isInRedBook + animal2.isInRedBook);
	$('.output').html('');
	$('.combineAnimal').css('visibility', 'visible');
	return comboAnimal;
};

var showComboAnimal = function() {
	AnimalName3.innerHTML=comboAnimal.name;
	AnimalType3.innerHTML=comboAnimal.type;
	AnimalLegs3.innerHTML=comboAnimal.nOfLegs;
	AnimalArms3.innerHTML=comboAnimal.nOfArms;
	AnimalWeigth3.innerHTML=comboAnimal.avWigth;
	AnimalMaxSpeed3.innerHTML=comboAnimal.maxSpeed;
	AnimalAvSpeed3.innerHTML=comboAnimal.avSpeed;
	AnimalOld3.innerHTML=comboAnimal.avOld;
	AnimalPower3.innerHTML=comboAnimal.power;
	AnimalAcc3.innerHTML=comboAnimal.maxAccel;

};


var same = function(){
	if(animal1.nOfLegs == animal2.nOfLegs && animal1.nOfArms == animal2.nOfArms){
		alert('Так, '
			+animal1.name+
			' та '
			+animal2.name+
			' схожі, так як в них одинакова кількість рук та ніг')
	}else{
		alert('Ні, тварини-різні');
	}
};



(function () {
var smth = prompt('Enter smth');
alert(smth);
}
	)()








