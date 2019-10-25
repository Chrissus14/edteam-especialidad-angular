import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  titulo = 'Lista de cursos';
  anchoImagen = '40px';
  @ViewChild('filtro', {static: false})
  filtro: ElementRef;
  private _textoFiltro: string;

  set textoFiltro(t: string) {
    this._textoFiltro = t;

    // filtrar cursos
    this.cursos = t ? this.filtrarCursos(t) : this.coursesService.getCursos();
  }

  get textoFiltro() {
    return this._textoFiltro;
  }
  cursos: Curso[];

  constructor(private router: Router, private coursesService: CoursesService) {  }

  ngOnInit() {
    this.cursos = this.coursesService.getCursos();
   }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto: string) {
    return this.cursos.filter((curso: Curso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0 );
  }

  onEditCurso(curso: Curso) {
    console.log('[Courses Edit]', curso);
    // Redireccion: courses/{curso.id}
    this.router.navigate([`courses/${curso.id}`]);
  }

  onDeleteCurso(curso: Curso) {
    console.log('[Courses Delete]', curso);
    this.cursos = this.cursos.filter((c: Curso) => {
      return c.id !== curso.id;
    });
  }
}
