class eleicoes {
    _total_de_eleitores;
    _votos_validos;
    _votos_brancos;
    _votos_nulos;

    constructor(
        total_de_eleitores,
        votos_validos,
        votos_brancos,
        votos_nulos
    ) {
        this._total_de_eleitores = total_de_eleitores,
            this._votos_validos = votos_validos,
            this._votos_brancos = votos_brancos,
            this._votos_nulos = votos_nulos
    }

    percentualVotosValidos() {
        const percent = (this._votos_validos / this._total_de_eleitores) * 100
        return `${percent}%`;
    }

    percentualVotosBrancos() {
        const percent = (this._votos_brancos / this._total_de_eleitores) * 100
        return `${percent}%`;
    }

    percentualVotosNulos() {
        const percent = (this._votos_nulos / this._total_de_eleitores) * 100
        return `${percent}%`;
    }
}

el = new eleicoes(1000, 800, 150, 50);
console.log(el.percentualVotosValidos())
console.log(el.percentualVotosBrancos())
console.log(el.percentualVotosNulos())