function encontrarMayor(listaSalarios){
	let mayorSalarioAnual = listaSalarios[0];

	for (let i = 1; i < listaSalarios.length; i++){
		if (listaSalarios[i] > mayorSalarioAnual){
			mayorSalarioAnual = listaSalarios[i];
		}
	}

	return mayorSalarioAnual;
}

function encontrarMenor(listaSalarios){
	let menorSalarioAnual = listaSalarios[0];

	for (let i = 1; i < listaSalarios.length; i++){
		if (listaSalarios[i] < menorSalarioAnual){
			menorSalarioAnual = listaSalarios[i];
		}
	}

	return menorSalarioAnual;
}

function calcularPromedio(listaSalarios){
	let acumuladorPromedioSalarioAnual = 0;

	for (let i = 0; i < listaSalarios.length; i++){
		acumuladorPromedioSalarioAnual += listaSalarios[i];
	}

	return acumuladorPromedioSalarioAnual / listaSalarios.length;
}

function calcularPromedioMensual(listaSalarios){
	const mesesDelAnio = 12;
	let listaSalarioMensual = guardarSalarioMensual(mesesDelAnio, listaSalarios);
	let acumuladorPromedioSalarioMensual = 0;

	for (let i = 0; i < listaSalarioMensual.length; i++){
		acumuladorPromedioSalarioMensual += listaSalarioMensual[i];
	}

	return acumuladorPromedioSalarioMensual / listaSalarioMensual.length;
}
