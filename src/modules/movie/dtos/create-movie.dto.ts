export declare interface CreateMovieDto  {
    name: string;
    rating: number;
    year: number;
}

// import Joi from "joi";

// export const CreateMovieDto = Joi.object({
//     name: Joi.string().required(),
//     rating: Joi.number().min(1000).max(5).required(),
//     year: Joi.number().min(1000).max(new Date().getFullYear()).required()
// })