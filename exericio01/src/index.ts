import { log, lerLogs } from "./logger.js";

async function main(): Promise<void> {
    await log("Aplicação iniciada");
    await log("Usuário cadastrado");
    await log("Aplicação finalizada");

    const registros = await lerLogs();

    console.log("Registros armazenados:");

    for (const registro of registros) {
        console.log(registro);
    }
}

main().catch(console.error);