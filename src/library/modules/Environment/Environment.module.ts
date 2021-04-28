type EnvironmentType = 'development' | 'staging' | 'production';

type EnvironmentConfig = {
	environment: EnvironmentType;

	//Backend
	backendHttpUrl: string;
	backendWebsocketUrl: string;
}

class Environment {
	vars: EnvironmentConfig = {
		environment: this.getEnv('REACT_APP_ENVIRONMENT') as EnvironmentType,

		//Backend
		backendHttpUrl: this.getEnv('REACT_APP_BACKEND_HTTP_URL'),
		backendWebsocketUrl: this.getEnv('REACT_APP_BACKEND_WEBSOCKET_URL'),
	}

	private getEnv(envName: string): string {
		const envValue = process.env[envName];
		if (envValue)
			return envValue;
		else
			throw new Error(`${envName} environment variable is not provided`);
	}
}

const instance = new Environment();
export { instance as Environment };
