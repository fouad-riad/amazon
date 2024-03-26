import { Component } from '@angular/core';
import { ArticoloAddDTO } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> d02c38cba57e1e9a0ef3c39077feca9b01209ab3

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrl: './articolo-add.component.css'
})
export class ArticoloAddComponent {
model:ArticoloAddDTO = new ArticoloAddDTO()
<<<<<<< HEAD
constructor(private blogService: BlogService ,private router:Router){
  
}
aggiungiArticolo(){
  this.blogService.addArticolo(this.model)
  .subscribe(dati=>{
  this.model=new ArticoloAddDTO()
  //naviga alla lista degli articoli
  this.router.navigate(["/blog"])
  })
=======
constructor(private blogService: BlogService){
>>>>>>> d02c38cba57e1e9a0ef3c39077feca9b01209ab3
  
}
}
