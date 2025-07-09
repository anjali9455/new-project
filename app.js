import express from 'express';
import cors from 'cors';
import skuRoutes from './routes/sku.routes.js';
import salesRoutes from './routes/sales.routes.js';
import aiRoutes from './routes/ai.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/sku', skuRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/ai', aiRoutes);

export default app;