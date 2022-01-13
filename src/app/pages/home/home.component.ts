import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[]
  active: string
  loading: boolean
  page: number

  constructor(public movieService: MovieService, private route: ActivatedRoute, private router: Router, private title: TitleService) {
    this.active = 'popular'
    this.page = 1
    this.movies = []
  }

  ngOnInit(): void {
    this.route.url.subscribe(param => {
      if (param.length > 1) {
        this.active = param[1].toString()
        this.title.setTitle(`List of Movies by "${this.active.replace("-", " ")}" - The Movie DB Application`)
        this.getMovies(this.active.replace("-", "_").replace("most_", ""))
      } else {
        this.getMovies('popular')
        this.title.setTitle(`List of Movies by Most Popular`)
      }
    });
  }

  goTo(type: string) {
    this.router.navigateByUrl(`/movie/${type}`)
  }

  getMovies(type: string, reset: boolean = true) {
    this.active = type
    this.loading = true
    if (reset) {
      this.resetSearch();
    }
    this.movieService.getMovies(type, this.page)
      .subscribe(data => {
        this.movies.push(...data.results)
        this.loading = false
      })
  }

  resetSearch() {
    this.movies = []
    this.page = 1
  }

  onScroll() {
    this.page++
    this.getMovies(this.active, false)
  }
}
