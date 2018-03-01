import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <div class="jumbotron">
      <div class="container">
        <h1 class="text-center">ERROR 404</h1>
        <p class="text-center">Página web no encontrada</p>
      </div>
    </div>
  `,
})
export class PageNotFoundComponent { }
