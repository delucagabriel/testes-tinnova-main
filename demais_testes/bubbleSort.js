const bubbleSort = (numbers) => {
    //pega o tamanho do array
    const len = numbers.length;

    // cria uma variavel para detectar se houve alguma alteração,
    // para que seja feita uma nova iteração, do contrário, finaliza a ordenação.
    let changed;
    do {
        changed = false;

        //itera por todo array trocando os pares de números
        for (let i = 0; i < len; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let tmp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = tmp;
                changed = true;
            }
        }
    } while (changed);

    //devolve o array ordenado
    return numbers;
};

v = [5, 3, 2, 4, 7, 1, 0, 6]

console.log(bubbleSort(v))

