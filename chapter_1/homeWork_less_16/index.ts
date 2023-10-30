// // tsc chapter_1/homeWork_less_16/index.ts
type ElectricityUserDataType = {
  readings: number
  units: string,
  mode: string,
}
type WaterUserDataType = {
  readings: number,
  units: string,
}
const electricityUserData: ElectricityUserDataType = {
  readings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData: WaterUserDataType = {
  readings: 3,
  units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (elData: ElectricityUserDataType, wData: WaterUserDataType, elRate: number, wRate: number):void => {
  if (elData.mode === 'double' && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7;
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (monthPayments:number[], electricityUserData:ElectricityUserDataType, waterUserData:WaterUserDataType):string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

  return text;
};
sendInvoice(monthPayments, electricityUserData,waterUserData )