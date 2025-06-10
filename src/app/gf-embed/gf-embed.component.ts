import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gf-embed',
  templateUrl: './gf-embed.component.html',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  providers: [NgxExtendedPdfViewerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GfEmbedComponent {
  loading: boolean = false;
  email = '';
  constructor(private pdfService: NgxExtendedPdfViewerService, private route: ActivatedRoute) {

    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    this.route.data.subscribe(data => {
      this.email = data['Email'];
      // You can now use the email value as needed
      console.log('Email from route data:', this.email);
    });
    
    }
}
