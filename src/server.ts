import cors from 'cors';
import { NOT_FOUND } from 'http-status';
import ENV from './config/environment.config';

type configRoutesType = {
  baseURL: string;
  routes: any[];
};

export default class Server {
  private app: any;
  private configRoutes: configRoutesType;

  constructor(app: any, configRoutes: configRoutesType) {
    this.app = app;
    this.configRoutes = configRoutes;
  }

  setSettings(app: any) {
    app.use(cors());
  }

  setRoutes(app: any) {
    const { baseURL, routes } = this.configRoutes;
    routes.map((route) => app.use(baseURL, route));
  
    app.all('*', (_: any, res: any) => res.status(NOT_FOUND).json({
      statusCode: 404,
      error: 'Not Found',
      message: 'Route doesn\'t exist'
    }));
  }

  createServer() {
    const app = this.app();

    this.setSettings(app);
    this.setRoutes(app);

    return app;
  }

  start() {
    const app = this.createServer();

    app.listen(ENV.PORT, () => console.log(`Server running on ${ENV.PORT} port`));
  }
}