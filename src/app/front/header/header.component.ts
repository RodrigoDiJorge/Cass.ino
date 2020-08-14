import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private el: ElementRef) { }
  Jogos;
  Regras;

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.Jogos = document.getElementById('hcbn-Jogos');
    this.Regras = document.getElementById('hcbn-Regras');
  }
  showNav(ind)
  {
    switch(ind)
    {
      case 1:
        this.Jogos.style.display = "block";
        break;
      case 2:
        this.Regras.style.display = "block";
        break;
    }
  }
  hideNav(ind)
  {
    let elementos = document.getElementById("hcbn-Jogos");
    switch(ind)
    {
      case 1:
        this.Jogos.style.display = "none";
        break;
      case 2:
        this.Regras.style.display = "none";
        break;
    }
  }
}
