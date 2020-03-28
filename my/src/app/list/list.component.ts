import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews;

  // ** EXAMPLE OF DEPENDENCY INJECTION **
  constructor(private _http: HttpService) { }

  // ** LIFECYCLE HOOK, RUNS WHEN COMPONENT IS LOADED **
  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
