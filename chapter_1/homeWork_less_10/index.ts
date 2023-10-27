const currRate :string= "1.05";

const fetchCurr = (response:string) => {
	return JSON.parse(response);
};

function transferEurToUsd(available:boolean, amount:number, commission:number) {
	if (available) {
		let res = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);


// tsc chapter_1/homeWork_less_10/index.ts