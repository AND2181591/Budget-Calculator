import { NgModule } from "@angular/core";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
    imports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule, 
        MatButtonModule, 
        MatCardModule, 
        MatIconModule, 
        DragDropModule
    ], 
    exports: [
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule, 
        MatButtonModule, 
        MatCardModule, 
        MatIconModule, 
        DragDropModule
    ]
})
export class MaterialModule {}