import { Component, OnInit } from '@angular/core';
import { Data } from './elektronik.interface';
import { ElektronikService } from './elektronik.service';
@Component({
  selector: 'app-elektronik',
  templateUrl: './elektronik.component.html',
  styleUrls: ['./elektronik.component.scss']
})

export class ElektronikComponent implements OnInit{
  productEl : Data[] = []
  constructor(private elektronikService : ElektronikService){}

  ngOnInit(): void {
    this.elektronikService.getProductEl().subscribe((res)=>{
      this.productEl = res
      console.log(res)
    })
  }
}