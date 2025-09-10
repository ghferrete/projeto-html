const preview = document.getElementById('preview');
const iniciarBtn = document.getElementById('iniciar');
const pararBtn = document.getElementById('parar');
const downloadLink = document.getElementById('download');

let mediaRecorder;
let gravacao = [];

iniciarBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" }
        });

        preview.srcObject = stream;
        iniciarBtn.disabled = true;
        pararBtn.disabled = false;
        downloadLink.style.display = 'none';
        gravacao = [];

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                gravacao.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(gravacao, {
                type: 'video/webm'
            });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'gravacao.webm';
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