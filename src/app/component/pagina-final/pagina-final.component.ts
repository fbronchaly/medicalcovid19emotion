import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-pagina-final',
  templateUrl: './pagina-final.component.html',
  styleUrls: ['./pagina-final.component.css']
})
export class PaginaFinalComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}