import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  perfil = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get f() {
    return this.perfil.controls;
  }

  enviar() {
    console.log('Estado del form:', this.perfil.status); 
    console.log('Errores:', this.perfil.errors);
    console.log('Controles:', this.perfil.controls);

    if (this.perfil.valid) {
      alert('✅ Registro exitoso');
      console.log(this.perfil.value);
      this.perfil.reset();
    } else {
      alert('Revisa los campos antes de enviar');
    }
  }
}
