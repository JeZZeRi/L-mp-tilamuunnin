function muunna() {
    const lampotilaInput = document.getElementById('lampotila').value;
    const muunnosTyyppi = document.getElementById('muunnos').value;
    const tulosElementti = document.getElementById('tulos');
    const desimaalit = document.querySelector('input[name="desimaali"]:checked') ? document.querySelector('input[name="desimaali"]:checked').value : '2';

    tulosElementti.classList.remove('virhe');
    tulosElementti.textContent = '';

    if (lampotilaInput === '') {
        tulosElementti.textContent = 'Anna lämpötila.';
        tulosElementti.classList.add('virhe');
        return;
    }

    const lampotila = parseFloat(lampotilaInput);
    if (isNaN(lampotila)) {
        tulosElementti.textContent = 'Lämpötilan täytyy olla lukuarvo.';
        tulosElementti.classList.add('virhe');
        return;
    }

    if (muunnosTyyppi === 'CtoF' && lampotila < -273.15) {
        tulosElementti.textContent = 'Lämpötila ei voi olla pienempi kuin -273.15 °C (absoluuttinen nollapiste).';
        tulosElementti.classList.add('virhe');
        return;
    } else if (muunnosTyyppi === 'FtoC' && lampotila < -459.67) {
        tulosElementti.textContent = 'Lämpötila ei voi olla pienempi kuin -459.67 °F (absoluuttinen nollapiste).';
        tulosElementti.classList.add('virhe');
        return;
    }

    let tulos;
    if (muunnosTyyppi === 'CtoF') {
        tulos = (lampotila * 9/5) + 32;
        tulosElementti.textContent = `${lampotila.toFixed(desimaalit)} °C = ${tulos.toFixed(desimaalit)} °F`;
    } else if (muunnosTyyppi === 'FtoC') {
        tulos = (lampotila - 32) * 5/9;
        tulosElementti.textContent = `${lampotila.toFixed(desimaalit)} °F = ${tulos.toFixed(desimaalit)} °C`;
    }
}