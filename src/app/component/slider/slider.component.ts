import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;



@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})



export class SliderComponent implements OnInit {


  @Input() anchura: number;
  @Input('prueba') nombres: string;
  @Output() pruebaOutput = new EventEmitter();

  public widh: number;
  public autor: {};

  constructor() {
    this.autor = {
      nombre: 'Sergio Redondo',
      correo: 'sredondo95',
      edad: 24
    }
  }
  ngOnInit(): void {

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.anchura
    });

  }

  enviarOutput(event){
    console.log(event)
    this.pruebaOutput.emit(this.autor);
  }
  

}
