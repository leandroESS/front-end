function returnEvenValues(array){
    console.log("Entrou");
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            evenNums.push(array[i]);
        }
    }

    console.log(evenNums);
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(vetor);

returnEvenValues(vetor);