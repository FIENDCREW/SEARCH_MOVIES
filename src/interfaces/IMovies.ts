export interface IMovies {
  map(arg0: (movie: any) => JSX.Element): import("react").ReactNode;
  length: any;
  id: number;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
