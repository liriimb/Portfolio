document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.cert-image');
    const modalElement = document.getElementById('certificateModal');
    const modal = new bootstrap.Modal(modalElement);
    const enlargedCertificate = document.getElementById('enlargedCertificate');

    certificates.forEach((cert) => {
        cert.addEventListener('click', () => {
            console.log("Image clicked!");
            enlargedCertificate.src = cert.src;
            modal.show();
        });
    });
});