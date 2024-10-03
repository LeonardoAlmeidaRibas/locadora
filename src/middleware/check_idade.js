function check_idade(idade = []) {
    return (req, res, next) => {
        if (user.params.idade >= 18) {
            res.send(18);
        } else if (idade > 16 && idade < 18) {
            res.send(16);
        } else res.send(0);
    };
}
export default check_idade;