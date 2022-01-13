import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.formBuilder.group({
      search: ['']
    })
  }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigateByUrl('/movie/search?query='+this.searchForm.value.search)
  }
}
