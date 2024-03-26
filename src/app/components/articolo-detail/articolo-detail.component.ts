import { Component, OnInit } from '@angular/core';
import { Articolo } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> d02c38cba57e1e9a0ef3c39077feca9b01209ab3

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
<<<<<<< HEAD
  styleUrl: './articolo-detail.component.css',
})
export class ArticoloDetailComponent implements OnInit {
  articolo?: Articolo;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('articoloId')!);
    this.blogService
      .getArticoloById(id)
      .subscribe((articolo) => (this.articolo = articolo));
  }
  rimuovi() {
    if (confirm('sei sicuro?')) {
      this.blogService
        .deleteArticoloById(this.articolo!.id)
        .subscribe(dati => this.router.navigate(['/blog']));
    }
=======
  styleUrl: './articolo-detail.component.css'
})
export class ArticoloDetailComponent implements OnInit  {
articolo?: Articolo
constructor(private blogService: BlogService , private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get("articoloId")!);
    this.blogService.getArticoloById(id)
    .subscribe(articolo => this.articolo = articolo)
   
>>>>>>> d02c38cba57e1e9a0ef3c39077feca9b01209ab3
  }
}
