# Testes Unitários

Este projeto usa [Vitest](https://vitest.dev/) e [React Testing Library](https://testing-library.com/react) para testes unitários.

## Instalação

Instale as dependências:

```bash
bun install
```

## Executando os Testes

### Executar todos os testes
```bash
bun test
```

### Executar testes em modo watch
```bash
bun test
```
(Pressione `a` para executar todos os testes, `f` para executar apenas os que falharam)

### Executar testes com UI
```bash
bun test:ui
```

### Executar testes uma vez (sem watch)
```bash
bun test:run
```

### Executar testes com cobertura
```bash
bun test:coverage
```

## Estrutura de Testes

Os testes estão organizados da seguinte forma:

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Home.test.tsx
│   │   ├── CodeRunner.test.tsx
│   │   └── AwsCheatsheetCard.test.tsx
│   └── ...
├── utils/
│   ├── __tests__/
│   │   └── formatName.test.ts
│   └── formatName.ts
└── test/
    ├── setup.ts
    └── README.md
```

## Escrevendo Novos Testes

1. Crie um arquivo `*.test.ts` ou `*.test.tsx` próximo ao arquivo que você quer testar
2. Use `describe` para agrupar testes relacionados
3. Use `it` ou `test` para casos de teste individuais
4. Use `expect` para fazer asserções

Exemplo:

```typescript
import { describe, it, expect } from 'vitest';
import { minhaFuncao } from './minhaFuncao';

describe('minhaFuncao', () => {
  it('should return expected value', () => {
    expect(minhaFuncao('input')).toBe('expected');
  });
});
```

## Configuração

A configuração do Vitest está em `vitest.config.ts`. O arquivo de setup está em `src/test/setup.ts` e configura o ambiente de teste com `@testing-library/jest-dom`.

