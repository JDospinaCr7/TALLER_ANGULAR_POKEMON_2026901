import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
export class ResaltarPokemonDirective {

  @Input('appResaltarPokemon') colorBorde: string = '#FFD700';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.aplicarEfecto(`3px solid ${this.colorBorde}`, 'scale(1)', 'none');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.aplicarEfecto('1px solid #e0e0e0', 'scale(1.03)', '0 8px 16px rgba(0,0,0,0.15)');
  }

  aplicarEfecto(borde: string, escala: string, sombra: string){
    const elemento = this.el.nativeElement;
    elemento.style.border = borde;
    elemento.style.transform = escala;
    elemento.style.boxShadow = sombra;
    elemento.style.transition = 'all 0.25s ease-in-out';
  }
}