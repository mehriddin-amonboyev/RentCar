import { Controller, Get, Param, Post, Body, Patch } from "@nestjs/common";
import { Movie, MovieService } from "./movie.service";
import { CreateMovieDto } from "./dtos";
import { CreateMovieResponse } from "./interfaces";

@Controller('/movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Get()
    async getMovie(): Promise<any[]> {
        return await this.movieService.getAllMovies();
    }

    @Get('/:id')
    async getSingleMovie(
        @Param('id') movieId: string
    ): Promise<any> {
         return await this.movieService.getSingleMovie(+movieId);
    }

    // @Post('/add')
    // addMovie(@Body() createMovieData: CreateMovieDto): CreateMovieResponse {
    //     return this.movieService.createMovie(createMovieData);
    // }

    // @Patch('/:id')
    // updateMovie(
    //     @Param('id') movieId: number,
    //     @Body() updateMovieData: CreateMovieDto
    // ): CreateMovieResponse {
    //     return this.movieService.updateMovie(movieId, updateMovieData);
    // }
}