import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent   {

datos:any[]=[];
cubierto: boolean;
checkoutForm: any;

  zona: any[]=[
    {id:"1", comunidad:"Andalucía "},
    {id:"2", comunidad:"Aragón "},
    {id:"3", comunidad:"Asturias "},
    {id:"4", comunidad:"Baleares "},
    {id:"5", comunidad:"Canarias "},
    {id:"6", comunidad:"Cantabria "},
    {id:"7", comunidad:"Castilla-La Mancha "},
    {id:"8", comunidad:"Castilla y León "},
    {id:"9", comunidad:"Cataluña "},
    {id:"10", comunidad:"Extramadura "},
    {id:"11", comunidad:"Galicia "},
    {id:"12", comunidad:"La Rioja "},
    {id:"13", comunidad:"Madrid "},
    {id:"14", comunidad:"Murcia "},
    {id:"15", comunidad:"Navarra "},
    {id:"16", comunidad:"Pais Vasco "},
    {id:"17", comunidad:"Comunidad Valenciana "}
  ];

ocupaciones: any[]=[
    {id:"1", name:"Nefrólogo/a "},
    {id:"2", name:"Enfermero/a "},
    {id:"3", name:"Auxiliar de enfermería "},
    {id:"4", name:"Personal de limpieza "},
    {id:"5", name:"Mantenimiento "},
    {id:"6", name:"Seguridad "}
];

genero: any[]=[
    {id:"1", name:"Hombre "},
    {id:"2", name:"Mujer"},
    
];

edades: any[]=[
    {id:"1", name:"18-25 "},
    {id:"2", name:"26-30"},
    {id:"3", name:"31-40 "},
    {id:"4", name:"41-50 "},
    {id:"5", name:">50 "}
];

ecivils: any[]=[
    {id:"1", name:"Soltero/a "},
    {id:"2", name:"Casado/a"},
    {id:"3", name:"Viudo/a "},
    {id:"4", name:"Divorciado/a "}
    
];



  constructor(
    private formBuilder: FormBuilder,
    private router:Router, 
    public auth: AuthService) { 
 this.checkoutForm = this.formBuilder.group({
   zonas:'',
   ocupacion:'',
   gener:'',
   edad:'',
   ecivil:''


  

    });




    }

  
  onSubmit(customerData) {
  console.log ( customerData.zonas);
  console.warn('Your order has been submitted', customerData);
    //this.router.navigate(['presentacion',customerData]);


  }
  

}