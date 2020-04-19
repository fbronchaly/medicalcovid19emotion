import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent  {


constructor(public auth: AuthService) { }
  




}