function closeAnySuggestions(element) {
    if (element.classList.contains('input-suggestions') === false) {
        const elements = document.querySelectorAll('.input-suggestions-items');

        if (elements.length > 0) {
            elements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }
}

document.onclick = (event) => closeAnySuggestions(event.target);

function showSuggestions(element, suggestions, values, callback) {
    element.classList.remove('error');
    callback();
    suggestions.innerHTML = '';
    let value = element.value;
    const items = Object.values(values)

    if (value) {
        const matches = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));

        if (matches.length > 0) {
            suggestions.style.display = 'block';

            matches.slice(0, 4).forEach(match => {
                const div = document.createElement('div');
                div.textContent = match.toUpperCase();
                div.classList.add('input-suggestion-item');
                div.onclick = () => {
                    element.value = match;
                    suggestions.innerHTML = '';
                };
                suggestions.appendChild(div);
            });
        } else {
            suggestions.style.display = 'none';
        }
    }
}

function validateSuggestions(element, values, callback) {
    setTimeout(function () {
        if (element.value === '') {
            element.classList.remove('error');
            callback(false);
            return;
        }

        const items = Object.values(values)

        const matches = items.filter(item => item.toLowerCase() === element.value.toLowerCase());

        if (matches.length > 0) {
            element.classList.remove('error');
            callback(true);
        } else {
            element.classList.add('error');
            callback(false);
        }
    }, 200);
}