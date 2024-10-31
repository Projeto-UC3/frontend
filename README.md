# LOOK-ID

O projeto LOOK-ID é um sistema de verificação de acesso destinado a instituições de ensino. Ele utiliza um cartão de identificação que permite ao aluno autenticar sua entrada nas salas de aula de forma prática e segura, garantindo um controle eficiente do acesso.

## Descrição do Projeto
O LOOK-ID funciona como um "card de verificação" de acesso. O aluno passa seu cartão RFID próximo ao leitor e, se autorizado, o sistema confirma a verificação e registra a permissão para entrada na sala. Esse processo aumenta a segurança e a organização do ambiente escolar, permitindo que a instituição tenha um controle detalhado das entradas dos alunos.

## Hardwares Utilizadas
Para implementar o projeto LOOK-ID, utilizamos os seguintes componentes de hardware e software:

- **ESP32**: Microcontrolador responsável pela conexão e processamento dos dados. Sua capacidade de comunicação via Wi-Fi permite a transmissão dos dados de verificação para um sistema centralizado, onde as informações de acesso são registradas.
- **Arduino**: Usado como plataforma de desenvolvimento para programar o ESP32 e controlar a interação entre os diferentes componentes.
- **Cartões RFID**: Cartões de identificação que cada aluno utiliza para efetuar o check-in. Cada cartão possui um identificador único, que é reconhecido pelo sistema.
- **Leitor RFID**: Responsável pela leitura dos cartões RFID. Quando o cartão é passado próximo ao leitor, o ID é capturado e enviado para validação.

## Tecnologias Utilizadas
Para a implementação do LOOK-ID, utilizamos os seguintes componentes de hardware e software:

<div style="display: flex; flex-wrap: wrap;"> <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="60" style="margin: 10px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width="110" style="margin: 10px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" width="80" style="margin: 10px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="80" style="margin: 10px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="80" style="margin: 10px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width="80" style="margin: 10px;"> </div>


- **FIGMA**: Utilizado para o design da interface.
- **HTML e CSS**: Estruturação e estilização da interface do usuário.
- **JavaScript**: JavaScript
- **React**: React
- **Python**: Linguagem usada para a programação e integração dos sistemas de backend.

## Funcionalidades

- **Registro de Acesso**: Ao passar o cartão RFID, o sistema verifica o ID do cartão e confirma se o aluno está autorizado a entrar.
- **Controle de Permissão**: Apenas alunos com cartões válidos têm permissão para acessar as salas de aula.
- **Sistema de Logs**: Cada verificação é registrada, permitindo o acompanhamento das entradas e saídas.

## Como Funciona

1. O aluno aproxima o cartão RFID do leitor.
2. O leitor captura o ID do cartão e envia o dado para o ESP32.
3. O ESP32, com o programa desenvolvido na plataforma Arduino, verifica se o ID está cadastrado e autorizado.
4. Se autorizado, o sistema registra a entrada do aluno e concede o acesso à sala de aula.

## Requisitos

- **Arduino IDE** para programação do ESP32.
- **Biblioteca de RFID para o Arduino**, para que o leitor possa identificar os cartões.
- **Conexão Wi-Fi** (opcional) para enviar os dados de verificação para um sistema centralizado, se disponível.
