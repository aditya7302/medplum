import { Router } from 'express';
import { asyncWrap } from '../async';
import { authenticateRequest } from '../oauth/middleware';
import { getRateLimiter } from '../ratelimit';
import { changePasswordHandler, changePasswordValidators } from './changepassword';
import { exchangeHandler, exchangeValidators } from './exchange';
import { externalCallbackHandler } from './external';
import { googleHandler, googleValidators } from './google';
import { loginHandler, loginValidators } from './login';
import { meHandler } from './me';
import { methodHandler, methodValidators } from './method';
import { mfaRouter } from './mfa';
import { newPatientHandler, newPatientValidators } from './newpatient';
import { newProjectHandler, newProjectValidators } from './newproject';
import { newUserHandler, newUserValidators } from './newuser';
import { profileHandler, profileValidators } from './profile';
import { resetPasswordHandler, resetPasswordValidators } from './resetpassword';
import { revokeHandler, revokeValidators } from './revoke';
import { scopeHandler, scopeValidators } from './scope';
import { setPasswordHandler, setPasswordValidators } from './setpassword';
import { statusHandler, statusValidators } from './status';

export const authRouter = Router();
authRouter.use(getRateLimiter());
authRouter.use('/mfa', mfaRouter);
authRouter.post('/method', methodValidators, asyncWrap(methodHandler));
authRouter.get('/external', asyncWrap(externalCallbackHandler));
authRouter.get('/me', authenticateRequest, asyncWrap(meHandler));
authRouter.post('/newuser', newUserValidators, asyncWrap(newUserHandler));
authRouter.post('/newproject', newProjectValidators, asyncWrap(newProjectHandler));
authRouter.post('/newpatient', newPatientValidators, asyncWrap(newPatientHandler));
authRouter.post('/login', loginValidators, asyncWrap(loginHandler));
authRouter.post('/profile', profileValidators, asyncWrap(profileHandler));
authRouter.post('/scope', scopeValidators, asyncWrap(scopeHandler));
authRouter.post('/changepassword', authenticateRequest, changePasswordValidators, asyncWrap(changePasswordHandler));
authRouter.post('/resetpassword', resetPasswordValidators, asyncWrap(resetPasswordHandler));
authRouter.post('/setpassword', setPasswordValidators, asyncWrap(setPasswordHandler));
authRouter.post('/google', googleValidators, asyncWrap(googleHandler));
authRouter.post('/exchange', exchangeValidators, asyncWrap(exchangeHandler));
authRouter.post('/revoke', authenticateRequest, revokeValidators, asyncWrap(revokeHandler));
authRouter.get('/login/:login', statusValidators, asyncWrap(statusHandler));
