let firstSelectedSeat = null;
let totalSeats = document.querySelectorAll('.seat').length;
let selectedSeats = 0;

document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (this.classList.contains('occupied')) {
            console.log('This seat is already occupied.');
            return;
        }

        if (firstSelectedSeat === null) {
            this.classList.add('selected');
            firstSelectedSeat = this;
            selectedSeats++;
            console.log(`You selected seat ${this.id}`);
        } else {
            firstSelectedSeat.classList.remove('selected');
            firstSelectedSeat.classList.add('occupied');

            this.classList.add('selected');
            firstSelectedSeat = this;
            selectedSeats++;
            console.log(`You selected seat ${this.id}`);
        }

        if (selectedSeats === totalSeats) {
            document.getElementById('message').textContent = 'All seats are taken. No seats available for selection.';
        }
    });
});
