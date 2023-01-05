import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes }  from 'http-status-codes';

// get /users
// get /user/:uuid
// post/ users
// put / users/:uuid
// delete /user/uuid



const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Danilo' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send ({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;


    console.log(req.body);

    res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;












