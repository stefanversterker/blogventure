const dateDisplay = {
    /*weekday: 'long',*/
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

function dateFormatter(t)  {
    return new Date(t).toLocaleDateString('nl-NL', dateDisplay);
}

export default dateFormatter;