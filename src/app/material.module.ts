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
        MdCheckboxModule,
        MdProgressBarModule } from '@angular/material';

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
                MdCheckboxModule,
                MdProgressBarModule ],
    exports: [ MdButtonModule,
                MdInputModule,
                MdToolbarModule,
                MdListModule,
                MdGridListModule,
                MdCardModule,
                MdIconModule,
                MdProgressSpinnerModule,
                MdSnackBarModule,
                MdCheckboxModule,
                MdProgressBarModule ]
})
export class MaterialModule { }
