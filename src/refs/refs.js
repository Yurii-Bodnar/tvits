export const baseUrl = 'https://644bd7ef4bdbc0cc3a9c1bc1.mockapi.io';
export const limit = 6;
export const totalPage = 2;

export const compareArr = (arrA, arrB) =>
  arrA.filter(
    arrAValue => !arrB.some(arrBValue => arrAValue.id === arrBValue.id)
  );
