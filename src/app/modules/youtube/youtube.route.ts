import express from 'express';
import { YoutubeController } from './youtube.controller';

const router = express.Router();

// Search for videos
router.get('/search', YoutubeController.search);

export const youtubeRouter = router;
