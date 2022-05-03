<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Resources\MovieResource;
use App\Http\Resources\MovieCollection;
//use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->Json(
            new MovieCollection(Movie::all()),
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make(
            $request->only([
                'movie_id', 'user_id', 'movie_rating'
                ]
            ),
                [
                    //Set dei valori massimi da inserire
                    'movie_id' => 'required|integer', 
                    'user_id'=> 'required|integer', 
                    'movie_rating'=>'required|integer|between: 1,5'
                ]
            );

        if($validator->fails()){
            return response()->Json(
                $validator->errors(),
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $movie = Movie::create(
            $request -> only([
                'movie_id', 'user_id', 'movie_rating'
            ])
        );
        
        return response()->Json([
            new MovieResource($movie),
            'Response Status' => Response::HTTP_OK
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return response()->Json([
            new MovieResource($movie),
            'Response Status' => Response::HTTP_OK
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        $movie -> update($request->only([
            'movie_id', 'user_id', 'movie_rating'
        ]));

        return response()->Json([
            new MovieResource($movie),
            'Response Status' => Response::HTTP_OK
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie-> delete();
        return response()->Json([
            'message' => 'Movie Deleted!',
            'Response Status' => Response::HTTP_NO_CONTENT
        ]);
    }

    public function getRatingByMovieId($movie_id){
        return response()->json(
            new MovieCollection( Movie::where('movie_id','LIKE',$movie_id)->get()),
            
        );
    }

    public function getRatingByUserId($user_id){
        return response()->json([
            'Ratings'=>new MovieCollection( Movie::where('user_id','LIKE',$user_id)->get()),
            'Response Status'=>Response::HTTP_OK
        ]);
    }

    public function getRatingsByUserIdAndMovieId($user_id, $movie_id){
        return response()->json([
            'Ratings'=> new MovieCollection(Movie::where('user_id','LIKE',$user_id)->where('movie_id','LIKE',$movie_id)->get()),
            'Response Status'=>Response::HTTP_OK
        ]);
    }
}
