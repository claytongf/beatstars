import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() movie: Movie
  imageLoader:boolean

  constructor() {
    this.imageLoader = true
  }

  ngOnInit(): void {
  }

  onLoad() {
    this.imageLoader = false
  }

}
