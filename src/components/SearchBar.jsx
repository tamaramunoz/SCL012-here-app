import React from 'react'

const SearchBar = () => {

    const AUTOCOMPLETION_URL = 'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json',
ajaxRequest = new XMLHttpRequest(),
query = '';

/**
 * If the text in the text box  has changed, and is not empty,
 * send a geocoding auto-completion request to the server.
 *
 * @param {Object} textBox the textBox DOM object linked to this event
 * @param {Object} event the DOM event which fired this listener
 */
function autoCompleteListener(textBox, event) {

    if (query != textBox.value){
        if (textBox.value.length >= 1){

            /**
             * A full list of available request parameters can be found in the Geocoder Autocompletion
             * API documentation.
             *
             */
            const params = '?' +
                'query=' +  encodeURIComponent(textBox.value) +   // The search text which is the basis of the query
                '&beginHighlight=' + encodeURIComponent('<mark>') + //  Mark the beginning of the match in a token.
                '&endHighlight=' + encodeURIComponent('</mark>') + //  Mark the end of the match in a token.
                '&maxresults=5' +  // The upper limit the for number of suggestions to be included
                // in the response.  Default is set to 5.
                '&apikey=' + 'kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig';
            ajaxRequest.open('GET', AUTOCOMPLETION_URL + params );
            ajaxRequest.send();
        }
    }
    query = textBox.value;
}

/**
 *  This is the event listener which processes the XMLHttpRequest response returned from the server.
*/
return (
        <div>
            
        </div>
    )
}

export default SearchBar
