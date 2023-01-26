var courseID;
var deleteForm = document.forms['delete-form'];

const deleteConfirmModal = document.getElementById('modal-confirm-delete');

deleteConfirmModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  courseID = button.getAttribute('data-bs-id');
});

const btnDeleteConfirm = document.getElementById('btn-delete-confirm');

btnDeleteConfirm.onclick = function () {
  deleteForm.action = '/course/' + courseID + '?_method=DELETE';
  deleteForm.submit();
};
