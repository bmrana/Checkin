import { NgModule } from '@angular/core';
import { MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdListModule,
        MdGridListModule,
        MdCardModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdSnackBarModule,
        MdCheckboxModule } from '@angular/material';

@NgModule({
    imports: [ MdButtonModule,
                MdInputModule,
                MdToolbarModule,
                MdListModule,
                MdGridListModule,
                MdCardModule,
                MdIconModule,
                MdProgressSpinnerModule,
                MdSnackBarModule,
                MdCheckboxModule ],
    exports: [ MdButtonModule,
                MdInputModule,
                MdToolbarModule,
                MdListModule,
                MdGridListModule,
                MdCardModule,
                MdIconModule,
                MdProgressSpinnerModule,
                MdSnackBarModule,
                MdCheckboxModule ]
})
export class MaterialModule { }
