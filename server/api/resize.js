// server/api/resize.js
import sharp from 'sharp';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { defineEventHandler, useBody } from 'h3';

export default defineEventHandler(async (event) => {


    // const imagePath = resolve('static/example.jpg');
    const outputImagePath = resolve('static/resized-example.jpg');

    // Use sharp to resize the image
    await sharp(buffer)
        .resize(200, 200) // Resize to 200x200 pixels
        .toFile(outputImagePath);

    // Optional: Stream the output image back in the response
    event.res.setHeader('Content-Type', 'image/jpeg');
    createReadStream(outputImagePath).pipe(event.res);
});
