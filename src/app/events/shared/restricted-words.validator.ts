import { AbstractControl, FormControl } from '@angular/forms';

//this is cool
export function restrictedWords(words: string[]){
    return (control: AbstractControl): {[key: string]: any} => {
        if(!words) return {}; //if no words, valid

        //get all invalid words that are in the control field, filter out any nulls from the .map call
        let invalidWords = words
            .map(w => control.value.includes(w) ? w : null)   
            .filter(w => w != null)

        //return the array of invalid words for error reporting
        return invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : {};
    }
}