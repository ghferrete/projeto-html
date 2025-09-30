const preview = document.getElementById('preview');
const iniciarBtn = document.getElementById('iniciar');
const pararBtn = document.getElementById('parar');
const downloadLink = document.getElementById('download');

let mediaRecorder;
let gravacao = [];

iniciarBtn.addEventListener('click', async () => {
    try {
        // Remova o 'mediaSource', pois não é padrão e causa problemas em navegadores móveis.
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true // Para gravar apenas a tela, sem áudio do microfone.
        });

        preview.srcObject = stream;
        iniciarBtn.disabled = true;
        pararBtn.disabled = false;
        downloadLink.style.display = 'none';
        gravacao = [];

       // mediaRecorder = new MediaRecorder(stream);
        // Código ORIGINAL:
// mediaRecorder = new MediaRecorder(stream); 

// Código MODIFICADO (Tenta usar MP4 com H.264):
mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/mp4; codecs=avc1' // Tenta forçar o MP4 com H.264
});
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                gravacao.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(gravacao, {
                type: 'video/mp4'
            });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'gravacao.mp4';
            downloadLink.style.display = 'block';
            iniciarBtn.disabled = false;
            pararBtn.disabled = true;
        };

        mediaRecorder.start();
    } catch (error) {
        console.error("Erro ao iniciar a gravação: ", error);
        alert("Não foi possível iniciar a gravação da tela.");
    }
});

pararBtn.addEventListener('click', () => {
    mediaRecorder.stop();
    const tracks = preview.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    preview.srcObject = null;
});


