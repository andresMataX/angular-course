import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red'
  private _mensaje: string = 'Este campo es el pepe'

  // @Input() classColor: string = 'text-red-500'
  // @Input() mensaje: string = ''
  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor
    this.setMensaje()
  }

  @Input() set classColor(valor: string) {
    this._color = valor
    this.setColor()
  }

  htmlElement: ElementRef<HTMLElement>

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const mensaje = changes['mensaje'].currentValue
    // this.htmlElement.nativeElement.innerText = mensaje
  }

  setColor() {
    this.htmlElement.nativeElement.classList.add(this._color, 'font-light')
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje
  }
}
