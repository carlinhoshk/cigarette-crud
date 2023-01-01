import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    name: '',
    price: 0,
    imageUrl: ''
  }
  fileInput: any;
 
  constructor(private productService: ProductService, 
    private router: Router){ }

  ngOnInit(): void {
  
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Cigarro salvo')
      this.router.navigate(['/products'])
    })
    
  }
  cancela(): void{
    this.router.navigate(['/products'])
  }

  chooseFile() {
    this.fileInput.nativeElement.click();
  }
  
  uploadFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.product.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  
  
}
