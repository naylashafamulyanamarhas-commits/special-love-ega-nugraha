<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ImageCropController extends Controller
{
    public function cropAll()
    {
        $manager = new ImageManager(new Driver());

        $files = File::files(public_path('img'));

        foreach ($files as $file) {

            $image = $manager->read($file->getPathname());

            // cinematic crop 16:9
            $image->cover(1280, 720);

            $image->save($file->getPathname(), 85);
        }

        return "OK: semua foto sudah dicrop cinematic";
    }
}