self.addEventListener('message', function(event) {
    // Récup
    var data = JSON.parse(event.data);
    // Vérif
    if (data.action === 'fetch') {
        fetch(data.url).then(async function(response) {
            var text = await response.json();
            // Envoi
            event.source.postMessage(JSON.stringify(text));
        });
    }
});
