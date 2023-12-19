function processForm() {
    document.getElementById('loading').style.display = 'block';

    // Simula um atraso de 2 segundos (2000 milissegundos)
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';
        updateTable();
    }, 2000);
}

function updateTable() {
    // Obter valores dos campos do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var alunoRadios = document.getElementsByName('aluno');
    var aluno = getRadioValue(alunoRadios);
    var interesse = document.querySelector('.select-menu').value;
    var confirmaInformacoes = document.getElementById('confirmaInformacoes').checked ? 'Sim' : 'Não';

    // Atualizar a tabela com os valores do formulário
    document.getElementById('table').innerHTML = `
        <tr>
            <td><h2>Nome</h2></td>
            <td><h3>${nome}</h3></td>
        </tr>
        <tr>
            <td><h2>E-mail</h2></td>
            <td><h3>${email}</h3></td>
        </tr>
        <tr>
            <td><h2>É aluno?</h2></td>
            <td><h3>${aluno}</h3></td>
        </tr>
        <tr>
            <td><h2>Curso</h2></td>
            <td><h3>${interesse}</h3></td>
        </tr>
        <tr>
            <td><h2>Confirma as informações?</h2></td>
            <td><h3>${confirmaInformacoes}</h3></td>
        </tr>
    `;
}

function getRadioValue() {
    var selectedRadio = document.querySelector('input[name="aluno"]:checked');

    if (selectedRadio) {
        return selectedRadio.value;
    }

    return '';
}