import { Component, ViewChild, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('signatureCanvas') signatureCanvas: any;

  private signaturePad!: SignaturePad;

  ngAfterViewInit() {
    const canvas = this.signatureCanvas.nativeElement;
    this.signaturePad = new SignaturePad(canvas);
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  getSignatureAsBase64() {
    if (this.signaturePad.isEmpty()) {
      return null; // No hay firma para capturar
    }

    const signatureData = this.signaturePad.toDataURL(); // Convierte la firma en base64
    return signatureData;
  }
  captureSignature() {
    const signatureData = this.getSignatureAsBase64();
  
    if (signatureData) {
      // Aquí puedes manejar la firma en base64, por ejemplo, imprimir en la consola
      console.log('Firma en base64:', signatureData);
    } else {
      console.log('No hay firma para capturar.');
    }
  }
  
}
