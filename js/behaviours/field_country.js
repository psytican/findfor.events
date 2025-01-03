document.getElementById('country')
    .addEventListener('input', (event) => showSuggestions(
        event.target,
        document.getElementById('country-suggestions'),
        countries,
        () => {
            document.getElementById('country-confirm-button').style.display = 'none'
        }
    ));

document.getElementById('country')
    .addEventListener('focusout', (event) => validateSuggestions(
        event.target,
        countries,
        (result) => {
            document.getElementById('country-confirm-button').style.display = result ? 'inline-block' : 'none'
        }
    ));
