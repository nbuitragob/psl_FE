import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debug } from 'util';
import { Theme } from '../models/Theme';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  newTopicForm: FormGroup;

  modalNewEditTopicVisibility = false;

  val3 = 3;

  selectedTheme = { id: 871, nombre: 'Deseño', description: 'Diseño con Gara.', nivel: 2 };

  themeSearched: Theme[];
  val: any;
  results: any[];
  visibility = false;

  nivel: number;
  observation: string;
  nombre: string;

  menuItems: MenuItem[];
  activeItem: MenuItem;

  themes = [
    { id: 1, nombre: 'Bases 1', description: 'jdbdwfbjw fjwf wjhfhj fuh', nivel: 2 },
    { id: 2, nombre: 'Bases 2', description: 'jdbdwfbjw fjwf wjhfhj fuh', nivel: 1 },
    { id: 3, nombre: 'Bases 3', description: 'jdbdwfbjw fjwf wjhfhj fuh', nivel: 3 },
  ];

  allThemes = [
    new Theme(3, "Prolog", "Materia prolog", 2),
    new Theme(23, "Calculo 1", "Materia Calculo 1", 1)
  ];

  
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];
  brand: string;

  masterThemesPSL: Theme[] = [
    new Theme("Fisica 1", "Materia Fisica 1",  178,  3)
  ];
  filteredThemesPSL: any[];
  themePSL: Theme;

  constructor(
    private fBuilder: FormBuilder,
  ) {
    this.themeSearched = [];
  }

  ngOnInit() {
    this.newTopicForm = this.fBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.menuItems = [
      {label: 'All Themes', icon: 'fa-bar-chart', 
        command: (event) => {
          this.activeItem = this.menuItems[0];
        }
      },
      {label: 'Themes For Learning', icon: 'fa-calendar',
        command: (event) => {
          this.activeItem = this.menuItems[1];
        }
      },
      {label: 'Themes For Theaching', icon: 'fa-book',
        command: (event) => {
          this.activeItem = this.menuItems[2];
        }
      },
    ];
    this.activeItem = this.menuItems[2];
  }

  newEdittopic(event) {
    this.modalNewEditTopicVisibility = true;
  }

  searchThemes(event) {
    debugger;
    this.themeSearched = [];
    for (let i = 0; i < this.allThemes.length; i++) {
      const theme = this.allThemes[i];
      if (theme.nombre.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.themeSearched.push(theme);
      }
    }
  }

  search(event) {
    this.results = [];
    for (let i = 0; i < this.allThemes.length; i++) {
      const theme = this.allThemes[i];
      if (theme.nombre.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.results.push(theme);
      }
    }
  }

  add() {
    const aux: any = this.val;
    this.themes.push(aux);
    this.val = [];
    this.visibility = false;
  }
  selected(event) {
    this.visibility = true;
  }

  newTopic() {
    this.allThemes.push({ id: 178, nombre: this.nombre, description: this.observation, nivel: this.nivel });
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

  filterBrandsPSL(event) {
    this.filteredThemesPSL = [];
    for (let i = 0; i < this.masterThemesPSL.length; i++) {
      Theme brand = this.masterThemesPSL[i];
      if (brand.nombre.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredThemesPSL.push(brand);
      }
    }
  }


}
