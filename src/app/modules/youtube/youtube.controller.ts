import { Request, Response } from 'express';
import config from '../../../config/index';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const API_KEY = config.youtubeApiKey;

const search = catchAsync(async (req: Request, res: Response) => {
    const query = req.query.q as string;

    if (!query) {
        return sendResponse(res, {
            message: 'Query is required',
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
        });
    }

    const baseURL = 'https://www.googleapis.com/youtube/v3/search';
    const params = new URLSearchParams({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: '10',
        key: API_KEY || '', // Ensure key is a string
    });

    try {
        const response = await fetch(`${baseURL}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.error?.message || 'Failed to perform YouTube search';
            throw new Error(errorMessage);
        }

        const data = await response.json();

        return sendResponse(res, {
            data: data.items,
            message: 'YouTube search successful',
            statusCode: httpStatus.OK,
            success: true,
        });
    } catch (error) {
        console.error('Failed to perform YouTube search:', error);
        const errorMessage = (error as Error).message || 'Failed to perform YouTube search';
        return sendResponse(res, {
            message: errorMessage,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
        });
    }
});

export const YoutubeController = {
    search,
};
