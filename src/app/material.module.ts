import { NgModule } from '@angular/core';
import { MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdListModule,
        MdGridListModule,
        MdCardModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdSnackBarModule } from '@angular/material';

@NgModule({
    imports: [ MdButtonModule,
                MdInputModule,
                MdToolbarModule,
                MdListModule,
                MdGridListModule,
                MdCardModule,
                MdIconModule,
                MdProgressSpinnerModule,
                MdSnackBarModule ],
    exports: [ MdButtonModule,
                MdInputModule,
                MdToolbarModule,
                MdListModule,
                MdGridListModule,
                MdCardModule,
                MdIconModule,
                MdProgressSpinnerModule,
                MdSnackBarModule ]
})
export class MaterialModule { }
