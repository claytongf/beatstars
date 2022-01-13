import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit(): void {
    this.title.setTitle('Page Not Found')
  }

}
