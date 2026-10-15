import { buscarComSeguranca } from "./busca.js";

async function main(): Promise<void> {
    const conteudoExistente = await buscarComSeguranca("exemplo.txt");

    console.log("Arquivo existente:");
    console.log(conteudoExistente);

    const conteudoInexistente = await buscarComSeguranca("nao-existe.txt");

    console.log("\nArquivo inexistente");
    console.log(conteudoInexistente);
}

main().catch(console.error);