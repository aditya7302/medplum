import { Request, Response, Router } from 'express';

export const oauthRouter = Router();

oauthRouter.post('/authorize', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/token', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/userinfo', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.get('/login', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/login', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.get('/logout', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/logout', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.get('/register', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/register', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.get('/role', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/role', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.get('/scopes', (req: Request, res: Response) => {
  res.sendStatus(200);
});

oauthRouter.post('/scopes', (req: Request, res: Response) => {
  res.sendStatus(200);
});

