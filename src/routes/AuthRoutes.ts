import { NextFunction, Request, Response, Router, urlencoded } from 'express';
import { AuthController } from '../controllers/AuthController';

const route = Router();
const controller = new AuthController();

route.post('/login', urlencoded({ extended: false }), (req: any, res: Response, next: NextFunction) => {
    req.session.regenerate(async (err: any) => {
        if (err) {
            console.log(err);
            return res.status(400).send("Não foi possível iniciar a sessão");
        }

        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Requisição não possui dados necessários");
        }

        req.session.user = await controller.authenticate(req.body.email, req.body.password);

        req.session.save(function (err: any) {
            if (err) {
                console.log(err);
                res.status(400).send("Não foi possível iniciar a sessão");
            } else {
                res.status(200).send("Login realizado com sucesso.");
            }
        })
    });
});

route.post('/logout', urlencoded({ extended: false }), (req: any, res: Response, next: NextFunction) => {
    req.session.regenerate(async (err: any) => {
        if (err) {
            console.log(err);
            return res.status(400).send("Não foi possível iniciar a sessão");
        }

        req.session.user = null;

        req.session.save(function (err: any) {
            if (err) {
                console.log(err);
                res.status(400).send("Não foi possível encerrar a sessão");
            } else {
                res.status(200).send("Logout realizado com sucesso.");
            }
        })
    });
});

module.exports = route;