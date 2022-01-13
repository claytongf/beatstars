import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() movies: Movie[]

  ngOnInit(): void {
  }

}
