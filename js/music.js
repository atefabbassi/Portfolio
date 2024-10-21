		var isMuted = false; // Variable to track mute state
	
		function playMusic() {
			var music = document.getElementById('background-music');
			music.play().then(() => {
				console.log('Music is playing');
			}).catch(error => {
				console.error('Playback failed:', error);
				alert('Audio playback failed. Check the console for more information.');
			});
		}
	
		function muteMusic() {
			var music = document.getElementById('background-music');
			isMuted = !isMuted; // Toggle mute state
			music.muted = isMuted; // Set audio muted property
	
			// Change icon based on mute state
			var muteIcon = document.getElementById('mute-icon');
			if (isMuted) {
				muteIcon.classList.remove('fa-volume-up');
				muteIcon.classList.add('fa-volume-mute'); // Change to mute icon
			} else {
				muteIcon.classList.remove('fa-volume-mute');
				muteIcon.classList.add('fa-volume-up'); // Change to unmute icon
			}
		}
	