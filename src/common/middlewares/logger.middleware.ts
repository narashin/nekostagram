import { Injectable, Logger, NestMiddleware, Patch } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.originalUrl}, ${req.method}, ${res.statusCode}`,
      );
    });
    next();
  }
}
