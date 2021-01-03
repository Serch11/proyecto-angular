import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public widthToSlider: number;
  public prueba: string = "Sergio Redondo";
  public autor: string;
  public correo: string;

  @ViewChild('textos') textos;
  constructor() { }

  ngOnInit(): void {
    this.prueba = "Sergio andres Redondo";
    let forma_clasica = document.querySelector("#nombre").innerHTML;
    console.log(this.textos)
    setTimeout(() => {
      console.log(this.textos.nativeElement.textContent);
    }, 2)


  }

  cargar() {
    this.widthToSlider = this.widthSlider;
  }

  resetear() {
    this.widthSlider = null;
    this.widthToSlider = null;
  }

  getOutput(event) {
    this.autor = event.nombre;
    this.correo = event.correo;
  }
}