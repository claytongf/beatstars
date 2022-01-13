import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, MovieDetails } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieDetails

  constructor(public movieService: MovieService, private route: ActivatedRoute, private title: TitleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetails(params['id'])
        .subscribe(data => {
          this.movie = data
          this.title.setTitle(`Movie: ${data.title} - The Movie DB Application`)
      })
    })
  }

  getGenres(genres: Array<Genre>): string {
    return  genres.map((genre) => {
      return genre.name
    }).join(', ')
  }
}
