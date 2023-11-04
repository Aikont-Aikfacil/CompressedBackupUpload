# Comprimir e Enviar arquivos para DigitalOcean Spaces

Este projeto é um aplicativo Node.js que comprime um diretório e faz o upload do arquivo compactado para o DigitalOcean Spaces. Além disso, inclui um cron job para executar essa tarefa em um intervalo regular.

## Requisitos

- Node.js (v14 ou superior)
- NPM (normalmente instalado junto com o Node.js)
- Conta no DigitalOcean Spaces com as credenciais de acesso (chave de acesso e chave secreta)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/HerdesonMourao/CompressedBackupUpload.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd CompressedBackupUpload
   ```

3. Instale as dependências usando o NPM:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente com suas próprias informações:

   ```env
   PORT=4000  # Porta em que o servidor será executado (opcional)

   ACCESS_KEY_ID=sua-chave-de-acesso
   SECRET_ACCESS_KEY=sua-chave-secreta
   ENDPOINT=https://nyc3.digitaloceanspaces.com  # Verifique o endpoint do seu Space
   BUCKET_NAME=nome-do-seu-bucket

   SOURCE_DIR='caminho/do/seu/diretorio'
   OUTPUT_FILENAME='diretorio_comprimido.zip'
   ```

## Uso

### Executando manualmente

1. Inicie o servidor Node.js:

   ```bash
   npm run start
   ```
   
2. Envie uma solicitação POST para o endpoint /compress-and-upload com as seguintes informações no corpo da solicitação:

   ```json
   {
     "sourceDir": "caminho/do/seu/diretorio",
     "outputFileName": "diretorio_comprimido.zip"
   }
   ```

   Certifique-se de substituir **caminho/do/seu/diretorio** pelo caminho absoluto do diretório que deseja compactar e **diretorio_comprimido.zip** pelo nome desejado do arquivo compactado.

### Cron Job

O cron job está configurado para executar automaticamente todos os dias às 2 da manhã. Certifique-se de que o servidor esteja em execução (npm start) para que o cron job funcione.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar este projeto.

## Licença
Este projeto está licenciado sob a [Licença MIT](./LICENSE).