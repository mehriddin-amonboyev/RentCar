import { Injectable } from "@nestjs/common"
import { CreateMovieRequest, CreateMovieResponse } from "./interfaces";
import { PgService } from "src/postgres/pg.service";

export declare interface Movie {
    id: number,
    name: string,
    rating: number,
    year: number
}

// private movies: Movie[] = [{
//     id: 1,
//     name: "kino",
//     rating: 1234,
//     year: 2000

// }];
@Injectable()
export class MovieService {
    constructor(private readonly postgres: PgService) { }

    async getAllMovies(): Promise<any[]> {
        return await this.postgres.fetchData("SELECT * FROM movie");
    }

    async getSingleMovie(movieId: number): Promise<any> {
        return await this.postgres.fetchData("SELECT * FROM movie WHERE id =$1",
            movieId
        );
    }

    // createMovie(payload: CreateMovieRequest): CreateMovieResponse {
    //     const newMovie = {
    //         id: this.movies.at(-1)?.id + 1 || 1,
    //         ...payload
    //     }
    //     this.movies.push(newMovie);
    //     return newMovie;
    // }
    // updateMovie(id: number, name: string, rating: number, year: number): CreateMovieResponse {
    //     const movie = this.getSingleMovie(id);
    //     if (movie) {
    //         movie.name = name || movie.name;
    //         movie.rating = rating || movie.rating;
    //         movie.year = year || movie.year;
    //     }
    //     return movie;
    // }
    // // updateMarket(id: number, name: string, location: string): Market {
    // //     const market = this.getMarketById(id);
    // //     if (market) {
    // //         market.name = name || market.name;
    // //         market.location = location || market.location;
    // //     }
    // //     return market;
    // // }
}
