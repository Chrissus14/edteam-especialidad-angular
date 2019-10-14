import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titulo: string = 'Lista de cursos';
  anchoImagen: string = '40px';
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

  constructor() { }

  ngOnInit() {
  }

  editarCurso(curso: any){
    console.log('Edit', curso);
  }

  eliminarCurso(curso: any){
    console.log('Eliminar', curso);
  }

  onMouseOver(event: any){
    console.log('Mouse Over', event);
  }

  onDobleClick(event: any){
    console.log('Doble Click', event);
  }

}
