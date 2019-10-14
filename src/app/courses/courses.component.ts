import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  titulo: string = 'Lista de cursos';
  anchoImagen: string = '40px';
  @ViewChild('filtro', {static: false})
  filtro: ElementRef;
  textoFiltro: string = '';
  cursos : any[] = [
    {
      id: 1,
      name: 'TypeScript desde cero',
      startDate: 'Agosto 10, 2019',
      description : 'Lleva a JavaScript al siguiente nivel con tipado estatico',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.png'
    },
    {
      id: 2,
      name: 'Angular desde cero',
      startDate: 'Septiembre 10, 2019',
      description : 'Aprende El framework con más demanda laboral',
      price: 25.99,
      rating: 5,
      imageUrl: 'assets/images/angular.png'
    },
    {
      id: 3,
      name: 'Formularios y API´s con angular',
      startDate: 'Octubre 10, 2019',
      description : 'Aprende a consumir api rest',
      price: 25.99,
      rating: 4,
      imageUrl: 'assets/images/angular.png'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.filtro.nativeElement.value = "Angular";
  }

  onEditCurso(curso: Curso){
    console.log('[Courses Edit]', curso);
    //Redireccion: courses/{curso.id}
    this.router.navigate([`courses/${curso.id}`]);
  }

  onDeleteCurso(curso: Curso){
    console.log('[Courses Delete]', curso);
    this.cursos = this.cursos.filter((c: Curso) => {
      return c.id !== curso.id;
    })
  }
}
