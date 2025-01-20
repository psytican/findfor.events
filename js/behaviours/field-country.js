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

document.getElementById('country-confirm-button')
    .addEventListener('click', (event) => {
        const country = document.getElementById('country');
        console.log(country.value, country.slug);
    });

