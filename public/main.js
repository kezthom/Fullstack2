
var trash = document.getElementsByClassName("trash");
var updateStatusButtons = document.getElementsByClassName("update-status");

Array.from(updateStatusButtons).forEach(function(button) {
    button.addEventListener('click', function() {
        const bookId = this.dataset.bookid;
        const newStatus = prompt('Enter new reading status:'); // You can use a modal or any UI element for user input

        if (newStatus !== null) {
            fetch(`/books/${bookId}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'status': newStatus,
                })
            })
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload(true);
            });
        }
    });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
