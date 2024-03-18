import env from 'env-var';

const config = {

    // o método get acessa as propriedades do objeto process.env
    token: env.get('TOKEN').required().asInt(),
    guildId: env.get('ID_GUILD').required().asString(),
    googleUrl: env.get('GOOGLE_URL').required().asUrlString(),
    roles: env.get('ROLES').required().asArray(),
    jsonConfig: env.get('JSON_CONFIG').required().asJsonObject(),

    // em caso de variáveis opcionais podemos utilizar o método default para especificar valores padrão.
    nodeEnv: env.get('NODE_ENV').default('development').asString(),
};

export default config;