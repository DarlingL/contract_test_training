# Contract Testing

## como rodar os testes de contrato

1. Iniciando o Mock: Vá ate a pasta 'wiremock_for_app' e execute o comando:
```
java -jar wire.jar
```


2. No arquivo 'package.json' atualize a URL do mock no scripts/tests_contract:
```
"tests_contract": "NODE_ENV=http://{*URL_AQUI*} mocha tests/journey_test.js --reporter mochawesome"
```

3. Atualizando o projeto, execute o comando:
```
npm install --safe
```

2. Rodando os testes de contrato execute o comando:
```
npm run tests_contract
```