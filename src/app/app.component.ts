import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public nombre:string="Fabricio";

  public arreglo=[1,2,3,4,5,6,7,8,9,10]


  public PI=Math.PI;

  a=0.344;

  salario=1234.5;

 public datos={
    nombre:"Fabricio",
    apellido:"Gonzalez",
    dirrecion:{
      lugar:"Ojojona",
      barrio:'Cementerio'
    }
  }

   valorDeLaPromesa=new Promise((resolve,reject)=>{
      setTimeout(() =>resolve('Llego la data'),3500);
   })


   fecha =new Date();

   nombre2="Angel FabRicio GonzáLez";

   video="fJ9rUzIMcZQ";

   activar:boolean=true;
}
