<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Home', []);
})->name('home');

Route::get('/timelogs', function () {
    return Inertia::render('Timelogs');
})->name('timelogs');

Route::get('/leave', function () {
    return Inertia::render('Leave');
})->name('leave');

Route::get('/memo', function () {
    return Inertia::render('Memo');
})->name('memo');

Route::get('/incentives', function () {
    return Inertia::render('Incentives');
})->name('incentives');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->name('profile');

Route::get('/account', function () {
    return Inertia::render('Account');
})->name('account');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->name('settings');

Route::get('/logout', function () {
    return Inertia::render('Logout');
})->name('logout');

Route::get('/public/images', function () {
    return null;
})->name('images');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
