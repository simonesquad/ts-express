import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;