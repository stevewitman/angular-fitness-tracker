import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material"
import { MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class MaterialModule {}
