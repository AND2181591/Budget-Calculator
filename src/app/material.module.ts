import { NgModule } from "@angular/core";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule, 
        MatButtonModule, 
        MatCardModule, 
        MatIconModule
    ], 
    exports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule, 
        MatButtonModule, 
        MatCardModule, 
        MatIconModule
    ]
})
export class MaterialModule {}