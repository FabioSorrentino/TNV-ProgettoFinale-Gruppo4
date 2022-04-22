<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/movie', MovieController::class);
Route::get('/movie_id/{movie_id}','App\Http\Controllers\MovieController@getRatingByMovieId')->name('movie_id');
Route::get('/user_id/{user_id}','App\Http\Controllers\MovieController@getRatingByUserId')->name('user_id'); //Controller da rivedere
Route::get('/rating/{user_id}/{movie_id}','App\Http\Controllers\MovieController@getRatingsByUserIdandMovieId')->name('user_id and movie_id');

