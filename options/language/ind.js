exports.wait = () => {
        return `Calmaer opoha to fazeno`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *Nivel foi ativo*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *Nivel foi desativado*`
}

exports.levelnol = () => {
        return `*Level 0 Kskst*`
}

exports.stick = () => {
        return `[❗] Falhar, ocorreu um erro ao converter a imagem para sticker ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado no grupo! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo proprietário do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo proprietário do Bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado pelos administradores do grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se tornar um administrador! ❌`
}

exports.daftarB = (prefix, pushname) => {
        return `Calmaer ${pushname}voce ainda naum si registrou\nDigite ${prefix}register ${pushname}|Idade\nLembrando que idade maxima e de 40 e a Idade Minima 12\nQuando si registrar de ${prefix}help para ter acesso aos menus disponiveis\nDesde ja obrigado por usar Hideri Bot`
}

exports.daftarD = () => {
        return `*Voce ja esta registrado ${pushname}*`
}

exports.wrongf = () => {
        return`*Formato/texto vazio*`
}

exports.clears = () => {
        return`*Chat limpado com sucesso Moh*`
}

exports.pc = () => {
        return`*CADASTRO*\n\nPara descobrir se você registrou a mensagem de verificação que enviei \n\nNOTA:\n*Se você não tem uma mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*Data de Registro*\n\nVocê se registrou com dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Tempo de Registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n Não esqueça esse número porque isso é importante\nObrigado po si registrar em Hideri Bot`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* Ainda naum foi registrado\cPara ter acesso a lista de comandos digite *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} Script do proprietário.*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} Limite hoje está esgotado*\n*Limite de redefinição por hora 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*Limite de contagem*
o resto do seu limite : ${limitCounts}

NOTA : para obter um limite\npode passar por nível ou comprando limite com dinhero que voce pode ganhar subindo nivel ou com eventos`
}

exports.satukos = () => {
        return`*Adicionar parâmetros 1/Ativar ou 0/desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *quarto* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
