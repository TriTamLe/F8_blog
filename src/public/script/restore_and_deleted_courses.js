var courseID;
var restoreForm = document.forms['restore-form'];
var destroyForm = document.forms['destroy4ever-form'];

//restore
var restoreBtns = document.getElementsByName('btn-restore');
restoreBtns.forEach(btn => {
  btn.onclick = function (e) {
    e.preventDefault();
    courseID = btn.getAttribute('data-bs-id');
    console.log('data-bs-id', courseID);
    restoreForm.action = '/course/' + courseID + '/restore?_method=PATCH';
    restoreForm.submit();
  };
});

//destroy:
const deleteConfirmModal = document.getElementById('modal-confirm-destroy');

deleteConfirmModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  courseID = button.getAttribute('data-bs-id');
});

const btnDeleteConfirm = document.getElementById('btn-destroy-confirm');

btnDeleteConfirm.onclick = function () {
  destroyForm.action = '/course/' + courseID + '/destroy' + '?_method=DELETE';
  destroyForm.submit();
};
