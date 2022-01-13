import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Movie[]
  page: number
  total: number

  constructor(private route: ActivatedRoute, private movieService: MovieService, private title: TitleService) {
    this.movies = []
    this.page = 1
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getMovies(params)
      this.title.setTitle(`Search for movies by ${params['query']} - The Movie DB Application`)
    })
  }

  getMovies(params: any) {
    if (this.page <= 1) {
      this.movies = []
    }
    this.movieService.getMoviesByName(params['query'], this.page)
      .subscribe(data => {
        this.movies.push(...data.results)
        this.total = data.total_results
        this.page = data.page
      })
  }

  onScroll() {
    this.page++
    this.getMovies(this.route.snapshot.queryParams)
  }
}
