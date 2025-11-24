const popupContentElement = document.getElementById('myPopupContent');

popupContentElement.innerHTML = '<h2>New Title</h2><p>This is dynamic text for the popup.</p>';

document.getElementById('openPopupBtn').addEventListener('click', function() {
    popupContentElement.textContent = 'Text for Button 1';
});

function openPopup() {
  document.getElementById("myPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}