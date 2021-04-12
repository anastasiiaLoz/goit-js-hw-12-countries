import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
    requestIncomplete(){
        error({
            text: 'Too many matches found. Please enter a more specific query!'
        });
    },
    noMatchesFound(){
        error({
            text: 'No matches found. Please try again'
        });
    },
};