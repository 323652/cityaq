import { Injectable } from '@angular/core';

import { MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material';

@Injectable()
export class MessagingService {
    constructor(private matSnackBar: MatSnackBar) {}

    public error(msg: string): MatSnackBarRef<SimpleSnackBar> {
        return this.matSnackBar.open(msg, undefined, {
            duration: 3000
        });                
    }
}