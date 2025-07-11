import express from 'express';
import { postTarea, deleteTarea, getTareas,updateTarea,getSummary } from '../controllers/controllers';
import { getSummary, updateTarea } from '../controllers/controllers';


const router = express.Router();

router.get("/tarea",getTareas );

router.post('/tarea',addTarea)

router.delete('/tarea/:id',deleteTarea)

router.update('/tarea/:id',updateTarea)

router.get("/tarea",getSummary)

export default router;